'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { PROJECTS, Project } from '@/lib/projects';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="scroll-mt-24 py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FEATURED WORK"
          title="Production"
          highlightText="Projects"
          subtitle="Real-world mobile applications built with Flutter, Provider state architecture, REST API integrations, and secure token lifecycle handling."
        />

        {/* 4 production projects responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Dedicated In-Depth Architecture Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseDetails}
        />
      </div>
    </section>
  );
}
