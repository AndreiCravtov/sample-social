export default function RootPage() {
    return (
        <div className="hidden xl:flex h-screen p-1 gap-1 justify-center">

            <div className="h-full max-w-144 flex-[2] p-1 flex flex-col bg-zinc-800"> {/* max-w-[576px] */}
            </div>

            <div className="h-full max-w-216 flex-[3] p-1 flex flex-col bg-zinc-800"> {/* max-w-[864px] */}
            </div>

            <div className="h-full max-w-144 flex-[2] p-1 flex flex-col bg-zinc-800"> {/* max-w-[576px] */}
            </div>

            {/* <div className="h-full w-[576px] p-1 flex flex-col bg-zinc-800">
            </div> */}
        </div>
    )
}