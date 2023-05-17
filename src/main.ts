import { Command } from "commander";

const program = new Command()
                  .name("DB Archiver")
                  .description("small utility program designed to create archives of databases");

program.command('archive')
       .description("Creates an archive/backup of the database given")
       .argument('<string>', 'name of backup')
       .option('--host', 'host of the database')
       .option('--user', 'username to use to connect')
       .option('--password', 'password of the user to connect')
       .action((str, options) => {
        console.log(options)
        console.log(str)
       })

program.parse();
