t.d(s, { o: () => N });
var n = t(477900),
    r = t(582128),
    a = t(503698),
    i = t.n(a),
    l = t(702841),
    c = t(661531),
    u = t(289873),
    o = t(150934),
    d = t(834730),
    m = t(885574),
    p = t(939249),
    x = t(866665),
    C = t(277984),
    L = t(176095),
    f = t(580630),
    h = t(986485),
    g = t(375708),
    E = t(7822);
function v(e) {
    return e.stopPropagation();
}
function N(e) {
    let {
            giftCardWallet: s,
            checked: t,
            onChange: a,
            className: N,
            disabled: A = !1,
            loading: I = !1,
            disabledTooltip: j,
            locked: T = !1,
            showDisabledInfoIcon: _ = !0,
        } = e,
        S = (0, l.bG)([L.A], () => L.A.getBalance(s.id), [s.id]),
        y = (0, l.bG)([L.A], () => L.A.getIsFetching(s.id), [s.id]);
    r.useEffect(() => {
        (0, C.YP)(s.id);
    }, [s.id]);
    let P = null == S && !y,
        b = r.useMemo(() => {
            if (null == S) return null;
            let e = (0, f.$g)(S.amount, S.currency);
            return g.intl.format(h.default["9Nb9Bz"], { amount: e });
        }, [S]);
    r.useEffect(() => {
        !T && P && t && a(!1);
    }, [T, P, t, a]);
    let M = A || I || y || (!T && P),
        R = M || T,
        U = r.useCallback(() => {
            R || a(!t);
        }, [a, t, R]);
    if (P && !T) return null;
    let w = M && null != j && _,
        O = R && null != j,
        D = i()(E.kL, N),
        k = I
            ? (0, n.jsx)("div", {
                  className: E.tv,
                  children: (0, n.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE_SIMPLE, className: E.u1 }),
              })
            : (0, n.jsx)(o.S, { checked: t && (T || !P), onChange: U, disabled: R, label: "" }),
        B = (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(d.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: g.intl.string(h.default["febr+T"]),
                }),
                !y &&
                    null != b &&
                    (0, n.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: b,
                    }),
            ],
        }),
        F = R
            ? (0, n.jsxs)("div", {
                  className: D,
                  role: "checkbox",
                  "aria-checked": !I && t,
                  "aria-busy": I || void 0,
                  "aria-disabled": M || void 0,
                  children: [
                      (0, n.jsx)("div", { children: k }),
                      B,
                      w &&
                          (0, n.jsx)(m.CircleInformationIcon, {
                              className: E.G,
                              size: "xs",
                              color: c.A.colors.TEXT_MUTED,
                          }),
                      y && (0, n.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, n.jsxs)(p.D, {
                  className: D,
                  onClick: U,
                  role: "checkbox",
                  "aria-checked": t,
                  tabIndex: 0,
                  children: [(0, n.jsx)(p.D, { onClick: v, children: k }), B],
              });
    return O ? (0, n.jsx)(x.m, { text: j, asContainer: !0, position: "top", align: "center", children: F }) : F;
}
