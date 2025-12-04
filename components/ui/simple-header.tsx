'use client';
import React from 'react';
import { Flame } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';

export function SimpleHeader() {
    const [open, setOpen] = React.useState(false);

    const links = [
        {
            label: 'Services',
            href: '#services',
        },
        {
            label: 'About',
            href: '#about',
        },
        {
            label: 'Contact',
            href: '#contact',
        },
    ];

    return (
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-4 z-50 w-full border-b backdrop-blur-lg md:top-6 md:mx-auto md:max-w-5xl md:rounded-md md:border md:shadow-sm">
            <nav className="mx-auto flex h-14 w-full items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Flame className="size-6 text-accent" />
                    <p className="font-mono text-lg font-bold">Kessel Sauber</p>
                </div>
                <div className="hidden items-center gap-2 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            className={buttonVariants({ variant: 'ghost' })}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button className="bg-accent hover:bg-orange-600 text-white">Get a Quote</Button>
                </div>
                <Sheet open={open} onOpenChange={setOpen}>
                    <Button size="icon" variant="outline" className="lg:hidden">
                        <MenuToggle
                            strokeWidth={2.5}
                            open={open}
                            onOpenChange={setOpen}
                            className="size-6"
                        />
                    </Button>
                    <SheetContent
                        className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
                        showClose={false}
                        side="left"
                    >
                        <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                            {links.map((link) => (
                                <a
                                    key={link.label}
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        className: 'justify-start',
                                    })}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <SheetFooter>
                            <Button className="w-full bg-accent hover:bg-orange-600 text-white" onClick={() => setOpen(false)}>Get a Quote</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}
