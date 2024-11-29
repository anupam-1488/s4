import { CommonAxiosPost } from "../../CommonUtils/CommonAxios/CommonAxios";
import { InfoAlert } from "../../CommonUtils/CommonPopupAndAlerts/SweetAlerts";
import { config } from "../../CommonUtils/CommonUrl/CommonUrls";

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png','application/pdf'];
const MAX_FILE_SIZE = 1000000;
function validateFileTypeAndSize(customefile) {
    let errormsg = "";
    if (customefile?.size > MAX_FILE_SIZE) {
        errormsg = "Please Check your file size, it should be less than 1MB\n"; }
    if (!SUPPORTED_FORMATS.includes(customefile?.type)) {errormsg = "File format is invalid, Please upload only .jpg or .jpeg or .png"; }
    if (errormsg === "") {return true;}
    else {InfoAlert(errormsg, "info");return false;}}
    export default function Imageandfileuploads(e, formIk, path, name, filename) {
    e.preventDefault();
    const file = e.target.files[0];
    const newFileName = e.target.files[0]?.name ;
    const modifiedFile = new File([file], newFileName, { type: file?.type });
    if (validateFileTypeAndSize(file)) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", modifiedFile);
            CommonAxiosPost(config.url.IMG_UPLOAD_URL + path, formData).then((response) => {resolve(response.data)
                formIk.setFieldValue(name, response?.data);}).catch((error) => {formIk.setFieldValue(name, '');
                resolve(null);});});} 
                else {e.target.value = '';}}