t.d(i, { default: () => K });
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
    f = t(688810),
    p = t(937008),
    m = t(156312),
    h = t(532794),
    I = t(622543),
    C = t(657331),
    g = t(18983),
    x = t(798048),
    S = t(834796),
    k = t(178213),
    w = t(594832),
    E = t(996353),
    T = t(878244),
    A = t(46537),
    b = t(734057),
    j = t(309010),
    L = t(954571),
    N = t(427262),
    O = t(407775),
    v = t(672525),
    y = t(788868),
    H = t(652215),
    M = t(518477),
    W = t(699976),
    G = t(985018),
    P = t(855135),
    R = t(958237);
function D(e) {
    let { onSelectSku: i, priceOptions: t, showPromotionalGiftBanner: r } = e;
    return (0, a.jsxs)("div", {
        className: R.u6,
        children: [
            (0, a.jsx)(v.D3, {
                onClick: () => i(y.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: r,
                wumpusPosition: O.Rf.GIFT_SELECTION_MODAL,
                className: P.giftSelectionModalContext,
            }),
            (0, a.jsx)(v.Ls, {
                onClick: () => i(y.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0,
                className: P.giftSelectionModalContext,
            }),
        ],
    });
}
function F(e) {
    let { isEligibleForWishlistSkuPreview: i } = e;
    return (0, a.jsx)(a.Fragment, {
        children: Array.from(
            { length: 12 },
            i
                ? (e, i) => (0, a.jsx)(T.O, { spec: W.Z.SIZE_150 }, `placeholder-${i}`)
                : (e, i) => (0, a.jsx)(S.A, { cardSize: x.Y.MEDIUM_SQUARE }, `placeholder-${i}`),
        ),
    });
}
function Q(e) {
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
                cardSize: x.Y.MEDIUM_SQUARE,
                showOverlayButton: !1,
                giftingOrigin: y.vQ.DM_CHANNEL_WISHLIST,
                source: t,
                showIcons: !0,
                heartColor: "white",
                onWishlistItemClick: o,
                analyticsLocations: c,
            },
            i.skuId,
        );
    return n.shouldShow
        ? (0, A.Qc)(n)
            ? (0, a.jsx)(d.m, { text: n.title, position: "top", asContainer: !0, delay: w.Zh, children: _ }, i.skuId)
            : (0, a.jsx)(
                  l.u,
                  {
                      title: n.title,
                      body: n.body ?? "",
                      asset: n.renderIcon?.(i),
                      assetSize: w.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: w.Zh,
                      children: _,
                  },
                  i.skuId,
              )
        : _;
}
function B(e) {
    let {
            isEligibleForWishlistSkuPreview: i,
            displayItems: t,
            giftRecipient: s,
            defaultWishlistId: n,
            tooltipConfigs: l,
            onSeeWishlistClick: d,
            onWishlistItemClick: c,
            totalUnownedWishlistItems: _,
            analyticsLocations: u,
        } = e,
        f = r.useMemo(
            () =>
                new Set(
                    t.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [t],
        ),
        p = (0, o.bG)([j.A, b.A], () => b.A.getChannel(j.A.getChannelId()));
    return i
        ? (0, a.jsx)(a.Fragment, {
              children: t.map((e, i) => {
                  let { item: r, source: o } = e;
                  return (
                      null != r.sku &&
                      (0, a.jsx)(
                          T.A,
                          {
                              index: i,
                              sku: r.sku,
                              wishlistId: n,
                              source: o,
                              wishlistOwner: s,
                              hasMultipleSources: f.size > 1,
                              onOpenWishlist: d,
                              onClick: c,
                              analyticsLocations: u,
                              totalUnownedWishlistItems: _,
                              spec: W.Z.SIZE_150,
                              maxWishlistLength: t.length,
                              guildId: p?.guild_id,
                              channelId: p?.id,
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
                      Q,
                      {
                          item: t,
                          source: r,
                          giftRecipient: s,
                          defaultWishlistId: n,
                          tooltipConfig: l[i],
                          onWishlistItemClick: c,
                          analyticsLocations: u,
                      },
                      t.skuId,
                  );
              }),
          });
}
function U(e) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: t,
            onWishlistItemClick: o,
            displayItems: l,
            defaultWishlistId: d,
            isLoading: _,
            totalUnownedWishlistItems: p,
            analyticsLocations: m,
        } = e,
        h = (0, k.G)("gift_selection_modal_wishlist_section"),
        I = (0, N.tx)(i),
        C = G.intl.formatToPlainString(p >= 12 ? G.t.Y2RFOQ : G.t.dIDKgi, { username: I }),
        { analyticsLocations: g } = (0, f.Ay)(...(m ?? []), u.A.GIFT_SELECTION_MODAL_WISHLIST),
        x = (0, A.bc)(l, i),
        [S, w] = r.useState(!1),
        E = r.useCallback(
            (e) => {
                e &&
                    !_ &&
                    l.length > 0 &&
                    (L.default.track(H.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
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
                    w(!0));
            },
            [_, l, i.id, g],
        ),
        T = (0, s.K)(E, void 0, !_ && !S);
    return (0, a.jsxs)("div", {
        ref: T,
        className: R.jf,
        children: [
            (0, a.jsxs)("div", {
                className: R.nM,
                children: [
                    (0, a.jsx)(n.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: R.Uf,
                        children: C,
                    }),
                    !h &&
                        (0, a.jsx)(c.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: G.intl.string(G.t.y6PSA3),
                            onClick: t,
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: R.KN,
                children: _
                    ? (0, a.jsx)(F, { isEligibleForWishlistSkuPreview: h })
                    : (0, a.jsx)(B, {
                          isEligibleForWishlistSkuPreview: h,
                          displayItems: l,
                          giftRecipient: i,
                          defaultWishlistId: d,
                          tooltipConfigs: x,
                          onSeeWishlistClick: t,
                          onWishlistItemClick: o,
                          totalUnownedWishlistItems: p,
                          analyticsLocations: g,
                      }),
            }),
        ],
    });
}
function Z(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: s,
            analyticsLocations: l,
            analyticsLocation: d,
            analyticsObject: u,
            giftMessage: f,
            giftingOrigin: g = y.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: x } = (0, m.P5)(),
        { claimableRewards: S } = (0, p.Pv)(),
        k = null != S && S.length > 0,
        {
            totalUnownedWishlistItemCount: w,
            displayItems: T,
            defaultWishlistId: A,
            fetchState: b,
        } = (0, E.A)({ user: i, numItems: 12, location: "Gift Selection Modal" }),
        j = null != (0, o.bG)([I.A], () => I.A.getFirstWishlistId(i.id)),
        N = "loading" !== b.status,
        O = j && (!N || w > 0),
        v = G.intl.string(G.t["7lZ31J"]),
        [W, P] = r.useState("Nitro"),
        F = r.useRef(null),
        Q = r.useRef(null),
        B = (0, o.bG)([_.A], () => _.A.useReducedMotion),
        Z = r.useRef(!1);
    r.useEffect(() => {
        "loading" === b.status ||
            Z.current ||
            ((Z.current = !0),
            L.default.track(H.HAw.GIFT_SELECTION_MODAL_OPENED, {
                gift_recipient_id: i.id,
                wishlist_item_count: w,
                location_stack: l,
            }));
    }, [b.status, i.id, w, l]);
    let K = r.useCallback(
            (e) => {
                P(e),
                    L.default.track(H.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: i.id,
                        tab_name: e,
                        location_stack: l,
                    });
            },
            [i.id, l],
        ),
        X = r.useCallback(() => {
            L.default.track(H.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: i.id,
                wishlist_item_count: w,
                location_stack: l,
            }),
                t(),
                (0, C.openUserProfileModal)({ userId: i.id, tabSection: M.RP.WISHLIST });
        }, [i.id, w, l, t]);
    r.useEffect(() => {
        "Nitro" === W
            ? F.current?.scrollTo({ top: 0, behavior: B ? "auto" : "smooth" })
            : Q.current?.scrollIntoView({ behavior: B ? "auto" : "smooth", block: "start" });
    }, [W, B]);
    let z = r.useCallback(
        (e) => {
            (0, h.A)({
                isGift: !0,
                giftRecipient: i,
                subscriptionTier: e,
                giftingOrigin: g,
                analyticsLocations: l ?? [],
                analyticsLocation: d ?? H.ThZ.GIFT_SELECTION_MODAL,
                analyticsObject: u ?? {
                    page: H.liQ.DM_CHANNEL,
                    section: H.JJy.CHANNEL_TEXT_AREA,
                    object: H.ZSU.BUTTON_ICON,
                    objectType: H.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: f,
            }),
                t();
        },
        [i, l, d, u, f, t, g],
    );
    return (0, a.jsx)(n.dWK, {
        transitionState: s,
        size: "lg",
        onClose: t,
        "aria-label": G.intl.string(G.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: R.jE,
            children: [
                (0, a.jsx)(n.rQ0, { title: G.intl.string(G.t["wg/30i"]) }),
                O &&
                    (0, a.jsx)("div", {
                        className: R.CE,
                        children: (0, a.jsxs)(n.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: W,
                            onItemSelect: K,
                            children: [
                                (0, a.jsx)(n.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": G.intl.string(G.t.Ipxkog),
                                    children: G.intl.string(G.t.Ipxkog),
                                }),
                                (0, a.jsx)(n.VQ0.Item, { id: "Wishlist", "aria-label": v, children: v }),
                            ],
                        }),
                    }),
                (0, a.jsx)(c.HOs, {
                    ref: F,
                    className: R.XG,
                    children: (0, a.jsxs)("div", {
                        className: R.Qs,
                        children: [
                            (0, a.jsx)("div", {
                                className: R.XP,
                                children: (0, a.jsx)(D, {
                                    onSelectSku: z,
                                    priceOptions: x,
                                    showPromotionalGiftBanner: k,
                                }),
                            }),
                            O &&
                                (0, a.jsx)("div", {
                                    ref: Q,
                                    className: R.XP,
                                    children: (0, a.jsx)(U, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: X,
                                        onWishlistItemClick: t,
                                        displayItems: T,
                                        defaultWishlistId: A,
                                        isLoading: !N,
                                        totalUnownedWishlistItems: w,
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
function K(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: r,
        analyticsLocations: s,
        analyticsLocation: n,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: d = y.vQ.DM_CHANNEL,
    } = e;
    return (0, a.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: y.T7,
        isGift: !0,
        children: (0, a.jsx)(p.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: d,
            children: (0, a.jsx)(Z, {
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
