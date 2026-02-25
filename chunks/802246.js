i.d(t, { A: () => X, s: () => Q });
var n = i(627968),
    s = i(64700),
    r = i(503698),
    l = i.n(r),
    a = i(172218),
    o = i(459192),
    d = i(990078),
    c = i(397927),
    u = i(793574),
    m = i(688810),
    _ = i(245068),
    f = i(84511),
    h = i(950191),
    p = i(101928),
    I = i(195898),
    g = i(657331),
    S = i(804870),
    C = i(353157),
    A = i(18983),
    b = i(798048),
    x = i(834796),
    T = i(178213),
    w = i(594832),
    j = i(996353),
    O = i(631784),
    L = i(872472),
    k = i(721932),
    M = i(310209),
    R = i(878244),
    N = i(46537),
    E = i(954571),
    y = i(427262),
    H = i(788868),
    v = i(652215),
    W = i(518477),
    P = i(985018),
    B = i(683766);
let U = {
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
function G(e) {
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
function F(e) {
    let { wishlistInDmLength: t } = e,
        i = (0, T.G)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.AC4, { children: P.intl.string(P.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: l()(B.Md, { [B.e6]: i }),
                children: Array.from(
                    { length: t },
                    i
                        ? (e, t) => (0, n.jsx)(R.O, {}, `placeholder-${t}`)
                        : (e, t) => (0, n.jsx)(x.A, { cardSize: b.Y.SMALL }, `placeholder-${t}`),
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
                      cardSize: b.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, L.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: B.Tz,
                                      children: (0, n.jsx)(_.X, { product: i, isHighlighted: e, user: s }),
                                  });
                              }
                              return (0, n.jsx)(C.A, {
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
function Y(e) {
    let {
            items: t,
            hasOverflow: i,
            overflowItem: r,
            overflowCount: a,
            showIcons: c,
            giftRecipient: u,
            defaultWishlistId: m,
            onOpenWishlist: _,
            onWishlistItemClick: f,
            tooltipConfigs: h,
            analyticsLocations: p,
            totalUnownedWishlistItems: I,
            includedTypes: g,
            includedSources: S,
            wishlistInDmLength: C,
        } = e,
        x = (0, T.G)("wishlist_banner"),
        j = s.useMemo(() => [...t, r].filter((e) => null != e), [t, r]);
    return (0, n.jsx)("ul", {
        className: l()(B.Md, { [B.e6]: x }),
        children: x
            ? j.map((e, t) => {
                  let { item: i, source: s } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: B.XI,
                                children: (0, n.jsx)(R.A, {
                                    index: t,
                                    sku: i.sku,
                                    wishlistId: m,
                                    source: s,
                                    wishlistOwner: u,
                                    hasMultipleTypes: g.size > 1,
                                    hasMultipleSources: S.size > 1,
                                    onOpenWishlist: _,
                                    onClick: f,
                                    analyticsLocations: p,
                                    totalUnownedWishlistItems: I,
                                    maxWishlistLength: C,
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
                                          r = h[t],
                                          l = (0, n.jsx)(A.A, {
                                              item: i,
                                              profileOwner: u,
                                              wishlistId: m,
                                              isOwner: !1,
                                              cardSize: b.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: H.vQ.DM_CHANNEL_WISHLIST,
                                              source: s,
                                              showIcons: c,
                                              onWishlistItemClick: f,
                                              analyticsLocations: p,
                                          });
                                      return r.shouldShow
                                          ? (0, N.Qc)(r)
                                              ? (0, n.jsx)(d.m, {
                                                    text: r.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: w.Zh,
                                                    children: l,
                                                })
                                              : (0, n.jsx)(o.u, {
                                                    title: r.title,
                                                    body: r.body ?? "",
                                                    asset: r.renderIcon?.(i),
                                                    assetSize: w.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: w.Zh,
                                                    children: l,
                                                })
                                          : l;
                                  })({ item: i, source: s }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)(D, { lastItem: r, remainingCount: a, giftRecipient: u, onOpenWishlist: _ }),
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
            fetchState: _,
            defaultWishlistId: h,
        } = e,
        { analyticsLocations: S } = (0, m.Ay)(u.A.WISHLIST_BANNER),
        C = (0, T.G)("wishlist_banner"),
        A = (0, w.KQ)(C),
        { theme: b, primaryColor: x, secondaryColor: j } = (0, p.A)({ user: t, displayProfile: r }),
        { profileThemeStyle: O, profileThemeClassName: L } = (0, I.A)({
            theme: b,
            themeType: null,
            primaryColor: x,
            secondaryColor: j,
        }),
        M = s.useCallback(() => {
            (0, g.openUserProfileModal)({ userId: t.id, tabSection: W.RP.WISHLIST });
        }, [t.id]),
        R = s.useMemo(() => "loading" === _, [_]),
        H = s.useMemo(
            () =>
                o >= A
                    ? "FULL_WISHLIST"
                    : o > 0
                      ? "MIXED"
                      : d.length > 0 &&
                          d.every((e) => {
                              let { item: t, source: i } = e;
                              return i === w.uS.POPULAR && (0, k.$)(t);
                          })
                        ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                        : "SHOP_ONLY",
            [o, A, d],
        ),
        P = y.Ay.getName(t),
        D = U[H],
        z = r?.getBannerURL({ canAnimate: !1, size: 713 }),
        Q = o > A,
        X = s.useMemo(() => (Q ? d.slice(0, A - 1) : d), [d, Q, A]),
        K = (0, N.bc)(X, t),
        q = Q ? d[A - 1] : null,
        $ = o - A + 1,
        [Z, J] = s.useState(!1),
        V = s.useCallback(
            (e) => {
                if (e && !R && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    E.default.track(v.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
            [R, d, t.id, S],
        ),
        ee = (0, a.K)(V, void 0, !R && !Z),
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
                et.has(v.EZt.SOCIAL_LAYER_GAME_ITEM)
                    ? (0, n.jsx)("div", { children: (0, n.jsx)(f.A, { location: "wishlist_banner" }) })
                    : null,
            [et],
        );
    return "error" === _
        ? null
        : (0, n.jsxs)("div", {
              ref: ee,
              className: l()(B.A1, L),
              style: O,
              children: [
                  null != z && (0, n.jsx)("div", { className: B.iL, style: { backgroundImage: `url(${z})` } }),
                  (0, n.jsx)(c.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(G, {
                                      title: D.title,
                                      subtitle: D.getSubtitle(P),
                                      themeClass: e,
                                      renderOfferNotice: en,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          R || 0 === d.length
                                              ? (0, n.jsx)(F, { wishlistInDmLength: A })
                                              : (0, n.jsx)(Y, {
                                                    items: X,
                                                    hasOverflow: Q,
                                                    overflowItem: q,
                                                    overflowCount: $,
                                                    showIcons: D.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: h,
                                                    onOpenWishlist: M,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: K,
                                                    analyticsLocations: S,
                                                    totalUnownedWishlistItems: o,
                                                    includedTypes: et,
                                                    includedSources: ei,
                                                    wishlistInDmLength: A,
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
        r = (0, T.G)("wishlist_banner_new_recommendations"),
        l = (0, h.Ay)(t?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: o,
            skusToUserAndReason: d,
            status: c,
            defaultWishlistId: u,
        } = (0, O.r)({
            userId: t.id,
            numItems: (0, w.KQ)(r),
            source: w.B5.USER_PROFILE,
            location: "Wishlist Banner New Recommendations",
        }),
        m = s.useMemo(
            () =>
                a
                    .map((e) => ({
                        item: e.productLine === v.EZt.COLLECTIBLES ? L.A.fromSKU(e) : k.A.fromSKU(e),
                        source: null != d[e.id] && d[e.id][t.id] === M.j.WISHLIST ? w.uS.WISHLIST : w.uS.POPULAR,
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
        fetchState: c,
        displayItems: m,
        defaultWishlistId: u,
    });
}
let X = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, T.G)("wishlist_banner"),
        r = (0, h.Ay)(t?.id),
        {
            displayItems: l,
            totalUnownedWishlistItemCount: a,
            fetchState: o,
            defaultWishlistId: d,
        } = (0, j.A)({ user: t, numItems: (0, w.KQ)(s), location: "Wishlist Banner" });
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
