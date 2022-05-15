import { useLocation } from "react-router-dom"
import { useState } from "react"

function Searchresults() {
    const location = useLocation()
    const [result] 
    = useState<{ data: string }>(location.state as { data: string })
    console.log(result)
    return (
        <p>sss</p>
    )
}

export default Searchresults