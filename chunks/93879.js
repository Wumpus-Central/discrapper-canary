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
    v = n(10937);
function N(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: n,
            applicationId: s,
            userIds: N,
            cardSize: C = u.Y.SMALL,
            location: R,
            guildId: O,
            channelId: b,
            numWishlistItems: D = 2,
            cardSpec: L,
        } = e,
        w = (0, l.h)(s),
        M = (0, m.A)(w, R),
        x = (0, c.G)("social_layer_storefront_gifting_breadcrumb"),
        P = i.useMemo(() => {
            if (x) return null;
            let e = null != M ? M.getIconURL(S.iu.SMALL) : void 0;
            return null != e ? (0, r.jsx)("img", { className: v.In, src: e, alt: "" }) : void 0;
        }, [M, x]),
        {
            state: k,
            recommendations: U,
            skuIdToUserIdsReasons: G,
        } = (0, E.A)({ applicationId: M?.id, numWishlistItems: D, location: R, includeWishlists: !0, userIds: N }),
        F = i.useMemo(() => new Set(N), [N]),
        { hasWishlist: V, hasPopular: B } = i.useMemo(() => (0, p.wH)(U, G, F), [U, G, F]),
        H = i.useMemo(() => {
            let e = V && !B && 1 === N.length,
                t = V && B;
            return U.map((n) => {
                let i =
                    G[n.skuId]
                        ?.filter((e) => e.reason === h.G.WISHLIST && F.has(e.userId))
                        .map((e) => e.userId)
                        .filter(f.Vq) ?? [];
                return x
                    ? (0, r.jsx)(
                          g.A,
                          {
                              sku: n.sku,
                              source: i.length > 0 ? d.uS.WISHLIST : d.uS.POPULAR,
                              application: M,
                              showIcons: t,
                              guildId: O,
                              channelId: b,
                              userIdsForGifting: N,
                              userIdsForRecommendation: i,
                              spec: L,
                          },
                          n.sku.id,
                      )
                    : (0, r.jsx)(
                          A.A,
                          {
                              variant: e ? A.$.NO_ICON : i.length > 0 ? A.$.WISHLIST : A.$.POPULAR,
                              userIdsForRecommendation: i,
                              userIdsForGifting: N,
                              wishlistItem: n,
                              guildId: O,
                              channelId: b,
                              cardSize: C,
                              contextContainerClassName: v.RL,
                          },
                          n.skuId,
                      );
            });
        }, [C, b, O, x, U, G, V, B, N, M, F, L]);
    i.useEffect(() => {
        0 !== U.length &&
            _.default.track(T.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: O,
                channel_id: b,
                sku_ids: U.map((e) => e.skuId),
                location: R,
            });
    }, [O, b, U, R]);
    let j = "loading" === k || 0 === U.length;
    return "error" === k && 0 === U.length
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
                              children: V && !B ? y.intl.string(y.t["7lZ31J"]) : y.intl.string(y.t.BCi1gT),
                          }),
                          null != P ? P : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: v.ld,
                      children: j ? (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: v.u1 }) : H,
                  }),
                  !j && U.length > 0 && (0, r.jsx)(I.A, { location: R, className: n }),
              ],
          });
}
