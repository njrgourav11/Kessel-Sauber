import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            KESSEL <span className="text-accent">SAUBER</span>
                        </h3>
                        <p className="text-gray-400 max-w-xs">
                            Exceeding customer expectations in quality, delivery, and cost through continuous improvement.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <span className="block text-white font-medium">Phone:</span>
                                +91 98765 43210
                            </li>
                            <li>
                                <span className="block text-white font-medium">Email:</span>
                                info@kesselsauber.com
                            </li>
                            <li>
                                <span className="block text-white font-medium">Address:</span>
                                123 Industrial Area, New Delhi, India
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Kessel Sauber. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
