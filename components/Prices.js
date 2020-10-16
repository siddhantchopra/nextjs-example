import { useState } from "react"

const Prices = ({bpi}) => {
    const [price, setPrice] = useState({currency: 'USD'})

    return (
        <div>
           <ul className="list-group">
            <li className="list-group-item">
    Bitcoin rate for {bpi.bpi[price.currency].description}: <span className="badge badge-primary">{bpi.bpi[price.currency].code}</span> <strong>{bpi.bpi[price.currency].rate}</strong>
            </li>
           </ul>
           <br/>
           <select className="form-control" onChange={(e)=>setPrice({...price, currency: e.target.value})}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
           </select>
        </div>
    )
}
export default Prices