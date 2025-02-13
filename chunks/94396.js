t.d(n, { J: () => c }), t(47120), t(192379);
var i = t(374470),
    o = t(730606),
    r = t(312097),
    a = t(52824),
    l = t(362943);
function c(e, n, t) {
    let c = {},
        s = {};
    for (let [_, d] of e.entries()) {
        let u = (0, a.q)({
            proxyURL: d.proxyUrl,
            url: d.url
        });
        (c[u] = (o) =>
            (function (e, n, t) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, i.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, r.K)({
                        ...o,
                        className: l.forcedTransparency,
                        items: n,
                        startingIndex: t,
                        location: null != a ? a : 'zoomedMediaModalHelper'
                    });
            })(o, e, _, n, t)),
            (s[u] = () => (0, o.WG)(d, e.length > 1));
    }
    return {
        srcToOnClickOverride: c,
        srcToHandlePreloadImage: s
    };
}
