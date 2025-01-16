n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var A = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(313201),
    s = n(388032),
    d = n(944335);
function c(e) {
    let { disabled: t = !1, disabledTooltip: n, published: a, submitting: c = !1, onClick: u } = e,
        g = (0, o.Dt)(),
        [h, p] = r.useState(a);
    return (
        r.useEffect(() => {
            p((e) => e || a);
        }, [a]),
        (0, A.jsxs)('div', {
            className: l()(
                {
                    [d.publishable]: !t && !a,
                    [d.wasEverPublished]: h
                },
                d.container
            ),
            children: [
                (0, A.jsxs)('div', {
                    className: d.explanationColumn,
                    children: [
                        (0, A.jsx)(i.Heading, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a ? s.intl.string(s.t.VaaagY) : s.intl.string(s.t.oI8aQU)
                        }),
                        (0, A.jsx)(i.Text, {
                            id: g,
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: a ? s.intl.string(s.t['0r6pbG']) : s.intl.string(s.t['8MMHYG'])
                        })
                    ]
                }),
                (0, A.jsx)(i.Tooltip, {
                    text: t ? n : void 0,
                    children: (e) =>
                        (0, A.jsxs)(i.Button, {
                            ...e,
                            className: l()(d.button, {
                                [d.wasEverPublished]: h,
                                [d.publishButton]: !a,
                                [d.disabledPublishButton]: t
                            }),
                            innerClassName: d.buttonContents,
                            color: a ? i.Button.Colors.RED : i.Button.Colors.CUSTOM,
                            'aria-describedby': g,
                            'aria-disabled': t,
                            grow: !1,
                            onClick: t ? void 0 : u,
                            submitting: c,
                            children: [
                                a ? s.intl.string(s.t.DlJOvr) : s.intl.string(s.t.X7YGXF),
                                a
                                    ? (0, A.jsx)(i.EyeSlashIcon, {
                                          size: 'md',
                                          className: d.buttonIcon,
                                          color: 'currentColor'
                                      })
                                    : (0, A.jsx)(i.SparklesIcon, {
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
