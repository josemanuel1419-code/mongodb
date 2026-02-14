import mongoose from 'mongoose';


export class MongoDBConnection {
    async connect() {
        try {
            await mongoose.connect('mongodb://system:secret123456@localhost:27017/', {dbName: "system" });
            console.log('Connected to MongoDB successfully');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }
}