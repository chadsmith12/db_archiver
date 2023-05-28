import { Command } from "commander";
import { archive } from "./postgres.js";

const program = new Command()
                  .name("DB Archiver")
                  .description("small utility program designed to create archives of databases");

program.command('archive')
       .description("Creates an archive/backup of the database given")
       .argument('<string>', 'name of backup')
       .requiredOption('--host <string>', 'host of the database')
       .requiredOption('--user <string>', 'username to use to connect')
       .requiredOption('--password <string>', 'password of the user to connect')
       .action(archive)

program.parse();
