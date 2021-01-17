### Summer 2021 - Shopify
Developer Intern Challenge Question

## TASK: Build an image repository.
The application contains node.js api for searching, uploading, deleting images 
- **M**ongoDB : : Document database – used by your back-end application to store its images
- **E**xpress (sometimes referred to as Express.js): Back-end web application framework running on top of Node.js
- **N**ode.js : JavaScript runtime environment – lets you implement your application back-end in JavaScript

### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* mongodb - [Download page](https://www.mongodb.com/download-center/community) . 

### Installation 
``` 
git clone https://github.com/iftekharulhaq2/ShopifyBackendTask
cd ShopifyBackendTask
npm install
node app.js
```
### API Usage
The server runs on port 3000, use the postman collection provided to test the functionality 
example `http://localhost:3000/uploadImage`

 
### Endpoints 
 - **/uploadImage/** : 
    - Methods: **Post**
    - Description: Uploads images which get uploaded into our db and aswell uploads in a the folder 'uploads'.
    - Body: name, user, file, permission
    
    User details here in a complete action will be somekind of token which will be generated after authentication, and permissions here are for acess control
![upload](https://raw.githubusercontent.com/iftekharulhaq2/ShopifyBackendTask/main/Gifs/Upload.gif)

 - **/searchImages/** : 
    - Method: **POST**
      - Description: Searches all images that are in public domain, will not be able to find out images that are private.
      - Body: name
      
 ![upload](https://raw.githubusercontent.com/iftekharulhaq2/ShopifyBackendTask/main/Gifs/SearchImages.gif)
 
 - **/delete/** : 
    - Method: **POST**
      - Description: Will only delete images if image owner provided correctly and the name of the image is correct or else will send an not file not found message.
      - Body: phone
  ![upload](https://raw.githubusercontent.com/iftekharulhaq2/ShopifyBackendTask/main/Gifs/delete.gif)
      
      
      
 - **/fetchAllPublicImages/** : 
    - Method: **GET**
      - Description: fetches all the images that are publicly available.
      - Body: not required
   ![upload](https://raw.githubusercontent.com/iftekharulhaq2/ShopifyBackendTask/main/Gifs/fetechPublicImages.gif)
          
 - **/fetchUserBasedImages/** : 
    - Method: **POST**
      - Description: Searches all images that are in assosiated by that user only.
      - Body: user
      
        ![upload](https://raw.githubusercontent.com/iftekharulhaq2/ShopifyBackendTask/main/Gifs/fetchUserSpecificImages.gif)
