import { exec } from "child_process";
import tdscli from "@totvs/tds-ls";

class CmdExec {
    private params: string;

    constructor(argv: Array<string>) {
        this.params = argv.splice(2).join(' ');
    }

    exec() {
        console.log('[INFO] Starting tdsCLI command...');
        
        var cmd = exec(`${tdscli} --tdsCliArguments="${this.params}"`);
        
        cmd.stdout?.on('data', (data)=>{
            console.log(data);
        });

        cmd.stderr?.on('data', (data:any)=>{
            console.error(`[ERROR] ${data}`);
        });
    }
}

export default CmdExec;