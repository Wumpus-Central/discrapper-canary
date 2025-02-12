var r,
    n,
    _,
    o = a(936940),
    i = a(354848),
    c = a(622281),
    s = a(803938),
    E = a(144748),
    l = a(859209),
    u = a(641236),
    I = a(992051),
    R = u('iterator'),
    d = !1;
[].keys && ('next' in (_ = [].keys()) ? (n = E(E(_))) !== Object.prototype && (r = n) : (d = !0)),
    !c(r) ||
    o(function () {
        var t = {};
        return r[R].call(t) !== t;
    })
        ? (r = {})
        : I && (r = s(r)),
    i(r[R]) ||
        l(r, R, function () {
            return this;
        }),
    (t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: d
    });
