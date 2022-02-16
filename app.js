
const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes.js");

yargs.version("1.1.0")

yargs.command({
    command: "add",
    describe: "add a new note",
    builder:{
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        },
        
        body:{ 
            decscribe: "note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }

})

yargs.command({
    command: "remove",
    describe: "remove a note",
    builder: {
        title:{
            describe: "note title",
            demandOption: true,
            type: string
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: "list", 
    decribe: "creates a list",
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "reads a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNote
        
    }
})

yargs.parse()
//console.log(yargs.argv)