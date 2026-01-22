n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(429913),
    c = n(242640),
    u = n(954571),
    d = n(403362),
    f = n(79871),
    p = n(453774),
    _ = n(592356),
    h = n(398025),
    m = n(652215),
    g = n(360469),
    E = n(985018),
    b = n(809519);

function y(e) {
    let {
            className: t,
            applicationId: n,
            userIds: a,
            cardSize: y = c.Y.SMALL,
            location: O,
            guildId: A,
            channelId: v,
        } = e,
        S = (0, l.h)(n),
        I = (0, p.A)(S, O),
        T = i.useMemo(() => {
            let e = null != I ? I.getIconURL(g.iu.SMALL) : void 0;
            return null != e
                ? (0, r.jsx)("img", {
                      className: b.In,
                      src: e,
                      alt: "",
                  })
                : void 0;
        }, [I]),
        {
            state: C,
            recommendations: N,
            skuIdToUserIdsReasons: R,
        } = (0, _.A)({
            guildId: null == I ? void 0 : I.guildId,
            applicationId: null == I ? void 0 : I.id,
            numWishlistItems: 2,
            location: O,
            includeWishlists: !0,
            userIds: a,
        }),
        w = i.useMemo(() => new Set(a), [a]),
        P = i.useMemo(
            () =>
                N.length > 0 &&
                N.every((e) => {
                    var t;
                    return null == (t = R[e.skuId])
                        ? void 0
                        : t.some((e) => e.reason === f.G.WISHLIST && w.has(e.userId));
                }),
            [N, R, w],
        ),
        D = i.useMemo(() => {
            let e = P && 1 === a.length;
            return N.map((t) => {
                var n, i;
                let s =
                    null !=
                    (n =
                        null == (i = R[t.skuId])
                            ? void 0
                            : i
                                  .filter((e) => e.reason === f.G.WISHLIST && w.has(e.userId))
                                  .map((e) => e.userId)
                                  .filter(d.Vq))
                        ? n
                        : [];
                return (0, r.jsx)(
                    h.A,
                    {
                        variant: e ? h.$.NO_ICON : s.length > 0 ? h.$.WISHLIST : h.$.POPULAR,
                        userIdsForRecommendation: s,
                        userIdsForGifting: a,
                        wishlistItem: t,
                        guildId: A,
                        channelId: v,
                        cardSize: y,
                        contextContainerClassName: b.RL,
                    },
                    t.skuId,
                );
            });
        }, [y, v, A, N, R, P, a, w]);
    i.useEffect(() => {
        0 !== N.length &&
            u.default.track(m.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: A,
                channel_id: v,
                sku_ids: N.map((e) => e.skuId),
                location: O,
            });
    }, [A, v, N, O]);
    let x = "loading" === C || 0 === N.length;
    return (0, r.jsxs)("div", {
        className: s()(b.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: b.wx,
                children: [
                    (0, r.jsx)(o.EYj, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: P ? E.intl.string(E.t["7lZ31J"]) : E.intl.string(E.t.BCi1gT),
                    }),
                    null != T ? T : null,
                ],
            }),
            (0, r.jsx)("div", {
                className: b.ld,
                children: x
                    ? (0, r.jsx)(o.y$y, {
                          type: o.y$y.Type.SPINNING_CIRCLE,
                          className: b.u1,
                      })
                    : D,
            }),
        ],
    });
}
