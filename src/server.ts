
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const startServer = async () => {
  
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('connected to db')
   server = app.listen(process.env.PORT, () => {
      console.log(`server is listening on  port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error)
  }
};
(async()=>{
 await startServer()

})()