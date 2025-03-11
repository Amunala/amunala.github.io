import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPopup({ onClose }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef();

    const handleSelect = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            );

            if (result.text === "OK") {
                setSubmitStatus({
                    success: true,
                    message: "Thanks for your submission! I'll be in touch soon.",
                });

                formRef.current.reset();
                setSelectedOptions([]);

                setTimeout(() => {
                    onClose();
                }, 3000);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: "Something went wrong. Please try again or email me directly.",
            });
            console.error("EmailJS error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 md:w-2/5 h-[85vh] max-h-full mr-4 md:mr-20 overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    type="button"
                    className="absolute top-4 right-4 text-black text-2xl"
                    onClick={onClose}
                >
                    ✕
                </button>

                {/* Wrapped Content with Top & Bottom Padding */}
                <div className="py-6">
                    <h2 className="text-3xl mb-6 md:mb-10">Start a Project</h2>
                    <p className="mb-4 text-lg">What problem can I help you tackle?</p>

                    {/* Service Options */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 md:mb-10">
                        {["Research & Consulting", "UI & UX", "Branding", "Other"].map((option) => (
                            <div
                                key={option}
                                className={`p-2 h-14 flex items-center justify-center border rounded-md text-center text-sm cursor-pointer transition-all break-words ${selectedOptions.includes(option)
                                        ? "bg-black text-white border-black"
                                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                                    }`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>

                    {/* Hidden input for selected services */}
                    <input type="hidden" name="project_type" value={selectedOptions.join(", ")} />

                    {/* Your Information */}
                    <h3 className="text-lg mb-4">Your Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <input
                            type="email"
                            name="reply_to"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Project Description */}
                    <textarea
                        name="message"
                        placeholder="Tell me more about your project"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black h-32 resize-none mb-6"
                    ></textarea>

                    {/* Status message */}
                    {submitStatus && (
                        <div
                            className={`mb-4 p-2 rounded ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-[40%] bg-black text-white py-3 rounded-md text-lg font-semibold hover:bg-gray-900 transition-all overflow-hidden disabled:bg-gray-400 disabled:cursor-not-allowed"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={isHovered && !isSubmitting ? "animate-loop-text" : ""}>
                            {isSubmitting ? "Sending..." : "Submit"}
                        </div>
                    </button>

                    {/* Border and Email Contact */}
                    <div className="mt-6 border-t border-gray-300 pt-4">
                        <p className="text-black text-lg">
                            Or send me an{" "}
                            <a
                                href="mailto:emannuelamunala@gmail.com"
                                className="underline hover:no-underline transition-all"
                            >
                                email
                            </a>
                            :)
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
