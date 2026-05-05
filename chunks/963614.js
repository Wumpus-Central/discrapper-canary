i.r(t), i.d(t, { default: () => B });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(834730),
    u = i(289873),
    d = i(429913),
    c = i(332772),
    o = i(561794),
    I = i(862772),
    g = i(310209),
    p = i(174459),
    S = i(871123),
    h = i(453774),
    _ = i(735438),
    f = i.n(_),
    m = i(17928),
    T = i(52133),
    E = i(793574),
    C = i(688810),
    v = i(661492),
    x = i(212387),
    A = i(121700),
    R = i(662349),
    k = i(754804),
    O = i(287809),
    j = i(403362),
    H = i(317560),
    N = i(533406),
    L = i(788868),
    b = i(699976),
    y = i(375708);
let G = b.Z.SIZE_90;
function M(e) {
    let {
            sku: t,
            source: i,
            application: s,
            guildId: a,
            showIcons: r,
            channelId: u,
            userIdsForGifting: d,
            userIdsForRecommendation: c,
            spec: I = G,
        } = e,
        [g, p] = l.useState(f().uniq(d)),
        [S, h] = l.useState(!1),
        [_, b] = l.useState(f().uniq(c)),
        { analyticsLocations: M } = (0, C.Ay)(
            E.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            E.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    l.useEffect(() => {
        b((e) => {
            let t = f().uniq(c);
            return (0, T.v)(e, t) ? e : t;
        });
    }, [c]),
        l.useEffect(() => {
            p((e) => {
                let t = f().uniq(d);
                return (0, T.v)(e, t) ? e : t;
            });
        }, [d]);
    let P = (0, m.bG)([O.default], () => (1 === g.length ? O.default.getUser(g[0]) : void 0), [g]),
        w = (0, m.yK)([O.default], () => _.map((e) => O.default.getUser(e)).filter(j.Vq), [_]),
        F = l.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, H.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: P,
                    giftingOrigin: L.vQ.SHOP_PAGE,
                    analyticsLocations: M,
                });
        }, [s, t.id, t.applicationId, P, M]),
        B = l.useCallback(() => {
            (0, N.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: P,
                    additionalUserIds: g.length > 1 ? g : void 0,
                    giftingOrigin: L.vQ.SHOP_PAGE,
                },
                { analyticsLocations: M },
            );
        }, [t, P, g, M]),
        { label: U, icon: W } = (0, R.h)({ wishlistOwner: P, isOwned: !1, shortText: !0 });
    return (0, n.jsxs)(x.A, {
        sku: t,
        user: P,
        spec: I,
        onClick: F,
        "aria-label": y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, v.TC)(t) }),
        onHoverOrFocusChange: h,
        children: [
            (0, n.jsx)(R.A, { spec: I, onClick: B, isHoveringOrFocusing: S, label: U, icon: W }),
            (0, n.jsx)(A.A, {
                spec: I,
                sku: t,
                isCardHovered: S,
                location: "ContextualSocialLayerSkuItemCard",
                replacedElement:
                    r && i === o.uS.WISHLIST && w.length > 0
                        ? (0, n.jsx)(k.X, { spec: I, users: w, guildId: a ?? void 0, channelId: u ?? void 0 })
                        : null,
            }),
        ],
    });
}
var P = i(84511),
    w = i(652215),
    F = i(499362);
function B(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: i,
            applicationId: s,
            userIds: _,
            location: f,
            guildId: m,
            channelId: T,
            numWishlistItems: E = 2,
            cardSpec: C,
        } = e,
        v = (0, d.h)(s),
        x = (0, h.A)(v?.id);
    (0, c.T)({ location: "social_layer_storefront_gifting_breadcrumb" });
    let A = l.useMemo(() => (x?.id != null ? [x.id] : []), [x]),
        {
            status: R,
            recommendations: k,
            skusToUserAndReason: O,
        } = (0, I.XQ)({ applicationIds: A, numItems: E, userIds: _ }),
        j = l.useMemo(() => new Set(_), [_]),
        { hasWishlist: H, hasPopular: N } = l.useMemo(() => (0, S.wH)(k, O, j), [k, O, j]),
        L = l.useMemo(() => {
            let e = H && N;
            return k.map((t) => {
                let i = Object.entries(O[t.id] ?? {})
                    .filter((e) => {
                        let [t, i] = e;
                        return i === g.j.WISHLIST && j.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, n.jsx)(
                    M,
                    {
                        sku: t,
                        source: i.length > 0 ? o.uS.WISHLIST : o.uS.POPULAR,
                        application: x,
                        showIcons: e,
                        guildId: m,
                        channelId: T,
                        userIdsForGifting: _,
                        userIdsForRecommendation: i,
                        spec: C,
                    },
                    t.id,
                );
            });
        }, [H, N, k, O, x, m, T, _, C, j]);
    l.useEffect(() => {
        0 !== k.length &&
            p.default.track(w.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: m,
                channel_id: T,
                sku_ids: k.map((e) => e.id),
                location: f,
            });
    }, [m, T, k, f]);
    let b = "loading" === R || 0 === k.length;
    return "error" === R && 0 === k.length
        ? null
        : (0, n.jsxs)("div", {
              className: a()(F.kL, t),
              children: [
                  (0, n.jsx)("div", {
                      className: F.wx,
                      children: (0, n.jsx)(r.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: H && !N ? y.intl.string(y.t["7lZ31J"]) : y.intl.string(y.t.BCi1gT),
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: F.ld,
                      children: b ? (0, n.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE, className: F.u1 }) : L,
                  }),
                  !b && k.length > 0 && (0, n.jsx)(P.A, { location: f, className: i }),
              ],
          });
}
