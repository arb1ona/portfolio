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
		company: "Epicode",
		title: "Graduated bootcamp",
		location: "Berlin, DE",
		description:
			"I started with 0 knowledge and graduated after 8 months of studying. I found a job as a Junior Web Engineer 3 months after the graduation.",
		icon: React.createElement(LuGraduationCap),
		date: "Apr 2020 - Dec 2020",
		url: "https://epicode.com/en/",
	},
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
] as const;

export const projects = [
	{
		title: "CorpComment",
		description:
			"I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "rmtDev",
		description:
			"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Word Analytics",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
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
	"Django",
	"Framer Motion",
] as const;
