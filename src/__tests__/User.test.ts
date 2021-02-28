import request from 'supertest';
import app from '../app';

import createDatabaseConnection from '../database';

describe("Users", () => {

  beforeAll(async () => {
    const connection = await createDatabaseConnection();
    await connection.runMigrations();
  });

  it("should be able to create a new user", async () => {
    const response = await request(app).post("/user").send({
      email: "user@example.com",
      name: "User Example"
    });
    
    expect(response.status).toBe(201);
  });

});