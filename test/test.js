import { expect } from "chai";
import request from "supertest";
import app from "../app.js";
describe("GET /health", () => {
  it("returns HTTP 200 with the health response", async () => {
    const response = await request(app).get("/health");
    expect(response.status).to.equal(200);
    expect(response.text).to.equal("Ok");
  });
});
describe("GET /", () => {
  it("returns HTTP 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).to.equal(200);
  });
  it("returns the expected greeting", async () => {
    const response = await request(app).get("/");
    expect(response.text).to.equal("Hello, GitHub Actions!");
  });
});
