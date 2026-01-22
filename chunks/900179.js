n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(915089),
    c = n(94343),
    u = n(716804),
    d = n(892007);

function f(e) {
    let {
            children: t,
            heading: n,
            headingIcon: a,
            introText: f,
            className: p,
            scrollTargetId: _,
            headingClassName: h,
            headingVariant: m = "text-xs/semibold",
            headingColor: g = "text-default",
        } = e,
        E = (0, l.GV)(),
        b = i.useRef(null),
        y = (0, u.g)(),
        O = null != _ && y === _;
    return (
        (0, c.A)(b, O),
        (0, r.jsxs)("section", {
            ref: O ? b : void 0,
            className: s()(d.uW, p),
            "aria-labelledby": null != n ? E : void 0,
            children: [
                null != n &&
                    (0, r.jsxs)("div", {
                        className: d.so,
                        children: [
                            (0, r.jsxs)("div", {
                                className: d.wx,
                                children: [
                                    (0, r.jsx)(o.Heading, {
                                        variant: m,
                                        color: g,
                                        className: h,
                                        id: E,
                                        children: n,
                                    }),
                                    a,
                                ],
                            }),
                            null != f &&
                                (0, r.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    children: f,
                                }),
                        ],
                    }),
                (0, r.jsx)(o.Fmo, {
                    children: t,
                }),
            ],
        })
    );
}
