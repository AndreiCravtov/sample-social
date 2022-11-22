import { ReactNode } from 'react'
import Card from './components/primitives/card'

function Section(props: {id: string, className: string, children: ReactNode}) {
    return (
        <div id={props.id} className={`h-full overflow-auto scrollbar-none gap-1 flex flex-col ${props.className}`}>
            {props.children}
        </div>
    )
}

export default function RootPage() {
    return (
        <div className="hidden xl:flex h-screen p-1 gap-1 justify-center">
            <Section id="personal" className="flex-[2] max-w-144">
                <Card radius="large" className="p-8 text-zinc-100 bg-zinc-800">
                    content
                </Card>
                <Card radius="large">
                    content
                </Card>
                <Card radius="large">
                    content
                </Card>
                <Card radius="large">
                    content
                </Card>
                <Card radius="large">
                    content
                </Card>
            </Section>
            <Section id="feed" className="flex-[3] max-w-216">
                <div className="h-max rounded-lg p-2 text-zinc-100 bg-zinc-800">
                    content
                </div>
            </Section>
            <Section id="discovery" className="flex-[2] max-w-144">
                <div className="h-max rounded-lg p-2 text-zinc-100 bg-zinc-800">
                    content
                </div>
            </Section>
        </div>
    )
}