import {useState} from "react"


function CategoryButton({category, handleSortByCategory}){
    const[selected, setSelected] = useState(false)

    function handleClick(){
        setSelected(!selected)
        handleSortByCategory(category)
    }

    return (
        <button className={selected ? 'selected' : ""} value={category} onClick={() => handleClick()}>{category}</button>
    );
}

export default CategoryButton