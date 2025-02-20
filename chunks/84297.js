var n,
    o,
    i,
    u = e(936940),
    a = e(354848),
    c = e(622281),
    s = e(803938),
    f = e(144748),
    l = e(859209),
    p = e(641236),
    v = e(992051),
    d = p('iterator'),
    y = !1;
[].keys && ('next' in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : (y = !0)),
    !c(n) ||
    u(function () {
        var t = {};
        return n[d].call(t) !== t;
    })
        ? (n = {})
        : v && (n = s(n)),
    a(n[d]) ||
        l(n, d, function () {
            return this;
        }),
    (t.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: y
    });
