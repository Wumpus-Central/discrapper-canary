n.d(t, {
    _: function () {
        return s;
    }
}),
    n(47120),
    n(192379);
var i = n(513431),
    o = n(312097),
    r = n(52824),
    a = n(453082);
function s(e, t, n) {
    let s = {};
    for (let [c, l] of e.entries())
        s[
            (0, r.q)({
                proxyURL: l.proxyUrl,
                url: l.url
            })
        ] = (r) =>
            (function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, i.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, o.K)({
                        ...r,
                        className: a.forcedTransparency,
                        items: t,
                        startingIndex: n,
                        location: null != s ? s : 'zoomedMediaModalHelper'
                    });
            })(r, e, c, t, n);
    return s;
}
