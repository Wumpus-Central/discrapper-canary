n.d(t, { Z: () => g }), n(388685), n(361932), n(187205), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(200100),
    o = n(692547),
    c = n(481060),
    u = n(259580),
    d = n(648993);
function m(e) {
    let { checked: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: d.row,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'interactive-active',
                className: d.rowText,
                children: n
            }),
            t
                ? (0, r.jsx)(c.owK, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
                      className: s()(d.rowIcon, d.rowIconChecked)
                  })
                : (0, r.jsx)('div', { className: s()(d.rowIcon, d.rowIconEmpty) })
        ]
    });
}
function g(e) {
    let { title: t, children: n, buttonLabel: l, buttonCallback: s, disabled: o } = e,
        [g, p] = i.useState(!1),
        f = n.flatMap((e) => e.items.map((e) => e.completed)),
        h = f.filter((e) => e).length / f.length,
        x = (0, c.q_F)({ width: ''.concat(100 * h, '%') });
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsxs)(c.P3F, {
                className: d.headerBar,
                onClick: () => p((e) => !e),
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        className: d.headerText,
                        children: t
                    }),
                    (0, r.jsx)(u.Z, {
                        direction: g ? u.Z.Directions.DOWN : u.Z.Directions.UP,
                        className: d.headerCaret
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.progressBarOuter,
                children: (0, r.jsx)(a.animated.div, {
                    className: d.progressBarInner,
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
                                t > 0 && (0, r.jsx)(c.$i$, { className: d.divider }),
                                (0, r.jsx)(c.vwX, {
                                    className: d.categoryTitle,
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
                        (0, r.jsx)(c.$i$, { className: d.divider }),
                        (0, r.jsx)(c.zxk, {
                            className: d.button,
                            size: c.zxk.Sizes.SMALL,
                            color: c.zxk.Colors.BRAND,
                            onClick: s,
                            disabled: 1 !== h || o,
                            children: l
                        })
                    ]
                })
        ]
    });
}
