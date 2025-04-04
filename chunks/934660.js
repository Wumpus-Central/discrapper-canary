var r = n(166691),
    i = r('String.prototype.valueOf'),
    o = function (e) {
        try {
            return i(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = r('Object.prototype.toString'),
    s = '[object String]',
    l = n(195653)();
e.exports = function (e) {
    return 'string' == typeof e || (!!e && 'object' == typeof e && (l ? o(e) : a(e) === s));
};
