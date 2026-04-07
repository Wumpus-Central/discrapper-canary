t.d(i, { default: () => ea });
var r = t(627968),
    a = t(64700),
    n = t(791282),
    s = t.n(n),
    o = t(835245),
    l = t(172218),
    c = t(158954),
    _ = t(311907),
    d = t(459192),
    u = t(990078),
    m = t(397927),
    p = t(444927),
    f = t(775602),
    h = t(793574),
    I = t(688810),
    C = t(937008),
    g = t(156312),
    x = t(532794),
    S = t(871123),
    k = t(177569),
    T = t(657331),
    b = t(18983),
    w = t(798048),
    L = t(834796),
    A = t(299679),
    j = t(178213),
    E = t(332772),
    v = t(594832),
    N = t(631784),
    H = t(872472),
    O = t(721932),
    y = t(310209),
    G = t(878244),
    M = t(46537),
    P = t(734057),
    W = t(309010),
    R = t(954571),
    B = t(427262),
    D = t(501007),
    Q = t(672525),
    F = t(788868),
    U = t(652215),
    Z = t(518477),
    K = t(699976),
    V = t(985018),
    X = t(831096),
    z = t(829032);
function J(e) {
    let { onSelectSku: i, priceOptions: t, showPromotionalGiftBanner: a } = e;
    return (0, r.jsxs)("div", {
        className: z.u6,
        children: [
            (0, r.jsx)(Q.D3, {
                onClick: () => i(F.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: a,
                wumpusPosition: D.Rf.GIFT_SELECTION_MODAL,
                className: X.giftSelectionModalContext,
            }),
            (0, r.jsx)(Q.Ls, {
                onClick: () => i(F.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0,
                className: X.giftSelectionModalContext,
            }),
        ],
    });
}
function $(e) {
    let { isEligibleForWishlistSkuPreview: i } = e;
    return (0, r.jsx)(r.Fragment, {
        children: Array.from(
            { length: 12 },
            i
                ? (e, i) => (0, r.jsx)(G.O, { spec: K.Z.SIZE_150 }, `placeholder-${i}`)
                : (e, i) => (0, r.jsx)(L.A, { cardSize: w.Y.MEDIUM_SQUARE }, `placeholder-${i}`),
        ),
    });
}
function q(e) {
    let {
            item: i,
            source: t,
            giftRecipient: a,
            defaultWishlistId: n,
            tooltipConfig: s,
            onWishlistItemClick: o,
            analyticsLocations: l,
        } = e,
        c = (0, r.jsx)(
            b.A,
            {
                item: i,
                profileOwner: a,
                wishlistId: n,
                isOwner: !1,
                cardSize: w.Y.MEDIUM_SQUARE,
                showOverlayButton: !1,
                giftingOrigin: F.vQ.DM_CHANNEL_WISHLIST,
                source: t,
                showIcons: !0,
                heartColor: "white",
                onWishlistItemClick: o,
                analyticsLocations: l,
            },
            i.skuId,
        );
    return s.shouldShow
        ? (0, M.Qc)(s)
            ? (0, r.jsx)(u.m, { text: s.title, position: "top", asContainer: !0, delay: v.Zh, children: c }, i.skuId)
            : (0, r.jsx)(
                  d.u,
                  {
                      title: s.title,
                      body: s.body ?? "",
                      asset: s.renderIcon?.(i),
                      assetSize: v.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: v.Zh,
                      children: c,
                  },
                  i.skuId,
              )
        : c;
}
function Y(e) {
    let {
            isEligibleForWishlistSkuPreview: i,
            displayItems: t,
            giftRecipient: n,
            defaultWishlistId: s,
            tooltipConfigs: o,
            onSeeWishlistClick: l,
            onWishlistItemClick: c,
            totalUnownedWishlistItems: d,
            analyticsLocations: u,
        } = e,
        p = a.useMemo(
            () =>
                new Set(
                    t.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [t],
        ),
        f = (0, _.bG)([W.A, P.A], () => P.A.getChannel(W.A.getChannelId())),
        h = d > t.length ? d - t.length + 1 : void 0,
        I = a.useCallback(() => {
            c?.(), (0, m.s7G)();
        }, [c]);
    return ((0, E.T)({ location: "gift_selection_modal_wishlist_section" }), i)
        ? (0, r.jsx)(r.Fragment, {
              children: t.map((e, i) => {
                  let { item: a, source: o } = e;
                  return (
                      null != a.sku &&
                      (0, r.jsx)(
                          A.dB,
                          {
                              newValue: {
                                  positionInSection: i,
                                  skuId: a.skuId,
                                  itemSource: o === v.uS.WISHLIST ? "organic" : "recommendation",
                                  productLine: a.skuProductLine,
                              },
                              children: (0, r.jsx)(G.A, {
                                  numMoreItems: i === t.length - 1 ? h : void 0,
                                  sku: a.sku,
                                  wishlistId: s,
                                  source: o,
                                  wishlistOwner: n,
                                  hasMultipleSources: p.size > 1,
                                  onOpenWishlist: l,
                                  onClick: I,
                                  analyticsLocations: u,
                                  spec: K.Z.SIZE_150,
                                  guildId: f?.guild_id,
                                  channelId: f?.id,
                              }),
                          },
                          a.skuId,
                      )
                  );
              }),
          })
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, i) => {
                  let { item: t, source: a } = e;
                  return (0, r.jsx)(
                      q,
                      {
                          item: t,
                          source: a,
                          giftRecipient: n,
                          defaultWishlistId: s,
                          tooltipConfig: o[i],
                          onWishlistItemClick: I,
                          analyticsLocations: u,
                      },
                      t.skuId,
                  );
              }),
          });
}
function ee(e) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: t,
            onWishlistItemClick: n,
            displayItems: s,
            defaultWishlistId: _,
            isLoading: d,
            totalUnownedWishlistItems: u,
            analyticsLocations: f,
        } = e,
        C = (0, j.GG)("gift_selection_modal_wishlist_section"),
        g = (0, B.tx)(i),
        x =
            0 === u
                ? V.intl.string(V.t.BCi1gT)
                : u >= 12
                  ? V.intl.formatToPlainString(V.t.Y2RFOQ, { username: g })
                  : V.intl.formatToPlainString(V.t.dIDKgi, { username: g }),
        { analyticsLocations: T } = (0, I.Ay)(...(f ?? []), h.A.GIFT_SELECTION_MODAL_WISHLIST),
        b = (0, M.bc)(s, i),
        w = (0, p.A)(() => (0, o.A)()),
        [L, E] = a.useState(!1),
        v = a.useCallback(
            (e) => {
                e &&
                    !d &&
                    s.length > 0 &&
                    (R.default.track(U.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: s.map((e) => {
                            let { item: i } = e;
                            return i.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                s.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: T,
                    }),
                    E(!0));
            },
            [d, s, i.id, T],
        ),
        N = (0, l.K)(v, void 0, !d && !L),
        H = a.useMemo(
            () =>
                s.some((e) => {
                    let { item: i } = e;
                    return (0, S.bF)(i.sku);
                }),
            [s],
        );
    return (0, r.jsxs)("div", {
        ref: N,
        className: z.jf,
        children: [
            (0, r.jsxs)("div", {
                className: z.nM,
                children: [
                    (0, r.jsx)(c.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: z.Uf,
                        children: x,
                    }),
                    !C &&
                        (0, r.jsx)(m.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: V.intl.string(V.t.y6PSA3),
                            onClick: t,
                        }),
                ],
            }),
            H && (0, r.jsx)(k.A, { location: "gift_selection_modal_wishlist" }),
            (0, r.jsx)("div", {
                className: z.KN,
                children: d
                    ? (0, r.jsx)($, { isEligibleForWishlistSkuPreview: C })
                    : (0, r.jsx)(A.dB, {
                          newValue: {
                              impressionSessionId: w,
                              surface: "gift_selection_modal",
                              wishlistOwnerId: i.id,
                              wishlistId: _,
                              analyticsLocations: T,
                          },
                          children: (0, r.jsx)(Y, {
                              isEligibleForWishlistSkuPreview: C,
                              displayItems: s,
                              giftRecipient: i,
                              defaultWishlistId: _,
                              tooltipConfigs: b,
                              onSeeWishlistClick: t,
                              onWishlistItemClick: n,
                              totalUnownedWishlistItems: u,
                              analyticsLocations: T,
                          }),
                      }),
            }),
        ],
    });
}
function ei(e) {
    let {
            giftRecipient: i,
            onClose: t,
            nitroSection: n,
            analyticsLocations: s,
            displayItems: o,
            wishlistCount: l,
            defaultWishlistId: d,
            isWishlistLoaded: u,
        } = e,
        p = (0, v.tA)({ isGift: !0, giftRecipient: i }),
        h = (u ? l : 0) > 0 ? V.intl.string(V.t["7lZ31J"]) : V.intl.string(V.t.BCi1gT),
        [I, C] = a.useState("Nitro"),
        g = a.useRef(null),
        x = a.useRef(null),
        S = (0, _.bG)([f.A], () => f.A.useReducedMotion),
        k = a.useRef(!1),
        b = a.useCallback(
            (e) => {
                C(e), (k.current = !0);
                let t = g.current;
                null != t &&
                    t.addEventListener(
                        "scrollend",
                        () => {
                            k.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === e
                        ? t?.scrollTo({ top: 0, behavior: S ? "auto" : "smooth" })
                        : x.current?.scrollIntoView({ behavior: S ? "auto" : "smooth", block: "start" }),
                    R.default.track(U.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: i.id,
                        tab_name: e,
                        location_stack: s,
                    });
            },
            [i.id, s, S],
        ),
        w = a.useCallback(() => {
            R.default.track(U.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: i.id,
                wishlist_item_count: l,
                location_stack: s,
            }),
                t(),
                (0, T.openUserProfileModal)({ userId: i.id, tabSection: Z.RP.WISHLIST });
        }, [i.id, l, s, t]);
    return (
        a.useEffect(() => {
            let e = x.current,
                i = g.current;
            if (null == e || null == i) return;
            let t = new IntersectionObserver(
                (e) => {
                    let [i] = e;
                    k.current || C(i.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: i, threshold: 0.5 },
            );
            return t.observe(e), () => t.disconnect();
        }, [p]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                p &&
                    (0, r.jsx)("div", {
                        className: z.CE,
                        children: (0, r.jsxs)(c.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: I,
                            onItemSelect: b,
                            children: [
                                (0, r.jsx)(c.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": V.intl.string(V.t.Ipxkog),
                                    children: V.intl.string(V.t.Ipxkog),
                                }),
                                (0, r.jsx)(c.VQ0.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, r.jsx)(m.HOs, {
                    ref: g,
                    className: z.XG,
                    children: (0, r.jsxs)("div", {
                        className: z.Qs,
                        children: [
                            (0, r.jsx)("div", { className: z.XP, children: n }),
                            p &&
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: z.XP,
                                    children: (0, r.jsx)(ee, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: w,
                                        onWishlistItemClick: t,
                                        displayItems: o,
                                        defaultWishlistId: d,
                                        analyticsLocations: s,
                                        isLoading: !u,
                                        totalUnownedWishlistItems: l,
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
    let { giftRecipient: i, onClose: t, nitroSection: n, analyticsLocations: o } = e,
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: _,
            status: d,
            defaultWishlistId: u,
        } = (0, N.rg)({ userId: i.id, numItems: 12, source: v.B5.USER_PROFILE }),
        m = a.useMemo(
            () =>
                s()(
                    l.map((e) => {
                        let t = e.productLine === U.EZt.COLLECTIBLES ? H.A.fromSKU(e) : O.A.fromSKU(e),
                            r = null != _[e.id] && _[e.id][i.id] === y.j.WISHLIST ? v.uS.WISHLIST : v.uS.POPULAR;
                        return null != t ? { item: t, source: r } : null;
                    }),
                ),
            [l, i.id, _],
        );
    return (0, r.jsx)(ei, {
        giftRecipient: i,
        onClose: t,
        nitroSection: n,
        analyticsLocations: o,
        displayItems: m,
        wishlistCount: c,
        defaultWishlistId: u,
        isWishlistLoaded: "loading" !== d,
    });
}
function er(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: n,
            analyticsLocations: s,
            analyticsLocation: o,
            analyticsObject: l,
            giftMessage: _,
            giftingOrigin: d = F.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: u } = (0, g.P5)(),
        { claimableRewards: p } = (0, C.Pv)(),
        f = null != p && p.length > 0,
        h = a.useCallback(
            (e) => {
                (0, x.A)({
                    isGift: !0,
                    giftRecipient: i,
                    giftingOrigin: d,
                    subscriptionTier: e,
                    analyticsLocations: s ?? [],
                    analyticsLocation: o ?? U.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: l ?? {
                        page: null != i ? U.liQ.DM_CHANNEL : U.liQ.GUILD_CHANNEL,
                        section: U.JJy.CHANNEL_TEXT_AREA,
                        object: U.ZSU.BUTTON_ICON,
                        objectType: U.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: _,
                }),
                    t();
            },
            [i, d, s, o, l, _, t],
        ),
        I = a.useRef(!1);
    a.useEffect(() => {
        I.current ||
            ((I.current = !0),
            R.default.track(U.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: i?.id, location_stack: s }));
    }, [i, s]);
    let S = (0, r.jsx)(J, { onSelectSku: h, priceOptions: u, showPromotionalGiftBanner: f });
    return (0, r.jsx)(c.dWK, {
        transitionState: n,
        size: "lg",
        onClose: t,
        "aria-label": V.intl.string(V.t["wg/30i"]),
        children: (0, r.jsxs)("div", {
            className: z.jE,
            children: [
                (0, r.jsx)(c.rQ0, { title: V.intl.string(V.t["wg/30i"]) }),
                null != i
                    ? (0, r.jsx)(et, { giftRecipient: i, onClose: t, nitroSection: S, analyticsLocations: s })
                    : (0, r.jsx)(m.HOs, {
                          className: z.XG,
                          children: (0, r.jsx)("div", {
                              className: `${z.Qs} ${z.GP}`,
                              children: (0, r.jsx)("div", { className: z.XP, children: S }),
                          }),
                      }),
            ],
        }),
    });
}
function ea(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: a,
        analyticsLocations: n,
        analyticsLocation: s,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: c = F.vQ.DM_CHANNEL,
    } = e;
    return (0, r.jsx)(g.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: F.T7,
        isGift: !0,
        children: (0, r.jsx)(C.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c,
            children: (0, r.jsx)(er, {
                giftRecipient: i,
                onClose: t,
                transitionState: a,
                analyticsLocations: n,
                analyticsLocation: s,
                analyticsObject: o,
                giftMessage: l,
                giftingOrigin: c,
            }),
        }),
    });
}
