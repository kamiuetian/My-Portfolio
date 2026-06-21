"use client";

import React from "react";
import Title from "./ui/Title";
import { config } from "@/constant";
import SubTitle from "./ui/SubTitle";
import Paragraph from "./ui/Paragraph";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Button from "./ui/Button";
import { ArrowTopRightIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import type { ProjectRecord } from "@/lib/projects";
import ProjectVisual from "./ProjectVisual";

interface ProjectsProps {
  projects: ProjectRecord[];
}

function Projects({ projects }: ProjectsProps) {
  const router = useRouter();

  return (
    <div className="py-12 flex flex-col lg:items-center" id="portfolio">
      <div className="lg:text-center">
        <Title title={config.portfolio.title} />
        <SubTitle title={config.portfolio.subTitle} />
        <Paragraph content={config.portfolio.content} />
        <div className="inline-block" data-aos="fade-up">
          <Button
            onClick={() => {
              router.push("/projects");
            }}
          >
            <span className="mr-1">
              <EyeOpenIcon />
            </span>{" "}
            View all Projects
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <Carousel
          opts={{
            align: "start",
          }}
          data-aos="fade-in"
          className="w-full max-w-sm md:max-w-5xl m-auto"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="md:basis-1/2 lg:basis-1/3"
                data-aos="fade-up"
              >
                <div className="p-1 h-full">
                  <Card className="p-0 h-full rounded-lg overflow-hidden shadow-sm">
                    <CardContent className="p-0">
                      <ProjectVisual project={project} />
                    </CardContent>
                    <CardHeader className="p-5">
                      <CardTitle className="text-xl leading-snug">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-4">
                        {project.description}
                      </CardDescription>
                      {project.role ? (
                        <p className="pt-2 text-xs font-medium uppercase tracking-wide text-green-700">
                          {project.role}
                        </p>
                      ) : null}
                    </CardHeader>
                    <CardFooter className="flex flex-wrap gap-3 p-5 pt-0">
                      <Button
                        onClick={() => {
                          router.push(`/projects/${project.id}`);
                        }}
                      >
                        <EyeOpenIcon /> Details
                      </Button>
                      {project.url ? (
                        <Button
                          variant="plain"
                          onClick={() => {
                            window.open(
                              project.url,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                        >
                          Live site <ArrowTopRightIcon />
                        </Button>
                      ) : null}
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
