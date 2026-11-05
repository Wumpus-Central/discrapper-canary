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
                    disabled: I = !1,
                    loading: j = !1,
                    disabledTooltip: E,
                    locked: A = !1,
                    showDisabledInfoIcon: P = !0,
                } = e,
                L = (0, a.bG)([f.A], () => f.A.getBalance(t.id), [t.id]),
                C = (0, a.bG)([f.A], () => f.A.getIsFetching(t.id), [t.id]),
                N = (0, a.bG)([f.A], () => f.A.hasSettled(t.id), [t.id]),
                S = (0, g.t4)((e) => e.getWalletLegBalance()),
                D = (0, g.t4)((e) => e.invoicePreviewRefetchKey);
            i.useEffect(() => {
                (0, p.YP)(t.id);
            }, [t.id, D]);
            let k = N && null == L && !C,
                w = i.useMemo(() => {
                    if (null == L) return null;
                    let e = (0, v.$g)(S ?? L.amount, L.currency);
                    return b.intl.format(x.default["9Nb9Bz"], { amount: e });
                }, [L, S]);
            i.useEffect(() => {
                !A && k && n && T(!1);
            }, [A, k, n, T]);
            let R = I || j || C || (!A && k),
                M = R || A,
                _ = i.useCallback(() => {
                    M || T(!n);
                }, [T, n, M]);
            if (k && !A) return null;
            let O = R && null != E && P,
                G = M && null != E,
                W = j
                    ? (0, r.jsx)("div", {
                          className: h.tv,
                          children: (0, r.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE_SIMPLE, className: h.u1 }),
                      })
                    : (0, r.jsx)(u.S, { checked: n && (A || !k), onChange: _, disabled: M, label: "" }),
                U = (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(o.E, {
                            variant: "body-md/normal",
                            color: "text-strong",
                            children: b.intl.string(x.default["febr+T"]),
                        }),
                        !C &&
                            null != w &&
                            (0, r.jsx)(o.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                style: { marginTop: 4 },
                                children: w,
                            }),
                    ],
                }),
                Y = M
                    ? (0, r.jsxs)("div", {
                          className: h.kL,
                          role: "checkbox",
                          "aria-checked": !j && n,
                          "aria-busy": j || void 0,
                          "aria-disabled": R || void 0,
                          children: [
                              (0, r.jsx)("div", { children: W }),
                              U,
                              O &&
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
                          onClick: _,
                          role: "checkbox",
                          "aria-checked": n,
                          tabIndex: 0,
                          children: [(0, r.jsx)(d.D, { onClick: y, children: W }), U],
                      });
            return G
                ? (0, r.jsx)(m.m, {
                      text: E,
                      asContainer: !0,
                      tag: "div",
                      position: "top",
                      align: "center",
                      spacing: 6,
                      children: Y,
                  })
                : Y;
        },
    },
);
