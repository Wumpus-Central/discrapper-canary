n.d(t, { A: () => m });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(297264),
    o = n(834730),
    u = n(707554),
    c = n(915089),
    d = n(94343),
    f = n(716804),
    h = n(905188);
function m(e) {
    let {
            children: t,
            heading: n,
            headingIcon: i,
            introText: m,
            className: A,
            scrollTargetId: x,
            headingClassName: S,
            headingVariant: T = "text-xs/semibold",
            headingColor: g = "text-default",
        } = e,
        E = (0, c.GV)(),
        p = r.useRef(null),
        v = (0, f.g)(),
        R = null != x && v === x;
    return (
        (0, d.A)(p, R),
        (0, l.jsxs)("section", {
            ref: R ? p : void 0,
            className: a()(h.uW, A),
            "aria-labelledby": null != n ? E : void 0,
            children: [
                null != n &&
                    (0, l.jsxs)("div", {
                        className: h.so,
                        children: [
                            (0, l.jsxs)("div", {
                                className: h.wx,
                                children: [
                                    (0, l.jsx)(s.D, { variant: T, color: g, className: S, id: E, children: n }),
                                    i,
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
