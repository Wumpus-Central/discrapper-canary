var n = t(477900),
    s = t(582128),
    a = t(503698),
    l = t.n(a),
    c = t(855986),
    r = t(862482),
    o = t(194261),
    d = t(866665),
    u = t(821609),
    m = t(502572),
    x = t(930861),
    h = t(104510),
    g = t(559201),
    p = t(688810),
    A = t(531260),
    f = t(267102),
    b = t(178368),
    j = t(166403),
    v = t(473145),
    L = t(987144),
    N = t(652215),
    S = t(682901),
    k = t(792996),
    P = t(972113);
t.d(
    i,
    {},
    {
        A: function (e) {
            let {
                    analyticsLocation: i,
                    analyticsSourceLocation: t,
                    guild: a,
                    buttonText: T,
                    targetBoostedGuildTier: O,
                    onClose: w = () => {},
                    closeLayer: z = () => {},
                    pauseAnimation: C = !1,
                    applicationId: G,
                    handleSubscribeModalClose: M,
                    withHighlight: $ = !1,
                    icon: y,
                    intent: E,
                    useExpressiveButton: W = !1,
                    ...I
                } = e,
                { analyticsLocations: K } = (0, p.Ay)(),
                Q = (0, f.Us)() === N.BRT.POPOUT,
                [B, D] = s.useState(!1),
                { fractionalState: R } = (0, A.A)(),
                U = (0, c.bG)([b.A], () => b.A.hasFetched);
            s.useEffect(() => {
                U || (0, g.CD)();
            }, [U]);
            let _ = (0, v.D$)(b.A.boostSlots),
                F = null != O ? Math.max((0, v.Os)(a, O), 1) : 1,
                q = (0, v.Nc)({ fractionalState: R });
            async function H() {
                (D(!0),
                    await (0, L.g)({
                        analyticsLocations: K,
                        analyticsLocation: i,
                        analyticsSourceLocation: t,
                        guild: a,
                        numberOfBoostsToAdd: F,
                        onClose: w,
                        closeLayer: z,
                        inPopout: Q,
                        applicationId: G,
                        handleSubscribeModalClose: M,
                        intent: E,
                    }),
                    D(!1));
            }
            let J = j.A.getPremiumTypeSubscription(),
                V = (0, n.jsxs)("div", { className: P.x6, children: [y, T ?? k.intl.string(k.t.gKmQ1G)] }),
                X = !1;
            return ((X = null !== J && !(_.length > 0) && J?.isPausedOrPausePending && R === S.xc.NONE) &&
                ((V = (0, n.jsxs)("div", {
                    className: P.x6,
                    children: [(0, n.jsx)(o.LockIcon, { size: "xs", className: P.iA }), " ", V],
                })),
                (I.disabled = !0)),
            null != q)
                ? W
                    ? (0, n.jsx)(d.m, {
                          text: q,
                          children: (0, n.jsx)(u.$, {
                              variant: "expressive",
                              icon: o.LockIcon,
                              iconPosition: "start",
                              disabled: !0,
                              fullWidth: I.fullWidth,
                              text: T ?? k.intl.string(k.t.gKmQ1G),
                          }),
                      })
                    : (0, n.jsx)(m.A, {
                          text: q,
                          "aria-label": !1,
                          children: (e) =>
                              (0, n.jsx)(x.wL, {
                                  "data-migration-pending": !0,
                                  ...e,
                                  disabled: !0,
                                  size: r.$n.Sizes.SMALL,
                                  pauseAnimation: C,
                                  ...I,
                                  children: V,
                              }),
                      })
                : W
                  ? (0, n.jsx)(u.$, {
                        variant: "expressive",
                        icon: h.BoostGemIcon,
                        disabled: X,
                        loading: B,
                        fullWidth: I.fullWidth,
                        text: T ?? k.intl.string(k.t.gKmQ1G),
                        onClick: H,
                    })
                  : (0, n.jsx)(x.wL, {
                        "data-migration-pending": !0,
                        size: r.$n.Sizes.SMALL,
                        ...I,
                        className: l()(I.className, { [P.yj]: $ }),
                        submitting: B,
                        onClick: H,
                        pauseAnimation: C,
                        children: V,
                    });
        },
    },
);
