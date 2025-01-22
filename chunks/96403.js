var i = r(809235),
    a = Function.prototype,
    o = a.call,
    s = i && a.bind.bind(o, o);
e.exports = i
    ? s
    : function (e) {
          return function () {
              return o.apply(e, arguments);
          };
      };
