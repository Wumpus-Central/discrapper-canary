i.d(t, { default: () => R });
var a = i(627968),
    r = i(64700),
    s = i(172218),
    n = i(158954),
    o = i(311907),
    d = i(459192),
    l = i(990078),
    _ = i(397927),
    c = i(775602),
    u = i(793574),
    f = i(688810),
    p = i(937008),
    m = i(156312),
    C = i(532794),
    I = i(622543),
    h = i(657331),
    g = i(18983),
    S = i(798048),
    x = i(834796),
    T = i(594832),
    E = i(996353),
    b = i(46537),
    k = i(954571),
    A = i(427262),
    N = i(407775),
    j = i(672525),
    w = i(788868),
    L = i(652215),
    O = i(518477),
    v = i(985018),
    H = i(235889),
    M = i(8043);
function y(e) {
    let { onSelectSku: t, priceOptions: i, showPromotionalGiftBanner: r } = e;
    return (0, a.jsxs)("div", {
        className: M.u6,
        children: [
            (0, a.jsx)(j.D3, {
                onClick: () => t(w.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: r,
                wumpusPosition: N.Rf.GIFT_SELECTION_MODAL,
                className: H.giftSelectionModalContext,
            }),
            (0, a.jsx)(j.Ls, {
                onClick: () => t(w.pe.TIER_0),
                isGift: !0,
                priceOptions: i,
                removeTopMargin: !0,
                className: H.giftSelectionModalContext,
            }),
        ],
    });
}
function G(e) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: i,
            onWishlistItemClick: o,
            displayItems: _,
            defaultWishlistId: c,
            isLoading: p,
            analyticsLocations: m,
        } = e,
        C = (0, A.tx)(t),
        I = v.intl.formatToPlainString(v.t.Y2RFOQ, { username: C }),
        { analyticsLocations: h } = (0, f.Ay)(...(m ?? []), u.A.GIFT_SELECTION_MODAL_WISHLIST),
        E = (0, b.bc)(_, t),
        [N, j] = r.useState(!1),
        O = r.useCallback(
            (e) => {
                e &&
                    !p &&
                    _.length > 0 &&
                    (k.default.track(L.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: _.map((e) => {
                            let { item: t } = e;
                            return t.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                _.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: h,
                    }),
                    j(!0));
            },
            [p, _, t.id, h],
        ),
        H = (0, s.K)(O, void 0, !p && !N);
    return (0, a.jsxs)("div", {
        ref: H,
        className: M.jf,
        children: [
            (0, a.jsxs)("div", {
                className: M.nM,
                children: [
                    (0, a.jsx)(n.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: M.Uf,
                        children: I,
                    }),
                    (0, a.jsx)(n.$nd, {
                        variant: "secondary",
                        size: "md",
                        text: v.intl.string(v.t.WFDSTv),
                        onClick: i,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: M.KN,
                children: p
                    ? Array.from({ length: 12 }, (e, t) =>
                          (0, a.jsx)(x.A, { cardSize: S.Y.MEDIUM_SQUARE }, `placeholder-${t}`),
                      )
                    : _.map((e, i) => {
                          let { item: r, source: s } = e,
                              n = E[i],
                              _ = (0, a.jsx)(
                                  g.A,
                                  {
                                      item: r,
                                      profileOwner: t,
                                      wishlistId: c,
                                      isOwner: !1,
                                      cardSize: S.Y.MEDIUM_SQUARE,
                                      showOverlayButton: !1,
                                      giftingOrigin: w.vQ.DM_CHANNEL_WISHLIST,
                                      source: s,
                                      showIcons: !0,
                                      heartColor: "white",
                                      onWishlistItemClick: o,
                                      analyticsLocations: h,
                                  },
                                  r.skuId,
                              );
                          return n.shouldShow
                              ? (0, b.Qc)(n)
                                  ? (0, a.jsx)(
                                        l.m,
                                        { text: n.title, position: "top", asContainer: !0, delay: T.Zh, children: _ },
                                        r.skuId,
                                    )
                                  : (0, a.jsx)(
                                        d.u,
                                        {
                                            title: n.title,
                                            body: n.body ?? "",
                                            asset: n.renderIcon?.(r),
                                            assetSize: T.Q8,
                                            position: "top",
                                            asContainer: !0,
                                            delay: T.Zh,
                                            children: _,
                                        },
                                        r.skuId,
                                    )
                              : _;
                      }),
            }),
        ],
    });
}
function P(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: s,
            analyticsLocations: d,
            analyticsLocation: l,
            analyticsObject: u,
            giftMessage: f,
            giftingOrigin: g = w.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: S } = (0, m.P5)(),
        { claimableRewards: x } = (0, p.Pv)(),
        T = null != x && x.length > 0,
        {
            totalUnownedWishlistItemCount: b,
            displayItems: A,
            defaultWishlistId: N,
            fetchState: j,
        } = (0, E.A)({ user: t, numItems: 12, location: "Gift Selection Modal" }),
        H = null != (0, o.bG)([I.A], () => I.A.getFirstWishlistId(t.id)),
        P = "loading" !== j.status,
        R = H && (!P || b > 0),
        D = v.intl.string(v.t["7lZ31J"]),
        [W, Q] = r.useState("Nitro"),
        B = r.useRef(null),
        F = r.useRef(null),
        U = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        X = r.useRef(!1);
    r.useEffect(() => {
        "loading" === j.status ||
            X.current ||
            ((X.current = !0),
            k.default.track(L.HAw.GIFT_SELECTION_MODAL_OPENED, {
                gift_recipient_id: t.id,
                wishlist_item_count: b,
                location_stack: d,
            }));
    }, [j.status, t.id, b, d]);
    let Z = r.useCallback(
            (e) => {
                Q(e),
                    k.default.track(L.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: e,
                        location_stack: d,
                    });
            },
            [t.id, d],
        ),
        K = r.useCallback(() => {
            k.default.track(L.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: b,
                location_stack: d,
            }),
                i(),
                (0, h.openUserProfileModal)({ userId: t.id, tabSection: O.RP.WISHLIST });
        }, [t.id, b, d, i]);
    r.useEffect(() => {
        "Nitro" === W
            ? B.current?.scrollTo({ top: 0, behavior: U ? "auto" : "smooth" })
            : F.current?.scrollIntoView({ behavior: U ? "auto" : "smooth", block: "start" });
    }, [W, U]);
    let V = r.useCallback(
        (e) => {
            (0, C.A)({
                isGift: !0,
                giftRecipient: t,
                subscriptionTier: e,
                giftingOrigin: g,
                analyticsLocations: d ?? [],
                analyticsLocation: l ?? L.ThZ.GIFT_SELECTION_MODAL,
                analyticsObject: u ?? {
                    page: L.liQ.DM_CHANNEL,
                    section: L.JJy.CHANNEL_TEXT_AREA,
                    object: L.ZSU.BUTTON_ICON,
                    objectType: L.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: f,
            }),
                i();
        },
        [t, d, l, u, f, i, g],
    );
    return (0, a.jsx)(n.dWK, {
        transitionState: s,
        size: "lg",
        onClose: i,
        "aria-label": v.intl.string(v.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: M.jE,
            children: [
                (0, a.jsx)(n.rQ0, { title: v.intl.string(v.t["wg/30i"]) }),
                R &&
                    (0, a.jsx)("div", {
                        className: M.CE,
                        children: (0, a.jsxs)(n.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: W,
                            onItemSelect: Z,
                            children: [
                                (0, a.jsx)(n.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": v.intl.string(v.t.Ipxkog),
                                    children: v.intl.string(v.t.Ipxkog),
                                }),
                                (0, a.jsx)(n.VQ0.Item, { id: "Wishlist", "aria-label": D, children: D }),
                            ],
                        }),
                    }),
                (0, a.jsx)(_.HOs, {
                    ref: B,
                    className: M.XG,
                    children: (0, a.jsxs)("div", {
                        className: M.Qs,
                        children: [
                            (0, a.jsx)("div", {
                                className: M.XP,
                                children: (0, a.jsx)(y, {
                                    onSelectSku: V,
                                    priceOptions: S,
                                    showPromotionalGiftBanner: T,
                                }),
                            }),
                            R &&
                                (0, a.jsx)("div", {
                                    ref: F,
                                    className: M.XP,
                                    children: (0, a.jsx)(G, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: K,
                                        onWishlistItemClick: i,
                                        displayItems: A,
                                        defaultWishlistId: N,
                                        isLoading: !P,
                                        analyticsLocations: d,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function R(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: r,
        analyticsLocations: s,
        analyticsLocation: n,
        analyticsObject: o,
        giftMessage: d,
        giftingOrigin: l = w.vQ.DM_CHANNEL,
    } = e;
    return (0, a.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: w.T7,
        isGift: !0,
        children: (0, a.jsx)(p.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: l,
            children: (0, a.jsx)(P, {
                giftRecipient: t,
                onClose: i,
                transitionState: r,
                analyticsLocations: s,
                analyticsLocation: n,
                analyticsObject: o,
                giftMessage: d,
                giftingOrigin: l,
            }),
        }),
    });
}
