"use strict";
i.d(t, { A: () => Z, s: () => X });
var n = i(627968),
    s = i(64700),
    r = i(503698),
    l = i.n(r),
    a = i(172218),
    o = i(459192),
    d = i(990078),
    u = i(397927),
    c = i(793574),
    m = i(688810),
    h = i(245068),
    _ = i(84511),
    f = i(950191),
    p = i(101928),
    I = i(195898),
    g = i(657331),
    S = i(804870),
    C = i(353157),
    A = i(18983),
    w = i(798048),
    x = i(834796),
    b = i(178213),
    j = i(594832),
    T = i(996353),
    O = i(631784),
    L = i(872472),
    k = i(721932),
    y = i(310209),
    M = i(878244),
    E = i(46537),
    v = i(954571),
    R = i(427262),
    H = i(788868),
    N = i(652215),
    P = i(518477),
    W = i(985018),
    B = i(195416);
let G = {
    FULL_WISHLIST: {
        title: W.intl.string(W.t["7lZ31J"]),
        getSubtitle: (e) => W.intl.formatToPlainString(W.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: W.intl.string(W.t.SK5rmi),
        getSubtitle: (e) => W.intl.formatToPlainString(W.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: W.intl.string(W.t.SK5rmi),
        getSubtitle: (e) => W.intl.formatToPlainString(W.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: W.intl.string(W.t.BCi1gT),
        getSubtitle: (e) => W.intl.formatToPlainString(W.t.BjEX38, { username: e }),
        showIcons: !1,
    },
};
function U(e) {
    let { title: t, subtitle: i, themeClass: s, renderOfferNotice: r } = e;
    return (0, n.jsxs)("div", {
        className: l()(B.$R, s),
        children: [
            (0, n.jsxs)("div", {
                className: B.hy,
                children: [
                    (0, n.jsx)(u.Heading, { variant: "heading-lg/bold", children: t }),
                    (0, n.jsx)(u.Text, { variant: "text-sm/medium", children: i }),
                ],
            }),
            r(),
        ],
    });
}
function F() {
    let e = (0, b.G)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(u.AC4, { children: W.intl.string(W.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: l()(B.Md, { [B.e6]: e }),
                children: Array.from(
                    { length: (0, j.Yu)(e) },
                    e
                        ? (e, t) => (0, n.jsx)(M.O, {}, `placeholder-${t}`)
                        : (e, t) => (0, n.jsx)(x.A, { cardSize: w.Y.SMALL }, `placeholder-${t}`),
                ),
            }),
        ],
    });
}
function D(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: s, onOpenWishlist: r } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: B.XI,
                  children: (0, n.jsx)(S.uz, {
                      item: t.item,
                      remainingCount: i,
                      onClick: r,
                      cardSize: w.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, L.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: B.Tz,
                                      children: (0, n.jsx)(h.X, { product: i, isHighlighted: e, user: s }),
                                  });
                              }
                              return (0, n.jsx)(C.A, {
                                  item: t.item,
                                  profileOwner: s,
                                  isHighlighted: e,
                                  cardSize: w.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              `overflow-${t.item.skuId}`,
          );
}
function Y(e) {
    let {
            items: t,
            hasOverflow: i,
            overflowItem: r,
            overflowCount: a,
            showIcons: u,
            giftRecipient: c,
            defaultWishlistId: m,
            onOpenWishlist: h,
            onWishlistItemClick: _,
            tooltipConfigs: f,
            analyticsLocations: p,
            totalUnownedWishlistItems: I,
            includedTypes: g,
            includedSources: S,
        } = e,
        C = (0, b.G)("wishlist_banner"),
        x = s.useMemo(() => [...t, r].filter((e) => null != e), [t, r]);
    return (0, n.jsx)("ul", {
        className: l()(B.Md, { [B.e6]: C }),
        children: C
            ? x.map((e, t) => {
                  let { item: i, source: s } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: B.XI,
                                children: (0, n.jsx)(M.A, {
                                    index: t,
                                    sku: i.sku,
                                    wishlistId: m,
                                    source: s,
                                    wishlistOwner: c,
                                    hasMultipleTypes: g.size > 1,
                                    hasMultipleSources: S.size > 1,
                                    onOpenWishlist: h,
                                    onClick: _,
                                    analyticsLocations: p,
                                    totalUnownedWishlistItems: I,
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
                                  className: B.XI,
                                  children: ((e, t) => {
                                      let { item: i, source: s } = e,
                                          r = f[t],
                                          l = (0, n.jsx)(A.A, {
                                              item: i,
                                              profileOwner: c,
                                              wishlistId: m,
                                              isOwner: !1,
                                              cardSize: w.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: H.vQ.DM_CHANNEL_WISHLIST,
                                              source: s,
                                              showIcons: u,
                                              onWishlistItemClick: _,
                                              analyticsLocations: p,
                                          });
                                      return r.shouldShow
                                          ? null != r.title && null == r.body && null == r.renderIcon
                                              ? (0, n.jsx)(d.m, {
                                                    text: r.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: j.Zh,
                                                    children: l,
                                                })
                                              : (0, n.jsx)(o.u, {
                                                    title: r.title,
                                                    body: r.body ?? "",
                                                    asset: r.renderIcon?.(i),
                                                    assetSize: j.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: j.Zh,
                                                    children: l,
                                                })
                                          : l;
                                  })({ item: i, source: s }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)(D, { lastItem: r, remainingCount: a, giftRecipient: c, onOpenWishlist: h }),
                  ],
              }),
    });
}
function z(e) {
    let {
            giftRecipient: t,
            onWishlistItemClick: i,
            displayProfile: r,
            totalUnownedWishlistItemCount: o,
            displayItems: d,
            fetchState: h,
            defaultWishlistId: f,
        } = e,
        { analyticsLocations: S } = (0, m.Ay)(c.A.WISHLIST_BANNER),
        C = (0, b.G)("wishlist_banner"),
        A = (0, j.Yu)(C),
        { theme: w, primaryColor: x, secondaryColor: T } = (0, p.A)({ user: t, displayProfile: r }),
        { profileThemeStyle: O, profileThemeClassName: L } = (0, I.A)({
            theme: w,
            themeType: null,
            primaryColor: x,
            secondaryColor: T,
        }),
        y = s.useCallback(() => {
            (0, g.openUserProfileModal)({ userId: t.id, tabSection: P.RP.WISHLIST });
        }, [t.id]),
        M = s.useMemo(() => "loading" === h, [h]),
        H = s.useMemo(
            () =>
                o >= A
                    ? "FULL_WISHLIST"
                    : o > 0
                      ? "MIXED"
                      : d.length > 0 &&
                          d.every((e) => {
                              let { item: t, source: i } = e;
                              return i === j.uS.POPULAR && (0, k.$)(t);
                          })
                        ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                        : "SHOP_ONLY",
            [o, A, d],
        ),
        W = R.Ay.getName(t),
        D = G[H],
        z = r?.getBannerURL({ canAnimate: !1, size: 713 }),
        X = o > A,
        Z = s.useMemo(() => (X ? d.slice(0, A - 1) : d), [d, X, A]),
        q = (0, E.b)(Z, t),
        Q = X ? d[A - 1] : null,
        V = o - A + 1,
        [$, J] = s.useState(!1),
        K = s.useCallback(
            (e) => {
                if (e && !M && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    v.default.track(N.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
                        J(!0);
                }
            },
            [M, d, t.id, S],
        ),
        ee = (0, a.K)(K, void 0, !M && !$),
        { includedTypes: et, includedSources: ei } = s.useMemo(
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
        en = s.useCallback(
            () =>
                et.has(N.EZt.SOCIAL_LAYER_GAME_ITEM)
                    ? (0, n.jsx)("div", { children: (0, n.jsx)(_.A, { location: "wishlist_banner" }) })
                    : null,
            [et],
        );
    return "error" === h
        ? null
        : (0, n.jsxs)("div", {
              ref: ee,
              className: l()(B.A1, L),
              style: O,
              children: [
                  null != z && (0, n.jsx)("div", { className: B.iL, style: { backgroundImage: `url(${z})` } }),
                  (0, n.jsx)(u.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(U, {
                                      title: D.title,
                                      subtitle: D.getSubtitle(W),
                                      themeClass: e,
                                      renderOfferNotice: en,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          M || 0 === d.length
                                              ? (0, n.jsx)(F, {})
                                              : (0, n.jsx)(Y, {
                                                    items: Z,
                                                    hasOverflow: X,
                                                    overflowItem: Q,
                                                    overflowCount: V,
                                                    showIcons: D.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: f,
                                                    onOpenWishlist: y,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: q,
                                                    analyticsLocations: S,
                                                    totalUnownedWishlistItems: o,
                                                    includedTypes: et,
                                                    includedSources: ei,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
}
function X(e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        r = (0, b.G)("wishlist_banner_new_recommendations"),
        l = (0, f.Ay)(t?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: o,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: c,
        } = (0, O.r)({
            userId: t.id,
            numItems: (0, j.Yu)(r),
            source: j.B5.USER_PROFILE,
            location: "Wishlist Banner New Recommendations",
        }),
        m = s.useMemo(
            () =>
                a
                    .map((e) => ({
                        item: e.productLine === N.EZt.COLLECTIBLES ? L.A.fromSKU(e) : k.A.fromSKU(e),
                        source: null != d[e.id] && d[e.id][t.id] === y.j.WISHLIST ? j.uS.WISHLIST : j.uS.POPULAR,
                    }))
                    .filter((e) => {
                        let { item: t } = e;
                        return null != t;
                    }),
            [a, t.id, d],
        );
    return (0, n.jsx)(z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: l,
        totalUnownedWishlistItemCount: o,
        fetchState: u,
        displayItems: m,
        defaultWishlistId: c,
    });
}
let Z = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, b.G)("wishlist_banner"),
        r = (0, f.Ay)(t?.id),
        {
            displayItems: l,
            totalUnownedWishlistItemCount: a,
            fetchState: o,
            defaultWishlistId: d,
        } = (0, T.A)({ user: t, numItems: (0, j.Yu)(s), location: "Wishlist Banner" });
    return (0, n.jsx)(z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: r,
        totalUnownedWishlistItemCount: a,
        fetchState: o.status,
        displayItems: l,
        defaultWishlistId: d,
    });
};
