import { nanoid } from "nanoid"
import css from "./filter.module.css"


export default function Filter({onFilter}) {
    
    const inputId = nanoid();

return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId}>Find contacts by name</label>
      <input className={css.filterInput} type="text" name="filter" id={inputId} onChange={(event) => onFilter(event.target.value)} />
    </div>
        )
}
    