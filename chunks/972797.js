A.d(t, {
    Z: function () {
        return c;
    }
}),
    A(47120);
var n = A(200651),
    r = A(192379),
    a = A(120356),
    i = A.n(a),
    l = A(481060),
    o = A(313201),
    s = A(388032),
    d = A(944335);
function c(e) {
    let { disabled: t = !1, disabledTooltip: A, published: a, submitting: c = !1, onClick: u } = e,
        g = (0, o.Dt)(),
        [h, p] = r.useState(a);
    return (
        r.useEffect(() => {
            p((e) => e || a);
        }, [a]),
        (0, n.jsxs)('div', {
            className: i()(
                {
                    [d.publishable]: !t && !a,
                    [d.wasEverPublished]: h
                },
                d.container
            ),
            children: [
                (0, n.jsxs)('div', {
                    className: d.explanationColumn,
                    children: [
                        (0, n.jsx)(l.Heading, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a ? s.intl.string(s.t.VaaagY) : s.intl.string(s.t.oI8aQU)
                        }),
                        (0, n.jsx)(l.Text, {
                            id: g,
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: a ? s.intl.string(s.t['0r6pbG']) : s.intl.string(s.t['8MMHYG'])
                        })
                    ]
                }),
                (0, n.jsx)(l.Tooltip, {
                    text: t ? A : void 0,
                    children: (e) =>
                        (0, n.jsxs)(l.Button, {
                            ...e,
                            className: i()(d.button, {
                                [d.wasEverPublished]: h,
                                [d.publishButton]: !a,
                                [d.disabledPublishButton]: t
                            }),
                            innerClassName: d.buttonContents,
                            color: a ? l.Button.Colors.RED : l.Button.Colors.CUSTOM,
                            'aria-describedby': g,
                            'aria-disabled': t,
                            grow: !1,
                            onClick: t ? void 0 : u,
                            submitting: c,
                            children: [
                                a ? s.intl.string(s.t.DlJOvr) : s.intl.string(s.t.X7YGXF),
                                a
                                    ? (0, n.jsx)(l.EyeSlashIcon, {
                                          size: 'md',
                                          className: d.buttonIcon,
                                          color: 'currentColor'
                                      })
                                    : (0, n.jsx)(l.SparklesIcon, {
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
