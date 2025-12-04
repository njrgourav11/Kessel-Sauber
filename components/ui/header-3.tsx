'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
    Flame,
    Factory,
    Leaf,
    Recycle,
    Droplets,
    Wind,
    Wrench,
    Settings,
    Briefcase,
    Phone,
    Zap,
    SprayCan,
    Cog
} from 'lucide-react';
import { useScroll } from '@/components/ui/use-scroll';
import DarkModeToggle from '@/components/ui/dark-mode-toggle';

type LinkItem = {
    title: string;
    href: string;
    icon: LucideIcon;
    description?: string;
};

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
                'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
                    scrolled,
            })}
        >
            <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
                <div className="flex items-center gap-5">
                    <a href="#" className="hover:bg-accent/10 rounded-md p-2 flex items-center gap-2">
                        <Flame className="size-6 text-accent" />
                        <span className="font-mono text-lg font-bold">Kessel Sauber</span>
                    </a>
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent">Industries</NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-background p-1 pr-1.5">
                                    <ul className="bg-popover grid w-[400px] grid-cols-1 gap-2 rounded-md border p-2 shadow">
                                        {industryLinks.map((item, i) => (
                                            <li key={i}>
                                                <ListItem {...item} />
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-background p-1 pr-1.5">
                                    <ul className="bg-popover grid w-[500px] grid-cols-2 gap-2 rounded-md border p-2 shadow">
                                        {serviceLinks.map((item, i) => (
                                            <li key={i}>
                                                <ListItem {...item} />
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <a href="#spare-parts" className={navigationMenuTriggerStyle()}>
                                        Spare Parts
                                    </a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <a href="#careers" className={navigationMenuTriggerStyle()}>
                                        Careers
                                    </a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                    <Button variant="ghost" asChild><a href="#contact">Contact</a></Button>
                    <Button className="bg-accent hover:bg-orange-600 text-white">Get a Quote</Button>
                    <DarkModeToggle />
                </div>
                <div className="flex items-center gap-2 md:hidden">
                    <DarkModeToggle />
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => setOpen(!open)}
                        className="md:hidden"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label="Toggle menu"
                    >
                        <MenuToggleIcon open={open} className="size-5" duration={300} />
                    </Button>
                </div>
            </nav>
            <MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
                <NavigationMenu className="max-w-full items-start justify-start">
                    <div className="flex w-full flex-col gap-y-2">
                        <span className="text-sm font-semibold text-muted-foreground px-2">Industries</span>
                        {industryLinks.map((link) => (
                            <ListItem key={link.title} {...link} />
                        ))}
                        <span className="text-sm font-semibold text-muted-foreground px-2 mt-2">Services</span>
                        {serviceLinks.map((link) => (
                            <ListItem key={link.title} {...link} />
                        ))}
                        <div className="flex flex-col gap-2 mt-2 px-2">
                            <a href="#spare-parts" className="flex items-center gap-2 py-2 font-medium">
                                <Cog className="size-5" /> Spare Parts
                            </a>
                            <a href="#careers" className="flex items-center gap-2 py-2 font-medium">
                                <Briefcase className="size-5" /> Careers
                            </a>
                        </div>
                    </div>
                </NavigationMenu>
                <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                        <a href="#contact">Contact</a>
                    </Button>
                    <Button className="w-full bg-accent hover:bg-orange-600 text-white">Get a Quote</Button>
                </div>
            </MobileMenu>
        </header>
    );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
    open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
    if (!open || typeof window === 'undefined') return null;

    return createPortal(
        <div
            id="mobile-menu"
            className={cn(
                'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
                'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
            )}
        >
            <div
                data-slot={open ? 'open' : 'closed'}
                className={cn(
                    'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
                    'size-full p-4',
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}

function ListItem({
    title,
    description,
    icon: Icon,
    className,
    href,
    ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
    return (
        <NavigationMenuLink className={cn('w-full flex flex-row gap-x-2 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground rounded-sm p-2', className)} {...props} asChild>
            <a href={href}>
                <div className="bg-background/40 flex aspect-square size-10 items-center justify-center rounded-md border shadow-sm">
                    <Icon className="text-foreground size-5" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <span className="font-medium text-sm">{title}</span>
                    <span className="text-muted-foreground text-xs line-clamp-1">{description}</span>
                </div>
            </a>
        </NavigationMenuLink>
    );
}

const industryLinks: LinkItem[] = [
    {
        title: 'Paper and Pulp',
        href: '#',
        description: 'Efficient solutions for paper manufacturing',
        icon: Factory,
    },
    {
        title: 'Biomass',
        href: '#',
        description: 'Sustainable energy production support',
        icon: Leaf,
    },
    {
        title: 'Waste to Energy',
        href: '#',
        description: 'Converting waste into clean energy',
        icon: Recycle,
    },
    {
        title: 'Petrochemical',
        href: '#',
        description: 'Reliable services for petrochemical plants',
        icon: Droplets,
    },
    {
        title: 'Power Industries',
        href: '#',
        description: 'Optimizing power generation efficiency',
        icon: Zap,
    },
];

const serviceLinks: LinkItem[] = [
    {
        title: 'Soot Blower',
        href: '#',
        description: 'Advanced soot blowing technology',
        icon: Wind,
    },
    {
        title: 'Shower Cleaning',
        href: '#',
        description: 'High-pressure shower cleaning systems',
        icon: SprayCan,
    },
    {
        title: 'Compressed Air Soot Blower',
        href: '#',
        description: 'Efficient compressed air solutions',
        icon: Wind,
    },
    {
        title: 'Smart Water Canon',
        href: '#',
        description: 'Intelligent water canon cleaning',
        icon: Droplets,
    },
];
