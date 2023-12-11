import { useState } from "react"

export const useForm = ( initialForm = {} ) => {
    const [inputValue, setInputValue] = useState(initialForm)

    const onInputChange = ( {target} ) => {
        setInputValue({
            ...inputValue,
            value: target.value
        })
    }

    return {
        ...inputValue,
        inputValue,
        onInputChange
    }
}
