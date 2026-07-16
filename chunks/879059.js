n.d(e, { default: () => S });
var s = n(627968),
    l = n(64700),
    r = n(106778),
    a = n(575593),
    i = n(772707),
    o = n(116833),
    c = n(793574),
    u = n(688810),
    d = n(206835),
    f = n(212739),
    p = n(428262),
    m = n(298072),
    E = n(993408);
let h = (0, n(945810).mj)({
    name: "2026-05-orbs-purchase-upsell-banner",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var v = n(450481),
    x = n(442759),
    A = n(953150),
    C = n(623373),
    b = n(536572),
    g = n(524246),
    L = n(297264),
    R = n(834730),
    j = n(821609),
    T = n(403581),
    k = n(532794),
    O = n(202541),
    y = n(375708),
    I = n(939052);
let N = function () {
    let { analyticsLocations: t } = (0, u.Ay)(),
        e = l.useRef(null);
    return (0, s.jsxs)("div", {
        className: I.kL,
        children: [
            (0, s.jsx)("div", {
                className: I.LG,
                "aria-hidden": !0,
                role: "presentation",
                children: (0, s.jsx)("img", { src: "/assets/54013366f9df47f1.svg", className: I.Qw, alt: "" }),
            }),
            (0, s.jsxs)("div", {
                className: I.rf,
                children: [
                    (0, s.jsx)(L.D, { variant: "heading-md/bold", children: y.intl.string(y.t.xPfigP) }),
                    (0, s.jsx)(R.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: y.intl.format(y.t["7igrTt"], { monthlyOrbsAmount: 250 }),
                    }),
                ],
            }),
            (0, s.jsx)(j.$, {
                buttonRef: e,
                size: "sm",
                variant: "secondary",
                icon: T.t,
                text: y.intl.string(y.t["8x0jKT"]),
                onClick: function () {
                    (0, k.A)({ subscriptionTier: O.pe.TIER_2, analyticsLocations: t, returnRef: e });
                },
            }),
        ],
    });
};
var P = n(14368),
    _ = n(213530),
    D = n(184264),
    F = n(758836),
    w = n(700797);
let S = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: l,
            analyticsLocations: L,
            overrideTitle: R,
            overrideDescription: j,
            shouldShowPromotionalExperience: T,
            purchaseType: k = F.gs.FIAT,
            overrideGraphic: O,
            overrideGradientColor: I,
        } = t,
        S = (0, m.Q)(n),
        G = (0, C.rb)(n, S),
        { analyticsLocations: M } = (0, u.Ay)([...L, c.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: V } = (function (t) {
            var e;
            let n,
                {
                    firstProfileEffect: s,
                    firstAvatarDecoration: l,
                    firstNameplate: r,
                    firstProfileFrame: a,
                } = (0, x.f5)(t),
                i = (0, E.aw)(t);
            return {
                firstAvatarDecoration: l,
                firstProfileEffect: s,
                firstNameplate: r,
                isBundle: i,
                firstProfileFrame: a,
                hasRequiredProductItems: i
                    ? (function (t) {
                          let { firstAvatarDecoration: e, firstProfileEffect: n, firstNameplate: s } = t;
                          return (null != e && null != n && null == s) || (null != e && null != n && null != s);
                      })(
                          ((e = t.items),
                          {
                              firstProfileEffect: (n = new x.Ym(e)).firstProfileEffect,
                              firstAvatarDecoration: n.firstAvatarDecoration,
                              firstNameplate: n.firstNameplate,
                          }),
                      )
                    : null != l || null != s || null != r || null != a,
            };
        })(G),
        B = (0, d.A)({ analyticsLocations: M }),
        K = y.intl.string(y.t.eZrmtq),
        {
            environment: $,
            modalRef: q,
            confettiCanvas: Q,
            setConfettiCanvas: z,
            customConfettiDisplayOptions: H,
        } = (0, D.mO)(G, k),
        U = (0, b.VG)(G);
    (0, D.$V)(G, M);
    let { handleUseNow: W, isApplying: Y, canUseNow: Z } = (0, v.p)({ product: G, onSuccess: l, onError: l }),
        J = (0, D.$k)({
            product: G,
            overrideTitle: R,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: T,
            productName: U,
        }),
        X = (0, D.v8)({
            product: G,
            overrideDescription: j,
            productName: U,
            shouldShowPromotionalExperience: T,
            promotionalRewardCollectedText: K,
        }),
        tt = (0, D.aG)({
            product: G,
            onClose: l,
            analyticsLocations: M,
            hasRequiredProductItems: V,
            handleUseNow: W,
            isApplying: Y,
            canUseNow: Z,
            openProfileSettings: B,
        }),
        te = (0, p.nK)(),
        tn = (0, f.O)(),
        ts = h.useConfig({ location: "CollectiblesCollectedModal" }).enabled && k === F.gs.ORB && !te && !tn,
        tl = "6/4";
    switch (G.type) {
        case a.R.NAMEPLATE:
        case a.R.AVATAR_DECORATION:
        case a.R.BUNDLE:
            tl = "16/9";
            break;
        case a.R.PROFILE_EFFECT:
        case a.R.PROFILE_FRAME:
        default:
            tl = "6/4";
    }
    let { confettiColors: tr } = (0, A.A)(G.styles),
        ta = O ?? {
            type: "dynamic",
            component: o.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: tl,
            props: { product: G, forCollectedModal: !0 },
        };
    return (0, s.jsx)(u.f5, {
        value: M,
        children: (0, s.jsxs)("div", {
            ref: q,
            children: [
                (0, s.jsx)(r.Fk, { ref: z, className: w.L, environment: $ }),
                (0, s.jsx)(i.k, {
                    graphic: ta,
                    title: J,
                    subtitle: X ?? void 0,
                    onClose: l,
                    transitionState: e,
                    actions: tt,
                    gradientColor: I ?? void 0,
                    children: ts && (0, s.jsx)(N, {}),
                }),
                null != H
                    ? (0, s.jsx)(_.K, { options: H })
                    : (0, s.jsx)(g.A, {
                          confettiTarget: q.current,
                          confettiCanvas: Q,
                          sprites: (0, P.rA)(G.categorySkuId),
                          colors: tr?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
