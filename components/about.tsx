"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
	return (
		<motion.section
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After graduating in <span className="font-medium">Architecture</span>, I
				switched to programming for fun, and now I&apos;m working as a full-time
				web developer. <span className="italic">My core stack is,</span>{" "}
				<span className="font-medium">TypeScript</span>, and{" "}
				<span className="font-medium">Ruby on Rails</span>. I also enjoy{" "}
				exploring new AI tools. I am currently reading about{" "}
				<span className="font-medium">Machine Learning</span> from
				<span className="font-medium"> DeepLearning.ai</span>.
			</p>

			<p>
				<span className="italic">When I&apos;m not coding</span>, I love
				cooking, painting, and doing crafts - really, any activity that involves
				working with my hands. I&apos;m deeply interested in{" "}
				<span className="underline">human-centered</span> practices, and
				regularly engage in meditation. I can be quite nerdy speaking about
				neuroscience.
			</p>
		</motion.section>
	);
}
