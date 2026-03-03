i.d(t, { default: () => et });
var a = i(627968),
    s = i(64700),
    n = i(791282),
    r = i.n(n),
    o = i(172218),
    l = i(158954),
    d = i(311907),
    c = i(459192),
    _ = i(990078),
    u = i(397927),
    f = i(775602),
    m = i(793574),
    p = i(688810),
    h = i(937008),
    I = i(156312),
    g = i(532794),
    C = i(622543),
    S = i(657331),
    x = i(18983),
    L = i(798048),
    E = i(834796),
    k = i(310250),
    w = i(178213),
    T = i(594832),
    A = i(996353),
    b = i(631784),
    j = i(872472),
    O = i(721932),
    y = i(310209),
    N = i(878244),
    v = i(46537),
    M = i(734057),
    W = i(309010),
    H = i(954571),
    G = i(427262),
    R = i(407775),
    P = i(672525),
    D = i(788868),
    F = i(652215),
    Q = i(518477),
    U = i(699976),
    B = i(985018),
    Z = i(855135),
    K = i(958237);
function X(e) {
    let { onSelectSku: t, priceOptions: i, showPromotionalGiftBanner: s } = e;
    return (0, a.jsxs)("div", {
        className: K.u6,
        children: [
            (0, a.jsx)(P.D3, {
                onClick: () => t(D.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: s,
                wumpusPosition: R.Rf.GIFT_SELECTION_MODAL,
                className: Z.giftSelectionModalContext,
            }),
            (0, a.jsx)(P.Ls, {
                onClick: () => t(D.pe.TIER_0),
                isGift: !0,
                priceOptions: i,
                removeTopMargin: !0,
                className: Z.giftSelectionModalContext,
            }),
        ],
    });
}
function z(e) {
    let { isEligibleForWishlistSkuPreview: t } = e;
    return (0, a.jsx)(a.Fragment, {
        children: Array.from(
            { length: 12 },
            t
                ? (e, t) => (0, a.jsx)(N.O, { spec: U.Z.SIZE_150 }, `placeholder-${t}`)
                : (e, t) => (0, a.jsx)(E.A, { cardSize: L.Y.MEDIUM_SQUARE }, `placeholder-${t}`),
        ),
    });
}
function V(e) {
    let {
            item: t,
            source: i,
            giftRecipient: s,
            defaultWishlistId: n,
            tooltipConfig: r,
            onWishlistItemClick: o,
            analyticsLocations: l,
        } = e,
        d = (0, a.jsx)(
            x.A,
            {
                item: t,
                profileOwner: s,
                wishlistId: n,
                isOwner: !1,
                cardSize: L.Y.MEDIUM_SQUARE,
                showOverlayButton: !1,
                giftingOrigin: D.vQ.DM_CHANNEL_WISHLIST,
                source: i,
                showIcons: !0,
                heartColor: "white",
                onWishlistItemClick: o,
                analyticsLocations: l,
            },
            t.skuId,
        );
    return r.shouldShow
        ? (0, v.Qc)(r)
            ? (0, a.jsx)(_.m, { text: r.title, position: "top", asContainer: !0, delay: T.Zh, children: d }, t.skuId)
            : (0, a.jsx)(
                  c.u,
                  {
                      title: r.title,
                      body: r.body ?? "",
                      asset: r.renderIcon?.(t),
                      assetSize: T.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: T.Zh,
                      children: d,
                  },
                  t.skuId,
              )
        : d;
}
function q(e) {
    let {
            isEligibleForWishlistSkuPreview: t,
            displayItems: i,
            giftRecipient: n,
            defaultWishlistId: r,
            tooltipConfigs: o,
            onSeeWishlistClick: l,
            onWishlistItemClick: c,
            totalUnownedWishlistItems: _,
            analyticsLocations: u,
        } = e,
        f = s.useMemo(
            () =>
                new Set(
                    i.map((e) => {
                        let { source: t } = e;
                        return t;
                    }),
                ),
            [i],
        ),
        m = (0, d.bG)([W.A, M.A], () => M.A.getChannel(W.A.getChannelId()));
    return t
        ? (0, a.jsx)(a.Fragment, {
              children: i.map((e, t) => {
                  let { item: s, source: o } = e;
                  return (
                      null != s.sku &&
                      (0, a.jsx)(
                          N.A,
                          {
                              index: t,
                              sku: s.sku,
                              wishlistId: r,
                              source: o,
                              wishlistOwner: n,
                              hasMultipleSources: f.size > 1,
                              onOpenWishlist: l,
                              onClick: c,
                              analyticsLocations: u,
                              totalUnownedWishlistItems: _,
                              spec: U.Z.SIZE_150,
                              maxWishlistLength: i.length,
                              guildId: m?.guild_id,
                              channelId: m?.id,
                          },
                          s.skuId,
                      )
                  );
              }),
          })
        : (0, a.jsx)(a.Fragment, {
              children: i.map((e, t) => {
                  let { item: i, source: s } = e;
                  return (0, a.jsx)(
                      V,
                      {
                          item: i,
                          source: s,
                          giftRecipient: n,
                          defaultWishlistId: r,
                          tooltipConfig: o[t],
                          onWishlistItemClick: c,
                          analyticsLocations: u,
                      },
                      i.skuId,
                  );
              }),
          });
}
function J(e) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: i,
            onWishlistItemClick: n,
            displayItems: r,
            defaultWishlistId: d,
            isLoading: c,
            totalUnownedWishlistItems: _,
            analyticsLocations: f,
        } = e,
        h = (0, w.G)("gift_selection_modal_wishlist_section"),
        I = (0, G.tx)(t),
        g = B.intl.formatToPlainString(_ >= 12 ? B.t.Y2RFOQ : B.t.dIDKgi, { username: I }),
        { analyticsLocations: C } = (0, p.Ay)(...(f ?? []), m.A.GIFT_SELECTION_MODAL_WISHLIST),
        S = (0, v.bc)(r, t),
        [x, L] = s.useState(!1),
        E = s.useCallback(
            (e) => {
                e &&
                    !c &&
                    r.length > 0 &&
                    (H.default.track(F.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: r.map((e) => {
                            let { item: t } = e;
                            return t.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                r.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: C,
                    }),
                    L(!0));
            },
            [c, r, t.id, C],
        ),
        k = (0, o.K)(E, void 0, !c && !x);
    return (0, a.jsxs)("div", {
        ref: k,
        className: K.jf,
        children: [
            (0, a.jsxs)("div", {
                className: K.nM,
                children: [
                    (0, a.jsx)(l.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: K.Uf,
                        children: g,
                    }),
                    !h &&
                        (0, a.jsx)(u.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: B.intl.string(B.t.y6PSA3),
                            onClick: i,
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: K.KN,
                children: c
                    ? (0, a.jsx)(z, { isEligibleForWishlistSkuPreview: h })
                    : (0, a.jsx)(q, {
                          isEligibleForWishlistSkuPreview: h,
                          displayItems: r,
                          giftRecipient: t,
                          defaultWishlistId: d,
                          tooltipConfigs: S,
                          onSeeWishlistClick: i,
                          onWishlistItemClick: n,
                          totalUnownedWishlistItems: _,
                          analyticsLocations: C,
                      }),
            }),
        ],
    });
}
function Y(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: n,
            analyticsLocations: r,
            analyticsLocation: o,
            analyticsObject: c,
            giftMessage: _,
            giftingOrigin: m = D.vQ.DM_CHANNEL,
            displayItems: p,
            wishlistCount: x,
            defaultWishlistId: L,
            isWishlistLoaded: E,
        } = e,
        { priceOptions: k } = (0, I.P5)(),
        { claimableRewards: w } = (0, h.Pv)(),
        T = null != w && w.length > 0,
        A = null != (0, d.bG)([C.A], () => C.A.getFirstWishlistId(t.id)) && (!E || x > 0),
        b = B.intl.string(B.t["7lZ31J"]),
        [j, O] = s.useState("Nitro"),
        y = s.useRef(null),
        N = s.useRef(null),
        v = (0, d.bG)([f.A], () => f.A.useReducedMotion),
        M = s.useRef(!1),
        W = s.useRef(!1);
    s.useEffect(() => {
        E &&
            !W.current &&
            ((W.current = !0),
            H.default.track(F.HAw.GIFT_SELECTION_MODAL_OPENED, {
                gift_recipient_id: t.id,
                wishlist_item_count: x,
                location_stack: r,
            }));
    }, [E, t.id, x, r]);
    let G = s.useCallback(
            (e) => {
                O(e), (M.current = !0);
                let i = y.current;
                null != i &&
                    i.addEventListener(
                        "scrollend",
                        () => {
                            M.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === e
                        ? i?.scrollTo({ top: 0, behavior: v ? "auto" : "smooth" })
                        : N.current?.scrollIntoView({ behavior: v ? "auto" : "smooth", block: "start" }),
                    H.default.track(F.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: e,
                        location_stack: r,
                    });
            },
            [t.id, r, v],
        ),
        R = s.useCallback(() => {
            H.default.track(F.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: x,
                location_stack: r,
            }),
                i(),
                (0, S.openUserProfileModal)({ userId: t.id, tabSection: Q.RP.WISHLIST });
        }, [t.id, x, r, i]);
    s.useEffect(() => {
        let e = N.current,
            t = y.current;
        if (null == e || null == t) return;
        let i = new IntersectionObserver(
            (e) => {
                let [t] = e;
                M.current || O(t.isIntersecting ? "Wishlist" : "Nitro");
            },
            { root: t, threshold: 0.5 },
        );
        return i.observe(e), () => i.disconnect();
    }, [A]);
    let P = s.useCallback(
        (e) => {
            (0, g.A)({
                isGift: !0,
                giftRecipient: t,
                subscriptionTier: e,
                giftingOrigin: m,
                analyticsLocations: r ?? [],
                analyticsLocation: o ?? F.ThZ.GIFT_SELECTION_MODAL,
                analyticsObject: c ?? {
                    page: F.liQ.DM_CHANNEL,
                    section: F.JJy.CHANNEL_TEXT_AREA,
                    object: F.ZSU.BUTTON_ICON,
                    objectType: F.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: _,
            }),
                i();
        },
        [t, r, o, c, _, i, m],
    );
    return (0, a.jsx)(l.dWK, {
        transitionState: n,
        size: "lg",
        onClose: i,
        "aria-label": B.intl.string(B.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: K.jE,
            children: [
                (0, a.jsx)(l.rQ0, { title: B.intl.string(B.t["wg/30i"]) }),
                A &&
                    (0, a.jsx)("div", {
                        className: K.CE,
                        children: (0, a.jsxs)(l.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: j,
                            onItemSelect: G,
                            children: [
                                (0, a.jsx)(l.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": B.intl.string(B.t.Ipxkog),
                                    children: B.intl.string(B.t.Ipxkog),
                                }),
                                (0, a.jsx)(l.VQ0.Item, { id: "Wishlist", "aria-label": b, children: b }),
                            ],
                        }),
                    }),
                (0, a.jsx)(u.HOs, {
                    ref: y,
                    className: K.XG,
                    children: (0, a.jsxs)("div", {
                        className: K.Qs,
                        children: [
                            (0, a.jsx)("div", {
                                className: K.XP,
                                children: (0, a.jsx)(X, {
                                    onSelectSku: P,
                                    priceOptions: k,
                                    showPromotionalGiftBanner: T,
                                }),
                            }),
                            A &&
                                (0, a.jsx)("div", {
                                    ref: N,
                                    className: K.XP,
                                    children: (0, a.jsx)(J, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: R,
                                        onWishlistItemClick: i,
                                        displayItems: p,
                                        defaultWishlistId: L,
                                        isLoading: !E,
                                        totalUnownedWishlistItems: x,
                                        analyticsLocations: r,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function $(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: n,
            analyticsLocations: o,
            analyticsLocation: l,
            analyticsObject: d,
            giftMessage: c,
            giftingOrigin: _ = D.vQ.DM_CHANNEL,
        } = e,
        {
            wishlistAndRecommendations: u,
            totalUnownedWishlistItemCount: f,
            skusToUserAndReason: m,
            status: p,
            defaultWishlistId: h,
        } = (0, b.r)({
            userId: t.id,
            numItems: 12,
            source: T.B5.USER_PROFILE,
            location: "Gift Selection Modal New Recommendations",
        }),
        I = s.useMemo(
            () =>
                r()(
                    u.map((e) => {
                        let i = e.productLine === F.EZt.COLLECTIBLES ? j.A.fromSKU(e) : O.A.fromSKU(e),
                            a = null != m[e.id] && m[e.id][t.id] === y.j.WISHLIST ? T.uS.WISHLIST : T.uS.POPULAR;
                        return null != i ? { item: i, source: a } : null;
                    }),
                ),
            [u, t.id, m],
        );
    return (0, a.jsx)(Y, {
        giftRecipient: t,
        onClose: i,
        transitionState: n,
        analyticsLocations: o,
        analyticsLocation: l,
        analyticsObject: d,
        giftMessage: c,
        giftingOrigin: _,
        displayItems: I,
        wishlistCount: f,
        defaultWishlistId: h,
        isWishlistLoaded: "loading" !== p,
    });
}
function ee(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: s,
            analyticsLocations: n,
            analyticsLocation: r,
            analyticsObject: o,
            giftMessage: l,
            giftingOrigin: d = D.vQ.DM_CHANNEL,
        } = e,
        {
            totalUnownedWishlistItemCount: c,
            displayItems: _,
            defaultWishlistId: u,
            fetchState: f,
        } = (0, A.A)({ user: t, numItems: 12, location: "Gift Selection Modal" });
    return (0, a.jsx)(Y, {
        giftRecipient: t,
        onClose: i,
        transitionState: s,
        analyticsLocations: n,
        analyticsLocation: r,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: d,
        displayItems: _,
        wishlistCount: c,
        defaultWishlistId: u,
        isWishlistLoaded: "loading" !== f.status,
    });
}
function et(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: s,
            analyticsLocations: n,
            analyticsLocation: r,
            analyticsObject: o,
            giftMessage: l,
            giftingOrigin: d = D.vQ.DM_CHANNEL,
        } = e,
        c = (0, k.T)("gift_selection_modal_wishlist_section");
    return (0, a.jsx)(I.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: D.T7,
        isGift: !0,
        children: (0, a.jsx)(h.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d,
            children: c
                ? (0, a.jsx)($, {
                      giftRecipient: t,
                      onClose: i,
                      transitionState: s,
                      analyticsLocations: n,
                      analyticsLocation: r,
                      analyticsObject: o,
                      giftMessage: l,
                      giftingOrigin: d,
                  })
                : (0, a.jsx)(ee, {
                      giftRecipient: t,
                      onClose: i,
                      transitionState: s,
                      analyticsLocations: n,
                      analyticsLocation: r,
                      analyticsObject: o,
                      giftMessage: l,
                      giftingOrigin: d,
                  }),
        }),
    });
}
