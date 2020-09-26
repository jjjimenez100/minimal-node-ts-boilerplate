import App from './App';
import { createServer, Server as HttpServer } from 'http';

class Server {
    private static serverInstance: Server;
    private server: HttpServer;

    private constructor() {
        const appInstance = new App();
        this.server = createServer((req, res) => {
            res.writeHead(200);
            res.end(appInstance.getMessage());
        });
    }

    public static INSTANCE(): HttpServer {
        if (!Server.serverInstance) {
            this.serverInstance = new Server();
        }

        return this.serverInstance.server;
    }
}

export default Server;
