e.d(n, {
    _: function () {
        return l;
    }
}),
    e(47120),
    e(192379);
var i = e(513431),
    o = e(312097),
    r = e(52824),
    s = e(230569);
function l(t, n, e) {
    let l = {};
    for (let [a, c] of t.entries())
        l[
            (0, r.q)({
                proxyURL: c.proxyUrl,
                url: c.url
            })
        ] = (r) =>
            (function (t, n, e) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    l = arguments.length > 4 ? arguments[4] : void 0;
                t.preventDefault(),
                    (0, i.k)(t.currentTarget) && t.currentTarget.blur(),
                    (0, o.K)({
                        ...r,
                        className: s.forcedTransparency,
                        items: n,
                        startingIndex: e,
                        location: null != l ? l : 'zoomedMediaModalHelper'
                    });
            })(r, t, a, n, e);
    return l;
}
