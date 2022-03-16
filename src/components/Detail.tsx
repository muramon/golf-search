import { memo, useState, VFC } from "react"
import { useLocation } from "react-router-dom"

function Detail() {
    const location = useLocation()
    const [selectId] 
    = useState<{ src: string, price: number, title: string }>(location.state as { src: string, price: number, title: string })
    return (
        <div>
            <img src={selectId.src} alt={selectId.title} />
            <br></br>
            {selectId.title}
            <br></br>
            {selectId.price}円
        </div>
    )
}

export default Detail