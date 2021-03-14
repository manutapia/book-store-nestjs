import * as fs from "fs";
import { parse } from "dotenv"

export class ConfigService{
  private readonly envConfig: { [key:string]: string };

  constructor(){
    const isDevelopmentEnv = process.env.NODE_ENV !== "production";

    if (isDevelopmentEnv) {
      // Cargar variables de entorno configuradas en .env (dotenv)
      const envFilePath = __dirname+"/../../.env";
      const existsPath = fs.existsSync(envFilePath);

      if(!existsPath){
        console.log('.env file doest not exist');
        process.exit(0);
      }else{
        this.envConfig = parse(fs.readFileSync(envFilePath));
      }
    }else{
      this.envConfig = {
        PORT: process.env.PORT
      }
    }
  }

  get(key:string):string{
    return this.envConfig[key];
  }
}