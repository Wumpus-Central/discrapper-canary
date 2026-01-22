n.d(t, {
    f: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(386181),
    c = n(650682),
    u = n(934551),
    d = n(827734),
    f = n(397927),
    p = n(770178),
    _ = n(590089),
    h = n(747625);

function m(e) {
    let {
            title: t,
            collapsedSubtitle: n,
            isExpanded: a,
            onExpandedChange: m,
            onExpandedChangeComplete: g,
            children: E,
            animate: b = !0,
        } = e,
        y = i.useRef(null),
        [O, A] = i.useState(null),
        v = i.useRef(a),
        S = i.useRef(!1);
    i.useEffect(() => {
        v.current !== a && ((S.current = !0), (v.current = a));
    }, [a]);
    let I = i.useCallback(
            (e) => {
                null != e.target && S.current && ((S.current = !1), null == g || g(a));
            },
            [a, g],
        ),
        T = i.useMemo(() => (0, o.debounce)(I, 50), [I]),
        C = (0, p.w)(T, [], {
            enabled: null != g,
        }),
        N = a && null != O;
    return (
        i.useLayoutEffect(() => {
            null != y.current && null == O && A(y.current.clientHeight);
        }, [O]),
        (0, r.jsxs)(l.EN, {
            ref: C,
            isExpanded: a,
            onExpandedChange: m,
            children: [
                (0, r.jsx)(_.U, {
                    ref: y,
                    style:
                        null != O
                            ? {
                                  minHeight: O,
                              }
                            : void 0,
                    title: t,
                    description: N ? void 0 : n,
                    secondaryTrailingElement: (0, r.jsx)(f.vN3, {
                        children: (0, r.jsx)(c.$, {
                            slot: "trigger",
                            className: h.bW,
                            children: (0, r.jsx)(u.ChevronLargeUpIcon, {
                                className: s()(h.Kk, {
                                    [h.kX]: !a,
                                }),
                                color: d.A.colors.ICON_LINK,
                            }),
                        }),
                    }),
                    onClick: () => m(!a),
                    headingColor: "text-link",
                }),
                (0, r.jsx)(l.kS, {
                    className: s()(h.nd, {
                        [h.t5]: !b,
                    }),
                    children: (0, r.jsx)(f.BJc, {
                        gap: 16,
                        padding: {
                            top: 16,
                        },
                        children: E,
                    }),
                }),
            ],
        })
    );
}
