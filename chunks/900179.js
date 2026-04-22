i.d(t, { A: () => g });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    d = i(534514),
    r = i(834730),
    o = i(707554),
    c = i(915089),
    u = i(94343),
    A = i(716804),
    h = i(489564);
function g(e) {
    let {
            children: t,
            heading: i,
            headingIcon: s,
            introText: g,
            className: x,
            scrollTargetId: m,
            headingClassName: C,
            headingVariant: _ = "text-xs/semibold",
            headingColor: p = "text-default",
        } = e,
        N = (0, c.GV)(),
        f = n.useRef(null),
        v = (0, A.g)(),
        j = null != m && v === m;
    return (
        (0, u.A)(f, j),
        (0, l.jsxs)("section", {
            ref: j ? f : void 0,
            className: a()(h.uW, x),
            "aria-labelledby": null != i ? N : void 0,
            children: [
                null != i &&
                    (0, l.jsxs)("div", {
                        className: h.so,
                        children: [
                            (0, l.jsxs)("div", {
                                className: h.wx,
                                children: [
                                    (0, l.jsx)(d.D, { variant: _, color: p, className: C, id: N, children: i }),
                                    s,
                                ],
                            }),
                            null != g && (0, l.jsx)(r.E, { variant: "text-xs/normal", children: g }),
                        ],
                    }),
                (0, l.jsx)(o.F, { children: t }),
            ],
        })
    );
}
