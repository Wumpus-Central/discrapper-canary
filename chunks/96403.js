var e = n(809235),
    o = Function.prototype,
    i = o.call,
    u = e && o.bind.bind(i, i);
t.exports = e
    ? u
    : function (t) {
          return function () {
              return i.apply(t, arguments);
          };
      };
