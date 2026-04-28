i.d(t, { A: () => m });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    u = i.n(s),
    r = i(534514),
    d = i(834730),
    a = i(707554),
    c = i(915089),
    o = i(94343),
    A = i(716804),
    h = i(87260);
function m(e) {
    let {
            children: t,
            heading: i,
            headingIcon: s,
            introText: m,
            className: g,
            scrollTargetId: x,
            headingClassName: b,
            headingVariant: f = "text-xs/semibold",
            headingColor: p = "text-default",
        } = e,
        F = (0, c.GV)(),
        v = n.useRef(null),
        j = (0, A.g)(),
        y = null != x && j === x;
    return (
        (0, o.A)(v, y),
        (0, l.jsxs)("section", {
            ref: y ? v : void 0,
            className: u()(h.uW, g),
            "aria-labelledby": null != i ? F : void 0,
            children: [
                null != i &&
                    (0, l.jsxs)("div", {
                        className: h.so,
                        children: [
                            (0, l.jsxs)("div", {
                                className: h.wx,
                                children: [
                                    (0, l.jsx)(r.D, { variant: f, color: p, className: b, id: F, children: i }),
                                    s,
                                ],
                            }),
                            null != m && (0, l.jsx)(d.E, { variant: "text-xs/normal", children: m }),
                        ],
                    }),
                (0, l.jsx)(a.F, { children: t }),
            ],
        })
    );
}
