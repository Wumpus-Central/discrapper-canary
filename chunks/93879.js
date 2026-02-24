"use strict";
n.d(t, { A: () => v });
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
    A = n(84511),
    I = n(652215),
    T = n(360469),
    S = n(985018),
    y = n(10937);
function v(e) {
    let {
            className: t,
            applicationId: n,
            userIds: s,
            cardSize: v = u.Y.SMALL,
            location: N,
            guildId: C,
            channelId: b,
            numWishlistItems: R = 2,
        } = e,
        O = (0, l.h)(n),
        D = (0, h.A)(O, N),
        L = (0, c.G)("social_layer_storefront_gifting_breadcrumb"),
        w = i.useMemo(() => {
            let e = null != D ? D.getIconURL(T.iu.SMALL) : void 0;
            return null != e ? (0, r.jsx)("img", { className: y.In, src: e, alt: "" }) : void 0;
        }, [D]),
        {
            state: x,
            recommendations: M,
            skuIdToUserIdsReasons: P,
        } = (0, m.A)({ applicationId: D?.id, numWishlistItems: R, location: N, includeWishlists: !0, userIds: s }),
        k = i.useMemo(() => new Set(s), [s]),
        U = i.useMemo(
            () => M.length > 0 && M.every((e) => P[e.skuId]?.some((e) => e.reason === p.G.WISHLIST && k.has(e.userId))),
            [M, P, k],
        ),
        G = i.useMemo(() => {
            let e = U && 1 === s.length;
            return M.map((t) => {
                let n =
                    P[t.skuId]
                        ?.filter((e) => e.reason === p.G.WISHLIST && k.has(e.userId))
                        .map((e) => e.userId)
                        .filter(f.Vq) ?? [];
                return L
                    ? (0, r.jsx)(
                          E.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? d.uS.WISHLIST : d.uS.POPULAR,
                              hideIcon: e,
                              guildId: C,
                              channelId: b,
                              contextContainerClassName: y.RL,
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
                              guildId: C,
                              channelId: b,
                              cardSize: v,
                              contextContainerClassName: y.RL,
                          },
                          t.skuId,
                      );
            });
        }, [v, b, C, L, M, P, U, s, k]);
    i.useEffect(() => {
        0 !== M.length &&
            _.default.track(I.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: C,
                channel_id: b,
                sku_ids: M.map((e) => e.skuId),
                location: N,
            });
    }, [C, b, M, N]);
    let F = "loading" === x || 0 === M.length;
    return (0, r.jsxs)("div", {
        className: a()(y.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: y.wx,
                children: [
                    (0, r.jsx)(o.EYj, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: U ? S.intl.string(S.t["7lZ31J"]) : S.intl.string(S.t.BCi1gT),
                    }),
                    null != w ? w : null,
                ],
            }),
            (0, r.jsx)(A.A, { location: N }),
            (0, r.jsx)("div", {
                className: y.ld,
                children: F ? (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: y.u1 }) : G,
            }),
        ],
    });
}
