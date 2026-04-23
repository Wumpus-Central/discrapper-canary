t.d(i, { default: () => er });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    r = t(331322),
    a = t(534514),
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
    C = t(444927),
    N = t(793574),
    L = t(688810),
    w = t(871123),
    T = t(84511),
    v = t(999291),
    k = t(101928),
    O = t(920601),
    y = t(975732),
    E = t(299679),
    R = t(33190),
    M = t(332772),
    B = t(594832),
    H = t(862772),
    P = t(872472),
    U = t(721932),
    W = t(310209),
    D = t(944841),
    G = t(734057),
    F = t(309010),
    V = t(954571),
    Q = t(427262),
    z = t(985018);
z.intl.string(z.t["7lZ31J"]), z.intl.string(z.t.pWG4ze), z.intl.string(z.t.SK5rmi), z.intl.string(z.t.BCi1gT);
var X = t(652215),
    $ = t(518477),
    K = t(308549);
function Y(e) {
    let { title: i, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: r } = e;
    return (0, n.jsxs)("div", {
        className: m()(K.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: K.hy,
                children: [
                    (0, n.jsx)(a.D, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, n.jsx)(f.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: K.Rb,
                    children: (0, n.jsx)(j.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: z.intl.string(z.t.y6PSA3),
                        onClick: r,
                    }),
                }),
        ],
    });
}
function J(e) {
    let { wishlistInDmLength: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(b.A, { children: z.intl.string(z.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: m()(K.Md, K.e6),
                children: Array.from({ length: i }, (e, i) => (0, n.jsx)(D.O, {}, `placeholder-${i}`)),
            }),
        ],
    });
}
function Z(e) {
    let {
            items: i,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: r,
            onWishlistItemClick: a,
            analyticsLocations: c,
            includedSources: o,
        } = e,
        d = (0, _.bG)([F.A, G.A], () => G.A.getChannel(F.A.getChannelId())),
        u = s.useCallback(() => {
            a?.(), (0, S.closeAllModals)();
        }, [a]);
    return (
        (0, M.T)({ location: "wishlist_banner" }),
        (0, n.jsx)("ul", {
            className: m()(K.Md, K.e6),
            children: i.map((e, i) => {
                let { item: s, source: a } = e;
                return null == s || null == s.sku
                    ? null
                    : (0, n.jsx)(
                          "li",
                          {
                              className: K.XI,
                              children: (0, n.jsx)(E.dB, {
                                  newValue: {
                                      positionInSection: i,
                                      skuId: s.skuId,
                                      itemSource: a === B.uS.WISHLIST ? "organic" : "recommendation",
                                      productLine: s.skuProductLine,
                                  },
                                  children: (0, n.jsx)(D.A, {
                                      sku: s.sku,
                                      wishlistId: l,
                                      source: a,
                                      wishlistOwner: t,
                                      hasMultipleSources: o.size > 1,
                                      onOpenWishlist: r,
                                      onClick: u,
                                      analyticsLocations: c,
                                      guildId: d?.guild_id,
                                      channelId: d?.id,
                                  }),
                              }),
                          },
                          s.skuId,
                      );
            }),
        })
    );
}
function q(e) {
    let {
            giftRecipient: i,
            onWishlistItemClick: t,
            displayProfile: l,
            totalUnownedWishlistItemCount: r,
            displayItems: a,
            fetchState: c,
            defaultWishlistId: o,
            footerNotice: d,
        } = e,
        { analyticsLocations: u } = (0, L.Ay)(N.A.WISHLIST_BANNER),
        h = (0, C.A)(() => (0, I.A)()),
        g = (0, R.H)("wishlist_banner"),
        { theme: p, primaryColor: _, secondaryColor: f } = (0, k.A)({ user: i, displayProfile: l, forceUserTheme: g }),
        { profileThemeStyle: j, profileThemeClassName: b } = (0, O.A)({
            theme: p,
            themeType: null,
            primaryColor: _,
            secondaryColor: f,
            forceUserTheme: g,
        }),
        S = s.useCallback(() => {
            (0, y.openUserProfileModal)({ userId: i.id, tabSection: $.RP.WISHLIST });
        }, [i.id]),
        w = s.useMemo(() => "loading" === c, [c]),
        T = Q.Ay.getName(i),
        v = (function (e) {
            let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n, recipientName: l } = e,
                r = (0, s.useMemo)(
                    () =>
                        (function (e) {
                            let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n } = e;
                            return i >= t
                                ? "FULL_WISHLIST"
                                : i > 0
                                  ? "MIXED"
                                  : n.length > 0 &&
                                      n.every((e) => {
                                          let { item: i, source: t } = e;
                                          return t === B.uS.POPULAR && (0, U.$)(i);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n }),
                    [i, t, n],
                );
            return (0, s.useMemo)(() => {
                switch (r) {
                    case "FULL_WISHLIST":
                        return { title: z.intl.formatToPlainString(z.t["YcL/Vr"], { username: l }), showIcons: !1 };
                    case "MIXED":
                        return { title: z.intl.formatToPlainString(z.t.dIDKgi, { username: l }), showIcons: !0 };
                    default:
                        return { title: z.intl.string(z.t.BCi1gT), showIcons: !1 };
                }
            }, [r, l]);
        })({ totalUnownedWishlistItemCount: r, wishlistInDmLength: B.pl, displayItems: a, recipientName: T }),
        M = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        H = r > B.pl,
        P = s.useMemo(() => (H ? a.slice(0, B.pl) : a), [a, H]),
        [W, D] = s.useState(!1),
        G = s.useCallback(
            (e) => {
                if (e && !w && a.length > 0) {
                    let e = a.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    V.default.track(X.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: u,
                        product_lines: Array.from(
                            new Set(
                                a.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        D(!0);
                }
            },
            [w, a, i.id, u],
        ),
        F = (0, x.K)(G, void 0, !w && !W),
        q = s.useMemo(
            () =>
                new Set(
                    a.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [a],
        );
    return "error" === c
        ? null
        : (0, n.jsx)("div", {
              className: K.v8,
              children: (0, n.jsxs)("div", {
                  ref: F,
                  className: m()(K.A1, b),
                  style: j,
                  children: [
                      null != M && (0, n.jsx)("div", { className: K.iL, style: { backgroundImage: `url(${M})` } }),
                      (0, n.jsx)(A.N, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(Y, {
                                          title: v.title,
                                          subtitle: v.subtitle,
                                          showViewAll: r > B.pl,
                                          themeClass: e,
                                          onOpenWishlist: S,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: e,
                                          children:
                                              w || 0 === a.length
                                                  ? (0, n.jsx)(J, { wishlistInDmLength: B.pl })
                                                  : (0, n.jsx)(E.dB, {
                                                        newValue: {
                                                            impressionSessionId: h,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: i.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)(Z, {
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
                                      null != d && !w && a.length > 0
                                          ? (0, n.jsx)("div", { className: e, children: d })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function ee(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        l = (0, v.Ay)(i?.id),
        {
            wishlistAndRecommendations: r,
            totalUnownedWishlistItemCount: a,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, H.rg)({ userId: i.id, numItems: B.pl, source: B.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                p()(
                    r.map((e) => {
                        let t = e.productLine === X.EZt.COLLECTIBLES ? P.A.fromSKU(e) : U.A.fromSKU(e),
                            n = null != c[e.id] && c[e.id][i.id] === W.j.WISHLIST ? B.uS.WISHLIST : B.uS.POPULAR;
                        return null != t ? { item: t, source: n } : null;
                    }),
                ),
            [r, i.id, c],
        ),
        h = s.useMemo(
            () =>
                u.some((e) => {
                    let { item: i } = e;
                    return (0, w.bF)(i.sku);
                }),
            [u],
        );
    return (0, n.jsx)(q, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: a,
        fetchState: o,
        displayItems: u,
        defaultWishlistId: d,
        footerNotice: h
            ? (0, n.jsx)(T.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: K.jG })
            : null,
    });
}
var ei = t(788868),
    et = t(595151);
let en = function (e) {
    let { onSelectSku: i, priceOptions: t, giftRecipient: s, onWishlistItemClick: l } = e,
        { claimableRewards: r } = (0, c.Pv)(),
        a = null != r && r.length > 0;
    return (0, n.jsxs)("div", {
        className: et.H,
        children: [
            (0, n.jsxs)("div", {
                className: et.u,
                children: [
                    (0, n.jsx)(u.D3, {
                        onClick: () => i(ei.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: a,
                    }),
                    (0, n.jsx)(u.Ls, {
                        onClick: () => i(ei.pe.TIER_0),
                        isGift: !0,
                        priceOptions: t,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(ee, { giftRecipient: s, onWishlistItemClick: l }),
        ],
    });
};
var es = t(116550);
function el(e) {
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
                    giftingOrigin: ei.vQ.DM_CHANNEL,
                    analyticsLocations: u ?? [],
                    analyticsLocation: h,
                    analyticsObject: m ?? {
                        page: X.liQ.DM_CHANNEL,
                        section: X.JJy.CHANNEL_TEXT_AREA,
                        object: X.ZSU.BUTTON_ICON,
                        objectType: X.AnalyticsObjectTypes.GIFT,
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
        className: es.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: es.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(r.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(a.D, { variant: "heading-md/semibold", children: z.intl.string(z.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: es.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(en, { onSelectSku: I, giftRecipient: i, priceOptions: p, onWishlistItemClick: t }),
            }),
        ],
    });
}
function er(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: r,
        analyticsObject: a,
        giftMessage: d,
    } = e;
    return (0, n.jsx)(o.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: ei.T7,
        isGift: !0,
        children: (0, n.jsx)(c.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: ei.vQ.DM_CHANNEL,
            children: (0, n.jsx)(el, {
                giftRecipient: i,
                onClose: t,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: r,
                analyticsObject: a,
                giftMessage: d,
            }),
        }),
    });
}
