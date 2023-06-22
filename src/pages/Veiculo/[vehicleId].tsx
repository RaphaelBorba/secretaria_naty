import { useRouter } from "next/router"

export default function VehiclePage(){

    const router = useRouter()

    return(
        <h1>Page {router.query.vehicleId}</h1>
    )
}