const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = 'raid.json';

const DATE = moment().format();

const data = {
    date: DATE
}

jsonfile.writeFile(FILE_PATH, data);

// git commit --date="Mon 28th July"
simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE });