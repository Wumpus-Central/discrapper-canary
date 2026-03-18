t.d(i, { s: () => V });
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
    f = t(793574),
    p = t(688810),
    h = t(245068),
    g = t(871123),
    I = t(84511),
    S = t(950191),
    C = t(101928),
    x = t(195898),
    b = t(657331),
    w = t(804870),
    j = t(353157),
    A = t(18983),
    L = t(798048),
    T = t(834796),
    O = t(178213),
    N = t(332772),
    v = t(594832),
    k = t(631784),
    H = t(872472),
    y = t(721932),
    M = t(310209),
    R = t(878244),
    E = t(46537),
    P = t(734057),
    B = t(309010),
    G = t(954571),
    W = t(427262),
    D = t(447719),
    F = t(788868),
    U = t(652215),
    z = t(518477),
    Q = t(985018),
    X = t(195416);
function Y(e) {
    let { title: i, subtitle: t, showViewAll: r, themeClass: s, onOpenWishlist: l } = e;
    return (0, n.jsxs)("div", {
        className: a()(X.$R, s),
        children: [
            (0, n.jsxs)("div", {
                className: X.hy,
                children: [
                    (0, n.jsx)(m.Heading, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, n.jsx)(m.Text, { variant: "text-sm/medium", children: t }),
                ],
            }),
            r &&
                (0, n.jsx)("div", {
                    className: X.Rb,
                    children: (0, n.jsx)(m.QWc, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: Q.intl.string(Q.t.y6PSA3),
                        onClick: l,
                    }),
                }),
        ],
    });
}
function K(e) {
    let { wishlistInDmLength: i } = e,
        t = (0, O.GG)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.AC4, { children: Q.intl.string(Q.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: a()(X.Md, { [X.e6]: t }),
                children: Array.from(
                    { length: i },
                    t
                        ? (e, i) => (0, n.jsx)(R.O, {}, `placeholder-${i}`)
                        : (e, i) => (0, n.jsx)(T.A, { cardSize: L.Y.SMALL }, `placeholder-${i}`),
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
                  className: X.XI,
                  children: (0, n.jsx)(w.uz, {
                      item: i.item,
                      remainingCount: t,
                      onClick: s,
                      cardSize: L.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, H.L)(i.item)) {
                              if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
                                  let t = { items: i.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: X.Tz,
                                      children: (0, n.jsx)(h.X, { product: t, isHighlighted: e, user: r }),
                                  });
                              }
                              return (0, n.jsx)(j.A, {
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
            onOpenWishlist: f,
            onWishlistItemClick: p,
            tooltipConfigs: h,
            analyticsLocations: g,
            includedSources: I,
        } = e,
        S = (0, O.GG)("wishlist_banner"),
        C = r.useMemo(() => [...i, s].filter((e) => null != e), [i, s]),
        x = (0, c.bG)([B.A, P.A], () => P.A.getChannel(B.A.getChannelId()));
    return (
        (0, N.T)({ location: "wishlist_banner" }),
        (0, n.jsx)("ul", {
            className: a()(X.Md, { [X.e6]: S }),
            children: S
                ? C.map((e) => {
                      let { item: i, source: t } = e;
                      return null == i || null == i.sku
                          ? null
                          : (0, n.jsx)(
                                "li",
                                {
                                    className: X.XI,
                                    children: (0, n.jsx)(R.A, {
                                        sku: i.sku,
                                        wishlistId: m,
                                        source: t,
                                        wishlistOwner: d,
                                        hasMultipleSources: I.size > 1,
                                        onOpenWishlist: f,
                                        onClick: p,
                                        analyticsLocations: g,
                                        guildId: x?.guild_id,
                                        channelId: x?.id,
                                    }),
                                },
                                i.skuId,
                            );
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          i.map((e, i) => {
                              let { item: t, source: r } = e;
                              return (0, n.jsx)(
                                  "li",
                                  {
                                      className: X.XI,
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
                                                  giftingOrigin: F.vQ.DM_CHANNEL_WISHLIST,
                                                  source: r,
                                                  showIcons: o,
                                                  onWishlistItemClick: p,
                                                  analyticsLocations: g,
                                              });
                                          return s.shouldShow
                                              ? (0, E.Qc)(s)
                                                  ? (0, n.jsx)(u.m, {
                                                        text: s.title,
                                                        position: "top",
                                                        asContainer: !0,
                                                        delay: v.Zh,
                                                        children: a,
                                                    })
                                                  : (0, n.jsx)(_.u, {
                                                        title: s.title,
                                                        body: s.body ?? "",
                                                        asset: s.renderIcon?.(t),
                                                        assetSize: v.Q8,
                                                        position: "top",
                                                        asContainer: !0,
                                                        delay: v.Zh,
                                                        children: a,
                                                    })
                                              : a;
                                      })({ item: t, source: r }, i),
                                  },
                                  t.skuId,
                              );
                          }),
                          t && (0, n.jsx)($, { lastItem: s, remainingCount: l, giftRecipient: d, onOpenWishlist: f }),
                      ],
                  }),
        })
    );
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
        { analyticsLocations: h } = (0, p.Ay)(f.A.WISHLIST_BANNER),
        g = (0, O.GG)("wishlist_banner"),
        I = (0, v.KQ)(g),
        { theme: S, primaryColor: w, secondaryColor: j } = (0, C.A)({ user: i, displayProfile: s }),
        { profileThemeStyle: A, profileThemeClassName: L } = (0, x.A)({
            theme: S,
            themeType: null,
            primaryColor: w,
            secondaryColor: j,
        }),
        T = r.useCallback(() => {
            (0, b.openUserProfileModal)({ userId: i.id, tabSection: z.RP.WISHLIST });
        }, [i.id]),
        N = r.useMemo(() => "loading" === c, [c]),
        k = W.Ay.getName(i),
        H = (0, D.l7)({ totalUnownedWishlistItemCount: l, wishlistInDmLength: I, displayItems: o, recipientName: k }),
        y = s?.getBannerURL({ canAnimate: !1, size: 713 }),
        M = l > I,
        R = r.useMemo(() => (M ? o.slice(0, I - 1) : o), [o, M, I]),
        P = (0, E.bc)(R, i),
        B = M ? o[I - 1] : null,
        F = l - I + 1,
        [Q, $] = r.useState(!1),
        Z = r.useCallback(
            (e) => {
                if (e && !N && o.length > 0) {
                    let e = o.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    G.default.track(U.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
                        $(!0);
                }
            },
            [N, o, i.id, h],
        ),
        V = (0, d.K)(Z, void 0, !N && !Q),
        q = r.useMemo(
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
              className: a()(X.A1, L),
              style: A,
              children: [
                  null != y && (0, n.jsx)("div", { className: X.iL, style: { backgroundImage: `url(${y})` } }),
                  (0, n.jsx)(m.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(Y, {
                                      title: H.title,
                                      subtitle: H.subtitle,
                                      showViewAll: l > I && g,
                                      themeClass: e,
                                      onOpenWishlist: T,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          N || 0 === o.length
                                              ? (0, n.jsx)(K, { wishlistInDmLength: I })
                                              : (0, n.jsx)(J, {
                                                    items: R,
                                                    hasOverflow: M,
                                                    overflowItem: B,
                                                    overflowCount: F,
                                                    showIcons: H.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: _,
                                                    onOpenWishlist: T,
                                                    onWishlistItemClick: t,
                                                    tooltipConfigs: P,
                                                    analyticsLocations: h,
                                                    includedSources: q,
                                                }),
                                  }),
                                  null != u && !N && o.length > 0
                                      ? (0, n.jsx)("div", { className: e, children: u })
                                      : null,
                              ],
                          }),
                  }),
              ],
          });
}
function V(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        s = (0, O.GG)("wishlist_banner_new_recommendations"),
        a = (0, S.Ay)(i?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: d,
            skusToUserAndReason: c,
            status: _,
            defaultWishlistId: u,
        } = (0, k.rg)({ userId: i.id, numItems: (0, v.KQ)(s), source: v.B5.USER_PROFILE }),
        m = r.useMemo(
            () =>
                o()(
                    l.map((e) => {
                        let t = e.productLine === U.EZt.COLLECTIBLES ? H.A.fromSKU(e) : y.A.fromSKU(e),
                            n = null != c[e.id] && c[e.id][i.id] === M.j.WISHLIST ? v.uS.WISHLIST : v.uS.POPULAR;
                        return null != t ? { item: t, source: n } : null;
                    }),
                ),
            [l, i.id, c],
        ),
        f = r.useMemo(
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
        footerNotice: f
            ? (0, n.jsx)(I.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: X.jG })
            : null,
    });
}
