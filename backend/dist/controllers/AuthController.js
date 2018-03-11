"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    join(ctx) {
        const { name: userName, password: userPassword, email: userEmail } = ctx.request.body;
        this.authService.join({ userName, userPassword, userEmail });
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map