import { HomeIcon, PaperAirplaneIcon, UserIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import Logo from '../assets/logo';

enum Icon {
    Home,
    PaperAirplane,
    User,
    Bell,
    Cog
}

function SidebarButton(props: {href: string, icon: Icon, className?: string}) {
    const iconStyle="p-2 rounded-full transition-all ease-out duration-200 stroke-zinc-100 hover:bg-zinc-700 active:stroke-zinc-900 active:bg-zinc-100"
    
    function getIcon(icon: Icon, style: string) {
        switch (icon) {
            case Icon.Home: return <HomeIcon className={style} />
            case Icon.PaperAirplane: return <PaperAirplaneIcon className={style} />
            case Icon.User: return <UserIcon className={style} />
            case Icon.Bell: return <BellIcon className={style} />
            case Icon.Cog: return <Cog6ToothIcon className={style} />
        }
    }

    return (
        <Link href={props.href} className={props.className}>
            <div className="w-14 h-14 p-2">
                {getIcon(props.icon, iconStyle)}
            </div>
        </Link>
    )
}

export default function Sidebar() {
    return (
        <aside className="w-14 min-h-fit h-full overflow-auto no-scrollbar flex flex-col bg-zinc-900">
            {/* Logo */}
            <Link href="">
                <div className="w-14 h-14 p-2">
                    <Logo />
                </div>
            </Link>

            {/* Navigation */}
            <SidebarButton href="" icon={Icon.Home} />
            <SidebarButton href="messages" icon={Icon.PaperAirplane} />
            <SidebarButton href="user/USER_ID" icon={Icon.User} />
            <SidebarButton href="notifications" icon={Icon.Bell} />

            {/* Separator */}
            <div className="flex-1"></div>
            
            {/* Navigation */}
            <div className="min-w-14 min-h-14 p-2">
                <UserIcon className="w-full h-full p-2 rounded-full bg-red-400 stroke-zinc-100"></UserIcon>
            </div>
            <SidebarButton href="settings" icon={Icon.Cog} />
        </aside>
    )
}