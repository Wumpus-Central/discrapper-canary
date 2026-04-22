t.d(i, { s: () => K });
var n = t(627968),
    s = t(64700),
    l = t(503698),
    r = t.n(l),
    a = t(791282),
    c = t.n(a),
    o = t(835245),
    d = t(172218),
    u = t(311907),
    h = t(534514),
    m = t(834730),
    g = t(123292),
    p = t(140735),
    I = t(192308),
    x = t(43990),
    _ = t(444927),
    f = t(793574),
    j = t(688810),
    b = t(871123),
    S = t(84511),
    A = t(950191),
    C = t(101928),
    N = t(195898),
    L = t(657331),
    w = t(299679),
    T = t(810809),
    v = t(332772),
    k = t(594832),
    O = t(631784),
    y = t(872472),
    E = t(721932),
    R = t(310209),
    M = t(878244),
    B = t(734057),
    H = t(309010),
    P = t(954571),
    U = t(427262),
    W = t(447719),
    D = t(652215),
    G = t(518477),
    F = t(985018),
    V = t(308549);
function Q(e) {
    let { title: i, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = e;
    return (0, n.jsxs)("div", {
        className: r()(V.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: V.hy,
                children: [
                    (0, n.jsx)(h.D, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, n.jsx)(m.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: V.Rb,
                    children: (0, n.jsx)(g.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: F.intl.string(F.t.y6PSA3),
                        onClick: a,
                    }),
                }),
        ],
    });
}
function z(e) {
    let { wishlistInDmLength: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(p.A, { children: F.intl.string(F.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: r()(V.Md, V.e6),
                children: Array.from({ length: i }, (e, i) => (0, n.jsx)(M.O, {}, `placeholder-${i}`)),
            }),
        ],
    });
}
function X(e) {
    let {
            items: i,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: a,
            onWishlistItemClick: c,
            analyticsLocations: o,
            includedSources: d,
        } = e,
        h = (0, u.bG)([H.A, B.A], () => B.A.getChannel(H.A.getChannelId())),
        m = s.useCallback(() => {
            c?.(), (0, I.closeAllModals)();
        }, [c]);
    return (
        (0, v.T)({ location: "wishlist_banner" }),
        (0, n.jsx)("ul", {
            className: r()(V.Md, V.e6),
            children: i.map((e, i) => {
                let { item: s, source: r } = e;
                return null == s || null == s.sku
                    ? null
                    : (0, n.jsx)(
                          "li",
                          {
                              className: V.XI,
                              children: (0, n.jsx)(w.dB, {
                                  newValue: {
                                      positionInSection: i,
                                      skuId: s.skuId,
                                      itemSource: r === k.uS.WISHLIST ? "organic" : "recommendation",
                                      productLine: s.skuProductLine,
                                  },
                                  children: (0, n.jsx)(M.A, {
                                      sku: s.sku,
                                      wishlistId: l,
                                      source: r,
                                      wishlistOwner: t,
                                      hasMultipleSources: d.size > 1,
                                      onOpenWishlist: a,
                                      onClick: m,
                                      analyticsLocations: o,
                                      guildId: h?.guild_id,
                                      channelId: h?.id,
                                  }),
                              }),
                          },
                          s.skuId,
                      );
            }),
        })
    );
}
function $(e) {
    let {
            giftRecipient: i,
            onWishlistItemClick: t,
            displayProfile: l,
            totalUnownedWishlistItemCount: a,
            displayItems: c,
            fetchState: u,
            defaultWishlistId: h,
            footerNotice: m,
        } = e,
        { analyticsLocations: g } = (0, j.Ay)(f.A.WISHLIST_BANNER),
        p = (0, _.A)(() => (0, o.A)()),
        I = (0, T.H)("wishlist_banner"),
        { theme: b, primaryColor: S, secondaryColor: A } = (0, C.A)({ user: i, displayProfile: l, forceUserTheme: I }),
        { profileThemeStyle: v, profileThemeClassName: O } = (0, N.A)({
            theme: b,
            themeType: null,
            primaryColor: S,
            secondaryColor: A,
            forceUserTheme: I,
        }),
        y = s.useCallback(() => {
            (0, L.openUserProfileModal)({ userId: i.id, tabSection: G.RP.WISHLIST });
        }, [i.id]),
        E = s.useMemo(() => "loading" === u, [u]),
        R = U.Ay.getName(i),
        M = (0, W.l7)({
            totalUnownedWishlistItemCount: a,
            wishlistInDmLength: k.pl,
            displayItems: c,
            recipientName: R,
        }),
        B = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        H = a > k.pl,
        F = s.useMemo(() => (H ? c.slice(0, k.pl) : c), [c, H]),
        [$, K] = s.useState(!1),
        Y = s.useCallback(
            (e) => {
                if (e && !E && c.length > 0) {
                    let e = c.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    P.default.track(D.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: g,
                        product_lines: Array.from(
                            new Set(
                                c.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        K(!0);
                }
            },
            [E, c, i.id, g],
        ),
        J = (0, d.K)(Y, void 0, !E && !$),
        Z = s.useMemo(
            () =>
                new Set(
                    c.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [c],
        );
    return "error" === u
        ? null
        : (0, n.jsx)("div", {
              className: V.v8,
              children: (0, n.jsxs)("div", {
                  ref: J,
                  className: r()(V.A1, O),
                  style: v,
                  children: [
                      null != B && (0, n.jsx)("div", { className: V.iL, style: { backgroundImage: `url(${B})` } }),
                      (0, n.jsx)(x.N, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(Q, {
                                          title: M.title,
                                          subtitle: M.subtitle,
                                          showViewAll: a > k.pl,
                                          themeClass: e,
                                          onOpenWishlist: y,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: e,
                                          children:
                                              E || 0 === c.length
                                                  ? (0, n.jsx)(z, { wishlistInDmLength: k.pl })
                                                  : (0, n.jsx)(w.dB, {
                                                        newValue: {
                                                            impressionSessionId: p,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: i.id,
                                                            wishlistId: h,
                                                            analyticsLocations: g,
                                                        },
                                                        children: (0, n.jsx)(X, {
                                                            items: F,
                                                            giftRecipient: i,
                                                            defaultWishlistId: h,
                                                            onOpenWishlist: y,
                                                            onWishlistItemClick: t,
                                                            analyticsLocations: g,
                                                            includedSources: Z,
                                                        }),
                                                    }),
                                      }),
                                      null != m && !E && c.length > 0
                                          ? (0, n.jsx)("div", { className: e, children: m })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function K(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        l = (0, A.Ay)(i?.id),
        {
            wishlistAndRecommendations: r,
            totalUnownedWishlistItemCount: a,
            skusToUserAndReason: o,
            status: d,
            defaultWishlistId: u,
        } = (0, O.rg)({ userId: i.id, numItems: k.pl, source: k.B5.USER_PROFILE }),
        h = s.useMemo(
            () =>
                c()(
                    r.map((e) => {
                        let t = e.productLine === D.EZt.COLLECTIBLES ? y.A.fromSKU(e) : E.A.fromSKU(e),
                            n = null != o[e.id] && o[e.id][i.id] === R.j.WISHLIST ? k.uS.WISHLIST : k.uS.POPULAR;
                        return null != t ? { item: t, source: n } : null;
                    }),
                ),
            [r, i.id, o],
        ),
        m = s.useMemo(
            () =>
                h.some((e) => {
                    let { item: i } = e;
                    return (0, b.bF)(i.sku);
                }),
            [h],
        );
    return (0, n.jsx)($, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: a,
        fetchState: d,
        displayItems: h,
        defaultWishlistId: u,
        footerNotice: m
            ? (0, n.jsx)(S.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: V.jG })
            : null,
    });
}
