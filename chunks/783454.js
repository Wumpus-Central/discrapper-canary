n.d(t, { Z: () => m }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(313201),
    c = n(259580),
    d = n(404203),
    u = n(388032),
    g = n(717795);
function m(e) {
    let { intiallyExpanded: t = !1, title: n, description: l, children: m } = e,
        [p, f] = i.useState(t),
        h = () => f((e) => !e),
        b = (0, o.Dt)();
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(d.Z, {
                className: a()(g.header, { [g.headerWithDescription]: p && null != l }),
                onClick: h,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: n,
                            }),
                            (0, r.jsx)(s.P3F, {
                                onClick: i(h),
                                "aria-label": u.intl.string(u.t.e5eQOy),
                                "aria-controls": b,
                                "aria-expanded": p,
                                focusProps: { ringTarget: t },
                                children: (0, r.jsx)(c.Z, {
                                    className: g.caret,
                                    direction: p ? c.Z.Directions.UP : c.Z.Directions.DOWN,
                                }),
                            }),
                        ],
                    });
                },
            }),
            p &&
                (0, r.jsxs)("div", {
                    id: b,
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
                            children: m,
                        }),
                    ],
                }),
        ],
    });
}
