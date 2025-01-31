var o = n(444675);
(function () {
    var t, n, r, i;
    'undefined' != typeof performance && null !== performance && performance.now
        ? (e.exports = function () {
              return performance.now();
          })
        : null != o && o.hrtime
          ? ((e.exports = function () {
                return (t() - i) / 1000000;
            }),
            (n = o.hrtime),
            (i =
                (t = function () {
                    var e;
                    return 1000000000 * (e = n())[0] + e[1];
                })() -
                1000000000 * o.uptime()))
          : Date.now
            ? ((e.exports = function () {
                  return Date.now() - r;
              }),
              (r = Date.now()))
            : ((e.exports = function () {
                  return new Date().getTime() - r;
              }),
              (r = new Date().getTime()));
}).call(this);
