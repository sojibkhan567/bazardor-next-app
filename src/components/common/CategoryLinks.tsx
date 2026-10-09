"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

export default function CategoryLink({ nav }: { nav: Category }) {
    const pathname = usePathname();
    const href = `/category/${nav.slug}`;

    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`btn btn-sm flex gap-2 ${isActive
                ? "btn-primary-2"
                : "btn-ghost"
                }`}
        >
            <span aria-hidden="true">{nav.icon}</span>
            <span>{nav.nameBn}</span>
        </Link>
    );
}