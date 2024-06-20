export declare const routes: import("hono/hono-base").HonoBase<{}, {
    "/user": {
        $get: {
            input: {};
            output: "Hello, userRoute!";
            outputFormat: "text";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
    "/user/:id": {
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
} & {
    "/search": {
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
} & {
    "/register": {
        $get: {
            input: {};
            output: "Hello, RegisterRoute!";
            outputFormat: "text";
            status: import("hono/utils/http-status").StatusCode;
        };
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
} & {
    "/": {
        $get: {
            input: {};
            output: "Hello, Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/">;
export type AppType = typeof routes;
export declare const handler: (event: import("hono/aws-lambda").LambdaEvent, lambdaContext?: import("hono/aws-lambda").LambdaContext | undefined) => Promise<import("hono/aws-lambda").APIGatewayProxyResult>;
