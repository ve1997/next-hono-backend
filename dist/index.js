"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.routes = void 0;
const hono_1 = require("hono");
const aws_lambda_1 = require("hono/aws-lambda");
const cors_1 = require("hono/cors");
const register_1 = require("./routes/register");
const search_1 = require("./routes/search");
const user_1 = require("./routes/user");
const app = new hono_1.Hono();
app.use((0, cors_1.cors)());
exports.routes = app
    .get("/", (c) => c.text("Hello, Hono!"))
    .route("/register", register_1.registerRoute)
    .route("/search", search_1.searchRoute)
    .route("/user", user_1.userRoute);
exports.handler = (0, aws_lambda_1.handle)(app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sYW1iZGEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQTRCO0FBQzVCLGdEQUF5QztBQUN6QyxvQ0FBaUM7QUFDakMsZ0RBQWtEO0FBQ2xELDRDQUE4QztBQUM5Qyx3Q0FBMEM7QUFFMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsV0FBSSxHQUFFLENBQUMsQ0FBQztBQUVILFFBQUEsTUFBTSxHQUFHLEdBQUc7S0FDdkIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUN2QyxLQUFLLENBQUMsV0FBVyxFQUFFLHdCQUFhLENBQUM7S0FDakMsS0FBSyxDQUFDLFNBQVMsRUFBRSxvQkFBVyxDQUFDO0tBQzdCLEtBQUssQ0FBQyxPQUFPLEVBQUUsZ0JBQVMsQ0FBQyxDQUFDO0FBSWYsUUFBQSxPQUFPLEdBQUcsSUFBQSxtQkFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9ubyB9IGZyb20gXCJob25vXCI7XG5pbXBvcnQgeyBoYW5kbGUgfSBmcm9tIFwiaG9uby9hd3MtbGFtYmRhXCI7XG5pbXBvcnQgeyBjb3JzIH0gZnJvbSBcImhvbm8vY29yc1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9IGZyb20gXCIuL3JvdXRlcy9yZWdpc3RlclwiO1xuaW1wb3J0IHsgc2VhcmNoUm91dGUgfSBmcm9tIFwiLi9yb3V0ZXMvc2VhcmNoXCI7XG5pbXBvcnQgeyB1c2VyUm91dGUgfSBmcm9tIFwiLi9yb3V0ZXMvdXNlclwiO1xuXG5jb25zdCBhcHAgPSBuZXcgSG9ubygpO1xuYXBwLnVzZShjb3JzKCkpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gYXBwXG5cdC5nZXQoXCIvXCIsIChjKSA9PiBjLnRleHQoXCJIZWxsbywgSG9ubyFcIikpXG5cdC5yb3V0ZShcIi9yZWdpc3RlclwiLCByZWdpc3RlclJvdXRlKVxuXHQucm91dGUoXCIvc2VhcmNoXCIsIHNlYXJjaFJvdXRlKVxuXHQucm91dGUoXCIvdXNlclwiLCB1c2VyUm91dGUpO1xuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gdHlwZW9mIHJvdXRlcztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBoYW5kbGUoYXBwKTtcbiJdfQ==