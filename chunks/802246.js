i.d(t, { A: () => J, s: () => Q });
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
    I = i(733391),
    f = i(133015),
    p = i(476438),
    g = i(204890),
    h = i(950191),
    S = i(101928),
    A = i(195898),
    T = i(657331),
    b = i(804870),
    L = i(353157),
    C = i(18983),
    E = i(798048),
    O = i(834796),
    N = i(151252),
    R = i(178213),
    x = i(594832),
    w = i(996353),
    M = i(631784),
    y = i(872472),
    j = i(721932),
    k = i(310209),
    G = i(878244),
    H = i(46537),
    v = i(954571),
    U = i(427262),
    P = i(788868),
    W = i(652215),
    D = i(518477),
    F = i(985018),
    B = i(195416);
let K = {
    FULL_WISHLIST: {
        title: F.intl.string(F.t["7lZ31J"]),
        getSubtitle: (e) => F.intl.formatToPlainString(F.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: F.intl.string(F.t.SK5rmi),
        getSubtitle: (e) => F.intl.formatToPlainString(F.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: F.intl.string(F.t.SK5rmi),
        getSubtitle: (e) => F.intl.formatToPlainString(F.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: F.intl.string(F.t.BCi1gT),
        getSubtitle: (e) => F.intl.formatToPlainString(F.t.BjEX38, { username: e }),
        showIcons: !1,
    },
};
function Y(e) {
    let { title: t, subtitle: i, themeClass: s, renderOfferNotice: r } = e;
    return (0, n.jsxs)("div", {
        className: l()(B.$R, s),
        children: [
            (0, n.jsxs)("div", {
                className: B.hy,
                children: [
                    (0, n.jsx)(c.Heading, { variant: "heading-lg/bold", children: t }),
                    (0, n.jsx)(c.Text, { variant: "text-sm/medium", children: i }),
                ],
            }),
            r(),
        ],
    });
}
function z() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.AC4, { children: F.intl.string(F.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: B.Md,
                children: Array.from({ length: x.pl }, (e, t) =>
                    (0, n.jsx)(O.A, { cardSize: E.Y.SMALL }, `placeholder-${t}`),
                ),
            }),
        ],
    });
}
function q(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: s, onOpenWishlist: r } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: B.XI,
                  children: (0, n.jsx)(b.uz, {
                      item: t.item,
                      remainingCount: i,
                      onClick: r,
                      cardSize: E.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, y.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: B.Tz,
                                      children: (0, n.jsx)(m.X, { product: i, isHighlighted: e, user: s }),
                                  });
                              }
                              return (0, n.jsx)(L.A, {
                                  item: t.item,
                                  profileOwner: s,
                                  isHighlighted: e,
                                  cardSize: E.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              `overflow-${t.item.skuId}`,
          );
}
function X(e) {
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
        S = (0, R.G)("wishlist_banner"),
        A = s.useMemo(() => [...t, r].filter((e) => null != e), [t, r]);
    return (0, n.jsx)("ul", {
        className: B.Md,
        children: S
            ? A.map((e, t) => {
                  let { item: i, source: s } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: B.XI,
                                children: (0, n.jsx)(G.A, {
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
                                  className: B.XI,
                                  children: ((e, t) => {
                                      let { item: i, source: s } = e,
                                          r = I[t],
                                          l = (0, n.jsx)(C.A, {
                                              item: i,
                                              profileOwner: c,
                                              wishlistId: u,
                                              isOwner: !1,
                                              cardSize: E.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: P.vQ.DM_CHANNEL_WISHLIST,
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
                                                    delay: x.Zh,
                                                    children: l,
                                                })
                                              : (0, n.jsx)(o.u, {
                                                    title: r.title,
                                                    body: r.body ?? "",
                                                    asset: r.renderIcon?.(i),
                                                    assetSize: x.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: x.Zh,
                                                    children: l,
                                                })
                                          : l;
                                  })({ item: i, source: s }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)(q, { lastItem: r, remainingCount: l, giftRecipient: c, onOpenWishlist: _ }),
                  ],
              }),
    });
}
function Z(e) {
    let {
            giftRecipient: t,
            onWishlistItemClick: i,
            displayProfile: r,
            totalUnownedWishlistItemCount: o,
            displayItems: d,
            fetchState: m,
            defaultWishlistId: f,
        } = e,
        { analyticsLocations: p } = (0, _.Ay)(u.A.WISHLIST_BANNER),
        { enabled: g } = (0, N.Z)({ location: "wishlist_banner" });
    s.useEffect(() => {
        (0, I.Xw)();
    }, []);
    let { theme: h, primaryColor: b, secondaryColor: L } = (0, S.A)({ user: t, displayProfile: r }),
        { profileThemeStyle: C, profileThemeClassName: E } = (0, A.A)({
            theme: h,
            themeType: null,
            primaryColor: b,
            secondaryColor: L,
        }),
        O = s.useCallback(() => {
            (0, T.openUserProfileModal)({ userId: t.id, tabSection: D.RP.WISHLIST });
        }, [t.id]),
        R = s.useMemo(() => "loading" === m, [m]),
        w = s.useMemo(
            () =>
                o >= x.pl
                    ? "FULL_WISHLIST"
                    : o > 0
                      ? "MIXED"
                      : d.length > 0 &&
                          d.every((e) => {
                              let { item: t, source: i } = e;
                              return i === x.uS.POPULAR && (0, j.$)(t);
                          })
                        ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                        : "SHOP_ONLY",
            [o, d],
        ),
        M = U.Ay.getName(t),
        y = K[w],
        k = r?.getBannerURL({ canAnimate: !1, size: 713 }),
        G = o > x.pl,
        P = s.useMemo(() => (G ? d.slice(0, x.pl - 1) : d), [d, G]),
        F = (0, H.b)(P, t),
        q = G ? d[x.pl - 1] : null,
        Z = o - x.pl + 1,
        [Q, J] = s.useState(!1),
        $ = s.useCallback(
            (e) => {
                if (e && !R && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    v.default.track(W.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: p,
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
            [R, d, t.id, p],
        ),
        ee = (0, a.K)($, void 0, !R && !Q),
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
        en = s.useCallback(() => (g && et.has(W.EZt.SOCIAL_LAYER_GAME_ITEM) ? (0, n.jsx)(V, {}) : null), [g, et]);
    return "error" === m
        ? null
        : (0, n.jsxs)("div", {
              ref: ee,
              className: l()(B.A1, E),
              style: C,
              children: [
                  null != k && (0, n.jsx)("div", { className: B.iL, style: { backgroundImage: `url(${k})` } }),
                  (0, n.jsx)(c.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(Y, {
                                      title: y.title,
                                      subtitle: y.getSubtitle(M),
                                      themeClass: e,
                                      renderOfferNotice: en,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          R || 0 === d.length
                                              ? (0, n.jsx)(z, {})
                                              : (0, n.jsx)(X, {
                                                    items: P,
                                                    hasOverflow: G,
                                                    overflowItem: q,
                                                    overflowCount: Z,
                                                    showIcons: y.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: f,
                                                    onOpenWishlist: O,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: F,
                                                    analyticsLocations: p,
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
function Q(e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        r = (0, h.Ay)(t?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: a,
            skusToUserAndReason: o,
            status: d,
            defaultWishlistId: c,
        } = (0, M.r)({
            userId: t.id,
            numItems: x.pl,
            source: x.B5.USER_PROFILE,
            location: "Wishlist Banner New Recommendations",
        }),
        u = s.useMemo(
            () =>
                l
                    .map((e) => ({
                        item: e.productLine === W.EZt.COLLECTIBLES ? y.A.fromSKU(e) : j.A.fromSKU(e),
                        source: null != o[e.id] && o[e.id][t.id] === k.j.WISHLIST ? x.uS.WISHLIST : x.uS.POPULAR,
                    }))
                    .filter((e) => {
                        let { item: t } = e;
                        return null != t;
                    }),
            [l, t.id, o],
        );
    return (0, n.jsx)(Z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: r,
        totalUnownedWishlistItemCount: a,
        fetchState: d,
        displayItems: u,
        defaultWishlistId: c,
    });
}
function V() {
    let e = (0, p.A)();
    return (0, f.n)({ location: "Wishlist Banner" })
        ? (0, n.jsx)("div", {
              children: (0, n.jsx)(g.A, {
                  variant: "standard",
                  timeRemaining: e ?? void 0,
                  Icon: c.Cp8,
                  text: F.intl.string(F.t["tTo/dy"]),
              }),
          })
        : null;
}
let J = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, h.Ay)(t?.id),
        {
            displayItems: r,
            totalUnownedWishlistItemCount: l,
            fetchState: a,
            defaultWishlistId: o,
        } = (0, w.A)({ user: t, numItems: x.pl, location: "Wishlist Banner" });
    return (0, n.jsx)(Z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: s,
        totalUnownedWishlistItemCount: l,
        fetchState: a.status,
        displayItems: r,
        defaultWishlistId: o,
    });
};
