import express from 'express';
import { AppServer } from './server';
import { MongoDBConnection } from './common/databases/mongodb/connect';

async function bootstrap() {
    // Mongo connection and app initialization logic goes here
    await new MongoDBConnection().connect();

    // Run sever
    new AppServer().start();
}


bootstrap();