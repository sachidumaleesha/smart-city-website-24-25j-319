"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Presentation,
  Monitor,
  PieChart,
  FileBarChart,
  ClipboardList,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";

const presentations = [
  {
    title: "Proposal Presentation",
    description:
      "In this presentation, our group presented our concept to the panel as well as our supervisor.",
    icon: <Presentation className="text-green-500 size-10" />,
    link: "/presentations/proposal",
  },
  {
    title: "Progress Presentation 1",
    description:
      "The presentation we developed to demonstrate our system's 50% progress.",
    icon: <Monitor className="text-orange-500 size-10" />,
    link: "/presentations/progress-1",
  },
  {
    title: "Progress Presentation 2",
    description:
      "The presentation we developed to demonstrate our system's 90% development and the achievements we made.",
    icon: <PieChart className="text-pink-500 size-10" />,
    link: "/presentations/progress-2",
  },
  {
    title: "Final Presentation",
    description:
      "The presentation we developed to demonstrate our system's 100% development and the achievements we made.",
    icon: <FileBarChart className="text-yellow-500 size-10" />,
    link: "/presentations/final",
  },
  {
    title: "Poster",
    description:
      "An informative and visually engaging snapshot of the research project, highlighting objectives, methods, and findings.",
    icon: <ClipboardList className="text-blue-500 size-10" />,
    link: "/presentations/poster",
  },
  {
    title: "Demo",
    description:
      "A live demonstration showcasing the fully functional system, highlighting its features and real-life capabilities.",
    icon: <PlayCircle className="text-purple-500 size-10" />,
    link: "/presentations/demo",
  },
];

export default function Presentations() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-white tracking-wide">
        PRESENTATIONS
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-5xl mx-auto mt-2">
        Here you can explore the various presentations we have delivered
        throughout our research journey. These presentations serve as crucial
        moments for sharing our progress, concepts, and achievements with the
        audience, including the project panel and our supervisor.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {presentations.map((presentation, index) => (
          <Card
            key={index}
            className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader className="flex flex-col items-center text-center">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                {presentation.icon}
              </div>
              <CardTitle>
                <Link
                  href={presentation.link}
                  className="text-lg font-semibold text-blue-600 hover:underline"
                >
                  {presentation.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 dark:text-gray-300">
              {presentation.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
