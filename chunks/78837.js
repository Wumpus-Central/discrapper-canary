n.d(t, {
    f: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(386181),
    o = n(650682),
    c = n(934551),
    d = n(827734),
    u = n(397927),
    _ = n(590089),
    p = n(747625);

function m(e) {
    let {
            ref: t,
            title: n,
            collapsedSubtitle: l,
            isExpanded: m,
            onExpandedChange: g,
            children: A,
            animate: f = !0,
        } = e,
        b = i.useRef(null),
        [h, E] = i.useState(null),
        O = m && null != h;
    return (
        i.useLayoutEffect(() => {
            null != b.current && null == h && E(b.current.clientHeight);
        }, [h]),
        (0, r.jsxs)(a.EN, {
            ref: t,
            isExpanded: m,
            onExpandedChange: g,
            children: [
                (0, r.jsx)(_.U, {
                    ref: b,
                    style:
                        null != h
                            ? {
                                  minHeight: h,
                              }
                            : void 0,
                    title: n,
                    description: O ? void 0 : l,
                    secondaryTrailingElement: (0, r.jsx)(u.vN3, {
                        children: (0, r.jsx)(o.$, {
                            slot: "trigger",
                            className: p.bW,
                            children: (0, r.jsx)(c.ChevronLargeUpIcon, {
                                className: s()(p.Kk, {
                                    [p.kX]: !m,
                                }),
                                color: d.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => g(!m),
                }),
                (0, r.jsx)(a.kS, {
                    className: s()(p.nd, {
                        [p.t5]: !f,
                    }),
                    children: (0, r.jsx)(u.BJc, {
                        gap: 16,
                        padding: {
                            top: 16,
                        },
                        children: A,
                    }),
                }),
            ],
        })
    );
}
