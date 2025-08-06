var r = n(166691),
    i = r('Object.prototype.toString'),
    o = n(738146)(),
    a = n(190337);
if (o) {
    var s = r('Symbol.prototype.toString'),
        l = a(/^Symbol\(.*\)$/),
        c = function (e) {
            return 'symbol' == typeof e.valueOf() && l(s(e));
        };
    e.exports = function (e) {
        if ('symbol' == typeof e) return !0;
        if (!e || 'object' != typeof e || '[object Symbol]' !== i(e)) return !1;
        try {
            return c(e);
        } catch (e) {
            return !1;
        }
    };
} else
    e.exports = function (e) {
        return !1;
    };
