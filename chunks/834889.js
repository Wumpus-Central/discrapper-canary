var i = r(583584),
    a = r(429675),
    o = r(815329),
    s = r(49662);
e.exports = function (e, n, r) {
    if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`obj` must be an object or a function`');
    if ('string' != typeof n && 'symbol' != typeof n) throw new o('`property` must be a string or a symbol`');
    if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3]) throw new o('`nonEnumerable`, if provided, must be a boolean or null');
    if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4]) throw new o('`nonWritable`, if provided, must be a boolean or null');
    if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5]) throw new o('`nonConfigurable`, if provided, must be a boolean or null');
    if (arguments.length > 6 && 'boolean' != typeof arguments[6]) throw new o('`loose`, if provided, must be a boolean');
    var l = arguments.length > 3 ? arguments[3] : null,
        u = arguments.length > 4 ? arguments[4] : null,
        c = arguments.length > 5 ? arguments[5] : null,
        d = arguments.length > 6 && arguments[6],
        f = !!s && s(e, n);
    if (i)
        i(e, n, {
            configurable: null === c && f ? f.configurable : !c,
            enumerable: null === l && f ? f.enumerable : !l,
            value: r,
            writable: null === u && f ? f.writable : !u
        });
    else if (!d && (l || u || c)) throw new a('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
    else e[n] = r;
};
