n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(600164),
    s = n(120998),
    o = n(353042),
    c = n(388032),
    u = n(496034);
let d = function (e) {
    let { title: t, className: n, color: i, animate: d, getHistoricalTotalBytes: p } = e;
    return (0, r.jsx)(o.Z, {
        getHistoricalTotalBytes: p,
        children: (e, o, p) => {
            var f;
            return (0, r.jsx)("div", {
                className: l()(u.monitor, n),
                children: (0, r.jsxs)(a.Z, {
                    align: a.Z.Align.CENTER,
                    children: [
                        (0, r.jsxs)(a.Z, {
                            className: u.text,
                            direction: a.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)("div", {
                                    className: u.title,
                                    children: t,
                                }),
                                (0, r.jsx)("div", {
                                    className: u.rate,
                                    children:
                                        (f = (e[e.length - 1] / o) * 1000) > 1000
                                            ? c.intl.formatToPlainString(c.t["WU+gTX"], { size: Math.round(f / 1000) })
                                            : c.intl.formatToPlainString(c.t.wnF6TH, { size: Math.round(f) }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: u.overflowContainer,
                            children: (0, r.jsx)(s.Z, {
                                data: e,
                                maxValue: Math.max(Math.max.apply(null, e), 1000),
                                className: u.sparkChart,
                                updateInterval: o,
                                color: i,
                                numUpdatesToShow: p,
                                animate: d,
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
