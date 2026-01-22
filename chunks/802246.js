t.d(i, {
    A: () => B,
}),
    t(896048);
var n = t(627968),
    s = t(64700),
    l = t(503698),
    r = t.n(l),
    a = t(172218),
    o = t(459192),
    c = t(990078),
    d = t(397927),
    u = t(793574),
    m = t(688810),
    p = t(245068),
    h = t(950191),
    f = t(101928),
    g = t(195898),
    I = t(657331),
    j = t(804870),
    x = t(353157),
    S = t(18983),
    N = t(242640),
    A = t(834796),
    _ = t(594832),
    T = t(996353),
    L = t(872472),
    O = t(721932),
    C = t(46537),
    b = t(954571),
    y = t(427262),
    v = t(788868),
    w = t(652215),
    E = t(518477),
    k = t(985018),
    M = t(195416);
let R = {
    FULL_WISHLIST: {
        title: k.intl.string(k.t["7lZ31J"]),
        getSubtitle: (e) =>
            k.intl.formatToPlainString(k.t.BjEX38, {
                username: e,
            }),
        showIcons: !1,
    },
    MIXED: {
        title: k.intl.string(k.t.SK5rmi),
        getSubtitle: (e) =>
            k.intl.formatToPlainString(k.t.dIDKgi, {
                username: e,
            }),
        showIcons: !0,
    },
    SHOP_ONLY: {
        title: k.intl.string(k.t.SK5rmi),
        getSubtitle: (e) =>
            k.intl.formatToPlainString(k.t.wyMp1j, {
                username: e,
            }),
        showIcons: !1,
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: k.intl.string(k.t.BCi1gT),
        getSubtitle: (e) =>
            k.intl.formatToPlainString(k.t.BjEX38, {
                username: e,
            }),
        showIcons: !1,
    },
};

function H(e) {
    let { title: i, subtitle: t, themeClass: s } = e;
    return (0, n.jsx)("div", {
        className: r()(M.$R, s),
        children: (0, n.jsxs)("div", {
            className: M.hy,
            children: [
                (0, n.jsx)(d.Heading, {
                    variant: "heading-lg/bold",
                    children: i,
                }),
                (0, n.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: t,
                }),
            ],
        }),
    });
}

function P() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(d.AC4, {
                children: k.intl.string(k.t.pfChQr),
            }),
            (0, n.jsx)("div", {
                className: M.Md,
                children: Array.from(
                    {
                        length: _.pl,
                    },
                    (e, i) =>
                        (0, n.jsx)(
                            A.A,
                            {
                                cardSize: N.Y.SMALL,
                            },
                            "placeholder-".concat(i),
                        ),
                ),
            }),
        ],
    });
}

