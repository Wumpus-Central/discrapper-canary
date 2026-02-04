n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(158954),
    l = n(429913),
    c = n(242640),
    u = n(954571),
    d = n(403362),
    f = n(79871),
    p = n(453774),
    _ = n(592356),
    h = n(620406),
    m = n(652215),
    g = n(360469),
    E = n(985018),
    y = n(809519);

function b(e) {
    let {
            className: t,
            applicationId: n,
            userIds: a,
            cardSize: b = c.Y.SMALL,
            location: O,
            guildId: v,
            channelId: A,
        } = e,
        I = (0, l.h)(n),
        S = (0, p.A)(I, O),
        T = i.useMemo(() => {
            let e = null != S ? S.getIconURL(g.iu.SMALL) : void 0;
            return null != e
                ? (0, r.jsx)("img", {
                      className: y.In,
                      src: e,
                      alt: "",
                  })
                : void 0;
        }, [S]),
        {
            state: C,
            recommendations: N,
            skuIdToUserIdsReasons: w,
        } = (0, _.A)({
            applicationId: null == S ? void 0 : S.id,
            numWishlistItems: 2,
            location: O,
            includeWishlists: !0,
            userIds: a,
        }),
        R = i.useMemo(() => new Set(a), [a]),
        P = i.useMemo(
            () =>
                N.length > 0 &&
                N.every((e) => {
                    var t;
                    return null == (t = w[e.skuId])
                        ? void 0
                        : t.some((e) => e.reason === f.G.WISHLIST && R.has(e.userId));
                }),
            [N, w, R],
        ),
        D = i.useMemo(() => {
            let e = P && 1 === a.length;
            return N.map((t) => {
                var n, i;
                let o =
                    null !=
                    (n =
                        null == (i = w[t.skuId])
                            ? void 0
                            : i
                                  .filter((e) => e.reason === f.G.WISHLIST && R.has(e.userId))
                                  .map((e) => e.userId)
                                  .filter(d.Vq))
                        ? n
                        : [];
                return (0, r.jsx)(
                    h.A,
                    {
                        variant: e ? h.$.NO_ICON : o.length > 0 ? h.$.WISHLIST : h.$.POPULAR,
                        userIdsForRecommendation: o,
                        userIdsForGifting: a,
                        wishlistItem: t,
                        guildId: v,
                        channelId: A,
                        cardSize: b,
                        contextContainerClassName: y.RL,
                    },
                    t.skuId,
                );
            });
        }, [b, A, v, N, w, P, a, R]);
    i.useEffect(() => {
        0 !== N.length &&
            u.default.track(m.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: v,
                channel_id: A,
                sku_ids: N.map((e) => e.skuId),
                location: O,
            });
    }, [v, A, N, O]);
    let L = "loading" === C || 0 === N.length;
    return (0, r.jsxs)("div", {
        className: o()(y.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: y.wx,
                children: [
                    (0, r.jsx)(s.EYj, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: P ? E.intl.string(E.t["7lZ31J"]) : E.intl.string(E.t.BCi1gT),
                    }),
                    null != T ? T : null,
                ],
            }),
            (0, r.jsx)("div", {
                className: y.ld,
                children: L
                    ? (0, r.jsx)(s.y$y, {
                          type: s.y$y.Type.SPINNING_CIRCLE,
                          className: y.u1,
                      })
                    : D,
            }),
        ],
    });
}
