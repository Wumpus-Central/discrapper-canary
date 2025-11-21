n.d(t, { Z: () => b }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(906732),
    s = n(164670),
    o = n(636466),
    c = n(541699),
    d = n(321947),
    u = n(785717),
    p = n(471341),
    h = n(502762),
    f = n(5337),
    g = n(388032),
    m = n(815743);
function b(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: b, wishlistId: _ } = e,
        { analyticsLocations: y } = (0, a.ZP)(),
        { trackUserProfileWishlistAction: O } = (0, u.KZ)(),
        j = (0, i.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    O({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [O],
        ),
        {
            cards: x,
            singleItem: v,
            productLines: C,
        } = (0, i.useMemo)(() => {
            let e = [],
                r = null,
                i = new Set(),
                l = [],
                a = !1,
                u = !1;
            for (let e = 0; e < t.length && l.length < 4; e++) {
                let n = t[e];
                !n.isOwned && (l.push(n), (0, d.F)(n) && (0, s.K$)(n.sku) ? (a = !0) : (0, c.Q)(n) && (u = !0));
            }
            let p = a && u;
            for (let r = 0; r < l.length; r++) {
                let a = l[r],
                    s = 3 === r && t.length > 4;
                (0, c.Q)(a)
                    ? (i.add(a.skuProductLine),
                      e.push(
                          (0, f.c)(a, {
                              index: r,
                              moreCount: s ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: y,
                              onViewWishlist: b,
                              wishlistId: _,
                              showTypeTooltip: p,
                          }),
                      ))
                    : (0, d.F)(a) &&
                      (i.add(a.skuProductLine),
                      e.push(
                          (0, o.J)(a, {
                              index: r,
                              moreCount: s ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: y,
                              onViewWishlist: b,
                              wishlistId: _,
                              showTypeTooltip: p,
                          }),
                      ));
            }
            return (
                1 === l.length && (r = l[0]),
                {
                    cards: e,
                    singleItem: r,
                    productLines: i,
                }
            );
        }, [t, n, y, b, _]),
        I = (0, p.Z)({
            wishlistId: null != _ ? _ : null,
            onAction: j,
            productLines: C,
        });
    if (0 === x.length) return null;
    let S = x;
    return (
        null != v &&
            ((0, c.Q)(v)
                ? (S = (0, f.g)(v, {
                      profileOwner: n,
                      analyticsLocations: y,
                      wishlistId: _,
                      onViewWishlist: b,
                  }))
                : (0, d.F)(v) &&
                  (S = (0, o.B)(v, {
                      profileOwner: n,
                      analyticsLocations: y,
                      wishlistId: _,
                      onViewWishlist: b,
                  }))),
        (0, r.jsxs)(h.Z.Overlay, {
            ref: I,
            className: m.container,
            children: [
                (0, r.jsx)("div", {
                    className: m.header,
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        children: g.intl.string(g.t["7lZ31J"]),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: m.cardsContainer,
                    children: S,
                }),
            ],
        })
    );
}
