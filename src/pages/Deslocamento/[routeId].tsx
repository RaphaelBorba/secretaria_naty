import { useRouter } from "next/router"

export default function RoutePage(){

    const router = useRouter()

    return(
        <h1>Page {router.query.routeId}</h1>
    )
}