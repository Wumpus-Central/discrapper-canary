var r = n(477900),
    i = n(582128),
    a = n(164636),
    l = n(646514),
    s = n(289873),
    u = n(150934),
    o = n(834730),
    c = n(885574),
    d = n(939249),
    m = n(866665),
    p = n(781300),
    f = n(176095),
    v = n(580630),
    g = n(516106),
    x = n(140624),
    b = n(792996),
    h = n(7822);
function y(e) {
    return e.stopPropagation();
}
n.d(
    t,
    {},
    {
        o: function (e) {
            let {
                    giftCardWallet: t,
                    checked: n,
                    onChange: T,
                    disabled: j = !1,
                    loading: E = !1,
                    disabledTooltip: A,
                    locked: I = !1,
                    showDisabledInfoIcon: P = !0,
                } = e,
                L = (0, a.bG)([f.A], () => f.A.getBalance(t.id), [t.id]),
                C = (0, a.bG)([f.A], () => f.A.getIsFetching(t.id), [t.id]),
                N = (0, a.bG)([f.A], () => f.A.hasSettled(t.id), [t.id]),
                S = (0, g.t4)((e) => e.getWalletLegBalance());
            i.useEffect(() => {
                (0, p.YP)(t.id);
            }, [t.id]);
            let D = N && null == L && !C,
                k = i.useMemo(() => {
                    if (null == L) return null;
                    let e = (0, v.$g)(S ?? L.amount, L.currency);
                    return b.intl.format(x.default["9Nb9Bz"], { amount: e });
                }, [L, S]);
            i.useEffect(() => {
                !I && D && n && T(!1);
            }, [I, D, n, T]);
            let w = j || E || C || (!I && D),
                R = w || I,
                M = i.useCallback(() => {
                    R || T(!n);
                }, [T, n, R]);
            if (D && !I) return null;
            let _ = w && null != A && P,
                O = R && null != A,
                G = E
                    ? (0, r.jsx)("div", {
                          className: h.tv,
                          children: (0, r.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE_SIMPLE, className: h.u1 }),
                      })
                    : (0, r.jsx)(u.S, { checked: n && (I || !D), onChange: M, disabled: R, label: "" }),
                W = (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(o.E, {
                            variant: "body-md/normal",
                            color: "text-strong",
                            children: b.intl.string(x.default["febr+T"]),
                        }),
                        !C &&
                            null != k &&
                            (0, r.jsx)(o.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                style: { marginTop: 4 },
                                children: k,
                            }),
                    ],
                }),
                U = R
                    ? (0, r.jsxs)("div", {
                          className: h.kL,
                          role: "checkbox",
                          "aria-checked": !E && n,
                          "aria-busy": E || void 0,
                          "aria-disabled": w || void 0,
                          children: [
                              (0, r.jsx)("div", { children: G }),
                              W,
                              _ &&
                                  (0, r.jsx)(c.CircleInformationIcon, {
                                      className: h.G,
                                      size: "xs",
                                      color: l.A.colors.TEXT_MUTED,
                                  }),
                              C && (0, r.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }),
                          ],
                      })
                    : (0, r.jsxs)(d.D, {
                          className: h.kL,
                          onClick: M,
                          role: "checkbox",
                          "aria-checked": n,
                          tabIndex: 0,
                          children: [(0, r.jsx)(d.D, { onClick: y, children: G }), W],
                      });
            return O
                ? (0, r.jsx)(m.m, {
                      text: A,
                      asContainer: !0,
                      tag: "div",
                      position: "top",
                      align: "center",
                      spacing: 6,
                      children: U,
                  })
                : U;
        },
    },
);
