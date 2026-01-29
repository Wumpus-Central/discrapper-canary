i.d(t, {
    A: () => D,
}),
    i(896048);
var r = i(627968),
    n = i(64700),
    a = i(503698),
    l = i.n(a),
    s = i(172218),
    o = i(459192),
    d = i(990078),
    u = i(397927),
    c = i(793574),
    m = i(688810),
    f = i(245068),
    _ = i(950191),
    p = i(101928),
    g = i(195898),
    h = i(657331),
    I = i(804870),
    C = i(353157),
    x = i(18983),
    S = i(242640),
    b = i(834796),
    T = i(594832),
    A = i(996353),
    j = i(872472),
    O = i(721932),
    v = i(46537),
    P = i(954571),
    N = i(427262),
    w = i(788868),
    L = i(652215),
    y = i(518477),
    k = i(985018),
    E = i(195416);
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
    let { title: t, subtitle: i, themeClass: n } = e;
    return (0, r.jsx)("div", {
        className: l()(E.$R, n),
        children: (0, r.jsxs)("div", {
            className: E.hy,
            children: [
                (0, r.jsx)(u.Heading, {
                    variant: "heading-lg/bold",
                    children: t,
                }),
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    children: i,
                }),
            ],
        }),
    });
}

function M() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.AC4, {
                children: k.intl.string(k.t.pfChQr),
            }),
            (0, r.jsx)("div", {
                className: E.Md,
                children: Array.from(
                    {
                        length: T.pl,
                    },
                    (e, t) =>
                        (0, r.jsx)(
                            b.A,
                            {
                                cardSize: S.Y.SMALL,
                            },
                            "placeholder-".concat(t),
                        ),
                ),
            }),
        ],
    });
}

function B(e) {
    let { lastItem: t, remainingCount: i, giftRecipient: n, onOpenWishlist: a } = e;
    return null == t
        ? null
        : (0, r.jsx)(
              "li",
              {
                  className: E.XI,
                  children: (0, r.jsx)(I.uz, {
                      item: t.item,
                      remainingCount: i,
                      onClick: a,
                      cardSize: S.Y.SMALL,
                      renderItemPreview: (e) => {
                          if ((0, j.L)(t.item)) {
                              if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                                  let i = {
                                      items: t.item.bundleItems,
                                  };
                                  return (0, r.jsx)("div", {
                                      className: E.Tz,
                                      children: (0, r.jsx)(f.X, {
                                          product: i,
                                          isHighlighted: e,
                                          user: n,
                                      }),
                                  });
                              }
                              return (0, r.jsx)(C.A, {
                                  item: t.item,
                                  profileOwner: n,
                                  isHighlighted: e,
                                  cardSize: S.Y.SMALL,
                              });
                          }
                          return null;
                      },
                  }),
              },
              "overflow-".concat(t.item.skuId),
          );
}

