n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(310784),
    s = n.n(a),
    r = n(503698),
    o = n.n(r),
    c = n(158954),
    d = n(311907),
    u = n(397927),
    h = n(775602),
    m = n(587895),
    A = n(713517),
    g = n(993046),
    p = n(544028),
    _ = n(594832),
    f = n(121700),
    E = n(627001),
    C = n(754804),
    x = n(871123),
    S = n(317560),
    I = n(533406),
    T = n(366523),
    v = n(652215),
    N = n(788868),
    y = n(985018),
    b = n(906269);
let j = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: u._3J.SIZE_24,
        wishlistButtonSize: "md",
    }),
    R = s()("#000000").darken(1.5).alpha(0.9).hex(),
    M = s()("#000000").alpha(0).hex(),
    L = `linear-gradient(to top, ${R} 30%, ${M} 80%)`;
function O(e) {
    var t, n;
    let {
            sku: a,
            targetUser: s,
            isTargetingCurrentUser: r,
            source: R,
            showIcons: M,
            guildId: O,
            channelId: D,
            analyticsLocations: P,
            onCardClick: U,
            onButtonClick: k,
        } = e,
        w = l.useRef(null),
        G = (0, d.bG)([p.A], () => (0, c.Mwr)(p.A.theme)),
        F = (0, d.bG)([h.A], () => h.A.useReducedMotion),
        { isHoveringOrFocusing: H } = (0, A.A)(w),
        { guildId: B } = (0, x.nG)(a.applicationId),
        V = (0, d.bG)([m.A], () => m.A.getApplication(a.applicationId)),
        { primaryIconAsset: W, primaryIconLabel: K } = l.useMemo(() => (0, x.Cv)(a, a.applicationId), [a]),
        { normalPrice: z, discountedPrice: Y } = (0, g.ou)({
            sku: a,
            priceSetAssignmentPurchaseType: r ? v.lid.DEFAULT : v.lid.GIFT,
        }),
        J = Y ?? z,
        q = null != J,
        $ = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    U?.(),
                    (0, S.R)({
                        skuId: a.id,
                        applicationId: a.applicationId,
                        isStorefront: !1,
                        giftRecipient: s,
                        giftingOrigin: N.vQ.GUILD_CHANNEL,
                        analyticsLocations: P,
                    });
            },
            [a.id, a.applicationId, s, P, U],
        ),
        Z = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    k?.(),
                    (0, I.a)(
                        a,
                        { isGift: !r, giftRecipient: s, giftingOrigin: N.vQ.GUILD_CHANNEL },
                        { analyticsLocations: P, guildId: B },
                    );
            },
            [a, s, r, P, B, k],
        );
    return (0, i.jsx)(c.vN3, {
        children: (0, i.jsxs)(u.sqX, {
            onClick: $,
            className: o()(b.Nr, { [b.Zl]: !F, [b.BN]: G, [b.YF]: H }),
            ref: w,
            "aria-label": a.name,
            children: [
                (0, i.jsx)(E.P, { spec: j, application: V }),
                (0, i.jsx)(f.A, {
                    spec: j,
                    sku: a,
                    isCardHovered: H,
                    location: "SocialLayerGiftingVoicePanelFeaturedSkuItemCard",
                    replacedElement:
                        M && !r && R === _.uS.WISHLIST
                            ? (0, i.jsx)(C.n, { spec: j, user: s, guildId: O ?? void 0, channelId: D ?? void 0 })
                            : null,
                }),
                (0, i.jsx)(T.e, {
                    shape: "custom",
                    sku: a,
                    containerClassName: b.Vl,
                    foregroundImageClassName: b.wP,
                    backgroundImageClassName: b.GC,
                }),
                (0, i.jsx)("div", { className: b.iZ, style: { background: L } }),
                (0, i.jsxs)("div", {
                    className: b.zH,
                    children: [
                        (0, i.jsxs)("div", {
                            className: o()(b.gn, { [b.ov]: !q }),
                            children: [
                                null != W && (0, i.jsx)("img", { src: W.toString(), alt: K, className: b.ye }),
                                (0, i.jsx)(u.Text, {
                                    color: "always-white",
                                    variant: "text-md/medium",
                                    lineClamp: 1,
                                    children: a.name,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: b.iQ,
                            children: [
                                q &&
                                    (0, i.jsx)(u.Text, {
                                        variant: "text-md/bold",
                                        color: "always-white",
                                        lineClamp: 1,
                                        children: J,
                                    }),
                                null != a.orbsReward &&
                                    a.orbsReward > 0 &&
                                    (0, i.jsx)("div", {
                                        className: b.pt,
                                        children: (0, i.jsx)(u.Text, {
                                            variant: "text-sm/semibold",
                                            color: "currentColor",
                                            children: y.intl.format(y.t.GiVd2Q, {
                                                orbCount: a.orbsReward,
                                                orbIconHook: () =>
                                                    (0, i.jsx)(
                                                        c.Cp8,
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
                    className: b.li,
                    children: (0, i.jsx)(c.$nd, {
                        variant: "primary",
                        onClick: Z,
                        text:
                            ((t = J),
                            (n = r),
                            null != t
                                ? n
                                    ? y.intl.format(y.t.Xp5WTn, { price: t })
                                    : y.intl.format(y.t.o2WeeD, { price: t })
                                : n
                                  ? y.intl.string(y.t.boqtTA)
                                  : y.intl.string(y.t.QAZA5f)),
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
    });
}
