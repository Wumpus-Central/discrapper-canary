t.d(i, { default: () => U });
var a = t(627968),
    r = t(64700),
    s = t(172218),
    n = t(158954),
    o = t(311907),
    l = t(459192),
    d = t(990078),
    c = t(397927),
    _ = t(775602),
    u = t(793574),
    p = t(688810),
    f = t(937008),
    m = t(156312),
    h = t(532794),
    C = t(622543),
    I = t(657331),
    g = t(18983),
    S = t(798048),
    x = t(834796),
    k = t(178213),
    T = t(594832),
    w = t(996353),
    E = t(878244),
    b = t(46537),
    j = t(954571),
    A = t(427262),
    L = t(407775),
    N = t(672525),
    O = t(788868),
    y = t(652215),
    v = t(518477),
    H = t(699976),
    M = t(985018),
    W = t(235889),
    G = t(8043);
function P(e) {
    let { onSelectSku: i, priceOptions: t, showPromotionalGiftBanner: r } = e;
    return (0, a.jsxs)("div", {
        className: G.u6,
        children: [
            (0, a.jsx)(N.D3, {
                onClick: () => i(O.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: r,
                wumpusPosition: L.Rf.GIFT_SELECTION_MODAL,
                className: W.giftSelectionModalContext,
            }),
            (0, a.jsx)(N.Ls, {
                onClick: () => i(O.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0,
                className: W.giftSelectionModalContext,
            }),
        ],
    });
}
function R(e) {
    let { isEligibleForWishlistSkuPreview: i } = e;
    return (0, a.jsx)(a.Fragment, {
        children: Array.from(
            { length: 12 },
            i
                ? (e, i) => (0, a.jsx)(E.O, { spec: H.Z.SIZE_150 }, `placeholder-${i}`)
                : (e, i) => (0, a.jsx)(x.A, { cardSize: S.Y.MEDIUM_SQUARE }, `placeholder-${i}`),
        ),
    });
}
function D(e) {
    let {
            item: i,
            source: t,
            giftRecipient: r,
            defaultWishlistId: s,
            tooltipConfig: n,
            onWishlistItemClick: o,
            analyticsLocations: c,
        } = e,
        _ = (0, a.jsx)(
            g.A,
            {
                item: i,
                profileOwner: r,
                wishlistId: s,
                isOwner: !1,
                cardSize: S.Y.MEDIUM_SQUARE,
                showOverlayButton: !1,
                giftingOrigin: O.vQ.DM_CHANNEL_WISHLIST,
                source: t,
                showIcons: !0,
                heartColor: "white",
                onWishlistItemClick: o,
                analyticsLocations: c,
            },
            i.skuId,
        );
    return n.shouldShow
        ? (0, b.Qc)(n)
            ? (0, a.jsx)(d.m, { text: n.title, position: "top", asContainer: !0, delay: T.Zh, children: _ }, i.skuId)
            : (0, a.jsx)(
                  l.u,
                  {
                      title: n.title,
                      body: n.body ?? "",
                      asset: n.renderIcon?.(i),
                      assetSize: T.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: T.Zh,
                      children: _,
                  },
                  i.skuId,
              )
        : _;
}
function F(e) {
    let {
            isEligibleForWishlistSkuPreview: i,
            displayItems: t,
            giftRecipient: s,
            defaultWishlistId: n,
            tooltipConfigs: o,
            onSeeWishlistClick: l,
            onWishlistItemClick: d,
            totalUnownedWishlistItems: c,
            analyticsLocations: _,
        } = e,
        { includedTypes: u, includedSources: p } = r.useMemo(
            () => ({
                includedTypes: new Set(
                    t.map((e) => {
                        let { item: i } = e;
                        return i.skuProductLine;
                    }),
                ),
                includedSources: new Set(
                    t.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            }),
            [t],
        );
    return i
        ? (0, a.jsx)(a.Fragment, {
              children: t.map((e, i) => {
                  let { item: r, source: o } = e;
                  return (
                      null != r.sku &&
                      (0, a.jsx)(
                          E.A,
                          {
                              index: i,
                              sku: r.sku,
                              wishlistId: n,
                              source: o,
                              wishlistOwner: s,
                              hasMultipleTypes: u.size > 1,
                              hasMultipleSources: p.size > 1,
                              onOpenWishlist: l,
                              onClick: d,
                              analyticsLocations: _,
                              totalUnownedWishlistItems: c,
                              spec: H.Z.SIZE_150,
                              maxWishlistLength: t.length,
                          },
                          r.skuId,
                      )
                  );
              }),
          })
        : (0, a.jsx)(a.Fragment, {
              children: t.map((e, i) => {
                  let { item: t, source: r } = e;
                  return (0, a.jsx)(
                      D,
                      {
                          item: t,
                          source: r,
                          giftRecipient: s,
                          defaultWishlistId: n,
                          tooltipConfig: o[i],
                          onWishlistItemClick: d,
                          analyticsLocations: _,
                      },
                      t.skuId,
                  );
              }),
          });
}
function Q(e) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: t,
            onWishlistItemClick: o,
            displayItems: l,
            defaultWishlistId: d,
            isLoading: _,
            totalUnownedWishlistItems: f,
            analyticsLocations: m,
        } = e,
        h = (0, k.G)("gift_selection_modal_wishlist_section"),
        C = (0, A.tx)(i),
        I = M.intl.formatToPlainString(M.t.dIDKgi, { username: C }),
        { analyticsLocations: g } = (0, p.Ay)(...(m ?? []), u.A.GIFT_SELECTION_MODAL_WISHLIST),
        S = (0, b.bc)(l, i),
        [x, T] = r.useState(!1),
        w = r.useCallback(
            (e) => {
                e &&
                    !_ &&
                    l.length > 0 &&
                    (j.default.track(y.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: l.map((e) => {
                            let { item: i } = e;
                            return i.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                l.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: g,
                    }),
                    T(!0));
            },
            [_, l, i.id, g],
        ),
        E = (0, s.K)(w, void 0, !_ && !x);
    return (0, a.jsxs)("div", {
        ref: E,
        className: G.jf,
        children: [
            (0, a.jsxs)("div", {
                className: G.nM,
                children: [
                    (0, a.jsx)(n.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: G.Uf,
                        children: I,
                    }),
                    !h &&
                        (0, a.jsx)(c.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: M.intl.string(M.t.y6PSA3),
                            onClick: t,
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: G.KN,
                children: _
                    ? (0, a.jsx)(R, { isEligibleForWishlistSkuPreview: h })
                    : (0, a.jsx)(F, {
                          isEligibleForWishlistSkuPreview: h,
                          displayItems: l,
                          giftRecipient: i,
                          defaultWishlistId: d,
                          tooltipConfigs: S,
                          onSeeWishlistClick: t,
                          onWishlistItemClick: o,
                          totalUnownedWishlistItems: f,
                          analyticsLocations: g,
                      }),
            }),
        ],
    });
}
function B(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: s,
            analyticsLocations: l,
            analyticsLocation: d,
            analyticsObject: u,
            giftMessage: p,
            giftingOrigin: g = O.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: S } = (0, m.P5)(),
        { claimableRewards: x } = (0, f.Pv)(),
        k = null != x && x.length > 0,
        {
            totalUnownedWishlistItemCount: T,
            displayItems: E,
            defaultWishlistId: b,
            fetchState: A,
        } = (0, w.A)({ user: i, numItems: 12, location: "Gift Selection Modal" }),
        L = null != (0, o.bG)([C.A], () => C.A.getFirstWishlistId(i.id)),
        N = "loading" !== A.status,
        H = L && (!N || T > 0),
        W = M.intl.string(M.t["7lZ31J"]),
        [R, D] = r.useState("Nitro"),
        F = r.useRef(null),
        B = r.useRef(null),
        U = (0, o.bG)([_.A], () => _.A.useReducedMotion),
        Z = r.useRef(!1);
    r.useEffect(() => {
        "loading" === A.status ||
            Z.current ||
            ((Z.current = !0),
            j.default.track(y.HAw.GIFT_SELECTION_MODAL_OPENED, {
                gift_recipient_id: i.id,
                wishlist_item_count: T,
                location_stack: l,
            }));
    }, [A.status, i.id, T, l]);
    let z = r.useCallback(
            (e) => {
                D(e),
                    j.default.track(y.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: i.id,
                        tab_name: e,
                        location_stack: l,
                    });
            },
            [i.id, l],
        ),
        K = r.useCallback(() => {
            j.default.track(y.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: i.id,
                wishlist_item_count: T,
                location_stack: l,
            }),
                t(),
                (0, I.openUserProfileModal)({ userId: i.id, tabSection: v.RP.WISHLIST });
        }, [i.id, T, l, t]);
    r.useEffect(() => {
        "Nitro" === R
            ? F.current?.scrollTo({ top: 0, behavior: U ? "auto" : "smooth" })
            : B.current?.scrollIntoView({ behavior: U ? "auto" : "smooth", block: "start" });
    }, [R, U]);
    let X = r.useCallback(
        (e) => {
            (0, h.A)({
                isGift: !0,
                giftRecipient: i,
                subscriptionTier: e,
                giftingOrigin: g,
                analyticsLocations: l ?? [],
                analyticsLocation: d ?? y.ThZ.GIFT_SELECTION_MODAL,
                analyticsObject: u ?? {
                    page: y.liQ.DM_CHANNEL,
                    section: y.JJy.CHANNEL_TEXT_AREA,
                    object: y.ZSU.BUTTON_ICON,
                    objectType: y.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: p,
            }),
                t();
        },
        [i, l, d, u, p, t, g],
    );
    return (0, a.jsx)(n.dWK, {
        transitionState: s,
        size: "lg",
        onClose: t,
        "aria-label": M.intl.string(M.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: G.jE,
            children: [
                (0, a.jsx)(n.rQ0, { title: M.intl.string(M.t["wg/30i"]) }),
                H &&
                    (0, a.jsx)("div", {
                        className: G.CE,
                        children: (0, a.jsxs)(n.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: R,
                            onItemSelect: z,
                            children: [
                                (0, a.jsx)(n.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": M.intl.string(M.t.Ipxkog),
                                    children: M.intl.string(M.t.Ipxkog),
                                }),
                                (0, a.jsx)(n.VQ0.Item, { id: "Wishlist", "aria-label": W, children: W }),
                            ],
                        }),
                    }),
                (0, a.jsx)(c.HOs, {
                    ref: F,
                    className: G.XG,
                    children: (0, a.jsxs)("div", {
                        className: G.Qs,
                        children: [
                            (0, a.jsx)("div", {
                                className: G.XP,
                                children: (0, a.jsx)(P, {
                                    onSelectSku: X,
                                    priceOptions: S,
                                    showPromotionalGiftBanner: k,
                                }),
                            }),
                            H &&
                                (0, a.jsx)("div", {
                                    ref: B,
                                    className: G.XP,
                                    children: (0, a.jsx)(Q, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: K,
                                        onWishlistItemClick: t,
                                        displayItems: E,
                                        defaultWishlistId: b,
                                        isLoading: !N,
                                        totalUnownedWishlistItems: T,
                                        analyticsLocations: l,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function U(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: r,
        analyticsLocations: s,
        analyticsLocation: n,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: d = O.vQ.DM_CHANNEL,
    } = e;
    return (0, a.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: O.T7,
        isGift: !0,
        children: (0, a.jsx)(f.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: d,
            children: (0, a.jsx)(B, {
                giftRecipient: i,
                onClose: t,
                transitionState: r,
                analyticsLocations: s,
                analyticsLocation: n,
                analyticsObject: o,
                giftMessage: l,
                giftingOrigin: d,
            }),
        }),
    });
}
