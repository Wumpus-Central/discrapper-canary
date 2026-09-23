s.d(t, { o: () => A });
var n = s(477900),
    r = s(582128),
    a = s(503698),
    i = s.n(a),
    l = s(702841),
    c = s(661531),
    u = s(289873),
    o = s(150934),
    d = s(834730),
    m = s(885574),
    p = s(939249),
    x = s(866665),
    f = s(277984),
    C = s(176095),
    h = s(580630),
    L = s(986485),
    v = s(375708),
    g = s(7822);
function E(e) {
    return e.stopPropagation();
}
function A(e) {
    let {
            giftCardWallet: t,
            checked: s,
            onChange: a,
            className: A,
            disabled: N = !1,
            loading: T = !1,
            disabledTooltip: I,
            locked: j = !1,
            showDisabledInfoIcon: S = !0,
        } = e,
        _ = (0, l.bG)([C.A], () => C.A.getBalance(t.id), [t.id]),
        P = (0, l.bG)([C.A], () => C.A.getIsFetching(t.id), [t.id]);
    r.useEffect(() => {
        (0, f.YP)(t.id);
    }, [t.id]);
    let b = null == _ && !P,
        y = r.useMemo(() => {
            if (null == _) return null;
            let e = (0, h.$g)(_.amount, _.currency);
            return v.intl.format(L.default["9Nb9Bz"], { amount: e });
        }, [_]);
    r.useEffect(() => {
        !j && b && s && a(!1);
    }, [j, b, s, a]);
    let R = N || T || P || (!j && b),
        M = R || j,
        U = r.useCallback(() => {
            M || a(!s);
        }, [a, s, M]);
    if (b && !j) return null;
    let O = R && null != I && S,
        D = M && null != I,
        w = i()(g.kL, A),
        G = T
            ? (0, n.jsx)("div", {
                  className: g.tv,
                  children: (0, n.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE_SIMPLE, className: g.u1 }),
              })
            : (0, n.jsx)(o.S, { checked: s && (j || !b), onChange: U, disabled: M, label: "" }),
        k = (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(d.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: v.intl.string(L.default["febr+T"]),
                }),
                !P &&
                    null != y &&
                    (0, n.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: y,
                    }),
            ],
        }),
        B = M
            ? (0, n.jsxs)("div", {
                  className: w,
                  role: "checkbox",
                  "aria-checked": !T && s,
                  "aria-busy": T || void 0,
                  "aria-disabled": R || void 0,
                  children: [
                      (0, n.jsx)("div", { children: G }),
                      k,
                      O &&
                          (0, n.jsx)(m.CircleInformationIcon, {
                              className: g.G,
                              size: "xs",
                              color: c.A.colors.TEXT_MUTED,
                          }),
                      P && (0, n.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, n.jsxs)(p.D, {
                  className: w,
                  onClick: U,
                  role: "checkbox",
                  "aria-checked": s,
                  tabIndex: 0,
                  children: [(0, n.jsx)(p.D, { onClick: E, children: G }), k],
              });
    return D ? (0, n.jsx)(x.m, { text: I, asContainer: !0, position: "top", align: "center", children: B }) : B;
}
