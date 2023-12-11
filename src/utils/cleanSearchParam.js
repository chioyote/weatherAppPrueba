export const cleanSearchParam = ( word ) => {
    let newWord = word.replaceAll(' ','-')
    newWord = newWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    newWord = newWord.toLowerCase()

    return newWord
}
