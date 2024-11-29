const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
    const MAX_FILE_SIZE = 1000000;
    function validateFileTypeAndSize(customefile) {
        let errormsg = "";
        if (customefile.size > MAX_FILE_SIZE) {
            errormsg = "Please Check your file size, it should be less than 1MB\n";
        }
        if (!SUPPORTED_FORMATS.includes(customefile.type)) {
            errormsg += "File format is invalid, Please upload only .jpg or .jpeg or .png";
        }
        if (errormsg === "") {
            return true;
        }
        else {
            alert(errormsg);
            return false;
        }
    }

export default function ImagesBase64(e,formIk,name,hiddenValue) {
    e.preventDefault();
    const filevalue = e.target.value;
    const file = e.target.files[0];
    formIk.setFieldValue(name, filevalue);

    if (validateFileTypeAndSize(e.target.files[0])) {
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
    }

}
 
