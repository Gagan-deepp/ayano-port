import { Metadata } from "next";
import { projects } from "@/lib/data";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
    title: "Selected Works",
    description: "A curated collection of digital experiences focusing on architectural logic and systems.",
};

const WorkPage = () => {
    return <WorkContent projects={projects} />;
};

export default WorkPage;
