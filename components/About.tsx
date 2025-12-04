export default function About() {
    return (
        <section id="about" className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image/Content Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10">
                            <div className="aspect-video bg-secondary flex items-center justify-center">
                                {/* Placeholder for About Image */}
                                <div
                                    className="w-full h-full bg-cover bg-center opacity-80"
                                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop")' }}
                                ></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center z-10 hidden md:flex">
                                <span className="text-white font-bold text-xl">Est. 2010</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            About <span className="text-accent">Kessel Sauber</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            We are dedicated to providing world-class soot blowing and boiler efficiency services. Our mission is to exceed customer expectations through quality, timely delivery, and cost-effective solutions.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            With years of experience in the industry, we understand the critical role of boiler efficiency in your operations. Our team of experts is committed to continuous improvement and maintaining strong interactions with our customers to ensure their needs are met with precision.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">500+</h4>
                                <p className="text-gray-500">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
                                <p className="text-gray-500">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
