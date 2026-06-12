n.d(t, { o: () => E });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(702841),
    u = n(661531),
    o = n(990078),
    c = n(150934),
    d = n(834730),
    m = n(885574),
    f = n(289873),
    p = n(939249),
    g = n(753390),
    b = n(176095),
    v = n(580630),
    A = n(776409),
    x = n(375708),
    h = n(677665);
let y = (e) => e.stopPropagation(),
    E = (e) => {
        let {
                giftCardWallet: t,
                checked: n,
                onChange: l,
                className: E,
                disabled: T = !1,
                disabledTooltip: _,
                locked: I = !1,
                showDisabledInfoIcon: k = !0,
            } = e,
            P = (0, s.bG)([b.A], () => b.A.getBalance(t.id), [t.id]),
            L = (0, s.bG)([b.A], () => b.A.getIsFetching(t.id), [t.id]);
        r.useEffect(() => {
            (0, g.YP)(t.id);
        }, [t.id]);
        let N = null == P && !L,
            S = r.useMemo(() => {
                if (null == P) return null;
                let e = (0, v.$g)(P.amount, P.currency);
                return x.intl.format(A.default["9Nb9Bz"], { amount: e });
            }, [P]);
        r.useEffect(() => {
            !I && N && n && l(!1);
        }, [I, N, n, l]);
        let j = T || L || (!I && N),
            C = j || I,
            R = r.useCallback(() => {
                C || l(!n);
            }, [l, n, C]);
        if (N && !I) return null;
        let M = j && null != _ && k,
            D = C && null != _,
            w = i()(h.k, E),
            G = (0, a.jsx)(c.S, { checked: n && (I || !N), onChange: R, disabled: C, label: "" }),
            O = (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(d.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: x.intl.string(A.default["febr+T"]),
                    }),
                    !L &&
                        null != S &&
                        (0, a.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            style: { marginTop: 4 },
                            children: S,
                        }),
                ],
            }),
            B = C
                ? (0, a.jsxs)("div", {
                      className: w,
                      role: "checkbox",
                      "aria-checked": n,
                      "aria-disabled": j || void 0,
                      children: [
                          (0, a.jsx)("div", { children: G }),
                          O,
                          M && (0, a.jsx)(m.m, { className: h.G, size: "xs", color: u.A.colors.TEXT_MUTED }),
                          L && (0, a.jsx)(f.y, { type: f.y.Type.PULSING_ELLIPSIS }),
                      ],
                  })
                : (0, a.jsxs)(p.D, {
                      className: w,
                      onClick: R,
                      role: "checkbox",
                      "aria-checked": n,
                      tabIndex: 0,
                      children: [(0, a.jsx)(p.D, { onClick: y, children: G }), O],
                  });
        return D ? (0, a.jsx)(o.m, { text: _, asContainer: !0, position: "top", align: "center", children: B }) : B;
    };
