a.r(t), a.d(t, { default: () => F });
var i = a(627968),
    n = a(64700),
    r = a(503698),
    l = a.n(r),
    s = a(834730),
    o = a(289873),
    _ = a(429913),
    d = a(332772),
    c = a(594832),
    u = a(862772),
    m = a(310209),
    p = a(954571),
    f = a(871123),
    h = a(453774),
    v = a(735438),
    g = a.n(v),
    I = a(17928),
    x = a(52133),
    b = a(793574),
    w = a(688810),
    C = a(661492),
    S = a(212387),
    A = a(121700),
    T = a(662349),
    y = a(754804),
    E = a(287809),
    P = a(403362),
    L = a(317560),
    j = a(533406),
    k = a(788868),
    M = a(699976),
    N = a(985018);
let R = M.Z.SIZE_90;
function O(e) {
    let {
            sku: t,
            source: a,
            application: r,
            guildId: l,
            showIcons: s,
            channelId: o,
            userIdsForGifting: _,
            userIdsForRecommendation: d,
            spec: u = R,
        } = e,
        [m, p] = n.useState(g().uniq(_)),
        [f, h] = n.useState(!1),
        [v, M] = n.useState(g().uniq(d)),
        { analyticsLocations: O } = (0, w.Ay)(
            b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            b.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    n.useEffect(() => {
        M((e) => {
            let t = g().uniq(d);
            return (0, x.v)(e, t) ? e : t;
        });
    }, [d]),
        n.useEffect(() => {
            p((e) => {
                let t = g().uniq(_);
                return (0, x.v)(e, t) ? e : t;
            });
        }, [_]);
    let H = (0, I.bG)([E.default], () => (1 === m.length ? E.default.getUser(m[0]) : void 0), [m]),
        U = (0, I.yK)([E.default], () => v.map((e) => E.default.getUser(e)).filter(P.Vq), [v]),
        B = n.useCallback(() => {
            null != r &&
                null != r.guildId &&
                (0, L.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: H,
                    giftingOrigin: k.vQ.SHOP_PAGE,
                    analyticsLocations: O,
                });
        }, [r, t.id, t.applicationId, H, O]),
        F = n.useCallback(() => {
            (0, j.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: H,
                    additionalUserIds: m.length > 1 ? m : void 0,
                    giftingOrigin: k.vQ.SHOP_PAGE,
                },
                { analyticsLocations: O },
            );
        }, [t, H, m, O]),
        { label: G, icon: D } = (0, T.h)({ wishlistOwner: H, isOwned: !1, shortText: !0 });
    return (0, i.jsxs)(S.A, {
        sku: t,
        user: H,
        spec: u,
        onClick: B,
        "aria-label": N.intl.formatToPlainString(N.t.ZBB4Ty, { productName: (0, C.TC)(t) }),
        onHoverOrFocusChange: h,
        children: [
            (0, i.jsx)(T.A, { spec: u, onClick: F, isHoveringOrFocusing: f, label: G, icon: D }),
            (0, i.jsx)(A.A, {
                spec: u,
                sku: t,
                isCardHovered: f,
                location: "ContextualSocialLayerSkuItemCard",
                replacedElement:
                    s && a === c.uS.WISHLIST && U.length > 0
                        ? (0, i.jsx)(y.X, { spec: u, users: U, guildId: l ?? void 0, channelId: o ?? void 0 })
                        : null,
            }),
        ],
    });
}
var H = a(84511),
    U = a(652215),
    B = a(499362);
function F(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: a,
            applicationId: r,
            userIds: v,
            location: g,
            guildId: I,
            channelId: x,
            numWishlistItems: b = 2,
            cardSpec: w,
        } = e,
        C = (0, _.h)(r),
        S = (0, h.A)(C?.id);
    (0, d.T)({ location: "social_layer_storefront_gifting_breadcrumb" });
    let A = n.useMemo(() => (S?.id != null ? [S.id] : []), [S]),
        {
            status: T,
            recommendations: y,
            skusToUserAndReason: E,
        } = (0, u.XQ)({ applicationIds: A, numItems: b, userIds: v }),
        P = n.useMemo(() => new Set(v), [v]),
        { hasWishlist: L, hasPopular: j } = n.useMemo(() => (0, f.wH)(y, E, P), [y, E, P]),
        k = n.useMemo(() => {
            let e = L && j;
            return y.map((t) => {
                let a = Object.entries(E[t.id] ?? {})
                    .filter((e) => {
                        let [t, a] = e;
                        return a === m.j.WISHLIST && P.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, i.jsx)(
                    O,
                    {
                        sku: t,
                        source: a.length > 0 ? c.uS.WISHLIST : c.uS.POPULAR,
                        application: S,
                        showIcons: e,
                        guildId: I,
                        channelId: x,
                        userIdsForGifting: v,
                        userIdsForRecommendation: a,
                        spec: w,
                    },
                    t.id,
                );
            });
        }, [L, j, y, E, S, I, x, v, w, P]);
    n.useEffect(() => {
        0 !== y.length &&
            p.default.track(U.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: I,
                channel_id: x,
                sku_ids: y.map((e) => e.id),
                location: g,
            });
    }, [I, x, y, g]);
    let M = "loading" === T || 0 === y.length;
    return "error" === T && 0 === y.length
        ? null
        : (0, i.jsxs)("div", {
              className: l()(B.kL, t),
              children: [
                  (0, i.jsx)("div", {
                      className: B.wx,
                      children: (0, i.jsx)(s.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: L && !j ? N.intl.string(N.t["7lZ31J"]) : N.intl.string(N.t.BCi1gT),
                      }),
                  }),
                  (0, i.jsx)("div", {
                      className: B.ld,
                      children: M ? (0, i.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE, className: B.u1 }) : k,
                  }),
                  !M && y.length > 0 && (0, i.jsx)(H.A, { location: g, className: a }),
              ],
          });
}
