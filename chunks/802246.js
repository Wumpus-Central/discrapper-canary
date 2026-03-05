t.d(i, { A: () => V, s: () => q });
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
    g = t(871123),
    I = t(84511),
    C = t(950191),
    S = t(101928),
    x = t(195898),
    b = t(657331),
    j = t(804870),
    w = t(353157),
    A = t(18983),
    L = t(798048),
    O = t(834796),
    N = t(178213),
    T = t(594832),
    k = t(996353),
    v = t(631784),
    y = t(872472),
    H = t(721932),
    M = t(310209),
    R = t(878244),
    W = t(46537),
    E = t(734057),
    P = t(309010),
    B = t(954571),
    G = t(427262),
    F = t(447719),
    U = t(788868),
    D = t(652215),
    z = t(518477),
    K = t(985018),
    Q = t(195416);
function X(e) {
    let { title: i, subtitle: t, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: a()(Q.$R, r),
        children: (0, n.jsxs)("div", {
            className: Q.hy,
            children: [
                (0, n.jsx)(m.Heading, { variant: "heading-lg/bold", children: i }),
                (0, n.jsx)(m.Text, { variant: "text-sm/medium", children: t }),
            ],
        }),
    });
}
function Y(e) {
    let { wishlistInDmLength: i } = e,
        t = (0, N.G)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.AC4, { children: K.intl.string(K.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: a()(Q.Md, { [Q.e6]: t }),
                children: Array.from(
                    { length: i },
                    t
                        ? (e, i) => (0, n.jsx)(R.O, {}, `placeholder-${i}`)
                        : (e, i) => (0, n.jsx)(O.A, { cardSize: L.Y.SMALL }, `placeholder-${i}`),
                ),
            }),
        ],
    });
}
function $(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: r, onOpenWishlist: s } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: Q.XI,
                  children: (0, n.jsx)(j.uz, {
                      item: i.item,
                      remainingCount: t,
                      onClick: s,
                      cardSize: L.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, y.L)(i.item)) {
                              if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
                                  let t = { items: i.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: Q.Tz,
                                      children: (0, n.jsx)(h.X, { product: t, isHighlighted: e, user: r }),
                                  });
                              }
                              return (0, n.jsx)(w.A, {
                                  item: i.item,
                                  profileOwner: r,
                                  isHighlighted: e,
                                  cardSize: L.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              `overflow-${i.item.skuId}`,
          );
}
function J(e) {
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
        x = (0, N.G)("wishlist_banner"),
        b = r.useMemo(() => [...i, s].filter((e) => null != e), [i, s]),
        j = (0, c.bG)([P.A, E.A], () => E.A.getChannel(P.A.getChannelId()));
    return (0, n.jsx)("ul", {
        className: a()(Q.Md, { [Q.e6]: x }),
        children: x
            ? b.map((e, i) => {
                  let { item: t, source: r } = e;
                  return null == t || null == t.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: Q.XI,
                                children: (0, n.jsx)(R.A, {
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
                                  className: Q.XI,
                                  children: ((e, i) => {
                                      let { item: t, source: r } = e,
                                          s = h[i],
                                          a = (0, n.jsx)(A.A, {
                                              item: t,
                                              profileOwner: d,
                                              wishlistId: m,
                                              isOwner: !1,
                                              cardSize: L.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: U.vQ.DM_CHANNEL_WISHLIST,
                                              source: r,
                                              showIcons: o,
                                              onWishlistItemClick: f,
                                              analyticsLocations: g,
                                          });
                                      return s.shouldShow
                                          ? (0, W.Qc)(s)
                                              ? (0, n.jsx)(u.m, {
                                                    text: s.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: T.Zh,
                                                    children: a,
                                                })
                                              : (0, n.jsx)(_.u, {
                                                    title: s.title,
                                                    body: s.body ?? "",
                                                    asset: s.renderIcon?.(t),
                                                    assetSize: T.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: T.Zh,
                                                    children: a,
                                                })
                                          : a;
                                  })({ item: t, source: r }, i),
                              },
                              t.skuId,
                          );
                      }),
                      t && (0, n.jsx)($, { lastItem: s, remainingCount: l, giftRecipient: d, onOpenWishlist: p }),
                  ],
              }),
    });
}
function Z(e) {
    let {
            giftRecipient: i,
            onWishlistItemClick: t,
            displayProfile: s,
            totalUnownedWishlistItemCount: l,
            displayItems: o,
            fetchState: c,
            defaultWishlistId: _,
            footerNotice: u,
        } = e,
        { analyticsLocations: h } = (0, f.Ay)(p.A.WISHLIST_BANNER),
        g = (0, N.G)("wishlist_banner"),
        I = (0, T.KQ)(g),
        { theme: C, primaryColor: j, secondaryColor: w } = (0, S.A)({ user: i, displayProfile: s }),
        { profileThemeStyle: A, profileThemeClassName: L } = (0, x.A)({
            theme: C,
            themeType: null,
            primaryColor: j,
            secondaryColor: w,
        }),
        O = r.useCallback(() => {
            (0, b.openUserProfileModal)({ userId: i.id, tabSection: z.RP.WISHLIST });
        }, [i.id]),
        k = r.useMemo(() => "loading" === c, [c]),
        v = r.useMemo(
            () => (0, F.KX)({ totalUnownedWishlistItemCount: l, wishlistInDmLength: I, displayItems: o }),
            [l, I, o],
        ),
        y = G.Ay.getName(i),
        H = F.ap[v],
        M = s?.getBannerURL({ canAnimate: !1, size: 713 }),
        R = l > I,
        E = r.useMemo(() => (R ? o.slice(0, I - 1) : o), [o, R, I]),
        P = (0, W.bc)(E, i),
        U = R ? o[I - 1] : null,
        K = l - I + 1,
        [$, Z] = r.useState(!1),
        q = r.useCallback(
            (e) => {
                if (e && !k && o.length > 0) {
                    let e = o.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    B.default.track(D.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: h,
                        product_lines: Array.from(
                            new Set(
                                o.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        Z(!0);
                }
            },
            [k, o, i.id, h],
        ),
        V = (0, d.K)(q, void 0, !k && !$),
        ee = r.useMemo(
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
              ref: V,
              className: a()(Q.A1, L),
              style: A,
              children: [
                  null != M && (0, n.jsx)("div", { className: Q.iL, style: { backgroundImage: `url(${M})` } }),
                  (0, n.jsx)(m.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(X, { title: H.title, subtitle: H.getSubtitle(y), themeClass: e }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          k || 0 === o.length
                                              ? (0, n.jsx)(Y, { wishlistInDmLength: I })
                                              : (0, n.jsx)(J, {
                                                    items: E,
                                                    hasOverflow: R,
                                                    overflowItem: U,
                                                    overflowCount: K,
                                                    showIcons: H.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: _,
                                                    onOpenWishlist: O,
                                                    onWishlistItemClick: t,
                                                    tooltipConfigs: P,
                                                    analyticsLocations: h,
                                                    totalUnownedWishlistItems: l,
                                                    includedSources: ee,
                                                    wishlistInDmLength: I,
                                                }),
                                  }),
                                  null != u && !k && o.length > 0
                                      ? (0, n.jsx)("div", { className: e, children: u })
                                      : null,
                              ],
                          }),
                  }),
              ],
          });
}
function q(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        s = (0, N.G)("wishlist_banner_new_recommendations"),
        a = (0, C.Ay)(i?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: d,
            skusToUserAndReason: c,
            status: _,
            defaultWishlistId: u,
        } = (0, v.r)({
            userId: i.id,
            numItems: (0, T.KQ)(s),
            source: T.B5.USER_PROFILE,
            location: "Wishlist Banner New Recommendations",
        }),
        m = r.useMemo(
            () =>
                o()(
                    l.map((e) => {
                        let t = e.productLine === D.EZt.COLLECTIBLES ? y.A.fromSKU(e) : H.A.fromSKU(e),
                            n = null != c[e.id] && c[e.id][i.id] === M.j.WISHLIST ? T.uS.WISHLIST : T.uS.POPULAR;
                        return null != t ? { item: t, source: n } : null;
                    }),
                ),
            [l, i.id, c],
        ),
        p = r.useMemo(
            () =>
                m.some((e) => {
                    let { item: i } = e;
                    return (0, g.bF)(i.sku);
                }),
            [m],
        );
    return (0, n.jsx)(Z, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: a,
        totalUnownedWishlistItemCount: d,
        fetchState: _,
        displayItems: m,
        defaultWishlistId: u,
        footerNotice: p
            ? (0, n.jsx)(I.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: Q.jG })
            : null,
    });
}
let V = function (e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        s = (0, N.G)("wishlist_banner"),
        a = (0, C.Ay)(i?.id),
        {
            displayItems: l,
            totalUnownedWishlistItemCount: o,
            fetchState: d,
            defaultWishlistId: c,
        } = (0, k.A)({ user: i, numItems: (0, T.KQ)(s), location: "Wishlist Banner" }),
        _ = r.useMemo(
            () =>
                l.some((e) => {
                    let { item: i } = e;
                    return (0, g.bF)(i.sku);
                }),
            [l],
        );
    return (0, n.jsx)(Z, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: a,
        totalUnownedWishlistItemCount: o,
        fetchState: d.status,
        displayItems: l,
        defaultWishlistId: c,
        footerNotice: _ ? (0, n.jsx)(I.A, { location: "dm_gift_modal_wishlist", className: Q.jG }) : null,
    });
};
