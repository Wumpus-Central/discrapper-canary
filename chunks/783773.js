"use strict";
var n,
    o = r(326948),
    i = r(267768);
try {
    n = [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e;
}
var a = !!n && i && i(Object.prototype, "__proto__"),
    s = Object,
    l = s.getPrototypeOf;
e.exports =
    a && "function" == typeof a.get
        ? o([a.get])
        : "function" == typeof l &&
          function (e) {
              return l(null == e ? e : s(e));
          };
