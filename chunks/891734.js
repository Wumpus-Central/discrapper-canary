r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(632471),
    a = r(740078),
    o = r(510104),
    s = r(126387);
function l(e, n) {
    void 0 === n && (n = {});
    var r = n,
        l = r.placement,
        u = r.boundary,
        c = r.rootBoundary,
        d = r.padding,
        f = r.flipVariations,
        p = r.allowedAutoPlacements,
        h = void 0 === p ? a.Ct : p,
        _ = (0, i.Z)(l),
        m = _
            ? f
                ? a.bw
                : a.bw.filter(function (e) {
                      return (0, i.Z)(e) === _;
                  })
            : a.mv,
        g = m.filter(function (e) {
            return h.indexOf(e) >= 0;
        });
    0 === g.length && (g = m);
    var E = g.reduce(function (n, r) {
        return (
            (n[r] = (0, o.Z)(e, {
                placement: r,
                boundary: u,
                rootBoundary: c,
                padding: d
            })[(0, s.Z)(r)]),
            n
        );
    }, {});
    return Object.keys(E).sort(function (e, n) {
        return E[e] - E[n];
    });
}
