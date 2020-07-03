# RU-2020-PRO-02-SJL

![MySQL](https://img.shields.io/static/v1?label=SQL&message=MySQL&color=4479a1)
![Heroku](https://img.shields.io/static/v1?label=heroku&message=deployed&color=430098)
![Node.js](https://img.shields.io/static/v1?label=Node.&message=js&color=68a063)
![express.js](https://img.shields.io/static/v1?label=express&message=.js&color=68a063)
![Materialize](https://img.shields.io/static/v1?label=Materialize&message=CSS&color=eb7077)
![JawsDB](https://img.shields.io/static/v1?label=JawsDB&message=MySQL&color=2cb9ff)

 https://ru-2020-proj-ct-02.herokuapp.com/

## Table of Contents 

* [Collaborators](#Collaborators)
* [Proposal](#Proposal)
* [Title](#My-Personal-Record-Tracker)
* [Technologies](#Potential-new-technologies)
* [Sketch](#Sketch)
* [Progress](#Progress)

* [Final](#Final-product)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Developments](#Developments)

### Collaborators 
* Erica Cannedy - backend: Sequelize main;
* Kobe Matias - new technology development and frontend: HTML, CSS;
* Jenny Yoon - presentation and frontend: JavaScript main;
* Steve Lee - backend and debugging;

## Proposal 
Original proposal of this projəct

### My Personal Record Tracker 

This full-stack application allows users to create, read, update, and delete an exercise routine.

### Potential new technologies
*	Material Design Components – mobile design CSS framework;
*	Anime.js;
*	ClearDB – JawsDB alternative;
*	Materialize;
*	Foundation;

### Sketch
Wireframe of our PR Tracker 

![Wireframe](/wireframe.jpg)

## Progress 

##### Single table
* Initially, we began with one table with 5 exercises. 
* Columns: Routine name, sets, exercise 1, reps 1, ... exercise 5, reps 5

  Several problems arose with the structure: 
  1. Set number of exercises in a routine 
  2. No customization for reps for each exercise 
  3. No weight specification 
  4. Empty strings will be passed from the client side to the server when no exercise is input for exercises 2~5.

  To reflect more practical user experience, we split the above structure into two tables: routines and exercises.

##### Join Table
* Routines table: routine name, sets 
* Exercises table: exercise, reps, weight (not null), foreign key to routines id 

* To reflect the new table structure above, client-side needed to dynamically add forms. When adding a routine, we added a button to add more exercises instead of having a preset form. 

* In the midst of split table structure, we realized that more elements were dynamicaally generated. To avoid errors and complication, we reverted to the original structure mentioned above. 

##### Single table
* Columns: Routine name, sets, exercise 1, reps 1, ... exercise 3, reps 3

In order to avoid problems mentioned above, we made the following changes: 
1. all fields are required - users will have to input everything so that no empty string exists. 
2. Added reps for each exercise, but still has set number of exercises and sets 

* In the edit button, we added the initial values for each field. 

## Final product 

### Installation
* Create a database in MySQL workbench. The schema is in the db file. 

```
npm install sequelize, mysql2, express
```

### Usage 
![01](/01.PNG)
![02](/02.png)
![03](/03.png)

1. Visit the link. 
```
 https://ru-2020-proj-ct-02.herokuapp.com/
```
2. Press CREATE YOUR ROUTINE button. 
3. Fill in al lfields and press CREATE ROUTINE
4. You shall see the routine on the page. 
5. Edit your routine by pressing EDIT button. 
6. Delete your routine by pressing DELETE button. 

### License
MIT

### Developments
* user_id, user authentication. 
* dry the code 
* join table model: routines table and exercises table. This method is saved in project-2 alternative
    * for-loop to grab values from front end. Then it might work. 
