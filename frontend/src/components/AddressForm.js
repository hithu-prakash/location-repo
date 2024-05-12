import React,{useState} from "react";
import axios from "axios";

export default function AddressForm() {

    const[address,setAddress]=useState('')
    const [position, setPosition] = useState(null)
    const [errors, setErrors] = useState('')

    const handleSubmit= async(e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`http://localhost:3456/api/search?address=${address}`)
            console.log(response)
            setPosition(response.data)
      
          } catch(err){
            console.log(err)
            setErrors(err.response.data.errors)
          }
        }
      
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="position">Enter Address</label> <br />
                        <input 
                            type="text"
                            id='position'
                            value={address}
                             onChange={(e)=>setAddress(e.target.value)} 
                        /> <br />
                        <input type="submit"/>
                   
                </form>
            </div>
        )
    }

   