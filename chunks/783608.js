n.d(t, { A: () => u });
var l,
    i = n(627968),
    a = n(64700),
    s = n(834730),
    r = n(939249),
    o = n(985018),
    c = n(4589),
    d = (((l = d || {})[(l.VIEW_MORE = 0)] = "VIEW_MORE"), (l[(l.VIEW_LESS = 1)] = "VIEW_LESS"), l);
function u(e) {
    let { title: t, buttonType: n, onClickViewButton: l } = e;
    return (0, i.jsxs)("div", {
        className: c.wx,
        children: [
            (0, i.jsx)(s.E, { variant: "text-md/medium", color: "text-strong", children: t }),
            null != n &&
                null != l &&
                (0, i.jsx)(r.D, {
                    className: c.Vc,
                    onClick: l,
                    "aria-label": o.intl.formatToPlainString(o.t["bj/2kV"], { title: t }),
                    children: (0, i.jsx)(s.E, {
                        variant: "text-md/medium",
                        color: "text-brand",
                        children: 0 === n ? o.intl.format(o.t.gVw57p, {}) : o.intl.string(o.t.nPGLFQ),
                    }),
                }),
        ],
    });
}
(u.buttonTypes = d),
    (u.Loading = function () {
        let e = a.useMemo(() => ({ width: `${10 + 20 * Math.random()}%` }), []);
        return (0, i.jsx)("div", {
            className: c.uH,
            style: e,
            children: (0, i.jsx)(s.E, {
                className: c.R,
                variant: "text-md/medium",
                color: "text-strong",
                children: "_",
            }),
        });
    });
