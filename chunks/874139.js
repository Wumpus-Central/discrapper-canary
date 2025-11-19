n.d(t, { Z: () => b }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(906732),
    s = n(164670),
    o = n(636466),
    c = n(541699),
    d = n(321947),
    u = n(221292),
    p = n(471341),
    h = n(502762),
    f = n(5337),
    g = n(388032),
    m = n(815743);
function b(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: b, wishlistId: _ } = e,
        { analyticsLocations: y } = (0, a.ZP)(),
        O = (0, i.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, skuId: r } = e;
                null != t &&
                    (0, u.Er)({
                        wishlistId: t,
                        action: n,
                        skuId: r,
                        analyticsLocations: y,
                    });
            },
            [y],
        ),
        j = (0, p.Z)({
            wishlistId: null != _ ? _ : null,
            onAction: O,
        }),
        { cards: x, singleItem: v } = (0, i.useMemo)(() => {
            let e = [],
                r = null,
                i = [],
                l = !1,
                a = !1;
            for (let e = 0; e < t.length && i.length < 4; e++) {
                let n = t[e];
                !n.isOwned && (i.push(n), (0, d.F)(n) && (0, s.K$)(n.sku) ? (l = !0) : (0, c.Q)(n) && (a = !0));
            }
            let u = l && a;
            for (let r = 0; r < i.length; r++) {
                let l = i[r],
                    a = 3 === r && t.length > 4;
                (0, c.Q)(l)
                    ? e.push(
                          (0, f.c)(l, {
                              index: r,
                              moreCount: a ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: y,
                              onViewWishlist: b,
                              wishlistId: _,
                              showTypeTooltip: u,
                          }),
                      )
                    : (0, d.F)(l) &&
                      e.push(
                          (0, o.J)(l, {
                              index: r,
                              moreCount: a ? t.length - 4 + 1 : void 0,
                              profileOwner: n,
                              analyticsLocations: y,
                              onViewWishlist: b,
                              wishlistId: _,
                              showTypeTooltip: u,
                          }),
                      );
            }
            return (
                1 === i.length && (r = i[0]),
                {
                    cards: e,
                    singleItem: r,
                }
            );
        }, [t, n, y, b, _]);
    if (0 === x.length) return null;
    let C = x;
    return (
        null != v &&
            ((0, c.Q)(v)
                ? (C = (0, f.g)(v, {
                      profileOwner: n,
                      analyticsLocations: y,
                      wishlistId: _,
                      onViewWishlist: b,
                  }))
                : (0, d.F)(v) &&
                  (C = (0, o.B)(v, {
                      profileOwner: n,
                      analyticsLocations: y,
                      wishlistId: _,
                      onViewWishlist: b,
                  }))),
        (0, r.jsxs)(h.Z.Overlay, {
            ref: j,
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
                    children: C,
                }),
            ],
        })
    );
}
