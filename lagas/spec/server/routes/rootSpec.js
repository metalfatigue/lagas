var rootRouter = require("../../../server/routes/root");

describe("Root Route", function() {
  it("should have one router", function() {
    expect(rootRouter.stack[0].route.path).toEqual("/");
  });
});