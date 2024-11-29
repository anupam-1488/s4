export const REFRESH_TOKEN_URL = 'https://api.herb.apcfss.in/login/genratetoken'



const prod = {
    url: {
        AUTHENTICATION_URL: "https://api.herb.apcfss.in/login/authenticate",
        LegalCase_Api_url: "https://api.nyayam.apcfss.in/legal/",
        IMG_DOWNLOAD_URL: "https://api.nyayam.apcfss.in/lmudms/user-defined-path/file-download/",
        IMG_UPLOAD_URL: "https://api.nyayam.apcfss.in/lmudms/user-defined-path/file-upload/",
        IMG_VIEW_URL: "https://api.nyayam.apcfss.in/lmudms/file-download?filePath=",
        frontend_url: 'nyayam.apcfss.in',
    }
};

const dev = {
    url: {
        AUTHENTICATION_URL: "https://api.herb.apcfss.in/login/authenticate",
        LegalCase_Api_url: "https://apilmu.dev.nidhi.apcfss.in/legal/",
        IMG_DOWNLOAD_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-download/",
        IMG_UPLOAD_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-upload/",
        IMG_VIEW_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/file-download?filePath=",
        frontend_url: 'lmu.dev.nidhi.apcfss.in',
    }
};

const local = {
    url: {
        AUTHENTICATION_URL: "https://api.herb.apcfss.in/login/authenticate",
        LegalCase_Api_url: "http:///172.16.116.205:8080/health/",//NOSONAR
        IMG_DOWNLOAD_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-download/",
        IMG_UPLOAD_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-upload/",
        IMG_VIEW_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/file-download?filePath="
    }
};

const hostname = window.location.hostname
export const config = (() => {
    if (process.env.NODE_ENV === 'production' && hostname === prod.url.frontend_url) {
        return prod;
    } else if (process.env.NODE_ENV === 'production' && hostname === dev.url.frontend_url) {
        return dev;
    }
    else if (process.env.NODE_ENV === 'development') {
        return local;
    }
})();
