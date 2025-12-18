n.d(t, { Z: () => b }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(906732),
    s = n(164670),
    l = n(636466),
    c = n(602733),
    u = n(541699),
    d = n(321947),
    f = n(785717),
    p = n(471341),
    _ = n(502762),
    m = n(179505),
    h = n(388032),
    g = n(282082);
let E = 4;
function b(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: b, wishlistId: y, cardSize: O, title: v } = e,
        { analyticsLocations: S } = (0, o.ZP)(),
        { trackUserProfileWishlistAction: I } = (0, f.KZ)(),
        T = (0, i.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    I({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [I],
        ),
        {
            cards: C,
            singleItem: A,
            productLines: N,
        } = (0, i.useMemo)(() => {
            let e = [],
                r = null,
                i = new Set(),
                a = [],
                o = !1,
                f = !1,
                p = !1,
                _ = !1;
            for (let e = 0; e < t.length && a.length < E; e++) {
                let n = t[e],
                    r = n.item;
                r.isOwned ||
                    (a.push(n),
                    (0, d.F)(r) && (0, s.K$)(r.sku) ? (o = !0) : (0, u.Q)(r) && (f = !0),
                    n.source === c.lr.WISHLIST ? (p = !0) : n.source === c.lr.POPULAR && (_ = !0));
            }
            let h = o && f,
                g = p && _;
            for (let r = 0; r < a.length; r++) {
                let { item: o, source: s } = a[r],
                    c = r === E - 1 && t.length > E,
                    f = g ? s : void 0;
                (0, u.Q)(o)
                    ? (i.add(o.skuProductLine),
                      e.push(
                          (0, m.c)(o, {
                              index: r,
                              moreCount: c ? t.length - E + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: S,
                              onViewWishlist: b,
                              wishlistId: y,
                              showTypeTooltip: h,
                              cardSize: O,
                              itemSource: f,
                          }),
                      ))
                    : (0, d.F)(o) &&
                      (i.add(o.skuProductLine),
                      e.push(
                          (0, l.J)(o, {
                              index: r,
                              moreCount: c ? t.length - E + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: S,
                              onViewWishlist: b,
                              wishlistId: y,
                              showTypeTooltip: h,
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
        }, [t, n, S, b, y, O]),
        P = (0, p.Z)({
            wishlistId: null != y ? y : null,
            onAction: T,
            productLines: N,
        });
    if (0 === C.length) return null;
    let R = C;
    return (
        null != A &&
            ((0, u.Q)(A)
                ? (R = (0, m.g)(A, {
                      profileOwner: n,
                      analyticsLocations: S,
                      wishlistId: y,
                      onViewWishlist: b,
                  }))
                : (0, d.F)(A) &&
                  (R = (0, l.B)(A, {
                      profileOwner: n,
                      analyticsLocations: S,
                      wishlistId: y,
                      onViewWishlist: b,
                  }))),
        (0, r.jsxs)(_.Z.Overlay, {
            ref: P,
            className: g.container,
            children: [
                (0, r.jsx)("div", {
                    className: g.header,
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        children: null != v ? v : h.intl.string(h.t["7lZ31J"]),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: g.cardsContainer,
                    children: R,
                }),
            ],
        })
    );
}
