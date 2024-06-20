const createApp = require('../app'); // ייבא את האפליקציה כראוי
const request = require('supertest');

describe('Auth API', () => {
    let app;

    beforeAll(async () => {
        app = createApp(); // ודא שהפונקציה מחזירה את אובייקט Express
        const dbURI = 'mongodb://localhost:27017/test_db';
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    test('should register a new user', async () => {
        const res = await request(app)
            .post('/api/user/signUp')
            .send({ username: 'mytestuser', password: '123', email: 'testuser@example.com' });

        expect(res.status).toBe(201);
    });

    test('should login an existing user', async () => {
        const res = await request(app)
            .post('/api/user/signIn')
            .send({ username: 'mytestuser', password: '123', email: 'testuser@example.com' });

        expect(res.status).toBe(200);
    });

    test('should not login with invalid credentials', async () => {
        const res = await request(app)
            .post('/api/user/signIn')
            .send({ username: 'mytestuser', password: 'wrongpassword', email: 'testuser@example.com' });

        expect(res.status).toBe(401);
    });
});
