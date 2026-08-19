i.d(t, { A: () => N });
var s = i(477900),
    n = i(582128),
    r = i(503698),
    l = i.n(r),
    a = i(17928),
    o = i(502572),
    c = i(862482),
    d = i(194261),
    u = i(866665),
    m = i(821609),
    g = i(930861),
    h = i(104510),
    p = i(820739),
    T = i(688810),
    E = i(531260),
    _ = i(267102),
    f = i(178368),
    v = i(166403),
    A = i(473145),
    x = i(987144),
    I = i(652215),
    S = i(202541),
    R = i(375708),
    b = i(316470);
let N = function (e) {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: i,
            guild: r,
            buttonText: N,
            targetBoostedGuildTier: j,
            onClose: C = () => {},
            closeLayer: y = () => {},
            pauseAnimation: G = !1,
            applicationId: V,
            handleSubscribeModalClose: M,
            withHighlight: P = !1,
            icon: U,
            intent: L,
            useExpressiveButton: w = !1,
            ...O
        } = e,
        { analyticsLocations: D } = (0, T.Ay)(),
        k = (0, _.Us)() === I.BRT.POPOUT,
        [F, B] = n.useState(!1),
        { fractionalState: z } = (0, E.A)(),
        H = (0, a.bG)([f.A], () => f.A.hasFetched);
    n.useEffect(() => {
        H || (0, p.CD)();
    }, [H]);
    let Z = (0, A.D$)(f.A.boostSlots),
        W = null != j ? Math.max((0, A.Os)(r, j), 1) : 1,
        Q = (0, A.Nc)({ fractionalState: z });
    async function K() {
        B(!0),
            await (0, x.g)({
                analyticsLocations: D,
                analyticsLocation: t,
                analyticsSourceLocation: i,
                guild: r,
                numberOfBoostsToAdd: W,
                onClose: C,
                closeLayer: y,
                inPopout: k,
                applicationId: V,
                handleSubscribeModalClose: M,
                intent: L,
            }),
            B(!1);
    }
    let J = v.A.getPremiumTypeSubscription(),
        Y = (0, s.jsxs)("div", { className: b.x6, children: [U, N ?? R.intl.string(R.t.gKmQ1G)] }),
        q = !1;
    return ((q = null !== J && !(Z.length > 0) && J?.isPausedOrPausePending && z === S.xc.NONE) &&
        ((Y = (0, s.jsxs)("div", {
            className: b.x6,
            children: [(0, s.jsx)(d.LockIcon, { size: "xs", className: b.iA }), " ", Y],
        })),
        (O.disabled = !0)),
    null != Q)
        ? w
            ? (0, s.jsx)(u.m, {
                  text: Q,
                  children: (0, s.jsx)(m.$, {
                      variant: "expressive",
                      icon: d.LockIcon,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: O.fullWidth,
                      text: N ?? R.intl.string(R.t.gKmQ1G),
                  }),
              })
            : (0, s.jsx)(o.A, {
                  text: Q,
                  "aria-label": !1,
                  children: (e) =>
                      (0, s.jsx)(g.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: c.$n.Sizes.SMALL,
                          pauseAnimation: G,
                          ...O,
                          children: Y,
                      }),
              })
        : w
          ? (0, s.jsx)(m.$, {
                variant: "expressive",
                icon: h._,
                disabled: q,
                loading: F,
                fullWidth: O.fullWidth,
                text: N ?? R.intl.string(R.t.gKmQ1G),
                onClick: K,
            })
          : (0, s.jsx)(g.wL, {
                "data-migration-pending": !0,
                size: c.$n.Sizes.SMALL,
                ...O,
                className: l()(O.className, { [b.yj]: P }),
                submitting: F,
                onClick: K,
                pauseAnimation: G,
                children: Y,
            });
};
