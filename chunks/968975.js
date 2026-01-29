n.d(t, {
    A: () => b,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(688810),
    a = n(871123),
    o = n(3648),
    c = n(872472),
    u = n(721932),
    d = n(183555),
    p = n(535089),
    h = n(946356),
    f = n(173678),
    g = n(985018),
    m = n(250783);

function b(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: b, wishlistId: A, cardSize: y, title: _ } = e,
        { analyticsLocations: O } = (0, s.Ay)(),
        { trackUserProfileWishlistAction: j } = (0, d.NJ)(),
        v = (0, l.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    j({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [j],
        ),
        {
            cards: x,
            singleItem: E,
            productLines: C,
        } = (0, l.useMemo)(() => {
            let e = [],
                r = null,
                l = new Set(),
                i = [],
                s = !1,
                d = !1;
            for (let e = 0; e < t.length && i.length < 4; e++) {
                let n = t[e];
                i.push(n), (0, u.$)(n) && (0, a.bF)(n.sku) ? (s = !0) : (0, c.L)(n) && (d = !0);
            }
            let p = s && d;
            for (let r = 0; r < i.length; r++) {
                let s = i[r],
                    a = 3 === r && t.length > 4;
                (0, c.L)(s)
                    ? (l.add(s.skuProductLine),
                      e.push(
                          (0, f.M)(s, {
                              index: r,
                              moreCount: a ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: O,
                              onViewWishlist: b,
                              wishlistId: A,
                              showTypeTooltip: p,
                              cardSize: y,
                          }),
                      ))
                    : (0, u.$)(s) &&
                      (l.add(s.skuProductLine),
                      e.push(
                          (0, o.Z)(s, {
                              index: r,
                              moreCount: a ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: O,
                              onViewWishlist: b,
                              wishlistId: A,
                              showTypeTooltip: p,
                              cardSize: y,
                          }),
                      ));
            }
            return (
                1 === i.length && (r = i[0]),
                {
                    cards: e,
                    singleItem: r,
                    productLines: l,
                }
            );
        }, [t, n, O, b, A, y]),
        S = (0, p.A)({
            wishlistId: null != A ? A : null,
            onAction: v,
            productLines: C,
        });
    if (0 === x.length) return null;
    let I = x;
    return (
        null != E &&
            ((0, c.L)(E)
                ? (I = (0, f.z)(E, {
                      profileOwner: n,
                      analyticsLocations: O,
                      wishlistId: A,
                      onViewWishlist: b,
                  }))
                : (0, u.$)(E) &&
                  (I = (0, o.A)(E, {
                      profileOwner: n,
                      analyticsLocations: O,
                      wishlistId: A,
                      onViewWishlist: b,
                  }))),
        (0, r.jsxs)(h.A.Overlay, {
            ref: S,
            className: m.kL,
            children: [
                (0, r.jsx)("div", {
                    className: m.wx,
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        children: null != _ ? _ : g.intl.string(g.t["7lZ31J"]),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: m.vY,
                    children: I,
                }),
            ],
        })
    );
}
