n.d(t, {
    f: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n(386181),
    c = n(650682),
    d = n(934551),
    u = n(827734),
    _ = n(397927),
    p = n(770178),
    m = n(590089),
    g = n(747625);

function A(e) {
    let {
            title: t,
            collapsedSubtitle: n,
            isExpanded: l,
            onExpandedChange: A,
            onExpandedChangeComplete: f,
            children: h,
            animate: b = !0,
        } = e,
        E = i.useRef(null),
        [x, O] = i.useState(null),
        C = i.useRef(l),
        T = i.useRef(!1);
    i.useEffect(() => {
        C.current !== l && ((T.current = !0), (C.current = l));
    }, [l]);
    let I = i.useCallback(
            (e) => {
                null != e.target && T.current && ((T.current = !1), null == f || f(l));
            },
            [l, f],
        ),
        S = i.useMemo(() => (0, a.debounce)(I, 50), [I]),
        j = (0, p.w)(S, [], {
            enabled: null != f,
        }),
        v = l && null != x;
    return (
        i.useLayoutEffect(() => {
            null != E.current && null == x && O(E.current.clientHeight);
        }, [x]),
        (0, r.jsxs)(o.EN, {
            ref: j,
            isExpanded: l,
            onExpandedChange: A,
            children: [
                (0, r.jsx)(m.U, {
                    ref: E,
                    style:
                        null != x
                            ? {
                                  minHeight: x,
                              }
                            : void 0,
                    title: t,
                    description: v ? void 0 : n,
                    secondaryTrailingElement: (0, r.jsx)(_.vN3, {
                        children: (0, r.jsx)(c.$, {
                            slot: "trigger",
                            className: g.bW,
                            children: (0, r.jsx)(d.ChevronLargeUpIcon, {
                                className: s()(g.Kk, {
                                    [g.kX]: !l,
                                }),
                                color: u.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => A(!l),
                }),
                (0, r.jsx)(o.kS, {
                    className: s()(g.nd, {
                        [g.t5]: !b,
                    }),
                    children: (0, r.jsx)(_.BJc, {
                        gap: 16,
                        padding: {
                            top: 16,
                        },
                        children: h,
                    }),
                }),
            ],
        })
    );
}
