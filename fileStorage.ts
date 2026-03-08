import fs from "fs"
import path from "path"

export function readJSON<T>(filePath:string): T
{
    const data=fs.readFileSync(path.resolve(filePath),"utf-8")
    return JSON.parse(data) as T
}


export function writeJSON<T>(filePath:string,data:T) {
    fs.writeFileSync(path.resolve(filePath),JSON.stringify(data,null,2))
   
}