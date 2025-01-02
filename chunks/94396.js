t.d(l, {
    _: function () {
        return o;
    }
}),
    t(47120),
    t(192379);
var n = t(374470),
    i = t(312097),
    r = t(52824),
    a = t(230569);
function o(e, l, t) {
    let o = {};
    for (let [s, d] of e.entries())
        o[
            (0, r.q)({
                proxyURL: d.proxyUrl,
                url: d.url
            })
        ] = (r) =>
            (function (e, l, t) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, i.K)({
                        ...r,
                        className: a.forcedTransparency,
                        items: l,
                        startingIndex: t,
                        location: null != o ? o : 'zoomedMediaModalHelper'
                    });
            })(r, e, s, l, t);
    return o;
}
