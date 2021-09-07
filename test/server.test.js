const config = require("../src/config");
require("dotenv").config();
const { expect } = require("chai");
const knex = require("knex");
const supertest = require("supertest");
const app = require("../src/app");
const { makeFoodArray } = require("./food.fixtures");

describe("API endpoints", function () {
  let db;
  before("Make knex instance", () => {
    db = knex({
      client: "pg",
      connection: config.TEST_DATABASE_URL,
    });
    app.set("db", db);
  });

  before("clean the table", () => {
    return db.raw("TRUNCATE food");
  });

  after("disconnected from db", () => db.destroy());

  afterEach("cleanup", () => {
    return db.raw("TRUNCATE food");
  });

  describe(`GET /api`, () => {
    context("given there are no items", () => {
      it("responds with an empty array", () => {
        return supertest(app).get("/api").expect(200, []);
      });
    });
    context("given there are items in the table", () => {
      const testData = makeFoodArray();
      beforeEach("insert items", () => {
        return db.into("food").insert(testData);
      });
      it("responds with all items", () => {
        return supertest(app).get("/api").expect(200, testData);
      });
    });
  });
  describe(`GET /api/item/:id`, () => {
    context("given a correct id", () => {
      const testData = makeFoodArray();
      beforeEach("insert items", () => {
        return db.into("food").insert(testData);
      });
      it("should return correct item matching id input", () => {
        return db("food")
          .first()
          .then((res) => {
            return supertest(app).get(`/api/item/${res.id}`).expect(200);
          });
      });
    });
  });
  describe(`GET /api/type/:category`, () => {
    context("given an existing category", () => {
      it("should return correct items in the category", () => {
        return db("food")
          .first()
          .then((res) => {
            return supertest(app).get(`/api/type/vegetable`).expect(200);
          });
      });
    });
  });
});
