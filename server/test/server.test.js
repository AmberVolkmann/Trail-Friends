let app = require('../server');
let testServer = require('supertest');

describe('Test the root path', () => {
    test('it should respond 200 to the logout route', async () => {
        //"hey test server, start up the app, when you do make a post request to this address"
        const response = await testServer(app).post('/api/user/logout');

        expect(response.statusCode).toBe(200);
    });

    it('should protect the /user route', async () => {
        const response = await testServer(app).get('/api/user');
        expect(response.statusCode).toBe(403);
    });


});