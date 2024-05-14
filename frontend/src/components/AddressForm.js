import React,{useState} from "react";
import axios from "axios";

export default function AddressForm() {

    const[address,setAddress]=useState('')
    const [position, setPosition] = useState(null)
    const [errors, setErrors] = useState('')
    

    const handleSubmit= async(e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`http://localhost:3456/location?address=${address}`)
            console.log(response)
            setPosition(response.data)
        //     if (!response.data) {
        //         console.log('Invalid response', response)
        //       } else {
        //         const { lat, lng } = response.data;
        //         setPosition([ lat, lng ]);
        //         //setIsEmpty('')
        //     }
      
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

   