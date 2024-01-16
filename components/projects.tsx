// "use client"
import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import Project from "./project";

export default function Projects() {
	// const {ref} = useSectionInView("Skills")
	// attach ref={ref} into section

	return (
		<section id="projects" className="scroll-mt-28 mb-28">
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projects.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
