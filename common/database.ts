import * as mongoose from "mongoose";

//mongo --port 27017 -u "notification-service" -p "my_password" --authenticationDatabase "admin"

export class Database {

    public db;

    private on_connection() {
        console.log('Mongoose default connection open');
    }

    private on_disconnection() {
        console.log('Mongoose default connection disconnected');
    }

    private on_error(err: any) {
        console.log('Mongoose default connection error: ' + err);
    }

    public connection(login: string, password: string, host: string, port: string, authDbName: string) {
        mongoose.connect(`mongodb://${login}:${password}@${host}:${port}/${authDbName}`);

        mongoose.connection.on('connected', this.on_connection);
        mongoose.connection.on('disconnected', this.on_disconnection);
        mongoose.connection.on('error', this.on_error);

        this.db = mongoose;
    }

    public isConnection() {
        return mongoose.connection.readyState;
    }
}