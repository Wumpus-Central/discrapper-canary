n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(502572),
    c = n(990078),
    d = n(862482),
    u = n(194261),
    m = n(821609),
    h = n(930861),
    g = n(104510),
    x = n(820739),
    f = n(688810),
    A = n(531260),
    p = n(267102),
    E = n(178368),
    _ = n(166403),
    j = n(473145),
    N = n(987144),
    T = n(652215),
    I = n(788868),
    v = n(375708),
    C = n(703870);
let S = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: s,
            buttonText: S,
            targetBoostedGuildTier: b,
            onClose: y = () => {},
            closeLayer: R = () => {},
            pauseAnimation: O = !1,
            applicationId: L,
            handleSubscribeModalClose: k,
            withHighlight: P = !1,
            icon: G,
            intent: D,
            useExpressiveButton: V = !1,
            ...w
        } = e,
        { analyticsLocations: U } = (0, f.Ay)(),
        M = (0, p.Us)() === T.BRT.POPOUT,
        [B, F] = l.useState(!1),
        { fractionalState: W } = (0, A.A)(),
        z = (0, a.bG)([E.A], () => E.A.hasFetched);
    l.useEffect(() => {
        z || (0, x.CD)();
    }, [z]);
    let Q = (0, j.D$)(E.A.boostSlots),
        H = null != b ? Math.max((0, j.Os)(s, b), 1) : 1,
        K = (0, j.Nc)({ fractionalState: W }),
        q = async () => {
            F(!0),
                await (0, N.g)({
                    analyticsLocations: U,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: s,
                    numberOfBoostsToAdd: H,
                    onClose: y,
                    closeLayer: R,
                    inPopout: M,
                    applicationId: L,
                    handleSubscribeModalClose: k,
                    intent: D,
                }),
                F(!1);
        },
        X = _.A.getPremiumTypeSubscription(),
        Y = (0, i.jsxs)("div", { className: C.x6, children: [G, S ?? v.intl.string(v.t.gKmQ1G)] }),
        $ = !1;
    return (($ = null !== X && !(Q.length > 0) && X?.isPausedOrPausePending && W === I.xc.NONE) &&
        ((Y = (0, i.jsxs)("div", {
            className: C.x6,
            children: [(0, i.jsx)(u.X, { size: "xs", className: C.iA }), " ", Y],
        })),
        (w.disabled = !0)),
    null != K)
        ? V
            ? (0, i.jsx)(c.m, {
                  text: K,
                  children: (0, i.jsx)(m.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: w.fullWidth,
                      text: S ?? v.intl.string(v.t.gKmQ1G),
                  }),
              })
            : (0, i.jsx)(o.A, {
                  text: K,
                  "aria-label": !1,
                  children: (e) =>
                      (0, i.jsx)(h.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: O,
                          ...w,
                          children: Y,
                      }),
              })
        : V
          ? (0, i.jsx)(m.$, {
                variant: "expressive",
                icon: g._,
                disabled: $,
                loading: B,
                fullWidth: w.fullWidth,
                text: S ?? v.intl.string(v.t.gKmQ1G),
                onClick: q,
            })
          : (0, i.jsx)(h.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...w,
                className: r()(w.className, { [C.yj]: P }),
                submitting: B,
                onClick: q,
                pauseAnimation: O,
                children: Y,
            });
};
