import { ReactNode } from 'react';

export type CardRadius = "large" | "normal" | "small"

export default function(props: {
    radius: CardRadius,
    className?: string,
    children?: ReactNode
}) {
    return (
        <div className={`${(()=>{
            switch (props.radius) {
                case "large": return "rounded-8";
                case "normal": return "rounded-4";
                case "small": return "rounded-2";
            }
        })()} ${props.className?props.className:""}`}>
            {props.children}
        </div>
    )
}