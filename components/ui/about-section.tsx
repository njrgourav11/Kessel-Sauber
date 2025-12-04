import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, ShieldCheck, Users, Trophy, ThumbsUp } from "lucide-react";

export function AboutSection() {
    const features = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To exceed customer expectations through quality, timely delivery, and cost-effective solutions in boiler efficiency services."
        },
        {
            icon: Lightbulb,
            title: "Our Vision",
            description: "To be the global leader in sustainable and efficient industrial boiler maintenance and soot blowing technologies."
        },
        {
            icon: ShieldCheck,
            title: "Quality Assurance",
            description: "Committed to continuous improvement and maintaining the highest standards of safety and operational excellence."
        }
    ];

    const stats = [
        {
            icon: Trophy,
            value: "500+",
            label: "Projects Completed"
        },
        {
            icon: ThumbsUp,
            value: "100%",
            label: "Client Satisfaction"
        },
        {
            icon: Users,
            value: "15+",
            label: "Years Experience"
        }
    ];

    return (
        <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                About <span className="text-accent">Kessel Sauber</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We are dedicated to providing world-class soot blowing and boiler efficiency services.
                                With years of experience in the industry, we understand the critical role of boiler
                                efficiency in your operations. Our team of experts is committed to continuous improvement
                                and maintaining strong interactions with our customers to ensure their needs are met with precision.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
                                    <stat.icon className="w-8 h-8 text-accent mb-3" />
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Cards */}
                    <div className="w-full lg:w-1/2 grid gap-6">
                        {features.map((feature, index) => (
                            <Card key={index} className="bg-zinc-900 border-white/10 hover:border-accent/50 transition-colors duration-300">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="p-2 rounded-lg bg-accent/10">
                                        <feature.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
