"use strict";
n.d(t, { A: () => L });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(502572),
    d = n(862482),
    c = n(194261),
    u = n(866665),
    _ = n(821609),
    E = n(930861),
    A = n(104510),
    h = n(820739),
    I = n(688810),
    f = n(531260),
    p = n(267102),
    T = n(178368),
    m = n(166403),
    g = n(473145),
    S = n(987144),
    N = n(652215),
    C = n(202541),
    O = n(375708),
    R = n(316470);
let L = function (e) {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: a,
            buttonText: L,
            targetBoostedGuildTier: y,
            onClose: D = () => {},
            closeLayer: v = () => {},
            pauseAnimation: b = !1,
            applicationId: M,
            handleSubscribeModalClose: P,
            withHighlight: U = !1,
            icon: w,
            intent: G,
            useExpressiveButton: x = !1,
            ...k
        } = e,
        { analyticsLocations: F } = (0, I.Ay)(),
        V = (0, p.Us)() === N.BRT.POPOUT,
        [B, H] = r.useState(!1),
        { fractionalState: j } = (0, f.A)(),
        W = (0, l.bG)([T.A], () => T.A.hasFetched);
    r.useEffect(() => {
        W || (0, h.CD)();
    }, [W]);
    let Y = (0, g.D$)(T.A.boostSlots),
        K = null != y ? Math.max((0, g.Os)(a, y), 1) : 1,
        $ = (0, g.Nc)({ fractionalState: j });
    async function z() {
        H(!0),
            await (0, S.g)({
                analyticsLocations: F,
                analyticsLocation: t,
                analyticsSourceLocation: n,
                guild: a,
                numberOfBoostsToAdd: K,
                onClose: D,
                closeLayer: v,
                inPopout: V,
                applicationId: M,
                handleSubscribeModalClose: P,
                intent: G,
            }),
            H(!1);
    }
    let q = m.A.getPremiumTypeSubscription(),
        Z = (0, i.jsxs)("div", { className: R.x6, children: [w, L ?? O.intl.string(O.t.gKmQ1G)] }),
        X = !1;
    return ((X = null !== q && !(Y.length > 0) && q?.isPausedOrPausePending && j === C.xc.NONE) &&
        ((Z = (0, i.jsxs)("div", {
            className: R.x6,
            children: [(0, i.jsx)(c.X, { size: "xs", className: R.iA }), " ", Z],
        })),
        (k.disabled = !0)),
    null != $)
        ? x
            ? (0, i.jsx)(u.m, {
                  text: $,
                  children: (0, i.jsx)(_.$, {
                      variant: "expressive",
                      icon: c.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: k.fullWidth,
                      text: L ?? O.intl.string(O.t.gKmQ1G),
                  }),
              })
            : (0, i.jsx)(o.A, {
                  text: $,
                  "aria-label": !1,
                  children: (e) =>
                      (0, i.jsx)(E.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: b,
                          ...k,
                          children: Z,
                      }),
              })
        : x
          ? (0, i.jsx)(_.$, {
                variant: "expressive",
                icon: A._,
                disabled: X,
                loading: B,
                fullWidth: k.fullWidth,
                text: L ?? O.intl.string(O.t.gKmQ1G),
                onClick: z,
            })
          : (0, i.jsx)(E.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...k,
                className: s()(k.className, { [R.yj]: U }),
                submitting: B,
                onClick: z,
                pauseAnimation: b,
                children: Z,
            });
};
