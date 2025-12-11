n.d(t, { Z: () => E }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(906732),
    s = n(164670),
    l = n(636466),
    c = n(541699),
    u = n(321947),
    d = n(785717),
    f = n(471341),
    p = n(502762),
    _ = n(179505),
    m = n(388032),
    h = n(282082);
let g = 4;
function E(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: E, wishlistId: b, cardSize: y, title: O } = e,
        { analyticsLocations: v } = (0, o.ZP)(),
        { trackUserProfileWishlistAction: S } = (0, d.KZ)(),
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
            productLines: A,
        } = (0, i.useMemo)(() => {
            let e = [],
                r = null,
                i = new Set(),
                a = [],
                o = !1,
                d = !1;
            for (let e = 0; e < t.length && a.length < g; e++) {
                let n = t[e];
                !n.isOwned && (a.push(n), (0, u.F)(n) && (0, s.K$)(n.sku) ? (o = !0) : (0, c.Q)(n) && (d = !0));
            }
            let f = o && d;
            for (let r = 0; r < a.length; r++) {
                let o = a[r],
                    s = r === g - 1 && t.length > g;
                (0, c.Q)(o)
                    ? (i.add(o.skuProductLine),
                      e.push(
                          (0, _.c)(o, {
                              index: r,
                              moreCount: s ? t.length - g + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: v,
                              onViewWishlist: E,
                              wishlistId: b,
                              showTypeTooltip: f,
                              cardSize: y,
                          }),
                      ))
                    : (0, u.F)(o) &&
                      (i.add(o.skuProductLine),
                      e.push(
                          (0, l.J)(o, {
                              index: r,
                              moreCount: s ? t.length - g + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: v,
                              onViewWishlist: E,
                              wishlistId: b,
                              showTypeTooltip: f,
                              cardSize: y,
                          }),
                      ));
            }
            return (
                1 === a.length && (r = a[0]),
                {
                    cards: e,
                    singleItem: r,
                    productLines: i,
                }
            );
        }, [t, n, v, E, b, y]),
        N = (0, f.Z)({
            wishlistId: null != b ? b : null,
            onAction: I,
            productLines: A,
        });
    if (0 === T.length) return null;
    let P = T;
    return (
        null != C &&
            ((0, c.Q)(C)
                ? (P = (0, _.g)(C, {
                      profileOwner: n,
                      analyticsLocations: v,
                      wishlistId: b,
                      onViewWishlist: E,
                  }))
                : (0, u.F)(C) &&
                  (P = (0, l.B)(C, {
                      profileOwner: n,
                      analyticsLocations: v,
                      wishlistId: b,
                      onViewWishlist: E,
                  }))),
        (0, r.jsxs)(p.Z.Overlay, {
            ref: N,
            className: h.container,
            children: [
                (0, r.jsx)("div", {
                    className: h.header,
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        children: null != O ? O : m.intl.string(m.t["7lZ31J"]),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: h.cardsContainer,
                    children: P,
                }),
            ],
        })
    );
}
