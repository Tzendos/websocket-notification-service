import {Database} from "../common/database";
import {Config} from "../common/config";

export class NotificationService {

    public database: Database;
    public config: Config;

    constructor() {
        this.database = new Database();
        this.config = new Config();

        let login = this.config.getValue('login'),
            password = this.config.getValue('password'),
            host = this.config.getValue('host'),
            port = this.config.getValue('port'),
            authDbName = this.config.getValue('authDbName');

        if(!login || !password || !host || !port || !authDbName) {
            console.log('Не вся информация получена. Авторизация не возможна');
            process.exit(1);
        }

        this.database.connection(login, password, host, port, authDbName);
    }

    public start() {

    }
}