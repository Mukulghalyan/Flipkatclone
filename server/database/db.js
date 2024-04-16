
import mongoose from "mongoose";

export const Connection = async(USERNAME,PASSWORD)=>{
  const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-zzqvshg-shard-00-00.jq7xseh.mongodb.net:27017,ac-zzqvshg-shard-00-01.jq7xseh.mongodb.net:27017,ac-zzqvshg-shard-00-02.jq7xseh.mongodb.net:27017/?ssl=true&replicaSet=atlas-19tmyt-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
      await mongoose.connect(URL);
      console.log("Success");
    }
    catch(error){ 
        console.log("Error while connecting", error.message);
    }
}

export default Connection;