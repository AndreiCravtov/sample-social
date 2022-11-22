import { HomeIcon, PaperAirplaneIcon, UserIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export type IconType = "home" | "paper-airplane" | "user" | "bell" | "cog-6-tooth";

export default function Icon(props: {
    type: IconType,
    className?: string
}) {
    switch (props.type) {
        case "home":
            return <HomeIcon className={props.className}></HomeIcon>
        case "paper-airplane":
            return <PaperAirplaneIcon className={props.className}></PaperAirplaneIcon>
        case "user":
            return <UserIcon className={props.className}></UserIcon>
        case "bell":
            return <BellIcon className={props.className}></BellIcon>
        case "cog-6-tooth":
            return <Cog6ToothIcon className={props.className}></Cog6ToothIcon>
    }
}