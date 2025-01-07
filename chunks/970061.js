n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120),
    n(390547);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(666912),
    o = n(692547),
    c = n(481060),
    d = n(259580),
    u = n(333839);
function m(e) {
    let { checked: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: u.row,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'interactive-active',
                className: u.rowText,
                children: n
            }),
            t
                ? (0, i.jsx)(c.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
                      className: a()(u.rowIcon, u.rowIconChecked)
                  })
                : (0, i.jsx)('div', { className: a()(u.rowIcon, u.rowIconEmpty) })
        ]
    });
}
function h(e) {
    let { title: t, children: n, buttonLabel: l, buttonCallback: a, disabled: o } = e,
        [h, g] = r.useState(!1),
        x = n.flatMap((e) => e.items.map((e) => e.completed)),
        p = x.filter((e) => e).length / x.length,
        f = (0, c.useSpring)({ width: ''.concat(100 * p, '%') });
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsxs)(c.Clickable, {
                className: u.headerBar,
                onClick: () => g((e) => !e),
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        className: u.headerText,
                        children: t
                    }),
                    (0, i.jsx)(d.Z, {
                        direction: h ? d.Z.Directions.DOWN : d.Z.Directions.UP,
                        className: u.headerCaret
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: u.progressBarOuter,
                children: (0, i.jsx)(s.animated.div, {
                    className: u.progressBarInner,
                    style: f
                })
            }),
            !h &&
                n.map((e, t) => {
                    let { title: n, items: l } = e;
                    return (0, i.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 && (0, i.jsx)(c.FormDivider, { className: u.divider }),
                                (0, i.jsx)(c.FormTitle, {
                                    className: u.categoryTitle,
                                    children: n
                                }),
                                l.map((e, t) =>
                                    (0, i.jsx)(
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
                null !== a &&
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(c.FormDivider, { className: u.divider }),
                        (0, i.jsx)(c.Button, {
                            className: u.button,
                            size: c.Button.Sizes.SMALL,
                            color: c.Button.Colors.BRAND,
                            onClick: a,
                            disabled: 1 !== p || o,
                            children: l
                        })
                    ]
                })
        ]
    });
}
