t.d(i, { default: () => el });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    a = t(331322),
    r = t(534514),
    c = t(937008),
    o = t(156312),
    d = t(532794),
    u = t(413074),
    h = t(672525),
    m = t(503698),
    g = t.n(m),
    p = t(791282),
    I = t.n(p),
    x = t(132500),
    _ = t(172218),
    j = t(17928),
    f = t(834730),
    b = t(123292),
    S = t(140735),
    A = t(192308),
    N = t(43990),
    C = t(444927),
    w = t(793574),
    L = t(688810),
    T = t(871123),
    v = t(84511),
    O = t(999291),
    y = t(101928),
    R = t(920601),
    k = t(975732),
    E = t(299679),
    M = t(33190),
    B = t(332772),
    H = t(594832),
    W = t(862772),
    P = t(310209),
    U = t(944841),
    D = t(734057),
    G = t(309010),
    F = t(954571),
    V = t(427262),
    Q = t(985018);
Q.intl.string(Q.t["7lZ31J"]), Q.intl.string(Q.t.pWG4ze), Q.intl.string(Q.t.SK5rmi), Q.intl.string(Q.t.BCi1gT);
var z = t(652215),
    X = t(518477),
    Y = t(308549);
function $(e) {
    let { title: i, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = e;
    return (0, n.jsxs)("div", {
        className: g()(Y.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: Y.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, n.jsx)(f.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: Y.Rb,
                    children: (0, n.jsx)(b.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: Q.intl.string(Q.t.y6PSA3),
                        onClick: a,
                    }),
                }),
        ],
    });
}
function J(e) {
    let { wishlistInDmLength: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(S.A, { children: Q.intl.string(Q.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: g()(Y.Md, Y.e6),
                children: Array.from({ length: i }, (e, i) => (0, n.jsx)(U.O, {}, `placeholder-${i}`)),
            }),
        ],
    });
}
function K(e) {
    let {
            items: i,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: a,
            onWishlistItemClick: r,
            analyticsLocations: c,
            includedSources: o,
        } = e,
        d = (0, j.bG)([G.A, D.A], () => D.A.getChannel(G.A.getChannelId())),
        u = s.useCallback(() => {
            r?.(), (0, A.closeAllModals)();
        }, [r]);
    return (
        (0, B.T)({ location: "wishlist_banner" }),
        (0, n.jsx)("ul", {
            className: g()(Y.Md, Y.e6),
            children: i.map((e, i) => {
                let { sku: s, source: r } = e;
                return null == s
                    ? null
                    : (0, n.jsx)(
                          "li",
                          {
                              className: Y.XI,
                              children: (0, n.jsx)(E.dB, {
                                  newValue: {
                                      positionInSection: i,
                                      skuId: s.id,
                                      itemSource: r === H.uS.WISHLIST ? "organic" : "recommendation",
                                      productLine: s.productLine,
                                  },
                                  children: (0, n.jsx)(U.A, {
                                      sku: s,
                                      wishlistId: l,
                                      source: r,
                                      wishlistOwner: t,
                                      hasMultipleSources: o.size > 1,
                                      onOpenWishlist: a,
                                      onClick: u,
                                      analyticsLocations: c,
                                      guildId: d?.guild_id,
                                      channelId: d?.id,
                                  }),
                              }),
                          },
                          s.id,
                      );
            }),
        })
    );
}
function Z(e) {
    let {
            giftRecipient: i,
            onWishlistItemClick: t,
            displayProfile: l,
            totalUnownedWishlistItemCount: a,
            displayItems: r,
            fetchState: c,
            defaultWishlistId: o,
            footerNotice: d,
        } = e,
        { analyticsLocations: u } = (0, L.Ay)(w.A.WISHLIST_BANNER),
        h = (0, C.A)(() => (0, x.A)()),
        m = (0, M.H)("wishlist_banner"),
        { theme: p, primaryColor: I, secondaryColor: j } = (0, y.A)({ user: i, displayProfile: l, forceUserTheme: m }),
        { profileThemeStyle: f, profileThemeClassName: b } = (0, R.A)({
            theme: p,
            themeType: null,
            primaryColor: I,
            secondaryColor: j,
            forceUserTheme: m,
        }),
        S = s.useCallback(() => {
            (0, k.openUserProfileModal)({ userId: i.id, tabSection: X.RP.WISHLIST });
        }, [i.id]),
        A = s.useMemo(() => "loading" === c, [c]),
        v = V.Ay.getName(i),
        O = (function (e) {
            let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n, recipientName: l } = e,
                a = (0, s.useMemo)(
                    () =>
                        (function (e) {
                            let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n } = e;
                            return i >= t
                                ? "FULL_WISHLIST"
                                : i > 0
                                  ? "MIXED"
                                  : n.length > 0 &&
                                      n.every((e) => {
                                          let { sku: i, source: t } = e;
                                          return t === H.uS.POPULAR && (0, T.bF)(i);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n }),
                    [i, t, n],
                );
            return (0, s.useMemo)(() => {
                switch (a) {
                    case "FULL_WISHLIST":
                        return { title: Q.intl.formatToPlainString(Q.t["YcL/Vr"], { username: l }), showIcons: !1 };
                    case "MIXED":
                        return { title: Q.intl.formatToPlainString(Q.t.dIDKgi, { username: l }), showIcons: !0 };
                    default:
                        return { title: Q.intl.string(Q.t.BCi1gT), showIcons: !1 };
                }
            }, [a, l]);
        })({ totalUnownedWishlistItemCount: a, wishlistInDmLength: H.pl, displayItems: r, recipientName: v }),
        B = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        W = a > H.pl,
        P = s.useMemo(() => (W ? r.slice(0, H.pl) : r), [r, W]),
        [U, D] = s.useState(!1),
        G = s.useCallback(
            (e) => {
                if (e && !A && r.length > 0) {
                    let e = r.map((e) => {
                        let { sku: i } = e;
                        return i.id;
                    });
                    F.default.track(z.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: u,
                        product_lines: Array.from(
                            new Set(
                                r.map((e) => {
                                    let { sku: i } = e;
                                    return i.productLine;
                                }),
                            ),
                        ),
                    }),
                        D(!0);
                }
            },
            [A, r, i.id, u],
        ),
        Z = (0, _.K)(G, void 0, !A && !U),
        q = s.useMemo(
            () =>
                new Set(
                    r.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [r],
        );
    return "error" === c
        ? null
        : (0, n.jsx)("div", {
              className: Y.v8,
              children: (0, n.jsxs)("div", {
                  ref: Z,
                  className: g()(Y.A1, b),
                  style: f,
                  children: [
                      null != B && (0, n.jsx)("div", { className: Y.iL, style: { backgroundImage: `url(${B})` } }),
                      (0, n.jsx)(N.N, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)($, {
                                          title: O.title,
                                          subtitle: O.subtitle,
                                          showViewAll: a > H.pl,
                                          themeClass: e,
                                          onOpenWishlist: S,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: e,
                                          children:
                                              A || 0 === r.length
                                                  ? (0, n.jsx)(J, { wishlistInDmLength: H.pl })
                                                  : (0, n.jsx)(E.dB, {
                                                        newValue: {
                                                            impressionSessionId: h,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: i.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)(K, {
                                                            items: P,
                                                            giftRecipient: i,
                                                            defaultWishlistId: o,
                                                            onOpenWishlist: S,
                                                            onWishlistItemClick: t,
                                                            analyticsLocations: u,
                                                            includedSources: q,
                                                        }),
                                                    }),
                                      }),
                                      null != d && !A && r.length > 0
                                          ? (0, n.jsx)("div", { className: e, children: d })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function q(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        l = (0, O.Ay)(i?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, W.rg)({ userId: i.id, numItems: H.pl, source: H.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                I()(
                    a.map((e) => {
                        let t = null != c[e.id] && c[e.id][i.id] === P.j.WISHLIST ? H.uS.WISHLIST : H.uS.POPULAR;
                        return null != e ? { sku: e, source: t } : null;
                    }),
                ),
            [a, i.id, c],
        ),
        h = s.useMemo(
            () =>
                u.some((e) => {
                    let { sku: i } = e;
                    return (0, T.bF)(i);
                }),
            [u],
        );
    return (0, n.jsx)(Z, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: r,
        fetchState: o,
        displayItems: u,
        defaultWishlistId: d,
        footerNotice: h
            ? (0, n.jsx)(v.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: Y.jG })
            : null,
    });
}
var ee = t(788868),
    ei = t(595151);
let et = function (e) {
    let { onSelectSku: i, priceOptions: t, giftRecipient: s, onWishlistItemClick: l } = e,
        { claimableRewards: a } = (0, c.Pv)(),
        r = null != a && a.length > 0;
    return (0, n.jsxs)("div", {
        className: ei.H,
        children: [
            (0, n.jsxs)("div", {
                className: ei.u,
                children: [
                    (0, n.jsx)(h.D3, {
                        onClick: () => i(ee.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: r,
                    }),
                    (0, n.jsx)(h.Ls, {
                        onClick: () => i(ee.pe.TIER_0),
                        isGift: !0,
                        priceOptions: t,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(u.A, {}),
            (0, n.jsx)(q, { giftRecipient: s, onWishlistItemClick: l }),
        ],
    });
};
var en = t(116550);
function es(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: c,
            analyticsLocations: u,
            analyticsLocation: h,
            analyticsObject: m,
            giftMessage: g,
        } = e,
        { priceOptions: p } = (0, o.P5)(),
        I = s.useCallback(
            (e) => {
                (0, d.A)({
                    isGift: !0,
                    giftRecipient: i,
                    subscriptionTier: e,
                    giftingOrigin: ee.vQ.DM_CHANNEL,
                    analyticsLocations: u ?? [],
                    analyticsLocation: h,
                    analyticsObject: m ?? {
                        page: z.liQ.DM_CHANNEL,
                        section: z.JJy.CHANNEL_TEXT_AREA,
                        object: z.ZSU.BUTTON_ICON,
                        objectType: z.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: g,
                }),
                    t();
            },
            [i, u, h, m, g, t],
        );
    return (0, n.jsxs)(l.EO, {
        transitionState: c,
        size: l.rI.DYNAMIC,
        className: en.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: en.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(a.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(r.D, { variant: "heading-md/semibold", children: Q.intl.string(Q.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: en.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(et, { onSelectSku: I, giftRecipient: i, priceOptions: p, onWishlistItemClick: t }),
            }),
        ],
    });
}
function el(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: r,
        giftMessage: d,
    } = e;
    return (0, n.jsx)(o.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: ee.T7,
        isGift: !0,
        children: (0, n.jsx)(c.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: ee.vQ.DM_CHANNEL,
            children: (0, n.jsx)(es, {
                giftRecipient: i,
                onClose: t,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: r,
                giftMessage: d,
            }),
        }),
    });
}
