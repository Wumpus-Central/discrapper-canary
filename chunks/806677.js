i.d(t, { default: () => er });
var s = i(627968),
    n = i(64700),
    r = i(791282),
    a = i.n(r),
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
    C = i(532794),
    g = i(871123),
    S = i(177569),
    x = i(622543),
    k = i(657331),
    L = i(18983),
    j = i(798048),
    E = i(834796),
    A = i(310250),
    T = i(178213),
    w = i(594832),
    b = i(996353),
    N = i(631784),
    v = i(872472),
    O = i(721932),
    y = i(310209),
    H = i(878244),
    W = i(46537),
    M = i(734057),
    G = i(309010),
    R = i(954571),
    P = i(427262),
    D = i(407775),
    F = i(672525),
    Q = i(788868),
    U = i(652215),
    B = i(518477),
    Z = i(699976),
    K = i(985018),
    X = i(235889),
    z = i(8043);
function V(e) {
    let { onSelectSku: t, priceOptions: i, showPromotionalGiftBanner: n } = e;
    return (0, s.jsxs)("div", {
        className: z.u6,
        children: [
            (0, s.jsx)(F.D3, {
                onClick: () => t(Q.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: n,
                wumpusPosition: D.Rf.GIFT_SELECTION_MODAL,
                className: X.giftSelectionModalContext,
            }),
            (0, s.jsx)(F.Ls, {
                onClick: () => t(Q.pe.TIER_0),
                isGift: !0,
                priceOptions: i,
                removeTopMargin: !0,
                className: X.giftSelectionModalContext,
            }),
        ],
    });
}
function J(e) {
    let { isEligibleForWishlistSkuPreview: t } = e;
    return (0, s.jsx)(s.Fragment, {
        children: Array.from(
            { length: 12 },
            t
                ? (e, t) => (0, s.jsx)(H.O, { spec: Z.Z.SIZE_150 }, `placeholder-${t}`)
                : (e, t) => (0, s.jsx)(E.A, { cardSize: j.Y.MEDIUM_SQUARE }, `placeholder-${t}`),
        ),
    });
}
function $(e) {
    let {
            item: t,
            source: i,
            giftRecipient: n,
            defaultWishlistId: r,
            tooltipConfig: a,
            onWishlistItemClick: o,
            analyticsLocations: l,
        } = e,
        d = (0, s.jsx)(
            L.A,
            {
                item: t,
                profileOwner: n,
                wishlistId: r,
                isOwner: !1,
                cardSize: j.Y.MEDIUM_SQUARE,
                showOverlayButton: !1,
                giftingOrigin: Q.vQ.DM_CHANNEL_WISHLIST,
                source: i,
                showIcons: !0,
                heartColor: "white",
                onWishlistItemClick: o,
                analyticsLocations: l,
            },
            t.skuId,
        );
    return a.shouldShow
        ? (0, W.Qc)(a)
            ? (0, s.jsx)(_.m, { text: a.title, position: "top", asContainer: !0, delay: w.Zh, children: d }, t.skuId)
            : (0, s.jsx)(
                  c.u,
                  {
                      title: a.title,
                      body: a.body ?? "",
                      asset: a.renderIcon?.(t),
                      assetSize: w.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: w.Zh,
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
            giftRecipient: r,
            defaultWishlistId: a,
            tooltipConfigs: o,
            onSeeWishlistClick: l,
            onWishlistItemClick: c,
            totalUnownedWishlistItems: _,
            analyticsLocations: u,
        } = e,
        f = n.useMemo(
            () =>
                new Set(
                    i.map((e) => {
                        let { source: t } = e;
                        return t;
                    }),
                ),
            [i],
        ),
        m = (0, d.bG)([G.A, M.A], () => M.A.getChannel(G.A.getChannelId())),
        p = _ > i.length ? _ - i.length + 1 : void 0;
    return t
        ? (0, s.jsx)(s.Fragment, {
              children: i.map((e, t) => {
                  let { item: n, source: o } = e;
                  return (
                      null != n.sku &&
                      (0, s.jsx)(
                          H.A,
                          {
                              numMoreItems: t === i.length - 1 ? p : void 0,
                              sku: n.sku,
                              wishlistId: a,
                              source: o,
                              wishlistOwner: r,
                              hasMultipleSources: f.size > 1,
                              onOpenWishlist: l,
                              onClick: c,
                              analyticsLocations: u,
                              spec: Z.Z.SIZE_150,
                              guildId: m?.guild_id,
                              channelId: m?.id,
                          },
                          n.skuId,
                      )
                  );
              }),
          })
        : (0, s.jsx)(s.Fragment, {
              children: i.map((e, t) => {
                  let { item: i, source: n } = e;
                  return (0, s.jsx)(
                      $,
                      {
                          item: i,
                          source: n,
                          giftRecipient: r,
                          defaultWishlistId: a,
                          tooltipConfig: o[t],
                          onWishlistItemClick: c,
                          analyticsLocations: u,
                      },
                      i.skuId,
                  );
              }),
          });
}
function Y(e) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: i,
            onWishlistItemClick: r,
            displayItems: a,
            defaultWishlistId: d,
            isLoading: c,
            totalUnownedWishlistItems: _,
            analyticsLocations: f,
        } = e,
        h = (0, T.GG)("gift_selection_modal_wishlist_section"),
        I = (0, P.tx)(t),
        C = K.intl.formatToPlainString(_ >= 12 ? K.t.Y2RFOQ : K.t.dIDKgi, { username: I }),
        { analyticsLocations: x } = (0, p.Ay)(...(f ?? []), m.A.GIFT_SELECTION_MODAL_WISHLIST),
        k = (0, W.bc)(a, t),
        [L, j] = n.useState(!1),
        E = n.useCallback(
            (e) => {
                e &&
                    !c &&
                    a.length > 0 &&
                    (R.default.track(U.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: a.map((e) => {
                            let { item: t } = e;
                            return t.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                a.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: x,
                    }),
                    j(!0));
            },
            [c, a, t.id, x],
        ),
        A = (0, o.K)(E, void 0, !c && !L),
        w = n.useMemo(
            () =>
                a.some((e) => {
                    let { item: t } = e;
                    return (0, g.bF)(t.sku);
                }),
            [a],
        );
    return (0, s.jsxs)("div", {
        ref: A,
        className: z.jf,
        children: [
            (0, s.jsxs)("div", {
                className: z.nM,
                children: [
                    (0, s.jsx)(l.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: z.Uf,
                        children: C,
                    }),
                    !h &&
                        (0, s.jsx)(u.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: K.intl.string(K.t.y6PSA3),
                            onClick: i,
                        }),
                ],
            }),
            w && (0, s.jsx)(S.A, { location: "gift_selection_modal_wishlist" }),
            (0, s.jsx)("div", {
                className: z.KN,
                children: c
                    ? (0, s.jsx)(J, { isEligibleForWishlistSkuPreview: h })
                    : (0, s.jsx)(q, {
                          isEligibleForWishlistSkuPreview: h,
                          displayItems: a,
                          giftRecipient: t,
                          defaultWishlistId: d,
                          tooltipConfigs: k,
                          onSeeWishlistClick: i,
                          onWishlistItemClick: r,
                          totalUnownedWishlistItems: _,
                          analyticsLocations: x,
                      }),
            }),
        ],
    });
}
function ee(e) {
    let {
            giftRecipient: t,
            onClose: i,
            nitroSection: r,
            analyticsLocations: a,
            displayItems: o,
            wishlistCount: c,
            defaultWishlistId: _,
            isWishlistLoaded: m,
        } = e,
        p = null != (0, d.bG)([x.A], () => x.A.getFirstWishlistId(t.id)) && (!m || c > 0),
        h = K.intl.string(K.t["7lZ31J"]),
        [I, C] = n.useState("Nitro"),
        g = n.useRef(null),
        S = n.useRef(null),
        L = (0, d.bG)([f.A], () => f.A.useReducedMotion),
        j = n.useRef(!1),
        E = n.useCallback(
            (e) => {
                C(e), (j.current = !0);
                let i = g.current;
                null != i &&
                    i.addEventListener(
                        "scrollend",
                        () => {
                            j.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === e
                        ? i?.scrollTo({ top: 0, behavior: L ? "auto" : "smooth" })
                        : S.current?.scrollIntoView({ behavior: L ? "auto" : "smooth", block: "start" }),
                    R.default.track(U.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: e,
                        location_stack: a,
                    });
            },
            [t.id, a, L],
        ),
        A = n.useCallback(() => {
            R.default.track(U.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: c,
                location_stack: a,
            }),
                i(),
                (0, k.openUserProfileModal)({ userId: t.id, tabSection: B.RP.WISHLIST });
        }, [t.id, c, a, i]);
    return (
        n.useEffect(() => {
            let e = S.current,
                t = g.current;
            if (null == e || null == t) return;
            let i = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    j.current || C(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return i.observe(e), () => i.disconnect();
        }, [p]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                p &&
                    (0, s.jsx)("div", {
                        className: z.CE,
                        children: (0, s.jsxs)(l.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: I,
                            onItemSelect: E,
                            children: [
                                (0, s.jsx)(l.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": K.intl.string(K.t.Ipxkog),
                                    children: K.intl.string(K.t.Ipxkog),
                                }),
                                (0, s.jsx)(l.VQ0.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, s.jsx)(u.HOs, {
                    ref: g,
                    className: z.XG,
                    children: (0, s.jsxs)("div", {
                        className: z.Qs,
                        children: [
                            (0, s.jsx)("div", { className: z.XP, children: r }),
                            p &&
                                (0, s.jsx)("div", {
                                    ref: S,
                                    className: z.XP,
                                    children: (0, s.jsx)(Y, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: A,
                                        onWishlistItemClick: i,
                                        displayItems: o,
                                        defaultWishlistId: _,
                                        analyticsLocations: a,
                                        isLoading: !m,
                                        totalUnownedWishlistItems: c,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function et(e) {
    let { giftRecipient: t, onClose: i, nitroSection: n, analyticsLocations: r } = e,
        {
            totalUnownedWishlistItemCount: a,
            displayItems: o,
            defaultWishlistId: l,
            fetchState: d,
        } = (0, b.A)({ user: t, numItems: 12 });
    return (0, s.jsx)(ee, {
        giftRecipient: t,
        onClose: i,
        nitroSection: n,
        analyticsLocations: r,
        displayItems: o,
        wishlistCount: a,
        defaultWishlistId: l,
        isWishlistLoaded: "loading" !== d.status,
    });
}
function ei(e) {
    let { giftRecipient: t, onClose: i, nitroSection: r, analyticsLocations: o } = e,
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: d,
            skusToUserAndReason: c,
            status: _,
            defaultWishlistId: u,
        } = (0, N.r)({ userId: t.id, numItems: 12, source: w.B5.USER_PROFILE }),
        f = n.useMemo(
            () =>
                a()(
                    l.map((e) => {
                        let i = e.productLine === U.EZt.COLLECTIBLES ? v.A.fromSKU(e) : O.A.fromSKU(e),
                            s = null != c[e.id] && c[e.id][t.id] === y.j.WISHLIST ? w.uS.WISHLIST : w.uS.POPULAR;
                        return null != i ? { item: i, source: s } : null;
                    }),
                ),
            [l, t.id, c],
        );
    return (0, s.jsx)(ee, {
        giftRecipient: t,
        onClose: i,
        nitroSection: r,
        analyticsLocations: o,
        displayItems: f,
        wishlistCount: d,
        defaultWishlistId: u,
        isWishlistLoaded: "loading" !== _,
    });
}
function es(e) {
    let { giftRecipient: t, onClose: i, nitroSection: n, analyticsLocations: r } = e;
    return (0, A.T)("gift_selection_modal_wishlist_section")
        ? (0, s.jsx)(ei, { giftRecipient: t, onClose: i, nitroSection: n, analyticsLocations: r })
        : (0, s.jsx)(et, { giftRecipient: t, onClose: i, nitroSection: n, analyticsLocations: r });
}
function en(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: r,
            analyticsLocations: a,
            analyticsLocation: o,
            analyticsObject: d,
            giftMessage: c,
            giftingOrigin: _ = Q.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: f } = (0, I.P5)(),
        { claimableRewards: m } = (0, h.Pv)(),
        p = null != m && m.length > 0,
        g = n.useCallback(
            (e) => {
                (0, C.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: _,
                    subscriptionTier: e,
                    analyticsLocations: a ?? [],
                    analyticsLocation: o ?? U.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: d ?? {
                        page: null != t ? U.liQ.DM_CHANNEL : U.liQ.GUILD_CHANNEL,
                        section: U.JJy.CHANNEL_TEXT_AREA,
                        object: U.ZSU.BUTTON_ICON,
                        objectType: U.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: c,
                }),
                    i();
            },
            [t, _, a, o, d, c, i],
        ),
        S = n.useRef(!1);
    n.useEffect(() => {
        S.current ||
            ((S.current = !0),
            R.default.track(U.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: a }));
    }, [t, a]);
    let x = (0, s.jsx)(V, { onSelectSku: g, priceOptions: f, showPromotionalGiftBanner: p });
    return (0, s.jsx)(l.dWK, {
        transitionState: r,
        size: "lg",
        onClose: i,
        "aria-label": K.intl.string(K.t["wg/30i"]),
        children: (0, s.jsxs)("div", {
            className: z.jE,
            children: [
                (0, s.jsx)(l.rQ0, { title: K.intl.string(K.t["wg/30i"]) }),
                null != t
                    ? (0, s.jsx)(es, { giftRecipient: t, onClose: i, nitroSection: x, analyticsLocations: a })
                    : (0, s.jsx)(u.HOs, {
                          className: z.XG,
                          children: (0, s.jsx)("div", {
                              className: `${z.Qs} ${z.GP}`,
                              children: (0, s.jsx)("div", { className: z.XP, children: x }),
                          }),
                      }),
            ],
        }),
    });
}
function er(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: n,
        analyticsLocations: r,
        analyticsLocation: a,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: d = Q.vQ.DM_CHANNEL,
    } = e;
    return (0, s.jsx)(I.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: Q.T7,
        isGift: !0,
        children: (0, s.jsx)(h.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d,
            children: (0, s.jsx)(en, {
                giftRecipient: t,
                onClose: i,
                transitionState: n,
                analyticsLocations: r,
                analyticsLocation: a,
                analyticsObject: o,
                giftMessage: l,
                giftingOrigin: d,
            }),
        }),
    });
}
