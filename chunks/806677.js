e.d(t, { default: () => is });
var n = e(627968),
    s = e(64700),
    l = e(791282),
    a = e.n(l),
    c = e(835245),
    o = e(172218),
    r = e(70283),
    d = e(331322),
    u = e(534514),
    I = e(761508),
    h = e(224640),
    f = e(20742),
    g = e(17928),
    m = e(192308),
    p = e(364522),
    _ = e(444927),
    S = e(775602),
    x = e(793574),
    T = e(688810),
    j = e(982240),
    N = e(171835),
    L = e(6938),
    C = e(937008),
    E = e(532794),
    A = e(975732),
    k = e(299679),
    O = e(561794),
    y = e(862772),
    b = e(310209),
    w = e(719102),
    G = e(734057),
    v = e(309010),
    R = e(174459),
    M = e(427262),
    W = e(413074),
    P = e(672525),
    D = e(735668),
    H = e(998370),
    F = e(492275),
    B = e(202541),
    U = e(652215),
    Q = e(518477),
    V = e(699976),
    X = e(375708),
    Z = e(115599),
    $ = e(273944);
function J(i) {
    let { onSelectSku: t, priceOptions: e, showPromotionalGiftBanner: s } = i;
    return (0, n.jsxs)(d.B, {
        direction: "vertical",
        gap: 16,
        children: [
            (0, n.jsxs)("div", {
                className: $.u6,
                children: [
                    (0, n.jsx)(P.D3, {
                        onClick: () => t(B.pe.TIER_2),
                        isGift: !0,
                        priceOptions: e,
                        showPromotionalGiftBanner: s,
                        wumpusPosition: D.Rf.GIFT_SELECTION_MODAL,
                        className: Z.giftSelectionModalContext,
                    }),
                    (0, n.jsx)(P.Ls, {
                        onClick: () => t(B.pe.TIER_0),
                        isGift: !0,
                        priceOptions: e,
                        className: Z.giftSelectionModalContext,
                    }),
                ],
            }),
            (0, n.jsx)(W.A, {}),
        ],
    });
}
function K(i) {
    let { analyticsLocations: t } = i,
        { enabled: e } = H.J.useConfig({ location: "GiftSelectionModal" }),
        { nextTier: s, giftsToNextTier: l } = (0, g.cf)([j.Ay], () => ({
            nextTier: j.Ay.getNextTier(r.$.GIFTING),
            giftsToNextTier: j.Ay.getRemainingToNextTier(r.$.GIFTING),
        }));
    return e && null != s
        ? (0, n.jsx)(F.A, {
              giftsToNextTier: l,
              nextTierName: s.name ?? "",
              nextTierIcon: s.simple_icon_url,
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
        d = s.useMemo(
            () =>
                new Set(
                    t.map((i) => {
                        let { source: t } = i;
                        return t;
                    }),
                ),
            [t],
        ),
        u = (0, g.bG)([v.A, G.A], () => G.A.getChannel(v.A.getChannelId())),
        I = o > t.length ? o - t.length + 1 : void 0,
        h = s.useCallback(() => {
            c?.(), (0, m.closeAllModals)();
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
                            numMoreItems: s === t.length - 1 ? I : void 0,
                            sku: c,
                            wishlistId: l,
                            source: o,
                            wishlistOwner: e,
                            hasMultipleSources: d.size > 1,
                            onOpenWishlist: a,
                            onClick: h,
                            analyticsLocations: r,
                            spec: V.Z.SIZE_150,
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
function q(i) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: e,
            onWishlistItemClick: l,
            displayItems: a,
            defaultWishlistId: r,
            isLoading: d,
            totalUnownedWishlistItems: I,
            analyticsLocations: h,
        } = i,
        f = (0, M.tx)(t),
        g =
            0 === I
                ? X.intl.string(X.t.BCi1gT)
                : I >= 12
                  ? X.intl.formatToPlainString(X.t.Y2RFOQ, { username: f })
                  : X.intl.formatToPlainString(X.t.dIDKgi, { username: f }),
        { analyticsLocations: m } = (0, T.Ay)(...(h ?? []), x.A.GIFT_SELECTION_MODAL_WISHLIST),
        p = (0, _.A)(() => (0, c.A)()),
        [S, j] = s.useState(!1),
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
        L = (0, o.K)(N, void 0, !d && !S);
    return (0, n.jsxs)("div", {
        ref: L,
        className: $.jf,
        children: [
            (0, n.jsx)("div", {
                className: $.nM,
                children: (0, n.jsx)(u.D, {
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
                              totalUnownedWishlistItems: I,
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
            isWishlistLoaded: d,
        } = i,
        u = (0, O.tA)({ isGift: !0, giftRecipient: t }),
        h = (d ? o : 0) > 0 ? X.intl.string(X.t["7lZ31J"]) : X.intl.string(X.t.BCi1gT),
        [f, m] = s.useState("Nitro"),
        _ = s.useRef(null),
        x = s.useRef(null),
        T = (0, g.bG)([S.Ay], () => S.Ay.useReducedMotion),
        j = s.useRef(!1),
        N = s.useCallback(
            (i) => {
                m(i), (j.current = !0);
                let e = _.current;
                null != e &&
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
                    });
            },
            [t.id, a, T],
        ),
        L = s.useCallback(() => {
            R.default.track(U.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: o,
                location_stack: a,
            }),
                e(),
                (0, A.openUserProfileModal)({ userId: t.id, tabSection: Q.RP.WISHLIST });
        }, [t.id, o, a, e]);
    return (
        s.useEffect(() => {
            let i = x.current,
                t = _.current;
            if (null == i || null == t) return;
            let e = new IntersectionObserver(
                (i) => {
                    let [t] = i;
                    j.current || m(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return e.observe(i), () => e.disconnect();
        }, [u]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                u &&
                    (0, n.jsx)("div", {
                        className: $.CE,
                        children: (0, n.jsxs)(I.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: f,
                            onItemSelect: N,
                            children: [
                                (0, n.jsx)(I.V.Item, {
                                    id: "Nitro",
                                    "aria-label": X.intl.string(X.t.Ipxkog),
                                    children: X.intl.string(X.t.Ipxkog),
                                }),
                                (0, n.jsx)(I.V.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, n.jsx)(p.Ip, {
                    ref: _,
                    className: $.XG,
                    children: (0, n.jsxs)("div", {
                        className: $.Qs,
                        children: [
                            (0, n.jsx)("div", { className: $.XP, children: l }),
                            u &&
                                (0, n.jsx)("div", {
                                    ref: x,
                                    className: $.XP,
                                    children: (0, n.jsx)(q, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: L,
                                        onWishlistItemClick: e,
                                        displayItems: c,
                                        defaultWishlistId: r,
                                        analyticsLocations: a,
                                        isLoading: !d,
                                        totalUnownedWishlistItems: o,
                                    }),
                                }),
                            (0, n.jsx)(K, { analyticsLocations: a }),
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
        } = (0, y.rg)({ userId: t.id, numItems: 12, source: O.B5.USER_PROFILE }),
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
        g = null != I && I.length > 0,
        m = s.useCallback(
            (i) => {
                (0, E.A)({
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
                    e();
            },
            [t, d, a, c, o, r, e],
        ),
        _ = s.useRef(!1);
    s.useEffect(() => {
        _.current ||
            ((_.current = !0),
            R.default.track(U.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let S = (0, n.jsx)(J, { onSelectSku: m, priceOptions: u, showPromotionalGiftBanner: g });
    return (0, n.jsx)(h.d, {
        transitionState: l,
        size: "lg",
        onClose: e,
        "aria-label": X.intl.string(X.t["wg/30i"]),
        children: (0, n.jsxs)("div", {
            className: $.jE,
            children: [
                (0, n.jsx)(f.rQ, { title: X.intl.string(X.t["wg/30i"]) }),
                null != t
                    ? (0, n.jsx)(it, { giftRecipient: t, onClose: e, nitroSection: S, analyticsLocations: a })
                    : (0, n.jsx)(p.Ip, {
                          className: $.XG,
                          children: (0, n.jsxs)("div", {
                              className: `${$.Qs} ${$.GP}`,
                              children: [
                                  (0, n.jsx)("div", { className: $.XP, children: S }),
                                  (0, n.jsx)(K, { analyticsLocations: a }),
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
