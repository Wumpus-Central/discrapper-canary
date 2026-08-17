t.d(i, { A: () => T });
var n = t(477900),
    s = t(582128),
    a = t(503698),
    l = t.n(a),
    c = t(17928),
    r = t(502572),
    d = t(862482),
    o = t(194261),
    u = t(866665),
    m = t(821609),
    x = t(930861),
    h = t(104510),
    g = t(820739),
    p = t(688810),
    A = t(531260),
    f = t(267102),
    b = t(178368),
    j = t(166403),
    v = t(473145),
    L = t(987144),
    N = t(652215),
    S = t(202541),
    k = t(375708),
    P = t(316470);
let T = function (e) {
    let {
            analyticsLocation: i,
            analyticsSourceLocation: t,
            guild: a,
            buttonText: T,
            targetBoostedGuildTier: O,
            onClose: w = () => {},
            closeLayer: z = () => {},
            pauseAnimation: C = !1,
            applicationId: M,
            handleSubscribeModalClose: $,
            withHighlight: y = !1,
            icon: E,
            intent: G,
            useExpressiveButton: W = !1,
            ...K
        } = e,
        { analyticsLocations: Q } = (0, p.Ay)(),
        _ = (0, f.Us)() === N.BRT.POPOUT,
        [D, I] = s.useState(!1),
        { fractionalState: R } = (0, A.A)(),
        U = (0, c.bG)([b.A], () => b.A.hasFetched);
    s.useEffect(() => {
        U || (0, g.CD)();
    }, [U]);
    let B = (0, v.D$)(b.A.boostSlots),
        F = null != O ? Math.max((0, v.Os)(a, O), 1) : 1,
        q = (0, v.Nc)({ fractionalState: R });
    async function H() {
        I(!0),
            await (0, L.g)({
                analyticsLocations: Q,
                analyticsLocation: i,
                analyticsSourceLocation: t,
                guild: a,
                numberOfBoostsToAdd: F,
                onClose: w,
                closeLayer: z,
                inPopout: _,
                applicationId: M,
                handleSubscribeModalClose: $,
                intent: G,
            }),
            I(!1);
    }
    let J = j.A.getPremiumTypeSubscription(),
        V = (0, n.jsxs)("div", { className: P.x6, children: [E, T ?? k.intl.string(k.t.gKmQ1G)] }),
        X = !1;
    return ((X = null !== J && !(B.length > 0) && J?.isPausedOrPausePending && R === S.xc.NONE) &&
        ((V = (0, n.jsxs)("div", {
            className: P.x6,
            children: [(0, n.jsx)(o.LockIcon, { size: "xs", className: P.iA }), " ", V],
        })),
        (K.disabled = !0)),
    null != q)
        ? W
            ? (0, n.jsx)(u.m, {
                  text: q,
                  children: (0, n.jsx)(m.$, {
                      variant: "expressive",
                      icon: o.LockIcon,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: K.fullWidth,
                      text: T ?? k.intl.string(k.t.gKmQ1G),
                  }),
              })
            : (0, n.jsx)(r.A, {
                  text: q,
                  "aria-label": !1,
                  children: (e) =>
                      (0, n.jsx)(x.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: C,
                          ...K,
                          children: V,
                      }),
              })
        : W
          ? (0, n.jsx)(m.$, {
                variant: "expressive",
                icon: h._,
                disabled: X,
                loading: D,
                fullWidth: K.fullWidth,
                text: T ?? k.intl.string(k.t.gKmQ1G),
                onClick: H,
            })
          : (0, n.jsx)(x.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...K,
                className: l()(K.className, { [P.yj]: y }),
                submitting: D,
                onClick: H,
                pauseAnimation: C,
                children: V,
            });
};
