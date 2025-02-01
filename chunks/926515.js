var r = a(962557),
    n = Function.prototype.call;
t.exports = r
    ? n.bind(n)
    : function () {
          return n.apply(n, arguments);
      };
