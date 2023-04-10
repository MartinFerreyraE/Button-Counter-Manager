# Hello! Here are the instructions to run the project

### Built with

[![My Skills](https://skills.thijs.gg/icons?i=nodejs&theme=dark)](https://nodejs.org/es)
[![My Skills](https://skills.thijs.gg/icons?i=mysql&theme=dark)](https://www.mysql.com/)
[![My Skills](https://skills.thijs.gg/icons?i=js&theme=dark)](https://developer.mozilla.org/es/docs/Web/JavaScript)

### Prerequisites

You need to have Node.js and MySQL Workbench installed

### Installation

1. Clone the repo
   ```sh
   https://github.com/MartinFerreyraE/Button-Counter-Manager.git
   or
   git@github.com:MartinFerreyraE/Button-Counter-Manager.git
   ```
2. Go to the Client folder and Install NPM packages
   ```sh
   npm install
   ```
3. Go to the Server folder and Install NPM packages
   ```sh
   npm install
   ```
4. Now we create the DB in MySQL Workbench. Connect with local instance and click here
   ![image](https://user-images.githubusercontent.com/80933510/230970184-81adba39-6729-4a8d-b4e7-b7af17fbd483.png)
5. We name our DB buttonsmanager. You can choose the name you want but will have to change the name in '/server/db.js'.
  
      ![image](https://user-images.githubusercontent.com/80933510/230972079-fe14d8fb-75fb-4639-b9d2-04db11cb4f79.png)
  
   Then click 'Apply'

6. Now we select and open 'buttonsmanager', right click on 'Tables' and select the option 'Create Table'
7. Then enter the data and options as they are in the image, then click 'Apply'
  ![image](https://user-images.githubusercontent.com/80933510/230972624-e1c4d4c8-a3bf-49f3-a678-911840e643f3.png)  
8. Go to 'server/db.js' and configure your Workbench settings. Now we are ready to run the project! 🙌🏻🙌🏻
9. Go to the client folder and run  ```npm start``` in the console.
10. Go to the server folder and run  ```npm start``` in the console.
11. Go to http://localhost:3000/ and you're up!

Thank you very much for visiting my repository! 💪🏻
