describe('problem 3', function () {
  describe('our function g', function (){
    it('should return 0 when given 1 and 1', function () {
      var results = g(1, 1);
      expect(results).toEqual(0);
    });
    it('should return 0 when given 2 and 5', function () {
      var results = g(2, 5);
      expect(results).toEqual(0);
    });
    it('should return 1 when given 2 and 2', function () {
      var results = g(2, 2);
      expect(results).toEqual(1);
    });
  });
  describe('our function gcd', function () {
    it('should return 0 when given 0 and 0', function () {
      var results = gcd(0, 0);
      expect(results).toEqual(0);
    });
    it('should return 1 when given 1 and 1', function () {
      var results = gcd(1, 1);
      expect(results).toEqual(1);
    });
    it('should return 1 when given 5 and 2', function () {
      var results = gcd(5, 2);
      expect(results).toEqual(1);
    });
  });
  describe('our function rho', function () {
    it('should return 1 when given 1', function () {
      var results = rho(1);
      expect(results).toEqual(1);
    });
    it('should return 1 when given 4', function () {
      var results = rho(4);
      expect(results).toEqual(1);
    });
    it('should return 4 when given 100', function () {
      var results = rho(100);
      expect(results).toEqual(4);
    });
  });
  describe('our function euler3', function () {
    it('should return 1 when given 1', function () {
      var results = euler3(1);
      expect(results).toEqual(1);
    });
    it('should return 2 when given 4', function () {
      var results = euler3(4);
      expect(results).toEqual(2);
    });
    it('should return 5 when given 100', function () {
      var results = euler3(100);
      expect(results).toEqual(5);
    });
  });
});
