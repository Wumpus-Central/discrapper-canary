n.d(t, { Z: () => g }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(313201),
    c = n(259580),
    d = n(404203),
    u = n(388032),
    m = n(551789);
function g(e) {
    let { intiallyExpanded: t = !1, title: n, description: s, children: g } = e,
        [p, h] = i.useState(t),
        f = () => h((e) => !e),
        b = (0, o.Dt)();
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)(d.Z, {
                className: a()(m.header, { [m.headerWithDescription]: p && null != s }),
                onClick: f,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-md/semibold',
                                children: n
                            }),
                            (0, r.jsx)(l.P3F, {
                                onClick: i(f),
                                'aria-label': u.NW.string(u.t.e5eQOz),
                                'aria-controls': b,
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
                    id: b,
                    children: [
                        null != s &&
                            (0, r.jsx)(l.R94, {
                                type: l.R94.Types.DESCRIPTION,
                                className: m.description,
                                children: s
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
