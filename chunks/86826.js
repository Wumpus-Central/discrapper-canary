n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(44315),
    s = n(600164),
    o = n(120998),
    c = n(353042),
    u = n(388032),
    d = n(496034);
let p = function (e) {
    var t;
    let { title: n, className: i, color: p, animate: f, gradientStopColor: m, getHistoricalTotalBytes: h } = e,
        g = (0, a.Sl)(p).hex,
        _ = null == (t = (0, a.Sl)(m)) ? void 0 : t.hex;
    return (0, r.jsx)(c.Z, {
        getHistoricalTotalBytes: h,
        children: (e, t, a) => {
            var c;
            return (0, r.jsx)("div", {
                className: l()(d.monitor, i),
                children: (0, r.jsxs)(s.Z, {
                    align: s.Z.Align.CENTER,
                    children: [
                        (0, r.jsxs)(s.Z, {
                            className: d.text,
                            direction: s.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)("div", {
                                    className: d.title,
                                    children: n,
                                }),
                                (0, r.jsx)("div", {
                                    className: d.rate,
                                    children:
                                        (c = (e[e.length - 1] / t) * 1000) > 1000
                                            ? u.intl.formatToPlainString(u.t["WU+gTX"], { size: Math.round(c / 1000) })
                                            : u.intl.formatToPlainString(u.t.wnF6TH, { size: Math.round(c) }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: d.overflowContainer,
                            children: (0, r.jsx)(o.Z, {
                                data: e,
                                maxValue: Math.max(Math.max.apply(null, e), 1000),
                                className: d.sparkChart,
                                updateInterval: t,
                                color: g,
                                gradientStopColor: _,
                                numUpdatesToShow: a,
                                animate: f,
                                pixelWidth: 600,
                                pixelHeight: 48,
                                lineWidth: 4,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
};
