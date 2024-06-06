import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lynirImg from "@/public/lynir.png";
import rmtdevImg from "@/public/rmtdev.png";
import autouncleImg from "@/public/autouncle.png";

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
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Projects",
		hash: "#projects",
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
			"I collaborate in a cross-functional team to deliver high-quality products for the automotive industry.  This included creating market trend dashboards, developing car price calculation tools, establishing a car valuation system across various European countries, and implementing interactive widgets for dealer websites. Technologies that I work with are: React, TypeScript, GraphQL and RubyOnRails.",
		icon: React.createElement(CgWorkAlt),
		date: "May 2021 - present",
		url: "https://careers.autouncle.com/",
	},
	{
		company: "Lynir",
		title: "Freelance Front-End Engineer",
		location: "Copenhagen, DK",
		description:
			"During my 8-month freelance work, I was responsible for improving user experience by developing a dynamic timeline filter that enabled news sorting and exploration. Additionally, I played a key role in shaping the overall product design, ensuring an intuitive and visually appealing interface.",
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
		title: "Dealership products",
		description:
			"This included creating market trend dashboards, car price calculation & valuation tools, and implementing interactive widgets for dealer websites.",
		tags: ["React", "TypeScript", "Svelte", "RubyOnRails", "GraphQl", "Framer"],
		imageUrl: autouncleImg,
	},
	{
		title: "Lynir",
		description:
			"I worked as frontend developer for 8 months. I was responsible for the timeline filter and the product design.",
		tags: ["React", "TypeScript", "MongoDB", "Sass"],
		imageUrl: lynirImg,
	},
	{
		title: "rmtDev",
		description:
			"Job board for remote developer jobs. It has features like filtering, sorting and pagination.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind"],
		imageUrl: rmtdevImg,
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
	"RubyOnRails",
	"Python",
	"Framer Motion",
] as const;
