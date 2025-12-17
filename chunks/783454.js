n.d(t, { Z: () => f }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(313201),
    c = n(259580),
    d = n(404203),
    u = n(388032),
    g = n(618374);
function f(e) {
    let { intiallyExpanded: t = !1, title: n, description: l, children: f } = e,
        [m, b] = i.useState(t),
        p = () => b((e) => !e),
        h = (0, o.Dt)();
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(d.Z, {
                className: a()(g.header, { [g.headerWithDescription]: m && null != l }),
                onClick: p,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: n,
                            }),
                            (0, r.jsx)(s.P3F, {
                                onClick: i(p),
                                "aria-label": u.intl.string(u.t.e5eQOy),
                                "aria-controls": h,
                                "aria-expanded": m,
                                focusProps: { ringTarget: t },
                                children: (0, r.jsx)(c.Z, {
                                    className: g.caret,
                                    direction: m ? c.Z.Directions.UP : c.Z.Directions.DOWN,
                                }),
                            }),
                        ],
                    });
                },
            }),
            m &&
                (0, r.jsxs)("div", {
                    id: h,
                    children: [
                        null != l &&
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                className: g.description,
                                children: l,
                            }),
                        (0, r.jsx)("div", { className: g.divider }),
                        (0, r.jsx)("div", {
                            className: g.content,
                            children: f,
                        }),
                    ],
                }),
        ],
    });
}
