export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Ready to optimize your boiler efficiency? Contact us today for a consultation or quote.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="Service Inquiry"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
