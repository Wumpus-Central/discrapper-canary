n.d(t, { A: () => m });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(297264),
    o = n(834730),
    u = n(707554),
    c = n(915089),
    d = n(94343),
    f = n(716804),
    h = n(161185);
function m(e) {
    let {
            children: t,
            heading: n,
            headingIcon: a,
            introText: m,
            className: A,
            scrollTargetId: x,
            headingClassName: T,
            headingVariant: S = "text-xs/semibold",
            headingColor: g = "text-default",
        } = e,
        p = (0, c.GV)(),
        E = r.useRef(null),
        v = (0, f.g)(),
        R = null != x && v === x;
    return (
        (0, d.A)(E, R),
        (0, l.jsxs)("section", {
            ref: R ? E : void 0,
            className: i()(h.uW, A),
            "aria-labelledby": null != n ? p : void 0,
            children: [
                null != n &&
                    (0, l.jsxs)("div", {
                        className: h.so,
                        children: [
                            (0, l.jsxs)("div", {
                                className: h.wx,
                                children: [
                                    (0, l.jsx)(s.D, { variant: S, color: g, className: T, id: p, children: n }),
                                    a,
                                ],
                            }),
                            null != m && (0, l.jsx)(o.E, { variant: "text-xs/normal", children: m }),
                        ],
                    }),
                (0, l.jsx)(u.F, { children: t }),
            ],
        })
    );
}
