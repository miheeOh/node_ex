import * as express from 'express';
declare class PostsController {
    path: string;
    router: import("express-serve-static-core").Router;
    private posts;
    constructor();
    initializeRoutes(): void;
    getAllPosts: (req: express.Request, res: express.Response) => void;
    createPost: (req: express.Request, res: express.Response) => void;
}
export default PostsController;
