e.d(i, { default: () => tt });
var s = e(627968),
    n = e(64700),
    l = e(791282),
    a = e.n(l),
    o = e(835245),
    r = e(172218),
    c = e(534514),
    d = e(761508),
    u = e(224640),
    _ = e(20742),
    I = e(311907),
    h = e(192308),
    m = e(573613),
    f = e(444927),
    g = e(775602),
    p = e(793574),
    S = e(688810),
    C = e(937008),
    j = e(156312),
    x = e(532794),
    E = e(871123),
    L = e(177569),
    N = e(657331),
    T = e(299679),
    k = e(332772),
    A = e(594832),
    w = e(631784),
    O = e(872472),
    b = e(721932),
    v = e(310209),
    y = e(878244),
    G = e(734057),
    P = e(309010),
    M = e(954571),
    R = e(427262),
    W = e(501007),
    D = e(672525),
    H = e(788868),
    F = e(652215),
    U = e(518477),
    B = e(699976),
    Q = e(985018),
    X = e(666952),
    Z = e(935147);
function K(t) {
    let { onSelectSku: i, priceOptions: e, showPromotionalGiftBanner: n } = t;
    return (0, s.jsxs)("div", {
        className: Z.u6,
        children: [
            (0, s.jsx)(D.D3, {
                onClick: () => i(H.pe.TIER_2),
                isGift: !0,
                priceOptions: e,
                showPromotionalGiftBanner: n,
                wumpusPosition: W.Rf.GIFT_SELECTION_MODAL,
                className: X.giftSelectionModalContext,
            }),
            (0, s.jsx)(D.Ls, {
                onClick: () => i(H.pe.TIER_0),
                isGift: !0,
                priceOptions: e,
                removeTopMargin: !0,
                className: X.giftSelectionModalContext,
            }),
        ],
    });
}
function V() {
    return (0, s.jsx)(s.Fragment, {
        children: Array.from({ length: 12 }, (t, i) => (0, s.jsx)(y.O, { spec: B.Z.SIZE_150 }, `placeholder-${i}`)),
    });
}
function J(t) {
    let {
            displayItems: i,
            giftRecipient: e,
            defaultWishlistId: l,
            onSeeWishlistClick: a,
            onWishlistItemClick: o,
            totalUnownedWishlistItems: r,
            analyticsLocations: c,
        } = t,
        d = n.useMemo(
            () =>
                new Set(
                    i.map((t) => {
                        let { source: i } = t;
                        return i;
                    }),
                ),
            [i],
        ),
        u = (0, I.bG)([P.A, G.A], () => G.A.getChannel(P.A.getChannelId())),
        _ = r > i.length ? r - i.length + 1 : void 0,
        m = n.useCallback(() => {
            o?.(), (0, h.closeAllModals)();
        }, [o]);
    return (
        (0, k.T)({ location: "gift_selection_modal_wishlist_section" }),
        (0, s.jsx)(s.Fragment, {
            children: i.map((t, n) => {
                let { item: o, source: r } = t;
                return (
                    null != o.sku &&
                    (0, s.jsx)(
                        T.dB,
                        {
                            newValue: {
                                positionInSection: n,
                                skuId: o.skuId,
                                itemSource: r === A.uS.WISHLIST ? "organic" : "recommendation",
                                productLine: o.skuProductLine,
                            },
                            children: (0, s.jsx)(y.A, {
                                numMoreItems: n === i.length - 1 ? _ : void 0,
                                sku: o.sku,
                                wishlistId: l,
                                source: r,
                                wishlistOwner: e,
                                hasMultipleSources: d.size > 1,
                                onOpenWishlist: a,
                                onClick: m,
                                analyticsLocations: c,
                                spec: B.Z.SIZE_150,
                                guildId: u?.guild_id,
                                channelId: u?.id,
                            }),
                        },
                        o.skuId,
                    )
                );
            }),
        })
    );
}
function $(t) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: e,
            onWishlistItemClick: l,
            displayItems: a,
            defaultWishlistId: d,
            isLoading: u,
            totalUnownedWishlistItems: _,
            analyticsLocations: I,
        } = t,
        h = (0, R.tx)(i),
        m =
            0 === _
                ? Q.intl.string(Q.t.BCi1gT)
                : _ >= 12
                  ? Q.intl.formatToPlainString(Q.t.Y2RFOQ, { username: h })
                  : Q.intl.formatToPlainString(Q.t.dIDKgi, { username: h }),
        { analyticsLocations: g } = (0, S.Ay)(...(I ?? []), p.A.GIFT_SELECTION_MODAL_WISHLIST),
        C = (0, f.A)(() => (0, o.A)()),
        [j, x] = n.useState(!1),
        N = n.useCallback(
            (t) => {
                t &&
                    !u &&
                    a.length > 0 &&
                    (M.default.track(F.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: a.map((t) => {
                            let { item: i } = t;
                            return i.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                a.map((t) => {
                                    let { item: i } = t;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: g,
                    }),
                    x(!0));
            },
            [u, a, i.id, g],
        ),
        k = (0, r.K)(N, void 0, !u && !j),
        A = n.useMemo(
            () =>
                a.some((t) => {
                    let { item: i } = t;
                    return (0, E.bF)(i.sku);
                }),
            [a],
        );
    return (0, s.jsxs)("div", {
        ref: k,
        className: Z.jf,
        children: [
            (0, s.jsx)("div", {
                className: Z.nM,
                children: (0, s.jsx)(c.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: Z.Uf,
                    children: m,
                }),
            }),
            A && (0, s.jsx)(L.A, { location: "gift_selection_modal_wishlist" }),
            (0, s.jsx)("div", {
                className: Z.KN,
                children: u
                    ? (0, s.jsx)(V, {})
                    : (0, s.jsx)(T.dB, {
                          newValue: {
                              impressionSessionId: C,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: i.id,
                              wishlistId: d,
                              analyticsLocations: g,
                          },
                          children: (0, s.jsx)(J, {
                              displayItems: a,
                              giftRecipient: i,
                              defaultWishlistId: d,
                              onSeeWishlistClick: e,
                              onWishlistItemClick: l,
                              totalUnownedWishlistItems: _,
                              analyticsLocations: g,
                          }),
                      }),
            }),
        ],
    });
}
function z(t) {
    let {
            giftRecipient: i,
            onClose: e,
            nitroSection: l,
            analyticsLocations: a,
            displayItems: o,
            wishlistCount: r,
            defaultWishlistId: c,
            isWishlistLoaded: u,
        } = t,
        _ = (0, A.tA)({ isGift: !0, giftRecipient: i }),
        h = (u ? r : 0) > 0 ? Q.intl.string(Q.t["7lZ31J"]) : Q.intl.string(Q.t.BCi1gT),
        [f, p] = n.useState("Nitro"),
        S = n.useRef(null),
        C = n.useRef(null),
        j = (0, I.bG)([g.A], () => g.A.useReducedMotion),
        x = n.useRef(!1),
        E = n.useCallback(
            (t) => {
                p(t), (x.current = !0);
                let e = S.current;
                null != e &&
                    e.addEventListener(
                        "scrollend",
                        () => {
                            x.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === t
                        ? e?.scrollTo({ top: 0, behavior: j ? "auto" : "smooth" })
                        : C.current?.scrollIntoView({ behavior: j ? "auto" : "smooth", block: "start" }),
                    M.default.track(F.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: i.id,
                        tab_name: t,
                        location_stack: a,
                    });
            },
            [i.id, a, j],
        ),
        L = n.useCallback(() => {
            M.default.track(F.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: i.id,
                wishlist_item_count: r,
                location_stack: a,
            }),
                e(),
                (0, N.openUserProfileModal)({ userId: i.id, tabSection: U.RP.WISHLIST });
        }, [i.id, r, a, e]);
    return (
        n.useEffect(() => {
            let t = C.current,
                i = S.current;
            if (null == t || null == i) return;
            let e = new IntersectionObserver(
                (t) => {
                    let [i] = t;
                    x.current || p(i.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: i, threshold: 0.5 },
            );
            return e.observe(t), () => e.disconnect();
        }, [_]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                _ &&
                    (0, s.jsx)("div", {
                        className: Z.CE,
                        children: (0, s.jsxs)(d.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: f,
                            onItemSelect: E,
                            children: [
                                (0, s.jsx)(d.V.Item, {
                                    id: "Nitro",
                                    "aria-label": Q.intl.string(Q.t.Ipxkog),
                                    children: Q.intl.string(Q.t.Ipxkog),
                                }),
                                (0, s.jsx)(d.V.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, s.jsx)(m.Ip, {
                    ref: S,
                    className: Z.XG,
                    children: (0, s.jsxs)("div", {
                        className: Z.Qs,
                        children: [
                            (0, s.jsx)("div", { className: Z.XP, children: l }),
                            _ &&
                                (0, s.jsx)("div", {
                                    ref: C,
                                    className: Z.XP,
                                    children: (0, s.jsx)($, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: L,
                                        onWishlistItemClick: e,
                                        displayItems: o,
                                        defaultWishlistId: c,
                                        analyticsLocations: a,
                                        isLoading: !u,
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
function Y(t) {
    let { giftRecipient: i, onClose: e, nitroSection: l, analyticsLocations: o } = t,
        {
            wishlistAndRecommendations: r,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: _,
        } = (0, w.rg)({ userId: i.id, numItems: 12, source: A.B5.USER_PROFILE }),
        I = n.useMemo(
            () =>
                a()(
                    r.map((t) => {
                        let e = t.productLine === F.EZt.COLLECTIBLES ? O.A.fromSKU(t) : b.A.fromSKU(t),
                            s = null != d[t.id] && d[t.id][i.id] === v.j.WISHLIST ? A.uS.WISHLIST : A.uS.POPULAR;
                        return null != e ? { item: e, source: s } : null;
                    }),
                ),
            [r, i.id, d],
        );
    return (0, s.jsx)(z, {
        giftRecipient: i,
        onClose: e,
        nitroSection: l,
        analyticsLocations: o,
        displayItems: I,
        wishlistCount: c,
        defaultWishlistId: _,
        isWishlistLoaded: "loading" !== u,
    });
}
function q(t) {
    let {
            giftRecipient: i,
            onClose: e,
            transitionState: l,
            analyticsLocations: a,
            analyticsLocation: o,
            analyticsObject: r,
            giftMessage: c,
            giftingOrigin: d = H.vQ.DM_CHANNEL,
        } = t,
        { priceOptions: I } = (0, j.P5)(),
        { claimableRewards: h } = (0, C.Pv)(),
        f = null != h && h.length > 0,
        g = n.useCallback(
            (t) => {
                (0, x.A)({
                    isGift: !0,
                    giftRecipient: i,
                    giftingOrigin: d,
                    subscriptionTier: t,
                    analyticsLocations: a ?? [],
                    analyticsLocation: o ?? F.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: r ?? {
                        page: null != i ? F.liQ.DM_CHANNEL : F.liQ.GUILD_CHANNEL,
                        section: F.JJy.CHANNEL_TEXT_AREA,
                        object: F.ZSU.BUTTON_ICON,
                        objectType: F.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: c,
                }),
                    e();
            },
            [i, d, a, o, r, c, e],
        ),
        p = n.useRef(!1);
    n.useEffect(() => {
        p.current ||
            ((p.current = !0),
            M.default.track(F.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: i?.id, location_stack: a }));
    }, [i, a]);
    let S = (0, s.jsx)(K, { onSelectSku: g, priceOptions: I, showPromotionalGiftBanner: f });
    return (0, s.jsx)(u.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": Q.intl.string(Q.t["wg/30i"]),
        children: (0, s.jsxs)("div", {
            className: Z.jE,
            children: [
                (0, s.jsx)(_.rQ, { title: Q.intl.string(Q.t["wg/30i"]) }),
                null != i
                    ? (0, s.jsx)(Y, { giftRecipient: i, onClose: e, nitroSection: S, analyticsLocations: a })
                    : (0, s.jsx)(m.Ip, {
                          className: Z.XG,
                          children: (0, s.jsx)("div", {
                              className: `${Z.Qs} ${Z.GP}`,
                              children: (0, s.jsx)("div", { className: Z.XP, children: S }),
                          }),
                      }),
            ],
        }),
    });
}
function tt(t) {
    let {
        giftRecipient: i,
        onClose: e,
        transitionState: n,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: o,
        giftMessage: r,
        giftingOrigin: c = H.vQ.DM_CHANNEL,
    } = t;
    return (0, s.jsx)(j.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: H.T7,
        isGift: !0,
        children: (0, s.jsx)(C.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c,
            children: (0, s.jsx)(q, {
                giftRecipient: i,
                onClose: e,
                transitionState: n,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: o,
                giftMessage: r,
                giftingOrigin: c,
            }),
        }),
    });
}
