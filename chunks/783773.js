var r,
    i = n(326948),
    a = n(267768);
try {
    r = [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e;
}
var s = !!r && a && a(Object.prototype, "__proto__"),
    o = Object,
    l = o.getPrototypeOf;
e.exports =
    s && "function" == typeof s.get
        ? i([s.get])
        : "function" == typeof l &&
          function (e) {
              return l(null == e ? e : o(e));
          };
