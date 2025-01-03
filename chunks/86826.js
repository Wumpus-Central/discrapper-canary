var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(44315),
    s = n(600164),
    o = n(120998),
    c = n(353042),
    d = n(388032),
    u = n(717242);
t.Z = function (e) {
    var t;
    let { title: n, className: r, color: h, animate: m, gradientStopColor: p, getHistoricalTotalBytes: g } = e,
        f = (0, a.Sl)(h).hex,
        _ = null === (t = (0, a.Sl)(p)) || void 0 === t ? void 0 : t.hex;
    return (0, i.jsx)(c.Z, {
        getHistoricalTotalBytes: g,
        children: (e, t, a) => {
            var c;
            return (0, i.jsx)('div', {
                className: l()(u.monitor, r),
                children: (0, i.jsxs)(s.Z, {
                    align: s.Z.Align.CENTER,
                    children: [
                        (0, i.jsxs)(s.Z, {
                            className: u.text,
                            direction: s.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)('div', {
                                    className: u.title,
                                    children: n
                                }),
                                (0, i.jsx)('div', {
                                    className: u.rate,
                                    children: (c = (e[e.length - 1] / t) * 1000) > 1000 ? d.intl.formatToPlainString(d.t['WU+gTU'], { size: Math.round(c / 1000) }) : d.intl.formatToPlainString(d.t.wnF6TE, { size: Math.round(c) })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: u.overflowContainer,
                            children: (0, i.jsx)(o.Z, {
                                data: e,
                                maxValue: Math.max(Math.max.apply(null, e), 1000),
                                className: u.sparkChart,
                                updateInterval: t,
                                color: f,
                                gradientStopColor: _,
                                numUpdatesToShow: a,
                                animate: m,
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
