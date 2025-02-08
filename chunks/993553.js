n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(692547),
    l = n(531057),
    a = n(865824),
    o = n(481060),
    c = n(388032),
    d = n(609173);
function u(e) {
    let { children: t, lineClamp: n = 2, ...u } = e,
        [m, g] = s.useState(!1),
        [h, x] = s.useState(null),
        _ =
            null != h &&
            (0, i.jsx)('button', {
                className: d.button,
                onClick: () => g((e) => !e),
                children: (0, i.jsxs)(o.Text, {
                    className: d.seeMore,
                    variant: 'text-sm/medium',
                    color: 'text-brand',
                    children: [
                        m ? c.intl.string(c.t['JQX/PT']) : c.intl.string(c.t.Fbrd8P),
                        m
                            ? (0, i.jsx)(a.u, {
                                  color: r.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                            : (0, i.jsx)(l.C, {
                                  color: r.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                    ]
                })
            }),
        [p, E] = s.useState(null),
        C = s.useCallback(() => {
            if (null == p) return;
            let { scrollHeight: e, clientHeight: t } = p;
            e > t &&
                x({
                    truncatedHeight: t,
                    expandedHeight: e
                });
        }, [p]);
    s.useEffect(() => {
        requestAnimationFrame(C);
    }, [C, t, n]);
    let f = 'auto';
    return (
        null != h && (f = m ? ''.concat(h.expandedHeight, 'px') : ''.concat(h.truncatedHeight, 'px')),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    ...u,
                    className: d.content,
                    lineClamp: m ? void 0 : n,
                    ref: E,
                    style: { height: f },
                    children: t
                }),
                _
            ]
        })
    );
}
