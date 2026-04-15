t.d(i, { default: () => q });
var r = t(627968),
    a = t(64700),
    n = t(791282),
    o = t.n(n),
    s = t(835245),
    l = t(172218),
    c = t(158954),
    _ = t(311907),
    d = t(397927),
    u = t(444927),
    m = t(775602),
    p = t(793574),
    f = t(688810),
    h = t(937008),
    I = t(156312),
    C = t(532794),
    g = t(871123),
    x = t(177569),
    S = t(657331),
    T = t(299679),
    b = t(332772),
    k = t(594832),
    L = t(631784),
    w = t(872472),
    A = t(721932),
    j = t(310209),
    E = t(878244),
    N = t(734057),
    H = t(309010),
    v = t(954571),
    O = t(427262),
    G = t(501007),
    P = t(672525),
    M = t(788868),
    y = t(652215),
    R = t(518477),
    W = t(699976),
    B = t(985018),
    D = t(831096),
    F = t(829032);
function Q(e) {
    let { onSelectSku: i, priceOptions: t, showPromotionalGiftBanner: a } = e;
    return (0, r.jsxs)("div", {
        className: F.u6,
        children: [
            (0, r.jsx)(P.D3, {
                onClick: () => i(M.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: a,
                wumpusPosition: G.Rf.GIFT_SELECTION_MODAL,
                className: D.giftSelectionModalContext,
            }),
            (0, r.jsx)(P.Ls, {
                onClick: () => i(M.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0,
                className: D.giftSelectionModalContext,
            }),
        ],
    });
}
function U() {
    return (0, r.jsx)(r.Fragment, {
        children: Array.from({ length: 12 }, (e, i) => (0, r.jsx)(E.O, { spec: W.Z.SIZE_150 }, `placeholder-${i}`)),
    });
}
function Z(e) {
    let {
            displayItems: i,
            giftRecipient: t,
            defaultWishlistId: n,
            onSeeWishlistClick: o,
            onWishlistItemClick: s,
            totalUnownedWishlistItems: l,
            analyticsLocations: c,
        } = e,
        u = a.useMemo(
            () =>
                new Set(
                    i.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [i],
        ),
        m = (0, _.bG)([H.A, N.A], () => N.A.getChannel(H.A.getChannelId())),
        p = l > i.length ? l - i.length + 1 : void 0,
        f = a.useCallback(() => {
            s?.(), (0, d.s7G)();
        }, [s]);
    return (
        (0, b.T)({ location: "gift_selection_modal_wishlist_section" }),
        (0, r.jsx)(r.Fragment, {
            children: i.map((e, a) => {
                let { item: s, source: l } = e;
                return (
                    null != s.sku &&
                    (0, r.jsx)(
                        T.dB,
                        {
                            newValue: {
                                positionInSection: a,
                                skuId: s.skuId,
                                itemSource: l === k.uS.WISHLIST ? "organic" : "recommendation",
                                productLine: s.skuProductLine,
                            },
                            children: (0, r.jsx)(E.A, {
                                numMoreItems: a === i.length - 1 ? p : void 0,
                                sku: s.sku,
                                wishlistId: n,
                                source: l,
                                wishlistOwner: t,
                                hasMultipleSources: u.size > 1,
                                onOpenWishlist: o,
                                onClick: f,
                                analyticsLocations: c,
                                spec: W.Z.SIZE_150,
                                guildId: m?.guild_id,
                                channelId: m?.id,
                            }),
                        },
                        s.skuId,
                    )
                );
            }),
        })
    );
}
function K(e) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: t,
            onWishlistItemClick: n,
            displayItems: o,
            defaultWishlistId: _,
            isLoading: d,
            totalUnownedWishlistItems: m,
            analyticsLocations: h,
        } = e,
        I = (0, O.tx)(i),
        C =
            0 === m
                ? B.intl.string(B.t.BCi1gT)
                : m >= 12
                  ? B.intl.formatToPlainString(B.t.Y2RFOQ, { username: I })
                  : B.intl.formatToPlainString(B.t.dIDKgi, { username: I }),
        { analyticsLocations: S } = (0, f.Ay)(...(h ?? []), p.A.GIFT_SELECTION_MODAL_WISHLIST),
        b = (0, u.A)(() => (0, s.A)()),
        [k, L] = a.useState(!1),
        w = a.useCallback(
            (e) => {
                e &&
                    !d &&
                    o.length > 0 &&
                    (v.default.track(y.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: o.map((e) => {
                            let { item: i } = e;
                            return i.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                o.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: S,
                    }),
                    L(!0));
            },
            [d, o, i.id, S],
        ),
        A = (0, l.K)(w, void 0, !d && !k),
        j = a.useMemo(
            () =>
                o.some((e) => {
                    let { item: i } = e;
                    return (0, g.bF)(i.sku);
                }),
            [o],
        );
    return (0, r.jsxs)("div", {
        ref: A,
        className: F.jf,
        children: [
            (0, r.jsx)("div", {
                className: F.nM,
                children: (0, r.jsx)(c.DZT, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: F.Uf,
                    children: C,
                }),
            }),
            j && (0, r.jsx)(x.A, { location: "gift_selection_modal_wishlist" }),
            (0, r.jsx)("div", {
                className: F.KN,
                children: d
                    ? (0, r.jsx)(U, {})
                    : (0, r.jsx)(T.dB, {
                          newValue: {
                              impressionSessionId: b,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: i.id,
                              wishlistId: _,
                              analyticsLocations: S,
                          },
                          children: (0, r.jsx)(Z, {
                              displayItems: o,
                              giftRecipient: i,
                              defaultWishlistId: _,
                              onSeeWishlistClick: t,
                              onWishlistItemClick: n,
                              totalUnownedWishlistItems: m,
                              analyticsLocations: S,
                          }),
                      }),
            }),
        ],
    });
}
function V(e) {
    let {
            giftRecipient: i,
            onClose: t,
            nitroSection: n,
            analyticsLocations: o,
            displayItems: s,
            wishlistCount: l,
            defaultWishlistId: u,
            isWishlistLoaded: p,
        } = e,
        f = (0, k.tA)({ isGift: !0, giftRecipient: i }),
        h = (p ? l : 0) > 0 ? B.intl.string(B.t["7lZ31J"]) : B.intl.string(B.t.BCi1gT),
        [I, C] = a.useState("Nitro"),
        g = a.useRef(null),
        x = a.useRef(null),
        T = (0, _.bG)([m.A], () => m.A.useReducedMotion),
        b = a.useRef(!1),
        L = a.useCallback(
            (e) => {
                C(e), (b.current = !0);
                let t = g.current;
                null != t &&
                    t.addEventListener(
                        "scrollend",
                        () => {
                            b.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === e
                        ? t?.scrollTo({ top: 0, behavior: T ? "auto" : "smooth" })
                        : x.current?.scrollIntoView({ behavior: T ? "auto" : "smooth", block: "start" }),
                    v.default.track(y.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: i.id,
                        tab_name: e,
                        location_stack: o,
                    });
            },
            [i.id, o, T],
        ),
        w = a.useCallback(() => {
            v.default.track(y.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: i.id,
                wishlist_item_count: l,
                location_stack: o,
            }),
                t(),
                (0, S.openUserProfileModal)({ userId: i.id, tabSection: R.RP.WISHLIST });
        }, [i.id, l, o, t]);
    return (
        a.useEffect(() => {
            let e = x.current,
                i = g.current;
            if (null == e || null == i) return;
            let t = new IntersectionObserver(
                (e) => {
                    let [i] = e;
                    b.current || C(i.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: i, threshold: 0.5 },
            );
            return t.observe(e), () => t.disconnect();
        }, [f]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                f &&
                    (0, r.jsx)("div", {
                        className: F.CE,
                        children: (0, r.jsxs)(c.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: I,
                            onItemSelect: L,
                            children: [
                                (0, r.jsx)(c.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": B.intl.string(B.t.Ipxkog),
                                    children: B.intl.string(B.t.Ipxkog),
                                }),
                                (0, r.jsx)(c.VQ0.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, r.jsx)(d.HOs, {
                    ref: g,
                    className: F.XG,
                    children: (0, r.jsxs)("div", {
                        className: F.Qs,
                        children: [
                            (0, r.jsx)("div", { className: F.XP, children: n }),
                            f &&
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: F.XP,
                                    children: (0, r.jsx)(K, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: w,
                                        onWishlistItemClick: t,
                                        displayItems: s,
                                        defaultWishlistId: u,
                                        analyticsLocations: o,
                                        isLoading: !p,
                                        totalUnownedWishlistItems: l,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function X(e) {
    let { giftRecipient: i, onClose: t, nitroSection: n, analyticsLocations: s } = e,
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: _,
            status: d,
            defaultWishlistId: u,
        } = (0, L.rg)({ userId: i.id, numItems: 12, source: k.B5.USER_PROFILE }),
        m = a.useMemo(
            () =>
                o()(
                    l.map((e) => {
                        let t = e.productLine === y.EZt.COLLECTIBLES ? w.A.fromSKU(e) : A.A.fromSKU(e),
                            r = null != _[e.id] && _[e.id][i.id] === j.j.WISHLIST ? k.uS.WISHLIST : k.uS.POPULAR;
                        return null != t ? { item: t, source: r } : null;
                    }),
                ),
            [l, i.id, _],
        );
    return (0, r.jsx)(V, {
        giftRecipient: i,
        onClose: t,
        nitroSection: n,
        analyticsLocations: s,
        displayItems: m,
        wishlistCount: c,
        defaultWishlistId: u,
        isWishlistLoaded: "loading" !== d,
    });
}
function J(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: n,
            analyticsLocations: o,
            analyticsLocation: s,
            analyticsObject: l,
            giftMessage: _,
            giftingOrigin: u = M.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: m } = (0, I.P5)(),
        { claimableRewards: p } = (0, h.Pv)(),
        f = null != p && p.length > 0,
        g = a.useCallback(
            (e) => {
                (0, C.A)({
                    isGift: !0,
                    giftRecipient: i,
                    giftingOrigin: u,
                    subscriptionTier: e,
                    analyticsLocations: o ?? [],
                    analyticsLocation: s ?? y.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: l ?? {
                        page: null != i ? y.liQ.DM_CHANNEL : y.liQ.GUILD_CHANNEL,
                        section: y.JJy.CHANNEL_TEXT_AREA,
                        object: y.ZSU.BUTTON_ICON,
                        objectType: y.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: _,
                }),
                    t();
            },
            [i, u, o, s, l, _, t],
        ),
        x = a.useRef(!1);
    a.useEffect(() => {
        x.current ||
            ((x.current = !0),
            v.default.track(y.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: i?.id, location_stack: o }));
    }, [i, o]);
    let S = (0, r.jsx)(Q, { onSelectSku: g, priceOptions: m, showPromotionalGiftBanner: f });
    return (0, r.jsx)(c.dWK, {
        transitionState: n,
        size: "lg",
        onClose: t,
        "aria-label": B.intl.string(B.t["wg/30i"]),
        children: (0, r.jsxs)("div", {
            className: F.jE,
            children: [
                (0, r.jsx)(c.rQ0, { title: B.intl.string(B.t["wg/30i"]) }),
                null != i
                    ? (0, r.jsx)(X, { giftRecipient: i, onClose: t, nitroSection: S, analyticsLocations: o })
                    : (0, r.jsx)(d.HOs, {
                          className: F.XG,
                          children: (0, r.jsx)("div", {
                              className: `${F.Qs} ${F.GP}`,
                              children: (0, r.jsx)("div", { className: F.XP, children: S }),
                          }),
                      }),
            ],
        }),
    });
}
function q(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: a,
        analyticsLocations: n,
        analyticsLocation: o,
        analyticsObject: s,
        giftMessage: l,
        giftingOrigin: c = M.vQ.DM_CHANNEL,
    } = e;
    return (0, r.jsx)(I.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: M.T7,
        isGift: !0,
        children: (0, r.jsx)(h.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c,
            children: (0, r.jsx)(J, {
                giftRecipient: i,
                onClose: t,
                transitionState: a,
                analyticsLocations: n,
                analyticsLocation: o,
                analyticsObject: s,
                giftMessage: l,
                giftingOrigin: c,
            }),
        }),
    });
}
