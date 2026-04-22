a.r(t), a.d(t, { default: () => b });
var n = a(627968),
    r = a(64700),
    i = a(503698),
    l = a.n(i),
    o = a(834730),
    s = a(289873),
    c = a(429913),
    d = a(332772),
    u = a(594832),
    _ = a(631784),
    p = a(310209),
    f = a(954571),
    h = a(871123),
    m = a(453774),
    v = a(568751),
    g = a(84511),
    A = a(652215),
    I = a(985018),
    S = a(499362);
function b(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: a,
            applicationId: i,
            userIds: b,
            location: E,
            guildId: x,
            channelId: C,
            numWishlistItems: T = 2,
            cardSpec: O,
        } = e,
        R = (0, c.h)(i),
        y = (0, m.A)(R?.id);
    (0, d.T)({ location: "social_layer_storefront_gifting_breadcrumb" });
    let w = r.useMemo(() => (y?.id != null ? [y.id] : []), [y]),
        {
            status: N,
            recommendations: k,
            skusToUserAndReason: L,
        } = (0, _.XQ)({ applicationIds: w, numItems: T, userIds: b }),
        P = r.useMemo(() => new Set(b), [b]),
        { hasWishlist: U, hasPopular: F } = r.useMemo(() => (0, h.wH)(k, L, P), [k, L, P]),
        M = r.useMemo(() => {
            let e = U && F;
            return k.map((t) => {
                let a = Object.entries(L[t.id] ?? {})
                    .filter((e) => {
                        let [t, a] = e;
                        return a === p.j.WISHLIST && P.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, n.jsx)(
                    v.A,
                    {
                        sku: t,
                        source: a.length > 0 ? u.uS.WISHLIST : u.uS.POPULAR,
                        application: y,
                        showIcons: e,
                        guildId: x,
                        channelId: C,
                        userIdsForGifting: b,
                        userIdsForRecommendation: a,
                        spec: O,
                    },
                    t.id,
                );
            });
        }, [U, F, k, L, y, x, C, b, O, P]);
    r.useEffect(() => {
        0 !== k.length &&
            f.default.track(A.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: x,
                channel_id: C,
                sku_ids: k.map((e) => e.id),
                location: E,
            });
    }, [x, C, k, E]);
    let H = "loading" === N || 0 === k.length;
    return "error" === N && 0 === k.length
        ? null
        : (0, n.jsxs)("div", {
              className: l()(S.kL, t),
              children: [
                  (0, n.jsx)("div", {
                      className: S.wx,
                      children: (0, n.jsx)(o.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: U && !F ? I.intl.string(I.t["7lZ31J"]) : I.intl.string(I.t.BCi1gT),
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: S.ld,
                      children: H ? (0, n.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE, className: S.u1 }) : M,
                  }),
                  !H && k.length > 0 && (0, n.jsx)(g.A, { location: E, className: a }),
              ],
          });
}
