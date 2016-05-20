describe('Problem 4', function () {
  describe('our function palindromic' , function () {
    it('should return false when given 1', function () {
      var results = palindromic(1);
      expect(results).toEqual(false);
    });
    it('should return true when given 101', function () {
      var results = palindromic(101);
      expect(results).toEqual(false);
    });
    it('should return true when given 9009', function () {
      var results = palindromic(9009);
      expect(results).toEqual(true);
    });
  })
});
