import { useContext, useEffect } from "react"
import { CurrentDayCard, Dayslist, SearchBar } from "../../components"
import { AppContext } from "../../context/AppContext"

export const MainContainer = () => {

    const { searchLocation } = useContext(AppContext)
    useEffect(() => {
        searchLocation();
    }, [])
    
    return (
        <div className="container">
            <SearchBar/>
            <CurrentDayCard/>
            <Dayslist/>
        </div>
    )
}
