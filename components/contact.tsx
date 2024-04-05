"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";

function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		// pick the smallest
		<motion.section
			id="contact"
			className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			ref={ref}
			initial={{
				opacity: 0,
			}}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-gray-700 -mt-6">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:arbiona.shahu@gmail.com">
					arbiona.shahu@gmail.com
				</a>{" "}
				or through thus form.
			</p>
			<form
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);

					console.log(data, "HERE");
					if (error) {
						toast.error(error);
						return;
					}

					toast.success("Email sent successfully!");
				}}
			>
				<input
					className="h-14 p-4 rounded-lg borderBlack"
					type="email"
					name="senderEmail"
					required
					maxLength={500}
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 p-4 rounded-lg borderBlack"
					name="message"
					required
					maxLength={5000}
					placeholder="Your message"
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}

export default Contact;
