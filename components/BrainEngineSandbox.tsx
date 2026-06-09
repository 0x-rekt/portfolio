import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Cpu, Plus, Minus, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Node {
  x: number;
  y: number;
  id: string;
  activation: number;
  label: string;
}

interface BrainEngineSandboxProps {
  embeddedMode?: boolean;
}

export default function BrainEngineSandbox({ embeddedMode = false }: BrainEngineSandboxProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [synapseStrength, setSynapseStrength] = useState<number>(0.65);
  const [hiddenLayersCount, setHiddenLayersCount] = useState<number>(2);
  const [logs, setLogs] = useState<string[]>([
    'SYSTEM: Initialized cerebral canvas node solver.',
    'DIAGNOSTIC: Hardware telemetry bound: sub-10ms logic cycles.',
    'PROMPT: Select or hover a node to stimulate propagation pathway.'
  ]);
  const [classificationOutput, setClassificationOutput] = useState<number>(0.0);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] ${message}`, ...prev.slice(0, 5)]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 280);

    // Grid coordinates representation
    const layers: Array<Array<{
      x: number;
      y: number;
      id: string;
      activation: number;
      label: string;
    }>> = [];

    const buildLayers = () => {
      layers.length = 0;
      const layerSpacing = width / (2 + hiddenLayersCount);

      // 1. Input Layer contains 3 signals: sensory, coordinate, spatial
      const inputs = 3;
      const inputLayer: Node[] = [];
      for (let i = 0; i < inputs; i++) {
        inputLayer.push({
          x: layerSpacing * 0.5,
          y: (height / (inputs + 1)) * (i + 1),
          id: `in-${i}`,
          activation: 0,
          label: i === 0 ? 'X-COORD' : i === 1 ? 'Y-COORD' : 'TEMPORAL'
        });
      }
      layers.push(inputLayer);

      // 2. Hidden Layers
      for (let l = 0; l < hiddenLayersCount; l++) {
        const nodesInLayer = 4;
        const currentLayer: Node[] = [];
        for (let i = 0; i < nodesInLayer; i++) {
          currentLayer.push({
            x: layerSpacing * (0.5 + 1 + l),
            y: (height / (nodesInLayer + 1)) * (i + 1),
            id: `hid-${l}-${i}`,
            activation: 0,
            label: `N-${l}-${i}`
          });
        }
        layers.push(currentLayer);
      }

      // 3. Output Layer
      const outputs = 2;
      const outputLayer: Node[] = [];
      for (let i = 0; i < outputs; i++) {
        outputLayer.push({
          x: width - layerSpacing * 0.5,
          y: (height / (outputs + 1)) * (i + 1),
          id: `out-${i}`,
          activation: 0,
          label: i === 0 ? 'MOTION_X' : 'COGNITION_Y'
        });
      }
      layers.push(outputLayer);
    };

    buildLayers();

    // Signal dynamic feed-forward wave tracker
    const signals: Array<{
      from: { x: number; y: number; val: number };
      to: { x: number; y: number; targetNode: Node };
      progress: number;
      val: number;
    }> = [];

    const pushSignalsBetween = (l1: number, l2: number) => {
      if (l1 >= layers.length || l2 >= layers.length) return;
      const srcLayer = layers[l1];
      const destLayer = layers[l2];

      srcLayer.forEach((n1) => {
        if (n1.activation > 0.05) {
          destLayer.forEach((n2) => {
            signals.push({
              from: { x: n1.x, y: n1.y, val: n1.activation },
              to: { x: n2.x, y: n2.y, targetNode: n2 },
              progress: 0,
              val: n1.activation * synapseStrength * (0.6 + Math.random() * 0.4)
            });
          });
        }
      });
    };

    // User hover node interactions
    let lastStimulationTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Stimulate closest input node
      layers[0].forEach((node) => {
        const distance = Math.hypot(node.x - mouseX, node.y - mouseY);
        if (distance < 20) {
          const now = Date.now();
          if (now - lastStimulationTime > 150) {
            node.activation = 1.0;
            pushSignalsBetween(0, 1);
            addLog(`Stimulated input ${node.label} [v=1.00]`);
            lastStimulationTime = now;
          }
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Frame loops redrawing
    let signalPulseTicker = 0;
    const runFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto cycle inputs slightly in case playing
      if (isPlaying) {
        signalPulseTicker++;
        if (signalPulseTicker % 120 === 0) {
          const nodeToPulse = layers[0][Math.floor(Math.random() * layers[0].length)];
          nodeToPulse.activation = 0.8 + Math.random() * 0.2;
          pushSignalsBetween(0, 1);
          addLog(`Dynamic sensor query pulse: ${nodeToPulse.label}`);
        }
      }

      // Draw mathematical synaptic pathways (connections)
      for (let l = 0; l < layers.length - 1; l++) {
        const currentL = layers[l];
        const nextL = layers[l + 1];

        currentL.forEach((n1) => {
          nextL.forEach((n2) => {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            // Sync strength maps to line transparency
            ctx.strokeStyle = `rgba(204, 255, 0, ${0.03 + synapseStrength * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          });
        });
      }

      // Draw moving signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        if (isPlaying) {
          s.progress += 0.05; // speed step
        }

        const currX = s.from.x + (s.to.x - s.from.x) * s.progress;
        const currY = s.from.y + (s.to.y - s.from.y) * s.progress;

        // Draw light particle
        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(104, 245, 184, ${0.8 * (1 - s.progress)})`; // Emerald signal pulse
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#68f5b8';
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow

        // Signal reaches destination node
        if (s.progress >= 1) {
          s.to.targetNode.activation = Math.min(1.0, s.to.targetNode.activation + s.val * 0.7);
          
          // Trigger next layer feedforward
          const currLayerIndex = layers.findIndex((l) => l.includes(s.to.targetNode));
          if (currLayerIndex !== -1 && currLayerIndex < layers.length - 1) {
            pushSignalsBetween(currLayerIndex, currLayerIndex + 1);
          } else if (currLayerIndex === layers.length - 1) {
            // output layer resolved a value
            const finalScore = layers[layers.length - 1].reduce((sum, n) => sum + n.activation, 0) / 2;
            setClassificationOutput(Number(finalScore.toFixed(3)));
          }

          signals.splice(i, 1);
        }
      }

      // Draw neuron circles and visual levels
      layers.forEach((layer) => {
        layer.forEach((node) => {
          // Diminish activation slightly over time (decay rate)
          if (isPlaying && node.activation > 0) {
            node.activation *= 0.94;
          }

          // Connection circle background
          ctx.beginPath();
          ctx.arc(node.x, node.y, 9, 0, Math.PI * 2);
          ctx.fillStyle = node.activation > 0.05 
            ? `rgba(204, 255, 0, ${0.1 + node.activation * 0.4})` 
            : 'rgba(26, 26, 28, 0.9)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, 9, 0, Math.PI * 2);
          ctx.strokeStyle = node.activation > 0.05
            ? `rgba(204, 255, 0, ${0.4 + node.activation * 0.6})`
            : 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = node.activation > 0.05 ? 1.5 : 1;
          ctx.stroke();

          // Draw small active central light node
          if (node.activation > 0.05) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#CCFF00';
            ctx.fill();
          }
        });
      });

      animFrameId = requestAnimationFrame(runFrame);
    };

    runFrame();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 280;
      buildLayers();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying, synapseStrength, hiddenLayersCount]);

  const resetSimulator = () => {
    setClassificationOutput(0);
    addLog('SYSTEM FLAG: Flushed synaptic neurons back to dormant ground state.');
  };

  return (
    <div className={`p-5 rounded-none border border-white/10 bg-[#141416]/95 flex flex-col justify-between ${embeddedMode ? 'w-full' : 'max-w-4xl mx-auto'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4 mb-4 gap-4 text-left">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#CCFF00]" />
            <h4 className="font-display font-medium text-[#e5e2e3] text-sm">Hardware Neural Synapse Core</h4>
          </div>
          <p className="text-[11px] text-[#bbc9cf] font-mono mt-1">
            FORWARD PROPAGATION EMULATOR &amp; WEIGHT COUPLING
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
          {/* Play / Pause */}
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="ghost"
            className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 bg-white/5 hover:bg-[#CCFF00]/10 hover:border-[#CCFF00]/40 hover:text-[#CCFF00] rounded-none text-white/80 transition-all cursor-pointer h-auto font-mono text-xs"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                PAUSE
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                RESUME
              </>
            )}
          </Button>

          {/* Reset */}
          <Button
            onClick={resetSimulator}
            variant="ghost"
            size="icon"
            className="p-1 px-2 border border-white/10 bg-white/5 hover:border-red-400/40 hover:text-red-400 rounded-none text-white/50 transition-all cursor-pointer h-auto w-auto"
            title="Reset Neuron States"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Playable Canvas Simulation Stage */}
        <div className="md:col-span-8 bg-[#0A0A0B] rounded-sm border border-white/5 relative min-h-[280px] overflow-hidden flex flex-col">
          <canvas ref={canvasRef} className="flex-1 w-full" />
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur px-2.5 py-1 rounded border border-white/10 text-[9px] font-mono text-white/50 pointer-events-none select-none">
            INJECT STIMULUS: HOVER ON NODES
          </div>
        </div>

        {/* Real-time Parameters & Console feedback panel */}
        <div className="md:col-span-4 flex flex-col gap-4 text-left">
          {/* Output Diagnostics Display */}
          <div className="bg-[#1C1C1F] rounded-none p-4 border border-white/5 font-mono text-xs space-y-3">
            <span className="text-[9px] text-[#CCFF00] uppercase font-bold tracking-widest block border-b border-white/5 pb-1.5">
              COGNITIVE OUTPUT
            </span>
            <div className="flex justify-between items-center py-1">
              <span className="text-white/40 font-mono text-[10px]">TENSOR_RESOLVE:</span>
              <span className="text-xl font-bold font-mono text-[#68f5b8] bg-[#68f5b8]/5 px-2.5 py-1 rounded-none border border-[#68f5b8]/15">
                {classificationOutput > 0 ? classificationOutput : 'DORMANT'}
              </span>
            </div>
          </div>

          {/* Hyperparameters Dialers */}
          <div className="bg-white/2 rounded-none p-4 border border-white/5 space-y-4">
            <span className="text-[9px] text-white/40 uppercase font-black font-mono tracking-widest block border-b border-white/5 pb-1">
              HYPERPARAMETERS
            </span>

            {/* Hidden layers count selector */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-mono text-[10px]">
                <span className="text-white/40">HIDDEN MODULES:</span>
                <span className="text-[#CCFF00] font-bold">{hiddenLayersCount} BLOCKS</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={hiddenLayersCount <= 1}
                  onClick={() => {
                    setHiddenLayersCount((prev) => prev - 1);
                    addLog('Removed hidden layer stack block.');
                  }}
                  className="p-1 w-7 h-7 border border-white/10 rounded-none hover:border-white/20 hover:bg-white/5 disabled:opacity-30 cursor-pointer bg-transparent text-white"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <div className="flex-1 text-center font-mono text-[11px] text-white/80">
                  Layers Count
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  disabled={hiddenLayersCount >= 4}
                  onClick={() => {
                    setHiddenLayersCount((prev) => prev + 1);
                    addLog('Appended additional hidden neural cells block.');
                  }}
                  className="p-1 w-7 h-7 border border-white/10 rounded-none hover:border-white/20 hover:bg-white/5 disabled:opacity-30 cursor-pointer bg-transparent text-white"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Synaptic Weights coupling — Shadcn Slider */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between font-mono text-[10px] items-center">
                <span className="text-white/40">SYNAPSE WEIGHTS:</span>
                <span className="text-[#d0bcff] font-bold">{(synapseStrength * 100).toFixed(0)}% WT</span>
              </div>
              <Slider
                min={0.1}
                max={1.5}
                step={0.05}
                value={[synapseStrength]}
                onValueChange={(val) => {
                  setSynapseStrength(val[0]);
                  addLog(`Synapse coefficient modified: ${val[0].toFixed(2)}x`);
                }}
                className="w-full [&_[data-slot=slider-track]]:bg-white/10 [&_[data-slot=slider-range]]:bg-[#d0bcff] [&_[data-slot=slider-thumb]]:border-[#d0bcff] [&_[data-slot=slider-thumb]]:bg-[#d0bcff] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Logging Terminal — Shadcn ScrollArea */}
      <div className="border-t border-white/5 mt-4 pt-3 text-left">
        <span className="font-mono text-[9px] text-white/30 tracking-widest block mb-2 uppercase flex items-center gap-1">
          <Hash className="w-2.5 h-2.5" /> LIVE RECEPTOR INTERACTION STREAMS
        </span>
        <ScrollArea className="bg-[#050506] rounded-none p-3 h-[75px] border border-white/5 font-mono text-[10px] text-white/40">
          <div className="flex flex-col-reverse gap-1">
            {logs.map((log, index) => (
              <div key={index} className="truncate select-text">
                <span className="text-[#CCFF00]">&gt;</span> {log}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
