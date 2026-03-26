"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, MapPin, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

interface GHUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

const GH_USERNAME = "0x-rekt";

const LEVEL_COLOR: Record<number, string> = {
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const StatPill = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: number | string;
}) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161b22] border border-[#30363d] text-[#8b949e] text-xs font-mono">
    <Icon className="w-3.5 h-3.5 text-[#7d8590]" />
    <span className="text-[#e6edf3] font-semibold">{value}</span>
    <span>{label}</span>
  </div>
);

const ContributionGraph = ({
  weeks,
  totalCount,
}: {
  weeks: ContributionWeek[];
  totalCount: number;
}) => {
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
  } | null>(null);

  const monthLabels: { label: string; pct: number }[] = [];
  weeks.forEach((week, wi) => {
    const firstDay = week.contributionDays.find((d) => d.date);
    if (firstDay) {
      const d = new Date(firstDay.date);
      if (d.getDate() <= 7) {
        const last = monthLabels[monthLabels.length - 1];
        if (!last || last.label !== MONTHS[d.getMonth()]) {
          monthLabels.push({
            label: MONTHS[d.getMonth()],
            pct: (wi / weeks.length) * 100,
          });
        }
      }
    }
  });

  return (
    <div className="w-full">
      <p className="text-[11px] text-[#484f58] font-mono mb-2 text-right">
        {totalCount.toLocaleString()} contributions in the last year
      </p>

      <div className="flex w-full gap-1.5">
        <div
          className="flex flex-col justify-around shrink-0 pb-0.5"
          style={{ width: 22 }}
        >
          {DAY_LABELS.map((d, i) => (
            <span
              key={i}
              className="text-[9px] text-[#484f58] font-mono text-right leading-none select-none"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-0.5">
          <div className="relative h-4 w-full">
            {monthLabels.map(({ label, pct }) => (
              <span
                key={`${label}-${pct}`}
                className="absolute text-[9px] text-[#7d8590] font-mono select-none"
                style={{ left: `${pct}%` }}
              >
                {label}
              </span>
            ))}
          </div>

          <div
            className="grid w-full relative"
            style={{
              gridTemplateColumns: `repeat(${weeks.length}, 1fr)`,
              gridTemplateRows: "repeat(7, 1fr)",
              gap: "2px",
              aspectRatio: `${weeks.length} / 7`,
            }}
          >
            {Array.from({ length: 7 }, (_, di) =>
              weeks.map((week, wi) => {
                const day = week.contributionDays[di];
                if (!day || !day.date) {
                  return (
                    <div
                      key={`${wi}-${di}`}
                      className="rounded-[2px]"
                      style={{
                        backgroundColor: LEVEL_COLOR[0],
                        outline: "1px solid rgba(255,255,255,0.04)",
                      }}
                    />
                  );
                }
                const dateStr = new Date(day.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
                return (
                  <div
                    key={`${wi}-${di}`}
                    onMouseEnter={() =>
                      setHoveredDay({ date: dateStr, count: day.count })
                    }
                    onMouseLeave={() => setHoveredDay(null)}
                    className="rounded-[2px] cursor-default transition-transform hover:scale-125 hover:z-20 relative"
                    style={{
                      backgroundColor: LEVEL_COLOR[day.level],
                      outline: "1px solid rgba(255,255,255,0.06)",
                    }}
                  />
                );
              }),
            )}

            {hoveredDay && (
              <div
                className="absolute bg-[#162338] border border-[#30363d] rounded-lg px-3 py-2 text-[12px] font-mono text-[#8b949e] whitespace-nowrap pointer-events-none z-50"
                style={{
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginBottom: "8px",
                }}
              >
                <div className="text-[#e6edf3] font-semibold">
                  {hoveredDay.count} contribution
                  {hoveredDay.count !== 1 ? "s" : ""}
                </div>
                <div className="text-[11px] text-[#7d8590]">
                  {hoveredDay.date}
                </div>
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
                  style={{ borderTopColor: "#162338" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-2">
        <span className="text-[10px] text-[#484f58] font-mono select-none">
          Less
        </span>
        {[0, 1, 2, 3, 4].map((l) => (
          <div
            key={l}
            className="rounded-[2px] w-2.5 h-2.5"
            style={{
              backgroundColor: LEVEL_COLOR[l],
              outline: "1px solid rgba(255,255,255,0.06)",
            }}
          />
        ))}
        <span className="text-[10px] text-[#484f58] font-mono select-none">
          More
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  const [ghUser, setGhUser] = useState<GHUser | null>(null);
  const [contribWeeks, setContribWeeks] = useState<ContributionWeek[]>([]);
  const [totalContribs, setTotalContribs] = useState(0);
  const [loadingGraph, setLoadingGraph] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GH_USERNAME}`)
      .then((r) => r.json())
      .then(setGhUser)
      .catch(() => {});

    fetch(
      `https://github-contributions-api.jogruber.de/v4/${GH_USERNAME}?y=last`,
    )
      .then((r) => r.json())
      .then((data) => {
        const days: ContributionDay[] = data.contributions ?? [];
        const total: number = Object.values(
          (data.total ?? {}) as Record<string, number>,
        ).reduce((acc, v) => acc + v, 0);

        const weeks: ContributionWeek[] = [];
        let week: ContributionDay[] = [];
        days.forEach((day, i) => {
          const dow = new Date(day.date).getDay();
          if (i === 0 && dow !== 0) {
            for (let p = 0; p < dow; p++)
              week.push({ date: "", count: 0, level: 0 });
          }
          week.push(day);
          if (week.length === 7) {
            weeks.push({ contributionDays: week });
            week = [];
          }
        });
        if (week.length > 0) {
          while (week.length < 7) week.push({ date: "", count: 0, level: 0 });
          weeks.push({ contributionDays: week });
        }

        setContribWeeks(weeks);
        setTotalContribs(total);
        setLoadingGraph(false);
      })
      .catch(() => setLoadingGraph(false));
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div
      id="hero"
      className="relative w-full min-h-[90vh] flex items-center justify-center px-4 py-12 bg-[#0d1117] overflow-hidden"
    >
      <DottedGlowBackground
        className="absolute inset-0 z-0"
        gap={24}
        radius={1.5}
        darkColor="rgba(48, 54, 61, 0.9)"
        darkGlowColor="rgba(47, 129, 247, 0.75)"
        opacity={0.55}
        speedMin={0.3}
        speedMax={0.9}
        speedScale={0.7}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute top-30 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full z-1"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,129,247,0.10) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto w-full space-y-8"
      >
        <motion.div variants={item} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#30363d] bg-[#21262d]/70 text-[#8b949e] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
            Open to new opportunities
          </div>
        </motion.div>

        <motion.div variants={item} className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e6edf3] leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-[#2f81f7] relative">
              Sowdarjya Kolay
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-[#2f81f7]/0 via-[#2f81f7] to-[#2f81f7]/0"
              />
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-base text-[#8b949e] font-mono mt-6">
            <span className="text-[#e6edf3]">
              Full Stack Developer &amp; AI Engineer
            </span>
            <span className="hidden md:block text-[#30363d]">·</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#7d8590]" />
              <span>Kolkata, IN</span>
            </div>
          </div>

          <p className="max-w-lg mx-auto text-sm text-[#7d8590] leading-relaxed">
            Building scalable web apps and intelligent systems with Next.js,
            TypeScript, Python, and whatever the problem demands.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-6"
        >
          <Link
            href={`https://github.com/${GH_USERNAME}`}
            target="_blank"
            className="text-[#7d8590] hover:text-[#e6edf3] transition-colors hover:scale-110 transform duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sowdarjya-kolay-616176314"
            target="_blank"
            className="text-[#7d8590] hover:text-[#e6edf3] transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/_Kolayyyyyyy__"
            target="_blank"
            className="text-[#7d8590] hover:text-[#e6edf3] transition-colors hover:scale-110 transform duration-200"
            aria-label="X / Twitter"
          >
            <FaXTwitter className="w-5 h-5" />
          </Link>
        </motion.div>

        {ghUser && (
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            <StatPill
              icon={BookOpen}
              label="repos"
              value={ghUser.public_repos}
            />
            <StatPill icon={Users} label="followers" value={ghUser.followers} />
            <StatPill icon={Users} label="following" value={ghUser.following} />
          </motion.div>
        )}

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#projects"
            className="px-5 py-2 bg-[#238636] border border-[#2ea043]/60 text-white rounded-md text-sm font-medium hover:bg-[#2ea043] transition-colors shadow-sm"
          >
            View Work
          </Link>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="px-5 py-2 bg-[#21262d] border border-[#30363d] text-[#c9d1d9] rounded-md text-sm font-medium hover:bg-[#30363d] hover:border-[#8b949e] transition-colors shadow-sm"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="p-4 rounded-lg border border-[#30363d] bg-[#161b22]/60"
        >
          {loadingGraph ? (
            <div className="space-y-2">
              <div className="h-3 w-52 ml-auto rounded bg-[#21262d] animate-pulse" />
              <div className="h-28 w-full rounded bg-[#21262d] animate-pulse" />
              <div className="h-3 w-32 ml-auto rounded bg-[#21262d] animate-pulse" />
            </div>
          ) : contribWeeks.length > 0 ? (
            <ContributionGraph
              weeks={contribWeeks}
              totalCount={totalContribs}
            />
          ) : (
            <p className="text-center text-xs text-[#484f58] font-mono py-6">
              Could not load contribution data.
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
