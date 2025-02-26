"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FileText, FilePlus, FileCheck, Book, FileSignature, GraduationCap } from "lucide-react";
import Link from "next/link";

const documents = [
  {
    title: "Project Charter",
    description:
      "A formal, typically short document that describes the project in its entirety — including objectives and how it will be carried out.",
    icon: <FileText className="text-blue-500 size-10" />,
    link: "/documents/project-charter",
  },
  {
    title: "Project Proposal",
    description:
      "A core document that helps focus on the substance of the proposed plan, using an easy-to-follow project proposal outline.",
    icon: <FilePlus className="text-orange-500 size-10" />,
    link: "/documents/project-proposal",
  },
  {
    title: "Status Document 1",
    description:
      "Describes in detail how meetings were held with teammates and what was discussed, including GitLab commits.",
    icon: <FileCheck className="text-pink-500 size-10" />,
    link: "/documents/status-document-1",
  },
  {
    title: "Status Document 2",
    description:
      "Similar to Status Document 1, providing details on meeting discussions and progress tracking.",
    icon: <FileCheck className="text-yellow-500 size-10" />,
    link: "/documents/status-document-2",
  },
  {
    title: "Research Paper",
    description:
      "Academic writing based on original research, including analysis and interpretation of findings.",
    icon: <Book className="text-green-500 size-10" />,
    link: "/documents/research-paper",
  },
  {
    title: "Thesis",
    description:
      "A comprehensive document showcasing research findings, methodology, and expertise, contributing to academic insights.",
    icon: <GraduationCap className="text-purple-500 size-10" />,
    link: "/documents/thesis",
  },
];

export default function Documents() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
        DOCUMENTS
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-2">
        Here you can find a collection of essential documents that provide an overview of our research projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {documents.map((doc, index) => (
          <Card key={index} className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-col items-center text-center">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">{doc.icon}</div>
              <CardTitle>
                <Link href={doc.link} className="text-lg font-semibold text-blue-600 hover:underline">
                  {doc.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 dark:text-gray-300">
              {doc.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}