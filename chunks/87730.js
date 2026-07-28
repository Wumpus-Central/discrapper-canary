n.d(t, { o: () => y });
var s = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    l = n(702841),
    u = n(661531),
    c = n(289873),
    o = n(150934),
    d = n(834730),
    m = n(885574),
    f = n(939249),
    p = n(866665),
    x = n(277984),
    g = n(176095),
    h = n(580630),
    v = n(776409),
    A = n(375708),
    C = n(372905);
function L(e) {
    return e.stopPropagation();
}
function y(e) {
    let {
            giftCardWallet: t,
            checked: n,
            onChange: i,
            className: y,
            disabled: I = !1,
            loading: T = !1,
            disabledTooltip: b,
            locked: E = !1,
            showDisabledInfoIcon: j = !0,
        } = e,
        N = (0, l.bG)([g.A], () => g.A.getBalance(t.id), [t.id]),
        S = (0, l.bG)([g.A], () => g.A.getIsFetching(t.id), [t.id]);
    r.useEffect(() => {
        (0, x.YP)(t.id);
    }, [t.id]);
    let _ = null == N && !S,
        P = r.useMemo(() => {
            if (null == N) return null;
            let e = (0, h.$g)(N.amount, N.currency);
            return A.intl.format(v.default["9Nb9Bz"], { amount: e });
        }, [N]);
    r.useEffect(() => {
        !E && _ && n && i(!1);
    }, [E, _, n, i]);
    let M = I || T || S || (!E && _),
        R = M || E,
        w = r.useCallback(() => {
            R || i(!n);
        }, [i, n, R]);
    if (_ && !E) return null;
    let U = M && null != b && j,
        D = R && null != b,
        k = a()(C.kL, y),
        O = T
            ? (0, s.jsx)("div", {
                  className: C.tv,
                  children: (0, s.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE_SIMPLE, className: C.u1 }),
              })
            : (0, s.jsx)(o.S, { checked: n && (E || !_), onChange: w, disabled: R, label: "" }),
        F = (0, s.jsxs)("div", {
            children: [
                (0, s.jsx)(d.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: A.intl.string(v.default["febr+T"]),
                }),
                !S &&
                    null != P &&
                    (0, s.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: P,
                    }),
            ],
        }),
        W = R
            ? (0, s.jsxs)("div", {
                  className: k,
                  role: "checkbox",
                  "aria-checked": !T && n,
                  "aria-busy": T || void 0,
                  "aria-disabled": M || void 0,
                  children: [
                      (0, s.jsx)("div", { children: O }),
                      F,
                      U && (0, s.jsx)(m.m, { className: C.G, size: "xs", color: u.A.colors.TEXT_MUTED }),
                      S && (0, s.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, s.jsxs)(f.D, {
                  className: k,
                  onClick: w,
                  role: "checkbox",
                  "aria-checked": n,
                  tabIndex: 0,
                  children: [(0, s.jsx)(f.D, { onClick: L, children: O }), F],
              });
    return D ? (0, s.jsx)(p.m, { text: b, asContainer: !0, position: "top", align: "center", children: W }) : W;
}
