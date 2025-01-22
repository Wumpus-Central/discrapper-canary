e.d(n, {
    J: function () {
        return a;
    }
}),
    e(47120),
    e(192379);
var i = e(513431),
    o = e(730606),
    r = e(312097),
    s = e(52824),
    l = e(230569);
function a(t, n, e) {
    let a = {},
        c = {};
    for (let [u, d] of t.entries()) {
        let p = (0, s.q)({
            proxyURL: d.proxyUrl,
            url: d.url
        });
        (a[p] = (o) =>
            (function (t, n, e) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = arguments.length > 4 ? arguments[4] : void 0;
                t.preventDefault(),
                    (0, i.k)(t.currentTarget) && t.currentTarget.blur(),
                    (0, r.K)({
                        ...o,
                        className: l.forcedTransparency,
                        items: n,
                        startingIndex: e,
                        location: null != s ? s : 'zoomedMediaModalHelper'
                    });
            })(o, t, u, n, e)),
            (c[p] = () => (0, o.WG)(d, t.length > 1));
    }
    return {
        srcToOnClickOverride: a,
        srcToHandlePreloadImage: c
    };
}
