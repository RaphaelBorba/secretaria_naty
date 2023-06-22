import { useRouter } from "next/router"

export default function ClientPage(){

    const router = useRouter()

    return(
        <h1>Page {router.query.clientId}</h1>
    )
}