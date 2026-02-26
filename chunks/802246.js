i.d(t, { A: () => K, s: () => Q });
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
    v = i(427262),
    y = i(447719),
    H = i(788868),
    W = i(652215),
    P = i(518477),
    B = i(985018),
    U = i(683766);
function G(e) {
    let { title: t, subtitle: i, themeClass: s, renderOfferNotice: r } = e;
    return (0, n.jsxs)("div", {
        className: l()(U.$R, s),
        children: [
            (0, n.jsxs)("div", {
                className: U.hy,
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
            (0, n.jsx)(c.AC4, { children: B.intl.string(B.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: l()(U.Md, { [U.e6]: i }),
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
                  className: U.XI,
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
                                      className: U.Tz,
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
        className: l()(U.Md, { [U.e6]: x }),
        children: x
            ? j.map((e, t) => {
                  let { item: i, source: s } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: U.XI,
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
                                  className: U.XI,
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
        k = s.useCallback(() => {
            (0, g.openUserProfileModal)({ userId: t.id, tabSection: P.RP.WISHLIST });
        }, [t.id]),
        M = s.useMemo(() => "loading" === _, [_]),
        R = s.useMemo(
            () => (0, y.K)({ totalUnownedWishlistItemCount: o, wishlistInDmLength: A, displayItems: d }),
            [o, A, d],
        ),
        H = v.Ay.getName(t),
        B = y.a[R],
        D = r?.getBannerURL({ canAnimate: !1, size: 713 }),
        z = o > A,
        Q = s.useMemo(() => (z ? d.slice(0, A - 1) : d), [d, z, A]),
        K = (0, N.bc)(Q, t),
        X = z ? d[A - 1] : null,
        q = o - A + 1,
        [$, Z] = s.useState(!1),
        J = s.useCallback(
            (e) => {
                if (e && !M && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    E.default.track(W.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
            [M, d, t.id, S],
        ),
        V = (0, a.K)(J, void 0, !M && !$),
        { includedTypes: ee, includedSources: et } = s.useMemo(
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
        ei = s.useCallback(
            () =>
                ee.has(W.EZt.SOCIAL_LAYER_GAME_ITEM)
                    ? (0, n.jsx)("div", { children: (0, n.jsx)(f.A, { location: "wishlist_banner" }) })
                    : null,
            [ee],
        );
    return "error" === _
        ? null
        : (0, n.jsxs)("div", {
              ref: V,
              className: l()(U.A1, L),
              style: O,
              children: [
                  null != D && (0, n.jsx)("div", { className: U.iL, style: { backgroundImage: `url(${D})` } }),
                  (0, n.jsx)(c.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(G, {
                                      title: B.title,
                                      subtitle: B.getSubtitle(H),
                                      themeClass: e,
                                      renderOfferNotice: ei,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          M || 0 === d.length
                                              ? (0, n.jsx)(F, { wishlistInDmLength: A })
                                              : (0, n.jsx)(Y, {
                                                    items: Q,
                                                    hasOverflow: z,
                                                    overflowItem: X,
                                                    overflowCount: q,
                                                    showIcons: B.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: h,
                                                    onOpenWishlist: k,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: K,
                                                    analyticsLocations: S,
                                                    totalUnownedWishlistItems: o,
                                                    includedTypes: ee,
                                                    includedSources: et,
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
                        item: e.productLine === W.EZt.COLLECTIBLES ? L.A.fromSKU(e) : k.A.fromSKU(e),
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
let K = function (e) {
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
