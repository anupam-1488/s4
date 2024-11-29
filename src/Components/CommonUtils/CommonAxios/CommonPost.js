
import { config } from "../CommonUrl/CommonUrls";
import { public_url } from "../Validations/RegularExpAndVar";
import { CommomLoginAunthenticatePost, CommonAxiosPost, CommonAxiosPut } from "./CommonAxios";

class CommonPost {
  submitLoginPage(req) {
    return CommomLoginAunthenticatePost(config.url.LegalCase_Api_url + "auth/signin", req);
  }
  LoginPage(req) {
    return CommomLoginAunthenticatePost(config.url.LegalCase_Api_url + "auth/authenticate", req);
  }
  AloUpdate(req){
    return CommonAxiosPost(config.url.BOC_URL+"alodtls/insert",req);
  }
 
}
export default new CommonPost();