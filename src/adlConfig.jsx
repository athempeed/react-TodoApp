import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
 
// import axios from "./axios/axios";

export const adalConfig = {
    instance: 'https://adfs.com',//give ADFS link here 
    tenant: 'adfs',
    clientId: '<client ID>',
    endpoints: {
       api: "http://localhost:4439/" //api identifier
    },
    postLogoutRedirectUri: window.location.origin,
    redirectUri: "http://localhost:9000/", // application URI
    cacheLocation: 'sessionStorage'
   };
   

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
