const fs = require('fs')
const chalk = require('chalk')

const loadNotes =  function(){
    try
    {
        const data = fs.readFileSync('print_notes_main.json')
        const stringData = data.toString();
        const objectData = JSON.parse(stringData);
        return objectData  ;
    }

    catch(e)
    {
        return [];
    }
}

const addNotes = function(title , body)
{
    const notes1 = loadNotes()

    notes1.push({
        title,
        body
    })

    console.log(notes1);


    savedata(notes1);
}

const removeNotes = function(title)
{
   
    const note2 = loadNotes();
   
    const uniqueNotes = note2.filter(function(i){
        if(i.title!==title)
        {                                   // that note / object of note2 will be added to uniqueNotes
            return true                     // if true is return(both title does not matches) then it will add that note in uniqueNotes
        }                                   // filter mathi g nikad se e uniqueNotes e add thatu jase
       
        else                                // that note / object of note2 will be not add to uniqueNotes
        {
            return false                    
        }                                   // if false is return (title matches) then it will filter out note all with mentioned title

    })      
   
    if(note2.length>uniqueNotes.length)
    {
        console.log(chalk.blue.inverse("all note with specified title and body remove"))
        savedata(uniqueNotes);
    }

    else
    {
        console.log(chalk.green("no duplicate note"))
        savedata(uniqueNotes);
    }
}

const savedata = function(notes1){
    const print = JSON.stringify(notes1)
    fs.writeFileSync('print_notes_main.json',print)
}

module.exports = {
    addNotes , removeNotes
}

console.log('helo/ hi');