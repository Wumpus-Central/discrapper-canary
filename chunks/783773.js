var n,
    i = r(326948),
    o = r(267768);
try {
    n = [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e;
}
var a = !!n && o && o(Object.prototype, "__proto__"),
    s = Object,
    l = s.getPrototypeOf;
e.exports =
    a && "function" == typeof a.get
        ? i([a.get])
        : "function" == typeof l &&
          function (e) {
              return l(null == e ? e : s(e));
          };
