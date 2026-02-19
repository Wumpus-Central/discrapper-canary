n.d(t, { A: () => C }), n(321073);
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
    p = n(535089),
    m = n(946356),
    g = n(173678),
    _ = n(524380),
    f = n(985018),
    x = n(250783);
function C(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: C, wishlistId: E, cardSize: I, title: b } = e,
        { analyticsLocations: N } = (0, a.Ay)(),
        { trackUserProfileWishlistAction: S } = (0, A.NJ)(),
        T = (0, d.G)("user_profile_sidebar_wishlist_breadcrumb"),
        v = (0, _.Q)(T),
        y = (0, l.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && S({ wishlistId: t, action: n, productLines: i });
            },
            [S],
        ),
        { visibleItems: j, showTypeTooltip: R } = (0, l.useMemo)(() => {
            let e = [],
                n = !1,
                i = !1;
            for (let l = 0; l < t.length && e.length < v; l++) {
                let s = t[l];
                e.push(s), (0, u.$)(s) && (0, r.bF)(s.sku) ? (n = !0) : (0, c.L)(s) && (i = !0);
            }
            return { visibleItems: e, showTypeTooltip: n && i };
        }, [v, t]),
        {
            cards: O,
            singleItem: L,
            productLines: M,
        } = (0, l.useMemo)(() => {
            let e = [],
                i = null,
                l = new Set();
            for (let i = 0; i < j.length; i++) {
                let s = j[i],
                    a = i === v - 1 && t.length > v;
                (0, c.L)(s)
                    ? (l.add(s.skuProductLine),
                      e.push(
                          (0, g.M)(s, {
                              index: i,
                              moreCount: a ? t.length - v + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: N,
                              onViewWishlist: C,
                              wishlistId: E,
                              showTypeTooltip: R,
                              cardSize: I,
                          }),
                      ))
                    : (0, u.$)(s) &&
                      (l.add(s.skuProductLine),
                      e.push(
                          (0, o.Z)(s, {
                              index: i,
                              moreCount: a ? t.length - v + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: N,
                              onViewWishlist: C,
                              wishlistId: E,
                              showTypeTooltip: R,
                              cardSize: I,
                          }),
                      ));
            }
            return 1 === j.length && (i = j[0]), { cards: e, singleItem: i, productLines: l };
        }, [t, n, N, C, E, I, j, R, v]),
        D = (0, p.A)({ wishlistId: E ?? null, onAction: y, productLines: M }),
        G = (0, l.useMemo)(
            () =>
                T
                    ? j.map((e, t) =>
                          null == e.sku
                              ? null
                              : (0, i.jsx)(
                                    h.A,
                                    {
                                        sku: e.sku,
                                        index: t,
                                        wishlistOwner: n,
                                        wishlistId: E,
                                        analyticsLocations: N,
                                        onViewWishlist: C,
                                        showTypeTooltip: R,
                                    },
                                    e.skuId,
                                ),
                      )
                    : null,
            [N, T, C, n, R, j, E],
        );
    if (0 === O.length) return null;
    let U = O;
    return (
        null != L &&
            ((0, c.L)(L)
                ? (U = (0, g.z)(L, { profileOwner: n, analyticsLocations: N, wishlistId: E, onViewWishlist: C }))
                : (0, u.$)(L) &&
                  (U = (0, o.A)(L, { profileOwner: n, analyticsLocations: N, wishlistId: E, onViewWishlist: C }))),
        (0, i.jsxs)(m.A.Overlay, {
            ref: D,
            className: x.kL,
            children: [
                T
                    ? (0, i.jsxs)("div", {
                          className: x.wx,
                          children: [
                              (0, i.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  children: b ?? f.intl.string(f.t["7lZ31J"]),
                              }),
                              (0, i.jsx)(s.QWc, {
                                  variant: "secondary",
                                  textVariant: "text-xs/medium",
                                  onClick: C,
                                  text: f.intl.string(f.t.y6PSA3),
                              }),
                          ],
                      })
                    : (0, i.jsx)(s.Text, { variant: "text-sm/medium", children: b ?? f.intl.string(f.t["7lZ31J"]) }),
                (0, i.jsx)("div", { className: x.vY, children: T ? G : U }),
            ],
        })
    );
}
