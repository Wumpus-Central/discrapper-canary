n.d(t, { o: () => T });
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
    p = n(939249),
    f = n(866665),
    x = n(277984),
    v = n(176095),
    g = n(580630),
    C = n(925332),
    h = n(375708),
    L = n(7822);
function I(e) {
    return e.stopPropagation();
}
function T(e) {
    let {
            giftCardWallet: t,
            checked: n,
            onChange: i,
            className: T,
            disabled: E = !1,
            loading: j = !1,
            disabledTooltip: A,
            locked: N = !1,
            showDisabledInfoIcon: b = !0,
        } = e,
        S = (0, l.bG)([v.A], () => v.A.getBalance(t.id), [t.id]),
        y = (0, l.bG)([v.A], () => v.A.getIsFetching(t.id), [t.id]);
    r.useEffect(() => {
        (0, x.YP)(t.id);
    }, [t.id]);
    let P = null == S && !y,
        _ = r.useMemo(() => {
            if (null == S) return null;
            let e = (0, g.$g)(S.amount, S.currency);
            return h.intl.format(C.default["9Nb9Bz"], { amount: e });
        }, [S]);
    r.useEffect(() => {
        !N && P && n && i(!1);
    }, [N, P, n, i]);
    let M = E || j || y || (!N && P),
        R = M || N,
        D = r.useCallback(() => {
            R || i(!n);
        }, [i, n, R]);
    if (P && !N) return null;
    let U = M && null != A && b,
        w = R && null != A,
        O = a()(L.kL, T),
        k = j
            ? (0, s.jsx)("div", {
                  className: L.tv,
                  children: (0, s.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE_SIMPLE, className: L.u1 }),
              })
            : (0, s.jsx)(o.S, { checked: n && (N || !P), onChange: D, disabled: R, label: "" }),
        W = (0, s.jsxs)("div", {
            children: [
                (0, s.jsx)(d.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: h.intl.string(C.default["febr+T"]),
                }),
                !y &&
                    null != _ &&
                    (0, s.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: _,
                    }),
            ],
        }),
        F = R
            ? (0, s.jsxs)("div", {
                  className: O,
                  role: "checkbox",
                  "aria-checked": !j && n,
                  "aria-busy": j || void 0,
                  "aria-disabled": M || void 0,
                  children: [
                      (0, s.jsx)("div", { children: k }),
                      W,
                      U &&
                          (0, s.jsx)(m.CircleInformationIcon, {
                              className: L.G,
                              size: "xs",
                              color: u.A.colors.TEXT_MUTED,
                          }),
                      y && (0, s.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, s.jsxs)(p.D, {
                  className: O,
                  onClick: D,
                  role: "checkbox",
                  "aria-checked": n,
                  tabIndex: 0,
                  children: [(0, s.jsx)(p.D, { onClick: I, children: k }), W],
              });
    return w ? (0, s.jsx)(f.m, { text: A, asContainer: !0, position: "top", align: "center", children: F }) : F;
}
