# Fitness-Tracker

HW #18 UofA coding bootcamp

## Description

This is a workout tracking application; it runs using mongoose, node, using a mongodb database and is deployed on heroku




## Table of Contents

* [License](#license)

* [Installation](#installation)

* [Usage](#usage)

* [Credits](#credits)

* [Questions](#questions)

---

## License
 
> [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Installation

Right click on server.js file run integrated terminal 

```
npm i
```

If the package.json file is missing, run these following commands:

```
npm init -y
```
```
npm i inquirer
```
```
npm i mysql
```

## Usage

To initialize the app, right-click on the db/ directory and open the integrated terminal. Start the mysql dependency with this command:

```
mysql -u root
```

To create the tables copy the absolute path of the schema.sql. Then type in source in the terminal and paste the path:

```
source: <file path to schema.sql>
```

If you would like to seed the table with the created values, then copy the "absolute path" to seed.sql and run this in the terminal:

```
source: <file path to seed.sql>
```

Then exit mysql

```
exit
```

Next we want to seed the data

```
npm run seed
```

To view the tables and edit their content, run the following command:

```
node server.js
```


## Credits

MIT badge is displayed using another GitHub user links [Lukas Himsel](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Questions

If you feel you have any questions, please feel free to reach out to me at stonge.ms@gmail.com