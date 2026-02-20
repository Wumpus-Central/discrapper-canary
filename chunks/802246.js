i.d(t, { A: () => $, s: () => X });
var n = i(627968),
    s = i(64700),
    r = i(503698),
    l = i.n(r),
    o = i(172218),
    a = i(459192),
    d = i(990078),
    u = i(397927),
    c = i(793574),
    m = i(688810),
    _ = i(245068),
    f = i(84511),
    h = i(950191),
    p = i(101928),
    I = i(195898),
    S = i(657331),
    g = i(804870),
    C = i(353157),
    A = i(18983),
    x = i(798048),
    w = i(834796),
    j = i(178213),
    L = i(594832),
    T = i(996353),
    b = i(631784),
    O = i(872472),
    k = i(721932),
    y = i(310209),
    M = i(878244),
    E = i(46537),
    R = i(954571),
    v = i(427262),
    H = i(788868),
    N = i(652215),
    W = i(518477),
    P = i(985018),
    U = i(195416);
let B = {
    FULL_WISHLIST: {
        title: P.intl.string(P.t["7lZ31J"]),
        getSubtitle: (e) => P.intl.formatToPlainString(P.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: P.intl.string(P.t.SK5rmi),
        getSubtitle: (e) => P.intl.formatToPlainString(P.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: P.intl.string(P.t.SK5rmi),
        getSubtitle: (e) => P.intl.formatToPlainString(P.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: P.intl.string(P.t.BCi1gT),
        getSubtitle: (e) => P.intl.formatToPlainString(P.t.BjEX38, { username: e }),
        showIcons: !1,
    },
};
function F(e) {
    let { title: t, subtitle: i, themeClass: s, renderOfferNotice: r } = e;
    return (0, n.jsxs)("div", {
        className: l()(U.$R, s),
        children: [
            (0, n.jsxs)("div", {
                className: U.hy,
                children: [
                    (0, n.jsx)(u.Heading, { variant: "heading-lg/bold", children: t }),
                    (0, n.jsx)(u.Text, { variant: "text-sm/medium", children: i }),
                ],
            }),
            r(),
        ],
    });
}
function G() {
    let e = (0, j.G)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(u.AC4, { children: P.intl.string(P.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: l()(U.Md, { [U.e6]: e }),
                children: Array.from(
                    { length: (0, L.Yu)(e) },
                    e
                        ? (e, t) => (0, n.jsx)(M.O, {}, `placeholder-${t}`)
                        : (e, t) => (0, n.jsx)(w.A, { cardSize: x.Y.SMALL }, `placeholder-${t}`),
                ),
            }),
        ],
    });
}
function Y(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: s, onOpenWishlist: r } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: U.XI,
                  children: (0, n.jsx)(g.uz, {
                      item: t.item,
                      remainingCount: i,
                      onClick: r,
                      cardSize: x.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, O.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: U.Tz,
                                      children: (0, n.jsx)(_.X, { product: i, isHighlighted: e, user: s }),
                                  });
                              }
                              return (0, n.jsx)(C.A, {
                                  item: t.item,
                                  profileOwner: s,
                                  isHighlighted: e,
                                  cardSize: x.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              `overflow-${t.item.skuId}`,
          );
}
function D(e) {
    let {
            items: t,
            hasOverflow: i,
            overflowItem: r,
            overflowCount: o,
            showIcons: u,
            giftRecipient: c,
            defaultWishlistId: m,
            onOpenWishlist: _,
            onWishlistItemClick: f,
            tooltipConfigs: h,
            analyticsLocations: p,
            totalUnownedWishlistItems: I,
            includedTypes: S,
            includedSources: g,
        } = e,
        C = (0, j.G)("wishlist_banner"),
        w = s.useMemo(() => [...t, r].filter((e) => null != e), [t, r]);
    return (0, n.jsx)("ul", {
        className: l()(U.Md, { [U.e6]: C }),
        children: C
            ? w.map((e, t) => {
                  let { item: i, source: s } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: U.XI,
                                children: (0, n.jsx)(M.A, {
                                    index: t,
                                    sku: i.sku,
                                    wishlistId: m,
                                    source: s,
                                    wishlistOwner: c,
                                    hasMultipleTypes: S.size > 1,
                                    hasMultipleSources: g.size > 1,
                                    onOpenWishlist: _,
                                    onClick: f,
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
                                  className: U.XI,
                                  children: ((e, t) => {
                                      let { item: i, source: s } = e,
                                          r = h[t],
                                          l = (0, n.jsx)(A.A, {
                                              item: i,
                                              profileOwner: c,
                                              wishlistId: m,
                                              isOwner: !1,
                                              cardSize: x.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: H.vQ.DM_CHANNEL_WISHLIST,
                                              source: s,
                                              showIcons: u,
                                              onWishlistItemClick: f,
                                              analyticsLocations: p,
                                          });
                                      return r.shouldShow
                                          ? (0, E.Qc)(r)
                                              ? (0, n.jsx)(d.m, {
                                                    text: r.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: L.Zh,
                                                    children: l,
                                                })
                                              : (0, n.jsx)(a.u, {
                                                    title: r.title,
                                                    body: r.body ?? "",
                                                    asset: r.renderIcon?.(i),
                                                    assetSize: L.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: L.Zh,
                                                    children: l,
                                                })
                                          : l;
                                  })({ item: i, source: s }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)(Y, { lastItem: r, remainingCount: o, giftRecipient: c, onOpenWishlist: _ }),
                  ],
              }),
    });
}
function z(e) {
    let {
            giftRecipient: t,
            onWishlistItemClick: i,
            displayProfile: r,
            totalUnownedWishlistItemCount: a,
            displayItems: d,
            fetchState: _,
            defaultWishlistId: h,
        } = e,
        { analyticsLocations: g } = (0, m.Ay)(c.A.WISHLIST_BANNER),
        C = (0, j.G)("wishlist_banner"),
        A = (0, L.Yu)(C),
        { theme: x, primaryColor: w, secondaryColor: T } = (0, p.A)({ user: t, displayProfile: r }),
        { profileThemeStyle: b, profileThemeClassName: O } = (0, I.A)({
            theme: x,
            themeType: null,
            primaryColor: w,
            secondaryColor: T,
        }),
        y = s.useCallback(() => {
            (0, S.openUserProfileModal)({ userId: t.id, tabSection: W.RP.WISHLIST });
        }, [t.id]),
        M = s.useMemo(() => "loading" === _, [_]),
        H = s.useMemo(
            () =>
                a >= A
                    ? "FULL_WISHLIST"
                    : a > 0
                      ? "MIXED"
                      : d.length > 0 &&
                          d.every((e) => {
                              let { item: t, source: i } = e;
                              return i === L.uS.POPULAR && (0, k.$)(t);
                          })
                        ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                        : "SHOP_ONLY",
            [a, A, d],
        ),
        P = v.Ay.getName(t),
        Y = B[H],
        z = r?.getBannerURL({ canAnimate: !1, size: 713 }),
        X = a > A,
        $ = s.useMemo(() => (X ? d.slice(0, A - 1) : d), [d, X, A]),
        q = (0, E.bc)($, t),
        Q = X ? d[A - 1] : null,
        Z = a - A + 1,
        [V, J] = s.useState(!1),
        K = s.useCallback(
            (e) => {
                if (e && !M && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    R.default.track(N.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: g,
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
            [M, d, t.id, g],
        ),
        ee = (0, o.K)(K, void 0, !M && !V),
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
                    ? (0, n.jsx)("div", { children: (0, n.jsx)(f.A, { location: "wishlist_banner" }) })
                    : null,
            [et],
        );
    return "error" === _
        ? null
        : (0, n.jsxs)("div", {
              ref: ee,
              className: l()(U.A1, O),
              style: b,
              children: [
                  null != z && (0, n.jsx)("div", { className: U.iL, style: { backgroundImage: `url(${z})` } }),
                  (0, n.jsx)(u.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(F, {
                                      title: Y.title,
                                      subtitle: Y.getSubtitle(P),
                                      themeClass: e,
                                      renderOfferNotice: en,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          M || 0 === d.length
                                              ? (0, n.jsx)(G, {})
                                              : (0, n.jsx)(D, {
                                                    items: $,
                                                    hasOverflow: X,
                                                    overflowItem: Q,
                                                    overflowCount: Z,
                                                    showIcons: Y.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: h,
                                                    onOpenWishlist: y,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: q,
                                                    analyticsLocations: g,
                                                    totalUnownedWishlistItems: a,
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
        r = (0, j.G)("wishlist_banner_new_recommendations"),
        l = (0, h.Ay)(t?.id),
        {
            wishlistAndRecommendations: o,
            totalUnownedWishlistItemCount: a,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: c,
        } = (0, b.r)({
            userId: t.id,
            numItems: (0, L.Yu)(r),
            source: L.B5.USER_PROFILE,
            location: "Wishlist Banner New Recommendations",
        }),
        m = s.useMemo(
            () =>
                o
                    .map((e) => ({
                        item: e.productLine === N.EZt.COLLECTIBLES ? O.A.fromSKU(e) : k.A.fromSKU(e),
                        source: null != d[e.id] && d[e.id][t.id] === y.j.WISHLIST ? L.uS.WISHLIST : L.uS.POPULAR,
                    }))
                    .filter((e) => {
                        let { item: t } = e;
                        return null != t;
                    }),
            [o, t.id, d],
        );
    return (0, n.jsx)(z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: l,
        totalUnownedWishlistItemCount: a,
        fetchState: u,
        displayItems: m,
        defaultWishlistId: c,
    });
}
let $ = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, j.G)("wishlist_banner"),
        r = (0, h.Ay)(t?.id),
        {
            displayItems: l,
            totalUnownedWishlistItemCount: o,
            fetchState: a,
            defaultWishlistId: d,
        } = (0, T.A)({ user: t, numItems: (0, L.Yu)(s), location: "Wishlist Banner" });
    return (0, n.jsx)(z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: r,
        totalUnownedWishlistItemCount: o,
        fetchState: a.status,
        displayItems: l,
        defaultWishlistId: d,
    });
};
