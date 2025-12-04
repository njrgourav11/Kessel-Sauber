import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Wrench, Settings, BarChart, Phone } from 'lucide-react'

export function ServicesSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent" id="services">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-400">Comprehensive solutions for boiler efficiency and maintenance.</p>
                </div>
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        {/* Soot Blower Services - Large Card */}
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 bg-zinc-900 border-zinc-800">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center justify-center">
                                    <Wrench className="size-16 text-accent" />
                                </div>
                                <h2 className="mt-6 text-center text-2xl font-semibold text-white">Soot Blower Services</h2>
                                <p className="mt-2 text-center text-sm text-gray-400">Maintenance & Repair</p>
                            </CardContent>
                        </Card>

                        {/* Boiler Efficiency - Medium Card */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-zinc-900 border-zinc-800">
                            <CardContent className="pt-6 flex flex-col items-center">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-zinc-700 items-center justify-center">
                                    <BarChart className="size-16 text-accent" />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition text-white">Boiler Efficiency</h2>
                                    <p className="text-gray-400 text-sm">Optimize performance and reduce fuel consumption.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Spare Parts - Medium Card */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-zinc-900 border-zinc-800">
                            <CardContent className="pt-6 flex flex-col items-center">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-zinc-700 items-center justify-center">
                                    <Settings className="size-16 text-accent" />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition text-white">Spare Parts</h2>
                                    <p className="text-gray-400 text-sm">High-quality components for reliability.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Consultation - Large Card */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3 bg-zinc-900 border-zinc-800">
                            <CardContent className="grid pt-6 sm:grid-cols-2 gap-4">
                                <div className="relative z-10 flex flex-col justify-center space-y-4">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-zinc-700 items-center justify-center">
                                        <Users className="size-6 text-accent" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-white transition">Expert Consultation</h2>
                                        <p className="text-gray-400 text-sm">Troubleshooting and performance enhancement strategies.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    {/* Placeholder for consultation visual */}
                                    <div className="w-full h-32 bg-zinc-800 rounded-lg flex items-center justify-center">
                                        <span className="text-zinc-600">Consultation Visual</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Support - Large Card */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3 bg-zinc-900 border-zinc-800">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2 gap-4">
                                <div className="relative z-10 flex flex-col justify-center space-y-4">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-zinc-700 items-center justify-center">
                                        <Phone className="size-6 text-accent" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-white transition">24/7 Support</h2>
                                        <p className="text-gray-400 text-sm">Always available to assist with your boiler needs.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    {/* Placeholder for support visual */}
                                    <div className="w-full h-32 bg-zinc-800 rounded-lg flex items-center justify-center">
                                        <span className="text-zinc-600">Support Visual</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
