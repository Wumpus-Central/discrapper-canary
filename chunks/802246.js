i.d(t, {
    A: () => F,
}),
    i(896048);
var n = i(627968),
    r = i(64700),
    l = i(503698),
    s = i.n(l),
    a = i(172218),
    o = i(459192),
    u = i(990078),
    c = i(397927),
    d = i(793574),
    m = i(688810),
    p = i(245068),
    f = i(950191),
    _ = i(101928),
    h = i(195898),
    g = i(657331),
    I = i(804870),
    S = i(353157),
    x = i(18983),
    C = i(242640),
    b = i(834796),
    w = i(178213),
    y = i(594832),
    O = i(996353),
    j = i(872472),
    T = i(721932),
    v = i(878244),
    k = i(46537),
    A = i(954571),
    L = i(427262),
    P = i(788868),
    M = i(652215),
    N = i(518477),
    E = i(985018),
    H = i(195416);
let R = {
    FULL_WISHLIST: {
        title: E.intl.string(E.t["7lZ31J"]),
        getSubtitle: (e) =>
            E.intl.formatToPlainString(E.t.BjEX38, {
                username: e,
            }),
        showIcons: !1,
    },
    MIXED: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: (e) =>
            E.intl.formatToPlainString(E.t.dIDKgi, {
                username: e,
            }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: (e) =>
            E.intl.formatToPlainString(E.t.wyMp1j, {
                username: e,
            }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: E.intl.string(E.t.BCi1gT),
        getSubtitle: (e) =>
            E.intl.formatToPlainString(E.t.BjEX38, {
                username: e,
            }),
        showIcons: !1,
    },
};

function B(e) {
    let { title: t, subtitle: i, themeClass: r } = e;
    return (0, n.jsx)("div", {
        className: s()(H.$R, r),
        children: (0, n.jsxs)("div", {
            className: H.hy,
            children: [
                (0, n.jsx)(c.Heading, {
                    variant: "heading-lg/bold",
                    children: t,
                }),
                (0, n.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children: i,
                }),
            ],
        }),
    });
}

function G() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.AC4, {
                children: E.intl.string(E.t.pfChQr),
            }),
            (0, n.jsx)("div", {
                className: H.Md,
                children: Array.from(
                    {
                        length: y.pl,
                    },
                    (e, t) =>
                        (0, n.jsx)(
                            b.A,
                            {
                                cardSize: C.Y.SMALL,
                            },
                            "placeholder-".concat(t),
                        ),
                ),
            }),
        ],
    });
}

