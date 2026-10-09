n.d(t, { o: () => T });
var r = n(477900),
    i = n(582128),
    a = n(702841),
    l = n(661531),
    s = n(289873),
    u = n(150934),
    c = n(834730),
    o = n(885574),
    d = n(939249),
    m = n(866665),
    p = n(277984),
    f = n(176095),
    v = n(580630),
    g = n(986485),
    I = n(660183),
    x = n(7822);
function E(e) {
    return e.stopPropagation();
}
function T(e) {
    let {
            giftCardWallet: t,
            checked: n,
            onChange: T,
            disabled: P = !1,
            loading: b = !1,
            disabledTooltip: h,
            locked: A = !1,
            showDisabledInfoIcon: y = !0,
        } = e,
        R = (0, a.bG)([f.A], () => f.A.getBalance(t.id), [t.id]),
        N = (0, a.bG)([f.A], () => f.A.getIsFetching(t.id), [t.id]),
        _ = (0, a.bG)([f.A], () => f.A.hasSettled(t.id), [t.id]);
    i.useEffect(() => {
        (0, p.YP)(t.id);
    }, [t.id]);
    let L = _ && null == R && !N,
        S = i.useMemo(() => {
            if (null == R) return null;
            let e = (0, v.$g)(R.amount, R.currency);
            return I.intl.format(g.default["9Nb9Bz"], { amount: e });
        }, [R]);
    i.useEffect(() => {
        !A && L && n && T(!1);
    }, [A, L, n, T]);
    let C = P || b || N || (!A && L),
        M = C || A,
        j = i.useCallback(() => {
            M || T(!n);
        }, [T, n, M]);
    if (L && !A) return null;
    let D = C && null != h && y,
        w = M && null != h,
        U = b
            ? (0, r.jsx)("div", {
                  className: x.tv,
                  children: (0, r.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE_SIMPLE, className: x.u1 }),
              })
            : (0, r.jsx)(u.S, { checked: n && (A || !L), onChange: j, disabled: M, label: "" }),
        k = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: I.intl.string(g.default["febr+T"]),
                }),
                !N &&
                    null != S &&
                    (0, r.jsx)(c.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: S,
                    }),
            ],
        }),
        O = M
            ? (0, r.jsxs)("div", {
                  className: x.kL,
                  role: "checkbox",
                  "aria-checked": !b && n,
                  "aria-busy": b || void 0,
                  "aria-disabled": C || void 0,
                  children: [
                      (0, r.jsx)("div", { children: U }),
                      k,
                      D &&
                          (0, r.jsx)(o.CircleInformationIcon, {
                              className: x.G,
                              size: "xs",
                              color: l.A.colors.TEXT_MUTED,
                          }),
                      N && (0, r.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, r.jsxs)(d.D, {
                  className: x.kL,
                  onClick: j,
                  role: "checkbox",
                  "aria-checked": n,
                  tabIndex: 0,
                  children: [(0, r.jsx)(d.D, { onClick: E, children: U }), k],
              });
    return w
        ? (0, r.jsx)(m.m, {
              text: h,
              asContainer: !0,
              tag: "div",
              position: "top",
              align: "center",
              spacing: 6,
              children: O,
          })
        : O;
}
