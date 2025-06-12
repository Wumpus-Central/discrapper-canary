n.d(t, { f: () => m });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(711703),
    c = n(484710),
    d = n(388032),
    u = n(98199);
function m(e) {
    let { label: t, labelHook: n, dismissNotice: s, className: m, noticeType: g } = e,
        p = null != s;
    r.useEffect(() => {
        (0, o.l)(g, c.up.VIEWED);
    }, [g]);
    let h = r.useCallback(() => {
            null != s && (s(), (0, o.l)(g, c.up.DISMISS));
        }, [g, s]),
        f = r.useCallback(() => {
            n(), (0, o.l)(g, c.up.LEARN_MORE);
        }, [g, n]);
    return (0, i.jsxs)('div', {
        className: l()(u.safetySettingsNotice, m),
        children: [
            (0, i.jsx)(a.d3s, { size: 'md' }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'interactive-active',
                children: d.intl.format(t, {
                    hook: (e, t) =>
                        (0, i.jsx)(
                            a.eee,
                            {
                                onClick: f,
                                children: e
                            },
                            t
                        )
                })
            }),
            p &&
                (0, i.jsx)(a.P3F, {
                    className: u.closeButton,
                    onClick: h,
                    children: (0, i.jsx)(a.Dio, {})
                })
        ]
    });
}
