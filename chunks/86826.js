n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(44315),
    o = n(600164),
    s = n(120998),
    c = n(353042),
    u = n(388032),
    d = n(596652);
let p = function (e) {
    var t;
    let { title: n, className: i, color: p, animate: h, gradientStopColor: f, getHistoricalTotalBytes: g } = e,
        m = (0, a.Sl)(p).hex,
        b = null == (t = (0, a.Sl)(f)) ? void 0 : t.hex;
    return (0, r.jsx)(c.Z, {
        getHistoricalTotalBytes: g,
        children: (e, t, a) => {
            var c;
            return (0, r.jsx)('div', {
                className: l()(d.monitor, i),
                children: (0, r.jsxs)(o.Z, {
                    align: o.Z.Align.CENTER,
                    children: [
                        (0, r.jsxs)(o.Z, {
                            className: d.text,
                            direction: o.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)('div', {
                                    className: d.title,
                                    children: n
                                }),
                                (0, r.jsx)('div', {
                                    className: d.rate,
                                    children: (c = (e[e.length - 1] / t) * 1000) > 1000 ? u.NW.formatToPlainString(u.t['WU+gTU'], { size: Math.round(c / 1000) }) : u.NW.formatToPlainString(u.t.wnF6TE, { size: Math.round(c) })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: d.overflowContainer,
                            children: (0, r.jsx)(s.Z, {
                                data: e,
                                maxValue: Math.max(Math.max.apply(null, e), 1000),
                                className: d.sparkChart,
                                updateInterval: t,
                                color: m,
                                gradientStopColor: b,
                                numUpdatesToShow: a,
                                animate: h,
                                pixelWidth: 600,
                                pixelHeight: 48,
                                lineWidth: 4
                            })
                        })
                    ]
                })
            });
        }
    });
};
