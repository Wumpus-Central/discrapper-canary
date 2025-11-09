n.d(t, { Z: () => f }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(906732),
    s = n(636466),
    o = n(541699),
    c = n(321947),
    d = n(502762),
    u = n(179505),
    p = n(388032),
    h = n(373863);
function f(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: f } = e,
        { analyticsLocations: g } = (0, a.ZP)(),
        { cards: m, singleItem: b } = (0, i.useMemo)(() => {
            let e = [],
                r = null;
            for (let i = 0; i < t.length && e.length < 4; i++) {
                let l = t[i],
                    a = 3 === e.length && t.length > 4;
                l.isOwned ||
                    ((0, o.Q)(l)
                        ? e.push(
                              (0, u.c)(l, {
                                  moreCount: a ? t.length - 4 + 1 : void 0,
                                  profileOwner: n,
                                  analyticsLocations: g,
                                  onViewWishlist: f,
                              }),
                          )
                        : (0, c.F)(l) &&
                          e.push(
                              (0, s.J)(l, {
                                  moreCount: a ? t.length - 4 + 1 : void 0,
                                  profileOwner: n,
                                  analyticsLocations: g,
                                  onViewWishlist: f,
                              }),
                          ),
                    1 === e.length && null == r && (r = l));
            }
            return {
                cards: e,
                singleItem: r,
            };
        }, [t, n, g, f]);
    if (0 === m.length) return null;
    let _ = 1 === m.length && null != b,
        y = m;
    return (
        _ &&
            ((0, o.Q)(b)
                ? (y = (0, u.g)(b, {
                      profileOwner: n,
                      analyticsLocations: g,
                  }))
                : (0, c.F)(b) &&
                  (y = (0, s.B)(b, {
                      profileOwner: n,
                      analyticsLocations: g,
                  }))),
        (0, r.jsxs)(d.Z.Overlay, {
            className: h.container,
            children: [
                (0, r.jsx)("div", {
                    className: h.header,
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        children: p.intl.string(p.t["7lZ31J"]),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: h.cardsContainer,
                    children: y,
                }),
            ],
        })
    );
}