function D(e) {
    let { lastItem: i, remainingCount: t, giftRecipient: s, onOpenWishlist: l } = e;
    return null == i
        ? null
        : (0, n.jsx)(
              "li",
              {
                  className: M.XI,
                  children: (0, n.jsx)(j.uz, {
                      item: i.item,
                      remainingCount: t,
                      onClick: l,
                      cardSize: N.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, L.L)(i.item)) {
                              if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
                                  let t = {
                                      items: i.item.bundleItems,
                                  };
                                  return (0, n.jsx)("div", {
                                      className: M.Tz,
                                      children: (0, n.jsx)(p.X, {
                                          product: t,
                                          isHighlighted: e,
                                          user: s,
                                      }),
                                  });
                              }
                              return (0, n.jsx)(x.A, {
                                  item: i.item,
                                  profileOwner: s,
                                  isHighlighted: e,
                                  cardSize: N.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              "overflow-".concat(i.item.skuId),
          );
}

function G(e) {
    let {
        items: i,
        hasOverflow: t,
        overflowItem: s,
        overflowCount: l,
        showIcons: r,
        giftRecipient: a,
        defaultWishlistId: d,
        onOpenWishlist: u,
        onWishlistItemClick: m,
        tooltipConfigs: p,
        analyticsLocations: h,
    } = e;
    return (0, n.jsxs)("ul", {
        className: M.Md,
        children: [
            i.map((e, i) => {
                let { item: t, source: s } = e;
                return (0, n.jsx)(
                    "li",
                    {
                        className: M.XI,
                        children: ((e, i) => {
                            var t, s;
                            let { item: l, source: u } = e,
                                f = p[i],
                                g = (0, n.jsx)(S.A, {
                                    item: l,
                                    profileOwner: a,
                                    wishlistId: d,
                                    isOwner: !1,
                                    cardSize: N.Y.SMALL,
                                    showOverlayButton: !1,
                                    giftingOrigin: v.vQ.DM_CHANNEL_WISHLIST,
                                    source: u,
                                    showIcons: r,
                                    onWishlistItemClick: m,
                                    analyticsLocations: h,
                                });
                            return f.shouldShow
                                ? null != f.title && null == f.body && null == f.renderIcon
                                    ? (0, n.jsx)(c.m, {
                                          text: f.title,
                                          position: "top",
                                          asContainer: !0,
                                          delay: _.Zh,
                                          children: g,
                                      })
                                    : (0, n.jsx)(o.u, {
                                          title: f.title,
                                          body: null != (t = f.body) ? t : "",
                                          asset: null == (s = f.renderIcon) ? void 0 : s.call(f, l),
                                          assetSize: _.Q8,
                                          position: "top",
                                          asContainer: !0,
                                          delay: _.Zh,
                                          children: g,
                                      })
                                : g;
                        })(
                            {
                                item: t,
                                source: s,
                            },
                            i,
                        ),
                    },
                    t.skuId,
                );
            }),
            t &&
                (0, n.jsx)(D, {
                    lastItem: s,
                    remainingCount: l,
                    giftRecipient: a,
                    onOpenWishlist: u,
                }),
        ],
    });
}
let B = function (e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        { analyticsLocations: l } = (0, m.Ay)(u.A.WISHLIST_BANNER),
        o = (0, h.Ay)(null == i ? void 0 : i.id),
        {
            displayItems: c,
            hasMoreItems: p,
            totalWishlistItemCount: j,
            wishlistItemCountToBeDisplayed: x,
            fetchState: S,
            defaultWishlistId: N,
        } = (0, T.Ay)({
            user: i,
            numItems: _.pl,
            location: "Wishlist Banner",
            source: _.mQ.WISHLIST_BANNER,
        }),
        A = s.useMemo(() => "loading" === S.status, [S.status]),
        L = y.Ay.getName(i),
        {
            theme: v,
            primaryColor: k,
            secondaryColor: D,
        } = (0, f.A)({
            user: i,
            displayProfile: o,
        }),
        { profileThemeStyle: B, profileThemeClassName: W } = (0, g.A)({
            theme: v,
            themeType: null,
            primaryColor: k,
            secondaryColor: D,
        }),
        Y = s.useCallback(() => {
            (0, I.openUserProfileModal)({
                userId: i.id,
                tabSection: E.RP.WISHLIST,
            });
        }, [i.id]),
        z =
            R[
                s.useMemo(
                    () =>
                        x >= _.pl
                            ? "FULL_WISHLIST"
                            : x > 0
                              ? "MIXED"
                              : c.length > 0 &&
                                  c.every((e) => {
                                      let { item: i, source: t } = e;
                                      return t === _.uS.POPULAR && (0, O.$)(i);
                                  })
                                ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                : "SHOP_ONLY",
                    [x, c],
                )
            ],
        U =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        F = s.useMemo(() => (p ? c.slice(0, _.pl - 1) : c), [c, p]),
        X = (0, C.b)(F, i),
        Q = p ? c[_.pl - 1] : null,
        J = j - _.pl + 1,
        [K, Z] = s.useState(!1),
        $ = s.useCallback(
            (e) => {
                if (e && !A && c.length > 0) {
                    let e = c.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    b.default.track(w.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: l,
                        product_lines: Array.from(
                            new Set(
                                c.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        Z(!0);
                }
            },
            [A, c, i.id, l],
        ),
        V = (0, a.K)($, void 0, !A && !K);
    return "error" === S.status
        ? null
        : (0, n.jsxs)("div", {
              ref: V,
              className: r()(M.A1, W),
              style: B,
              children: [
                  null != U &&
                      (0, n.jsx)("div", {
                          className: M.iL,
                          style: {
                              backgroundImage: "url(".concat(U, ")"),
                          },
                      }),
                  (0, n.jsx)(d.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(H, {
                                      title: z.title,
                                      subtitle: z.getSubtitle(L),
                                      themeClass: e,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: e,
                                      children:
                                          A || 0 === c.length
                                              ? (0, n.jsx)(P, {})
                                              : (0, n.jsx)(G, {
                                                    items: F,
                                                    hasOverflow: p,
                                                    overflowItem: Q,
                                                    overflowCount: J,
                                                    showIcons: z.showIcons,
                                                    giftRecipient: i,
                                                    defaultWishlistId: N,
                                                    onOpenWishlist: Y,
                                                    onWishlistItemClick: t,
                                                    tooltipConfigs: X,
                                                    analyticsLocations: l,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
