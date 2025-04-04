var n,
    o,
    i,
    a = e(936940),
    s = e(354848),
    u = e(622281),
    c = e(803938),
    f = e(144748),
    l = e(859209),
    p = e(641236),
    v = e(992051),
    h = p('iterator'),
    d = !1;
[].keys && ('next' in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : (d = !0)),
    !u(n) ||
    a(function () {
        var t = {};
        return n[h].call(t) !== t;
    })
        ? (n = {})
        : v && (n = c(n)),
    s(n[h]) ||
        l(n, h, function () {
            return this;
        }),
    (t.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: d
    });
