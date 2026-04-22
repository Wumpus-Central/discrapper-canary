n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    a = n(310784),
    r = n.n(a),
    s = n(503698),
    o = n.n(s),
    d = n(318254),
    c = n(366010),
    u = n(187322),
    _ = n(821609),
    f = n(311907),
    m = n(778712),
    p = n(834730),
    g = n(890856),
    h = n(775602),
    A = n(587895),
    x = n(713517),
    v = n(993046),
    I = n(544028),
    E = n(594832),
    C = n(121700),
    j = n(627001),
    N = n(754804),
    y = n(871123),
    b = n(317560),
    S = n(533406),
    w = n(366523),
    T = n(652215),
    k = n(788868),
    R = n(985018),
    L = n(789901);
let D = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: m._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    M = r()("#000000").darken(1.5).alpha(0.9).hex(),
    O = r()("#000000").alpha(0).hex(),
    F = `linear-gradient(to top, ${M} 30%, ${O} 80%)`;
function V(e) {
    var t, n;
    let {
            sku: a,
            targetUser: r,
            isTargetingCurrentUser: s,
            source: m,
            showIcons: M,
            guildId: O,
            channelId: V,
            analyticsLocations: P,
            onCardClick: G,
            onButtonClick: H,
        } = e,
        U = l.useRef(null),
        W = (0, f.bG)([I.A], () => (0, c.M)(I.A.theme)),
        z = (0, f.bG)([h.A], () => h.A.useReducedMotion),
        { isHoveringOrFocusing: B } = (0, x.A)(U),
        { guildId: Z } = (0, y.nG)(a.applicationId),
        Y = (0, f.bG)([A.A], () => A.A.getApplication(a.applicationId)),
        { primaryIconAsset: $, primaryIconLabel: Q } = l.useMemo(() => (0, y.Cv)(a, a.applicationId), [a]),
        {
            priceComponent: K,
            extendedHeight: X,
            displayPrice: q,
        } = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n } = e,
                {
                    normalPrice: a,
                    discountedPrice: r,
                    discountPercent: s,
                } = (0, v.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
                o = r ?? a,
                c = l.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, i.jsx)("div", {
                                  className: L.pt,
                                  children: (0, i.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: R.intl.format(R.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, i.jsx)(d.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [t],
                );
            return null == t || null == o
                ? { priceComponent: null, extendedHeight: !1, displayPrice: o }
                : null != s && null != r
                  ? {
                        priceComponent: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: L.p6,
                                    children: [
                                        null != a &&
                                            (0, i.jsx)(p.E, {
                                                className: L.of,
                                                variant: "text-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: a,
                                            }),
                                        (0, i.jsx)(p.E, {
                                            variant: "text-md/bold",
                                            color: "always-white",
                                            lineClamp: 1,
                                            children: r,
                                        }),
                                        (0, i.jsxs)(p.E, {
                                            variant: "text-md/bold",
                                            color: "text-feedback-positive",
                                            lineClamp: 1,
                                            children: ["(", s, ")"],
                                        }),
                                    ],
                                }),
                                c,
                            ],
                        }),
                        extendedHeight: null != c,
                        displayPrice: o,
                    }
                  : {
                        priceComponent: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.E, {
                                    variant: "text-md/bold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: a,
                                }),
                                c,
                            ],
                        }),
                        extendedHeight: !1,
                        displayPrice: o,
                    };
        })({ sku: a, priceSetAssignmentPurchaseType: s ? T.lid.DEFAULT : T.lid.GIFT }),
        J = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    G?.(),
                    (0, b.R)({
                        skuId: a.id,
                        applicationId: a.applicationId,
                        isStorefront: !1,
                        giftRecipient: r,
                        giftingOrigin: k.vQ.GUILD_CHANNEL,
                        analyticsLocations: P,
                    });
            },
            [a.id, a.applicationId, r, P, G],
        ),
        ee = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    H?.(),
                    (0, S.a)(
                        a,
                        { isGift: !s, giftRecipient: r, giftingOrigin: k.vQ.GUILD_CHANNEL },
                        { analyticsLocations: P, guildId: Z },
                    );
            },
            [a, r, s, P, Z, H],
        );
    return (0, i.jsx)(u.vN, {
        children: (0, i.jsxs)(g.s, {
            onClick: J,
            className: o()(L.Nr, { [L.Zl]: !z, [L.BN]: W, [L.YF]: B }),
            ref: U,
            "aria-label": a.name,
            children: [
                (0, i.jsx)(j.P, { spec: D, application: Y }),
                (0, i.jsx)(C.A, {
                    spec: D,
                    sku: a,
                    isCardHovered: B,
                    location: "SocialLayerGiftingVoicePanelFeaturedSkuItemCard",
                    replacedElement:
                        M && !s && m === E.uS.WISHLIST
                            ? (0, i.jsx)(N.n, { spec: D, user: r, guildId: O ?? void 0, channelId: V ?? void 0 })
                            : null,
                }),
                (0, i.jsx)(w.e, {
                    shape: "custom",
                    sku: a,
                    containerClassName: L.Vl,
                    foregroundImageClassName: L.wP,
                    backgroundImageClassName: L.GC,
                }),
                (0, i.jsx)("div", { className: L.iZ, style: { background: F } }),
                (0, i.jsxs)("div", {
                    className: L.zH,
                    children: [
                        (0, i.jsxs)("div", {
                            className: o()(L.gn, { [L.ov]: null == K, [L.w4]: X }),
                            children: [
                                null != $ && (0, i.jsx)("img", { src: $.toString(), alt: Q, className: L.ye }),
                                (0, i.jsx)(p.E, {
                                    color: "always-white",
                                    variant: "text-md/medium",
                                    lineClamp: 1,
                                    children: a.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: L.iQ, children: K }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: L.li,
                    children: (0, i.jsx)(_.$, {
                        variant: "primary",
                        onClick: ee,
                        text:
                            ((t = q),
                            (n = s),
                            null != t
                                ? n
                                    ? R.intl.format(R.t.Xp5WTn, { price: t })
                                    : R.intl.format(R.t.o2WeeD, { price: t })
                                : n
                                  ? R.intl.string(R.t.boqtTA)
                                  : R.intl.string(R.t.QAZA5f)),
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
    });
}
