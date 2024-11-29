
import Swal from "sweetalert2";

export const InfoAlert = (data) => {
    Swal.fire({
        text: data,
        icon: "info",
    })
};
export const TokenAlert = () => {
    Swal.fire({
        text: "Your session has expired. Please Login",
        icon: "warning",
        backdrop:false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No"

    }).then((update) => {

         if (update.isConfirmed) {
            window.location.href = "/login";
        }
    })
};

export default async function Sweetalert(text, icon) {
    const isConfirm = await Swal.fire({ text: text, icon: icon, 
      confirmButtonColor: '#3085d6', allowEnterKey: false,
       allowEscapeKey: false, allowOutsideClick: false, confirmButtonText: "Ok" });
    return isConfirm;
  
  }