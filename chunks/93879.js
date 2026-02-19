"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(429913),
    u = n(798048),
    c = n(178213),
    d = n(594832),
    _ = n(954571),
    f = n(403362),
    p = n(79871),
    h = n(453774),
    m = n(592356),
    E = n(568751),
    g = n(620406),
    A = n(652215),
    I = n(360469),
    T = n(985018),
    S = n(809519);
function y(e) {
    let {
            className: t,
            applicationId: n,
            userIds: s,
            cardSize: y = u.Y.SMALL,
            location: v,
            guildId: N,
            channelId: C,
            numWishlistItems: b = 2,
        } = e,
        R = (0, l.h)(n),
        O = (0, h.A)(R, v),
        D = (0, c.G)("social_layer_storefront_gifting_breadcrumb"),
        L = i.useMemo(() => {
            let e = null != O ? O.getIconURL(I.iu.SMALL) : void 0;
            return null != e ? (0, r.jsx)("img", { className: S.In, src: e, alt: "" }) : void 0;
        }, [O]),
        {
            state: w,
            recommendations: x,
            skuIdToUserIdsReasons: M,
        } = (0, m.A)({ applicationId: O?.id, numWishlistItems: b, location: v, includeWishlists: !0, userIds: s }),
        P = i.useMemo(() => new Set(s), [s]),
        k = i.useMemo(
            () => x.length > 0 && x.every((e) => M[e.skuId]?.some((e) => e.reason === p.G.WISHLIST && P.has(e.userId))),
            [x, M, P],
        ),
        U = i.useMemo(() => {
            let e = k && 1 === s.length;
            return x.map((t) => {
                let n =
                    M[t.skuId]
                        ?.filter((e) => e.reason === p.G.WISHLIST && P.has(e.userId))
                        .map((e) => e.userId)
                        .filter(f.Vq) ?? [];
                return D
                    ? (0, r.jsx)(
                          E.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? d.uS.WISHLIST : d.uS.POPULAR,
                              hideIcon: e,
                              guildId: N,
                              channelId: C,
                              contextContainerClassName: S.RL,
                              userIdsForGifting: s,
                              userIdsForRecommendation: n,
                          },
                          t.sku.id,
                      )
                    : (0, r.jsx)(
                          g.A,
                          {
                              variant: e ? g.$.NO_ICON : n.length > 0 ? g.$.WISHLIST : g.$.POPULAR,
                              userIdsForRecommendation: n,
                              userIdsForGifting: s,
                              wishlistItem: t,
                              guildId: N,
                              channelId: C,
                              cardSize: y,
                              contextContainerClassName: S.RL,
                          },
                          t.skuId,
                      );
            });
        }, [y, C, N, D, x, M, k, s, P]);
    i.useEffect(() => {
        0 !== x.length &&
            _.default.track(A.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: N,
                channel_id: C,
                sku_ids: x.map((e) => e.skuId),
                location: v,
            });
    }, [N, C, x, v]);
    let G = "loading" === w || 0 === x.length;
    return (0, r.jsxs)("div", {
        className: a()(S.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: S.wx,
                children: [
                    (0, r.jsx)(o.EYj, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: k ? T.intl.string(T.t["7lZ31J"]) : T.intl.string(T.t.BCi1gT),
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
