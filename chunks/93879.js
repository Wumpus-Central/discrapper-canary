a.r(t), a.d(t, { default: () => w });
var i = a(627968),
    n = a(64700),
    r = a(503698),
    l = a.n(r),
    s = a(834730),
    o = a(289873),
    _ = a(429913),
    d = a(332772),
    c = a(594832),
    u = a(631784),
    m = a(310209),
    p = a(954571),
    f = a(871123),
    h = a(453774),
    v = a(568751),
    g = a(84511),
    I = a(652215),
    x = a(985018),
    b = a(499362);
function w(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: a,
            applicationId: r,
            userIds: w,
            location: C,
            guildId: A,
            channelId: S,
            numWishlistItems: T = 2,
            cardSpec: y,
        } = e,
        E = (0, _.h)(r),
        P = (0, h.A)(E?.id);
    (0, d.T)({ location: "social_layer_storefront_gifting_breadcrumb" });
    let L = n.useMemo(() => (P?.id != null ? [P.id] : []), [P]),
        {
            status: j,
            recommendations: k,
            skusToUserAndReason: M,
        } = (0, u.XQ)({ applicationIds: L, numItems: T, userIds: w }),
        N = n.useMemo(() => new Set(w), [w]),
        { hasWishlist: R, hasPopular: O } = n.useMemo(() => (0, f.wH)(k, M, N), [k, M, N]),
        H = n.useMemo(() => {
            let e = R && O;
            return k.map((t) => {
                let a = Object.entries(M[t.id] ?? {})
                    .filter((e) => {
                        let [t, a] = e;
                        return a === m.j.WISHLIST && N.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, i.jsx)(
                    v.A,
                    {
                        sku: t,
                        source: a.length > 0 ? c.uS.WISHLIST : c.uS.POPULAR,
                        application: P,
                        showIcons: e,
                        guildId: A,
                        channelId: S,
                        userIdsForGifting: w,
                        userIdsForRecommendation: a,
                        spec: y,
                    },
                    t.id,
                );
            });
        }, [R, O, k, M, P, A, S, w, y, N]);
    n.useEffect(() => {
        0 !== k.length &&
            p.default.track(I.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: A,
                channel_id: S,
                sku_ids: k.map((e) => e.id),
                location: C,
            });
    }, [A, S, k, C]);
    let U = "loading" === j || 0 === k.length;
    return "error" === j && 0 === k.length
        ? null
        : (0, i.jsxs)("div", {
              className: l()(b.kL, t),
              children: [
                  (0, i.jsx)("div", {
                      className: b.wx,
                      children: (0, i.jsx)(s.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: R && !O ? x.intl.string(x.t["7lZ31J"]) : x.intl.string(x.t.BCi1gT),
                      }),
                  }),
                  (0, i.jsx)("div", {
                      className: b.ld,
                      children: U ? (0, i.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE, className: b.u1 }) : H,
                  }),
                  !U && k.length > 0 && (0, i.jsx)(g.A, { location: C, className: a }),
              ],
          });
}
