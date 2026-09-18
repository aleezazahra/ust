'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
    LayoutDashboard,
    BookOpen,
    Layers,
    ClipboardCheck,
    TrendingUp,
    Settings,
    HelpCircle,
} from 'lucide-react';


const navItems=[
    {label:"Dashboard", href:'/dashboard',icon:LayoutDashboard},
    {label:'Lessons',href:'/dashboard/lessons',icon:BookOpen},
   
    {label:"Practice Test",href:"/dashboard/practice-test",icon:ClipboardCheck},
    {label:"My Progress",href:"/dashboard/progress",icon:TrendingUp},
    {label:"Settings",href:"/dashboard/settings",icon:Settings},
    {label:"Help",href:"/dashboard/help",icon:HelpCircle},

]

export default function Sidebar(){
    const pathname = usePathname();

    return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white ">
        <div className="flex h-10 items-center border-b border-slate-200 px-6">

            <Link href="/dashboard" className="text-lg font-semibold text-[var(--color-navy)]">
             hi
            </Link>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 py-6">
            {navItems.map((item)=>{
                const Icon=item.icon;
                const active = pathname === item.href;

                return(
                    <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        active?'bg-[var(--color-warm-white)] text-[var(--color-navy)] ': 'text-slate-500 hover:bg-[var(--color-warm-white)] hover:text-[var(--color-navy)]'


                    }`}>

                        <Icon size={18} strokeWidth={1.8} />
                        {item.label}


                    </Link>

                )
            })}

        </nav>
    </aside>
    );



}
