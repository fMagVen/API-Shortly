# API-Shortly :shorts:
###### so tiny 😜

## API Project to shorten URLS! (well, actually any string)

## :hammer_and_wrench: Installation

### Make sure you have the following tools installed before you begin:
<p>
	<a href="https://git-scm.com/"><img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/></a>
	<a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/></a>
</p>
<p>Not needed but recommended: <a href="https://code.visualstudio.com/">VSCode</a></p>


Use a terminal interface such as bash or zsh, and enter the following:
```bash
#download
gh repo clone fMagVen/API-Shortly

#access the folder you downloaded it to
cd API-Shortly

# install dependencies
npm i
```

The app will run locally and you must configure a `.env` file with a port of your choosing. The default one is 5000.
## Running
```bash
#you can run the development build with
npm run start

#alternatively, with nodemon, restarts the server after every change saved
npm run dev
```

## :scroll:Documentation
### All requests are HTTP based
#### `POST /login, /users`
<br>
To signup, send a post request to /users with a JSON with the following keys and values:

{

	name: your name
	email: your email
	password: enter a password

}

<br>

To login, send a post request to /login with a JSON with the following keys and values:

{

	email: the email you registered with
	password: your account's password

}
<br>

The API will return a token which will be used to authenticate every screen swap and transaction, to use it, please send a header with the following:
```bash
{ Authorization: Bearer <token> }
```
Where <token> is the token sent by the server

``` POST /urls ```

BIG WIP!

### :man_technologist: Authors
<br>
<div style="display: flex; justify-content: space-around">
<div>
<p>Initial code & auth features by</p>

<a href="https://github.com/mdnm"><img  style="border-radius: 50%;"  src="https://avatars.githubusercontent.com/u/36714557?v=4"  width="100px" alt="dina"/></a>

[![Outlook Badge](https://img.shields.io/badge/-mateusdnm@hotmail.com-blue?style=flat&link=mailto:mateusdnm@hotmail.com)](mailto:mateusdnm@hotmail.com)

[![Linkedin Badge](https://img.shields.io/badge/-Dina-Moura?style=flat&logo=Linkedin&logoColor=white&color=blue&link=https://www.linkedin.com/in/mateusdnm)](https://www.linkedin.com/in/mateusdnm/)
</div>
<div>
<p>URL & GET user features by</p>
<a href="https://github.com/fMagVen"><img  style="border-radius: 50%;"  src="https://avatars.githubusercontent.com/u/78576546?v=4"  width="100px" alt="Felipe Ventura"/></a>

[![Gmail Badge](https://img.shields.io/badge/-fmagven93@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:fmagven93@gmail.com)](mailto:fmagven93@gmail.com)

[![Linkedin Badge](https://img.shields.io/badge/-Felipe-Ventura?style=flat&logo=Linkedin&logoColor=white&color=blue&link=https://www.linkedin.com/in/fmagven/)](https://www.linkedin.com/in/fmagven/)
<p>Contact me anytime!</p>
</div>
</div>