n.d(t, { o: () => P });
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
    g = n(504560),
    I = n(986485),
    x = n(660183),
    E = n(7822);
function T(e) {
    return e.stopPropagation();
}
function P(e) {
    let {
            giftCardWallet: t,
            checked: n,
            onChange: P,
            disabled: b = !1,
            loading: h = !1,
            disabledTooltip: A,
            locked: y = !1,
            showDisabledInfoIcon: R = !0,
        } = e,
        N = (0, a.bG)([f.A], () => f.A.getBalance(t.id), [t.id]),
        _ = (0, a.bG)([f.A], () => f.A.getIsFetching(t.id), [t.id]),
        L = (0, a.bG)([f.A], () => f.A.hasSettled(t.id), [t.id]),
        S = (0, g.t4)((e) => e.getWalletLegBalance());
    i.useEffect(() => {
        (0, p.YP)(t.id);
    }, [t.id]);
    let C = L && null == N && !_,
        M = i.useMemo(() => {
            if (null == N) return null;
            let e = (0, v.$g)(S ?? N.amount, N.currency);
            return x.intl.format(I.default["9Nb9Bz"], { amount: e });
        }, [N, S]);
    i.useEffect(() => {
        !y && C && n && P(!1);
    }, [y, C, n, P]);
    let j = b || h || _ || (!y && C),
        D = j || y,
        w = i.useCallback(() => {
            D || P(!n);
        }, [P, n, D]);
    if (C && !y) return null;
    let U = j && null != A && R,
        k = D && null != A,
        O = h
            ? (0, r.jsx)("div", {
                  className: E.tv,
                  children: (0, r.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE_SIMPLE, className: E.u1 }),
              })
            : (0, r.jsx)(u.S, { checked: n && (y || !C), onChange: w, disabled: D, label: "" }),
        W = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: x.intl.string(I.default["febr+T"]),
                }),
                !_ &&
                    null != M &&
                    (0, r.jsx)(c.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: M,
                    }),
            ],
        }),
        G = D
            ? (0, r.jsxs)("div", {
                  className: E.kL,
                  role: "checkbox",
                  "aria-checked": !h && n,
                  "aria-busy": h || void 0,
                  "aria-disabled": j || void 0,
                  children: [
                      (0, r.jsx)("div", { children: O }),
                      W,
                      U &&
                          (0, r.jsx)(o.CircleInformationIcon, {
                              className: E.G,
                              size: "xs",
                              color: l.A.colors.TEXT_MUTED,
                          }),
                      _ && (0, r.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, r.jsxs)(d.D, {
                  className: E.kL,
                  onClick: w,
                  role: "checkbox",
                  "aria-checked": n,
                  tabIndex: 0,
                  children: [(0, r.jsx)(d.D, { onClick: T, children: O }), W],
              });
    return k
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
