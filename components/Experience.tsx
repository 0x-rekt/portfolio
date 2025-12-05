"use client";
import { Timeline } from "./Timeline";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Trophy, Users, Code, Zap, Target } from "lucide-react";

const Experience = () => {
  const data = [
    {
      title: "September 2024 - September 2025",
      content: (
        <Card className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Web-Dev Co-Lead
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Leading web development initiatives and mentoring fellow
                  developers at Google Developer Groups AOT.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  <Users className="h-3 w-3 mr-1" />
                  Leadership
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "October 2024 - November 2024",
      content: (
        <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Campus Ambassador
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Represented and promoted Esummit&apos;24 at Jadavpur
                  University, engaging with students and organizing events.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  Event Management
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "January 2025 - March 2025",
      content: (
        <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Open Source Contributor
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Contributing to open source projects during Social Winter of
                  Code 2025, collaborating with developers worldwide.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                >
                  <Code className="h-3 w-3 mr-1" />
                  Open Source
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "March 2025",
      content: (
        <Card className="border-l-4 border-l-yellow-500 bg-gradient-to-r from-yellow-50 to-transparent dark:from-yellow-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  3rd Position - Decisia
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Secured third place in the competitive Decisia event at
                  Jadavpur University.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                >
                  <Trophy className="h-3 w-3 mr-1" />
                  Achievement
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "April 2025",
      content: (
        <Card className="border-l-4 border-l-indigo-500 bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Binary Hackathon Participant
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Participated in the Binary Hackathon at KGEC, showcasing
                  problem-solving and coding skills.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
                >
                  <Zap className="h-3 w-3 mr-1" />
                  Hackathon
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "April 2025",
      content: (
        <Card className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <Trophy className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  2nd Position - Gnosis Week
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Achieved second place in Gnosis Week competition at SCCSE-AOT,
                  demonstrating technical excellence.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                >
                  <Trophy className="h-3 w-3 mr-1" />
                  Runner-up
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "May 2025",
      content: (
        <Card className="border-l-4 border-l-teal-500 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                <Target className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Top 30 - Hack4Bengal 4.0
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Finished in the top 30 participants in Hack4Bengal 4.0 virtual
                  hackathon among hundreds of participants.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                >
                  <Target className="h-3 w-3 mr-1" />
                  Top Performer
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "June 2025",
      content: (
        <Card className="border-l-4 border-l-pink-500 bg-gradient-to-r from-pink-50 to-transparent dark:from-pink-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                <Zap className="h-5 w-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Hack4Bengal 4.0 Finalist
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Participated in the final round of Hack4Bengal 4.0, competing
                  with the best developers in the region.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300"
                >
                  <Zap className="h-3 w-3 mr-1" />
                  Finalist
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "July 2025 - August 2025",
      content: (
        <Card className="border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50 to-transparent dark:from-emerald-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <Code className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Ex-Blockchain Development Intern
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Worked as an intern at BlockSeBlock, gaining hands-on
                  experience in blockchain and web development.
                </p>
                <div className="flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                  >
                    <Code className="h-3 w-3 mr-1" />
                    Current Role
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-300"
                  >
                    Blockchain
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "September 2025 - Present",
      content: (
        <Card className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Core Member - Tech Team
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Serving as a core member of the tech team at Google Developer
                  Groups On Campus AOT, contributing to technical initiatives
                  and community building.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  <Users className="h-3 w-3 mr-1" />
                  Leadership
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "October 2025 - Present",
      content: (
        <Card className="border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-transparent dark:from-red-950/20 dark:to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <Code className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Core Member - Tech Team
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Active core member of the tech team at SC-ECE, involved in
                  technical projects and departmental activities.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                >
                  <Code className="h-3 w-3 mr-1" />
                  Technical
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
  ];

  return (
    <div className="min-h-screen" id="experience">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
