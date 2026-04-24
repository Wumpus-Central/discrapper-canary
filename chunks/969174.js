t.d(i, { default: () => es });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    a = t(331322),
    r = t(534514),
    c = t(937008),
    o = t(156312),
    d = t(532794),
    u = t(672525),
    h = t(503698),
    m = t.n(h),
    g = t(791282),
    p = t.n(g),
    I = t(132500),
    x = t(172218),
    _ = t(17928),
    f = t(834730),
    j = t(123292),
    b = t(140735),
    S = t(192308),
    A = t(43990),
    N = t(444927),
    C = t(793574),
    w = t(688810),
    L = t(871123),
    T = t(84511),
    v = t(999291),
    O = t(101928),
    y = t(920601),
    R = t(975732),
    k = t(299679),
    E = t(33190),
    M = t(332772),
    B = t(594832),
    H = t(862772),
    W = t(310209),
    P = t(944841),
    U = t(734057),
    D = t(309010),
    G = t(954571),
    F = t(427262),
    V = t(985018);
V.intl.string(V.t["7lZ31J"]), V.intl.string(V.t.pWG4ze), V.intl.string(V.t.SK5rmi), V.intl.string(V.t.BCi1gT);
var Q = t(652215),
    z = t(518477),
    X = t(308549);
function Y(e) {
    let { title: i, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = e;
    return (0, n.jsxs)("div", {
        className: m()(X.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: X.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, n.jsx)(f.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: X.Rb,
                    children: (0, n.jsx)(j.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: V.intl.string(V.t.y6PSA3),
                        onClick: a,
                    }),
                }),
        ],
    });
}
function $(e) {
    let { wishlistInDmLength: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(b.A, { children: V.intl.string(V.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: m()(X.Md, X.e6),
                children: Array.from({ length: i }, (e, i) => (0, n.jsx)(P.O, {}, `placeholder-${i}`)),
            }),
        ],
    });
}
function J(e) {
    let {
            items: i,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: a,
            onWishlistItemClick: r,
            analyticsLocations: c,
            includedSources: o,
        } = e,
        d = (0, _.bG)([D.A, U.A], () => U.A.getChannel(D.A.getChannelId())),
        u = s.useCallback(() => {
            r?.(), (0, S.closeAllModals)();
        }, [r]);
    return (
        (0, M.T)({ location: "wishlist_banner" }),
        (0, n.jsx)("ul", {
            className: m()(X.Md, X.e6),
            children: i.map((e, i) => {
                let { sku: s, source: r } = e;
                return null == s
                    ? null
                    : (0, n.jsx)(
                          "li",
                          {
                              className: X.XI,
                              children: (0, n.jsx)(k.dB, {
                                  newValue: {
                                      positionInSection: i,
                                      skuId: s.id,
                                      itemSource: r === B.uS.WISHLIST ? "organic" : "recommendation",
                                      productLine: s.productLine,
                                  },
                                  children: (0, n.jsx)(P.A, {
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
function K(e) {
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
        { analyticsLocations: u } = (0, w.Ay)(C.A.WISHLIST_BANNER),
        h = (0, N.A)(() => (0, I.A)()),
        g = (0, E.H)("wishlist_banner"),
        { theme: p, primaryColor: _, secondaryColor: f } = (0, O.A)({ user: i, displayProfile: l, forceUserTheme: g }),
        { profileThemeStyle: j, profileThemeClassName: b } = (0, y.A)({
            theme: p,
            themeType: null,
            primaryColor: _,
            secondaryColor: f,
            forceUserTheme: g,
        }),
        S = s.useCallback(() => {
            (0, R.openUserProfileModal)({ userId: i.id, tabSection: z.RP.WISHLIST });
        }, [i.id]),
        T = s.useMemo(() => "loading" === c, [c]),
        v = F.Ay.getName(i),
        M = (function (e) {
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
                                          return t === B.uS.POPULAR && (0, L.bF)(i);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n }),
                    [i, t, n],
                );
            return (0, s.useMemo)(() => {
                switch (a) {
                    case "FULL_WISHLIST":
                        return { title: V.intl.formatToPlainString(V.t["YcL/Vr"], { username: l }), showIcons: !1 };
                    case "MIXED":
                        return { title: V.intl.formatToPlainString(V.t.dIDKgi, { username: l }), showIcons: !0 };
                    default:
                        return { title: V.intl.string(V.t.BCi1gT), showIcons: !1 };
                }
            }, [a, l]);
        })({ totalUnownedWishlistItemCount: a, wishlistInDmLength: B.pl, displayItems: r, recipientName: v }),
        H = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        W = a > B.pl,
        P = s.useMemo(() => (W ? r.slice(0, B.pl) : r), [r, W]),
        [U, D] = s.useState(!1),
        K = s.useCallback(
            (e) => {
                if (e && !T && r.length > 0) {
                    let e = r.map((e) => {
                        let { sku: i } = e;
                        return i.id;
                    });
                    G.default.track(Q.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
            [T, r, i.id, u],
        ),
        Z = (0, x.K)(K, void 0, !T && !U),
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
              className: X.v8,
              children: (0, n.jsxs)("div", {
                  ref: Z,
                  className: m()(X.A1, b),
                  style: j,
                  children: [
                      null != H && (0, n.jsx)("div", { className: X.iL, style: { backgroundImage: `url(${H})` } }),
                      (0, n.jsx)(A.N, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(Y, {
                                          title: M.title,
                                          subtitle: M.subtitle,
                                          showViewAll: a > B.pl,
                                          themeClass: e,
                                          onOpenWishlist: S,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: e,
                                          children:
                                              T || 0 === r.length
                                                  ? (0, n.jsx)($, { wishlistInDmLength: B.pl })
                                                  : (0, n.jsx)(k.dB, {
                                                        newValue: {
                                                            impressionSessionId: h,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: i.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)(J, {
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
                                      null != d && !T && r.length > 0
                                          ? (0, n.jsx)("div", { className: e, children: d })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function Z(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        l = (0, v.Ay)(i?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, H.rg)({ userId: i.id, numItems: B.pl, source: B.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                p()(
                    a.map((e) => {
                        let t = null != c[e.id] && c[e.id][i.id] === W.j.WISHLIST ? B.uS.WISHLIST : B.uS.POPULAR;
                        return null != e ? { sku: e, source: t } : null;
                    }),
                ),
            [a, i.id, c],
        ),
        h = s.useMemo(
            () =>
                u.some((e) => {
                    let { sku: i } = e;
                    return (0, L.bF)(i);
                }),
            [u],
        );
    return (0, n.jsx)(K, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: r,
        fetchState: o,
        displayItems: u,
        defaultWishlistId: d,
        footerNotice: h
            ? (0, n.jsx)(T.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: X.jG })
            : null,
    });
}
var q = t(788868),
    ee = t(595151);
let ei = function (e) {
    let { onSelectSku: i, priceOptions: t, giftRecipient: s, onWishlistItemClick: l } = e,
        { claimableRewards: a } = (0, c.Pv)(),
        r = null != a && a.length > 0;
    return (0, n.jsxs)("div", {
        className: ee.H,
        children: [
            (0, n.jsxs)("div", {
                className: ee.u,
                children: [
                    (0, n.jsx)(u.D3, {
                        onClick: () => i(q.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: r,
                    }),
                    (0, n.jsx)(u.Ls, {
                        onClick: () => i(q.pe.TIER_0),
                        isGift: !0,
                        priceOptions: t,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(Z, { giftRecipient: s, onWishlistItemClick: l }),
        ],
    });
};
var et = t(116550);
function en(e) {
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
                    giftingOrigin: q.vQ.DM_CHANNEL,
                    analyticsLocations: u ?? [],
                    analyticsLocation: h,
                    analyticsObject: m ?? {
                        page: Q.liQ.DM_CHANNEL,
                        section: Q.JJy.CHANNEL_TEXT_AREA,
                        object: Q.ZSU.BUTTON_ICON,
                        objectType: Q.AnalyticsObjectTypes.GIFT,
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
        className: et.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: et.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(a.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(r.D, { variant: "heading-md/semibold", children: V.intl.string(V.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: et.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(ei, { onSelectSku: I, giftRecipient: i, priceOptions: p, onWishlistItemClick: t }),
            }),
        ],
    });
}
function es(e) {
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
        skuIDs: q.T7,
        isGift: !0,
        children: (0, n.jsx)(c.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: q.vQ.DM_CHANNEL,
            children: (0, n.jsx)(en, {
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
