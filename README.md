Working with the Project

First in the client and second in the server.

In the Client Folder create .env file and put this code inside it.

.env

REACT_APP_SERVER_DOMAIN='<server_domain>' # example 'http://localhost:8080'

After that create a file in the Server Folder with the name config.js and put the below code inside it.

config.js

export default {
    JWT_SECRET : "<secret>", get it by using bash command openssl 
    EMAIL: "juston.lehner@ethereal.email", // testing email & password get it from nodemailer
    PASSWORD : "Fpszad3A3ArWfdFHt3",
    ATLAS_URI: "<MONGODB_ATLAS_URI>" get it from mongodb 
}


Note: The ATLAS_URI is important to work this project.

Now, create all these variables in the project and make sure you set ATLAS_URI variable.
Otherwise, the project will not work.
