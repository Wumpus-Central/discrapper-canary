"use strict";
n.d(t, { A: () => N });
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
    p = n(871123),
    h = n(79871),
    m = n(453774),
    E = n(592356),
    g = n(568751),
    A = n(620406),
    I = n(84511),
    T = n(652215),
    S = n(360469),
    y = n(985018),
    v = n(809519);
function N(e) {
    let {
            className: t,
            applicationId: n,
            userIds: s,
            cardSize: N = u.Y.SMALL,
            location: C,
            guildId: b,
            channelId: R,
            numWishlistItems: O = 2,
        } = e,
        D = (0, l.h)(n),
        L = (0, m.A)(D, C),
        w = (0, c.G)("social_layer_storefront_gifting_breadcrumb"),
        x = i.useMemo(() => {
            if (w) return null;
            let e = null != L ? L.getIconURL(S.iu.SMALL) : void 0;
            return null != e ? (0, r.jsx)("img", { className: v.In, src: e, alt: "" }) : void 0;
        }, [L, w]),
        {
            state: M,
            recommendations: P,
            skuIdToUserIdsReasons: k,
        } = (0, E.A)({ applicationId: L?.id, numWishlistItems: O, location: C, includeWishlists: !0, userIds: s }),
        U = i.useMemo(() => new Set(s), [s]),
        { hasWishlist: G, hasPopular: F } = i.useMemo(() => (0, p.wH)(P, k, U), [P, k, U]),
        V = i.useMemo(() => {
            let e = G && !F && 1 === s.length,
                t = G && F;
            return P.map((n) => {
                let i =
                    k[n.skuId]
                        ?.filter((e) => e.reason === h.G.WISHLIST && U.has(e.userId))
                        .map((e) => e.userId)
                        .filter(f.Vq) ?? [];
                return w
                    ? (0, r.jsx)(
                          g.A,
                          {
                              sku: n.sku,
                              source: i.length > 0 ? d.uS.WISHLIST : d.uS.POPULAR,
                              application: L,
                              showIcons: t,
                              guildId: b,
                              channelId: R,
                              userIdsForGifting: s,
                              userIdsForRecommendation: i,
                          },
                          n.sku.id,
                      )
                    : (0, r.jsx)(
                          A.A,
                          {
                              variant: e ? A.$.NO_ICON : i.length > 0 ? A.$.WISHLIST : A.$.POPULAR,
                              userIdsForRecommendation: i,
                              userIdsForGifting: s,
                              wishlistItem: n,
                              guildId: b,
                              channelId: R,
                              cardSize: N,
                              contextContainerClassName: v.RL,
                          },
                          n.skuId,
                      );
            });
        }, [N, R, b, w, P, k, G, F, s, L, U]);
    i.useEffect(() => {
        0 !== P.length &&
            _.default.track(T.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: b,
                channel_id: R,
                sku_ids: P.map((e) => e.skuId),
                location: C,
            });
    }, [b, R, P, C]);
    let B = "loading" === M || 0 === P.length;
    return "error" === M && 0 === P.length
        ? null
        : (0, r.jsxs)("div", {
              className: a()(v.kL, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: v.wx,
                      children: [
                          (0, r.jsx)(o.EYj, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: G && !F ? y.intl.string(y.t["7lZ31J"]) : y.intl.string(y.t.BCi1gT),
                          }),
                          null != x ? x : null,
                      ],
                  }),
                  (0, r.jsx)(I.A, { location: C }),
                  (0, r.jsx)("div", {
                      className: v.ld,
                      children: B ? (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: v.u1 }) : V,
                  }),
              ],
          });
}
