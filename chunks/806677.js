i.d(t, { default: () => K });
var r = i(627968),
    a = i(64700),
    s = i(172218),
    n = i(158954),
    o = i(311907),
    l = i(459192),
    d = i(990078),
    c = i(397927),
    _ = i(775602),
    u = i(793574),
    f = i(688810),
    p = i(937008),
    m = i(156312),
    h = i(532794),
    I = i(622543),
    C = i(657331),
    g = i(18983),
    x = i(798048),
    S = i(834796),
    k = i(178213),
    w = i(594832),
    E = i(996353),
    T = i(878244),
    b = i(46537),
    A = i(734057),
    j = i(309010),
    L = i(954571),
    N = i(427262),
    O = i(407775),
    v = i(672525),
    y = i(788868),
    H = i(652215),
    M = i(518477),
    W = i(699976),
    G = i(985018),
    P = i(855135),
    R = i(958237);
function D(e) {
    let { onSelectSku: t, priceOptions: i, showPromotionalGiftBanner: a } = e;
    return (0, r.jsxs)("div", {
        className: R.u6,
        children: [
            (0, r.jsx)(v.D3, {
                onClick: () => t(y.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: a,
                wumpusPosition: O.Rf.GIFT_SELECTION_MODAL,
                className: P.giftSelectionModalContext,
            }),
            (0, r.jsx)(v.Ls, {
                onClick: () => t(y.pe.TIER_0),
                isGift: !0,
                priceOptions: i,
                removeTopMargin: !0,
                className: P.giftSelectionModalContext,
            }),
        ],
    });
}
function F(e) {
    let { isEligibleForWishlistSkuPreview: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: Array.from(
            { length: 12 },
            t
                ? (e, t) => (0, r.jsx)(T.O, { spec: W.Z.SIZE_150 }, `placeholder-${t}`)
                : (e, t) => (0, r.jsx)(S.A, { cardSize: x.Y.MEDIUM_SQUARE }, `placeholder-${t}`),
        ),
    });
}
function Q(e) {
    let {
            item: t,
            source: i,
            giftRecipient: a,
            defaultWishlistId: s,
            tooltipConfig: n,
            onWishlistItemClick: o,
            analyticsLocations: c,
        } = e,
        _ = (0, r.jsx)(
            g.A,
            {
                item: t,
                profileOwner: a,
                wishlistId: s,
                isOwner: !1,
                cardSize: x.Y.MEDIUM_SQUARE,
                showOverlayButton: !1,
                giftingOrigin: y.vQ.DM_CHANNEL_WISHLIST,
                source: i,
                showIcons: !0,
                heartColor: "white",
                onWishlistItemClick: o,
                analyticsLocations: c,
            },
            t.skuId,
        );
    return n.shouldShow
        ? (0, b.Qc)(n)
            ? (0, r.jsx)(d.m, { text: n.title, position: "top", asContainer: !0, delay: w.Zh, children: _ }, t.skuId)
            : (0, r.jsx)(
                  l.u,
                  {
                      title: n.title,
                      body: n.body ?? "",
                      asset: n.renderIcon?.(t),
                      assetSize: w.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: w.Zh,
                      children: _,
                  },
                  t.skuId,
              )
        : _;
}
function B(e) {
    let {
            isEligibleForWishlistSkuPreview: t,
            displayItems: i,
            giftRecipient: s,
            defaultWishlistId: n,
            tooltipConfigs: l,
            onSeeWishlistClick: d,
            onWishlistItemClick: c,
            totalUnownedWishlistItems: _,
            analyticsLocations: u,
        } = e,
        f = a.useMemo(
            () =>
                new Set(
                    i.map((e) => {
                        let { source: t } = e;
                        return t;
                    }),
                ),
            [i],
        ),
        p = (0, o.bG)([j.A, A.A], () => A.A.getChannel(j.A.getChannelId()));
    return t
        ? (0, r.jsx)(r.Fragment, {
              children: i.map((e, t) => {
                  let { item: a, source: o } = e;
                  return (
                      null != a.sku &&
                      (0, r.jsx)(
                          T.A,
                          {
                              index: t,
                              sku: a.sku,
                              wishlistId: n,
                              source: o,
                              wishlistOwner: s,
                              hasMultipleSources: f.size > 1,
                              onOpenWishlist: d,
                              onClick: c,
                              analyticsLocations: u,
                              totalUnownedWishlistItems: _,
                              spec: W.Z.SIZE_150,
                              maxWishlistLength: i.length,
                              guildId: p?.guild_id,
                              channelId: p?.id,
                          },
                          a.skuId,
                      )
                  );
              }),
          })
        : (0, r.jsx)(r.Fragment, {
              children: i.map((e, t) => {
                  let { item: i, source: a } = e;
                  return (0, r.jsx)(
                      Q,
                      {
                          item: i,
                          source: a,
                          giftRecipient: s,
                          defaultWishlistId: n,
                          tooltipConfig: l[t],
                          onWishlistItemClick: c,
                          analyticsLocations: u,
                      },
                      i.skuId,
                  );
              }),
          });
}
function U(e) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: i,
            onWishlistItemClick: o,
            displayItems: l,
            defaultWishlistId: d,
            isLoading: _,
            totalUnownedWishlistItems: p,
            analyticsLocations: m,
        } = e,
        h = (0, k.G)("gift_selection_modal_wishlist_section"),
        I = (0, N.tx)(t),
        C = G.intl.formatToPlainString(p >= 12 ? G.t.Y2RFOQ : G.t.dIDKgi, { username: I }),
        { analyticsLocations: g } = (0, f.Ay)(...(m ?? []), u.A.GIFT_SELECTION_MODAL_WISHLIST),
        x = (0, b.bc)(l, t),
        [S, w] = a.useState(!1),
        E = a.useCallback(
            (e) => {
                e &&
                    !_ &&
                    l.length > 0 &&
                    (L.default.track(H.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: l.map((e) => {
                            let { item: t } = e;
                            return t.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                l.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: g,
                    }),
                    w(!0));
            },
            [_, l, t.id, g],
        ),
        T = (0, s.K)(E, void 0, !_ && !S);
    return (0, r.jsxs)("div", {
        ref: T,
        className: R.jf,
        children: [
            (0, r.jsxs)("div", {
                className: R.nM,
                children: [
                    (0, r.jsx)(n.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: R.Uf,
                        children: C,
                    }),
                    !h &&
                        (0, r.jsx)(c.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: G.intl.string(G.t.y6PSA3),
                            onClick: i,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: R.KN,
                children: _
                    ? (0, r.jsx)(F, { isEligibleForWishlistSkuPreview: h })
                    : (0, r.jsx)(B, {
                          isEligibleForWishlistSkuPreview: h,
                          displayItems: l,
                          giftRecipient: t,
                          defaultWishlistId: d,
                          tooltipConfigs: x,
                          onSeeWishlistClick: i,
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
            giftRecipient: t,
            onClose: i,
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
            defaultWishlistId: b,
            fetchState: A,
        } = (0, E.A)({ user: t, numItems: 12, location: "Gift Selection Modal" }),
        j = null != (0, o.bG)([I.A], () => I.A.getFirstWishlistId(t.id)),
        N = "loading" !== A.status,
        O = j && (!N || w > 0),
        v = G.intl.string(G.t["7lZ31J"]),
        [W, P] = a.useState("Nitro"),
        F = a.useRef(null),
        Q = a.useRef(null),
        B = (0, o.bG)([_.A], () => _.A.useReducedMotion),
        Z = a.useRef(!1),
        K = a.useRef(!1);
    a.useEffect(() => {
        "loading" === A.status ||
            K.current ||
            ((K.current = !0),
            L.default.track(H.HAw.GIFT_SELECTION_MODAL_OPENED, {
                gift_recipient_id: t.id,
                wishlist_item_count: w,
                location_stack: l,
            }));
    }, [A.status, t.id, w, l]);
    let X = a.useCallback(
            (e) => {
                P(e), (Z.current = !0);
                let i = F.current;
                null != i &&
                    i.addEventListener(
                        "scrollend",
                        () => {
                            Z.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === e
                        ? i?.scrollTo({ top: 0, behavior: B ? "auto" : "smooth" })
                        : Q.current?.scrollIntoView({ behavior: B ? "auto" : "smooth", block: "start" }),
                    L.default.track(H.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: e,
                        location_stack: l,
                    });
            },
            [t.id, l, B],
        ),
        z = a.useCallback(() => {
            L.default.track(H.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: w,
                location_stack: l,
            }),
                i(),
                (0, C.openUserProfileModal)({ userId: t.id, tabSection: M.RP.WISHLIST });
        }, [t.id, w, l, i]);
    a.useEffect(() => {
        let e = Q.current,
            t = F.current;
        if (null == e || null == t) return;
        let i = new IntersectionObserver(
            (e) => {
                let [t] = e;
                Z.current || P(t.isIntersecting ? "Wishlist" : "Nitro");
            },
            { root: t, threshold: 0.5 },
        );
        return i.observe(e), () => i.disconnect();
    }, [O]);
    let V = a.useCallback(
        (e) => {
            (0, h.A)({
                isGift: !0,
                giftRecipient: t,
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
                i();
        },
        [t, l, d, u, f, i, g],
    );
    return (0, r.jsx)(n.dWK, {
        transitionState: s,
        size: "lg",
        onClose: i,
        "aria-label": G.intl.string(G.t["wg/30i"]),
        children: (0, r.jsxs)("div", {
            className: R.jE,
            children: [
                (0, r.jsx)(n.rQ0, { title: G.intl.string(G.t["wg/30i"]) }),
                O &&
                    (0, r.jsx)("div", {
                        className: R.CE,
                        children: (0, r.jsxs)(n.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: W,
                            onItemSelect: X,
                            children: [
                                (0, r.jsx)(n.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": G.intl.string(G.t.Ipxkog),
                                    children: G.intl.string(G.t.Ipxkog),
                                }),
                                (0, r.jsx)(n.VQ0.Item, { id: "Wishlist", "aria-label": v, children: v }),
                            ],
                        }),
                    }),
                (0, r.jsx)(c.HOs, {
                    ref: F,
                    className: R.XG,
                    children: (0, r.jsxs)("div", {
                        className: R.Qs,
                        children: [
                            (0, r.jsx)("div", {
                                className: R.XP,
                                children: (0, r.jsx)(D, {
                                    onSelectSku: V,
                                    priceOptions: x,
                                    showPromotionalGiftBanner: k,
                                }),
                            }),
                            O &&
                                (0, r.jsx)("div", {
                                    ref: Q,
                                    className: R.XP,
                                    children: (0, r.jsx)(U, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: z,
                                        onWishlistItemClick: i,
                                        displayItems: T,
                                        defaultWishlistId: b,
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
        giftRecipient: t,
        onClose: i,
        transitionState: a,
        analyticsLocations: s,
        analyticsLocation: n,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: d = y.vQ.DM_CHANNEL,
    } = e;
    return (0, r.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: y.T7,
        isGift: !0,
        children: (0, r.jsx)(p.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d,
            children: (0, r.jsx)(Z, {
                giftRecipient: t,
                onClose: i,
                transitionState: a,
                analyticsLocations: s,
                analyticsLocation: n,
                analyticsObject: o,
                giftMessage: l,
                giftingOrigin: d,
            }),
        }),
    });
}
