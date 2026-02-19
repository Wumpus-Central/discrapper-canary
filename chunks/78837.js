n.d(t, { f: () => A });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(386181),
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
            collapsedSubtitle: a,
            isExpanded: A,
            onExpandedChange: g,
            children: h,
            animate: x = !0,
        } = e,
        p = s.useRef(null),
        [E, C] = s.useState(null),
        T = A && null != E;
    return (
        s.useLayoutEffect(() => {
            null != p.current && null == E && C(p.current.clientHeight);
        }, [E]),
        (0, i.jsxs)(r.EN, {
            ref: t,
            isExpanded: A,
            onExpandedChange: g,
            children: [
                (0, i.jsx)(_.U, {
                    ref: p,
                    style: null != E ? { minHeight: E } : void 0,
                    title: n,
                    description: T ? void 0 : a,
                    trailingElement: (0, i.jsx)(u.vN3, {
                        children: (0, i.jsx)(o.$, {
                            slot: "trigger",
                            className: m.bW,
                            children: (0, i.jsx)(c.ChevronLargeUpIcon, {
                                className: l()(m.Kk, { [m.kX]: !A }),
                                color: d.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => g(!A),
                }),
                (0, i.jsx)(r.kS, {
                    className: l()(m.nd, { [m.t5]: !x }),
                    children: (0, i.jsx)(u.BJc, { gap: 16, padding: { top: 16 }, children: h }),
                }),
            ],
        })
    );
}
