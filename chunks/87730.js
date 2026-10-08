n.d(t, { o: () => b });
var r = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    s = n(702841),
    u = n(661531),
    c = n(289873),
    o = n(150934),
    d = n(834730),
    m = n(885574),
    p = n(939249),
    f = n(866665),
    v = n(277984),
    g = n(176095),
    I = n(580630),
    x = n(986485),
    E = n(660183),
    T = n(7822);
function P(e) {
    return e.stopPropagation();
}
function b(e) {
    let {
            giftCardWallet: t,
            checked: n,
            onChange: a,
            className: b,
            disabled: h = !1,
            loading: A = !1,
            disabledTooltip: y,
            locked: R = !1,
            showDisabledInfoIcon: N = !0,
        } = e,
        _ = (0, s.bG)([g.A], () => g.A.getBalance(t.id), [t.id]),
        L = (0, s.bG)([g.A], () => g.A.getIsFetching(t.id), [t.id]),
        S = (0, s.bG)([g.A], () => g.A.hasSettled(t.id), [t.id]);
    i.useEffect(() => {
        (0, v.YP)(t.id);
    }, [t.id]);
    let C = S && null == _ && !L,
        M = i.useMemo(() => {
            if (null == _) return null;
            let e = (0, I.$g)(_.amount, _.currency);
            return E.intl.format(x.default["9Nb9Bz"], { amount: e });
        }, [_]);
    i.useEffect(() => {
        !R && C && n && a(!1);
    }, [R, C, n, a]);
    let j = h || A || L || (!R && C),
        D = j || R,
        w = i.useCallback(() => {
            D || a(!n);
        }, [a, n, D]);
    if (C && !R) return null;
    let U = j && null != y && N,
        k = D && null != y,
        O = l()(T.kL, b),
        W = A
            ? (0, r.jsx)("div", {
                  className: T.tv,
                  children: (0, r.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE_SIMPLE, className: T.u1 }),
              })
            : (0, r.jsx)(o.S, { checked: n && (R || !C), onChange: w, disabled: D, label: "" }),
        G = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(d.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: E.intl.string(x.default["febr+T"]),
                }),
                !L &&
                    null != M &&
                    (0, r.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: M,
                    }),
            ],
        }),
        H = D
            ? (0, r.jsxs)("div", {
                  className: O,
                  role: "checkbox",
                  "aria-checked": !A && n,
                  "aria-busy": A || void 0,
                  "aria-disabled": j || void 0,
                  children: [
                      (0, r.jsx)("div", { children: W }),
                      G,
                      U &&
                          (0, r.jsx)(m.CircleInformationIcon, {
                              className: T.G,
                              size: "xs",
                              color: u.A.colors.TEXT_MUTED,
                          }),
                      L && (0, r.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, r.jsxs)(p.D, {
                  className: O,
                  onClick: w,
                  role: "checkbox",
                  "aria-checked": n,
                  tabIndex: 0,
                  children: [(0, r.jsx)(p.D, { onClick: P, children: W }), G],
              });
    return k ? (0, r.jsx)(f.m, { text: y, asContainer: !0, position: "top", align: "center", children: H }) : H;
}
