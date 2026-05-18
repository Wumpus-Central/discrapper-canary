n.d(t, { o: () => I });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(702841),
    u = n(661531),
    o = n(990078),
    c = n(150934),
    d = n(834730),
    m = n(885574),
    p = n(289873),
    f = n(939249),
    g = n(753390),
    v = n(176095),
    x = n(580630),
    b = n(776409),
    h = n(375708),
    A = n(677665);
let y = (e) => e.stopPropagation(),
    I = (e) => {
        let {
                giftCardWallet: t,
                checked: n,
                onChange: r,
                className: I,
                disabled: _ = !1,
                disabledTooltip: j,
                locked: T = !1,
                showDisabledInfoIcon: P = !0,
            } = e,
            E = (0, s.bG)([v.A], () => v.A.getBalance(t.id), [t.id]),
            N = (0, s.bG)([v.A], () => v.A.getIsFetching(t.id), [t.id]);
        a.useEffect(() => {
            (0, g.YP)(t.id);
        }, [t.id]);
        let S = null == E && !N,
            R = a.useMemo(() => {
                if (null == E) return null;
                let e = (0, x.$g)(E.amount, E.currency);
                return h.intl.format(b.default["9Nb9Bz"], { amount: e });
            }, [E]);
        a.useEffect(() => {
            !T && S && n && r(!1);
        }, [T, S, n, r]);
        let M = _ || N || (!T && S),
            L = M || T,
            C = a.useCallback(() => {
                L || r(!n);
            }, [r, n, L]);
        if (S && !T) return null;
        let k = M && null != j && P,
            D = L && null != j,
            U = i()(A.k, I),
            O = (0, l.jsx)(c.S, { checked: n && (T || !S), onChange: C, disabled: L, label: "" }),
            w = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(d.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: h.intl.string(b.default["febr+T"]),
                    }),
                    !N &&
                        null != R &&
                        (0, l.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            style: { marginTop: 4 },
                            children: R,
                        }),
                ],
            }),
            G = L
                ? (0, l.jsxs)("div", {
                      className: U,
                      role: "checkbox",
                      "aria-checked": n,
                      "aria-disabled": M || void 0,
                      children: [
                          (0, l.jsx)("div", { children: O }),
                          w,
                          k && (0, l.jsx)(m.m, { className: A.G, size: "xs", color: u.A.colors.TEXT_MUTED }),
                          N && (0, l.jsx)(p.y, { type: p.y.Type.PULSING_ELLIPSIS }),
                      ],
                  })
                : (0, l.jsxs)(f.D, {
                      className: U,
                      onClick: C,
                      role: "checkbox",
                      "aria-checked": n,
                      tabIndex: 0,
                      children: [(0, l.jsx)(f.D, { onClick: y, children: O }), w],
                  });
        return D ? (0, l.jsx)(o.m, { text: j, asContainer: !0, position: "top", align: "center", children: G }) : G;
    };
