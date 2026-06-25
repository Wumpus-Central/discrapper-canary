e.d(t, { default: () => Y });
var s = e(627968),
    n = e(64700),
    l = e(791282),
    a = e.n(l),
    c = e(835245),
    r = e(172218),
    o = e(331322),
    d = e(534514),
    u = e(761508),
    I = e(224640),
    h = e(20742),
    f = e(17928),
    g = e(192308),
    p = e(364522),
    m = e(444927),
    _ = e(775602),
    S = e(793574),
    j = e(688810),
    x = e(171835),
    C = e(46332),
    L = e(937008),
    E = e(532794),
    N = e(975732),
    T = e(299679),
    A = e(561794),
    k = e(862772),
    O = e(310209),
    b = e(944841),
    w = e(734057),
    v = e(309010),
    y = e(174459),
    G = e(427262),
    R = e(413074),
    W = e(672525),
    M = e(810604),
    P = e(788868),
    D = e(652215),
    H = e(518477),
    F = e(699976),
    B = e(375708),
    U = e(778831),
    Q = e(935147);
function V(i) {
    let { onSelectSku: t, priceOptions: e, showPromotionalGiftBanner: n } = i;
    return (0, s.jsxs)(o.B, {
        direction: "vertical",
        gap: 16,
        children: [
            (0, s.jsxs)("div", {
                className: Q.u6,
                children: [
                    (0, s.jsx)(W.D3, {
                        onClick: () => t(P.pe.TIER_2),
                        isGift: !0,
                        priceOptions: e,
                        showPromotionalGiftBanner: n,
                        wumpusPosition: M.Rf.GIFT_SELECTION_MODAL,
                        className: U.giftSelectionModalContext,
                    }),
                    (0, s.jsx)(W.Ls, {
                        onClick: () => t(P.pe.TIER_0),
                        isGift: !0,
                        priceOptions: e,
                        className: U.giftSelectionModalContext,
                    }),
                ],
            }),
            (0, s.jsx)(R.A, {}),
        ],
    });
}
function X() {
    return (0, s.jsx)(s.Fragment, {
        children: Array.from({ length: 12 }, (i, t) => (0, s.jsx)(b.O, { spec: F.Z.SIZE_150 }, `placeholder-${t}`)),
    });
}
function Z(i) {
    let {
            displayItems: t,
            giftRecipient: e,
            defaultWishlistId: l,
            onSeeWishlistClick: a,
            onWishlistItemClick: c,
            totalUnownedWishlistItems: r,
            analyticsLocations: o,
        } = i,
        d = n.useMemo(
            () =>
                new Set(
                    t.map((i) => {
                        let { source: t } = i;
                        return t;
                    }),
                ),
            [t],
        ),
        u = (0, f.bG)([v.A, w.A], () => w.A.getChannel(v.A.getChannelId())),
        I = r > t.length ? r - t.length + 1 : void 0,
        h = n.useCallback(() => {
            c?.(), (0, g.closeAllModals)();
        }, [c]);
    return (0, s.jsx)(s.Fragment, {
        children: t.map((i, n) => {
            let { sku: c, source: r } = i;
            return (
                null != c &&
                (0, s.jsx)(
                    T.dB,
                    {
                        newValue: {
                            positionInSection: n,
                            skuId: c.id,
                            itemSource: r === A.uS.WISHLIST ? "organic" : "recommendation",
                            productLine: c.productLine,
                        },
                        children: (0, s.jsx)(b.A, {
                            numMoreItems: n === t.length - 1 ? I : void 0,
                            sku: c,
                            wishlistId: l,
                            source: r,
                            wishlistOwner: e,
                            hasMultipleSources: d.size > 1,
                            onOpenWishlist: a,
                            onClick: h,
                            analyticsLocations: o,
                            spec: F.Z.SIZE_150,
                            guildId: u?.guild_id,
                            channelId: u?.id,
                        }),
                    },
                    c.id,
                )
            );
        }),
    });
}
function K(i) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: e,
            onWishlistItemClick: l,
            displayItems: a,
            defaultWishlistId: o,
            isLoading: u,
            totalUnownedWishlistItems: I,
            analyticsLocations: h,
        } = i,
        f = (0, G.tx)(t),
        g =
            0 === I
                ? B.intl.string(B.t.BCi1gT)
                : I >= 12
                  ? B.intl.formatToPlainString(B.t.Y2RFOQ, { username: f })
                  : B.intl.formatToPlainString(B.t.dIDKgi, { username: f }),
        { analyticsLocations: p } = (0, j.Ay)(...(h ?? []), S.A.GIFT_SELECTION_MODAL_WISHLIST),
        _ = (0, m.A)(() => (0, c.A)()),
        [x, C] = n.useState(!1),
        L = n.useCallback(
            (i) => {
                i &&
                    !u &&
                    a.length > 0 &&
                    (y.default.track(D.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: a.map((i) => {
                            let { sku: t } = i;
                            return t.id;
                        }),
                        product_lines: Array.from(
                            new Set(
                                a.map((i) => {
                                    let { sku: t } = i;
                                    return t.productLine;
                                }),
                            ),
                        ),
                        location_stack: p,
                    }),
                    C(!0));
            },
            [u, a, t.id, p],
        ),
        E = (0, r.K)(L, void 0, !u && !x);
    return (0, s.jsxs)("div", {
        ref: E,
        className: Q.jf,
        children: [
            (0, s.jsx)("div", {
                className: Q.nM,
                children: (0, s.jsx)(d.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: Q.Uf,
                    children: g,
                }),
            }),
            (0, s.jsx)("div", {
                className: Q.KN,
                children: u
                    ? (0, s.jsx)(X, {})
                    : (0, s.jsx)(T.dB, {
                          newValue: {
                              impressionSessionId: _,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: t.id,
                              wishlistId: o,
                              analyticsLocations: p,
                          },
                          children: (0, s.jsx)(Z, {
                              displayItems: a,
                              giftRecipient: t,
                              defaultWishlistId: o,
                              onSeeWishlistClick: e,
                              onWishlistItemClick: l,
                              totalUnownedWishlistItems: I,
                              analyticsLocations: p,
                          }),
                      }),
            }),
        ],
    });
}
function J(i) {
    let {
            giftRecipient: t,
            onClose: e,
            nitroSection: l,
            analyticsLocations: a,
            displayItems: c,
            wishlistCount: r,
            defaultWishlistId: o,
            isWishlistLoaded: d,
        } = i,
        I = (0, A.tA)({ isGift: !0, giftRecipient: t }),
        h = (d ? r : 0) > 0 ? B.intl.string(B.t["7lZ31J"]) : B.intl.string(B.t.BCi1gT),
        [g, m] = n.useState("Nitro"),
        S = n.useRef(null),
        j = n.useRef(null),
        x = (0, f.bG)([_.Ay], () => _.Ay.useReducedMotion),
        C = n.useRef(!1),
        L = n.useCallback(
            (i) => {
                m(i), (C.current = !0);
                let e = S.current;
                null != e &&
                    e.addEventListener(
                        "scrollend",
                        () => {
                            C.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === i
                        ? e?.scrollTo({ top: 0, behavior: x ? "auto" : "smooth" })
                        : j.current?.scrollIntoView({ behavior: x ? "auto" : "smooth", block: "start" }),
                    y.default.track(D.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: i,
                        location_stack: a,
                    });
            },
            [t.id, a, x],
        ),
        E = n.useCallback(() => {
            y.default.track(D.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: r,
                location_stack: a,
            }),
                e(),
                (0, N.openUserProfileModal)({ userId: t.id, tabSection: H.RP.WISHLIST });
        }, [t.id, r, a, e]);
    return (
        n.useEffect(() => {
            let i = j.current,
                t = S.current;
            if (null == i || null == t) return;
            let e = new IntersectionObserver(
                (i) => {
                    let [t] = i;
                    C.current || m(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return e.observe(i), () => e.disconnect();
        }, [I]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                I &&
                    (0, s.jsx)("div", {
                        className: Q.CE,
                        children: (0, s.jsxs)(u.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: g,
                            onItemSelect: L,
                            children: [
                                (0, s.jsx)(u.V.Item, {
                                    id: "Nitro",
                                    "aria-label": B.intl.string(B.t.Ipxkog),
                                    children: B.intl.string(B.t.Ipxkog),
                                }),
                                (0, s.jsx)(u.V.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, s.jsx)(p.Ip, {
                    ref: S,
                    className: Q.XG,
                    children: (0, s.jsxs)("div", {
                        className: Q.Qs,
                        children: [
                            (0, s.jsx)("div", { className: Q.XP, children: l }),
                            I &&
                                (0, s.jsx)("div", {
                                    ref: j,
                                    className: Q.XP,
                                    children: (0, s.jsx)(K, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: E,
                                        onWishlistItemClick: e,
                                        displayItems: c,
                                        defaultWishlistId: o,
                                        analyticsLocations: a,
                                        isLoading: !d,
                                        totalUnownedWishlistItems: r,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function $(i) {
    let { giftRecipient: t, onClose: e, nitroSection: l, analyticsLocations: c } = i,
        {
            wishlistAndRecommendations: r,
            totalUnownedWishlistItemCount: o,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: I,
        } = (0, k.rg)({ userId: t.id, numItems: 12, source: A.B5.USER_PROFILE }),
        h = n.useMemo(
            () =>
                a()(
                    r.map((i) => {
                        let e = null != d[i.id] && d[i.id][t.id] === O.j.WISHLIST ? A.uS.WISHLIST : A.uS.POPULAR;
                        return null != i ? { sku: i, source: e } : null;
                    }),
                ),
            [r, t.id, d],
        );
    return (0, s.jsx)(J, {
        giftRecipient: t,
        onClose: e,
        nitroSection: l,
        analyticsLocations: c,
        displayItems: h,
        wishlistCount: o,
        defaultWishlistId: I,
        isWishlistLoaded: "loading" !== u,
    });
}
function z(i) {
    let {
            giftRecipient: t,
            onClose: e,
            transitionState: l,
            analyticsLocations: a,
            analyticsLocation: c,
            analyticsObject: r,
            giftMessage: o,
            giftingOrigin: d = P.vQ.DM_CHANNEL,
        } = i,
        u = (0, C.t4)((i) => i.checkoutPriceOptions),
        { claimableRewards: f } = (0, L.Pv)(),
        g = null != f && f.length > 0,
        m = n.useCallback(
            (i) => {
                (0, E.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: d,
                    subscriptionTier: i,
                    analyticsLocations: a ?? [],
                    analyticsLocation: c ?? D.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: r ?? {
                        page: null != t ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
                        section: D.JJy.CHANNEL_TEXT_AREA,
                        object: D.ZSU.BUTTON_ICON,
                        objectType: D.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: o,
                }),
                    e();
            },
            [t, d, a, c, r, o, e],
        ),
        _ = n.useRef(!1);
    n.useEffect(() => {
        _.current ||
            ((_.current = !0),
            y.default.track(D.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let S = (0, s.jsx)(V, { onSelectSku: m, priceOptions: u, showPromotionalGiftBanner: g });
    return (0, s.jsx)(I.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": B.intl.string(B.t["wg/30i"]),
        children: (0, s.jsxs)("div", {
            className: Q.jE,
            children: [
                (0, s.jsx)(h.rQ, { title: B.intl.string(B.t["wg/30i"]) }),
                null != t
                    ? (0, s.jsx)($, { giftRecipient: t, onClose: e, nitroSection: S, analyticsLocations: a })
                    : (0, s.jsx)(p.Ip, {
                          className: Q.XG,
                          children: (0, s.jsx)("div", {
                              className: `${Q.Qs} ${Q.GP}`,
                              children: (0, s.jsx)("div", { className: Q.XP, children: S }),
                          }),
                      }),
            ],
        }),
    });
}
function Y(i) {
    let {
        giftRecipient: t,
        onClose: e,
        transitionState: n,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: c,
        giftMessage: r,
        giftingOrigin: o = P.vQ.DM_CHANNEL,
    } = i;
    return (0, s.jsx)(x.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: P.T7,
        isGift: !0,
        children: (0, s.jsx)(L.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: o,
            children: (0, s.jsx)(z, {
                giftRecipient: t,
                onClose: e,
                transitionState: n,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: c,
                giftMessage: r,
                giftingOrigin: o,
            }),
        }),
    });
}
