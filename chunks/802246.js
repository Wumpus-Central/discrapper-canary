i.d(t, { A: () => z, s: () => Y });
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
    I = i(950191),
    p = i(101928),
    f = i(195898),
    g = i(657331),
    h = i(804870),
    S = i(353157),
    A = i(18983),
    T = i(798048),
    L = i(834796),
    b = i(178213),
    C = i(594832),
    E = i(996353),
    O = i(631784),
    N = i(872472),
    R = i(721932),
    x = i(310209),
    M = i(878244),
    w = i(46537),
    y = i(954571),
    j = i(427262),
    k = i(788868),
    G = i(652215),
    H = i(518477),
    U = i(985018),
    v = i(195416);
let P = {
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
function W(e) {
    let { title: t, subtitle: i, themeClass: s } = e;
    return (0, n.jsx)("div", {
        className: l()(v.$R, s),
        children: (0, n.jsxs)("div", {
            className: v.hy,
            children: [
                (0, n.jsx)(c.Heading, { variant: "heading-lg/bold", children: t }),
                (0, n.jsx)(c.Text, { variant: "text-sm/medium", children: i }),
            ],
        }),
    });
}
function D() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.AC4, { children: U.intl.string(U.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: v.Md,
                children: Array.from({ length: C.pl }, (e, t) =>
                    (0, n.jsx)(L.A, { cardSize: T.Y.SMALL }, `placeholder-${t}`),
                ),
            }),
        ],
    });
}
function F(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: s, onOpenWishlist: r } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: v.XI,
                  children: (0, n.jsx)(h.uz, {
                      item: t.item,
                      remainingCount: i,
                      onClick: r,
                      cardSize: T.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, N.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: v.Tz,
                                      children: (0, n.jsx)(m.X, { product: i, isHighlighted: e, user: s }),
                                  });
                              }
                              return (0, n.jsx)(S.A, {
                                  item: t.item,
                                  profileOwner: s,
                                  isHighlighted: e,
                                  cardSize: T.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              `overflow-${t.item.skuId}`,
          );
}
function B(e) {
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
            analyticsLocations: p,
            totalUnownedWishlistItems: f,
            hasMultipleTypes: g,
            hasMultipleSources: h,
        } = e,
        S = (0, b.G)("wishlist_banner"),
        L = s.useMemo(() => [...t, r].filter((e) => null != e), [t, r]);
    return (0, n.jsx)("ul", {
        className: v.Md,
        children: S
            ? L.map((e, t) => {
                  let { item: i, source: s } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: v.XI,
                                children: (0, n.jsx)(M.A, {
                                    index: t,
                                    sku: i.sku,
                                    wishlistId: u,
                                    source: s,
                                    wishlistOwner: c,
                                    hasMultipleTypes: g,
                                    hasMultipleSources: h,
                                    onOpenWishlist: _,
                                    onClick: m,
                                    analyticsLocations: p,
                                    totalUnownedWishlistItems: f,
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
                                  className: v.XI,
                                  children: ((e, t) => {
                                      let { item: i, source: s } = e,
                                          r = I[t],
                                          l = (0, n.jsx)(A.A, {
                                              item: i,
                                              profileOwner: c,
                                              wishlistId: u,
                                              isOwner: !1,
                                              cardSize: T.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: k.vQ.DM_CHANNEL_WISHLIST,
                                              source: s,
                                              showIcons: a,
                                              onWishlistItemClick: m,
                                              analyticsLocations: p,
                                          });
                                      return r.shouldShow
                                          ? null != r.title && null == r.body && null == r.renderIcon
                                              ? (0, n.jsx)(d.m, {
                                                    text: r.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: C.Zh,
                                                    children: l,
                                                })
                                              : (0, n.jsx)(o.u, {
                                                    title: r.title,
                                                    body: r.body ?? "",
                                                    asset: r.renderIcon?.(i),
                                                    assetSize: C.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: C.Zh,
                                                    children: l,
                                                })
                                          : l;
                                  })({ item: i, source: s }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)(F, { lastItem: r, remainingCount: l, giftRecipient: c, onOpenWishlist: _ }),
                  ],
              }),
    });
}
function K(e) {
    let {
            giftRecipient: t,
            onWishlistItemClick: i,
            displayProfile: r,
            totalUnownedWishlistItemCount: o,
            displayItems: d,
            fetchState: m,
            defaultWishlistId: I,
        } = e,
        { analyticsLocations: h } = (0, _.Ay)(u.A.WISHLIST_BANNER),
        { theme: S, primaryColor: A, secondaryColor: T } = (0, p.A)({ user: t, displayProfile: r }),
        { profileThemeStyle: L, profileThemeClassName: b } = (0, f.A)({
            theme: S,
            themeType: null,
            primaryColor: A,
            secondaryColor: T,
        }),
        E = s.useCallback(() => {
            (0, g.openUserProfileModal)({ userId: t.id, tabSection: H.RP.WISHLIST });
        }, [t.id]),
        O = s.useMemo(() => "loading" === m, [m]),
        N = s.useMemo(
            () =>
                o >= C.pl
                    ? "FULL_WISHLIST"
                    : o > 0
                      ? "MIXED"
                      : d.length > 0 &&
                          d.every((e) => {
                              let { item: t, source: i } = e;
                              return i === C.uS.POPULAR && (0, R.$)(t);
                          })
                        ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                        : "SHOP_ONLY",
            [o, d],
        ),
        x = j.Ay.getName(t),
        M = P[N],
        k = r?.getBannerURL({ canAnimate: !1, size: 713 }),
        U = o > C.pl,
        F = s.useMemo(() => (U ? d.slice(0, C.pl - 1) : d), [d, U]),
        K = (0, w.b)(F, t),
        Y = U ? d[C.pl - 1] : null,
        z = o - C.pl + 1,
        [q, X] = s.useState(!1),
        Q = s.useCallback(
            (e) => {
                if (e && !O && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    y.default.track(G.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: h,
                        product_lines: Array.from(
                            new Set(
                                d.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        X(!0);
                }
            },
            [O, d, t.id, h],
        ),
        Z = (0, a.K)(Q, void 0, !O && !q),
        { hasMultipleTypes: V, hasMultipleSources: J } = s.useMemo(
            () => ({
                hasMultipleTypes:
                    new Set(
                        d.map((e) => {
                            let { item: t } = e;
                            return t.skuProductLine;
                        }),
                    ).size > 1,
                hasMultipleSources:
                    new Set(
                        d.map((e) => {
                            let { source: t } = e;
                            return t;
                        }),
                    ).size > 1,
            }),
            [d],
        );
    return "error" === m
        ? null
        : (0, n.jsxs)("div", {
              ref: Z,
              className: l()(v.A1, b),
              style: L,
              children: [
                  null != k && (0, n.jsx)("div", { className: v.iL, style: { backgroundImage: `url(${k})` } }),
                  (0, n.jsx)(c.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(W, { title: M.title, subtitle: M.getSubtitle(x), themeClass: e }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          O || 0 === d.length
                                              ? (0, n.jsx)(D, {})
                                              : (0, n.jsx)(B, {
                                                    items: F,
                                                    hasOverflow: U,
                                                    overflowItem: Y,
                                                    overflowCount: z,
                                                    showIcons: M.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: I,
                                                    onOpenWishlist: E,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: K,
                                                    analyticsLocations: h,
                                                    totalUnownedWishlistItems: o,
                                                    hasMultipleTypes: V,
                                                    hasMultipleSources: J,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
}
function Y(e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        r = (0, I.Ay)(t?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: a,
            skusToUserAndReason: o,
            status: d,
            defaultWishlistId: c,
        } = (0, O.r)({
            userId: t.id,
            numItems: C.pl,
            source: C.B5.USER_PROFILE,
            location: "Wishlist Banner New Recommendations",
        }),
        u = s.useMemo(
            () =>
                l
                    .map((e) => ({
                        item: e.productLine === G.EZt.COLLECTIBLES ? N.A.fromSKU(e) : R.A.fromSKU(e),
                        source: null != o[e.id] && o[e.id][t.id] === x.j.WISHLIST ? C.uS.WISHLIST : C.uS.POPULAR,
                    }))
                    .filter((e) => {
                        let { item: t } = e;
                        return null != t;
                    }),
            [l, t.id, o],
        );
    return (0, n.jsx)(K, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: r,
        totalUnownedWishlistItemCount: a,
        fetchState: d,
        displayItems: u,
        defaultWishlistId: c,
    });
}
let z = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, I.Ay)(t?.id),
        {
            displayItems: r,
            totalUnownedWishlistItemCount: l,
            fetchState: a,
            defaultWishlistId: o,
        } = (0, E.A)({ user: t, numItems: C.pl, location: "Wishlist Banner" });
    return (0, n.jsx)(K, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: s,
        totalUnownedWishlistItemCount: l,
        fetchState: a.status,
        displayItems: r,
        defaultWishlistId: o,
    });
};
