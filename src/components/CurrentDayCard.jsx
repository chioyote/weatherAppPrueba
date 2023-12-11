import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { format } from "date-fns"
import '~/components/CurrentDayCard.scss'

const date = format(new Date(), 'dd/MM/yyyy')

export const CurrentDayCard = () => {
    const { searchTerm } = useContext(AppContext)
    return (
        <div className="search-word">
            <h1>{searchTerm}</h1>
        </div>
    )
}
