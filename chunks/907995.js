n.d(t, { f: () => c });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(388032),
    o = n(98199);
function c(e) {
    let { label: t, labelHook: n, dismissNotice: r, className: c } = e;
    return (0, i.jsxs)('div', {
        className: s()(o.safetySettingsNotice, c),
        children: [
            (0, i.jsx)(l.d3s, { size: 'md' }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'interactive-active',
                children: a.intl.format(t, {
                    hook: (e, t) =>
                        (0, i.jsx)(
                            l.eee,
                            {
                                onClick: n,
                                children: e
                            },
                            t
                        )
                })
            }),
            null != r &&
                (0, i.jsx)(l.P3F, {
                    className: o.closeButton,
                    onClick: r,
                    children: (0, i.jsx)(l.Dio, {})
                })
        ]
    });
}
