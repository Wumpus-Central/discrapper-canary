n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(397927),
    r = n(688810),
    o = n(357186),
    d = n(932001),
    c = n(84511),
    u = n(332772),
    h = n(35092),
    A = n(403362),
    _ = n(183555),
    m = n(535089),
    p = n(946356),
    g = n(652215),
    f = n(49999),
    E = n(985018),
    x = n(141076);
function I(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: I, wishlistId: C, title: N } = e,
        { analyticsLocations: T } = (0, r.Ay)(),
        { trackUserProfileWishlistAction: S } = (0, _.NJ)(),
        b = (0, l.useId)();
    (0, u.T)({ location: "user_profile_sidebar_wishlist_breadcrumb" });
    let y = (0, l.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && S({ wishlistId: t, action: n, productLines: i });
            },
            [S],
        ),
        v = (0, l.useMemo)(() => {
            let e = [];
            for (let n = 0; n < t.length && e.length < 3; n++) {
                let i = t[n];
                e.push(i);
            }
            return e;
        }, [t]),
        j = (0, l.useMemo)(() => new Set(v.map((e) => e.skuProductLine)), [v]),
        R = (0, m.A)({ wishlistId: C ?? null, onAction: y, productLines: j }),
        O = (0, l.useMemo)(
            () =>
                v
                    .map((e, l) =>
                        null == e.sku
                            ? null
                            : (0, i.jsx)(
                                  h.A,
                                  {
                                      sku: e.sku,
                                      index: l,
                                      wishlistOwner: n,
                                      wishlistId: C,
                                      analyticsLocations: T,
                                      onViewWishlist: I,
                                      isSingleCard: 1 === t.length,
                                  },
                                  e.skuId,
                              ),
                    )
                    .filter(A.Vq),
            [T, I, n, t.length, v, C],
        ),
        [L, M] = (0, d.RF)(
            s.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, o.c)(s.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        D = L !== s.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    return 0 === O.length
        ? null
        : (0, i.jsx)("section", {
              "aria-labelledby": b,
              children: (0, i.jsxs)(p.A.Overlay, {
                  ref: R,
                  className: x.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: x.wx,
                          children: [
                              (0, i.jsx)(a.Heading, {
                                  variant: "text-sm/medium",
                                  id: b,
                                  children: N ?? E.intl.string(E.t["7lZ31J"]),
                              }),
                              t.length > 3 &&
                                  (0, i.jsx)(a.QWc, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: I,
                                      text: E.intl.string(E.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, i.jsxs)(a.Fmo, {
                          children: [
                              (0, i.jsx)("div", { className: x.vY, children: O }),
                              !D &&
                                  j.has(g.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                  (0, i.jsx)(c.A, {
                                      location: "user_profile_sidebar_wishlist_breadcrumb",
                                      className: x.EK,
                                      onDismiss: () => M(f.i.USER_DISMISS),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
