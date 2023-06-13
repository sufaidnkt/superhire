## Problem statement

You are given a dataset of movies in data.json file. The file contains movies, its rating and genres.

Your program should accept a genre as input and it should print top 3 movies in that genre along with their rating.

The top three movies should be sorted by number of genres of each movies.

An example of your code running should be as follows.

$ node sample.js --data data.json
-- Movie search --
Input genre >> Drama

1. 12 Angry Men (8.9)
2. Godfather (9.2)
3. Citizen Kane (8.5)

Input genre (type q to quit) >>

## Coding guidelines

1. You should submit the solution in either javascript or typescript executable using nodejs.
2. You should submit clean, readable and working code.
3. Your code should have tests.

## Solution

for running the solution you need to have nodejs installed on your machine.

$ node index.js data/data.json

for running the tests
$ npm install --save-dev jest
$ npm test

[]: # (END README.md)
