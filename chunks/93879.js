"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(429913),
    u = n(242640),
    c = n(178213),
    d = n(594832),
    _ = n(954571),
    f = n(403362),
    p = n(79871),
    h = n(453774),
    m = n(592356),
    g = n(568751),
    E = n(620406),
    A = n(652215),
    I = n(360469),
    T = n(985018),
    y = n(809519);
function S(e) {
    let {
            className: t,
            applicationId: n,
            userIds: a,
            cardSize: S = u.Y.SMALL,
            location: v,
            guildId: C,
            channelId: b,
        } = e,
        N = (0, l.h)(n),
        R = (0, h.A)(N, v),
        O = (0, c.G)("social_layer_storefront_gifting_breadcrumb"),
        D = i.useMemo(() => {
            let e = null != R ? R.getIconURL(I.iu.SMALL) : void 0;
            return null != e ? (0, r.jsx)("img", { className: y.In, src: e, alt: "" }) : void 0;
        }, [R]),
        {
            state: L,
            recommendations: w,
            skuIdToUserIdsReasons: x,
        } = (0, m.A)({ applicationId: R?.id, numWishlistItems: 2, location: v, includeWishlists: !0, userIds: a }),
        P = i.useMemo(() => new Set(a), [a]),
        M = i.useMemo(
            () => w.length > 0 && w.every((e) => x[e.skuId]?.some((e) => e.reason === p.G.WISHLIST && P.has(e.userId))),
            [w, x, P],
        ),
        k = i.useMemo(() => {
            let e = M && 1 === a.length;
            return w.map((t) => {
                let n =
                    x[t.skuId]
                        ?.filter((e) => e.reason === p.G.WISHLIST && P.has(e.userId))
                        .map((e) => e.userId)
                        .filter(f.Vq) ?? [];
                return O
                    ? (0, r.jsx)(
                          g.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? d.uS.WISHLIST : d.uS.POPULAR,
                              hideIcon: e,
                              guildId: C,
                              channelId: b,
                              style: S === u.Y.SMALL_SQUARE ? y.tM : void 0,
                              contextContainerClassName: y.RL,
                              userIdsForGifting: a,
                              userIdsForRecommendation: n,
                          },
                          t.sku.id,
                      )
                    : (0, r.jsx)(
                          E.A,
                          {
                              variant: e ? E.$.NO_ICON : n.length > 0 ? E.$.WISHLIST : E.$.POPULAR,
                              userIdsForRecommendation: n,
                              userIdsForGifting: a,
                              wishlistItem: t,
                              guildId: C,
                              channelId: b,
                              cardSize: S,
                              contextContainerClassName: y.RL,
                          },
                          t.skuId,
                      );
            });
        }, [S, b, C, O, w, x, M, a, P]);
    i.useEffect(() => {
        0 !== w.length &&
            _.default.track(A.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: C,
                channel_id: b,
                sku_ids: w.map((e) => e.skuId),
                location: v,
            });
    }, [C, b, w, v]);
    let U = "loading" === L || 0 === w.length;
    return (0, r.jsxs)("div", {
        className: s()(y.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: y.wx,
                children: [
                    (0, r.jsx)(o.EYj, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: M ? T.intl.string(T.t["7lZ31J"]) : T.intl.string(T.t.BCi1gT),
                    }),
                    null != D ? D : null,
                ],
            }),
            (0, r.jsx)("div", {
                className: y.ld,
                children: U ? (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: y.u1 }) : k,
            }),
        ],
    });
}
