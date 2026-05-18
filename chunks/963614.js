i.r(t), i.d(t, { default: () => y });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    u = i(834730),
    r = i(289873),
    d = i(429913),
    c = i(561794),
    o = i(862772),
    I = i(310209),
    g = i(174459),
    p = i(871123),
    S = i(453774),
    h = i(735438),
    f = i.n(h),
    _ = i(17928),
    m = i(52133),
    T = i(793574),
    E = i(688810),
    R = i(661492),
    v = i(212387),
    A = i(662349),
    C = i(754804),
    O = i(287809),
    x = i(403362),
    k = i(317560),
    N = i(533406),
    j = i(788868),
    H = i(699976),
    L = i(375708);
let G = H.Z.SIZE_90;
function M(e) {
    let {
            sku: t,
            source: i,
            application: s,
            guildId: a,
            showIcons: u,
            channelId: r,
            userIdsForGifting: d,
            userIdsForRecommendation: o,
            spec: I = G,
        } = e,
        [g, p] = l.useState(f().uniq(d)),
        [S, h] = l.useState(!1),
        [H, M] = l.useState(f().uniq(o)),
        { analyticsLocations: P } = (0, E.Ay)(
            T.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            T.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    l.useEffect(() => {
        M((e) => {
            let t = f().uniq(o);
            return (0, m.v)(e, t) ? e : t;
        });
    }, [o]),
        l.useEffect(() => {
            p((e) => {
                let t = f().uniq(d);
                return (0, m.v)(e, t) ? e : t;
            });
        }, [d]);
    let b = (0, _.bG)([O.default], () => (1 === g.length ? O.default.getUser(g[0]) : void 0), [g]),
        w = (0, _.yK)([O.default], () => H.map((e) => O.default.getUser(e)).filter(x.Vq), [H]),
        y = l.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, k.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: b,
                    giftingOrigin: j.vQ.SHOP_PAGE,
                    analyticsLocations: P,
                });
        }, [s, t.id, t.applicationId, b, P]),
        F = l.useCallback(() => {
            (0, N.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: b,
                    additionalUserIds: g.length > 1 ? g : void 0,
                    giftingOrigin: j.vQ.SHOP_PAGE,
                },
                { analyticsLocations: P },
            );
        }, [t, b, g, P]),
        { label: B, icon: U } = (0, A.h)({ wishlistOwner: b, isOwned: !1, shortText: !0 });
    return (0, n.jsxs)(v.A, {
        sku: t,
        user: b,
        spec: I,
        onClick: y,
        "aria-label": L.intl.formatToPlainString(L.t.ZBB4Ty, { productName: (0, R.TC)(t) }),
        onHoverOrFocusChange: h,
        children: [
            (0, n.jsx)(A.A, { spec: I, onClick: F, isHoveringOrFocusing: S, label: B, icon: U }),
            u && i === c.uS.WISHLIST && w.length > 0
                ? (0, n.jsx)(C.X, { spec: I, users: w, guildId: a ?? void 0, channelId: r ?? void 0 })
                : null,
        ],
    });
}
var P = i(84511),
    b = i(652215),
    w = i(499362);
function y(e) {
    let {
            className: t,
            rewardOfferNoticeClassName: i,
            applicationId: s,
            userIds: h,
            location: f,
            guildId: _,
            channelId: m,
            numWishlistItems: T = 2,
            cardSpec: E,
        } = e,
        R = (0, d.h)(s),
        v = (0, S.A)(R?.id),
        A = l.useMemo(() => (v?.id != null ? [v.id] : []), [v]),
        {
            status: C,
            recommendations: O,
            skusToUserAndReason: x,
        } = (0, o.XQ)({ applicationIds: A, numItems: T, userIds: h }),
        k = l.useMemo(() => new Set(h), [h]),
        { hasWishlist: N, hasPopular: j } = l.useMemo(() => (0, p.wH)(O, x, k), [O, x, k]),
        H = l.useMemo(() => {
            let e = N && j;
            return O.map((t) => {
                let i = Object.entries(x[t.id] ?? {})
                    .filter((e) => {
                        let [t, i] = e;
                        return i === I.j.WISHLIST && k.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, n.jsx)(
                    M,
                    {
                        sku: t,
                        source: i.length > 0 ? c.uS.WISHLIST : c.uS.POPULAR,
                        application: v,
                        showIcons: e,
                        guildId: _,
                        channelId: m,
                        userIdsForGifting: h,
                        userIdsForRecommendation: i,
                        spec: E,
                    },
                    t.id,
                );
            });
        }, [N, j, O, x, v, _, m, h, E, k]);
    l.useEffect(() => {
        0 !== O.length &&
            g.default.track(b.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: _,
                channel_id: m,
                sku_ids: O.map((e) => e.id),
                location: f,
            });
    }, [_, m, O, f]);
    let G = "loading" === C || 0 === O.length;
    return "error" === C && 0 === O.length
        ? null
        : (0, n.jsxs)("div", {
              className: a()(w.kL, t),
              children: [
                  (0, n.jsx)("div", {
                      className: w.wx,
                      children: (0, n.jsx)(u.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: N && !j ? L.intl.string(L.t["7lZ31J"]) : L.intl.string(L.t.BCi1gT),
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: w.ld,
                      children: G ? (0, n.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE, className: w.u1 }) : H,
                  }),
                  !G && O.length > 0 && (0, n.jsx)(P.A, { location: f, className: i }),
              ],
          });
}
