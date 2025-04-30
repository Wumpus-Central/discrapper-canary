var r = n(461648),
    i = n(429675),
    a = n(815329),
    o = n(566817);
e.exports = function (e, t, n) {
    if (!e || ('object' != typeof e && 'function' != typeof e)) throw new a('`obj` must be an object or a function`');
    if ('string' != typeof t && 'symbol' != typeof t) throw new a('`property` must be a string or a symbol`');
    if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3]) throw new a('`nonEnumerable`, if provided, must be a boolean or null');
    if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4]) throw new a('`nonWritable`, if provided, must be a boolean or null');
    if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5]) throw new a('`nonConfigurable`, if provided, must be a boolean or null');
    if (arguments.length > 6 && 'boolean' != typeof arguments[6]) throw new a('`loose`, if provided, must be a boolean');
    var s = arguments.length > 3 ? arguments[3] : null,
        l = arguments.length > 4 ? arguments[4] : null,
        c = arguments.length > 5 ? arguments[5] : null,
        u = arguments.length > 6 && arguments[6],
        d = !!o && o(e, t);
    if (r)
        r(e, t, {
            configurable: null === c && d ? d.configurable : !c,
            enumerable: null === s && d ? d.enumerable : !s,
            value: n,
            writable: null === l && d ? d.writable : !l
        });
    else if (!u && (s || l || c)) throw new i('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
    else e[t] = n;
};
