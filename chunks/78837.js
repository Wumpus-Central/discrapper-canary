n.d(t, { f: () => A });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(386181),
    o = n(650682),
    c = n(934551),
    d = n(827734),
    u = n(397927),
    _ = n(590089),
    m = n(747625);
function A(e) {
    let {
            ref: t,
            title: n,
            collapsedSubtitle: r,
            isExpanded: A,
            onExpandedChange: g,
            children: E,
            animate: h = !0,
        } = e,
        p = s.useRef(null),
        [C, x] = s.useState(null),
        T = A && null != C;
    return (
        s.useLayoutEffect(() => {
            null != p.current && null == C && x(p.current.clientHeight);
        }, [C]),
        (0, i.jsxs)(l.EN, {
            ref: t,
            isExpanded: A,
            onExpandedChange: g,
            children: [
                (0, i.jsx)(_.U, {
                    ref: p,
                    style: null != C ? { minHeight: C } : void 0,
                    title: n,
                    description: T ? void 0 : r,
                    secondaryTrailingElement: (0, i.jsx)(u.vN3, {
                        children: (0, i.jsx)(o.$, {
                            slot: "trigger",
                            className: m.bW,
                            children: (0, i.jsx)(c.ChevronLargeUpIcon, {
                                className: a()(m.Kk, { [m.kX]: !A }),
                                color: d.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => g(!A),
                }),
                (0, i.jsx)(l.kS, {
                    className: a()(m.nd, { [m.t5]: !h }),
                    children: (0, i.jsx)(u.BJc, { gap: 16, padding: { top: 16 }, children: E }),
                }),
            ],
        })
    );
}
