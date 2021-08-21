## Steps to follow

```bash
#1 Installing the dependencies
npm i
```

```bash
#2 Running the server
npm start
```

```bash
#3 Open Postman and Follw the format , language Code is given in root dir of languageCode.js
` http://localhost:7000/api/translate?from=langCode&to=langCode&text=textToTranslate `
```

```bash
#Example => Just Copy and paste after starting the server
` http://localhost:7000/api/translate?from=en&to=hi&text=Work Done `
```

## Documentation

```bash
I have used google-translate-api npm module i.e basiclally a typescript library
# npm i @vitalets/google-translate-api installed using this

It takes basically 3 arg
#1 => text   which we want to translate
#2 => from   means the current language in which we are writing the text
#3 => to     means in which lang we want to translate


I am using MongoDB atlas Cloud base noSQL database

I have created a schema named as translator where i am storing the text , from , to and translated text.

After hitting API once im storing it in database so that we dont need to hit the API for samething multiple times

## Folder Structure
 config => Written the configuration of MongoDB Connection
 model => written the Schema
 routes => it has a root index.js which we use a folder api and in api i have written index.js where we will use controller
 controller => I have written controller part here in homeController.js file means all the functionality is written here
 index.js => This is the entry point where i have created server
 languageCode.js => all the language Code is written here

```
