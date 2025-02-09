t.d(l, { J: () => o }), t(47120), t(192379);
var n = t(374470),
    i = t(730606),
    r = t(312097),
    s = t(52824),
    a = t(753077);
function o(e, l, t) {
    let o = {},
        d = {};
    for (let [u, h] of e.entries()) {
        let m = (0, s.q)({
            proxyURL: h.proxyUrl,
            url: h.url
        });
        (o[m] = (i) =>
            (function (e, l, t) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, r.K)({
                        ...i,
                        className: a.forcedTransparency,
                        items: l,
                        startingIndex: t,
                        location: null != s ? s : 'zoomedMediaModalHelper'
                    });
            })(i, e, u, l, t)),
            (d[m] = () => (0, i.WG)(h, e.length > 1));
    }
    return {
        srcToOnClickOverride: o,
        srcToHandlePreloadImage: d
    };
}
