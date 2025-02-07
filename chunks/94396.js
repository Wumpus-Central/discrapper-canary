n.d(t, { J: () => c }), n(47120), n(192379);
var i = n(374470),
    o = n(730606),
    a = n(312097),
    r = n(52824),
    _ = n(230569);
function c(e, t, n) {
    let c = {},
        s = {};
    for (let [l, d] of e.entries()) {
        let u = (0, r.q)({
            proxyURL: d.proxyUrl,
            url: d.url
        });
        (c[u] = (o) =>
            (function (e, t, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    r = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, i.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, a.K)({
                        ...o,
                        className: _.forcedTransparency,
                        items: t,
                        startingIndex: n,
                        location: null != r ? r : 'zoomedMediaModalHelper'
                    });
            })(o, e, l, t, n)),
            (s[u] = () => (0, o.WG)(d, e.length > 1));
    }
    return {
        srcToOnClickOverride: c,
        srcToHandlePreloadImage: s
    };
}
