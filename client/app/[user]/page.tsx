export default async function UserPage({ params }: any) {
    return (
        <div>
            {params.user}
        </div>
    )
}