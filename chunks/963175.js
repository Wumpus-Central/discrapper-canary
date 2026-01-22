n.d(t, { A: () => g }), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    c = n(915089),
    o = n(147925),
    d = n(710144),
    u = n(985018),
    f = n(238803);
function g(e) {
    let { intiallyExpanded: t = !1, title: n, description: l, children: g } = e,
        [b, m] = i.useState(t),
        p = () => m((e) => !e),
        x = (0, c.GV)();
    return (0, r.jsxs)("div", {
        className: f.kL,
        children: [
            (0, r.jsx)(d.A, {
                className: s()(f.wx, { [f.OD]: b && null != l }),
                onClick: p,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                children: n,
                            }),
                            (0, r.jsx)(a.DUT, {
                                onClick: i(p),
                                "aria-label": u.intl.string(u.t.e5eQOy),
                                "aria-controls": x,
                                "aria-expanded": b,
                                focusProps: { ringTarget: t },
                                children: (0, r.jsx)(o.A, {
                                    className: f.OW,
                                    direction: b ? o.A.Directions.UP : o.A.Directions.DOWN,
                                }),
                            }),
                        ],
                    });
                },
            }),
            b &&
                (0, r.jsxs)("div", {
                    id: x,
                    children: [
                        null != l &&
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                className: f.h_,
                                children: l,
                            }),
                        (0, r.jsx)("div", { className: f.yF }),
                        (0, r.jsx)("div", {
                            className: f.Qs,
                            children: g,
                        }),
                    ],
                }),
        ],
    });
}
