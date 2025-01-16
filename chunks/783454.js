n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(313201),
    c = n(259580),
    d = n(404203),
    u = n(388032),
    m = n(613511);
function h(e) {
    let { intiallyExpanded: t = !1, title: n, description: l, children: h } = e,
        [g, x] = r.useState(t),
        p = () => x((e) => !e),
        f = (0, o.Dt)();
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsx)(d.Z, {
                className: s()(m.header, { [m.headerWithDescription]: g && null != l }),
                onClick: p,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: r } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: 'heading-md/semibold',
                                children: n
                            }),
                            (0, i.jsx)(a.Clickable, {
                                onClick: r(p),
                                'aria-label': u.intl.string(u.t.e5eQOz),
                                'aria-controls': f,
                                'aria-expanded': g,
                                focusProps: { ringTarget: t },
                                children: (0, i.jsx)(c.Z, {
                                    className: m.caret,
                                    direction: g ? c.Z.Directions.UP : c.Z.Directions.DOWN
                                })
                            })
                        ]
                    });
                }
            }),
            g &&
                (0, i.jsxs)('div', {
                    id: f,
                    children: [
                        null != l &&
                            (0, i.jsx)(a.FormText, {
                                type: a.FormText.Types.DESCRIPTION,
                                className: m.description,
                                children: l
                            }),
                        (0, i.jsx)('div', { className: m.divider }),
                        (0, i.jsx)('div', {
                            className: m.content,
                            children: h
                        })
                    ]
                })
        ]
    });
}
