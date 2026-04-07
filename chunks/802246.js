t.d(i, { s: () => et });
var r = t(627968),
    n = t(64700),
    a = t(503698),
    s = t.n(a),
    l = t(791282),
    o = t.n(l),
    c = t(835245),
    d = t(172218),
    _ = t(311907),
    u = t(459192),
    m = t(990078),
    p = t(397927),
    h = t(444927),
    f = t(793574),
    g = t(688810),
    I = t(245068),
    b = t(871123),
    C = t(84511),
    S = t(950191),
    x = t(101928),
    w = t(195898),
    T = t(657331),
    L = t(804870),
    j = t(353157),
    A = t(18983),
    k = t(798048),
    O = t(834796),
    v = t(299679),
    H = t(178213),
    N = t(33190),
    M = t(332772),
    y = t(594832),
    R = t(631784),
    B = t(872472),
    P = t(721932),
    G = t(310209),
    E = t(878244),
    W = t(46537),
    D = t(734057),
    F = t(309010),
    Q = t(954571),
    U = t(427262),
    z = t(447719),
    Y = t(788868),
    K = t(652215),
    X = t(518477),
    Z = t(985018),
    V = t(283573);
function $(e) {
    let { title: i, subtitle: t, showViewAll: n, themeClass: a, onOpenWishlist: l } = e;
    return (0, r.jsxs)("div", {
        className: s()(V.$R, a),
        children: [
            (0, r.jsxs)("div", {
                className: V.hy,
                children: [
                    (0, r.jsx)(p.Heading, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, r.jsx)(p.Text, { variant: "text-sm/medium", children: t }),
                ],
            }),
            n &&
                (0, r.jsx)("div", {
                    className: V.Rb,
                    children: (0, r.jsx)(p.QWc, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: Z.intl.string(Z.t.y6PSA3),
                        onClick: l,
                    }),
                }),
        ],
    });
}
function J(e) {
    let { wishlistInDmLength: i } = e,
        t = (0, H.GG)("wishlist_banner_loading_grid");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.AC4, { children: Z.intl.string(Z.t.pfChQr) }),
            (0, r.jsx)("div", {
                className: s()(V.Md, { [V.e6]: t }),
                children: Array.from(
                    { length: i },
                    t
                        ? (e, i) => (0, r.jsx)(E.O, {}, `placeholder-${i}`)
                        : (e, i) => (0, r.jsx)(O.A, { cardSize: k.Y.SMALL }, `placeholder-${i}`),
                ),
            }),
        ],
    });
}
function q(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: n, onOpenWishlist: a } = e;
    return null == i
        ? null
        : (0, r.jsx)(
              "li",
              {
                  className: V.XI,
                  children: (0, r.jsx)(L.uz, {
                      item: i.item,
                      remainingCount: t,
                      onClick: a,
                      cardSize: k.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, B.L)(i.item)) {
                              if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
                                  let t = { items: i.item.bundleItems };
                                  return (0, r.jsx)("div", {
                                      className: V.Tz,
                                      children: (0, r.jsx)(I.X, { product: t, isHighlighted: e, user: n }),
                                  });
                              }
                              return (0, r.jsx)(j.A, {
                                  item: i.item,
                                  profileOwner: n,
                                  isHighlighted: e,
                                  cardSize: k.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              `overflow-${i.item.skuId}`,
          );
}
function ee(e) {
    let {
            items: i,
            hasOverflow: t,
            overflowItem: a,
            overflowCount: l,
            showIcons: o,
            giftRecipient: c,
            defaultWishlistId: d,
            onOpenWishlist: h,
            onWishlistItemClick: f,
            tooltipConfigs: g,
            analyticsLocations: I,
            includedSources: b,
        } = e,
        C = (0, H.GG)("wishlist_banner"),
        S = n.useMemo(() => [...i, a].filter((e) => null != e), [i, a]),
        x = (0, _.bG)([F.A, D.A], () => D.A.getChannel(F.A.getChannelId())),
        w = n.useCallback(() => {
            f?.(), (0, p.s7G)();
        }, [f]);
    return (
        (0, M.T)({ location: "wishlist_banner" }),
        (0, r.jsx)("ul", {
            className: s()(V.Md, { [V.e6]: C }),
            children: C
                ? S.map((e, i) => {
                      let { item: t, source: n } = e;
                      return null == t || null == t.sku
                          ? null
                          : (0, r.jsx)(
                                "li",
                                {
                                    className: V.XI,
                                    children: (0, r.jsx)(v.dB, {
                                        newValue: {
                                            positionInSection: i,
                                            skuId: t.skuId,
                                            itemSource: n === y.uS.WISHLIST ? "organic" : "recommendation",
                                            productLine: t.skuProductLine,
                                        },
                                        children: (0, r.jsx)(E.A, {
                                            sku: t.sku,
                                            wishlistId: d,
                                            source: n,
                                            wishlistOwner: c,
                                            hasMultipleSources: b.size > 1,
                                            onOpenWishlist: h,
                                            onClick: w,
                                            analyticsLocations: I,
                                            guildId: x?.guild_id,
                                            channelId: x?.id,
                                        }),
                                    }),
                                },
                                t.skuId,
                            );
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          i.map((e, i) => {
                              let { item: t, source: n } = e;
                              return (0, r.jsx)(
                                  "li",
                                  {
                                      className: V.XI,
                                      children: ((e, i) => {
                                          let { item: t, source: n } = e,
                                              a = g[i],
                                              s = (0, r.jsx)(A.A, {
                                                  item: t,
                                                  profileOwner: c,
                                                  wishlistId: d,
                                                  isOwner: !1,
                                                  cardSize: k.Y.SMALL,
                                                  showOverlayButton: !1,
                                                  giftingOrigin: Y.vQ.DM_CHANNEL_WISHLIST,
                                                  source: n,
                                                  showIcons: o,
                                                  onWishlistItemClick: w,
                                                  analyticsLocations: I,
                                              });
                                          return a.shouldShow
                                              ? (0, W.Qc)(a)
                                                  ? (0, r.jsx)(m.m, {
                                                        text: a.title,
                                                        position: "top",
                                                        asContainer: !0,
                                                        delay: y.Zh,
                                                        children: s,
                                                    })
                                                  : (0, r.jsx)(u.u, {
                                                        title: a.title,
                                                        body: a.body ?? "",
                                                        asset: a.renderIcon?.(t),
                                                        assetSize: y.Q8,
                                                        position: "top",
                                                        asContainer: !0,
                                                        delay: y.Zh,
                                                        children: s,
                                                    })
                                              : s;
                                      })({ item: t, source: n }, i),
                                  },
                                  t.skuId,
                              );
                          }),
                          t && (0, r.jsx)(q, { lastItem: a, remainingCount: l, giftRecipient: c, onOpenWishlist: h }),
                      ],
                  }),
        })
    );
}
function ei(e) {
    let {
            giftRecipient: i,
            onWishlistItemClick: t,
            displayProfile: a,
            totalUnownedWishlistItemCount: l,
            displayItems: o,
            fetchState: _,
            defaultWishlistId: u,
            footerNotice: m,
        } = e,
        { analyticsLocations: I } = (0, g.Ay)(f.A.WISHLIST_BANNER),
        b = (0, h.A)(() => (0, c.A)()),
        C = (0, H.GG)("wishlist_banner"),
        S = (0, N.H)("wishlist_banner"),
        L = (0, y.KQ)(C),
        {
            theme: j,
            primaryColor: A,
            secondaryColor: k,
        } = (0, x.A)({ user: i, displayProfile: a, forceUserTheme: C && S }),
        { profileThemeStyle: O, profileThemeClassName: M } = (0, w.A)({
            theme: j,
            themeType: null,
            primaryColor: A,
            secondaryColor: k,
            forceUserTheme: C && S,
        }),
        R = n.useCallback(() => {
            (0, T.openUserProfileModal)({ userId: i.id, tabSection: X.RP.WISHLIST });
        }, [i.id]),
        B = n.useMemo(() => "loading" === _, [_]),
        P = U.Ay.getName(i),
        G = (0, z.l7)({ totalUnownedWishlistItemCount: l, wishlistInDmLength: L, displayItems: o, recipientName: P }),
        E = a?.getBannerURL({ canAnimate: !1, size: 713 }),
        D = l > L,
        F = n.useMemo(() => (D ? o.slice(0, L - 1) : o), [o, D, L]),
        Y = (0, W.bc)(F, i),
        Z = D ? o[L - 1] : null,
        q = l - L + 1,
        [ei, et] = n.useState(!1),
        er = n.useCallback(
            (e) => {
                if (e && !B && o.length > 0) {
                    let e = o.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    Q.default.track(K.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: I,
                        product_lines: Array.from(
                            new Set(
                                o.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        et(!0);
                }
            },
            [B, o, i.id, I],
        ),
        en = (0, d.K)(er, void 0, !B && !ei),
        ea = n.useMemo(
            () =>
                new Set(
                    o.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [o],
        );
    return "error" === _
        ? null
        : (0, r.jsx)("div", {
              className: V.v8,
              children: (0, r.jsxs)("div", {
                  ref: en,
                  className: s()(V.A1, M),
                  style: O,
                  children: [
                      null != E && (0, r.jsx)("div", { className: V.iL, style: { backgroundImage: `url(${E})` } }),
                      (0, r.jsx)(p.NPJ, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)($, {
                                          title: G.title,
                                          subtitle: G.subtitle,
                                          showViewAll: l > L && C,
                                          themeClass: e,
                                          onOpenWishlist: R,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: e,
                                          children:
                                              B || 0 === o.length
                                                  ? (0, r.jsx)(J, { wishlistInDmLength: L })
                                                  : (0, r.jsx)(v.dB, {
                                                        newValue: {
                                                            impressionSessionId: b,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: i.id,
                                                            wishlistId: u,
                                                            analyticsLocations: I,
                                                        },
                                                        children: (0, r.jsx)(ee, {
                                                            items: F,
                                                            hasOverflow: D,
                                                            overflowItem: Z,
                                                            overflowCount: q,
                                                            showIcons: G.showIcons,
                                                            giftRecipient: i,
                                                            defaultWishlistId: u,
                                                            onOpenWishlist: R,
                                                            onWishlistItemClick: t,
                                                            tooltipConfigs: Y,
                                                            analyticsLocations: I,
                                                            includedSources: ea,
                                                        }),
                                                    }),
                                      }),
                                      null != m && !B && o.length > 0
                                          ? (0, r.jsx)("div", { className: e, children: m })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function et(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        a = (0, H.GG)("wishlist_banner_new_recommendations"),
        s = (0, S.Ay)(i?.id),
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: d,
            status: _,
            defaultWishlistId: u,
        } = (0, R.rg)({ userId: i.id, numItems: (0, y.KQ)(a), source: y.B5.USER_PROFILE }),
        m = n.useMemo(
            () =>
                o()(
                    l.map((e) => {
                        let t = e.productLine === K.EZt.COLLECTIBLES ? B.A.fromSKU(e) : P.A.fromSKU(e),
                            r = null != d[e.id] && d[e.id][i.id] === G.j.WISHLIST ? y.uS.WISHLIST : y.uS.POPULAR;
                        return null != t ? { item: t, source: r } : null;
                    }),
                ),
            [l, i.id, d],
        ),
        p = n.useMemo(
            () =>
                m.some((e) => {
                    let { item: i } = e;
                    return (0, b.bF)(i.sku);
                }),
            [m],
        );
    return (0, r.jsx)(ei, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: s,
        totalUnownedWishlistItemCount: c,
        fetchState: _,
        displayItems: m,
        defaultWishlistId: u,
        footerNotice: p
            ? (0, r.jsx)(C.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: V.jG })
            : null,
    });
}
