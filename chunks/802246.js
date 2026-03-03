t.d(i, { A: () => Z, s: () => J });
var n = t(627968),
    r = t(64700),
    s = t(503698),
    a = t.n(s),
    l = t(791282),
    o = t.n(l),
    d = t(172218),
    c = t(311907),
    _ = t(459192),
    u = t(990078),
    m = t(397927),
    p = t(793574),
    f = t(688810),
    h = t(245068),
    g = t(950191),
    I = t(101928),
    C = t(195898),
    S = t(657331),
    x = t(804870),
    b = t(353157),
    A = t(18983),
    w = t(798048),
    j = t(834796),
    L = t(178213),
    O = t(594832),
    T = t(996353),
    N = t(631784),
    k = t(872472),
    v = t(721932),
    y = t(310209),
    H = t(878244),
    M = t(46537),
    R = t(734057),
    W = t(309010),
    E = t(954571),
    P = t(427262),
    B = t(447719),
    G = t(788868),
    U = t(652215),
    D = t(518477),
    z = t(985018),
    F = t(195416);
function K(e) {
    let { title: i, subtitle: t, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: a()(F.$R, r),
        children: (0, n.jsxs)("div", {
            className: F.hy,
            children: [
                (0, n.jsx)(m.Heading, { variant: "heading-lg/bold", children: i }),
                (0, n.jsx)(m.Text, { variant: "text-sm/medium", children: t }),
            ],
        }),
    });
}
function Q(e) {
    let { wishlistInDmLength: i } = e,
        t = (0, L.G)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.AC4, { children: z.intl.string(z.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: a()(F.Md, { [F.e6]: t }),
                children: Array.from(
                    { length: i },
                    t
                        ? (e, i) => (0, n.jsx)(H.O, {}, `placeholder-${i}`)
                        : (e, i) => (0, n.jsx)(j.A, { cardSize: w.Y.SMALL }, `placeholder-${i}`),
                ),
            }),
        ],
    });
}
function X(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: r, onOpenWishlist: s } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: F.XI,
                  children: (0, n.jsx)(x.uz, {
                      item: i.item,
                      remainingCount: t,
                      onClick: s,
                      cardSize: w.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, k.L)(i.item)) {
                              if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
                                  let t = { items: i.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: F.Tz,
                                      children: (0, n.jsx)(h.X, { product: t, isHighlighted: e, user: r }),
                                  });
                              }
                              return (0, n.jsx)(b.A, {
                                  item: i.item,
                                  profileOwner: r,
                                  isHighlighted: e,
                                  cardSize: w.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              `overflow-${i.item.skuId}`,
          );
}
function Y(e) {
    let {
            items: i,
            hasOverflow: t,
            overflowItem: s,
            overflowCount: l,
            showIcons: o,
            giftRecipient: d,
            defaultWishlistId: m,
            onOpenWishlist: p,
            onWishlistItemClick: f,
            tooltipConfigs: h,
            analyticsLocations: g,
            totalUnownedWishlistItems: I,
            includedSources: C,
            wishlistInDmLength: S,
        } = e,
        x = (0, L.G)("wishlist_banner"),
        b = r.useMemo(() => [...i, s].filter((e) => null != e), [i, s]),
        j = (0, c.bG)([W.A, R.A], () => R.A.getChannel(W.A.getChannelId()));
    return (0, n.jsx)("ul", {
        className: a()(F.Md, { [F.e6]: x }),
        children: x
            ? b.map((e, i) => {
                  let { item: t, source: r } = e;
                  return null == t || null == t.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: F.XI,
                                children: (0, n.jsx)(H.A, {
                                    index: i,
                                    sku: t.sku,
                                    wishlistId: m,
                                    source: r,
                                    wishlistOwner: d,
                                    hasMultipleSources: C.size > 1,
                                    onOpenWishlist: p,
                                    onClick: f,
                                    analyticsLocations: g,
                                    totalUnownedWishlistItems: I,
                                    maxWishlistLength: S,
                                    guildId: j?.guild_id,
                                    channelId: j?.id,
                                }),
                            },
                            t.skuId,
                        );
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      i.map((e, i) => {
                          let { item: t, source: r } = e;
                          return (0, n.jsx)(
                              "li",
                              {
                                  className: F.XI,
                                  children: ((e, i) => {
                                      let { item: t, source: r } = e,
                                          s = h[i],
                                          a = (0, n.jsx)(A.A, {
                                              item: t,
                                              profileOwner: d,
                                              wishlistId: m,
                                              isOwner: !1,
                                              cardSize: w.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: G.vQ.DM_CHANNEL_WISHLIST,
                                              source: r,
                                              showIcons: o,
                                              onWishlistItemClick: f,
                                              analyticsLocations: g,
                                          });
                                      return s.shouldShow
                                          ? (0, M.Qc)(s)
                                              ? (0, n.jsx)(u.m, {
                                                    text: s.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: O.Zh,
                                                    children: a,
                                                })
                                              : (0, n.jsx)(_.u, {
                                                    title: s.title,
                                                    body: s.body ?? "",
                                                    asset: s.renderIcon?.(t),
                                                    assetSize: O.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: O.Zh,
                                                    children: a,
                                                })
                                          : a;
                                  })({ item: t, source: r }, i),
                              },
                              t.skuId,
                          );
                      }),
                      t && (0, n.jsx)(X, { lastItem: s, remainingCount: l, giftRecipient: d, onOpenWishlist: p }),
                  ],
              }),
    });
}
function $(e) {
    let {
            giftRecipient: i,
            onWishlistItemClick: t,
            displayProfile: s,
            totalUnownedWishlistItemCount: l,
            displayItems: o,
            fetchState: c,
            defaultWishlistId: _,
        } = e,
        { analyticsLocations: u } = (0, f.Ay)(p.A.WISHLIST_BANNER),
        h = (0, L.G)("wishlist_banner"),
        g = (0, O.KQ)(h),
        { theme: x, primaryColor: b, secondaryColor: A } = (0, I.A)({ user: i, displayProfile: s }),
        { profileThemeStyle: w, profileThemeClassName: j } = (0, C.A)({
            theme: x,
            themeType: null,
            primaryColor: b,
            secondaryColor: A,
        }),
        T = r.useCallback(() => {
            (0, S.openUserProfileModal)({ userId: i.id, tabSection: D.RP.WISHLIST });
        }, [i.id]),
        N = r.useMemo(() => "loading" === c, [c]),
        k = r.useMemo(
            () => (0, B.KX)({ totalUnownedWishlistItemCount: l, wishlistInDmLength: g, displayItems: o }),
            [l, g, o],
        ),
        v = P.Ay.getName(i),
        y = B.ap[k],
        H = s?.getBannerURL({ canAnimate: !1, size: 713 }),
        R = l > g,
        W = r.useMemo(() => (R ? o.slice(0, g - 1) : o), [o, R, g]),
        G = (0, M.bc)(W, i),
        z = R ? o[g - 1] : null,
        X = l - g + 1,
        [$, J] = r.useState(!1),
        Z = r.useCallback(
            (e) => {
                if (e && !N && o.length > 0) {
                    let e = o.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    E.default.track(U.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: u,
                        product_lines: Array.from(
                            new Set(
                                o.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        J(!0);
                }
            },
            [N, o, i.id, u],
        ),
        q = (0, d.K)(Z, void 0, !N && !$),
        V = r.useMemo(
            () =>
                new Set(
                    o.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [o],
        );
    return "error" === c
        ? null
        : (0, n.jsxs)("div", {
              ref: q,
              className: a()(F.A1, j),
              style: w,
              children: [
                  null != H && (0, n.jsx)("div", { className: F.iL, style: { backgroundImage: `url(${H})` } }),
                  (0, n.jsx)(m.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(K, { title: y.title, subtitle: y.getSubtitle(v), themeClass: e }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          N || 0 === o.length
                                              ? (0, n.jsx)(Q, { wishlistInDmLength: g })
                                              : (0, n.jsx)(Y, {
                                                    items: W,
                                                    hasOverflow: R,
                                                    overflowItem: z,
                                                    overflowCount: X,
                                                    showIcons: y.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: _,
                                                    onOpenWishlist: T,
                                                    onWishlistItemClick: t,
                                                    tooltipConfigs: G,
                                                    analyticsLocations: u,
                                                    totalUnownedWishlistItems: l,
                                                    includedSources: V,
                                                    wishlistInDmLength: g,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
}
function J(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        s = (0, L.G)("wishlist_banner_new_recommendations"),
        a = (0, g.Ay)(i?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: d,
            skusToUserAndReason: c,
            status: _,
            defaultWishlistId: u,
        } = (0, N.r)({
            userId: i.id,
            numItems: (0, O.KQ)(s),
            source: O.B5.USER_PROFILE,
            location: "Wishlist Banner New Recommendations",
        }),
        m = r.useMemo(
            () =>
                o()(
                    l.map((e) => {
                        let t = e.productLine === U.EZt.COLLECTIBLES ? k.A.fromSKU(e) : v.A.fromSKU(e),
                            n = null != c[e.id] && c[e.id][i.id] === y.j.WISHLIST ? O.uS.WISHLIST : O.uS.POPULAR;
                        return null != t ? { item: t, source: n } : null;
                    }),
                ),
            [l, i.id, c],
        );
    return (0, n.jsx)($, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: a,
        totalUnownedWishlistItemCount: d,
        fetchState: _,
        displayItems: m,
        defaultWishlistId: u,
    });
}
let Z = function (e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        r = (0, L.G)("wishlist_banner"),
        s = (0, g.Ay)(i?.id),
        {
            displayItems: a,
            totalUnownedWishlistItemCount: l,
            fetchState: o,
            defaultWishlistId: d,
        } = (0, T.A)({ user: i, numItems: (0, O.KQ)(r), location: "Wishlist Banner" });
    return (0, n.jsx)($, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: s,
        totalUnownedWishlistItemCount: l,
        fetchState: o.status,
        displayItems: a,
        defaultWishlistId: d,
    });
};
