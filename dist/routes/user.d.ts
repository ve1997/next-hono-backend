import { Hono } from "hono";
declare const routes: Hono<{}, {
    "/": {
        $get: {
            input: {};
            output: "Hello, userRoute!";
            outputFormat: "text";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
} & {
    "/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: `Your ID is ${string}!`;
            outputFormat: "text";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/">;
export { routes as userRoute };
