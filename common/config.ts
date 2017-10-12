import * as fs from "fs";

export class Config {

    public file_path: string = "../../config/config.json";
    public config_file: any; // JSON object

    public hasConfigFile(): boolean {
        return fs.existsSync(this.file_path);
    }

    constructor() {
        if(!this.hasConfigFile()) {
            console.log('Config file not exists');
            process.exit(1);
        }

        this.config_file = JSON.parse(fs.readFileSync(this.file_path).toString());
    }

    public getValue(key: string): string {
        return this.config_file.hasOwnProperty(key) ? this.config_file[key] : null;
    }
}