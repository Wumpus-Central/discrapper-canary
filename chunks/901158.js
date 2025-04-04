var r = n(745872),
    i = n(815329),
    o = r('%Number%'),
    a = n(983281),
    s = n(269640),
    l = n(647237);
e.exports = function (e) {
    var t = a(e) ? e : s(e, o);
    if ('symbol' == typeof t) throw new i('Cannot convert a Symbol value to a number');
    if ('bigint' == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
    return 'string' == typeof t ? l(t) : +t;
};
