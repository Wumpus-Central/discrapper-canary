e.exports = function () {
    if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols) return !1;
    if ('symbol' == typeof Symbol.iterator) return !0;
    var e = {},
        t = Symbol('test'),
        n = Object(t);
    if ('string' == typeof t || '[object Symbol]' !== Object.prototype.toString.call(t) || '[object Symbol]' !== Object.prototype.toString.call(n)) return !1;
    var i = 42;
    for (t in ((e[t] = i), e)) return !1;
    if (('function' == typeof Object.keys && 0 !== Object.keys(e).length) || ('function' == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length)) return !1;
    var r = Object.getOwnPropertySymbols(e);
    if (1 !== r.length || r[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
    if ('function' == typeof Object.getOwnPropertyDescriptor) {
        var a = Object.getOwnPropertyDescriptor(e, t);
        if (a.value !== i || !0 !== a.enumerable) return !1;
    }
    return !0;
};
