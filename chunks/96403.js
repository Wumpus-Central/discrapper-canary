var i = n(809235),
    r = Function.prototype,
    a = r.call,
    s = i && r.bind.bind(a, a);
e.exports = i
    ? s
    : function (e) {
          return function () {
              return a.apply(e, arguments);
          };
      };
