n.d(t, { o: () => T });
var r = n(477900),
    i = n(582128),
    a = n(702841),
    l = n(661531),
    s = n(289873),
    u = n(150934),
    o = n(834730),
    c = n(885574),
    d = n(939249),
    m = n(866665),
    f = n(277984),
    p = n(176095),
    v = n(580630),
    g = n(281044),
    x = n(493364),
    b = n(105292),
    I = n(7822);
function h(e) {
    return e.stopPropagation();
}
function T(e) {
    let {
            giftCardWallet: t,
            checked: n,
            onChange: T,
            disabled: y = !1,
            loading: P = !1,
            disabledTooltip: E,
            locked: A = !1,
            showDisabledInfoIcon: j = !0,
        } = e,
        N = (0, a.bG)([p.A], () => p.A.getBalance(t.id), [t.id]),
        S = (0, a.bG)([p.A], () => p.A.getIsFetching(t.id), [t.id]),
        L = (0, a.bG)([p.A], () => p.A.hasSettled(t.id), [t.id]),
        C = (0, g.t4)((e) => e.getWalletLegBalance());
    i.useEffect(() => {
        (0, f.YP)(t.id);
    }, [t.id]);
    let w = L && null == N && !S,
        R = i.useMemo(() => {
            if (null == N) return null;
            let e = (0, v.$g)(C ?? N.amount, N.currency);
            return b.intl.format(x.default["9Nb9Bz"], { amount: e });
        }, [N, C]);
    i.useEffect(() => {
        !A && w && n && T(!1);
    }, [A, w, n, T]);
    let _ = y || P || S || (!A && w),
        M = _ || A,
        D = i.useCallback(() => {
            M || T(!n);
        }, [T, n, M]);
    if (w && !A) return null;
    let k = _ && null != E && j,
        U = M && null != E,
        O = P
            ? (0, r.jsx)("div", {
                  className: I.tv,
                  children: (0, r.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE_SIMPLE, className: I.u1 }),
              })
            : (0, r.jsx)(u.S, { checked: n && (A || !w), onChange: D, disabled: M, label: "" }),
        W = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(o.E, {
                    variant: "body-md/normal",
                    color: "text-strong",
                    children: b.intl.string(x.default["febr+T"]),
                }),
                !S &&
                    null != R &&
                    (0, r.jsx)(o.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: R,
                    }),
            ],
        }),
        G = M
            ? (0, r.jsxs)("div", {
                  className: I.kL,
                  role: "checkbox",
                  "aria-checked": !P && n,
                  "aria-busy": P || void 0,
                  "aria-disabled": _ || void 0,
                  children: [
                      (0, r.jsx)("div", { children: O }),
                      W,
                      k &&
                          (0, r.jsx)(c.CircleInformationIcon, {
                              className: I.G,
                              size: "xs",
                              color: l.A.colors.TEXT_MUTED,
                          }),
                      S && (0, r.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, r.jsxs)(d.D, {
                  className: I.kL,
                  onClick: D,
                  role: "checkbox",
                  "aria-checked": n,
                  tabIndex: 0,
                  children: [(0, r.jsx)(d.D, { onClick: h, children: O }), W],
              });
    return U
        ? (0, r.jsx)(m.m, {
              text: E,
              asContainer: !0,
              tag: "div",
              position: "top",
              align: "center",
              spacing: 6,
              children: G,
          })
        : G;
}
