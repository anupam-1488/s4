import { useSelector } from "react-redux";
import { CommomLoginAunthenticatePost } from "../CommonAxios/CommonAxios";
import { config } from "../CommonUrl/CommonUrls";

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png','image/pdf'];
const MAX_FILE_SIZE = 1000000;
function validateFileTypeAndSize(customefile) {
    let errormsg = "";
    if (customefile.size > MAX_FILE_SIZE) {
        errormsg = "Please Check your file size, it should be less than 1MB\n";
    }
   
    if (errormsg === "") {
        return true;
    }
    else {
        alert(errormsg);
        return false;
    }
}
export default function ImageBucket(e, formIk, name, filename) {
    const path = "Boc" // inserted file path
    e.preventDefault();
    const file = e.target.files[0]; // Original file
    const type = file.type.split("/")[1]; // file type
    const newFileName = filename + "." + type; // New file name
    const modifiedFile = new File([file], newFileName, { type: file.type });
    if (validateFileTypeAndSize(file)) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", modifiedFile);
            CommomLoginAunthenticatePost(config.url.FILE_UPLOAD_URL + path, formData).then((response) => {
                resolve(response.data)
                formIk.setFieldValue(name, response?.data);
            }).catch((error) => {
                console.log("error at imagebucket", error)
                resolve(null);
            });

        });
    }
    else {
        e.target.value = '';
    }

}