n.d(t, { A: () => b }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(534514),
    r = n(123292),
    o = n(707554),
    d = n(688810),
    c = n(357186),
    u = n(932001),
    h = n(84511),
    A = n(332772),
    _ = n(35092),
    m = n(403362),
    g = n(183555),
    p = n(535089),
    f = n(946356),
    E = n(652215),
    x = n(49999),
    I = n(985018),
    C = n(617348);
function b(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: b, wishlistId: N, title: S } = e,
        { analyticsLocations: v } = (0, d.Ay)(),
        { trackUserProfileWishlistAction: T } = (0, g.NJ)(),
        y = (0, l.useId)();
    (0, A.T)({ location: "user_profile_sidebar_wishlist_breadcrumb" });
    let j = (0, l.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && T({ wishlistId: t, action: n, productLines: i });
            },
            [T],
        ),
        R = (0, l.useMemo)(() => {
            let e = [];
            for (let n = 0; n < t.length && e.length < 3; n++) {
                let i = t[n];
                e.push(i);
            }
            return e;
        }, [t]),
        L = (0, l.useMemo)(() => new Set(R.map((e) => e.skuProductLine)), [R]),
        O = (0, p.A)({ wishlistId: N ?? null, onAction: j, productLines: L }),
        G = (0, l.useMemo)(
            () =>
                R.map((e, l) =>
                    null == e.sku
                        ? null
                        : (0, i.jsx)(
                              _.A,
                              {
                                  sku: e.sku,
                                  index: l,
                                  wishlistOwner: n,
                                  wishlistId: N,
                                  analyticsLocations: v,
                                  onViewWishlist: b,
                                  isSingleCard: 1 === t.length,
                              },
                              e.skuId,
                          ),
                ).filter(m.Vq),
            [v, b, n, t.length, R, N],
        ),
        [D, M] = (0, u.RF)(
            s.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, c.c)(s.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        U = D !== s.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    return 0 === G.length
        ? null
        : (0, i.jsx)("section", {
              "aria-labelledby": y,
              children: (0, i.jsxs)(f.A.Overlay, {
                  ref: O,
                  className: C.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: C.wx,
                          children: [
                              (0, i.jsx)(a.D, {
                                  variant: "text-sm/medium",
                                  id: y,
                                  children: S ?? I.intl.string(I.t["7lZ31J"]),
                              }),
                              t.length > 3 &&
                                  (0, i.jsx)(r.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: b,
                                      text: I.intl.string(I.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, i.jsxs)(o.F, {
                          children: [
                              (0, i.jsx)("div", { className: C.vY, children: G }),
                              !U &&
                                  L.has(E.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                  (0, i.jsx)(h.A, {
                                      location: "user_profile_sidebar_wishlist_breadcrumb",
                                      className: C.EK,
                                      onDismiss: () => M(x.i.USER_DISMISS),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
