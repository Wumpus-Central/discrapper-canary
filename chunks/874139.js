n.d(t, { Z: () => h }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(906732),
    s = n(541699),
    o = n(502762),
    c = n(5337),
    d = n(388032),
    u = n(815743);
function h(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: h } = e,
        { analyticsLocations: p } = (0, a.ZP)(),
        { cards: f, singleCollectibleItem: g } = (0, i.useMemo)(() => {
            let e = [],
                r = null;
            for (let i = 0; i < t.length && e.length < 4; i++) {
                let l = t[i],
                    a = 3 === e.length && t.length > 4;
                !l.isOwned &&
                    (0, s.Q)(l) &&
                    (0 === e.length && (r = l),
                    e.push(
                        (0, c.c)(l, {
                            moreCount: a ? t.length - 4 : void 0,
                            profileOwner: n,
                            analyticsLocations: p,
                            onViewWishlist: h,
                        }),
                    ));
            }
            return {
                cards: e,
                singleCollectibleItem: 1 === e.length ? r : null,
            };
        }, [t, n, p, h]);
    if (0 === f.length) return null;
    let m =
        1 === f.length && null != g
            ? (0, c.g)(g, {
                  profileOwner: n,
                  analyticsLocations: p,
              })
            : f;
    return (0, r.jsxs)(o.Z.Overlay, {
        className: u.container,
        children: [
            (0, r.jsx)("div", {
                className: u.header,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    children: d.intl.string(d.t["7lZ31J"]),
                }),
            }),
            (0, r.jsx)("div", {
                className: u.cardsContainer,
                children: m,
            }),
        ],
    });
}
