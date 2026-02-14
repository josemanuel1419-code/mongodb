import express from 'express';
import { FactoryRoute } from './routes';

export class AppServer {
    app = express();
    port = 3000;
    
    start() {
        // Middleware to parse JSON requests
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Sample route
        this.app.use( FactoryRoute.route )

        // Listening on the specified port
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }
}