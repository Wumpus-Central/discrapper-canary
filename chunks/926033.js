var r,
    i = n(166691),
    a = n(195653)(),
    o = n(706165),
    s = n(566817);
if (a) {
    var l = i('RegExp.prototype.exec'),
        c = {},
        u = function () {
            throw c;
        },
        d = {
            toString: u,
            valueOf: u
        };
    'symbol' == typeof Symbol.toPrimitive && (d[Symbol.toPrimitive] = u),
        (r = function (e) {
            if (!e || 'object' != typeof e) return !1;
            var t = s(e, 'lastIndex');
            if (!(t && o(t, 'value'))) return !1;
            try {
                l(e, d);
            } catch (e) {
                return e === c;
            }
        });
} else {
    var f = i('Object.prototype.toString'),
        _ = '[object RegExp]';
    r = function (e) {
        return !!e && ('object' == typeof e || 'function' == typeof e) && f(e) === _;
    };
}
e.exports = r;
