
import { products }  from "./constants/data.js";
import Product from "./Models/productschema.js";

const datadefault = async () =>{
    try{
       await Product.insertMany(products);
       console.log("image success");
    }
    catch(error){
      console.log("Error while inserting the default data",error.message);
    }
        
}


export default datadefault;