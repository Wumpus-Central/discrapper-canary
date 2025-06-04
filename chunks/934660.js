var r = n(166691),
    i = r('String.prototype.valueOf'),
    a = function (e) {
        try {
            return i(e), !0;
        } catch (e) {
            return !1;
        }
    },
    o = r('Object.prototype.toString'),
    s = '[object String]',
    l = n(195653)();
e.exports = function (e) {
    return 'string' == typeof e || (!!e && 'object' == typeof e && (l ? a(e) : o(e) === s));
};
