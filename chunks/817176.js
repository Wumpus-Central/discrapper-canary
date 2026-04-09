n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(587895),
    h = n(713517),
    m = n(993046),
    A = n(544028),
    g = n(594832),
    p = n(121700),
    _ = n(627001),
    f = n(754804),
    E = n(871123),
    x = n(317560),
    C = n(533406),
    S = n(366523),
    I = n(652215),
    T = n(788868),
    N = n(985018),
    v = n(745580);
let y = Object.freeze({
    size: 0,
    iconSize: 20,
    iconInset: 12,
    buttonInset: 8,
    avatarSize: c._3J.SIZE_24,
    wishlistButtonSize: "md",
});
function b(e) {
    var t, n;
    let {
            sku: s,
            targetUser: b,
            isTargetingCurrentUser: j,
            source: R,
            showIcons: M,
            guildId: D,
            channelId: O,
            analyticsLocations: L,
            onCardClick: P,
            onButtonClick: k,
        } = e,
        w = l.useRef(null),
        U = (0, o.bG)([A.A], () => (0, r.Mwr)(A.A.theme)),
        G = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        { isHoveringOrFocusing: F } = (0, h.A)(w),
        { guildId: B } = (0, E.nG)(s.applicationId),
        H = (0, o.bG)([u.A], () => u.A.getApplication(s.applicationId)),
        { primaryIconAsset: V, primaryIconLabel: K } = l.useMemo(() => (0, E.Cv)(s, s.applicationId), [s]),
        { normalPrice: W, discountedPrice: z } = (0, m.ou)({
            sku: s,
            priceSetAssignmentPurchaseType: j ? I.lid.DEFAULT : I.lid.GIFT,
        }),
        q = z ?? W,
        Y = null != q,
        J = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    P?.(),
                    (0, x.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: b,
                        giftingOrigin: T.vQ.GUILD_CHANNEL,
                        analyticsLocations: L,
                    });
            },
            [s.id, s.applicationId, b, L, P],
        ),
        $ = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    k?.(),
                    (0, C.a)(
                        s,
                        { isGift: !j, giftRecipient: b, giftingOrigin: T.vQ.GUILD_CHANNEL },
                        { analyticsLocations: L, guildId: B },
                    );
            },
            [s, b, j, L, B, k],
        );
    return (0, i.jsx)(r.vN3, {
        children: (0, i.jsxs)(c.sqX, {
            onClick: J,
            className: a()(v.Nr, { [v.Zl]: !G, [v.BN]: U, [v.YF]: F }),
            ref: w,
            "aria-label": s.name,
            children: [
                (0, i.jsx)(_.P, { spec: y, application: H }),
                (0, i.jsx)(p.A, {
                    spec: y,
                    sku: s,
                    isCardHovered: F,
                    location: "SocialLayerGiftingVoicePanelFeaturedSkuItemCard",
                    replacedElement:
                        M && !j && R === g.uS.WISHLIST
                            ? (0, i.jsx)(f.n, { spec: y, user: b, guildId: D ?? void 0, channelId: O ?? void 0 })
                            : null,
                }),
                (0, i.jsx)(S.e, {
                    shape: "custom",
                    sku: s,
                    containerClassName: v.Vl,
                    foregroundImageClassName: v.wP,
                    backgroundImageClassName: v.GC,
                }),
                (0, i.jsxs)("div", {
                    className: v.zH,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(v.gn, { [v.ov]: !Y }),
                            children: [
                                null != V && (0, i.jsx)("img", { src: V.toString(), alt: K, className: v.ye }),
                                (0, i.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-md/medium",
                                    lineClamp: 1,
                                    children: s.name,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: v.iQ,
                            children: [
                                Y &&
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/bold",
                                        color: "always-white",
                                        lineClamp: 1,
                                        children: q,
                                    }),
                                null != s.orbsReward &&
                                    s.orbsReward > 0 &&
                                    (0, i.jsx)("div", {
                                        className: v.pt,
                                        children: (0, i.jsx)(c.Text, {
                                            variant: "text-sm/semibold",
                                            color: "currentColor",
                                            children: N.intl.format(N.t.GiVd2Q, {
                                                orbCount: s.orbsReward,
                                                orbIconHook: () =>
                                                    (0, i.jsx)(
                                                        r.Cp8,
                                                        { size: "xs", color: "currentColor" },
                                                        "orbs-icon",
                                                    ),
                                            }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: v.li,
                    children: (0, i.jsx)(r.$nd, {
                        variant: "primary",
                        onClick: $,
                        text:
                            ((t = q),
                            (n = j),
                            null != t
                                ? n
                                    ? N.intl.format(N.t.Xp5WTn, { price: t })
                                    : N.intl.format(N.t.o2WeeD, { price: t })
                                : n
                                  ? N.intl.string(N.t.boqtTA)
                                  : N.intl.string(N.t.QAZA5f)),
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
    });
}
