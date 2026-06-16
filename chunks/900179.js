n.d(t, { A: () => A });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(534514),
    o = n(834730),
    u = n(707554),
    c = n(915089),
    d = n(94343),
    f = n(716804),
    h = n(87260);
function A(e) {
    let {
            children: t,
            heading: n,
            headingIcon: a,
            introText: A,
            className: m,
            scrollTargetId: x,
            headingClassName: g,
            headingVariant: S = "text-xs/semibold",
            headingColor: T = "text-default",
        } = e,
        E = (0, c.GV)(),
        p = r.useRef(null),
        v = (0, f.g)(),
        R = null != x && v === x;
    return (
        (0, d.A)(p, R),
        (0, l.jsxs)("section", {
            ref: R ? p : void 0,
            className: i()(h.uW, m),
            "aria-labelledby": null != n ? E : void 0,
            children: [
                null != n &&
                    (0, l.jsxs)("div", {
                        className: h.so,
                        children: [
                            (0, l.jsxs)("div", {
                                className: h.wx,
                                children: [
                                    (0, l.jsx)(s.D, { variant: S, color: T, className: g, id: E, children: n }),
                                    a,
                                ],
                            }),
                            null != A && (0, l.jsx)(o.E, { variant: "text-xs/normal", children: A }),
                        ],
                    }),
                (0, l.jsx)(u.F, { children: t }),
            ],
        })
    );
}
