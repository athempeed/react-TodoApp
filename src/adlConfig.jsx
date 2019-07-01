import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
 
// import axios from "./axios/axios";

export const adalConfig = {
    instance: 'https://dev.petronas.com/', 
    tenant: 'adfs',
    clientId: '0d795f33-c93a-462e-bacb-2c2da3d35e1c',
    endpoints: {
       api: "http://api.igadev.com/" //api identifier
    },
    postLogoutRedirectUri: window.location.origin,
    redirectUri: "http://app04.igadev.com/",
    cacheLocation: 'sessionStorage'
   };
   

//    export const authContext = new AuthenticationContext(adalConfig);

//    export const getToken = () => {
//        // con-sole.log(authContext.getCachedToken(authContext.config.clientId));
//     return authContext.getCachedToken(authContext.config.clientId);
//    };
   
//    export const callAccessToken = () => {
       
//        return new Promise((resolve,reject)=>{ authCon-text.acquireToken('https://localhost:44381/api', (errorDesc, token, error) => {   
//             // console.log(token)  
//             resolve (token);
//             reject(error);
//        })
//    })
   
//    }
   
//    export const getAccessToken = () => {
//        return authContext.getCachedToken('https://localhost:44381/api');
//    }
   

// export const adalConfig = {
//   tenant: 'adfs',
//   clientId: '0d795f33-c93a-462e-bacb-2c2da3d35e1c',
//   endpoints: {
//     api: 'https://api.igadev.com/',
//   },
//   cacheLocation: 'sessionStorage',
// };
 
export const authContext = new AuthenticationContext(adalConfig);



   export const getToken = () => {
       // con-sole.log(authContext.getCachedToken(authContext.config.clientId));
    return authContext.getCachedToken(authContext.config.clientId);
   };
   
   export const callAccessToken = () => {
       
       return new Promise((resolve,reject)=>{ authContext.acquireToken("http://api.igadev.com/", (errorDesc, token, error) => {   
            // console.log(token)  
            resolve (token);
            reject(error);
       })
   })
   
   }
   
   export const getAccessToken = () => {
       return authContext.getCachedToken("http://api.igadev.com/");
   }
 
export const adalApiFetch = (fetch, url, options) =>adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
 
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);