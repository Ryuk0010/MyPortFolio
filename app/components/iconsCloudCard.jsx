import IconCloud from "@/components/ui/iconCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "next",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "Hono",
  "C",
  "C++"
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[80rem] items-center justify-center overflow-hidden rounded-lg bg-slate-950 px-20 pt-16 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
