n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(534514),
    o = n(939249),
    d = n(834730),
    c = n(915089),
    u = n(147925),
    m = n(710144),
    g = n(985018),
    h = n(404924);
function x(e) {
    let { intiallyExpanded: t = !1, title: n, description: s, children: x } = e,
        [_, p] = l.useState(t),
        A = () => p((e) => !e),
        E = (0, c.GV)();
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [
            (0, i.jsx)(m.A, {
                className: r()(h.wx, { [h.OD]: _ && null != s }),
                onClick: A,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: l } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(a.D, { variant: "heading-md/semibold", children: n }),
                            (0, i.jsx)(o.D, {
                                onClick: l(A),
                                "aria-label": g.intl.string(g.t.e5eQOy),
                                "aria-controls": E,
                                "aria-expanded": _,
                                focusProps: { ringTarget: t },
                                children: (0, i.jsx)(u.A, {
                                    className: h.OW,
                                    direction: _ ? u.A.Directions.UP : u.A.Directions.DOWN,
                                }),
                            }),
                        ],
                    });
                },
            }),
            _ &&
                (0, i.jsxs)("div", {
                    id: E,
                    children: [
                        null != s && (0, i.jsx)(d.E, { variant: "text-sm/normal", className: h.h_, children: s }),
                        (0, i.jsx)("div", { className: h.yF }),
                        (0, i.jsx)("div", { className: h.Qs, children: x }),
                    ],
                }),
        ],
    });
}
