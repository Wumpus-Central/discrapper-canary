t.d(i, { s: () => q });
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
    h = t(688810),
    p = t(245068),
    g = t(871123),
    I = t(84511),
    C = t(950191),
    S = t(101928),
    b = t(195898),
    x = t(657331),
    w = t(804870),
    j = t(353157),
    A = t(18983),
    L = t(798048),
    T = t(834796),
    O = t(178213),
    v = t(33190),
    N = t(332772),
    k = t(594832),
    H = t(631784),
    y = t(872472),
    M = t(721932),
    R = t(310209),
    E = t(878244),
    P = t(46537),
    B = t(734057),
    G = t(309010),
    W = t(954571),
    D = t(427262),
    F = t(447719),
    U = t(788868),
    z = t(652215),
    Q = t(518477),
    X = t(985018),
    Y = t(683766);
function K(e) {
    let { title: i, subtitle: t, showViewAll: r, themeClass: s, onOpenWishlist: l } = e;
    return (0, n.jsxs)("div", {
        className: a()(Y.$R, s),
        children: [
            (0, n.jsxs)("div", {
                className: Y.hy,
                children: [
                    (0, n.jsx)(m.Heading, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, n.jsx)(m.Text, { variant: "text-sm/medium", children: t }),
                ],
            }),
            r &&
                (0, n.jsx)("div", {
                    className: Y.Rb,
                    children: (0, n.jsx)(m.QWc, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: X.intl.string(X.t.y6PSA3),
                        onClick: l,
                    }),
                }),
        ],
    });
}
function $(e) {
    let { wishlistInDmLength: i } = e,
        t = (0, O.GG)("wishlist_banner_loading_grid");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.AC4, { children: X.intl.string(X.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: a()(Y.Md, { [Y.e6]: t }),
                children: Array.from(
                    { length: i },
                    t
                        ? (e, i) => (0, n.jsx)(E.O, {}, `placeholder-${i}`)
                        : (e, i) => (0, n.jsx)(T.A, { cardSize: L.Y.SMALL }, `placeholder-${i}`),
                ),
            }),
        ],
    });
}
function J(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: r, onOpenWishlist: s } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: Y.XI,
                  children: (0, n.jsx)(w.uz, {
                      item: i.item,
                      remainingCount: t,
                      onClick: s,
                      cardSize: L.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, y.L)(i.item)) {
                              if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
                                  let t = { items: i.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: Y.Tz,
                                      children: (0, n.jsx)(p.X, { product: t, isHighlighted: e, user: r }),
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
function Z(e) {
    let {
            items: i,
            hasOverflow: t,
            overflowItem: s,
            overflowCount: l,
            showIcons: o,
            giftRecipient: d,
            defaultWishlistId: f,
            onOpenWishlist: h,
            onWishlistItemClick: p,
            tooltipConfigs: g,
            analyticsLocations: I,
            includedSources: C,
        } = e,
        S = (0, O.GG)("wishlist_banner"),
        b = r.useMemo(() => [...i, s].filter((e) => null != e), [i, s]),
        x = (0, c.bG)([G.A, B.A], () => B.A.getChannel(G.A.getChannelId())),
        w = r.useCallback(() => {
            p?.(), (0, m.s7G)();
        }, [p]);
    return (
        (0, N.T)({ location: "wishlist_banner" }),
        (0, n.jsx)("ul", {
            className: a()(Y.Md, { [Y.e6]: S }),
            children: S
                ? b.map((e) => {
                      let { item: i, source: t } = e;
                      return null == i || null == i.sku
                          ? null
                          : (0, n.jsx)(
                                "li",
                                {
                                    className: Y.XI,
                                    children: (0, n.jsx)(E.A, {
                                        sku: i.sku,
                                        wishlistId: f,
                                        source: t,
                                        wishlistOwner: d,
                                        hasMultipleSources: C.size > 1,
                                        onOpenWishlist: h,
                                        onClick: w,
                                        analyticsLocations: I,
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
                                      className: Y.XI,
                                      children: ((e, i) => {
                                          let { item: t, source: r } = e,
                                              s = g[i],
                                              a = (0, n.jsx)(A.A, {
                                                  item: t,
                                                  profileOwner: d,
                                                  wishlistId: f,
                                                  isOwner: !1,
                                                  cardSize: L.Y.SMALL,
                                                  showOverlayButton: !1,
                                                  giftingOrigin: U.vQ.DM_CHANNEL_WISHLIST,
                                                  source: r,
                                                  showIcons: o,
                                                  onWishlistItemClick: w,
                                                  analyticsLocations: I,
                                              });
                                          return s.shouldShow
                                              ? (0, P.Qc)(s)
                                                  ? (0, n.jsx)(u.m, {
                                                        text: s.title,
                                                        position: "top",
                                                        asContainer: !0,
                                                        delay: k.Zh,
                                                        children: a,
                                                    })
                                                  : (0, n.jsx)(_.u, {
                                                        title: s.title,
                                                        body: s.body ?? "",
                                                        asset: s.renderIcon?.(t),
                                                        assetSize: k.Q8,
                                                        position: "top",
                                                        asContainer: !0,
                                                        delay: k.Zh,
                                                        children: a,
                                                    })
                                              : a;
                                      })({ item: t, source: r }, i),
                                  },
                                  t.skuId,
                              );
                          }),
                          t && (0, n.jsx)(J, { lastItem: s, remainingCount: l, giftRecipient: d, onOpenWishlist: h }),
                      ],
                  }),
        })
    );
}
function V(e) {
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
        { analyticsLocations: p } = (0, h.Ay)(f.A.WISHLIST_BANNER),
        g = (0, O.GG)("wishlist_banner"),
        I = (0, v.H)("wishlist_banner"),
        C = (0, k.KQ)(g),
        {
            theme: w,
            primaryColor: j,
            secondaryColor: A,
        } = (0, S.A)({ user: i, displayProfile: s, forceUserTheme: g && I }),
        { profileThemeStyle: L, profileThemeClassName: T } = (0, b.A)({
            theme: w,
            themeType: null,
            primaryColor: j,
            secondaryColor: A,
            forceUserTheme: g && I,
        }),
        N = r.useCallback(() => {
            (0, x.openUserProfileModal)({ userId: i.id, tabSection: Q.RP.WISHLIST });
        }, [i.id]),
        H = r.useMemo(() => "loading" === c, [c]),
        y = D.Ay.getName(i),
        M = (0, F.l7)({ totalUnownedWishlistItemCount: l, wishlistInDmLength: C, displayItems: o, recipientName: y }),
        R = s?.getBannerURL({ canAnimate: !1, size: 713 }),
        E = l > C,
        B = r.useMemo(() => (E ? o.slice(0, C - 1) : o), [o, E, C]),
        G = (0, P.bc)(B, i),
        U = E ? o[C - 1] : null,
        X = l - C + 1,
        [J, V] = r.useState(!1),
        q = r.useCallback(
            (e) => {
                if (e && !H && o.length > 0) {
                    let e = o.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    W.default.track(z.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: p,
                        product_lines: Array.from(
                            new Set(
                                o.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        V(!0);
                }
            },
            [H, o, i.id, p],
        ),
        ee = (0, d.K)(q, void 0, !H && !J),
        ei = r.useMemo(
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
        : (0, n.jsx)("div", {
              className: Y.v8,
              children: (0, n.jsxs)("div", {
                  ref: ee,
                  className: a()(Y.A1, T),
                  style: L,
                  children: [
                      null != R && (0, n.jsx)("div", { className: Y.iL, style: { backgroundImage: `url(${R})` } }),
                      (0, n.jsx)(m.NPJ, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(K, {
                                          title: M.title,
                                          subtitle: M.subtitle,
                                          showViewAll: l > C && g,
                                          themeClass: e,
                                          onOpenWishlist: N,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: e,
                                          children:
                                              H || 0 === o.length
                                                  ? (0, n.jsx)($, { wishlistInDmLength: C })
                                                  : (0, n.jsx)(Z, {
                                                        items: B,
                                                        hasOverflow: E,
                                                        overflowItem: U,
                                                        overflowCount: X,
                                                        showIcons: M.showIcons,
                                                        giftRecipient: i,
                                                        defaultWishlistId: _,
                                                        onOpenWishlist: N,
                                                        onWishlistItemClick: t,
                                                        tooltipConfigs: G,
                                                        analyticsLocations: p,
                                                        includedSources: ei,
                                                    }),
                                      }),
                                      null != u && !H && o.length > 0
                                          ? (0, n.jsx)("div", { className: e, children: u })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function q(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        s = (0, O.GG)("wishlist_banner_new_recommendations"),
        a = (0, C.Ay)(i?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: d,
            skusToUserAndReason: c,
            status: _,
            defaultWishlistId: u,
        } = (0, H.rg)({ userId: i.id, numItems: (0, k.KQ)(s), source: k.B5.USER_PROFILE }),
        m = r.useMemo(
            () =>
                o()(
                    l.map((e) => {
                        let t = e.productLine === z.EZt.COLLECTIBLES ? y.A.fromSKU(e) : M.A.fromSKU(e),
                            n = null != c[e.id] && c[e.id][i.id] === R.j.WISHLIST ? k.uS.WISHLIST : k.uS.POPULAR;
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
    return (0, n.jsx)(V, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: a,
        totalUnownedWishlistItemCount: d,
        fetchState: _,
        displayItems: m,
        defaultWishlistId: u,
        footerNotice: f
            ? (0, n.jsx)(I.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: Y.jG })
            : null,
    });
}
