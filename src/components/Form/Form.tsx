import { useState, ChangeEvent, FormEvent} from "react";

import type { SearchType } from "../../types";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import Alert from "../Alert/Alert";

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>;
};


export default function Form({fetchWeather} : FormProps) {
  const [search, setSearch ] = useState<SearchType>({
    city: '',
    country: ''
  })
  
  const hanadleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  };
  const [alert , setAlert ] = useState('')
  const handleSubmit = ( e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(search).includes('')){
      setAlert('Todos los campos son obligatorios')
      return
    }
    fetchWeather(search)
  };
  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input
         id="city" 
         type="text" 
         name="city" 
         placeholder="Ciudad"
         value={search.city}  onChange={hanadleChange}
         
         />
      </div>
      <div className={styles.field}>
        <label htmlFor="country">País:</label>
        <select name="country" id="country" className={styles.select} value={search.country} onChange={hanadleChange}>
          <option value="">-- Seleccione un País --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Consultar clima" className={styles.submit} />
    </form>
  );
}
