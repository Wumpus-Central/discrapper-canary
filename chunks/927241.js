var r = n(380744)("iterator"),
    i = !1;
try {
    var a = 0,
        s = {
            next: function () {
                return { done: !!a++ };
            },
            return: function () {
                i = !0;
            },
        };
    (s[r] = function () {
        return this;
    }),
        Array.from(s, function () {
            throw 2;
        });
} catch (e) {}
e.exports = function (e, t) {
    try {
        if (!t && !i) return !1;
    } catch (e) {
        return !1;
    }
    var n = !1;
    try {
        var a = {};
        (a[r] = function () {
            return {
                next: function () {
                    return { done: (n = !0) };
                },
            };
        }),
            e(a);
    } catch (e) {}
    return n;
};
