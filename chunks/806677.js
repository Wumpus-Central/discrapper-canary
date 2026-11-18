var n = t(477900),
    s = t(582128),
    l = t(588234),
    a = t.n(l),
    o = t(115560),
    c = t(172218),
    r = t(70283),
    d = t(855986),
    u = t(331322),
    I = t(192308),
    h = t(534514),
    f = t(761508),
    g = t(95362),
    m = t(224640),
    p = t(20742),
    S = t(444927),
    _ = t(775602),
    x = t(793574),
    T = t(688810),
    N = t(982240),
    j = t(199453),
    C = t(3900),
    L = t(418200),
    E = t(778705),
    A = t(100663),
    k = t(299679),
    O = t(820847),
    y = t(698253),
    b = t(634110),
    G = t(802494),
    v = t(310209),
    w = t(73138),
    R = t(734057),
    W = t(309010),
    M = t(129230),
    P = t(427262),
    D = t(110862),
    H = t(267499),
    F = t(45052),
    B = t(163074),
    U = t(742655),
    Q = t(492275),
    V = t(682901),
    X = t(652215),
    Z = t(518477),
    $ = t(699976),
    K = t(792996),
    z = t(174788),
    J = t(211975);
function Y(i) {
    let { onSelectSku: e, priceOptions: t, showPromotionalGiftBanner: s } = i;
    return (0, n.jsx)(u.B, {
        direction: "vertical",
        gap: 16,
        children: (0, n.jsxs)("div", {
            className: J.u6,
            children: [
                (0, n.jsx)(D.D3, {
                    onClick: () => e(V.pe.TIER_2),
                    isGift: !0,
                    priceOptions: t,
                    showPromotionalGiftBanner: s,
                    wumpusPosition: H.Rf.GIFT_SELECTION_MODAL,
                    className: z.giftSelectionModalContext,
                }),
                (0, n.jsx)(D.Ls, {
                    onClick: () => e(V.pe.TIER_0),
                    isGift: !0,
                    priceOptions: t,
                    className: z.giftSelectionModalContext,
                }),
            ],
        }),
    });
}
function q(i) {
    let { analyticsLocations: e } = i,
        { nextTier: t, giftsToNextTier: s } = (0, d.cf)([N.Ay], () => ({
            nextTier: N.Ay.getNextTier(r.$.GIFTING),
            giftsToNextTier: N.Ay.getRemainingToNextTier(r.$.GIFTING),
        }));
    return null == t
        ? null
        : (0, n.jsx)(Q.A, {
              giftsToNextTier: s,
              nextTierName: t.name ?? "",
              nextTierIcon: (0, F.Se)(t),
              analyticsLocations: e,
          });
}
function ii() {
    return (0, n.jsx)(n.Fragment, {
        children: Array.from({ length: 12 }, (i, e) => (0, n.jsx)(w.O, { spec: $.Z.SIZE_150 }, `placeholder-${e}`)),
    });
}
function ie(i) {
    let {
            displayItems: e,
            giftRecipient: t,
            defaultWishlistId: l,
            onSeeWishlistClick: a,
            onWishlistItemClick: o,
            totalUnownedWishlistItems: c,
            analyticsLocations: r,
        } = i,
        u = s.useMemo(
            () =>
                new Set(
                    e.map((i) => {
                        let { source: e } = i;
                        return e;
                    }),
                ),
            [e],
        ),
        h = (0, d.bG)([W.Ay, R.A], () => R.A.getChannel(W.Ay.getChannelId())),
        f = c > e.length ? c - e.length + 1 : void 0,
        g = s.useCallback(() => {
            (o?.(), (0, I.s7)());
        }, [o]);
    return (0, n.jsx)(n.Fragment, {
        children: e.map((i, s) => {
            let { sku: o, source: c } = i;
            return (
                null != o &&
                (0, n.jsx)(
                    k.dB,
                    {
                        newValue: {
                            positionInSection: s,
                            skuId: o.id,
                            itemSource: c === b.uS.WISHLIST ? "organic" : "recommendation",
                            productLine: o.productLine,
                        },
                        children: (0, n.jsx)(w.A, {
                            numMoreItems: s === e.length - 1 ? f : void 0,
                            sku: o,
                            wishlistId: l,
                            source: c,
                            wishlistOwner: t,
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
function it(i) {
    let {
            giftRecipient: e,
            onSeeWishlistClick: t,
            onWishlistItemClick: l,
            displayItems: a,
            defaultWishlistId: r,
            isLoading: d,
            totalUnownedWishlistItems: u,
            analyticsLocations: I,
        } = i,
        f = (0, P.tx)(e),
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
                    (M.default.track(X.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: e.id,
                        sku_ids: a.map((i) => {
                            let { sku: e } = i;
                            return e.id;
                        }),
                        product_lines: Array.from(
                            new Set(
                                a.map((i) => {
                                    let { sku: e } = i;
                                    return e.productLine;
                                }),
                            ),
                        ),
                        location_stack: m,
                    }),
                    N(!0));
            },
            [d, a, e.id, m],
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
                              wishlistOwnerId: e.id,
                              wishlistId: r,
                              analyticsLocations: m,
                          },
                          children: (0, n.jsx)(ie, {
                              displayItems: a,
                              giftRecipient: e,
                              defaultWishlistId: r,
                              onSeeWishlistClick: t,
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
            giftRecipient: e,
            onClose: t,
            nitroSection: l,
            analyticsLocations: a,
            displayItems: o,
            wishlistCount: c,
            defaultWishlistId: r,
            isWishlistLoaded: u,
        } = i,
        I = (0, b.tA)({ isGift: !0, giftRecipient: e }),
        h = (u ? c : 0) > 0 ? K.intl.string(K.t["7lZ31J"]) : K.intl.string(K.t.BCi1gT),
        [m, p] = s.useState("Nitro"),
        S = s.useRef(null),
        x = s.useRef(null),
        T = (0, d.bG)([_.Ay], () => _.Ay.useReducedMotion),
        N = s.useRef(!1),
        j = s.useCallback(
            (i) => {
                (p(i), (N.current = !0));
                let t = S.current;
                (null != t &&
                    t.addEventListener(
                        "scrollend",
                        () => {
                            N.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === i
                        ? t?.scrollTo({ top: 0, behavior: T ? "auto" : "smooth" })
                        : x.current?.scrollIntoView({ behavior: T ? "auto" : "smooth", block: "start" }),
                    M.default.track(X.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: e.id,
                        tab_name: i,
                        location_stack: a,
                    }));
            },
            [e.id, a, T],
        ),
        C = s.useCallback(() => {
            (M.default.track(X.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: e.id,
                wishlist_item_count: c,
                location_stack: a,
            }),
                t(),
                (0, A.openUserProfileModal)({ userId: e.id, tabSection: Z.RP.WISHLIST }));
        }, [e.id, c, a, t]);
    return (
        s.useEffect(() => {
            let i = x.current,
                e = S.current;
            if (null == i || null == e) return;
            let t = new IntersectionObserver(
                (i) => {
                    let [e] = i;
                    N.current || p(e.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: e, threshold: 0.5 },
            );
            return (t.observe(i), () => t.disconnect());
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
                                    children: (0, n.jsx)(y.P, {
                                        isGifting: !0,
                                        children: (0, n.jsx)(it, {
                                            giftRecipient: e,
                                            onSeeWishlistClick: C,
                                            onWishlistItemClick: t,
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
    let { giftRecipient: e, onClose: t, nitroSection: l, analyticsLocations: o } = i,
        {
            wishlistAndRecommendations: c,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: I,
        } = (0, G.rg)({ userId: e.id, numItems: 12, source: O.B.USER_PROFILE }),
        h = s.useMemo(
            () =>
                a()(
                    c.map((i) => {
                        let t = null != d[i.id] && d[i.id][e.id] === v.j.WISHLIST ? b.uS.WISHLIST : b.uS.POPULAR;
                        return null != i ? { sku: i, source: t } : null;
                    }),
                ),
            [c, e.id, d],
        );
    return (0, n.jsx)(is, {
        giftRecipient: e,
        onClose: t,
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
            giftRecipient: e,
            onClose: t,
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
                i && t();
            },
            [t],
        ),
        S = s.useCallback(
            (i) => {
                let { enabled: n } = B.A.getConfig({ location: "GiftSelectionModal" }, { autoTrackExposure: !1 }),
                    s = n && (0, U.MW)({ isGift: !0, giftRecipient: e, selectedPlanId: V.zE[i] });
                ((0, E.A)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: d,
                    subscriptionTier: i,
                    analyticsLocations: a ?? [],
                    analyticsLocation: o ?? X.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: c ?? {
                        page: null != e ? X.liQ.DM_CHANNEL : X.liQ.GUILD_CHANNEL,
                        section: X.JJy.CHANNEL_TEXT_AREA,
                        object: X.ZSU.BUTTON_ICON,
                        objectType: X.btD.GIFT,
                    },
                    giftMessage: r,
                    onClose: s ? f : void 0,
                    hasPreviousStepOutsideCheckout: s,
                }),
                    s || t());
            },
            [e, d, a, o, c, r, t, f],
        ),
        _ = s.useRef(!1);
    s.useEffect(() => {
        _.current ||
            ((_.current = !0),
            M.default.track(X.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: e?.id, location_stack: a }));
    }, [e, a]);
    let x = (0, n.jsx)(Y, { onSelectSku: S, priceOptions: u, showPromotionalGiftBanner: h });
    return (0, n.jsx)(m.d, {
        transitionState: l,
        size: "lg",
        onClose: t,
        "aria-label": K.intl.string(K.t["wg/30i"]),
        children: (0, n.jsxs)("div", {
            className: J.jE,
            children: [
                (0, n.jsx)(p.rQ, { title: K.intl.string(K.t["wg/30i"]) }),
                null != e
                    ? (0, n.jsx)(il, { giftRecipient: e, onClose: t, nitroSection: x, analyticsLocations: a })
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
t.d(
    e,
    {},
    {
        default: function (i) {
            let {
                giftRecipient: e,
                onClose: t,
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
                    giftRecipient: e,
                    giftingOrigin: r,
                    children: (0, n.jsx)(ia, {
                        giftRecipient: e,
                        onClose: t,
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
