import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'

export function ScalingSection() {
    return (
        <section className="py-16 md:py-32 bg-background text-foreground">
            <div className="mx-auto max-w-xl md:max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Partnering for Operational Excellence</h2>
                            <p className="mt-6 text-muted-foreground">We work alongside your team to ensure your boiler systems are running at peak efficiency, minimizing downtime and maximizing output.</p>
                        </div>
                        <ul className="mt-8 divide-y divide-border border-y border-border *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Mail className="size-5 text-accent" />
                                24/7 Technical Support
                            </li>
                            <li>
                                <Zap className="size-5 text-accent" />
                                Rapid Emergency Response
                            </li>
                            <li>
                                <Activity className="size-5 text-accent" />
                                Efficiency Monitoring
                            </li>
                            <li>
                                <DraftingCompass className="size-5 text-accent" />
                                System Audits & Review
                            </li>
                        </ul>
                    </div>
                    <div className="border-border relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl from-muted to-transparent p-px">
                            {/* Placeholder for Industrial Team Image */}
                            <div
                                className="w-full h-full rounded-[15px] bg-cover bg-center min-h-[400px]"
                                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop")' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
