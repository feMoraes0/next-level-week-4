import request from 'supertest';
import app from '../app';

import createDatabaseConnection from '../database';

describe("Survey", () => {

  beforeAll(async () => {
    const connection = await createDatabaseConnection();
    await connection.runMigrations();
  });

  it("should be able to create a new survey", async () => {
    const response = await request(app).post("/survey").send({
      title: "title example",
      description: "description example"
    });
    
    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should be able to get all surveys", async () => {
    await request(app).post("/survey").send({
      title: "title example 2",
      description: "description example 2"
    });

    const response = await request(app).get("/surveys");
    
    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
  });

});