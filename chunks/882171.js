e.exports = function () {
    if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols) return !1;
    if ('symbol' == typeof Symbol.iterator) return !0;
    var e = {},
        n = Symbol('test'),
        r = Object(n);
    if ('string' == typeof n || '[object Symbol]' !== Object.prototype.toString.call(n) || '[object Symbol]' !== Object.prototype.toString.call(r)) return !1;
    var i = 42;
    for (n in ((e[n] = i), e)) return !1;
    if (('function' == typeof Object.keys && 0 !== Object.keys(e).length) || ('function' == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length)) return !1;
    var a = Object.getOwnPropertySymbols(e);
    if (1 !== a.length || a[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n)) return !1;
    if ('function' == typeof Object.getOwnPropertyDescriptor) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        if (o.value !== i || !0 !== o.enumerable) return !1;
    }
    return !0;
};
