n.d(t, { A: () => f }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(688810),
    r = n(871123),
    o = n(3648),
    d = n(178213),
    c = n(872472),
    u = n(721932),
    h = n(35092),
    A = n(183555),
    g = n(535089),
    m = n(946356),
    p = n(173678);
n(524380);
var _ = n(985018),
    x = n(250783);
function f(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: f, wishlistId: E, cardSize: C, title: I } = e,
        { analyticsLocations: S } = (0, a.Ay)(),
        { trackUserProfileWishlistAction: b } = (0, A.NJ)(),
        N = (0, d.G)("user_profile_sidebar_wishlist_breadcrumb"),
        T = (0, l.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && b({ wishlistId: t, action: n, productLines: i });
            },
            [b],
        ),
        { visibleItems: j, showTypeTooltip: v } = (0, l.useMemo)(() => {
            let e = [],
                n = !1,
                i = !1;
            for (let l = 0; l < t.length && e.length < 4; l++) {
                let s = t[l];
                e.push(s), (0, u.$)(s) && (0, r.bF)(s.sku) ? (n = !0) : (0, c.L)(s) && (i = !0);
            }
            return { visibleItems: e, showTypeTooltip: n && i };
        }, [t]),
        {
            cards: y,
            singleItem: R,
            productLines: O,
        } = (0, l.useMemo)(() => {
            let e = [],
                i = null,
                l = new Set();
            for (let i = 0; i < j.length; i++) {
                let s = j[i],
                    a = 3 === i && t.length > 4;
                (0, c.L)(s)
                    ? (l.add(s.skuProductLine),
                      e.push(
                          (0, p.M)(s, {
                              index: i,
                              moreCount: a ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: S,
                              onViewWishlist: f,
                              wishlistId: E,
                              showTypeTooltip: v,
                              cardSize: C,
                          }),
                      ))
                    : (0, u.$)(s) &&
                      (l.add(s.skuProductLine),
                      e.push(
                          (0, o.Z)(s, {
                              index: i,
                              moreCount: a ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: S,
                              onViewWishlist: f,
                              wishlistId: E,
                              showTypeTooltip: v,
                              cardSize: C,
                          }),
                      ));
            }
            return 1 === j.length && (i = j[0]), { cards: e, singleItem: i, productLines: l };
        }, [t, n, S, f, E, C, j, v]),
        L = (0, g.A)({ wishlistId: E ?? null, onAction: T, productLines: O }),
        D = (0, l.useMemo)(
            () =>
                N
                    ? j.map((e, l) =>
                          null == e.sku
                              ? null
                              : (0, i.jsx)(
                                    h.Ay,
                                    {
                                        sku: e.sku,
                                        index: l,
                                        totalUnownedWishlistItems: t.length,
                                        wishlistOwner: n,
                                        wishlistId: E,
                                        analyticsLocations: S,
                                        onViewWishlist: f,
                                        showTypeTooltip: v,
                                    },
                                    e.skuId,
                                ),
                      )
                    : null,
            [S, N, f, n, v, t.length, j, E],
        );
    if (0 === y.length) return null;
    let M = y;
    return (
        null != R &&
            ((0, c.L)(R)
                ? (M = (0, p.z)(R, { profileOwner: n, analyticsLocations: S, wishlistId: E, onViewWishlist: f }))
                : (0, u.$)(R) &&
                  (M = (0, o.A)(R, { profileOwner: n, analyticsLocations: S, wishlistId: E, onViewWishlist: f }))),
        (0, i.jsxs)(m.A.Overlay, {
            ref: L,
            className: x.kL,
            children: [
                (0, i.jsx)("div", {
                    className: x.wx,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        children: I ?? _.intl.string(_.t["7lZ31J"]),
                    }),
                }),
                (0, i.jsx)("div", { className: x.vY, children: N ? D : M }),
            ],
        })
    );
}
