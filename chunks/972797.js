t.d(e, { Z: () => c }), t(47120);
var n = t(200651),
    a = t(192379),
    l = t(120356),
    r = t.n(l),
    i = t(481060),
    o = t(313201),
    s = t(388032),
    d = t(861628);
function c(A) {
    let { disabled: e = !1, disabledTooltip: t, published: l, submitting: c = !1, onClick: u } = A,
        g = (0, o.Dt)(),
        [m, h] = a.useState(l);
    return (
        a.useEffect(() => {
            h((A) => A || l);
        }, [l]),
        (0, n.jsxs)('div', {
            className: r()(
                {
                    [d.publishable]: !e && !l,
                    [d.wasEverPublished]: m
                },
                d.container
            ),
            children: [
                (0, n.jsxs)('div', {
                    className: d.explanationColumn,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: l ? s.intl.string(s.t.VaaagY) : s.intl.string(s.t.oI8aQU)
                        }),
                        (0, n.jsx)(i.Text, {
                            id: g,
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: l ? s.intl.string(s.t['0r6pbG']) : s.intl.string(s.t['8MMHYG'])
                        })
                    ]
                }),
                (0, n.jsx)(i.ua7, {
                    text: e ? t : void 0,
                    children: (A) =>
                        (0, n.jsxs)(i.zxk, {
                            ...A,
                            className: r()(d.button, {
                                [d.wasEverPublished]: m,
                                [d.publishButton]: !l,
                                [d.disabledPublishButton]: e
                            }),
                            innerClassName: d.buttonContents,
                            color: l ? i.zxk.Colors.RED : i.zxk.Colors.CUSTOM,
                            'aria-describedby': g,
                            'aria-disabled': e,
                            grow: !1,
                            onClick: e ? void 0 : u,
                            submitting: c,
                            children: [
                                l ? s.intl.string(s.t.DlJOvr) : s.intl.string(s.t.X7YGXF),
                                l
                                    ? (0, n.jsx)(i.kZF, {
                                          size: 'md',
                                          className: d.buttonIcon,
                                          color: 'currentColor'
                                      })
                                    : (0, n.jsx)(i.T$Z, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: d.buttonIcon
                                      })
                            ]
                        })
                })
            ]
        })
    );
}
