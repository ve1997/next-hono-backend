"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRoute = void 0;
const zod_validator_1 = require("@hono/zod-validator");
const hono_1 = require("hono");
const zod_1 = require("zod");
const searchSchema = zod_1.z.object({
    q: zod_1.z.string().min(1, "Search query must not be empty!"),
});
const app = new hono_1.Hono();
const routes = app.get("/", (0, zod_validator_1.zValidator)("query", searchSchema), (c) => {
    const { q } = c.req.valid("query");
    if (!q.trim()) {
        return c.text("You didn't search for anything!", 400);
    }
    return c.text(`You searched for ${q}!`, 200);
});
exports.searchRoute = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGFtYmRhL3JvdXRlcy9zZWFyY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQWlEO0FBQ2pELCtCQUE0QjtBQUM1Qiw2QkFBd0I7QUFFeEIsTUFBTSxZQUFZLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsaUNBQWlDLENBQUM7Q0FDdkQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN2QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFBLDBCQUFVLEVBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUMsQ0FBQztBQUVnQiw2QkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHpWYWxpZGF0b3IgfSBmcm9tIFwiQGhvbm8vem9kLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgSG9ubyB9IGZyb20gXCJob25vXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5jb25zdCBzZWFyY2hTY2hlbWEgPSB6Lm9iamVjdCh7XG5cdHE6IHouc3RyaW5nKCkubWluKDEsIFwiU2VhcmNoIHF1ZXJ5IG11c3Qgbm90IGJlIGVtcHR5IVwiKSxcbn0pO1xuXG5jb25zdCBhcHAgPSBuZXcgSG9ubygpO1xuY29uc3Qgcm91dGVzID0gYXBwLmdldChcIi9cIiwgelZhbGlkYXRvcihcInF1ZXJ5XCIsIHNlYXJjaFNjaGVtYSksIChjKSA9PiB7XG5cdGNvbnN0IHsgcSB9ID0gYy5yZXEudmFsaWQoXCJxdWVyeVwiKTtcblx0aWYgKCFxLnRyaW0oKSkge1xuXHRcdHJldHVybiBjLnRleHQoXCJZb3UgZGlkbid0IHNlYXJjaCBmb3IgYW55dGhpbmchXCIsIDQwMCk7XG5cdH1cblx0cmV0dXJuIGMudGV4dChgWW91IHNlYXJjaGVkIGZvciAke3F9IWAsIDIwMCk7XG59KTtcblxuZXhwb3J0IHsgcm91dGVzIGFzIHNlYXJjaFJvdXRlIH07XG4iXX0=