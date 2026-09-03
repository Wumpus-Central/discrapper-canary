var n = r(326948),
    i = r(267768),
    o = r(741623),
    a = {};
try {
    a.__proto__ = null;
} catch (e) {
    if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e;
}
var s = !("toString" in a),
    l = i && i(Object.prototype, "__proto__");
e.exports =
    s &&
    ((!!l && "function" == typeof l.set && n([l.set])) ||
        function (e, t) {
            if (null == e) throw new o("set Object.prototype.__proto__ called on null or undefined");
            return (e.__proto__ = t), t;
        });
