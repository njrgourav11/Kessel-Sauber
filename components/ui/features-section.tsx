import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Wrench, Settings, BarChart, Phone, ArrowRight } from 'lucide-react'

export function ServicesSection() {
    return (
        <section className="bg-black py-20 md:py-32" id="services">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-4">Our Services</h2>
                    <p className="text-lg text-gray-400">Comprehensive solutions for boiler efficiency, maintenance, and operational excellence.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Soot Blower Services - Large Card */}
                    <Card className="group relative col-span-1 md:col-span-2 lg:col-span-2 overflow-hidden border-0 bg-zinc-900/50">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop)' }} />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
                        <CardContent className="relative h-full flex flex-col justify-end p-8">
                            <Wrench className="size-10 text-accent mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Soot Blower Services</h3>
                            <p className="text-gray-200 max-w-md">Complete maintenance, repair, and overhaul services for all types of soot blowers to ensure optimal performance.</p>
                        </CardContent>
                    </Card>

                    {/* Boiler Efficiency */}
                    <Card className="group relative overflow-hidden border-0 bg-zinc-900/50">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?q=80&w=2071&auto=format&fit=crop)' }} />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
                        <CardContent className="relative h-full flex flex-col justify-end p-8">
                            <BarChart className="size-10 text-accent mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Boiler Efficiency</h3>
                            <p className="text-gray-200 text-sm">Advanced analysis and tuning to maximize fuel efficiency.</p>
                        </CardContent>
                    </Card>

                    {/* Spare Parts */}
                    <Card className="group relative overflow-hidden border-0 bg-zinc-900/50">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581093458791-9f302e6d8359?q=80&w=2070&auto=format&fit=crop)' }} />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
                        <CardContent className="relative h-full flex flex-col justify-end p-8">
                            <Settings className="size-10 text-accent mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Spare Parts</h3>
                            <p className="text-gray-200 text-sm">High-quality OEM equivalent parts for reliability.</p>
                        </CardContent>
                    </Card>

                    {/* Expert Consultation - Wide */}
                    <Card className="group relative col-span-1 md:col-span-2 overflow-hidden border-0 bg-zinc-900/50">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop)' }} />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
                        <CardContent className="relative h-full flex flex-col justify-end p-8">
                            <Users className="size-10 text-accent mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Expert Consultation</h3>
                            <p className="text-gray-200 max-w-md">Technical expertise to solve complex boiler operation challenges and improve plant availability.</p>
                        </CardContent>
                    </Card>

                    {/* 24/7 Support */}
                    <Card className="group relative overflow-hidden border-0 bg-zinc-900/50">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop)' }} />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
                        <CardContent className="relative h-full flex flex-col justify-end p-8">
                            <Phone className="size-10 text-accent mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                            <p className="text-gray-200 text-sm">Round-the-clock technical assistance.</p>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    )
}
