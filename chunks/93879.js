"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(429913),
    u = n(798048),
    c = n(178213),
    d = n(332772),
    _ = n(594832),
    f = n(954571),
    p = n(403362),
    h = n(871123),
    m = n(79871),
    E = n(453774),
    g = n(592356),
    A = n(568751),
    I = n(620406),
    T = n(84511),
    S = n(652215),
    y = n(360469),
    v = n(985018),
    N = n(809519);
function C(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: n,
            applicationId: s,
            userIds: C,
            cardSize: R = u.Y.SMALL,
            location: O,
            guildId: b,
            channelId: D,
            numWishlistItems: L = 2,
            cardSpec: w,
        } = e,
        M = (0, l.h)(s),
        x = (0, E.A)(M),
        P = (0, c.GG)("social_layer_storefront_gifting_breadcrumb");
    (0, d.T)({ location: "social_layer_storefront_gifting_breadcrumb" });
    let k = i.useMemo(() => {
            if (P) return null;
            let e = null != x ? x.getIconURL(y.iu.SMALL) : void 0;
            return null != e ? (0, r.jsx)("img", { className: N.In, src: e, alt: "" }) : void 0;
        }, [x, P]),
        {
            state: U,
            recommendations: G,
            skuIdToUserIdsReasons: F,
        } = (0, g.A)({ applicationId: x?.id, numWishlistItems: L, includeWishlists: !0, userIds: C }),
        V = i.useMemo(() => new Set(C), [C]),
        { hasWishlist: B, hasPopular: H } = i.useMemo(() => (0, h.wH)(G, F, V), [G, F, V]),
        j = i.useMemo(() => {
            let e = B && !H && 1 === C.length,
                t = B && H;
            return G.map((n) => {
                let i =
                    F[n.skuId]
                        ?.filter((e) => e.reason === m.G.WISHLIST && V.has(e.userId))
                        .map((e) => e.userId)
                        .filter(p.Vq) ?? [];
                return P
                    ? (0, r.jsx)(
                          A.A,
                          {
                              sku: n.sku,
                              source: i.length > 0 ? _.uS.WISHLIST : _.uS.POPULAR,
                              application: x,
                              showIcons: t,
                              guildId: b,
                              channelId: D,
                              userIdsForGifting: C,
                              userIdsForRecommendation: i,
                              spec: w,
                          },
                          n.sku.id,
                      )
                    : (0, r.jsx)(
                          I.A,
                          {
                              variant: e ? I.$.NO_ICON : i.length > 0 ? I.$.WISHLIST : I.$.POPULAR,
                              userIdsForRecommendation: i,
                              userIdsForGifting: C,
                              wishlistItem: n,
                              guildId: b,
                              channelId: D,
                              cardSize: R,
                              contextContainerClassName: N.RL,
                          },
                          n.skuId,
                      );
            });
        }, [R, D, b, P, G, F, B, H, C, x, V, w]);
    i.useEffect(() => {
        0 !== G.length &&
            f.default.track(S.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: b,
                channel_id: D,
                sku_ids: G.map((e) => e.skuId),
                location: O,
            });
    }, [b, D, G, O]);
    let Y = "loading" === U || 0 === G.length;
    return "error" === U && 0 === G.length
        ? null
        : (0, r.jsxs)("div", {
              className: a()(N.kL, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: N.wx,
                      children: [
                          (0, r.jsx)(o.EYj, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: B && !H ? v.intl.string(v.t["7lZ31J"]) : v.intl.string(v.t.BCi1gT),
                          }),
                          null != k ? k : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: N.ld,
                      children: Y ? (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: N.u1 }) : j,
                  }),
                  !Y && G.length > 0 && (0, r.jsx)(T.A, { location: O, className: n }),
              ],
          });
}
