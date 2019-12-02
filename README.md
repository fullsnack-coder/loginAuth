# Login app in Node.js # 👨‍💻
This is an application made with nodejs connected to a remote database in mongodb. Deployed with heroku service.
This project it's aliveeeee! in this [link](https://awesome-login.herokuapp.com/)
- Some screenshots **(Home view)**
![Imgur](https://i.imgur.com/CpQvu9Y.png)

- **Profile view**
![Imgur](https://i.imgur.com/Gk6B63v.png)

### Feature
The user can register, saving an email and a password in encrypted form for greater security, to be able to access protected routes of the application. Once registered, a session will be initiated that will only be deleted by pressing the option to log out or closing the browser. This authentication is done with passport.js. User information is stored in a database remotely. It can be configured to work locally by changing the settings of the environment variables.

### Libraries
- Express.js
- Mongoose
- Morgan
- Bcrypt
- Ejs
- Passport and passport-local
- Connect-flash

## Usage
### Requirements
- Node.js ( last stable version )
- Express
- MongoDB database ( local or remote )

### Instalation
>Download the repository.

	npm install
	
>Configure the mongodb uri in **.env.example** file
>Configure the server port in **.env.example** file.
>
>![Imgur](https://i.imgur.com/5L0CfNU.png)>

>Change the extension from **.env.example** to **.ev**
>The file should look like this
>![Imgur](https://i.imgur.com/zG062LM.png)
>Save and run the next command.

	npm run devStart

Enjoy!

### Licence
>MIT
