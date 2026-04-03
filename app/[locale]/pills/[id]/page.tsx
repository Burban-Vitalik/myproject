type PropsType = {
    params: Promise<{id: string}>
}

export default async function PillPage({ params }: PropsType) {
    const {id} = await params;
    return (
        <div>
            <div>{id}</div>
            page
        </div>
    )
}