
import Swal from "sweetalert2";
import { config } from "../CommonUrl/CommonUrls";
import { CommonAxiosGet } from "../CommonAxios/CommonAxios";
import * as jnb from "react-bootstrap";
export function viewImage(fileName) {
    let url = config.url.JVVD_URL + "file-retrival?fileName=" + fileName;
    CommonAxiosGet(url).then((res) => {
        if (res.data.status === true) {
            let base64String = res.data.file;
            const dataType = base64String.split(".");
            const finalFileType = dataType.match(/\/(.+);/)[1];
            if (finalFileType === "pdf"||finalFileType === "text") {
                const newTab = window.open();
                newTab.document.body.innerHTML =
                    `<iframe src="${base64String}" width="100%" height="100%"></iframe>`;
              }
           
            else {
                const swalPopup = Swal.fire({
                    html: `<img src="${base64String}" class="img-thumbnail" />`,
                    width: '80%',
                    showCloseButton: true,
                    showConfirmButton: false,
                    customClass: {
                        content: 'custom-modal-content',
                    },
                });
                window.addEventListener('popstate', () => {
                    swalPopup.close();
                });
            }
        }
        else {
            alert("image not found")
        }
    })
}
export function viewBucketImage(fileName,VAL) {
   
    let url = config.url.FILE_DOWNLOAD_URL + fileName;
    const dataType = fileName.split(".")[1];
    if (dataType === "pdf") {
      
        return (
            <div className="">
        <jnb.Modal size='xl' show={VAL} className="mt-5" backdrop="static" id="modalataddparticipant">
  <jnb.Modal.Header>
    <jnb.Modal.Title><h5>Generate Sanctioned Order</h5></jnb.Modal.Title>
    <button type="button"  className="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </jnb.Modal.Header>
  <jnb.Modal.Body>
    <div className="jumbotro mt20 form-card-jnb border mt-0">
      <embed
        src={url}
        className="pdf-embed"
        width="100%"
        height="100%"
        type="application/pdf"
      />
    </div>
  </jnb.Modal.Body>
</jnb.Modal>
              </div>
        )
    }
    else if (dataType === "text") {
        const newTab = window.open();
        newTab.document.body.innerHTML =
            `<iframe src="${url}" width="100%" height="100%" ></iframe>`;
    }
    else {
        const swalPopup = Swal.fire({
            html: `<img src="${url}" class="img-thumbnail" />`,
            width: '80%',
            showCloseButton: true,
            showConfirmButton: false,
            customClass: {
                content: 'custom-modal-content',
            },
        });
        window.addEventListener('popstate', () => {
            swalPopup.close();
        });
    }

}
export const ViewBucketImage = ({value,url}) => {

let setShowModal=true ;
 const closeModal = () => {
    setShowModal=false
 };
 return (
    <div className="">
        <jnb.Modal size='xl' show={setShowModal} className="mt-5" backdrop="static" id="modalataddparticipant">
          <jnb.Modal.Header>
            <jnb.Modal.Title><h5>Generate Sanctioned Order</h5></jnb.Modal.Title>
            <button type="button" onClick={closeModal} className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </jnb.Modal.Header>
          <jnb.Modal.Body>
            <div className="jumbotro mt20 form-card-jnb border mt-0">
              <embed
                src={url}
                className="pdf-embed"
                width="100%"
                height="100%"
                type="application/pdf"
              />
            </div>
          </jnb.Modal.Body>
        </jnb.Modal>
      </div>
)
    

};