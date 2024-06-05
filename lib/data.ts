import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		company: "AutoUncle",
		title: "Junior Web Engineer",
		location: "Aarhus, DK",
		description:
			"I'm now a web engineer working on React, TypeScript, GraphQL and RubyOnRails.",
		icon: React.createElement(CgWorkAlt),
		date: "May 2021 - present",
		url: "https://careers.autouncle.com/",
	},
	{
		company: "Lynir",
		title: "Freelance Front-End Engineer",
		location: "Copenhagen, DK",
		description:
			"I worked as a freelance developer for 7 months. Also, I upskilled to the product development.",
		icon: React.createElement(FaReact),
		date: "Dec 2022 - June 2023",
		url: "https://lynir.com/",
	},
	{
		company: "Epicode",
		title: "Graduated bootcamp",
		location: "Berlin, DE",
		description:
			"I started with 0 knowledge and graduated after 8 months of studying. I found a job as a Junior Web Engineer 3 months after the graduation.",
		icon: React.createElement(LuGraduationCap),
		date: "Apr 2020 - Dec 2020",
		url: "https://epicode.com/en/",
	},
] as const;

export const projects = [
	{
		title: "Lorem Ipsum 1",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "Lorem Ipsum 2",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text",
		tags: ["React", "TypeScript", "Next.js", "Tailwind"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Lorem Ipsum 3",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"GraphQL",
	"Apollo",
	"Express",
	"Python",
	"Framer Motion",
] as const;
