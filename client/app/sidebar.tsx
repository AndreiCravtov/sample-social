import Link from 'next/link';
import Logo from '../assets/logo';
import Icon, {IconType} from './components/primitives/icon';

function SidebarButton(props: {href: string, icon: IconType, className?: string}) {
    return (
        <Link href={props.href} className={props.className}>
            <div className="w-14 h-14 p-2">
                <Icon type={props.icon} className="w-full p-2 rounded-full transition-all ease-out duration-200 stroke-zinc-100 hover:bg-zinc-700 active:stroke-zinc-900 active:bg-zinc-100"></Icon>
            </div>
        </Link>
    )
}

export default function Sidebar() {
    return (
        <aside className="w-14 min-h-fit h-full overflow-auto scrollbar-none flex flex-col bg-zinc-900">
            {/* Logo */}
            <Link href="">
                <div className="w-14 h-14 p-2">
                    <Logo />
                </div>
            </Link>

            {/* Navigation */}
            <SidebarButton href="" icon="home" />
            <SidebarButton href="messages" icon="paper-airplane" />
            <SidebarButton href="USER_ID" icon="user" />
            <SidebarButton href="notifications" icon="bell" />

            {/* Separator */}
            <div className="flex-1"></div>
            
            {/* Navigation */}
            <div className="w-14 h-14 p-2">
                <Icon type="user" className="w-full p-2 rounded-full stroke-zinc-100 bg-red-400"></Icon>
            </div>
            <SidebarButton href="settings" icon="cog-6-tooth" />
        </aside>
    )
}