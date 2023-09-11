// let yargs = require("yargs")

// yargs.command({
//     command:'add',
//     handler: function(){
//         console.log("added"),
//         demandOption=true
//     }
// })

// console.log(process.argv);
// console.log(yargs.argv)


const yargs = require('yargs')
const i = require('./yargs_main_notes.js')

yargs.command({
    command:'add' ,
    builder:
    {
        title:
        {
            demandOption : true,
            type: 'string'
        } ,

        body:
        {
            demandOption : true ,
            type: 'string'
        }
    },

    handler : function(argv){
        i.addNotes(argv.title , argv.body)
    }
})

yargs.command({
    command:'remove' ,
    builder:
    {
        title:
        {
            demandOption : true,
            type: 'string'
        }
    },

    handler : function(argv){
        i.removeNotes(argv.title)
    }
})

yargs.argv