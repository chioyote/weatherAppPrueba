import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm } from "../hooks/useForm"

import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

import "~/components/SearchBar.scss"

export const SearchBar = () => {

    const { value, inputValue, onInputChange } = useForm({value: ''})
    const { searchLocation, setLoader } = useContext(AppContext)
    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const cleanValue = value.trim();
        setLoader()
        searchLocation(cleanValue)
    }
    return (
        <>
            <form action="" onSubmit={ handleSubmit } className="search-bar">
                <input 
                    type="text" 
                    name="searchText"
                    placeholder="Busca una ubicación"
                    autoComplete="off"
                    className="form-control"
                    onChange={ onInputChange }
                    value={inputValue.value}
                />
                <button aria-label='search-button'>
                    <FontAwesomeIcon icon={faSearch} size="xl"/>
                </button>
            </form>
        </>
    )
}
