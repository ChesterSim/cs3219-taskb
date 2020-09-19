const expect = require("chai").expect;
const chaiHttp = require("chai-http");
const chai = require("chai");
const app = require("../index");

chai.use(chaiHttp);

describe("API calls", () => {
  describe("POST Request", () => {
    it("should return HTTP status 201 and same description", (done) => {
      chai.request(app)
        .post("/api/todos")
        .send({ description: "Hello world" })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res).to.have.property("body");
          expect(res.body.description).to.equal("Hello world");
          done();
        })
    });
  })

  describe("GET Request", () => {
    it("should return HTTP status 200 and an array response", (done) => {
      chai.request(app)
        .get("/api/todos")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        })
    });
  })

  describe("DELETE Request", () => {
    it("should return HTTP status 204", (done) => {
      chai.request(app)
        .post("/api/todos")
        .send({ description: "Hello world" })
        .end((err, res) => {
          const { id } = res.body;
          chai.request(app)
            .delete(`/api/todos/${id}`)
            .end((err, res) => {
              expect(res).to.have.status(204);
              done();
            })
        })
    });
  })

  describe("PUT Request", () => {
    it("should return HTTP status 201 and description be updated", (done) => {
      chai.request(app)
        .post("/api/todos")
        .send({ description: "Hello world" })
        .end((err, res) => {
          const { id } = res.body;
          chai.request(app)
            .put(`/api/todos/${id}`)
            .send({ description: "Hello mocha" })
            .end((err, res) => {
              expect(res).to.have.status(201);
              expect(res.body.description).to.equal("Hello mocha");
              done();
            })
        })
    });
  })
})