var r,
    i = n(992555),
    a = n(566817);
try {
    r = [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || 'object' != typeof e || !('code' in e) || 'ERR_PROTO_ACCESS' !== e.code) throw e;
}
var o = !!r && a && a(Object.prototype, '__proto__'),
    s = Object,
    l = s.getPrototypeOf;
e.exports =
    o && 'function' == typeof o.get
        ? i([o.get])
        : 'function' == typeof l &&
          function (e) {
              return l(null == e ? e : s(e));
          };
