n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(688810),
    r = n(871123),
    o = n(84511),
    d = n(3648),
    c = n(178213),
    u = n(872472),
    h = n(721932),
    A = n(35092),
    p = n(183555),
    m = n(535089),
    g = n(946356),
    _ = n(173678),
    f = n(524380),
    x = n(652215),
    C = n(985018),
    E = n(250783);
function I(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: I, wishlistId: b, cardSize: N, title: S } = e,
        { analyticsLocations: T } = (0, a.Ay)(),
        { trackUserProfileWishlistAction: v } = (0, p.NJ)(),
        y = (0, c.G)("user_profile_sidebar_wishlist_breadcrumb"),
        j = (0, f.Q)(y),
        R = (0, l.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && v({ wishlistId: t, action: n, productLines: i });
            },
            [v],
        ),
        { visibleItems: O, showTypeTooltip: L } = (0, l.useMemo)(() => {
            let e = [],
                n = !1,
                i = !1;
            for (let l = 0; l < t.length && e.length < j; l++) {
                let s = t[l];
                e.push(s), (0, h.$)(s) && (0, r.bF)(s.sku) ? (n = !0) : (0, u.L)(s) && (i = !0);
            }
            return { visibleItems: e, showTypeTooltip: n && i };
        }, [j, t]),
        {
            cards: M,
            singleItem: D,
            productLines: G,
        } = (0, l.useMemo)(() => {
            let e = [],
                i = null,
                l = new Set();
            for (let i = 0; i < O.length; i++) {
                let s = O[i],
                    a = i === j - 1 && t.length > j;
                (0, u.L)(s)
                    ? (l.add(s.skuProductLine),
                      e.push(
                          (0, _.M)(s, {
                              index: i,
                              moreCount: a ? t.length - j + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: T,
                              onViewWishlist: I,
                              wishlistId: b,
                              showTypeTooltip: L,
                              cardSize: N,
                          }),
                      ))
                    : (0, h.$)(s) &&
                      (l.add(s.skuProductLine),
                      e.push(
                          (0, d.Z)(s, {
                              index: i,
                              moreCount: a ? t.length - j + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: T,
                              onViewWishlist: I,
                              wishlistId: b,
                              showTypeTooltip: L,
                              cardSize: N,
                          }),
                      ));
            }
            return 1 === O.length && (i = O[0]), { cards: e, singleItem: i, productLines: l };
        }, [t, n, T, I, b, N, O, L, j]),
        U = (0, m.A)({ wishlistId: b ?? null, onAction: R, productLines: G }),
        P = (0, l.useMemo)(
            () =>
                y
                    ? O.map((e, t) =>
                          null == e.sku
                              ? null
                              : (0, i.jsx)(
                                    A.A,
                                    {
                                        sku: e.sku,
                                        index: t,
                                        wishlistOwner: n,
                                        wishlistId: b,
                                        analyticsLocations: T,
                                        onViewWishlist: I,
                                        showTypeTooltip: L,
                                    },
                                    e.skuId,
                                ),
                      )
                    : null,
            [T, y, I, n, L, O, b],
        );
    if (0 === M.length) return null;
    let w = M;
    return (
        null != D &&
            ((0, u.L)(D)
                ? (w = (0, _.z)(D, { profileOwner: n, analyticsLocations: T, wishlistId: b, onViewWishlist: I }))
                : (0, h.$)(D) &&
                  (w = (0, d.A)(D, { profileOwner: n, analyticsLocations: T, wishlistId: b, onViewWishlist: I }))),
        (0, i.jsxs)(g.A.Overlay, {
            ref: U,
            className: E.kL,
            children: [
                y
                    ? (0, i.jsxs)("div", {
                          className: E.wx,
                          children: [
                              (0, i.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  children: S ?? C.intl.string(C.t["7lZ31J"]),
                              }),
                              (0, i.jsx)(s.QWc, {
                                  variant: "secondary",
                                  textVariant: "text-xs/medium",
                                  onClick: I,
                                  text: C.intl.string(C.t.y6PSA3),
                              }),
                          ],
                      })
                    : (0, i.jsx)(s.Text, { variant: "text-sm/medium", children: S ?? C.intl.string(C.t["7lZ31J"]) }),
                G.has(x.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                    (0, i.jsx)(o.A, { location: "user_profile_sidebar_wishlist_breadcrumb" }),
                (0, i.jsx)("div", { className: E.vY, children: y ? P : w }),
            ],
        })
    );
}
