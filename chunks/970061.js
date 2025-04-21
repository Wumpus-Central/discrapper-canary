n.d(t, { Z: () => g }), n(388685), n(361932), n(187205), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(200100),
    o = n(692547),
    c = n(481060),
    d = n(259580),
    u = n(648993);
function m(e) {
    let { checked: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: u.row,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'interactive-active',
                className: u.rowText,
                children: n
            }),
            t
                ? (0, r.jsx)(c.owK, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
                      className: s()(u.rowIcon, u.rowIconChecked)
                  })
                : (0, r.jsx)('div', { className: s()(u.rowIcon, u.rowIconEmpty) })
        ]
    });
}
function g(e) {
    let { title: t, children: n, buttonLabel: l, buttonCallback: s, disabled: o } = e,
        [g, p] = i.useState(!1),
        h = n.flatMap((e) => e.items.map((e) => e.completed)),
        f = h.filter((e) => e).length / h.length,
        x = (0, c.q_F)({ width: ''.concat(100 * f, '%') });
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsxs)(c.P3F, {
                className: u.headerBar,
                onClick: () => p((e) => !e),
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        className: u.headerText,
                        children: t
                    }),
                    (0, r.jsx)(d.Z, {
                        direction: g ? d.Z.Directions.DOWN : d.Z.Directions.UP,
                        className: u.headerCaret
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: u.progressBarOuter,
                children: (0, r.jsx)(a.animated.div, {
                    className: u.progressBarInner,
                    style: x
                })
            }),
            !g &&
                n.map((e, t) => {
                    let { title: n, items: l } = e;
                    return (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                t > 0 && (0, r.jsx)(c.$i$, { className: u.divider }),
                                (0, r.jsx)(c.vwX, {
                                    className: u.categoryTitle,
                                    children: n
                                }),
                                l.map((e, t) =>
                                    (0, r.jsx)(
                                        m,
                                        {
                                            children: e.description,
                                            checked: e.completed
                                        },
                                        t
                                    )
                                )
                            ]
                        },
                        t
                    );
                }),
            null !== l &&
                '' !== l &&
                null !== s &&
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(c.$i$, { className: u.divider }),
                        (0, r.jsx)(c.zxk, {
                            className: u.button,
                            size: c.zxk.Sizes.SMALL,
                            color: c.zxk.Colors.BRAND,
                            onClick: s,
                            disabled: 1 !== f || o,
                            children: l
                        })
                    ]
                })
        ]
    });
}
