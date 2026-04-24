"use strict";
a.r(t), a.d(t, { default: () => H });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    i = a.n(s),
    l = a(834730),
    c = a(289873),
    d = a(429913),
    o = a(332772),
    u = a(594832),
    f = a(862772),
    p = a(310209),
    _ = a(954571),
    h = a(871123),
    m = a(453774),
    b = a(735438),
    g = a.n(b),
    E = a(17928),
    A = a(52133),
    v = a(793574),
    I = a(688810),
    R = a(661492),
    S = a(212387),
    x = a(121700),
    y = a(662349),
    T = a(754804),
    L = a(287809),
    N = a(403362),
    C = a(317560),
    M = a(99161),
    O = a(788868),
    w = a(699976),
    U = a(985018);
let P = w.Z.SIZE_90;
function k(e) {
    let {
            sku: t,
            source: a,
            application: s,
            guildId: i,
            showIcons: l,
            channelId: c,
            userIdsForGifting: d,
            userIdsForRecommendation: o,
            spec: f = P,
        } = e,
        [p, _] = r.useState(g().uniq(d)),
        [h, m] = r.useState(!1),
        [b, w] = r.useState(g().uniq(o)),
        { analyticsLocations: k } = (0, I.Ay)(
            v.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            v.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    r.useEffect(() => {
        w((e) => {
            let t = g().uniq(o);
            return (0, A.v)(e, t) ? e : t;
        });
    }, [o]),
        r.useEffect(() => {
            _((e) => {
                let t = g().uniq(d);
                return (0, A.v)(e, t) ? e : t;
            });
        }, [d]);
    let F = (0, E.bG)([L.default], () => (1 === p.length ? L.default.getUser(p[0]) : void 0), [p]),
        D = (0, E.yK)([L.default], () => b.map((e) => L.default.getUser(e)).filter(N.Vq), [b]),
        j = r.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, C.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: F,
                    giftingOrigin: O.vQ.SHOP_PAGE,
                    analyticsLocations: k,
                });
        }, [s, t.id, t.applicationId, F, k]),
        H = r.useCallback(() => {
            (0, M.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: F,
                    additionalUserIds: p.length > 1 ? p : void 0,
                    giftingOrigin: O.vQ.SHOP_PAGE,
                },
                { analyticsLocations: k },
            );
        }, [t, F, p, k]),
        { label: B, icon: G } = (0, y.h)({ wishlistOwner: F, isOwned: !1, shortText: !0 });
    return (0, n.jsxs)(S.A, {
        sku: t,
        user: F,
        spec: f,
        onClick: j,
        "aria-label": U.intl.formatToPlainString(U.t.ZBB4Ty, { productName: (0, R.TC)(t) }),
        onHoverOrFocusChange: m,
        children: [
            (0, n.jsx)(y.A, { spec: f, onClick: H, isHoveringOrFocusing: h, label: B, icon: G }),
            (0, n.jsx)(x.A, {
                spec: f,
                sku: t,
                isCardHovered: h,
                location: "ContextualSocialLayerSkuItemCard",
                replacedElement:
                    l && a === u.uS.WISHLIST && D.length > 0
                        ? (0, n.jsx)(T.X, { spec: f, users: D, guildId: i ?? void 0, channelId: c ?? void 0 })
                        : null,
            }),
        ],
    });
}
var F = a(84511),
    D = a(652215),
    j = a(499362);
function H(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: a,
            applicationId: s,
            userIds: b,
            location: g,
            guildId: E,
            channelId: A,
            numWishlistItems: v = 2,
            cardSpec: I,
        } = e,
        R = (0, d.h)(s),
        S = (0, m.A)(R?.id);
    (0, o.T)({ location: "social_layer_storefront_gifting_breadcrumb" });
    let x = r.useMemo(() => (S?.id != null ? [S.id] : []), [S]),
        {
            status: y,
            recommendations: T,
            skusToUserAndReason: L,
        } = (0, f.XQ)({ applicationIds: x, numItems: v, userIds: b }),
        N = r.useMemo(() => new Set(b), [b]),
        { hasWishlist: C, hasPopular: M } = r.useMemo(() => (0, h.wH)(T, L, N), [T, L, N]),
        O = r.useMemo(() => {
            let e = C && M;
            return T.map((t) => {
                let a = Object.entries(L[t.id] ?? {})
                    .filter((e) => {
                        let [t, a] = e;
                        return a === p.j.WISHLIST && N.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, n.jsx)(
                    k,
                    {
                        sku: t,
                        source: a.length > 0 ? u.uS.WISHLIST : u.uS.POPULAR,
                        application: S,
                        showIcons: e,
                        guildId: E,
                        channelId: A,
                        userIdsForGifting: b,
                        userIdsForRecommendation: a,
                        spec: I,
                    },
                    t.id,
                );
            });
        }, [C, M, T, L, S, E, A, b, I, N]);
    r.useEffect(() => {
        0 !== T.length &&
            _.default.track(D.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: E,
                channel_id: A,
                sku_ids: T.map((e) => e.id),
                location: g,
            });
    }, [E, A, T, g]);
    let w = "loading" === y || 0 === T.length;
    return "error" === y && 0 === T.length
        ? null
        : (0, n.jsxs)("div", {
              className: i()(j.kL, t),
              children: [
                  (0, n.jsx)("div", {
                      className: j.wx,
                      children: (0, n.jsx)(l.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: C && !M ? U.intl.string(U.t["7lZ31J"]) : U.intl.string(U.t.BCi1gT),
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: j.ld,
                      children: w ? (0, n.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE, className: j.u1 }) : O,
                  }),
                  !w && T.length > 0 && (0, n.jsx)(F.A, { location: g, className: a }),
              ],
          });
}
