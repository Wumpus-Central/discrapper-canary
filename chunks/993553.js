n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(692547),
    r = n(531057),
    a = n(865824),
    o = n(481060),
    c = n(388032),
    d = n(948112);
function u(e) {
    let { children: t, lineClamp: n = 2, ...u } = e,
        [h, m] = s.useState(!1),
        [g, x] = s.useState(null),
        _ =
            null != g &&
            (0, i.jsx)('button', {
                className: d.button,
                onClick: () => m((e) => !e),
                children: (0, i.jsxs)(o.Text, {
                    className: d.seeMore,
                    variant: 'text-sm/medium',
                    color: 'text-brand',
                    children: [
                        h ? c.intl.string(c.t['JQX/PT']) : c.intl.string(c.t.Fbrd8P),
                        h
                            ? (0, i.jsx)(a.u, {
                                  color: l.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                            : (0, i.jsx)(r.C, {
                                  color: l.Z.colors.TEXT_BRAND,
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
    let N = 'auto';
    return (
        null != g && (N = h ? ''.concat(g.expandedHeight, 'px') : ''.concat(g.truncatedHeight, 'px')),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    ...u,
                    className: d.content,
                    lineClamp: h ? void 0 : n,
                    ref: E,
                    style: { height: N },
                    children: t
                }),
                _
            ]
        })
    );
}
