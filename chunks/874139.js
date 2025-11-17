n.d(t, { Z: () => m }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(906732),
    s = n(636466),
    o = n(541699),
    c = n(321947),
    d = n(221292),
    u = n(471341),
    p = n(502762),
    h = n(5337),
    f = n(388032),
    g = n(815743);
function m(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: m, wishlistId: b } = e,
        { analyticsLocations: _ } = (0, a.ZP)(),
        y = (0, i.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, skuId: r } = e;
                null != t &&
                    (0, d.Er)({
                        wishlistId: t,
                        action: n,
                        skuId: r,
                        analyticsLocations: _,
                    });
            },
            [_],
        ),
        O = (0, u.Z)({
            wishlistId: null != b ? b : null,
            onAction: y,
        }),
        { cards: j, singleItem: x } = (0, i.useMemo)(() => {
            let e = [],
                r = null;
            for (let i = 0; i < t.length && e.length < 4; i++) {
                let l = t[i],
                    a = 3 === e.length && t.length > 4,
                    d = e.length;
                if ((0, o.Q)(l)) {
                    if (l.isOwned) continue;
                    e.push(
                        (0, h.c)(l, {
                            index: d,
                            moreCount: a ? t.length - 4 + 1 : void 0,
                            profileOwner: n,
                            analyticsLocations: _,
                            onViewWishlist: m,
                            wishlistId: b,
                        }),
                    );
                } else
                    (0, c.F)(l) &&
                        e.push(
                            (0, s.J)(l, {
                                index: d,
                                moreCount: a ? t.length - 4 + 1 : void 0,
                                profileOwner: n,
                                analyticsLocations: _,
                                onViewWishlist: m,
                                wishlistId: b,
                            }),
                        );
                1 === e.length && null == r && (r = l);
            }
            return {
                cards: e,
                singleItem: r,
            };
        }, [t, n, _, m, b]);
    if (0 === j.length) return null;
    let v = 1 === j.length && null != x,
        C = j;
    return (
        v &&
            ((0, o.Q)(x)
                ? (C = (0, h.g)(x, {
                      profileOwner: n,
                      analyticsLocations: _,
                      wishlistId: b,
                      onViewWishlist: m,
                  }))
                : (0, c.F)(x) &&
                  (C = (0, s.B)(x, {
                      profileOwner: n,
                      analyticsLocations: _,
                      wishlistId: b,
                      onViewWishlist: m,
                  }))),
        (0, r.jsxs)(p.Z.Overlay, {
            ref: O,
            className: g.container,
            children: [
                (0, r.jsx)("div", {
                    className: g.header,
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        children: f.intl.string(f.t["7lZ31J"]),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: g.cardsContainer,
                    children: C,
                }),
            ],
        })
    );
}
