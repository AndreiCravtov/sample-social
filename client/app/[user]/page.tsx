export default async function UserPage({ params }: any) {
    return (
        <div className="h-screen">
            {params.user}
        </div>
    )
}