n.d(t, {
    A: () => A,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(688810),
    a = n(871123),
    o = n(3648),
    c = n(594832),
    u = n(872472),
    d = n(721932),
    p = n(183555),
    h = n(535089),
    f = n(946356),
    g = n(173678),
    m = n(985018),
    b = n(250783);

function A(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: A, wishlistId: y, cardSize: _, title: O } = e,
        { analyticsLocations: j } = (0, s.Ay)(),
        { trackUserProfileWishlistAction: v } = (0, p.NJ)(),
        x = (0, l.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    v({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [v],
        ),
        {
            cards: E,
            singleItem: C,
            productLines: S,
        } = (0, l.useMemo)(() => {
            let e = [],
                r = null,
                l = new Set(),
                i = [],
                s = !1,
                p = !1,
                h = !1,
                f = !1;
            for (let e = 0; e < t.length && i.length < 4; e++) {
                let n = t[e],
                    r = n.item;
                r.isOwned ||
                    (i.push(n),
                    (0, d.$)(r) && (0, a.bF)(r.sku) ? (s = !0) : (0, u.L)(r) && (p = !0),
                    n.source === c.uS.WISHLIST ? (h = !0) : n.source === c.uS.POPULAR && (f = !0));
            }
            let m = s && p,
                b = h && f;
            for (let r = 0; r < i.length; r++) {
                let { item: s, source: a } = i[r],
                    c = 3 === r && t.length > 4,
                    p = b ? a : void 0;
                (0, u.L)(s)
                    ? (l.add(s.skuProductLine),
                      e.push(
                          (0, g.M)(s, {
                              index: r,
                              moreCount: c ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: j,
                              onViewWishlist: A,
                              wishlistId: y,
                              showTypeTooltip: m,
                              cardSize: _,
                              itemSource: p,
                          }),
                      ))
                    : (0, d.$)(s) &&
                      (l.add(s.skuProductLine),
                      e.push(
                          (0, o.Z)(s, {
                              index: r,
                              moreCount: c ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: j,
                              onViewWishlist: A,
                              wishlistId: y,
                              showTypeTooltip: m,
                              cardSize: _,
                              itemSource: p,
                          }),
                      ));
            }
            return (
                1 === i.length && (r = i[0].item),
                {
                    cards: e,
                    singleItem: r,
                    productLines: l,
                }
            );
        }, [t, n, j, A, y, _]),
        I = (0, h.A)({
            wishlistId: null != y ? y : null,
            onAction: x,
            productLines: S,
        });
    if (0 === E.length) return null;
    let N = E;
    return (
        null != C &&
            ((0, u.L)(C)
                ? (N = (0, g.z)(C, {
                      profileOwner: n,
                      analyticsLocations: j,
                      wishlistId: y,
                      onViewWishlist: A,
                  }))
                : (0, d.$)(C) &&
                  (N = (0, o.A)(C, {
                      profileOwner: n,
                      analyticsLocations: j,
                      wishlistId: y,
                      onViewWishlist: A,
                  }))),
        (0, r.jsxs)(f.A.Overlay, {
            ref: I,
            className: b.kL,
            children: [
                (0, r.jsx)("div", {
                    className: b.wx,
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        children: null != O ? O : m.intl.string(m.t["7lZ31J"]),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: b.vY,
                    children: N,
                }),
            ],
        })
    );
}
