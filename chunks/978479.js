var e = n(185156),
    o = n(506887).has,
    i = n(268571),
    u = n(271221),
    s = n(871959),
    c = n(272763);
t.exports = function (t) {
    var r = e(this),
        n = u(t);
    if (i(r) < n.size) return !1;
    var f = n.getIterator();
    return (
        !1 !==
        s(f, function (t) {
            if (!o(r, t)) return c(f, 'normal', !1);
        })
    );
};
