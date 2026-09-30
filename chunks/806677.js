e.d(t, { default: () => is });
var n = e(477900),
    s = e(582128),
    l = e(588234),
    a = e.n(l),
    c = e(132500),
    o = e(172218),
    r = e(70283),
    d = e(17928),
    u = e(331322),
    I = e(192308),
    h = e(297264),
    f = e(761508),
    g = e(364522),
    m = e(224640),
    p = e(20742),
    S = e(444927),
    _ = e(775602),
    x = e(793574),
    T = e(688810),
    j = e(982240),
    N = e(952423),
    L = e(263532),
    C = e(951305),
    E = e(75678),
    A = e(402860),
    k = e(299679),
    y = e(666810),
    O = e(594832),
    G = e(862772),
    b = e(310209),
    w = e(719102),
    v = e(734057),
    M = e(309010),
    R = e(174459),
    W = e(427262),
    D = e(110862),
    P = e(735668),
    F = e(859492),
    H = e(492275),
    B = e(202541),
    U = e(652215),
    Q = e(518477),
    V = e(699976),
    X = e(375708),
    Z = e(174788),
    $ = e(211975);
function K(i) {
    let { onSelectSku: t, priceOptions: e, showPromotionalGiftBanner: s } = i;
    return (0, n.jsx)(u.B, {
        direction: "vertical",
        gap: 16,
        children: (0, n.jsxs)("div", {
            className: $.u6,
            children: [
                (0, n.jsx)(D.D3, {
                    onClick: () => t(B.pe.TIER_2),
                    isGift: !0,
                    priceOptions: e,
                    showPromotionalGiftBanner: s,
                    wumpusPosition: P.Rf.GIFT_SELECTION_MODAL,
                    className: Z.giftSelectionModalContext,
                }),
                (0, n.jsx)(D.Ls, {
                    onClick: () => t(B.pe.TIER_0),
                    isGift: !0,
                    priceOptions: e,
                    className: Z.giftSelectionModalContext,
                }),
            ],
        }),
    });
}
function J(i) {
    let { analyticsLocations: t } = i,
        e = (0, F.F5)("GiftSelectionModal"),
        { nextTier: s, giftsToNextTier: l } = (0, d.cf)([j.Ay], () => ({
            nextTier: j.Ay.getNextTier(r.$.GIFTING),
            giftsToNextTier: j.Ay.getRemainingToNextTier(r.$.GIFTING),
        })),
        a = e && null != s,
        c = (0, F.b9)(`GiftSelectionModal${a ? "" : "-DISABLED"}`);
    return a
        ? (0, n.jsx)(H.A, {
              giftsToNextTier: l,
              nextTierName: s.name ?? "",
              nextTierIcon: (0, F.Se)(s, c),
              analyticsLocations: t,
          })
        : null;
}
function z() {
    return (0, n.jsx)(n.Fragment, {
        children: Array.from({ length: 12 }, (i, t) => (0, n.jsx)(w.O, { spec: V.Z.SIZE_150 }, `placeholder-${t}`)),
    });
}
function Y(i) {
    let {
            displayItems: t,
            giftRecipient: e,
            defaultWishlistId: l,
            onSeeWishlistClick: a,
            onWishlistItemClick: c,
            totalUnownedWishlistItems: o,
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
        h = (0, d.bG)([M.Ay, v.A], () => v.A.getChannel(M.Ay.getChannelId())),
        f = o > t.length ? o - t.length + 1 : void 0,
        g = s.useCallback(() => {
            (c?.(), (0, I.closeAllModals)());
        }, [c]);
    return (0, n.jsx)(n.Fragment, {
        children: t.map((i, s) => {
            let { sku: c, source: o } = i;
            return (
                null != c &&
                (0, n.jsx)(
                    k.dB,
                    {
                        newValue: {
                            positionInSection: s,
                            skuId: c.id,
                            itemSource: o === O.uS.WISHLIST ? "organic" : "recommendation",
                            productLine: c.productLine,
                        },
                        children: (0, n.jsx)(w.A, {
                            numMoreItems: s === t.length - 1 ? f : void 0,
                            sku: c,
                            wishlistId: l,
                            source: o,
                            wishlistOwner: e,
                            hasMultipleSources: u.size > 1,
                            onOpenWishlist: a,
                            onClick: g,
                            analyticsLocations: r,
                            spec: V.Z.SIZE_150,
                            guildId: h?.guild_id,
                            channelId: h?.id,
                        }),
                    },
                    c.id,
                )
            );
        }),
    });
}
function q(i) {
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
        f = (0, W.tx)(t),
        g =
            0 === u
                ? X.intl.string(X.t.BCi1gT)
                : u >= 12
                  ? X.intl.formatToPlainString(X.t.Y2RFOQ, { username: f })
                  : X.intl.formatToPlainString(X.t.dIDKgi, { username: f }),
        { analyticsLocations: m } = (0, T.Ay)(...(I ?? []), x.A.GIFT_SELECTION_MODAL_WISHLIST),
        p = (0, S.A)(() => (0, c.A)()),
        [_, j] = s.useState(!1),
        N = s.useCallback(
            (i) => {
                i &&
                    !d &&
                    a.length > 0 &&
                    (R.default.track(U.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
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
                    j(!0));
            },
            [d, a, t.id, m],
        ),
        L = (0, o.K)(N, void 0, !d && !_);
    return (0, n.jsxs)("div", {
        ref: L,
        className: $.jf,
        children: [
            (0, n.jsx)("div", {
                className: $.nM,
                children: (0, n.jsx)(h.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: $.Uf,
                    children: g,
                }),
            }),
            (0, n.jsx)("div", {
                className: $.KN,
                children: d
                    ? (0, n.jsx)(z, {})
                    : (0, n.jsx)(k.dB, {
                          newValue: {
                              impressionSessionId: p,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: t.id,
                              wishlistId: r,
                              analyticsLocations: m,
                          },
                          children: (0, n.jsx)(Y, {
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
function ii(i) {
    let {
            giftRecipient: t,
            onClose: e,
            nitroSection: l,
            analyticsLocations: a,
            displayItems: c,
            wishlistCount: o,
            defaultWishlistId: r,
            isWishlistLoaded: u,
        } = i,
        I = (0, O.tA)({ isGift: !0, giftRecipient: t }),
        h = (u ? o : 0) > 0 ? X.intl.string(X.t["7lZ31J"]) : X.intl.string(X.t.BCi1gT),
        [m, p] = s.useState("Nitro"),
        S = s.useRef(null),
        x = s.useRef(null),
        T = (0, d.bG)([_.Ay], () => _.Ay.useReducedMotion),
        j = s.useRef(!1),
        N = s.useCallback(
            (i) => {
                (p(i), (j.current = !0));
                let e = S.current;
                (null != e &&
                    e.addEventListener(
                        "scrollend",
                        () => {
                            j.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === i
                        ? e?.scrollTo({ top: 0, behavior: T ? "auto" : "smooth" })
                        : x.current?.scrollIntoView({ behavior: T ? "auto" : "smooth", block: "start" }),
                    R.default.track(U.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: i,
                        location_stack: a,
                    }));
            },
            [t.id, a, T],
        ),
        L = s.useCallback(() => {
            (R.default.track(U.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: o,
                location_stack: a,
            }),
                e(),
                (0, A.openUserProfileModal)({ userId: t.id, tabSection: Q.RP.WISHLIST }));
        }, [t.id, o, a, e]);
    return (
        s.useEffect(() => {
            let i = x.current,
                t = S.current;
            if (null == i || null == t) return;
            let e = new IntersectionObserver(
                (i) => {
                    let [t] = i;
                    j.current || p(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return (e.observe(i), () => e.disconnect());
        }, [I]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                I &&
                    (0, n.jsx)("div", {
                        className: $.CE,
                        children: (0, n.jsxs)(f.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: m,
                            onItemSelect: N,
                            children: [
                                (0, n.jsx)(f.V.Item, {
                                    id: "Nitro",
                                    "aria-label": X.intl.string(X.t.Ipxkog),
                                    children: X.intl.string(X.t.Ipxkog),
                                }),
                                (0, n.jsx)(f.V.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, n.jsx)(g.Ip, {
                    ref: S,
                    className: $.XG,
                    children: (0, n.jsxs)("div", {
                        className: $.Qs,
                        children: [
                            (0, n.jsx)("div", { className: $.XP, children: l }),
                            I &&
                                (0, n.jsx)("div", {
                                    ref: x,
                                    className: $.XP,
                                    children: (0, n.jsx)(y.h, {
                                        isGifting: !0,
                                        location: "GiftSelectionModal",
                                        children: (0, n.jsx)(q, {
                                            giftRecipient: t,
                                            onSeeWishlistClick: L,
                                            onWishlistItemClick: e,
                                            displayItems: c,
                                            defaultWishlistId: r,
                                            analyticsLocations: a,
                                            isLoading: !u,
                                            totalUnownedWishlistItems: o,
                                        }),
                                    }),
                                }),
                            (0, n.jsx)(J, { analyticsLocations: a }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function it(i) {
    let { giftRecipient: t, onClose: e, nitroSection: l, analyticsLocations: c } = i,
        {
            wishlistAndRecommendations: o,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: d,
            status: u,
            defaultWishlistId: I,
        } = (0, G.rg)({ userId: t.id, numItems: 12, source: O.B5.USER_PROFILE }),
        h = s.useMemo(
            () =>
                a()(
                    o.map((i) => {
                        let e = null != d[i.id] && d[i.id][t.id] === b.j.WISHLIST ? O.uS.WISHLIST : O.uS.POPULAR;
                        return null != i ? { sku: i, source: e } : null;
                    }),
                ),
            [o, t.id, d],
        );
    return (0, n.jsx)(ii, {
        giftRecipient: t,
        onClose: e,
        nitroSection: l,
        analyticsLocations: c,
        displayItems: h,
        wishlistCount: r,
        defaultWishlistId: I,
        isWishlistLoaded: "loading" !== u,
    });
}
function ie(i) {
    let {
            giftRecipient: t,
            onClose: e,
            transitionState: l,
            analyticsLocations: a,
            analyticsLocation: c,
            analyticsObject: o,
            giftMessage: r,
            giftingOrigin: d = B.vQ.DM_CHANNEL,
        } = i,
        u = (0, L.t4)((i) => i.checkoutPriceOptions),
        { claimableRewards: I } = (0, C.Pv)(),
        h = null != I && I.length > 0,
        f = s.useCallback(
            (i) => {
                ((0, E.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: d,
                    subscriptionTier: i,
                    analyticsLocations: a ?? [],
                    analyticsLocation: c ?? U.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: o ?? {
                        page: null != t ? U.liQ.DM_CHANNEL : U.liQ.GUILD_CHANNEL,
                        section: U.JJy.CHANNEL_TEXT_AREA,
                        object: U.ZSU.BUTTON_ICON,
                        objectType: U.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: r,
                }),
                    e());
            },
            [t, d, a, c, o, r, e],
        ),
        S = s.useRef(!1);
    s.useEffect(() => {
        S.current ||
            ((S.current = !0),
            R.default.track(U.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let _ = (0, n.jsx)(K, { onSelectSku: f, priceOptions: u, showPromotionalGiftBanner: h });
    return (0, n.jsx)(m.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": X.intl.string(X.t["wg/30i"]),
        children: (0, n.jsxs)("div", {
            className: $.jE,
            children: [
                (0, n.jsx)(p.rQ, { title: X.intl.string(X.t["wg/30i"]) }),
                null != t
                    ? (0, n.jsx)(it, { giftRecipient: t, onClose: e, nitroSection: _, analyticsLocations: a })
                    : (0, n.jsx)(g.Ip, {
                          className: $.XG,
                          children: (0, n.jsxs)("div", {
                              className: `${$.Qs} ${$.GP}`,
                              children: [
                                  (0, n.jsx)("div", { className: $.XP, children: _ }),
                                  (0, n.jsx)(J, { analyticsLocations: a }),
                              ],
                          }),
                      }),
            ],
        }),
    });
}
function is(i) {
    let {
        giftRecipient: t,
        onClose: e,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: c,
        giftMessage: o,
        giftingOrigin: r = B.vQ.DM_CHANNEL,
    } = i;
    return (0, n.jsx)(N.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: B.T7,
        isGift: !0,
        children: (0, n.jsx)(C.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: r,
            children: (0, n.jsx)(ie, {
                giftRecipient: t,
                onClose: e,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: c,
                giftMessage: o,
                giftingOrigin: r,
            }),
        }),
    });
}
