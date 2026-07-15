var e = t(498059),
    u = t(24011),
    i = t(86486),
    p = t(580589),
    a = t(797674),
    h = Math.max;
n.exports = function (n) {
    if (!(n && n.length)) return [];
    var r = 0;
    return (
        (n = e(n, function (n) {
            if (a(n)) return (r = h(n.length, r)), !0;
        })),
        p(r, function (r) {
            return u(n, i(r));
        })
    );
};
