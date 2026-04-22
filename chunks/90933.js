var t = "function" == typeof Float32Array;
function n(e, t, n) {
    return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
}
function r(e, t, n) {
    return 3 * (1 - 3 * n + 3 * t) * e * e + 2 * (3 * n - 6 * t) * e + 3 * t;
}
e.exports = function (e, i, s, a) {
    if (!(0 <= e && e <= 1 && 0 <= s && s <= 1)) throw Error("bezier x values must be in [0, 1] range");
    var o = t ? new Float32Array(11) : Array(11);
    if (e !== i || s !== a) for (var l = 0; l < 11; ++l) o[l] = n(0.1 * l, e, s);
    return function (t) {
        return e === i && s === a
            ? t
            : 0 === t
              ? 0
              : 1 === t
                ? 1
                : n(
                      (function (t) {
                          for (var i = 0, a = 1; 10 !== a && o[a] <= t; ++a) i += 0.1;
                          var l = i + ((t - o[--a]) / (o[a + 1] - o[a])) * 0.1,
                              u = r(l, e, s);
                          if (u >= 0.001) {
                              for (var d = l, c = 0; c < 4; ++c) {
                                  var _ = r(d, e, s);
                                  if (0 === _) break;
                                  var f = n(d, e, s) - t;
                                  d -= f / _;
                              }
                              return d;
                          }
                          return 0 === u
                              ? l
                              : (function (e, t, r, i, s) {
                                    var a,
                                        o,
                                        l = 0;
                                    do (a = n((o = t + (r - t) / 2), i, s) - e) > 0 ? (r = o) : (t = o);
                                    while (Math.abs(a) > 1e-7 && ++l < 10);
                                    return o;
                                })(t, i, i + 0.1, e, s);
                      })(t),
                      i,
                      a,
                  );
    };
};
