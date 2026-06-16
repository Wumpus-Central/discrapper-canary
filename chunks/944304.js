"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(502572),
    u = n(990078),
    c = n(862482),
    d = n(194261),
    _ = n(821609),
    h = n(930861),
    f = n(104510),
    p = n(820739),
    E = n(688810),
    m = n(531260),
    g = n(267102),
    A = n(178368),
    I = n(166403),
    T = n(473145),
    S = n(987144),
    y = n(652215),
    C = n(788868),
    N = n(375708),
    v = n(703870);
let R = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: s,
            buttonText: R,
            targetBoostedGuildTier: O,
            onClose: b = () => {},
            closeLayer: D = () => {},
            pauseAnimation: L = !1,
            applicationId: w,
            handleSubscribeModalClose: M,
            withHighlight: P = !1,
            icon: x,
            intent: k,
            useExpressiveButton: U = !1,
            ...G
        } = e,
        { analyticsLocations: F } = (0, E.Ay)(),
        V = (0, g.Us)() === y.BRT.POPOUT,
        [B, j] = r.useState(!1),
        { fractionalState: H } = (0, m.A)(),
        Y = (0, o.bG)([A.A], () => A.A.hasFetched);
    r.useEffect(() => {
        Y || (0, p.CD)();
    }, [Y]);
    let W = (0, T.D$)(A.A.boostSlots),
        K = null != O ? Math.max((0, T.Os)(s, O), 1) : 1,
        $ = (0, T.Nc)({ fractionalState: H }),
        z = async () => {
            j(!0),
                await (0, S.g)({
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: s,
                    numberOfBoostsToAdd: K,
                    onClose: b,
                    closeLayer: D,
                    inPopout: V,
                    applicationId: w,
                    handleSubscribeModalClose: M,
                    intent: k,
                }),
                j(!1);
        },
        q = I.A.getPremiumTypeSubscription(),
        Z = (0, i.jsxs)("div", { className: v.x6, children: [x, R ?? N.intl.string(N.t.gKmQ1G)] }),
        X = !1;
    return ((X = null !== q && !(W.length > 0) && q?.isPausedOrPausePending && H === C.xc.NONE) &&
        ((Z = (0, i.jsxs)("div", {
            className: v.x6,
            children: [(0, i.jsx)(d.X, { size: "xs", className: v.iA }), " ", Z],
        })),
        (G.disabled = !0)),
    null != $)
        ? U
            ? (0, i.jsx)(u.m, {
                  text: $,
                  children: (0, i.jsx)(_.$, {
                      variant: "expressive",
                      icon: d.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: G.fullWidth,
                      text: R ?? N.intl.string(N.t.gKmQ1G),
                  }),
              })
            : (0, i.jsx)(l.A, {
                  text: $,
                  "aria-label": !1,
                  children: (e) =>
                      (0, i.jsx)(h.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: c.$n.Sizes.SMALL,
                          pauseAnimation: L,
                          ...G,
                          children: Z,
                      }),
              })
        : U
          ? (0, i.jsx)(_.$, {
                variant: "expressive",
                icon: f._,
                disabled: X,
                loading: B,
                fullWidth: G.fullWidth,
                text: R ?? N.intl.string(N.t.gKmQ1G),
                onClick: z,
            })
          : (0, i.jsx)(h.wL, {
                "data-migration-pending": !0,
                size: c.$n.Sizes.SMALL,
                ...G,
                className: a()(G.className, { [v.yj]: P }),
                submitting: B,
                onClick: z,
                pauseAnimation: L,
                children: Z,
            });
};
