# React

- react is a javascript library created by facebook
- react is a user interface UI library
- react is a tool for building UI components

# why we need react?
- DOM is slow in its real form
- react uses virtual DOM, which is significantly faster and more efficient to update
- simple and easy to learn
- reusability
- robust re-rendering with virtual DOM
- native libraries
- performance

# create a new react app
> node --version
> npm --version

> npm i create-react-app -g  // global
> create-react-app --version
> create-react-app <project_name> 
> cd <project_name>
> npm start

http://localhost:3000


or

> npx create-react-app <project_name>
> cd <project_name>
> npm start



# Folder structure of React Project
- package.json - this file contain app meta data, scripts and list of depedencies
	         this file is maintain by npm (node package manager)

- package-lock.json - auto generated file maintained by npm

- node_modules - this folder contain the dependenices source code required for react project
                 > npm install

- public - this folder contain public assets of the app, it also contain index.html where
           react will mount the app component

- .gitignore - any file and folder you want to ignore while pushing the code on remote server

- README.md - it provide the documentation or any instruction

- src - source  - it contain the app source code where we mostly create files

App source code has 3 files:
there are 3 files with the same name but different extension
these 3 file together create your root component

App.js - main js file
App.css - styling
App.test.js - test case

index.css - global css file

index.js - main entry point of the app


# Component 
- main building block
- build moduler UI

# Type of components
1. class component - statefull component
2. functional component - stateless component

state = data


# Create first component



