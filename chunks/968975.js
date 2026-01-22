n.d(t, { A: () => b }), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(688810),
    o = n(871123),
    l = n(3648),
    c = n(594832),
    u = n(872472),
    d = n(721932),
    f = n(183555),
    p = n(535089),
    _ = n(946356),
    h = n(173678),
    m = n(985018),
    g = n(250783);
let E = 4;
function b(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: b, wishlistId: y, cardSize: O, title: A } = e,
        { analyticsLocations: v } = (0, s.Ay)(),
        { trackUserProfileWishlistAction: S } = (0, f.NJ)(),
        I = (0, i.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    S({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [S],
        ),
        {
            cards: T,
            singleItem: C,
            productLines: N,
        } = (0, i.useMemo)(() => {
            let e = [],
                r = null,
                i = new Set(),
                a = [],
                s = !1,
                f = !1,
                p = !1,
                _ = !1;
            for (let e = 0; e < t.length && a.length < E; e++) {
                let n = t[e],
                    r = n.item;
                r.isOwned ||
                    (a.push(n),
                    (0, d.$)(r) && (0, o.bF)(r.sku) ? (s = !0) : (0, u.L)(r) && (f = !0),
                    n.source === c.uS.WISHLIST ? (p = !0) : n.source === c.uS.POPULAR && (_ = !0));
            }
            let m = s && f,
                g = p && _;
            for (let r = 0; r < a.length; r++) {
                let { item: s, source: o } = a[r],
                    c = r === E - 1 && t.length > E,
                    f = g ? o : void 0;
                (0, u.L)(s)
                    ? (i.add(s.skuProductLine),
                      e.push(
                          (0, h.M)(s, {
                              index: r,
                              moreCount: c ? t.length - E + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: v,
                              onViewWishlist: b,
                              wishlistId: y,
                              showTypeTooltip: m,
                              cardSize: O,
                              itemSource: f,
                          }),
                      ))
                    : (0, d.$)(s) &&
                      (i.add(s.skuProductLine),
                      e.push(
                          (0, l.Z)(s, {
                              index: r,
                              moreCount: c ? t.length - E + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: v,
                              onViewWishlist: b,
                              wishlistId: y,
                              showTypeTooltip: m,
                              cardSize: O,
                              itemSource: f,
                          }),
                      ));
            }
            return (
                1 === a.length && (r = a[0].item),
                {
                    cards: e,
                    singleItem: r,
                    productLines: i,
                }
            );
        }, [t, n, v, b, y, O]),
        R = (0, p.A)({
            wishlistId: null != y ? y : null,
            onAction: I,
            productLines: N,
        });
    if (0 === T.length) return null;
    let w = T;
    return (
        null != C &&
            ((0, u.L)(C)
                ? (w = (0, h.z)(C, {
                      profileOwner: n,
                      analyticsLocations: v,
                      wishlistId: y,
                      onViewWishlist: b,
                  }))
                : (0, d.$)(C) &&
                  (w = (0, l.A)(C, {
                      profileOwner: n,
                      analyticsLocations: v,
                      wishlistId: y,
                      onViewWishlist: b,
                  }))),
        (0, r.jsxs)(_.A.Overlay, {
            ref: R,
            className: g.kL,
            children: [
                (0, r.jsx)("div", {
                    className: g.wx,
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        children: null != A ? A : m.intl.string(m.t["7lZ31J"]),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: g.vY,
                    children: w,
                }),
            ],
        })
    );
}
