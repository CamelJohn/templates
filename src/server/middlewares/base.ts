import express from 'express';
import cors from 'cors';

export const BaseMiddlewares = [express.json(), express.urlencoded({ extended: false }), cors()];
