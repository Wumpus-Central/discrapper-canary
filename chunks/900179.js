n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(534514),
    o = n(834730),
    d = n(707554),
    c = n(915089),
    u = n(94343),
    h = n(716804),
    m = n(87260);
function p(e) {
    let {
            children: t,
            heading: n,
            headingIcon: s,
            introText: p,
            className: g,
            scrollTargetId: f,
            headingClassName: A,
            headingVariant: x = "text-xs/semibold",
            headingColor: v = "text-default",
        } = e,
        E = (0, c.GV)(),
        C = l.useRef(null),
        I = (0, h.g)(),
        _ = null != f && I === f;
    return (
        (0, u.A)(C, _),
        (0, i.jsxs)("section", {
            ref: _ ? C : void 0,
            className: a()(m.uW, g),
            "aria-labelledby": null != n ? E : void 0,
            children: [
                null != n &&
                    (0, i.jsxs)("div", {
                        className: m.so,
                        children: [
                            (0, i.jsxs)("div", {
                                className: m.wx,
                                children: [
                                    (0, i.jsx)(r.D, { variant: x, color: v, className: A, id: E, children: n }),
                                    s,
                                ],
                            }),
                            null != p && (0, i.jsx)(o.E, { variant: "text-xs/normal", children: p }),
                        ],
                    }),
                (0, i.jsx)(d.F, { children: t }),
            ],
        })
    );
}
