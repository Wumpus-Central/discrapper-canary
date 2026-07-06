n.d(t, { o: () => I });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(702841),
    u = n(661531),
    o = n(990078),
    c = n(289873),
    d = n(150934),
    m = n(834730),
    f = n(885574),
    p = n(939249),
    b = n(277984),
    A = n(176095),
    g = n(580630),
    v = n(776409),
    _ = n(375708),
    y = n(677665);
function h(e) {
    return e.stopPropagation();
}
function I(e) {
    let {
            giftCardWallet: t,
            checked: n,
            onChange: l,
            className: I,
            disabled: x = !1,
            loading: E = !1,
            disabledTooltip: T,
            locked: P = !1,
            showDisabledInfoIcon: k = !0,
        } = e,
        S = (0, s.bG)([A.A], () => A.A.getBalance(t.id), [t.id]),
        L = (0, s.bG)([A.A], () => A.A.getIsFetching(t.id), [t.id]);
    r.useEffect(() => {
        (0, b.YP)(t.id);
    }, [t.id]);
    let N = null == S && !L,
        C = r.useMemo(() => {
            if (null == S) return null;
            let e = (0, g.$g)(S.amount, S.currency);
            return _.intl.format(v.default["9Nb9Bz"], { amount: e });
        }, [S]);
    r.useEffect(() => {
        !P && N && n && l(!1);
    }, [P, N, n, l]);
    let R = x || E || L || (!P && N),
        j = R || P,
        D = r.useCallback(() => {
            j || l(!n);
        }, [l, n, j]);
    if (N && !P) return null;
    let M = R && null != T && k,
        G = j && null != T,
        w = i()(y.kL, I),
        O = E
            ? (0, a.jsx)("div", {
                  className: y.tv,
                  children: (0, a.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE_SIMPLE, className: y.u1 }),
              })
            : (0, a.jsx)(d.S, { checked: n && (P || !N), onChange: D, disabled: j, label: "" }),
        B = (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(m.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: _.intl.string(v.default["febr+T"]),
                }),
                !L &&
                    null != C &&
                    (0, a.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: C,
                    }),
            ],
        }),
        U = j
            ? (0, a.jsxs)("div", {
                  className: w,
                  role: "checkbox",
                  "aria-checked": !E && n,
                  "aria-busy": E || void 0,
                  "aria-disabled": R || void 0,
                  children: [
                      (0, a.jsx)("div", { children: O }),
                      B,
                      M && (0, a.jsx)(f.m, { className: y.G, size: "xs", color: u.A.colors.TEXT_MUTED }),
                      L && (0, a.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, a.jsxs)(p.D, {
                  className: w,
                  onClick: D,
                  role: "checkbox",
                  "aria-checked": n,
                  tabIndex: 0,
                  children: [(0, a.jsx)(p.D, { onClick: h, children: O }), B],
              });
    return G ? (0, a.jsx)(o.m, { text: T, asContainer: !0, position: "top", align: "center", children: U }) : U;
}
