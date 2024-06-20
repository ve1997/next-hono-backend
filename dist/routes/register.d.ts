import { Hono } from "hono";
declare const routes: Hono<{}, {
    "/": {
        $get: {
            input: {};
            output: "Hello, RegisterRoute!";
            outputFormat: "text";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    email: string;
                    uname: string;
                };
            };
            output: {
                message: string;
                timestamp: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/">;
export { routes as registerRoute };
