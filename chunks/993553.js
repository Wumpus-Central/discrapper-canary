n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(692547),
    a = n(531057),
    l = n(865824),
    o = n(481060),
    c = n(388032),
    d = n(609173);
function u(e) {
    let { children: t, lineClamp: n = 2, ...u } = e,
        [m, g] = s.useState(!1),
        [h, p] = s.useState(null),
        x =
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
                            ? (0, i.jsx)(l.u, {
                                  color: r.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                            : (0, i.jsx)(a.C, {
                                  color: r.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                    ]
                })
            }),
        [f, _] = s.useState(null),
        E = s.useCallback(() => {
            if (null == f) return;
            let { scrollHeight: e, clientHeight: t } = f;
            e > t &&
                p({
                    truncatedHeight: t,
                    expandedHeight: e
                });
        }, [f]);
    s.useEffect(() => {
        requestAnimationFrame(E);
    }, [E, t, n]);
    let C = 'auto';
    return (
        null != h && (C = m ? ''.concat(h.expandedHeight, 'px') : ''.concat(h.truncatedHeight, 'px')),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    ...u,
                    className: d.content,
                    lineClamp: m ? void 0 : n,
                    ref: _,
                    style: { height: C },
                    children: t
                }),
                x
            ]
        })
    );
}
