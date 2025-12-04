export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
                {/* Placeholder for video/image */}
                <div
                    className="w-full h-full bg-cover bg-center opacity-50"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop")' }}
                ></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 text-center md:text-left">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Advanced <span className="text-accent">Soot Blowing</span> & <br />
                        Boiler Efficiency Solutions
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        To exceed our customers expectations in quality, delivery, and cost through continuous improvement and customer interaction.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
                        >
                            Get a Quote
                        </a>
                        <a
                            href="#services"
                            className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
