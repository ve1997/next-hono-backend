"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoute = void 0;
const zod_validator_1 = require("@hono/zod-validator");
const hono_1 = require("hono");
const zod_1 = require("zod");
const registerSchema = zod_1.z.object({
    uname: zod_1.z.string().min(3, "Username must be at least 3 characters long!"),
    email: zod_1.z.string().email("Invalid email format!"),
});
const app = new hono_1.Hono();
const routes = app
    .get("/", (c) => c.text("Hello, RegisterRoute!"))
    .post("/", (0, zod_validator_1.zValidator)("json", registerSchema), (c) => {
    const { uname, email } = c.req.valid("json");
    const res = {
        message: `You registered with username: ${uname} and email: ${email}`,
        timestamp: new Date().toISOString(),
    };
    return c.json(res, 200);
});
exports.registerRoute = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9sYW1iZGEvcm91dGVzL3JlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQUFpRDtBQUNqRCwrQkFBNEI7QUFDNUIsNkJBQXdCO0FBRXhCLE1BQU0sY0FBYyxHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDL0IsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLDhDQUE4QyxDQUFDO0lBQ3hFLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO0NBQ2hELENBQUMsQ0FBQztBQUVILE1BQU0sR0FBRyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDdkIsTUFBTSxNQUFNLEdBQUcsR0FBRztLQUNoQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDaEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFBLDBCQUFVLEVBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEQsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxNQUFNLEdBQUcsR0FBRztRQUNYLE9BQU8sRUFBRSxpQ0FBaUMsS0FBSyxlQUFlLEtBQUssRUFBRTtRQUNyRSxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7S0FDbkMsQ0FBQztJQUVGLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUM7QUFFZSwrQkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHpWYWxpZGF0b3IgfSBmcm9tIFwiQGhvbm8vem9kLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgSG9ubyB9IGZyb20gXCJob25vXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5jb25zdCByZWdpc3RlclNjaGVtYSA9IHoub2JqZWN0KHtcblx0dW5hbWU6IHouc3RyaW5nKCkubWluKDMsIFwiVXNlcm5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZyFcIiksXG5cdGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKFwiSW52YWxpZCBlbWFpbCBmb3JtYXQhXCIpLFxufSk7XG5cbmNvbnN0IGFwcCA9IG5ldyBIb25vKCk7XG5jb25zdCByb3V0ZXMgPSBhcHBcblx0LmdldChcIi9cIiwgKGMpID0+IGMudGV4dChcIkhlbGxvLCBSZWdpc3RlclJvdXRlIVwiKSlcblx0LnBvc3QoXCIvXCIsIHpWYWxpZGF0b3IoXCJqc29uXCIsIHJlZ2lzdGVyU2NoZW1hKSwgKGMpID0+IHtcblx0XHRjb25zdCB7IHVuYW1lLCBlbWFpbCB9ID0gYy5yZXEudmFsaWQoXCJqc29uXCIpO1xuXHRcdGNvbnN0IHJlcyA9IHtcblx0XHRcdG1lc3NhZ2U6IGBZb3UgcmVnaXN0ZXJlZCB3aXRoIHVzZXJuYW1lOiAke3VuYW1lfSBhbmQgZW1haWw6ICR7ZW1haWx9YCxcblx0XHRcdHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuXHRcdH07XG5cblx0XHRyZXR1cm4gYy5qc29uKHJlcywgMjAwKTtcblx0fSk7XG5cbmV4cG9ydCB7IHJvdXRlcyBhcyByZWdpc3RlclJvdXRlIH07XG4iXX0=