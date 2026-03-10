i.d(t, { A: () => q, s: () => V });
var n = i(627968),
    r = i(64700),
    s = i(503698),
    a = i.n(s),
    l = i(791282),
    o = i.n(l),
    d = i(172218),
    c = i(311907),
    u = i(459192),
    _ = i(990078),
    m = i(397927),
    f = i(793574),
    p = i(688810),
    h = i(245068),
    g = i(871123),
    I = i(84511),
    C = i(950191),
    S = i(101928),
    x = i(195898),
    b = i(657331),
    w = i(804870),
    j = i(353157),
    A = i(18983),
    L = i(798048),
    T = i(834796),
    O = i(178213),
    N = i(594832),
    v = i(996353),
    k = i(631784),
    y = i(872472),
    H = i(721932),
    M = i(310209),
    R = i(878244),
    G = i(46537),
    P = i(734057),
    E = i(309010),
    W = i(954571),
    B = i(427262),
    F = i(447719),
    D = i(788868),
    U = i(652215),
    Q = i(518477),
    z = i(985018),
    K = i(195416);
function X(e) {
    let { title: t, subtitle: i, showViewAll: r, themeClass: s, onOpenWishlist: l } = e;
    return (0, n.jsxs)("div", {
        className: a()(K.$R, s),
        children: [
            (0, n.jsxs)("div", {
                className: K.hy,
                children: [
                    (0, n.jsx)(m.Heading, { variant: "heading-lg/bold", children: t }),
                    null != i && (0, n.jsx)(m.Text, { variant: "text-sm/medium", children: i }),
                ],
            }),
            r &&
                (0, n.jsx)("div", {
                    className: K.Rb,
                    children: (0, n.jsx)(m.QWc, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: z.intl.string(z.t.y6PSA3),
                        onClick: l,
                    }),
                }),
        ],
    });
}
function Y(e) {
    let { wishlistInDmLength: t } = e,
        i = (0, O.GG)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.AC4, { children: z.intl.string(z.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: a()(K.Md, { [K.e6]: i }),
                children: Array.from(
                    { length: t },
                    i
                        ? (e, t) => (0, n.jsx)(R.O, {}, `placeholder-${t}`)
                        : (e, t) => (0, n.jsx)(T.A, { cardSize: L.Y.SMALL }, `placeholder-${t}`),
                ),
            }),
        ],
    });
}
function $(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: r, onOpenWishlist: s } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: K.XI,
                  children: (0, n.jsx)(w.uz, {
                      item: t.item,
                      remainingCount: i,
                      onClick: s,
                      cardSize: L.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, y.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: K.Tz,
                                      children: (0, n.jsx)(h.X, { product: i, isHighlighted: e, user: r }),
                                  });
                              }
                              return (0, n.jsx)(j.A, {
                                  item: t.item,
                                  profileOwner: r,
                                  isHighlighted: e,
                                  cardSize: L.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              `overflow-${t.item.skuId}`,
          );
}
function J(e) {
    let {
            items: t,
            hasOverflow: i,
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
        C = (0, O.GG)("wishlist_banner"),
        S = r.useMemo(() => [...t, s].filter((e) => null != e), [t, s]),
        x = (0, c.bG)([E.A, P.A], () => P.A.getChannel(E.A.getChannelId()));
    return (0, n.jsx)("ul", {
        className: a()(K.Md, { [K.e6]: C }),
        children: C
            ? S.map((e) => {
                  let { item: t, source: i } = e;
                  return null == t || null == t.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: K.XI,
                                children: (0, n.jsx)(R.A, {
                                    sku: t.sku,
                                    wishlistId: m,
                                    source: i,
                                    wishlistOwner: d,
                                    hasMultipleSources: I.size > 1,
                                    onOpenWishlist: f,
                                    onClick: p,
                                    analyticsLocations: g,
                                    guildId: x?.guild_id,
                                    channelId: x?.id,
                                }),
                            },
                            t.skuId,
                        );
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      t.map((e, t) => {
                          let { item: i, source: r } = e;
                          return (0, n.jsx)(
                              "li",
                              {
                                  className: K.XI,
                                  children: ((e, t) => {
                                      let { item: i, source: r } = e,
                                          s = h[t],
                                          a = (0, n.jsx)(A.A, {
                                              item: i,
                                              profileOwner: d,
                                              wishlistId: m,
                                              isOwner: !1,
                                              cardSize: L.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: D.vQ.DM_CHANNEL_WISHLIST,
                                              source: r,
                                              showIcons: o,
                                              onWishlistItemClick: p,
                                              analyticsLocations: g,
                                          });
                                      return s.shouldShow
                                          ? (0, G.Qc)(s)
                                              ? (0, n.jsx)(_.m, {
                                                    text: s.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: N.Zh,
                                                    children: a,
                                                })
                                              : (0, n.jsx)(u.u, {
                                                    title: s.title,
                                                    body: s.body ?? "",
                                                    asset: s.renderIcon?.(i),
                                                    assetSize: N.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: N.Zh,
                                                    children: a,
                                                })
                                          : a;
                                  })({ item: i, source: r }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)($, { lastItem: s, remainingCount: l, giftRecipient: d, onOpenWishlist: f }),
                  ],
              }),
    });
}
function Z(e) {
    let {
            giftRecipient: t,
            onWishlistItemClick: i,
            displayProfile: s,
            totalUnownedWishlistItemCount: l,
            displayItems: o,
            fetchState: c,
            defaultWishlistId: u,
            footerNotice: _,
        } = e,
        { analyticsLocations: h } = (0, p.Ay)(f.A.WISHLIST_BANNER),
        g = (0, O.GG)("wishlist_banner"),
        I = (0, N.KQ)(g),
        { theme: C, primaryColor: w, secondaryColor: j } = (0, S.A)({ user: t, displayProfile: s }),
        { profileThemeStyle: A, profileThemeClassName: L } = (0, x.A)({
            theme: C,
            themeType: null,
            primaryColor: w,
            secondaryColor: j,
        }),
        T = r.useCallback(() => {
            (0, b.openUserProfileModal)({ userId: t.id, tabSection: Q.RP.WISHLIST });
        }, [t.id]),
        v = r.useMemo(() => "loading" === c, [c]),
        k = B.Ay.getName(t),
        y = (0, F.l7)({ totalUnownedWishlistItemCount: l, wishlistInDmLength: I, displayItems: o, recipientName: k }),
        H = s?.getBannerURL({ canAnimate: !1, size: 713 }),
        M = l > I,
        R = r.useMemo(() => (M ? o.slice(0, I - 1) : o), [o, M, I]),
        P = (0, G.bc)(R, t),
        E = M ? o[I - 1] : null,
        D = l - I + 1,
        [z, $] = r.useState(!1),
        Z = r.useCallback(
            (e) => {
                if (e && !v && o.length > 0) {
                    let e = o.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    W.default.track(U.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: h,
                        product_lines: Array.from(
                            new Set(
                                o.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        $(!0);
                }
            },
            [v, o, t.id, h],
        ),
        V = (0, d.K)(Z, void 0, !v && !z),
        q = r.useMemo(
            () =>
                new Set(
                    o.map((e) => {
                        let { source: t } = e;
                        return t;
                    }),
                ),
            [o],
        );
    return "error" === c
        ? null
        : (0, n.jsxs)("div", {
              ref: V,
              className: a()(K.A1, L),
              style: A,
              children: [
                  null != H && (0, n.jsx)("div", { className: K.iL, style: { backgroundImage: `url(${H})` } }),
                  (0, n.jsx)(m.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(X, {
                                      title: y.title,
                                      subtitle: y.subtitle,
                                      showViewAll: l > I && g,
                                      themeClass: e,
                                      onOpenWishlist: T,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          v || 0 === o.length
                                              ? (0, n.jsx)(Y, { wishlistInDmLength: I })
                                              : (0, n.jsx)(J, {
                                                    items: R,
                                                    hasOverflow: M,
                                                    overflowItem: E,
                                                    overflowCount: D,
                                                    showIcons: y.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: u,
                                                    onOpenWishlist: T,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: P,
                                                    analyticsLocations: h,
                                                    includedSources: q,
                                                }),
                                  }),
                                  null != _ && !v && o.length > 0
                                      ? (0, n.jsx)("div", { className: e, children: _ })
                                      : null,
                              ],
                          }),
                  }),
              ],
          });
}
function V(e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, O.GG)("wishlist_banner_new_recommendations"),
        a = (0, C.Ay)(t?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: d,
            skusToUserAndReason: c,
            status: u,
            defaultWishlistId: _,
        } = (0, k.r)({ userId: t.id, numItems: (0, N.KQ)(s), source: N.B5.USER_PROFILE }),
        m = r.useMemo(
            () =>
                o()(
                    l.map((e) => {
                        let i = e.productLine === U.EZt.COLLECTIBLES ? y.A.fromSKU(e) : H.A.fromSKU(e),
                            n = null != c[e.id] && c[e.id][t.id] === M.j.WISHLIST ? N.uS.WISHLIST : N.uS.POPULAR;
                        return null != i ? { item: i, source: n } : null;
                    }),
                ),
            [l, t.id, c],
        ),
        f = r.useMemo(
            () =>
                m.some((e) => {
                    let { item: t } = e;
                    return (0, g.bF)(t.sku);
                }),
            [m],
        );
    return (0, n.jsx)(Z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: a,
        totalUnownedWishlistItemCount: d,
        fetchState: u,
        displayItems: m,
        defaultWishlistId: _,
        footerNotice: f
            ? (0, n.jsx)(I.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: K.jG })
            : null,
    });
}
let q = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        s = (0, O.GG)("wishlist_banner"),
        a = (0, C.Ay)(t?.id),
        {
            displayItems: l,
            totalUnownedWishlistItemCount: o,
            fetchState: d,
            defaultWishlistId: c,
        } = (0, v.A)({ user: t, numItems: (0, N.KQ)(s) }),
        u = r.useMemo(
            () =>
                l.some((e) => {
                    let { item: t } = e;
                    return (0, g.bF)(t.sku);
                }),
            [l],
        );
    return (0, n.jsx)(Z, {
        giftRecipient: t,
        onWishlistItemClick: i,
        displayProfile: a,
        totalUnownedWishlistItemCount: o,
        fetchState: d.status,
        displayItems: l,
        defaultWishlistId: c,
        footerNotice: u ? (0, n.jsx)(I.A, { location: "dm_gift_modal_wishlist", className: K.jG }) : null,
    });
};
