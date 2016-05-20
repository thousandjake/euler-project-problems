describe("problem one", function () {
  describe("our multiple finder", function () {
    it("should return 3, 5, 6, and 9 when given 10", function () {
      var result = multipleFinder(10);
      expect(result).toEqual([3,5,6,9]);
    });
    it("should return 3, 5, 6, 9, 10, 12, 15, 18 when given 20", function () {
      var result = multipleFinder(20);
      expect(result).toEqual([3,5,6,9,10,12,15,18]);
    });
  });
  describe("our problem solver", function () {
    it("should return 23 when given 10", function () {
      var result = problemSolver(10);
      expect(result).toBe(23);
    });
    it("should return 78 when give 20", function () {
      var result = problemSolver(20);
      expect(result).toBe(78);
    })
  })
});
