i.d(t, { A: () => q, s: () => X });
var n = i(627968),
    s = i(64700),
    r = i(503698),
    a = i.n(r),
    l = i(172218),
    o = i(311907),
    d = i(459192),
    c = i(990078),
    u = i(397927),
    m = i(793574),
    _ = i(688810),
    f = i(245068),
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
    R = i(310209),
    M = i(878244),
    N = i(46537),
    v = i(734057),
    E = i(309010),
    H = i(954571),
    y = i(427262),
    W = i(447719),
    P = i(788868),
    B = i(652215),
    U = i(518477),
    G = i(985018),
    F = i(195416);
function D(e) {
    let { title: t, subtitle: i, themeClass: s } = e;
    return (0, n.jsx)("div", {
        className: a()(F.$R, s),
        children: (0, n.jsxs)("div", {
            className: F.hy,
            children: [
                (0, n.jsx)(u.Heading, { variant: "heading-lg/bold", children: t }),
                (0, n.jsx)(u.Text, { variant: "text-sm/medium", children: i }),
            ],
        }),
    });
}
function Q(e) {
    let { wishlistInDmLength: t } = e,
        i = (0, T.G)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(u.AC4, { children: G.intl.string(G.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: a()(F.Md, { [F.e6]: i }),
                children: Array.from(
                    { length: t },
                    i
                        ? (e, t) => (0, n.jsx)(M.O, {}, `placeholder-${t}`)
                        : (e, t) => (0, n.jsx)(x.A, { cardSize: b.Y.SMALL }, `placeholder-${t}`),
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
                  className: F.XI,
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
                                      className: F.Tz,
                                      children: (0, n.jsx)(f.X, { product: i, isHighlighted: e, user: s }),
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
function z(e) {
    let {
            items: t,
            hasOverflow: i,
            overflowItem: r,
            overflowCount: l,
            showIcons: u,
            giftRecipient: m,
            defaultWishlistId: _,
            onOpenWishlist: f,
            onWishlistItemClick: h,
            tooltipConfigs: p,
            analyticsLocations: I,
            totalUnownedWishlistItems: g,
            includedSources: S,
            wishlistInDmLength: C,
        } = e,
        x = (0, T.G)("wishlist_banner"),
        j = s.useMemo(() => [...t, r].filter((e) => null != e), [t, r]),
        O = (0, o.bG)([E.A, v.A], () => v.A.getChannel(E.A.getChannelId()));
    return (0, n.jsx)("ul", {
        className: a()(F.Md, { [F.e6]: x }),
        children: x
            ? j.map((e, t) => {
                  let { item: i, source: s } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: F.XI,
                                children: (0, n.jsx)(M.A, {
                                    index: t,
                                    sku: i.sku,
                                    wishlistId: _,
                                    source: s,
                                    wishlistOwner: m,
                                    hasMultipleSources: S.size > 1,
                                    onOpenWishlist: f,
                                    onClick: h,
                                    analyticsLocations: I,
                                    totalUnownedWishlistItems: g,
                                    maxWishlistLength: C,
                                    guildId: O?.guild_id,
                                    channelId: O?.id,
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
                                  className: F.XI,
                                  children: ((e, t) => {
                                      let { item: i, source: s } = e,
                                          r = p[t],
                                          a = (0, n.jsx)(A.A, {
                                              item: i,
                                              profileOwner: m,
                                              wishlistId: _,
                                              isOwner: !1,
                                              cardSize: b.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: P.vQ.DM_CHANNEL_WISHLIST,
                                              source: s,
                                              showIcons: u,
                                              onWishlistItemClick: h,
                                              analyticsLocations: I,
                                          });
                                      return r.shouldShow
                                          ? (0, N.Qc)(r)
                                              ? (0, n.jsx)(c.m, {
                                                    text: r.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: w.Zh,
                                                    children: a,
                                                })
                                              : (0, n.jsx)(d.u, {
                                                    title: r.title,
                                                    body: r.body ?? "",
                                                    asset: r.renderIcon?.(i),
                                                    assetSize: w.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: w.Zh,
                                                    children: a,
                                                })
                                          : a;
                                  })({ item: i, source: s }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)(Y, { lastItem: r, remainingCount: l, giftRecipient: m, onOpenWishlist: f }),
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
            fetchState: c,
            defaultWishlistId: f,
        } = e,
        { analyticsLocations: h } = (0, _.Ay)(m.A.WISHLIST_BANNER),
        S = (0, T.G)("wishlist_banner"),
        C = (0, w.KQ)(S),
        { theme: A, primaryColor: b, secondaryColor: x } = (0, p.A)({ user: t, displayProfile: r }),
        { profileThemeStyle: j, profileThemeClassName: O } = (0, I.A)({
            theme: A,
            themeType: null,
            primaryColor: b,
            secondaryColor: x,
        }),
        L = s.useCallback(() => {
            (0, g.openUserProfileModal)({ userId: t.id, tabSection: U.RP.WISHLIST });
        }, [t.id]),
        k = s.useMemo(() => "loading" === c, [c]),
        R = s.useMemo(
            () => (0, W.K)({ totalUnownedWishlistItemCount: o, wishlistInDmLength: C, displayItems: d }),
            [o, C, d],
        ),
        M = y.Ay.getName(t),
        v = W.a[R],
        E = r?.getBannerURL({ canAnimate: !1, size: 713 }),
        P = o > C,
        G = s.useMemo(() => (P ? d.slice(0, C - 1) : d), [d, P, C]),
        Y = (0, N.bc)(G, t),
        K = P ? d[C - 1] : null,
        X = o - C + 1,
        [q, $] = s.useState(!1),
        J = s.useCallback(
            (e) => {
                if (e && !k && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    H.default.track(B.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
                        $(!0);
                }
            },
            [k, d, t.id, h],
        ),
        Z = (0, l.K)(J, void 0, !k && !q),
        V = s.useMemo(
            () =>
                new Set(
                    d.map((e) => {
                        let { source: t } = e;
                        return t;
                    }),
                ),
            [d],
        );
    return "error" === c
        ? null
        : (0, n.jsxs)("div", {
              ref: Z,
              className: a()(F.A1, O),
              style: j,
              children: [
                  null != E && (0, n.jsx)("div", { className: F.iL, style: { backgroundImage: `url(${E})` } }),
                  (0, n.jsx)(u.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(D, { title: v.title, subtitle: v.getSubtitle(M), themeClass: e }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          k || 0 === d.length
                                              ? (0, n.jsx)(Q, { wishlistInDmLength: C })
                                              : (0, n.jsx)(z, {
                                                    items: G,
                                                    hasOverflow: P,
                                                    overflowItem: K,
                                                    overflowCount: X,
                                                    showIcons: v.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: f,
                                                    onOpenWishlist: L,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: Y,
                                                    analyticsLocations: h,
                                                    totalUnownedWishlistItems: o,
                                                    includedSources: V,
                                                    wishlistInDmLength: C,
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
        r = (0, T.G)("wishlist_banner_new_recommendations"),
        a = (0, h.Ay)(t?.id),
        {
            wishlistAndRecommendations: l,
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
                l
                    .map((e) => ({
                        item: e.productLine === B.EZt.COLLECTIBLES ? L.A.fromSKU(e) : k.A.fromSKU(e),
                        source: null != d[e.id] && d[e.id][t.id] === R.j.WISHLIST ? w.uS.WISHLIST : w.uS.POPULAR,
                    }))
                    .filter((e) => {
                        let { item: t } = e;
                        return null != t;
                    }),
            [l, t.id, d],
        );
    return (0, n.jsx)(K, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: a,
        totalUnownedWishlistItemCount: o,
        fetchState: c,
        displayItems: m,
        defaultWishlistId: u,
    });
}
let q = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, T.G)("wishlist_banner"),
        r = (0, h.Ay)(t?.id),
        {
            displayItems: a,
            totalUnownedWishlistItemCount: l,
            fetchState: o,
            defaultWishlistId: d,
        } = (0, j.A)({ user: t, numItems: (0, w.KQ)(s), location: "Wishlist Banner" });
    return (0, n.jsx)(K, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: r,
        totalUnownedWishlistItemCount: l,
        fetchState: o.status,
        displayItems: a,
        defaultWishlistId: d,
    });
};
