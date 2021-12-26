export const MockAuth = {
    isAuthenticated: false,
    authenticate(username: string, password: string) {
        if(username === "bob" && password === "123") {
            this.isAuthenticated = true;
        }
    },
};