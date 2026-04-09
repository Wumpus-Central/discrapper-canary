"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(915089),
    d = n(147925),
    c = n(710144),
    u = n(985018),
    m = n(48940);
function g(e) {
    let { intiallyExpanded: t = !1, title: n, description: l, children: g } = e,
        [x, h] = s.useState(t),
        _ = () => h((e) => !e),
        A = (0, o.GV)();
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsx)(c.A, {
                className: r()(m.wx, { [m.OD]: x && null != l }),
                onClick: _,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: s } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(a.Heading, { variant: "heading-md/semibold", children: n }),
                            (0, i.jsx)(a.DUT, {
                                onClick: s(_),
                                "aria-label": u.intl.string(u.t.e5eQOy),
                                "aria-controls": A,
                                "aria-expanded": x,
                                focusProps: { ringTarget: t },
                                children: (0, i.jsx)(d.A, {
                                    className: m.OW,
                                    direction: x ? d.A.Directions.UP : d.A.Directions.DOWN,
                                }),
                            }),
                        ],
                    });
                },
            }),
            x &&
                (0, i.jsxs)("div", {
                    id: A,
                    children: [
                        null != l && (0, i.jsx)(a.Text, { variant: "text-sm/normal", className: m.h_, children: l }),
                        (0, i.jsx)("div", { className: m.yF }),
                        (0, i.jsx)("div", { className: m.Qs, children: g }),
                    ],
                }),
        ],
    });
}
