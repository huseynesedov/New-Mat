import "./style.css"
import images from "../../../Assets/images/js/Images"
import { useState } from "react";



const Address = () => {
  
    return <>

        <div className="col-11 w-100">
            
            <textarea class="form-control mt-2 textarea" id="exampleFormControlTextarea1" 
            placeholder="
                                        Street:  Xirdalan Seh., Mexaniki Deste, 23 Az1000, Absheron 
                                        State/province/area:    Baku 
                                        Phone number:  994 12 4480063"  >

            </textarea>
        </div>

    </>
}

export default Address;
