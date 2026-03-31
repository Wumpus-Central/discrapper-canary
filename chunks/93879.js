"use strict";
n.d(t, { A: () => R });
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
    f = n(631784),
    p = n(721932),
    h = n(310209),
    m = n(954571),
    E = n(403362),
    g = n(871123),
    A = n(453774),
    I = n(568751),
    T = n(620406),
    S = n(84511),
    y = n(652215),
    v = n(360469),
    N = n(985018),
    C = n(55529);
function R(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: n,
            applicationId: s,
            userIds: R,
            cardSize: O = u.Y.SMALL,
            location: b,
            guildId: D,
            channelId: L,
            numWishlistItems: w = 2,
            cardSpec: M,
        } = e,
        P = (0, l.h)(s),
        x = (0, A.A)(P?.id),
        k = (0, c.GG)("social_layer_storefront_gifting_breadcrumb");
    (0, d.T)({ location: "social_layer_storefront_gifting_breadcrumb" });
    let U = i.useMemo(() => {
            if (k) return null;
            let e = null != x ? x.getIconURL(v.iu.SMALL) : void 0;
            return null != e ? (0, r.jsx)("img", { className: C.In, src: e, alt: "" }) : void 0;
        }, [x, k]),
        G = i.useMemo(() => (x?.id != null ? [x.id] : []), [x]),
        {
            status: F,
            recommendations: V,
            skusToUserAndReason: B,
        } = (0, f.XQ)({ applicationIds: G, numItems: w, userIds: R }),
        H = i.useMemo(() => new Set(R), [R]),
        j = i.useMemo(() => V.map((e) => p.A.fromSKU(e)).filter(E.Vq), [V]),
        { hasWishlist: Y, hasPopular: W } = i.useMemo(() => (0, g.wH)(V, B, H), [V, B, H]),
        K = i.useMemo(() => {
            let e = Y && !W && 1 === R.length,
                t = Y && W;
            return j.map((n) => {
                let i = Object.entries(B[n.skuId] ?? {})
                    .filter((e) => {
                        let [t, n] = e;
                        return n === h.j.WISHLIST && H.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return k
                    ? (0, r.jsx)(
                          I.A,
                          {
                              sku: n.sku,
                              source: i.length > 0 ? _.uS.WISHLIST : _.uS.POPULAR,
                              application: x,
                              showIcons: t,
                              guildId: D,
                              channelId: L,
                              userIdsForGifting: R,
                              userIdsForRecommendation: i,
                              spec: M,
                          },
                          n.skuId,
                      )
                    : (0, r.jsx)(
                          T.A,
                          {
                              variant: e ? T.$.NO_ICON : i.length > 0 ? T.$.WISHLIST : T.$.POPULAR,
                              userIdsForRecommendation: i,
                              userIdsForGifting: R,
                              wishlistItem: n,
                              guildId: D,
                              channelId: L,
                              cardSize: O,
                              contextContainerClassName: C.RL,
                          },
                          n.skuId,
                      );
            });
        }, [O, L, D, k, j, B, Y, W, R, x, H, M]);
    i.useEffect(() => {
        0 !== V.length &&
            m.default.track(y.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: D,
                channel_id: L,
                sku_ids: V.map((e) => e.id),
                location: b,
            });
    }, [D, L, V, b]);
    let $ = "loading" === F || 0 === V.length;
    return "error" === F && 0 === V.length
        ? null
        : (0, r.jsxs)("div", {
              className: a()(C.kL, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: C.wx,
                      children: [
                          (0, r.jsx)(o.EYj, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: Y && !W ? N.intl.string(N.t["7lZ31J"]) : N.intl.string(N.t.BCi1gT),
                          }),
                          null != U ? U : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: C.ld,
                      children: $ ? (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: C.u1 }) : K,
                  }),
                  !$ && V.length > 0 && (0, r.jsx)(S.A, { location: b, className: n }),
              ],
          });
}
