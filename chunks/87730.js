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
    g = n(912195),
    x = n(986485),
    I = n(105292),
    b = n(7822);
function P(e) {
    return e.stopPropagation();
}
function T(e) {
    let {
            giftCardWallet: t,
            checked: n,
            onChange: T,
            disabled: h = !1,
            loading: E = !1,
            disabledTooltip: A,
            locked: y = !1,
            showDisabledInfoIcon: L = !0,
        } = e,
        S = (0, a.bG)([f.A], () => f.A.getBalance(t.id), [t.id]),
        N = (0, a.bG)([f.A], () => f.A.getIsFetching(t.id), [t.id]),
        C = (0, a.bG)([f.A], () => f.A.hasSettled(t.id), [t.id]),
        R = (0, g.t4)((e) => e.getWalletLegBalance());
    i.useEffect(() => {
        (0, p.YP)(t.id);
    }, [t.id]);
    let j = C && null == S && !N,
        _ = i.useMemo(() => {
            if (null == S) return null;
            let e = (0, v.$g)(R ?? S.amount, S.currency);
            return I.intl.format(x.default["9Nb9Bz"], { amount: e });
        }, [S, R]);
    i.useEffect(() => {
        !y && j && n && T(!1);
    }, [y, j, n, T]);
    let w = h || E || N || (!y && j),
        M = w || y,
        D = i.useCallback(() => {
            M || T(!n);
        }, [T, n, M]);
    if (j && !y) return null;
    let k = w && null != A && L,
        O = M && null != A,
        U = E
            ? (0, r.jsx)("div", {
                  className: b.tv,
                  children: (0, r.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE_SIMPLE, className: b.u1 }),
              })
            : (0, r.jsx)(u.S, { checked: n && (y || !j), onChange: D, disabled: M, label: "" }),
        W = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: I.intl.string(x.default["febr+T"]),
                }),
                !N &&
                    null != _ &&
                    (0, r.jsx)(c.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: _,
                    }),
            ],
        }),
        G = M
            ? (0, r.jsxs)("div", {
                  className: b.kL,
                  role: "checkbox",
                  "aria-checked": !E && n,
                  "aria-busy": E || void 0,
                  "aria-disabled": w || void 0,
                  children: [
                      (0, r.jsx)("div", { children: U }),
                      W,
                      k &&
                          (0, r.jsx)(o.CircleInformationIcon, {
                              className: b.G,
                              size: "xs",
                              color: l.A.colors.TEXT_MUTED,
                          }),
                      N && (0, r.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, r.jsxs)(d.D, {
                  className: b.kL,
                  onClick: D,
                  role: "checkbox",
                  "aria-checked": n,
                  tabIndex: 0,
                  children: [(0, r.jsx)(d.D, { onClick: P, children: U }), W],
              });
    return O
        ? (0, r.jsx)(m.m, {
              text: A,
              asContainer: !0,
              tag: "div",
              position: "top",
              align: "center",
              spacing: 6,
              children: G,
          })
        : G;
}
