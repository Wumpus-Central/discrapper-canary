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
            rewardOfferNoticeClassName: n,
            applicationId: s,
            userIds: N,
            cardSize: C = u.Y.SMALL,
            location: b,
            guildId: R,
            channelId: O,
            numWishlistItems: D = 2,
        } = e,
        L = (0, l.h)(s),
        w = (0, m.A)(L, b),
        x = (0, c.G)("social_layer_storefront_gifting_breadcrumb"),
        M = i.useMemo(() => {
            if (x) return null;
            let e = null != w ? w.getIconURL(S.iu.SMALL) : void 0;
            return null != e ? (0, r.jsx)("img", { className: v.In, src: e, alt: "" }) : void 0;
        }, [w, x]),
        {
            state: P,
            recommendations: k,
            skuIdToUserIdsReasons: U,
        } = (0, E.A)({ applicationId: w?.id, numWishlistItems: D, location: b, includeWishlists: !0, userIds: N }),
        G = i.useMemo(() => new Set(N), [N]),
        { hasWishlist: F, hasPopular: V } = i.useMemo(() => (0, p.wH)(k, U, G), [k, U, G]),
        B = i.useMemo(() => {
            let e = F && !V && 1 === N.length,
                t = F && V;
            return k.map((n) => {
                let i =
                    U[n.skuId]
                        ?.filter((e) => e.reason === h.G.WISHLIST && G.has(e.userId))
                        .map((e) => e.userId)
                        .filter(f.Vq) ?? [];
                return x
                    ? (0, r.jsx)(
                          g.A,
                          {
                              sku: n.sku,
                              source: i.length > 0 ? d.uS.WISHLIST : d.uS.POPULAR,
                              application: w,
                              showIcons: t,
                              guildId: R,
                              channelId: O,
                              userIdsForGifting: N,
                              userIdsForRecommendation: i,
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
                              guildId: R,
                              channelId: O,
                              cardSize: C,
                              contextContainerClassName: v.RL,
                          },
                          n.skuId,
                      );
            });
        }, [C, O, R, x, k, U, F, V, N, w, G]);
    i.useEffect(() => {
        0 !== k.length &&
            _.default.track(T.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: R,
                channel_id: O,
                sku_ids: k.map((e) => e.skuId),
                location: b,
            });
    }, [R, O, k, b]);
    let H = "loading" === P || 0 === k.length;
    return "error" === P && 0 === k.length
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
                              children: F && !V ? y.intl.string(y.t["7lZ31J"]) : y.intl.string(y.t.BCi1gT),
                          }),
                          null != M ? M : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: v.ld,
                      children: H ? (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: v.u1 }) : B,
                  }),
                  !H && k.length > 0 && (0, r.jsx)(I.A, { location: b, className: n }),
              ],
          });
}
