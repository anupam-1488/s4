
import Sweetalert from "../CommonPopupAndAlerts/SweetAlerts";

const SUPPORTED_FORMATS_FILES = ['image/jpg', 'application/pdf','image/jpeg'];
const MAX_FILE_SIZES = 1000000;
function validateFileTypeAndSizes(customefile) {
    let errormsg = "";
    if (customefile.size > MAX_FILE_SIZES) {
        errormsg = "Please Check your file size, it should be less than 1MB\n";
    }
    if (!SUPPORTED_FORMATS_FILES.includes(customefile.type)) {
        errormsg += "File format is invalid, Please upload only .jpg or .jpeg or .pdf files";
    }
    if (errormsg === "") {
        return true;
    }
    else {
        Sweetalert(errormsg, "info");
        return false;
    }
}


export default function ImagePdfBase64(e, formIk, name, hiddenValue) {
    e.preventDefault();
    let fileValue = validateFileTypeAndSizes(e.target.files[0]);
   
    if (fileValue) {
       //validateFileTypeAndSize(e.target.files[0])
        const filevalue = e.target.value;
        const file = e.target.files[0];
        formIk.setFieldValue(name, filevalue);

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                formIk.setFieldValue(hiddenValue, event.target.result);
            };

            reader.onerror = (err) => {
                reject(err);
            };

            reader.readAsDataURL(file);
        });
    }
    else {
        e.target.value = '';
        
        formIk.setFieldValue(name, '');
        formIk.setFieldValue(hiddenValue, '');
        
    }

}