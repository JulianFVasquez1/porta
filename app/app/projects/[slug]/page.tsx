import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/lib/projects-data';
import ProjectDetailClient from '@/app/projects/[slug]/project-detail-client';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static routes at build time for all projects
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Dynamic SEO metadata per project
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Julián Vásquez`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.coverImageUrl || project.imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
