# What are the odds?

### An Application to help people make decisions based on statistics in making decks in a card game.

#### By Justin Lee 

## Technologies Used
* React
* JavaScript
* HTML 
* Bootstrap

## Description

This website uses takes in user information about a specific deck and uses those ratio's to run a simulated test 10,000 times in order to give users visual data of seeing a Rookie in first hand, Rookie & a champion, and what MIGHT their security be.

## Setup/Installation Requirements

* Git clone reposiotory to whatever directory to desktop.
* Make sure to have `node.js` installed.
* Open directory in any IDE and run the command `npm run build` 
* Use command `npm run start` to run development server locally in the `capstone-project` folder.
* Hosted on `https://digimonoddssimulator.netlify.app/` 


## Known Bugs

* Not made for mobile users 

## License

MIT

Copyright (c) 05-18-23 Justin Lee.


### Research & Planning Log
### Friday, 04/28/2023
* 820 Make a personal to do list
* 920 Switch from researching graphing tools to writing project propasal
* 1015 Finished project proposal, watching videos on Nivo/Experimenting.
* 100 Start practicing and understanding Nivo / thinking about react client.
* 320 Work on Figma design for what I want it to look like.
* 400 Clean up Capstone project files, creating component map for project.
* 445 Have a good understanding of goals and objectives for next few times I work on it after tinkering with everything.

### Friday, 05/05/23
* 8-9am Resolving some bugs, reviewing old projects for guide.
* 5-6pm Resolving nivo Dependancy, adding more depandacies for project.
Example project did not use react 17.0 therfore there are dependancy issues with using NIVO because I'd have to learn a different version of react 17.0 in order to code, causing a lot of issues. Deciding on wether or not to continue using NIVO or use a different library for charts.
* 6-7PM Reading Plotly documentation and being sad that NIVO doesn't work in 18.0.0
* 7-8PM Testing Plotly in seperate file to see if it works WIP.

### Saturday, 05/06/23

* 8-9AM Cleaning project folder, no longer using react. Just using Webpack to compile website. Reviewing how to set up file strucutre
* 9-10AM Bug fixing webpack configs WIP...

### Sunday, 05/07/23

* 1800-1830 Created form, WIP math for rookie calculator, rookie graph... etc"
* 1830-1930 Testing Different Bar graphs settings, reading documentation fixing errors WIP.
* 2030-2130 Creating draw algorithims WIP.

### Friday, 05/12/23
* 930-1030 Create deck maker function. WIP Testing bar graph that shows ratio. 
* 1030-1130 Create function that displays listed numbers in a graph, grabs correct numbers from forum.
* 1500-1530 Bug fixing, missed variable name 
* 1530-1630 Add logic to cover edge cases,  adding logic to shuffle an array multiple times... WIP
* 1630-1730 Working on logic for rookie Odds...

### Saturday, 05/13/23
* 2200-2230 Working on logic for Rookie odds.

### Sunday, 05/14/23
* 0700-0800 Debugging function for rookie odds + graphing functionality (pie chart)
* 0800-0900 bug fixing create Data, bug fixing rookie.
* 0900-1000 Same bug, issue with dealing with nested forloops and its interaction with the checker.

### Monday, 05/15/23 
* 1300-1400 Changed format of README to military time to track time easier. Solved function for Rookie Odds.
* 1400-1500 Create createDatao.js logic.
* 1500-1600 Refactoring Old cde.
* 1600-1700 An old bug comes back

### Tuesday, 05/16/23

* 0900-1000 Resolved bug for index.js, imported the wrong JS logic.
* 1000-1100 Refactor logic for giving out object containg data (cleaning up Index from business logic as much as I can), debugging Pie graph.
* 1100-1200 Pie graph implemented, needed to change data type, thinking about other data structures to implement.
* 1300-1400 Implement another Calculation to check if Rookie and Chmapion is in hand.
* 1400-1500 Implement creation of data for rookies and champions
* 1500-1600 Implement data in graph, working on Security logic WIP
* 1600-1645 Doucmentation studying to find a graph device that works with what I want to d for tomorrow, thinking about syling and CSS tomorrow, Implementing Netlify hosting tomorrow.

### Wednesday, 05/17/23

* 0800-0900 Reading Netilify Documentation, planning how to style my site.
* 0900-1000 Add logic for gathering Security odd
* 1000-1100 Add logic to gather data into a giant object
* 1100-1200 WIP logic for graphing data for Securities odd 
* 1300-1400 Apply logic for graphing data and security odds
* 1400-1500 General styling with CSS/Bootstrap
* 1500-1545 Made Netlify Site, @ https://digimonoddscalculator.netlify.app/ 

### Thursday, 05/18/23

* 0800-0900 Add basic styling, grey gradient
* 900-1000 Add titles to graphs, cleaning up code