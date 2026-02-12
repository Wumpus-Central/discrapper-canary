"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(429913),
    u = n(798048),
    c = n(178213),
    d = n(594832),
    _ = n(954571),
    f = n(403362),
    h = n(79871),
    p = n(453774),
    g = n(592356),
    E = n(568751),
    A = n(620406),
    I = n(652215),
    T = n(360469),
    y = n(985018),
    S = n(809519);
function v(e) {
    let {
            className: t,
            applicationId: n,
            userIds: a,
            cardSize: v = u.Y.SMALL,
            location: C,
            guildId: b,
            channelId: N,
        } = e,
        R = (0, l.h)(n),
        O = (0, p.A)(R, C),
        D = (0, c.G)("social_layer_storefront_gifting_breadcrumb"),
        L = i.useMemo(() => {
            let e = null != O ? O.getIconURL(T.iu.SMALL) : void 0;
            return null != e ? (0, r.jsx)("img", { className: S.In, src: e, alt: "" }) : void 0;
        }, [O]),
        {
            state: w,
            recommendations: x,
            skuIdToUserIdsReasons: P,
        } = (0, g.A)({ applicationId: O?.id, numWishlistItems: 2, location: C, includeWishlists: !0, userIds: a }),
        M = i.useMemo(() => new Set(a), [a]),
        k = i.useMemo(
            () => x.length > 0 && x.every((e) => P[e.skuId]?.some((e) => e.reason === h.G.WISHLIST && M.has(e.userId))),
            [x, P, M],
        ),
        U = i.useMemo(() => {
            let e = k && 1 === a.length;
            return x.map((t) => {
                let n =
                    P[t.skuId]
                        ?.filter((e) => e.reason === h.G.WISHLIST && M.has(e.userId))
                        .map((e) => e.userId)
                        .filter(f.Vq) ?? [];
                return D
                    ? (0, r.jsx)(
                          E.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? d.uS.WISHLIST : d.uS.POPULAR,
                              hideIcon: e,
                              guildId: b,
                              channelId: N,
                              style: v === u.Y.SMALL_SQUARE ? S.tM : void 0,
                              contextContainerClassName: S.RL,
                              userIdsForGifting: a,
                              userIdsForRecommendation: n,
                          },
                          t.sku.id,
                      )
                    : (0, r.jsx)(
                          A.A,
                          {
                              variant: e ? A.$.NO_ICON : n.length > 0 ? A.$.WISHLIST : A.$.POPULAR,
                              userIdsForRecommendation: n,
                              userIdsForGifting: a,
                              wishlistItem: t,
                              guildId: b,
                              channelId: N,
                              cardSize: v,
                              contextContainerClassName: S.RL,
                          },
                          t.skuId,
                      );
            });
        }, [v, N, b, D, x, P, k, a, M]);
    i.useEffect(() => {
        0 !== x.length &&
            _.default.track(I.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: b,
                channel_id: N,
                sku_ids: x.map((e) => e.skuId),
                location: C,
            });
    }, [b, N, x, C]);
    let G = "loading" === w || 0 === x.length;
    return (0, r.jsxs)("div", {
        className: s()(S.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: S.wx,
                children: [
                    (0, r.jsx)(o.EYj, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: k ? y.intl.string(y.t["7lZ31J"]) : y.intl.string(y.t.BCi1gT),
                    }),
                    null != L ? L : null,
                ],
            }),
            (0, r.jsx)("div", {
                className: S.ld,
                children: G ? (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: S.u1 }) : U,
            }),
        ],
    });
}
