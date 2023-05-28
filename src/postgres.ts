import { ExecException, exec } from "child_process";

type DbConfig = {
    host: string;
    user: string;
    password: string;
}

export function archive(dbName: string, config: DbConfig): void {
    exec(`sudo pg_dump -Fc -h ${config.host} -U ${config.user} ${dbName} > ${dbName}.dump`, processDump)
}

function processDump(error: ExecException | null, stdout: string, stderror: string): void {
    if (error) {
        console.error(`Failed dump database with error: ${error.message}`);
        throw error
    }

    console.log(stdout)
    console.error(stderror)
}