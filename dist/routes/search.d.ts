import { Hono } from "hono";
declare const routes: Hono<{}, {
    "/": {
        $get: {
            input: {
                query: {
                    q: string | string[];
                };
            };
            output: "You didn't search for anything!";
            outputFormat: "text";
            status: 400;
        } | {
            input: {
                query: {
                    q: string | string[];
                };
            };
            output: `You searched for ${string}!`;
            outputFormat: "text";
            status: 200;
        };
    };
}, "/">;
export { routes as searchRoute };