function W(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: r, onOpenWishlist: l } = e;
    return null == t
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: H.XI,
                  children: (0, n.jsx)(I.uz, {
                      item: t.item,
                      remainingCount: i,
                      onClick: l,
                      cardSize: C.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, j.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = {
                                      items: t.item.bundleItems,
                                  };
                                  return (0, n.jsx)("div", {
                                      className: H.Tz,
                                      children: (0, n.jsx)(p.X, {
                                          product: i,
                                          isHighlighted: e,
                                          user: r,
                                      }),
                                  });
                              }
                              return (0, n.jsx)(S.A, {
                                  item: t.item,
                                  profileOwner: r,
                                  isHighlighted: e,
                                  cardSize: C.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              "overflow-".concat(t.item.skuId),
          );
}

function D(e) {
    let {
            items: t,
            hasOverflow: i,
            overflowItem: l,
            overflowCount: s,
            showIcons: a,
            giftRecipient: c,
            defaultWishlistId: d,
            onOpenWishlist: m,
            onWishlistItemClick: p,
            tooltipConfigs: f,
            analyticsLocations: _,
            totalUnownedWishlistItems: h,
            hasMultipleTypes: g,
            hasMultipleSources: I,
        } = e,
        S = (0, w.G)("wishlist_banner"),
        b = r.useMemo(() => [...t, l].filter((e) => null != e), [t, l]);
    return (0, n.jsx)("ul", {
        className: H.Md,
        children: S
            ? b.map((e, t) => {
                  let { item: i, source: r } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: H.XI,
                                children: (0, n.jsx)(v.A, {
                                    index: t,
                                    sku: i.sku,
                                    wishlistId: d,
                                    source: r,
                                    wishlistOwner: c,
                                    hasMultipleTypes: g,
                                    hasMultipleSources: I,
                                    onOpenWishlist: m,
                                    onClick: p,
                                    analyticsLocations: _,
                                    totalUnownedWishlistItems: h,
                                }),
                            },
                            i.skuId,
                        );
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      t.map((e, t) => {
                          let { item: i, source: r } = e;
                          return (0, n.jsx)(
                              "li",
                              {
                                  className: H.XI,
                                  children: ((e, t) => {
                                      var i, r;
                                      let { item: l, source: s } = e,
                                          m = f[t],
                                          h = (0, n.jsx)(x.A, {
                                              item: l,
                                              profileOwner: c,
                                              wishlistId: d,
                                              isOwner: !1,
                                              cardSize: C.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: P.vQ.DM_CHANNEL_WISHLIST,
                                              source: s,
                                              showIcons: a,
                                              onWishlistItemClick: p,
                                              analyticsLocations: _,
                                          });
                                      return m.shouldShow
                                          ? null != m.title && null == m.body && null == m.renderIcon
                                              ? (0, n.jsx)(u.m, {
                                                    text: m.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: y.Zh,
                                                    children: h,
                                                })
                                              : (0, n.jsx)(o.u, {
                                                    title: m.title,
                                                    body: null != (i = m.body) ? i : "",
                                                    asset: null == (r = m.renderIcon) ? void 0 : r.call(m, l),
                                                    assetSize: y.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: y.Zh,
                                                    children: h,
                                                })
                                          : h;
                                  })(
                                      {
                                          item: i,
                                          source: r,
                                      },
                                      t,
                                  ),
                              },
                              i.skuId,
                          );
                      }),
                      i &&
                          (0, n.jsx)(W, {
                              lastItem: l,
                              remainingCount: s,
                              giftRecipient: c,
                              onOpenWishlist: m,
                          }),
                  ],
              }),
    });
}
let F = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        { analyticsLocations: l } = (0, m.Ay)(d.A.WISHLIST_BANNER),
        o = (0, f.Ay)(null == t ? void 0 : t.id),
        {
            displayItems: u,
            totalUnownedWishlistItemCount: p,
            fetchState: I,
            defaultWishlistId: S,
        } = (0, O.A)({
            user: t,
            numItems: y.pl,
            location: "Wishlist Banner",
        }),
        x = r.useMemo(() => "loading" === I.status, [I.status]),
        C = L.Ay.getName(t),
        {
            theme: b,
            primaryColor: w,
            secondaryColor: j,
        } = (0, _.A)({
            user: t,
            displayProfile: o,
        }),
        { profileThemeStyle: v, profileThemeClassName: P } = (0, h.A)({
            theme: b,
            themeType: null,
            primaryColor: w,
            secondaryColor: j,
        }),
        E = r.useCallback(() => {
            (0, g.openUserProfileModal)({
                userId: t.id,
                tabSection: N.RP.WISHLIST,
            });
        }, [t.id]),
        W =
            R[
                r.useMemo(
                    () =>
                        p >= y.pl
                            ? "FULL_WISHLIST"
                            : p > 0
                              ? "MIXED"
                              : u.length > 0 &&
                                  u.every((e) => {
                                      let { item: t, source: i } = e;
                                      return i === y.uS.POPULAR && (0, T.$)(t);
                                  })
                                ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                : "SHOP_ONLY",
                    [p, u],
                )
            ],
        F =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        U = p > y.pl,
        Y = r.useMemo(() => (U ? u.slice(0, y.pl - 1) : u), [u, U]),
        z = (0, k.b)(Y, t),
        X = U ? u[y.pl - 1] : null,
        Q = p - y.pl + 1,
        [J, K] = r.useState(!1),
        Z = r.useCallback(
            (e) => {
                if (e && !x && u.length > 0) {
                    let e = u.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    A.default.track(M.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: l,
                        product_lines: Array.from(
                            new Set(
                                u.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        K(!0);
                }
            },
            [x, u, t.id, l],
        ),
        q = (0, a.K)(Z, void 0, !x && !J),
        { hasMultipleTypes: V, hasMultipleSources: $ } = r.useMemo(
            () => ({
                hasMultipleTypes:
                    new Set(
                        u.map((e) => {
                            let { item: t } = e;
                            return t.skuProductLine;
                        }),
                    ).size > 1,
                hasMultipleSources:
                    new Set(
                        u.map((e) => {
                            let { source: t } = e;
                            return t;
                        }),
                    ).size > 1,
            }),
            [u],
        );
    return "error" === I.status
        ? null
        : (0, n.jsxs)("div", {
              ref: q,
              className: s()(H.A1, P),
              style: v,
              children: [
                  null != F &&
                      (0, n.jsx)("div", {
                          className: H.iL,
                          style: {
                              backgroundImage: "url(".concat(F, ")"),
                          },
                      }),
                  (0, n.jsx)(c.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(B, {
                                      title: W.title,
                                      subtitle: W.getSubtitle(C),
                                      themeClass: e,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          x || 0 === u.length
                                              ? (0, n.jsx)(G, {})
                                              : (0, n.jsx)(D, {
                                                    items: Y,
                                                    hasOverflow: U,
                                                    overflowItem: X,
                                                    overflowCount: Q,
                                                    showIcons: W.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: S,
                                                    onOpenWishlist: E,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: z,
                                                    analyticsLocations: l,
                                                    totalUnownedWishlistItems: p,
                                                    hasMultipleTypes: V,
                                                    hasMultipleSources: $,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
