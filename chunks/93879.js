n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(158954),
    l = n(429913),
    c = n(242640),
    u = n(178213),
    d = n(594832),
    f = n(954571),
    p = n(403362),
    _ = n(79871),
    h = n(453774),
    m = n(592356),
    g = n(568751),
    E = n(620406),
    y = n(652215),
    b = n(360469),
    O = n(985018),
    v = n(809519);

function A(e) {
    let {
            className: t,
            applicationId: n,
            userIds: a,
            cardSize: A = c.Y.SMALL,
            location: I,
            guildId: S,
            channelId: T,
        } = e,
        C = (0, l.h)(n),
        N = (0, h.A)(C, I),
        w = (0, u.G)("social_layer_storefront_gifting_breadcrumb"),
        R = i.useMemo(() => {
            let e = null != N ? N.getIconURL(b.iu.SMALL) : void 0;
            return null != e
                ? (0, r.jsx)("img", {
                      className: v.In,
                      src: e,
                      alt: "",
                  })
                : void 0;
        }, [N]),
        {
            state: P,
            recommendations: D,
            skuIdToUserIdsReasons: L,
        } = (0, m.A)({
            applicationId: null == N ? void 0 : N.id,
            numWishlistItems: 2,
            location: I,
            includeWishlists: !0,
            userIds: a,
        }),
        x = i.useMemo(() => new Set(a), [a]),
        M = i.useMemo(
            () =>
                D.length > 0 &&
                D.every((e) => {
                    var t;
                    return null == (t = L[e.skuId])
                        ? void 0
                        : t.some((e) => e.reason === _.G.WISHLIST && x.has(e.userId));
                }),
            [D, L, x],
        ),
        j = i.useMemo(() => {
            let e = M && 1 === a.length;
            return D.map((t) => {
                var n, i;
                let o =
                    null !=
                    (n =
                        null == (i = L[t.skuId])
                            ? void 0
                            : i
                                  .filter((e) => e.reason === _.G.WISHLIST && x.has(e.userId))
                                  .map((e) => e.userId)
                                  .filter(p.Vq))
                        ? n
                        : [];
                return w
                    ? (0, r.jsx)(
                          g.A,
                          {
                              sku: t.sku,
                              source: o.length > 0 ? d.uS.WISHLIST : d.uS.POPULAR,
                              hideIcon: e,
                              guildId: S,
                              channelId: T,
                              style: A === c.Y.SMALL_SQUARE ? v.tM : void 0,
                              contextContainerClassName: v.RL,
                              userIdsForGifting: a,
                              userIdsForRecommendation: o,
                          },
                          t.sku.id,
                      )
                    : (0, r.jsx)(
                          E.A,
                          {
                              variant: e ? E.$.NO_ICON : o.length > 0 ? E.$.WISHLIST : E.$.POPULAR,
                              userIdsForRecommendation: o,
                              userIdsForGifting: a,
                              wishlistItem: t,
                              guildId: S,
                              channelId: T,
                              cardSize: A,
                              contextContainerClassName: v.RL,
                          },
                          t.skuId,
                      );
            });
        }, [A, T, S, w, D, L, M, a, x]);
    i.useEffect(() => {
        0 !== D.length &&
            f.default.track(y.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: S,
                channel_id: T,
                sku_ids: D.map((e) => e.skuId),
                location: I,
            });
    }, [S, T, D, I]);
    let k = "loading" === P || 0 === D.length;
    return (0, r.jsxs)("div", {
        className: o()(v.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: v.wx,
                children: [
                    (0, r.jsx)(s.EYj, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: M ? O.intl.string(O.t["7lZ31J"]) : O.intl.string(O.t.BCi1gT),
                    }),
                    null != R ? R : null,
                ],
            }),
            (0, r.jsx)("div", {
                className: v.ld,
                children: k
                    ? (0, r.jsx)(s.y$y, {
                          type: s.y$y.Type.SPINNING_CIRCLE,
                          className: v.u1,
                      })
                    : j,
            }),
        ],
    });
}
