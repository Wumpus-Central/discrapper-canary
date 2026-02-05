i.d(t, { A: () => F });
var n = i(627968),
    r = i(64700),
    l = i(503698),
    s = i.n(l),
    a = i(172218),
    o = i(459192),
    u = i(990078),
    d = i(397927),
    c = i(793574),
    m = i(688810),
    p = i(245068),
    _ = i(950191),
    f = i(101928),
    h = i(195898),
    g = i(657331),
    I = i(804870),
    S = i(353157),
    x = i(18983),
    C = i(242640),
    w = i(834796),
    T = i(178213),
    b = i(594832),
    j = i(996353),
    A = i(872472),
    y = i(721932),
    O = i(878244),
    L = i(46537),
    k = i(954571),
    N = i(427262),
    P = i(788868),
    M = i(652215),
    v = i(518477),
    E = i(985018),
    H = i(195416);
let R = {
    FULL_WISHLIST: {
        title: E.intl.string(E.t["7lZ31J"]),
        getSubtitle: (e) => E.intl.formatToPlainString(E.t.BjEX38, { username: e }),
        showIcons: !1,
    },
    MIXED: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: (e) => E.intl.formatToPlainString(E.t.dIDKgi, { username: e }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: (e) => E.intl.formatToPlainString(E.t.wyMp1j, { username: e }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: E.intl.string(E.t.BCi1gT),
        getSubtitle: (e) => E.intl.formatToPlainString(E.t.BjEX38, { username: e }),
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
                (0, n.jsx)(d.Heading, { variant: "heading-lg/bold", children: t }),
                (0, n.jsx)(d.Text, { variant: "text-sm/medium", children: i }),
            ],
        }),
    });
}
function G() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.AC4, { children: E.intl.string(E.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: H.Md,
                children: Array.from({ length: b.pl }, (e, t) =>
                    (0, n.jsx)(w.A, { cardSize: C.Y.SMALL }, `placeholder-${t}`),
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
                          if ((0, A.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = { items: t.item.bundleItems };
                                  return (0, n.jsx)("div", {
                                      className: H.Tz,
                                      children: (0, n.jsx)(p.X, { product: i, isHighlighted: e, user: r }),
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
              `overflow-${t.item.skuId}`,
          );
}
function D(e) {
    let {
            items: t,
            hasOverflow: i,
            overflowItem: l,
            overflowCount: s,
            showIcons: a,
            giftRecipient: d,
            defaultWishlistId: c,
            onOpenWishlist: m,
            onWishlistItemClick: p,
            tooltipConfigs: _,
            analyticsLocations: f,
            totalUnownedWishlistItems: h,
            hasMultipleTypes: g,
            hasMultipleSources: I,
        } = e,
        S = (0, T.G)("wishlist_banner"),
        w = r.useMemo(() => [...t, l].filter((e) => null != e), [t, l]);
    return (0, n.jsx)("ul", {
        className: H.Md,
        children: S
            ? w.map((e, t) => {
                  let { item: i, source: r } = e;
                  return null == i || null == i.sku
                      ? null
                      : (0, n.jsx)(
                            "li",
                            {
                                className: H.XI,
                                children: (0, n.jsx)(O.A, {
                                    index: t,
                                    sku: i.sku,
                                    wishlistId: c,
                                    source: r,
                                    wishlistOwner: d,
                                    hasMultipleTypes: g,
                                    hasMultipleSources: I,
                                    onOpenWishlist: m,
                                    onClick: p,
                                    analyticsLocations: f,
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
                                      let { item: i, source: r } = e,
                                          l = _[t],
                                          s = (0, n.jsx)(x.A, {
                                              item: i,
                                              profileOwner: d,
                                              wishlistId: c,
                                              isOwner: !1,
                                              cardSize: C.Y.SMALL,
                                              showOverlayButton: !1,
                                              giftingOrigin: P.vQ.DM_CHANNEL_WISHLIST,
                                              source: r,
                                              showIcons: a,
                                              onWishlistItemClick: p,
                                              analyticsLocations: f,
                                          });
                                      return l.shouldShow
                                          ? null != l.title && null == l.body && null == l.renderIcon
                                              ? (0, n.jsx)(u.m, {
                                                    text: l.title,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: b.Zh,
                                                    children: s,
                                                })
                                              : (0, n.jsx)(o.u, {
                                                    title: l.title,
                                                    body: l.body ?? "",
                                                    asset: l.renderIcon?.(i),
                                                    assetSize: b.Q8,
                                                    position: "top",
                                                    asContainer: !0,
                                                    delay: b.Zh,
                                                    children: s,
                                                })
                                          : s;
                                  })({ item: i, source: r }, t),
                              },
                              i.skuId,
                          );
                      }),
                      i && (0, n.jsx)(W, { lastItem: l, remainingCount: s, giftRecipient: d, onOpenWishlist: m }),
                  ],
              }),
    });
}
let F = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        { analyticsLocations: l } = (0, m.Ay)(c.A.WISHLIST_BANNER),
        o = (0, _.Ay)(t?.id),
        {
            displayItems: u,
            totalUnownedWishlistItemCount: p,
            fetchState: I,
            defaultWishlistId: S,
        } = (0, j.A)({ user: t, numItems: b.pl, location: "Wishlist Banner" }),
        x = r.useMemo(() => "loading" === I.status, [I.status]),
        C = N.Ay.getName(t),
        { theme: w, primaryColor: T, secondaryColor: A } = (0, f.A)({ user: t, displayProfile: o }),
        { profileThemeStyle: O, profileThemeClassName: P } = (0, h.A)({
            theme: w,
            themeType: null,
            primaryColor: T,
            secondaryColor: A,
        }),
        E = r.useCallback(() => {
            (0, g.openUserProfileModal)({ userId: t.id, tabSection: v.RP.WISHLIST });
        }, [t.id]),
        W =
            R[
                r.useMemo(
                    () =>
                        p >= b.pl
                            ? "FULL_WISHLIST"
                            : p > 0
                              ? "MIXED"
                              : u.length > 0 &&
                                  u.every((e) => {
                                      let { item: t, source: i } = e;
                                      return i === b.uS.POPULAR && (0, y.$)(t);
                                  })
                                ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                : "SHOP_ONLY",
                    [p, u],
                )
            ],
        F = o?.getBannerURL({ canAnimate: !1, size: 713 }),
        U = p > b.pl,
        Y = r.useMemo(() => (U ? u.slice(0, b.pl - 1) : u), [u, U]),
        z = (0, L.b)(Y, t),
        X = U ? u[b.pl - 1] : null,
        Q = p - b.pl + 1,
        [J, Z] = r.useState(!1),
        $ = r.useCallback(
            (e) => {
                if (e && !x && u.length > 0) {
                    let e = u.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    k.default.track(M.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
                        Z(!0);
                }
            },
            [x, u, t.id, l],
        ),
        q = (0, a.K)($, void 0, !x && !J),
        { hasMultipleTypes: K, hasMultipleSources: V } = r.useMemo(
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
              style: O,
              children: [
                  null != F && (0, n.jsx)("div", { className: H.iL, style: { backgroundImage: `url(${F})` } }),
                  (0, n.jsx)(d.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(B, { title: W.title, subtitle: W.getSubtitle(C), themeClass: e }),
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
                                                    hasMultipleTypes: K,
                                                    hasMultipleSources: V,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
