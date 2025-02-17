export default {

    
    name : process.env.APP_NAME || "ProjectName",

    log  : process.env.APP_LOG || "dev",

    port : process.env.APP_PORT || 800,

    secret : process.env.APP_SECRET || 'NodeJSProject',

    
    /**
     * Stores the secret text which will be used while generating 
     * hash keys
     */
    url : process.env.APP_URL || 'http://localhost',
    

    /**
     * Stores if server is Secure or not for Secure flag in cookies
     */
    secure : (process.env.APP_SECURE == 'true') || false,

     /**
     * aws secret key 
     */

    AWS_ACCESS_KEY: 'AKIAJPLB4D32RF',

    AWS_SECRET_KEY: 'Mgo5LVpWKjnEape3j764IZ5H1IyBHDOBbhMuI',

    AWS_BUCKET: 'myproductbucet',

    AWS_REGION: 'us-east-1'


}