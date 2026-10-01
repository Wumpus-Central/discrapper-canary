s.d(t, { o: () => P });
var r = s(477900),
    n = s(582128),
    a = s(503698),
    l = s.n(a),
    i = s(702841),
    c = s(661531),
    u = s(289873),
    o = s(150934),
    d = s(834730),
    p = s(885574),
    v = s(939249),
    g = s(866665),
    x = s(277984),
    m = s(176095),
    I = s(580630),
    E = s(986485),
    f = s(375708),
    A = s(7822);
function h(e) {
    return e.stopPropagation();
}
function P(e) {
    let {
            giftCardWallet: t,
            checked: s,
            onChange: a,
            className: P,
            disabled: _ = !1,
            loading: N = !1,
            disabledTooltip: b,
            locked: R = !1,
            showDisabledInfoIcon: L = !0,
        } = e,
        T = (0, i.bG)([m.A], () => m.A.getBalance(t.id), [t.id]),
        M = (0, i.bG)([m.A], () => m.A.getIsFetching(t.id), [t.id]);
    n.useEffect(() => {
        (0, x.YP)(t.id);
    }, [t.id]);
    let S = null == T && !M,
        C = n.useMemo(() => {
            if (null == T) return null;
            let e = (0, I.$g)(T.amount, T.currency);
            return f.intl.format(E.default["9Nb9Bz"], { amount: e });
        }, [T]);
    n.useEffect(() => {
        !R && S && s && a(!1);
    }, [R, S, s, a]);
    let j = _ || N || M || (!R && S),
        y = j || R,
        U = n.useCallback(() => {
            y || a(!s);
        }, [a, s, y]);
    if (S && !R) return null;
    let k = j && null != b && L,
        O = y && null != b,
        w = l()(A.kL, P),
        G = N
            ? (0, r.jsx)("div", {
                  className: A.tv,
                  children: (0, r.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE_SIMPLE, className: A.u1 }),
              })
            : (0, r.jsx)(o.S, { checked: s && (R || !S), onChange: U, disabled: y, label: "" }),
        D = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(d.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: f.intl.string(E.default["febr+T"]),
                }),
                !M &&
                    null != C &&
                    (0, r.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: C,
                    }),
            ],
        }),
        B = y
            ? (0, r.jsxs)("div", {
                  className: w,
                  role: "checkbox",
                  "aria-checked": !N && s,
                  "aria-busy": N || void 0,
                  "aria-disabled": j || void 0,
                  children: [
                      (0, r.jsx)("div", { children: G }),
                      D,
                      k &&
                          (0, r.jsx)(p.CircleInformationIcon, {
                              className: A.G,
                              size: "xs",
                              color: c.A.colors.TEXT_MUTED,
                          }),
                      M && (0, r.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, r.jsxs)(v.D, {
                  className: w,
                  onClick: U,
                  role: "checkbox",
                  "aria-checked": s,
                  tabIndex: 0,
                  children: [(0, r.jsx)(v.D, { onClick: h, children: G }), D],
              });
    return O ? (0, r.jsx)(g.m, { text: b, asContainer: !0, position: "top", align: "center", children: B }) : B;
}
