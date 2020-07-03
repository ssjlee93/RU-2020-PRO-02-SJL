DROP DATABASE IF EXISTS pr_db;
CREATE DATABASE pr_db;

USE pr_db; 

CREATE TABLE exercizes (
id INT AUTO_INCREMENT NOT NULL,
PRIMARY KEY(id),
weights INT,
reps INT NOT NULL DEFAULT 10,
exercise varchar(255) NOT NULL
);  

CREATE TABLE routines (
id INT AUTO_INCREMENT NOT NULL,
PRIMARY KEY(id),
routine_name varchar(255) NOT NULL, 
sets INT NOT NULL DEFAULT 1,
exercise_id INT REFERENCES exercizes(id)
);  