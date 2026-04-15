"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(429913),
    u = n(332772),
    c = n(594832),
    d = n(631784),
    _ = n(310209),
    f = n(954571),
    p = n(871123),
    h = n(453774),
    m = n(568751),
    E = n(84511),
    g = n(652215),
    A = n(985018),
    I = n(795474);
function T(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: n,
            applicationId: s,
            userIds: T,
            location: S,
            guildId: y,
            channelId: v,
            numWishlistItems: N = 2,
            cardSpec: C,
        } = e,
        R = (0, l.h)(s),
        O = (0, h.A)(R?.id);
    (0, u.T)({ location: "social_layer_storefront_gifting_breadcrumb" });
    let b = i.useMemo(() => (O?.id != null ? [O.id] : []), [O]),
        {
            status: D,
            recommendations: L,
            skusToUserAndReason: w,
        } = (0, d.XQ)({ applicationIds: b, numItems: N, userIds: T }),
        M = i.useMemo(() => new Set(T), [T]),
        { hasWishlist: P, hasPopular: x } = i.useMemo(() => (0, p.wH)(L, w, M), [L, w, M]),
        k = i.useMemo(() => {
            let e = P && x;
            return L.map((t) => {
                let n = Object.entries(w[t.id] ?? {})
                    .filter((e) => {
                        let [t, n] = e;
                        return n === _.j.WISHLIST && M.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, r.jsx)(
                    m.A,
                    {
                        sku: t,
                        source: n.length > 0 ? c.uS.WISHLIST : c.uS.POPULAR,
                        application: O,
                        showIcons: e,
                        guildId: y,
                        channelId: v,
                        userIdsForGifting: T,
                        userIdsForRecommendation: n,
                        spec: C,
                    },
                    t.id,
                );
            });
        }, [P, x, L, w, O, y, v, T, C, M]);
    i.useEffect(() => {
        0 !== L.length &&
            f.default.track(g.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: y,
                channel_id: v,
                sku_ids: L.map((e) => e.id),
                location: S,
            });
    }, [y, v, L, S]);
    let U = "loading" === D || 0 === L.length;
    return "error" === D && 0 === L.length
        ? null
        : (0, r.jsxs)("div", {
              className: a()(I.kL, t),
              children: [
                  (0, r.jsx)("div", {
                      className: I.wx,
                      children: (0, r.jsx)(o.EYj, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: P && !x ? A.intl.string(A.t["7lZ31J"]) : A.intl.string(A.t.BCi1gT),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: I.ld,
                      children: U ? (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE, className: I.u1 }) : k,
                  }),
                  !U && L.length > 0 && (0, r.jsx)(E.A, { location: S, className: n }),
              ],
          });
}
