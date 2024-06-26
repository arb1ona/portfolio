import React from "react";

export default function Footer() {
	return (
		<footer className="mb-10 px-4 text-center text-gray-500">
			<small className="mb-2 block text-xs">
				&copy; 2024 Arbiona. All rights reserved.
			</small>
			<p className="text-xs">
				<small>
					<span className="font-semibold">About this website:</span> built with
					React & NextJs (App router & Server Actions), TypeScript, Tailwind
					CSS, Framer Motion, React Email & Resend, Vercel hosting.
				</small>
			</p>
		</footer>
	);
}
