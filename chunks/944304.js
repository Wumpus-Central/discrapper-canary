t.d(i, { A: () => k });
var s = t(477900),
    n = t(582128),
    a = t(503698),
    l = t.n(a),
    r = t(17928),
    c = t(502572),
    d = t(862482),
    u = t(194261),
    o = t(866665),
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
    N = t(987144),
    S = t(652215),
    P = t(202541),
    T = t(375708),
    L = t(316470);
let k = function (e) {
    let {
            analyticsLocation: i,
            analyticsSourceLocation: t,
            guild: a,
            buttonText: k,
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
        _ = (0, f.Us)() === S.BRT.POPOUT,
        [D, R] = n.useState(!1),
        { fractionalState: U } = (0, A.A)(),
        X = (0, r.bG)([b.A], () => b.A.hasFetched);
    n.useEffect(() => {
        X || (0, g.CD)();
    }, [X]);
    let B = (0, v.D$)(b.A.boostSlots),
        F = null != O ? Math.max((0, v.Os)(a, O), 1) : 1,
        q = (0, v.Nc)({ fractionalState: U });
    async function H() {
        R(!0),
            await (0, N.g)({
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
            R(!1);
    }
    let I = j.A.getPremiumTypeSubscription(),
        J = (0, s.jsxs)("div", { className: L.x6, children: [E, k ?? T.intl.string(T.t.gKmQ1G)] }),
        V = !1;
    return ((V = null !== I && !(B.length > 0) && I?.isPausedOrPausePending && U === P.xc.NONE) &&
        ((J = (0, s.jsxs)("div", {
            className: L.x6,
            children: [(0, s.jsx)(u.X, { size: "xs", className: L.iA }), " ", J],
        })),
        (K.disabled = !0)),
    null != q)
        ? W
            ? (0, s.jsx)(o.m, {
                  text: q,
                  children: (0, s.jsx)(m.$, {
                      variant: "expressive",
                      icon: u.X,
                      iconPosition: "start",
                      disabled: !0,
                      fullWidth: K.fullWidth,
                      text: k ?? T.intl.string(T.t.gKmQ1G),
                  }),
              })
            : (0, s.jsx)(c.A, {
                  text: q,
                  "aria-label": !1,
                  children: (e) =>
                      (0, s.jsx)(x.wL, {
                          "data-migration-pending": !0,
                          ...e,
                          disabled: !0,
                          size: d.$n.Sizes.SMALL,
                          pauseAnimation: C,
                          ...K,
                          children: J,
                      }),
              })
        : W
          ? (0, s.jsx)(m.$, {
                variant: "expressive",
                icon: h._,
                disabled: V,
                loading: D,
                fullWidth: K.fullWidth,
                text: k ?? T.intl.string(T.t.gKmQ1G),
                onClick: H,
            })
          : (0, s.jsx)(x.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...K,
                className: l()(K.className, { [L.yj]: y }),
                submitting: D,
                onClick: H,
                pauseAnimation: C,
                children: J,
            });
};
