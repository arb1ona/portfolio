"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Server action
export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("senderEmail");
	const message = formData.get("message");

	// Server-side validations
	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		};
	}

	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		};
	}
	try {
		await resend.emails.send({
			from: "Contact form <onboarding@resend.dev>",
			to: "arbiona.shahu@gmail.com",
			subject: "Message from contact form of arbiona.com",
			reply_to: senderEmail as string,
			html: message as string,
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}
};
