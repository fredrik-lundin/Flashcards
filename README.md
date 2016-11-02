# Flashcards

## Project description
This is a web based solution for simulating the usage of flashcards when learning a language. 
The first stage will be to get all very basic and simple funcionality in.

## Technologies
This is an aspnet core application consisting of two main parts:
* An api written with .net Web Api
* A web app written in Angular 2 (managed by Angular CLI, embeded inside a .net Class library project)

## Run the solution

### Prerequisites
* Both the Angular CLI and Angular 2 itself have dependencies that require Node 4 or higher, together
with NPM 3 or higher.
* Angular CLI:
```bash
npm install -g angular-cli
```
* .NET Core

### Run the Web api
1. Open the solution in Visual studio 2015
2. Make sure the Flashcards.Api set as startup project
3. Press f5 to Run

### Run the Angular 2 project separatly (in dev mode)
1. Open a temrinal and cd into the /src/Flashcards.Web
2. Install npm packages:
```bash
npm install
```
3. Run the npm start command:
```bash
npm start
```

### Run the projects together
1. Open a temrinal and cd into the /src/Flashcards.Web
2. Install npm packages:
```bash
npm install
```
3. Run the angular cli build command:
```bash
ng build
```
3. Generated files will be placed in Flashcards.Api/wwwroot folder
4. Run solution as normal from Visual Studio (f5)
