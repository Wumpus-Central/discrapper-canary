n.d(t, { A: () => A });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(534514),
    o = n(834730),
    u = n(707554),
    c = n(915089),
    d = n(94343),
    f = n(716804),
    h = n(489564);
function A(e) {
    let {
            children: t,
            heading: n,
            headingIcon: i,
            introText: A,
            className: m,
            scrollTargetId: x,
            headingClassName: S,
            headingVariant: g = "text-xs/semibold",
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
            className: a()(h.uW, m),
            "aria-labelledby": null != n ? E : void 0,
            children: [
                null != n &&
                    (0, l.jsxs)("div", {
                        className: h.so,
                        children: [
                            (0, l.jsxs)("div", {
                                className: h.wx,
                                children: [
                                    (0, l.jsx)(s.D, { variant: g, color: T, className: S, id: E, children: n }),
                                    i,
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
