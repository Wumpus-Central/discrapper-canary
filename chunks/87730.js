n.d(t, { o: () => I });
var r = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(702841),
    u = n(661531),
    o = n(990078),
    c = n(939249),
    d = n(150934),
    m = n(885574),
    p = n(289873),
    v = n(753390),
    g = n(176095),
    x = n(580630),
    f = n(327105),
    _ = n(375708),
    b = n(677665);
let h = (e) => e.stopPropagation(),
    I = (e) => {
        let { giftCardWallet: t, checked: n, onChange: l, className: I, disabled: y = !1, disabledTooltip: j } = e,
            A = (0, s.bG)([g.A], () => g.A.getBalance(t.id), [t.id]),
            E = (0, s.bG)([g.A], () => g.A.getIsFetching(t.id), [t.id]);
        a.useEffect(() => {
            (0, v.YP)(t.id);
        }, [t.id]);
        let P = null == A && !E,
            T = a.useMemo(() => {
                if (null == A) return null;
                let e = (0, x.$g)(A.amount, A.currency);
                return _.intl.format(f.default["9Nb9Bz"], { amount: e });
            }, [A]);
        a.useEffect(() => {
            P && n && l(!1);
        }, [P, n, l]);
        let N = y || E || P,
            R = a.useCallback(() => {
                N || l(!n);
            }, [l, n, N]);
        if (P) return null;
        let M = N && null != j,
            C = (0, r.jsxs)(c.D, {
                className: i()(b.k, I),
                onClick: R,
                role: "checkbox",
                "aria-checked": n,
                "aria-disabled": N,
                tabIndex: 0,
                children: [
                    (0, r.jsx)(c.D, {
                        onClick: h,
                        children: (0, r.jsx)(d.S, {
                            checked: n && !P,
                            onChange: R,
                            disabled: N,
                            label: _.intl.string(f.default["febr+T"]),
                            description: E ? void 0 : (T ?? void 0),
                        }),
                    }),
                    M && (0, r.jsx)(m.m, { size: "xs", color: u.A.colors.TEXT_MUTED, className: b.G }),
                    E && (0, r.jsx)(p.y, { type: p.y.Type.PULSING_ELLIPSIS }),
                ],
            });
        return M ? (0, r.jsx)(o.m, { text: j, asContainer: !0, position: "top", align: "center", children: C }) : C;
    };
