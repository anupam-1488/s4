import {config} from "../../CommonApis";
import { CommonAxiosGet } from "../CommonAxios/CommonAxios";
export default function viewImageSrc(fileName) {
  let regUrl = config.url.JVVD_URL+"file-retrival?fileName=" + fileName;
  let base64String=""
  CommonAxiosGet(regUrl).then((res) => {
        if (res.data.status === true) {
         base64String = res.data.file;
         return base64String;
        }})
    
        if(base64String!==""){
            return base64String;
        }
       
    }

  


    
