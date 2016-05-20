describe('Problem2', function () {
  describe('our fibonacci finder', function () {
    it('should return 1 when given 1', function () {
      var result = findFibonacci(1)
      expect(result).toEqual([1]);
    });
    it('should return 1, 2 when given 2', function () {
      var result = findFibonacci(2)
      expect(result).toEqual([1,2]);
    });
    it('should return 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 when given 10', function () {
      var result = findFibonacci(10);
      expect(result).toEqual([1,2,3,5,8,13,21,34,55,89]);
    });
    it('should return 1, 2, 3, 5, 8 when given 5', function () {
      var result = findFibonacci(5)
      expect(result).toEqual([1,2,3,5,8]);
    });
  });
  describe('our evens finder', function () {
    it('should return 2, and 8 when given 1, 2, 3, 5, 8, 13', function () {
      var result = findEvens([1,2,3,5,8,13]);
      expect(result).toEqual([2,8]);
    });
  });
  describe('our euler Solver', function () {
    it('should return a number', function () {
      var result = solveEuler();
      expect(result).toBe(4613732);
    });
  });
});
