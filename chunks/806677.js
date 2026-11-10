var n = e(477900),
    s = e(582128),
    l = e(588234),
    a = e.n(l),
    o = e(115560),
    c = e(172218),
    r = e(70283),
    d = e(855986),
    u = e(331322),
    I = e(192308),
    h = e(534514),
    f = e(761508),
    g = e(95362),
    m = e(224640),
    p = e(20742),
    S = e(444927),
    _ = e(775602),
    x = e(793574),
    T = e(688810),
    N = e(982240),
    j = e(199453),
    C = e(316363),
    L = e(418200),
    E = e(778705),
    A = e(702476),
    k = e(299679),
    O = e(820847),
    y = e(666810),
    G = e(634110),
    b = e(802494),
    v = e(310209),
    w = e(73138),
    M = e(734057),
    R = e(309010),
    W = e(129230),
    P = e(427262),
    D = e(110862),
    F = e(267499),
    H = e(45052),
    B = e(163074),
    U = e(742655),
    Q = e(492275),
    V = e(682901),
    X = e(652215),
    Z = e(518477),
    $ = e(699976),
    K = e(792996),
    z = e(174788),
    J = e(211975);
function Y(i) {
    let { onSelectSku: t, priceOptions: e, showPromotionalGiftBanner: s } = i;
    return (0, n.jsx)(u.B, {
        direction: "vertical",
        gap: 16,
        children: (0, n.jsxs)("div", {
            className: J.u6,
            children: [
                (0, n.jsx)(D.D3, {
                    onClick: () => t(V.pe.TIER_2),
                    isGift: !0,
                    priceOptions: e,
                    showPromotionalGiftBanner: s,
                    wumpusPosition: F.Rf.GIFT_SELECTION_MODAL,
                    className: z.giftSelectionModalContext,
                }),
                (0, n.jsx)(D.Ls, {
                    onClick: () => t(V.pe.TIER_0),
                    isGift: !0,
                    priceOptions: e,
                    className: z.giftSelectionModalContext,
                }),
            ],
        }),
    });
}
function q(i) {
    let { analyticsLocations: t } = i,
        e = (0, H.F5)("GiftSelectionModal"),
        { nextTier: s, giftsToNextTier: l } = (0, d.cf)([N.Ay], () => ({
            nextTier: N.Ay.getNextTier(r.$.GIFTING),
            giftsToNextTier: N.Ay.getRemainingToNextTier(r.$.GIFTING),
        }));
    return e && null != s
        ? (0, n.jsx)(Q.A, {
              giftsToNextTier: l,
              nextTierName: s.name ?? "",
              nextTierIcon: (0, H.Se)(s),
              analyticsLocations: t,
          })
        : null;
}
function ii() {
    return (0, n.jsx)(n.Fragment, {
        children: Array.from({ length: 12 }, (i, t) => (0, n.jsx)(w.O, { spec: $.Z.SIZE_150 }, `placeholder-${t}`)),
    });
}
function it(i) {
    let {
            displayItems: t,
            giftRecipient: e,
            defaultWishlistId: l,
            onSeeWishlistClick: a,
            onWishlistItemClick: o,
            totalUnownedWishlistItems: c,
            analyticsLocations: r,
        } = i,
        u = s.useMemo(
            () =>
                new Set(
                    t.map((i) => {
                        let { source: t } = i;
                        return t;
                    }),
                ),
            [t],
        ),
        h = (0, d.bG)([R.Ay, M.A], () => M.A.getChannel(R.Ay.getChannelId())),
        f = c > t.length ? c - t.length + 1 : void 0,
        g = s.useCallback(() => {
            (o?.(), (0, I.s7)());
        }, [o]);
    return (0, n.jsx)(n.Fragment, {
        children: t.map((i, s) => {
            let { sku: o, source: c } = i;
            return (
                null != o &&
                (0, n.jsx)(
                    k.dB,
                    {
                        newValue: {
                            positionInSection: s,
                            skuId: o.id,
                            itemSource: c === G.uS.WISHLIST ? "organic" : "recommendation",
                            productLine: o.productLine,
                        },
                        children: (0, n.jsx)(w.A, {
                            numMoreItems: s === t.length - 1 ? f : void 0,
                            sku: o,
                            wishlistId: l,
                            source: c,
                            wishlistOwner: e,
                            hasMultipleSources: u.size > 1,
                            onOpenWishlist: a,
                            onClick: g,
                            analyticsLocations: r,
                            spec: $.Z.SIZE_150,
                            guildId: h?.guild_id,
                            channelId: h?.id,
                        }),
                    },
                    o.id,
                )
            );
        }),
    });
}
function ie(i) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: e,
            onWishlistItemClick: l,
            displayItems: a,
            defaultWishlistId: r,
            isLoading: d,
            totalUnownedWishlistItems: u,
            analyticsLocations: I,
        } = i,
        f = (0, P.tx)(t),
        g =
            0 === u
                ? K.intl.string(K.t.BCi1gT)
                : u >= 12
                  ? K.intl.formatToPlainString(K.t.Y2RFOQ, { username: f })
                  : K.intl.formatToPlainString(K.t.dIDKgi, { username: f }),
        { analyticsLocations: m } = (0, T.Ay)(...(I ?? []), x.A.GIFT_SELECTION_MODAL_WISHLIST),
        p = (0, S.A)(() => (0, o.A)()),
        [_, N] = s.useState(!1),
        j = s.useCallback(
            (i) => {
                i &&
                    !d &&
                    a.length > 0 &&
                    (W.default.track(X.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
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
                        location_stack: m,
                    }),
                    N(!0));
            },
            [d, a, t.id, m],
        ),
        C = (0, c.K)(j, void 0, !d && !_);
    return (0, n.jsxs)("div", {
        ref: C,
        className: J.jf,
        children: [
            (0, n.jsx)("div", {
                className: J.nM,
                children: (0, n.jsx)(h.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: J.Uf,
                    children: g,
                }),
            }),
            (0, n.jsx)("div", {
                className: J.KN,
                children: d
                    ? (0, n.jsx)(ii, {})
                    : (0, n.jsx)(k.dB, {
                          newValue: {
                              impressionSessionId: p,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: t.id,
                              wishlistId: r,
                              analyticsLocations: m,
                          },
                          children: (0, n.jsx)(it, {
                              displayItems: a,
                              giftRecipient: t,
                              defaultWishlistId: r,
                              onSeeWishlistClick: e,
                              onWishlistItemClick: l,
                              totalUnownedWishlistItems: u,
                              analyticsLocations: m,
                          }),
                      }),
            }),
        ],
    });
}
function is(i) {
    let {
            giftRecipient: t,
            onClose: e,
            nitroSection: l,
            analyticsLocations: a,
            displayItems: o,
            wishlistCount: c,
            defaultWishlistId: r,
            isWishlistLoaded: u,
        } = i,
        I = (0, G.tA)({ isGift: !0, giftRecipient: t }),
        h = (u ? c : 0) > 0 ? K.intl.string(K.t["7lZ31J"]) : K.intl.string(K.t.BCi1gT),
        [m, p] = s.useState("Nitro"),
        S = s.useRef(null),
        x = s.useRef(null),
        T = (0, d.bG)([_.Ay], () => _.Ay.useReducedMotion),
        N = s.useRef(!1),
        j = s.useCallback(
            (i) => {
                (p(i), (N.current = !0));
                let e = S.current;
                (null != e &&
                    e.addEventListener(
                        "scrollend",
                        () => {
                            N.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === i
                        ? e?.scrollTo({ top: 0, behavior: T ? "auto" : "smooth" })
                        : x.current?.scrollIntoView({ behavior: T ? "auto" : "smooth", block: "start" }),
                    W.default.track(X.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: i,
                        location_stack: a,
                    }));
            },
            [t.id, a, T],
        ),
        C = s.useCallback(() => {
            (W.default.track(X.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: c,
                location_stack: a,
            }),
                e(),
                (0, A.openUserProfileModal)({ userId: t.id, tabSection: Z.RP.WISHLIST }));
        }, [t.id, c, a, e]);
    return (
        s.useEffect(() => {
            let i = x.current,
                t = S.current;
            if (null == i || null == t) return;
            let e = new IntersectionObserver(
                (i) => {
                    let [t] = i;
                    N.current || p(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return (e.observe(i), () => e.disconnect());
        }, [I]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                I &&
                    (0, n.jsx)("div", {
                        className: J.CE,
                        children: (0, n.jsxs)(f.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: m,
                            onItemSelect: j,
                            children: [
                                (0, n.jsx)(f.V.Item, {
                                    id: "Nitro",
                                    "aria-label": K.intl.string(K.t.Ipxkog),
                                    children: K.intl.string(K.t.Ipxkog),
                                }),
                                (0, n.jsx)(f.V.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, n.jsx)(g.Ip, {
                    ref: S,
                    className: J.XG,
                    children: (0, n.jsxs)("div", {
                        className: J.Qs,
                        children: [
                            (0, n.jsx)("div", { className: J.XP, children: l }),
                            I &&
                                (0, n.jsx)("div", {
                                    ref: x,
                                    className: J.XP,
                                    children: (0, n.jsx)(y.h, {
                                        isGifting: !0,
                                        location: "GiftSelectionModal",
                                        children: (0, n.jsx)(ie, {
                                            giftRecipient: t,
                                            onSeeWishlistClick: C,
                                            onWishlistItemClick: e,
                                            displayItems: o,
                                            defaultWishlistId: r,
                                            analyticsLocations: a,
                                            isLoading: !u,
                                            totalUnownedWishlistItems: c,
                                        }),
                                    }),
                                }),
                            (0, n.jsx)(q, { analyticsLocations: a }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function il(i) {
    let { giftRecipient: t, onClose: e, nitroSection: l, analyticsLocations: o } = i,
        {
            wishlistAndRecommendations: c,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: I,
        } = (0, b.rg)({ userId: t.id, numItems: 12, source: O.B.USER_PROFILE }),
        h = s.useMemo(
            () =>
                a()(
                    c.map((i) => {
                        let e = null != d[i.id] && d[i.id][t.id] === v.j.WISHLIST ? G.uS.WISHLIST : G.uS.POPULAR;
                        return null != i ? { sku: i, source: e } : null;
                    }),
                ),
            [c, t.id, d],
        );
    return (0, n.jsx)(is, {
        giftRecipient: t,
        onClose: e,
        nitroSection: l,
        analyticsLocations: o,
        displayItems: h,
        wishlistCount: r,
        defaultWishlistId: I,
        isWishlistLoaded: "loading" !== u,
    });
}
function ia(i) {
    let {
            giftRecipient: t,
            onClose: e,
            transitionState: l,
            analyticsLocations: a,
            analyticsLocation: o,
            analyticsObject: c,
            giftMessage: r,
            giftingOrigin: d = V.vQ.DM_CHANNEL,
        } = i,
        u = (0, C.t4)((i) => i.checkoutPriceOptions),
        { claimableRewards: I } = (0, L.Pv)(),
        h = null != I && I.length > 0,
        f = s.useCallback(
            (i) => {
                i && e();
            },
            [e],
        ),
        S = s.useCallback(
            (i) => {
                let { enabled: n } = B.A.getConfig({ location: "GiftSelectionModal" }, { autoTrackExposure: !1 }),
                    s = n && (0, U.MW)({ isGift: !0, giftRecipient: t, selectedPlanId: V.zE[i] });
                ((0, E.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: d,
                    subscriptionTier: i,
                    analyticsLocations: a ?? [],
                    analyticsLocation: o ?? X.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: c ?? {
                        page: null != t ? X.liQ.DM_CHANNEL : X.liQ.GUILD_CHANNEL,
                        section: X.JJy.CHANNEL_TEXT_AREA,
                        object: X.ZSU.BUTTON_ICON,
                        objectType: X.btD.GIFT,
                    },
                    giftMessage: r,
                    onClose: s ? f : void 0,
                    hasPreviousStepOutsideCheckout: s,
                }),
                    s || e());
            },
            [t, d, a, o, c, r, e, f],
        ),
        _ = s.useRef(!1);
    s.useEffect(() => {
        _.current ||
            ((_.current = !0),
            W.default.track(X.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let x = (0, n.jsx)(Y, { onSelectSku: S, priceOptions: u, showPromotionalGiftBanner: h });
    return (0, n.jsx)(m.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": K.intl.string(K.t["wg/30i"]),
        children: (0, n.jsxs)("div", {
            className: J.jE,
            children: [
                (0, n.jsx)(p.rQ, { title: K.intl.string(K.t["wg/30i"]) }),
                null != t
                    ? (0, n.jsx)(il, { giftRecipient: t, onClose: e, nitroSection: x, analyticsLocations: a })
                    : (0, n.jsx)(g.Ip, {
                          className: J.XG,
                          children: (0, n.jsxs)("div", {
                              className: `${J.Qs} ${J.GP}`,
                              children: [
                                  (0, n.jsx)("div", { className: J.XP, children: x }),
                                  (0, n.jsx)(q, { analyticsLocations: a }),
                              ],
                          }),
                      }),
            ],
        }),
    });
}
e.d(
    t,
    {},
    {
        default: function (i) {
            let {
                giftRecipient: t,
                onClose: e,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: o,
                giftMessage: c,
                giftingOrigin: r = V.vQ.DM_CHANNEL,
            } = i;
            return (0, n.jsx)(j.M, {
                activeSubscription: null,
                stepConfigs: [],
                skuIDs: V.T7,
                isGift: !0,
                children: (0, n.jsx)(L.dX, {
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: r,
                    children: (0, n.jsx)(ia, {
                        giftRecipient: t,
                        onClose: e,
                        transitionState: s,
                        analyticsLocations: l,
                        analyticsLocation: a,
                        analyticsObject: o,
                        giftMessage: c,
                        giftingOrigin: r,
                    }),
                }),
            });
        },
    },
);
