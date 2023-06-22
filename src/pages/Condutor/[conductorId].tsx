import { useRouter } from "next/router"

export default function ConductorPage(){

    const router = useRouter()

    return(
        <h1>Page {router.query.conductorId}</h1>
    )
}