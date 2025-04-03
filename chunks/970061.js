n.d(t, { Z: () => g }), n(47120), n(13667), n(390547), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(642128),
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
                      className: a()(u.rowIcon, u.rowIconChecked)
                  })
                : (0, r.jsx)('div', { className: a()(u.rowIcon, u.rowIconEmpty) })
        ]
    });
}
function g(e) {
    let { title: t, children: n, buttonLabel: s, buttonCallback: a, disabled: o } = e,
        [g, p] = i.useState(!1),
        h = n.flatMap((e) => e.items.map((e) => e.completed)),
        f = h.filter((e) => e).length / h.length,
        b = (0, c.q_F)({ width: ''.concat(100 * f, '%') });
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
                children: (0, r.jsx)(l.animated.div, {
                    className: u.progressBarInner,
                    style: b
                })
            }),
            !g &&
                n.map((e, t) => {
                    let { title: n, items: s } = e;
                    return (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                t > 0 && (0, r.jsx)(c.$i$, { className: u.divider }),
                                (0, r.jsx)(c.vwX, {
                                    className: u.categoryTitle,
                                    children: n
                                }),
                                s.map((e, t) =>
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
            null !== s &&
                '' !== s &&
                null !== a &&
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(c.$i$, { className: u.divider }),
                        (0, r.jsx)(c.zxk, {
                            className: u.button,
                            size: c.zxk.Sizes.SMALL,
                            color: c.zxk.Colors.BRAND,
                            onClick: a,
                            disabled: 1 !== f || o,
                            children: s
                        })
                    ]
                })
        ]
    });
}
