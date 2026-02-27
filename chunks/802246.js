i.d(t, { A: () => Y, s: () => Q });
var n = i(627968),
    s = i(64700),
    r = i(503698),
    a = i.n(r),
    l = i(172218),
    o = i(459192),
    d = i(990078),
    c = i(397927),
    u = i(793574),
    m = i(688810),
    _ = i(245068),
    f = i(950191),
    h = i(101928),
    p = i(195898),
    I = i(657331),
    g = i(804870),
    S = i(353157),
    C = i(18983),
    A = i(798048),
    b = i(834796),
    T = i(178213),
    x = i(594832),
    w = i(996353),
    j = i(631784),
    O = i(872472),
    L = i(721932),
    k = i(310209),
    M = i(878244),
    R = i(46537),
    N = i(954571),
    v = i(427262),
    y = i(447719),
    E = i(788868),
    H = i(652215),
    W = i(518477),
    P = i(985018),
    B = i(195416);
function U(e) {
    let { title: t, subtitle: i, themeClass: s } = e;
    return (0, n.jsx)("div", {
        className: a()(B.$R, s),
        children: (0, n.jsxs)("div", {
            className: B.hy,
            children: [
                (0, n.jsx)(c.Heading, { variant: "heading-lg/bold", children: t }),
                (0, n.jsx)(c.Text, { variant: "text-sm/medium", children: i }),
            ],
        }),
    });
}
function G(e) {
    let { wishlistInDmLength: t } = e,
        i = (0, T.G)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.AC4, { children: P.intl.string(P.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: a()(B.Md, { [B.e6]: i }),
                children: Array.from(
                    { length: t },
                    i
                        ? (e, t) => (0, n.jsx)(M.O, {}, `placeholder-${t}`)
                        : (e, t) => (0, n.jsx)(b.A, { cardSize: A.Y.SMALL }, `placeholder-${t}`),
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
                  className: B.XI,
                  children: (0, n.jsx)(g.uz, {
                      item: t.item,
                      remainingCount: i,
                      onClick: r,
                      cardSize: A.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, O.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: B.Tz,
                                      children: (0, n.jsx)(_.X, { product: i, isHighlighted: e, user: s }),
                                  });
                              }
                              return (0, n.jsx)(S.A, {
                                  item: t.item,
                                  profileOwner: s,
                                  isHighlighted: e,
                                  cardSize: A.Y.SMALL,
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
            overflowCount: l,
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
            wishlistInDmLength: b,
        } = e,
        w = (0, T.G)("wishlist_banner"),
        j = s.useMemo(() => [...t, r].filter((e) => null != e), [t, r]);
    return (0, n.jsx)("ul", {
        className: a()(B.Md, { [B.e6]: w }),
        children: w
            ? j.map((e, t) => {
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
                                    wishlistOwner: u,
                                    hasMultipleTypes: g.size > 1,
                                    hasMultipleSources: S.size > 1,
                                    onOpenWishlist: _,
                                    onClick: f,
                                    analyticsLocations: p,
                                    totalUnownedWishlistItems: I,
                                    maxWishlistLength: b,
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
                                          a = (0, n.jsx)(C.A, {
                                              item: i,
                                              profileOwner: u,
                                              wishlistId: m,
                                              isOwner: !1,
                                              cardSize: A.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: E.vQ.DM_CHANNEL_WISHLIST,
                                              source: s,
                                              showIcons: c,
                                              onWishlistItemClick: f,
                                              analyticsLocations: p,
                                          });
                                      return r.shouldShow
                                          ? (0, R.Qc)(r)
                                              ? (0, n.jsx)(d.m, {
                                                    text: r.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: x.Zh,
                                                    children: a,
                                                })
                                              : (0, n.jsx)(o.u, {
                                                    title: r.title,
                                                    body: r.body ?? "",
                                                    asset: r.renderIcon?.(i),
                                                    assetSize: x.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: x.Zh,
                                                    children: a,
                                                })
                                          : a;
                                  })({ item: i, source: s }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)(F, { lastItem: r, remainingCount: l, giftRecipient: u, onOpenWishlist: _ }),
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
            defaultWishlistId: f,
        } = e,
        { analyticsLocations: g } = (0, m.Ay)(u.A.WISHLIST_BANNER),
        S = (0, T.G)("wishlist_banner"),
        C = (0, x.KQ)(S),
        { theme: A, primaryColor: b, secondaryColor: w } = (0, h.A)({ user: t, displayProfile: r }),
        { profileThemeStyle: j, profileThemeClassName: O } = (0, p.A)({
            theme: A,
            themeType: null,
            primaryColor: b,
            secondaryColor: w,
        }),
        L = s.useCallback(() => {
            (0, I.openUserProfileModal)({ userId: t.id, tabSection: W.RP.WISHLIST });
        }, [t.id]),
        k = s.useMemo(() => "loading" === _, [_]),
        M = s.useMemo(
            () => (0, y.K)({ totalUnownedWishlistItemCount: o, wishlistInDmLength: C, displayItems: d }),
            [o, C, d],
        ),
        E = v.Ay.getName(t),
        P = y.a[M],
        F = r?.getBannerURL({ canAnimate: !1, size: 713 }),
        z = o > C,
        Q = s.useMemo(() => (z ? d.slice(0, C - 1) : d), [d, z, C]),
        Y = (0, R.bc)(Q, t),
        K = z ? d[C - 1] : null,
        X = o - C + 1,
        [q, $] = s.useState(!1),
        J = s.useCallback(
            (e) => {
                if (e && !k && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    N.default.track(H.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
                        $(!0);
                }
            },
            [k, d, t.id, g],
        ),
        Z = (0, l.K)(J, void 0, !k && !q),
        { includedTypes: V, includedSources: ee } = s.useMemo(
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
        );
    return "error" === _
        ? null
        : (0, n.jsxs)("div", {
              ref: Z,
              className: a()(B.A1, O),
              style: j,
              children: [
                  null != F && (0, n.jsx)("div", { className: B.iL, style: { backgroundImage: `url(${F})` } }),
                  (0, n.jsx)(c.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(U, { title: P.title, subtitle: P.getSubtitle(E), themeClass: e }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          k || 0 === d.length
                                              ? (0, n.jsx)(G, { wishlistInDmLength: C })
                                              : (0, n.jsx)(D, {
                                                    items: Q,
                                                    hasOverflow: z,
                                                    overflowItem: K,
                                                    overflowCount: X,
                                                    showIcons: P.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: f,
                                                    onOpenWishlist: L,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: Y,
                                                    analyticsLocations: g,
                                                    totalUnownedWishlistItems: o,
                                                    includedTypes: V,
                                                    includedSources: ee,
                                                    wishlistInDmLength: C,
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
        a = (0, f.Ay)(t?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: o,
            skusToUserAndReason: d,
            status: c,
            defaultWishlistId: u,
        } = (0, j.r)({
            userId: t.id,
            numItems: (0, x.KQ)(r),
            source: x.B5.USER_PROFILE,
            location: "Wishlist Banner New Recommendations",
        }),
        m = s.useMemo(
            () =>
                l
                    .map((e) => ({
                        item: e.productLine === H.EZt.COLLECTIBLES ? O.A.fromSKU(e) : L.A.fromSKU(e),
                        source: null != d[e.id] && d[e.id][t.id] === k.j.WISHLIST ? x.uS.WISHLIST : x.uS.POPULAR,
                    }))
                    .filter((e) => {
                        let { item: t } = e;
                        return null != t;
                    }),
            [l, t.id, d],
        );
    return (0, n.jsx)(z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: a,
        totalUnownedWishlistItemCount: o,
        fetchState: c,
        displayItems: m,
        defaultWishlistId: u,
    });
}
let Y = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, T.G)("wishlist_banner"),
        r = (0, f.Ay)(t?.id),
        {
            displayItems: a,
            totalUnownedWishlistItemCount: l,
            fetchState: o,
            defaultWishlistId: d,
        } = (0, w.A)({ user: t, numItems: (0, x.KQ)(s), location: "Wishlist Banner" });
    return (0, n.jsx)(z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: r,
        totalUnownedWishlistItemCount: l,
        fetchState: o.status,
        displayItems: a,
        defaultWishlistId: d,
    });
};