function G(e) {
    let {
        items: t,
        hasOverflow: i,
        overflowItem: n,
        overflowCount: a,
        showIcons: l,
        giftRecipient: s,
        defaultWishlistId: u,
        onOpenWishlist: c,
        onWishlistItemClick: m,
        tooltipConfigs: f,
        analyticsLocations: _,
    } = e;
    return (0, r.jsxs)("ul", {
        className: E.Md,
        children: [
            t.map((e, t) => {
                let { item: i, source: n } = e;
                return (0, r.jsx)(
                    "li",
                    {
                        className: E.XI,
                        children: ((e, t) => {
                            var i, n;
                            let { item: a, source: c } = e,
                                p = f[t],
                                g = (0, r.jsx)(x.A, {
                                    item: a,
                                    profileOwner: s,
                                    wishlistId: u,
                                    isOwner: !1,
                                    cardSize: S.Y.SMALL,
                                    showOverlayButton: !1,
                                    giftingOrigin: w.vQ.DM_CHANNEL_WISHLIST,
                                    source: c,
                                    showIcons: l,
                                    onWishlistItemClick: m,
                                    analyticsLocations: _,
                                });
                            return p.shouldShow
                                ? null != p.title && null == p.body && null == p.renderIcon
                                    ? (0, r.jsx)(d.m, {
                                          text: p.title,
                                          position: "top",
                                          asContainer: !0,
                                          delay: T.Zh,
                                          children: g,
                                      })
                                    : (0, r.jsx)(o.u, {
                                          title: p.title,
                                          body: null != (i = p.body) ? i : "",
                                          asset: null == (n = p.renderIcon) ? void 0 : n.call(p, a),
                                          assetSize: T.Q8,
                                          position: "top",
                                          asContainer: !0,
                                          delay: T.Zh,
                                          children: g,
                                      })
                                : g;
                        })(
                            {
                                item: i,
                                source: n,
                            },
                            t,
                        ),
                    },
                    i.skuId,
                );
            }),
            i &&
                (0, r.jsx)(B, {
                    lastItem: n,
                    remainingCount: a,
                    giftRecipient: s,
                    onOpenWishlist: c,
                }),
        ],
    });
}
let D = function (e) {
    let { giftRecipient: t, onWishlistItemClick: i } = e,
        { analyticsLocations: a } = (0, m.Ay)(c.A.WISHLIST_BANNER),
        o = (0, _.Ay)(null == t ? void 0 : t.id),
        {
            displayItems: d,
            hasMoreItems: f,
            totalWishlistItemCount: I,
            wishlistItemCountToBeDisplayed: C,
            fetchState: x,
            defaultWishlistId: S,
        } = (0, A.A)({
            user: t,
            numItems: T.pl,
            location: "Wishlist Banner",
        }),
        b = n.useMemo(() => "loading" === x.status, [x.status]),
        j = N.Ay.getName(t),
        {
            theme: w,
            primaryColor: k,
            secondaryColor: B,
        } = (0, p.A)({
            user: t,
            displayProfile: o,
        }),
        { profileThemeStyle: D, profileThemeClassName: W } = (0, g.A)({
            theme: w,
            themeType: null,
            primaryColor: k,
            secondaryColor: B,
        }),
        U = n.useCallback(() => {
            (0, h.openUserProfileModal)({
                userId: t.id,
                tabSection: y.RP.WISHLIST,
            });
        }, [t.id]),
        F =
            R[
                n.useMemo(
                    () =>
                        C >= T.pl
                            ? "FULL_WISHLIST"
                            : C > 0
                              ? "MIXED"
                              : d.length > 0 &&
                                  d.every((e) => {
                                      let { item: t, source: i } = e;
                                      return i === T.uS.POPULAR && (0, O.$)(t);
                                  })
                                ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                : "SHOP_ONLY",
                    [C, d],
                )
            ],
        Y =
            null == o
                ? void 0
                : o.getBannerURL({
                      canAnimate: !1,
                      size: 713,
                  }),
        z = n.useMemo(() => (f ? d.slice(0, T.pl - 1) : d), [d, f]),
        X = (0, v.b)(z, t),
        Q = f ? d[T.pl - 1] : null,
        J = I - T.pl + 1,
        [K, $] = n.useState(!1),
        Z = n.useCallback(
            (e) => {
                if (e && !b && d.length > 0) {
                    let e = d.map((e) => {
                        let { item: t } = e;
                        return t.skuId;
                    });
                    P.default.track(L.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: e,
                        location_stack: a,
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
            [b, d, t.id, a],
        ),
        V = (0, s.K)(Z, void 0, !b && !K);
    return "error" === x.status
        ? null
        : (0, r.jsxs)("div", {
              ref: V,
              className: l()(E.A1, W),
              style: D,
              children: [
                  null != Y &&
                      (0, r.jsx)("div", {
                          className: E.iL,
                          style: {
                              backgroundImage: "url(".concat(Y, ")"),
                          },
                      }),
                  (0, r.jsx)(u.NPJ, {
                      disableAdaptiveTheme: !0,
                      children: (e) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(H, {
                                      title: F.title,
                                      subtitle: F.getSubtitle(j),
                                      themeClass: e,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: e,
                                      children:
                                          b || 0 === d.length
                                              ? (0, r.jsx)(M, {})
                                              : (0, r.jsx)(G, {
                                                    items: z,
                                                    hasOverflow: f,
                                                    overflowItem: Q,
                                                    overflowCount: J,
                                                    showIcons: F.showIcons,
                                                    giftRecipient: t,
                                                    defaultWishlistId: S,
                                                    onOpenWishlist: U,
                                                    onWishlistItemClick: i,
                                                    tooltipConfigs: X,
                                                    analyticsLocations: a,
                                                }),
                                  }),
                              ],
                          }),
                  }),
              ],
          });
};
