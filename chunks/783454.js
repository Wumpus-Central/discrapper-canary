(n.d(t, { Z: () => g }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(313201),
    c = n(259580),
    d = n(404203),
    u = n(388032),
    m = n(551789);
function g(e) {
    let { intiallyExpanded: t = !1, title: n, description: l, children: g } = e,
        [p, h] = i.useState(t),
        f = () => h((e) => !e),
        x = (0, o.Dt)();
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)(d.Z, {
                className: a()(m.header, { [m.headerWithDescription]: p && null != l }),
                onClick: f,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-md/semibold',
                                children: n
                            }),
                            (0, r.jsx)(s.P3F, {
                                onClick: i(f),
                                'aria-label': u.intl.string(u.t.e5eQOz),
                                'aria-controls': x,
                                'aria-expanded': p,
                                focusProps: { ringTarget: t },
                                children: (0, r.jsx)(c.Z, {
                                    className: m.caret,
                                    direction: p ? c.Z.Directions.UP : c.Z.Directions.DOWN
                                })
                            })
                        ]
                    });
                }
            }),
            p &&
                (0, r.jsxs)('div', {
                    id: x,
                    children: [
                        null != l &&
                            (0, r.jsx)(s.R94, {
                                type: s.R94.Types.DESCRIPTION,
                                className: m.description,
                                children: l
                            }),
                        (0, r.jsx)('div', { className: m.divider }),
                        (0, r.jsx)('div', {
                            className: m.content,
                            children: g
                        })
                    ]
                })
        ]
    });
}
