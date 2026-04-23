t.d(n, { f: () => m });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    s = t.n(i),
    a = t(386181),
    o = t(650682),
    c = t(138017),
    d = t(827734),
    u = t(187322),
    x = t(331322),
    j = t(590089),
    h = t(523880);
function m(e) {
    let {
            ref: n,
            title: t,
            collapsedSubtitle: i,
            isExpanded: m,
            onExpandedChange: f,
            children: p,
            animate: y = !0,
        } = e,
        g = r.useRef(null),
        [v, A] = r.useState(null),
        N = m && null != v;
    return (
        r.useLayoutEffect(() => {
            null != g.current && null == v && A(g.current.clientHeight);
        }, [v]),
        (0, l.jsxs)(a.EN, {
            ref: n,
            isExpanded: m,
            onExpandedChange: f,
            children: [
                (0, l.jsx)(j.U, {
                    ref: g,
                    style: null != v ? { minHeight: v } : void 0,
                    title: t,
                    "aria-label": t,
                    description: N ? void 0 : i,
                    trailingElement: (0, l.jsx)(u.vN, {
                        children: (0, l.jsx)(o.$, {
                            slot: "trigger",
                            className: h.bW,
                            children: (0, l.jsx)(c.j, {
                                className: s()(h.Kk, { [h.kX]: !m }),
                                color: d.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => f(!m),
                }),
                (0, l.jsx)(a.kS, {
                    className: s()(h.nd, { [h.t5]: !y }),
                    children: (0, l.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: p }),
                }),
            ],
        })
    );
}
