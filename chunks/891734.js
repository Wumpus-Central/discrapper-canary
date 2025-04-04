n.d(t, { Z: () => s });
var r = n(632471),
    i = n(740078),
    o = n(510104),
    a = n(126387);
function s(e, t) {
    void 0 === t && (t = {});
    var n = t,
        s = n.placement,
        l = n.boundary,
        c = n.rootBoundary,
        u = n.padding,
        d = n.flipVariations,
        f = n.allowedAutoPlacements,
        _ = void 0 === f ? i.Ct : f,
        p = (0, r.Z)(s),
        h = p
            ? d
                ? i.bw
                : i.bw.filter(function (e) {
                      return (0, r.Z)(e) === p;
                  })
            : i.mv,
        m = h.filter(function (e) {
            return _.indexOf(e) >= 0;
        });
    0 === m.length && (m = h);
    var g = m.reduce(function (t, n) {
        return (
            (t[n] = (0, o.Z)(e, {
                placement: n,
                boundary: l,
                rootBoundary: c,
                padding: u
            })[(0, a.Z)(n)]),
            t
        );
    }, {});
    return Object.keys(g).sort(function (e, t) {
        return g[e] - g[t];
    });
}
