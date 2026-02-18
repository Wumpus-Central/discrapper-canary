"use strict";
i.d(t, { A: () => q, s: () => z });
var n = i(627968),
    s = i(64700),
    r = i(503698),
    l = i.n(r),
    a = i(172218),
    o = i(459192),
    d = i(990078),
    c = i(397927),
    u = i(793574),
    _ = i(688810),
    m = i(245068),
    I = i(84511),
    f = i(950191),
    p = i(101928),
    g = i(195898),
    h = i(657331),
    S = i(804870),
    A = i(353157),
    T = i(18983),
    b = i(798048),
    L = i(834796),
    C = i(178213),
    E = i(594832),
    O = i(996353),
    N = i(631784),
    x = i(872472),
    R = i(721932),
    w = i(310209),
    M = i(878244),
    y = i(46537),
    j = i(954571),
    k = i(427262),
    G = i(788868),
    H = i(652215),
    v = i(518477),
    U = i(985018),
    P = i(195416);
let W = {
    FULL_WISHLIST: {
        title: U.intl.string(U.t["7lZ31J"]),
        getSubtitle: (e) => U.intl.formatToPlainString(U.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: U.intl.string(U.t.SK5rmi),
        getSubtitle: (e) => U.intl.formatToPlainString(U.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: U.intl.string(U.t.SK5rmi),
        getSubtitle: (e) => U.intl.formatToPlainString(U.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: U.intl.string(U.t.BCi1gT),
        getSubtitle: (e) => U.intl.formatToPlainString(U.t.BjEX38, { username: e }),
        showIcons: !1,
    },
};
function D(e) {
    let { title: t, subtitle: i, themeClass: s, renderOfferNotice: r } = e;
    return (0, n.jsxs)("div", {
        className: l()(P.$R, s),
        children: [
            (0, n.jsxs)("div", {
                className: P.hy,
                children: [
                    (0, n.jsx)(c.Heading, { variant: "heading-lg/bold", children: t }),
                    (0, n.jsx)(c.Text, { variant: "text-sm/medium", children: i }),
                ],
            }),
            r(),
        ],
    });
}
function F() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.AC4, { children: U.intl.string(U.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: P.Md,
                children: Array.from({ length: E.pl }, (e, t) =>
                    (0, n.jsx)(L.A, { cardSize: b.Y.SMALL }, `placeholder-${t}`),
                ),
            }),
        ],
    });
}
function B(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: s, onOpenWishlist: r } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: P.XI,
                  children: (0, n.jsx)(S.uz, {
                      item: t.item,
                      remainingCount: i,
                      onClick: r,
                      cardSize: b.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, x.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: P.Tz,
                                      children: (0, n.jsx)(m.X, { product: i, isHighlighted: e, user: s }),
                                  });
                              }
                              return (0, n.jsx)(A.A, {
                                  item: t.item,
                                  profileOwner: s,
                                  isHighlighted: e,
                                  cardSize: b.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              `overflow-${t.item.skuId}`,
          );
}
function K(e) {
    let {
            items: t,
            hasOverflow: i,
            overflowItem: r,
            overflowCount: l,
            showIcons: a,
            giftRecipient: c,
            defaultWishlistId: u,
            onOpenWishlist: _,
            onWishlistItemClick: m,
            tooltipConfigs: I,
            analyticsLocations: f,
            totalUnownedWishlistItems: p,
            includedTypes: g,
            includedSources: h,
        } = e,
        S = (0, C.G)("wishlist_banner"),
        A = s.useMemo(() => [...t, r].filter((e) => null != e), [t, r]);
    return (0, n.jsx)("ul", {
        className: P.Md,
        children: S
            ? A.map((e, t) => {
                  let { item: i, source: s } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: P.XI,
                                children: (0, n.jsx)(M.A, {
                                    index: t,
                                    sku: i.sku,
                                    wishlistId: u,
                                    source: s,
                                    wishlistOwner: c,
                                    hasMultipleTypes: g.size > 1,
                                    hasMultipleSources: h.size > 1,
                                    onOpenWishlist: _,
                                    onClick: m,
                                    analyticsLocations: f,
                                    totalUnownedWishlistItems: p,
                                }),
                            },
                            i.skuId,
                        );
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      t.map((e, t) => {
                          let { item: i, source: s } = e;
                          return (0, n.jsx)(
                              "li",
                              {
                                  className: P.XI,
                                  children: ((e, t) => {
                                      let { item: i, source: s } = e,
                                          r = I[t],
                                          l = (0, n.jsx)(T.A, {
                                              item: i,
                                              profileOwner: c,
                                              wishlistId: u,
                                              isOwner: !1,
                                              cardSize: b.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: G.vQ.DM_CHANNEL_WISHLIST,
                                              source: s,
                                              showIcons: a,
                                              onWishlistItemClick: m,
                                              analyticsLocations: f,
                                          });
                                      return r.shouldShow
                                          ? null != r.title && null == r.body && null == r.renderIcon
                                              ? (0, n.jsx)(d.m, {
                                                    text: r.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: E.Zh,
                                                    children: l,
                                                })
                                              : (0, n.jsx)(o.u, {
                                                    title: r.title,
                                                    body: r.body ?? "",
                                                    asset: r.renderIcon?.(i),
                                                    assetSize: E.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: E.Zh,
                                                    children: l,
                                                })
                                          : l;
                                  })({ item: i, source: s }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)(B, { lastItem: r, remainingCount: l, giftRecipient: c, onOpenWishlist: _ }),
                  ],
              }),
    });
}
function Y(e) {
    let {
            giftRecipient: t,
            onWishlistItemClick: i,
            displayProfile: r,
            totalUnownedWishlistItemCount: o,
            displayItems: d,
            fetchState: m,
            defaultWishlistId: f,
        } = e,
        { analyticsLocations: S } = (0, _.Ay)(u.A.WISHLIST_BANNER),
        { theme: A, primaryColor: T, secondaryColor: b } = (0, p.A)({ user: t, displayProfile: r }),
        { profileThemeStyle: L, profileThemeClassName: C } = (0, g.A)({
            theme: A,
            themeType: null,
            primaryColor: T,
            secondaryColor: b,
        }),
        O = s.useCallback(() => {
            (0, h.openUserProfileModal)({ userId: t.id, tabSection: v.RP.WISHLIST });
        }, [t.id]),
        N = s.useMemo(() => "loading" === m, [m]),
        x = s.useMemo(
            () =>
                o >= E.pl
                    ? "FULL_WISHLIST"
                    : o > 0
                      ? "MIXED"
                      : d.length > 0 &&
                          d.every((e) => {
                              let { item: t, source: i } = e;
                              return i === E.uS.POPULAR && (0, R.$)(t);
                          })
                        ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                        : "SHOP_ONLY",
            [o, d],
        ),
        w = k.Ay.getName(t),
        M = W[x],
        G = r?.getBannerURL({ canAnimate: !1, size: 713 }),
        U = o > E.pl,
        B = s.useMemo(() => (U ? d.slice(0, E.pl - 1) : d), [d, U]),
        Y = (0, y.b)(B, t),
        z = U ? d[E.pl - 1] : null,
        q = o - E.pl + 1,
        [X, Z] = s.useState(!1),
        Q = s.useCallback(
            (e) => {
                if (e && !N && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    j.default.track(H.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: S,
                        product_lines: Array.from(
                            new Set(
                                d.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        Z(!0);
                }
            },
            [N, d, t.id, S],
        ),
        V = (0, a.K)(Q, void 0, !N && !X),
        { includedTypes: J, includedSources: $ } = s.useMemo(
            () => ({
                includedTypes: new Set(
                    d.map((e) => {
                        let { item: t } = e;
                        return t.skuProductLine;
                    }),
                ),
                includedSources: new Set(
                    d.map((e) => {
                        let { source: t } = e;
                        return t;
                    }),
                ),
            }),
            [d],
        ),
        ee = s.useCallback(
            () =>
                J.has(H.EZt.SOCIAL_LAYER_GAME_ITEM)
                    ? (0, n.jsx)("div", { children: (0, n.jsx)(I.A, { location: "wishlist_banner" }) })
                    : null,
            [J],
        );
    return "error" === m
        ? null
        : (0, n.jsxs)("div", {
              ref: V,
              className: l()(P.A1, C),
              style: L,
              children: [
                  null != G && (0, n.jsx)("div", { className: P.iL, style: { backgroundImage: `url(${G})` } }),
                  (0, n.jsx)(c.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(D, {
                                      title: M.title,
                                      subtitle: M.getSubtitle(w),
                                      themeClass: e,
                                      renderOfferNotice: ee,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          N || 0 === d.length
                                              ? (0, n.jsx)(F, {})
                                              : (0, n.jsx)(K, {
                                                    items: B,
                                                    hasOverflow: U,
                                                    overflowItem: z,
                                                    overflowCount: q,
                                                    showIcons: M.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: f,
                                                    onOpenWishlist: O,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: Y,
                                                    analyticsLocations: S,
                                                    totalUnownedWishlistItems: o,
                                                    includedTypes: J,
                                                    includedSources: $,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
}
function z(e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        r = (0, f.Ay)(t?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: a,
            skusToUserAndReason: o,
            status: d,
            defaultWishlistId: c,
        } = (0, N.r)({
            userId: t.id,
            numItems: E.pl,
            source: E.B5.USER_PROFILE,
            location: "Wishlist Banner New Recommendations",
        }),
        u = s.useMemo(
            () =>
                l
                    .map((e) => ({
                        item: e.productLine === H.EZt.COLLECTIBLES ? x.A.fromSKU(e) : R.A.fromSKU(e),
                        source: null != o[e.id] && o[e.id][t.id] === w.j.WISHLIST ? E.uS.WISHLIST : E.uS.POPULAR,
                    }))
                    .filter((e) => {
                        let { item: t } = e;
                        return null != t;
                    }),
            [l, t.id, o],
        );
    return (0, n.jsx)(Y, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: r,
        totalUnownedWishlistItemCount: a,
        fetchState: d,
        displayItems: u,
        defaultWishlistId: c,
    });
}
let q = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, f.Ay)(t?.id),
        {
            displayItems: r,
            totalUnownedWishlistItemCount: l,
            fetchState: a,
            defaultWishlistId: o,
        } = (0, O.A)({ user: t, numItems: E.pl, location: "Wishlist Banner" });
    return (0, n.jsx)(Y, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: s,
        totalUnownedWishlistItemCount: l,
        fetchState: a.status,
        displayItems: r,
        defaultWishlistId: o,
    });
};
