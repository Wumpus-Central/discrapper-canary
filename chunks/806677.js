t.d(i, { default: () => ei });
var a = t(627968),
    r = t(64700),
    n = t(791282),
    s = t.n(n),
    o = t(172218),
    l = t(158954),
    c = t(311907),
    d = t(459192),
    _ = t(990078),
    u = t(397927),
    f = t(775602),
    m = t(793574),
    p = t(688810),
    h = t(937008),
    I = t(156312),
    C = t(532794),
    g = t(871123),
    x = t(177569),
    S = t(657331),
    T = t(18983),
    k = t(798048),
    w = t(834796),
    L = t(178213),
    A = t(332772),
    E = t(594832),
    b = t(631784),
    j = t(872472),
    N = t(721932),
    v = t(310209),
    H = t(878244),
    O = t(46537),
    y = t(734057),
    G = t(309010),
    M = t(954571),
    P = t(427262),
    W = t(407775),
    R = t(672525),
    B = t(788868),
    D = t(652215),
    Q = t(518477),
    F = t(699976),
    U = t(985018),
    Z = t(10273),
    K = t(198267);
function X(e) {
    let { onSelectSku: i, priceOptions: t, showPromotionalGiftBanner: r } = e;
    return (0, a.jsxs)("div", {
        className: K.u6,
        children: [
            (0, a.jsx)(R.D3, {
                onClick: () => i(B.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: r,
                wumpusPosition: W.Rf.GIFT_SELECTION_MODAL,
                className: Z.giftSelectionModalContext,
            }),
            (0, a.jsx)(R.Ls, {
                onClick: () => i(B.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0,
                className: Z.giftSelectionModalContext,
            }),
        ],
    });
}
function z(e) {
    let { isEligibleForWishlistSkuPreview: i } = e;
    return (0, a.jsx)(a.Fragment, {
        children: Array.from(
            { length: 12 },
            i
                ? (e, i) => (0, a.jsx)(H.O, { spec: F.Z.SIZE_150 }, `placeholder-${i}`)
                : (e, i) => (0, a.jsx)(w.A, { cardSize: k.Y.MEDIUM_SQUARE }, `placeholder-${i}`),
        ),
    });
}
function V(e) {
    let {
            item: i,
            source: t,
            giftRecipient: r,
            defaultWishlistId: n,
            tooltipConfig: s,
            onWishlistItemClick: o,
            analyticsLocations: l,
        } = e,
        c = (0, a.jsx)(
            T.A,
            {
                item: i,
                profileOwner: r,
                wishlistId: n,
                isOwner: !1,
                cardSize: k.Y.MEDIUM_SQUARE,
                showOverlayButton: !1,
                giftingOrigin: B.vQ.DM_CHANNEL_WISHLIST,
                source: t,
                showIcons: !0,
                heartColor: "white",
                onWishlistItemClick: o,
                analyticsLocations: l,
            },
            i.skuId,
        );
    return s.shouldShow
        ? (0, O.Qc)(s)
            ? (0, a.jsx)(_.m, { text: s.title, position: "top", asContainer: !0, delay: E.Zh, children: c }, i.skuId)
            : (0, a.jsx)(
                  d.u,
                  {
                      title: s.title,
                      body: s.body ?? "",
                      asset: s.renderIcon?.(i),
                      assetSize: E.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: E.Zh,
                      children: c,
                  },
                  i.skuId,
              )
        : c;
}
function J(e) {
    let {
            isEligibleForWishlistSkuPreview: i,
            displayItems: t,
            giftRecipient: n,
            defaultWishlistId: s,
            tooltipConfigs: o,
            onSeeWishlistClick: l,
            onWishlistItemClick: d,
            totalUnownedWishlistItems: _,
            analyticsLocations: f,
        } = e,
        m = r.useMemo(
            () =>
                new Set(
                    t.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [t],
        ),
        p = (0, c.bG)([G.A, y.A], () => y.A.getChannel(G.A.getChannelId())),
        h = _ > t.length ? _ - t.length + 1 : void 0,
        I = r.useCallback(() => {
            d?.(), (0, u.s7G)();
        }, [d]);
    return ((0, A.T)({ location: "gift_selection_modal_wishlist_section" }), i)
        ? (0, a.jsx)(a.Fragment, {
              children: t.map((e, i) => {
                  let { item: r, source: o } = e;
                  return (
                      null != r.sku &&
                      (0, a.jsx)(
                          H.A,
                          {
                              numMoreItems: i === t.length - 1 ? h : void 0,
                              sku: r.sku,
                              wishlistId: s,
                              source: o,
                              wishlistOwner: n,
                              hasMultipleSources: m.size > 1,
                              onOpenWishlist: l,
                              onClick: I,
                              analyticsLocations: f,
                              spec: F.Z.SIZE_150,
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
                      V,
                      {
                          item: t,
                          source: r,
                          giftRecipient: n,
                          defaultWishlistId: s,
                          tooltipConfig: o[i],
                          onWishlistItemClick: I,
                          analyticsLocations: f,
                      },
                      t.skuId,
                  );
              }),
          });
}
function $(e) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: t,
            onWishlistItemClick: n,
            displayItems: s,
            defaultWishlistId: c,
            isLoading: d,
            totalUnownedWishlistItems: _,
            analyticsLocations: f,
        } = e,
        h = (0, L.GG)("gift_selection_modal_wishlist_section"),
        I = (0, P.tx)(i),
        C =
            0 === _
                ? U.intl.string(U.t.BCi1gT)
                : _ >= 12
                  ? U.intl.formatToPlainString(U.t.Y2RFOQ, { username: I })
                  : U.intl.formatToPlainString(U.t.dIDKgi, { username: I }),
        { analyticsLocations: S } = (0, p.Ay)(...(f ?? []), m.A.GIFT_SELECTION_MODAL_WISHLIST),
        T = (0, O.bc)(s, i),
        [k, w] = r.useState(!1),
        A = r.useCallback(
            (e) => {
                e &&
                    !d &&
                    s.length > 0 &&
                    (M.default.track(D.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
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
                        location_stack: S,
                    }),
                    w(!0));
            },
            [d, s, i.id, S],
        ),
        E = (0, o.K)(A, void 0, !d && !k),
        b = r.useMemo(
            () =>
                s.some((e) => {
                    let { item: i } = e;
                    return (0, g.bF)(i.sku);
                }),
            [s],
        );
    return (0, a.jsxs)("div", {
        ref: E,
        className: K.jf,
        children: [
            (0, a.jsxs)("div", {
                className: K.nM,
                children: [
                    (0, a.jsx)(l.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: K.Uf,
                        children: C,
                    }),
                    !h &&
                        (0, a.jsx)(u.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: U.intl.string(U.t.y6PSA3),
                            onClick: t,
                        }),
                ],
            }),
            b && (0, a.jsx)(x.A, { location: "gift_selection_modal_wishlist" }),
            (0, a.jsx)("div", {
                className: K.KN,
                children: d
                    ? (0, a.jsx)(z, { isEligibleForWishlistSkuPreview: h })
                    : (0, a.jsx)(J, {
                          isEligibleForWishlistSkuPreview: h,
                          displayItems: s,
                          giftRecipient: i,
                          defaultWishlistId: c,
                          tooltipConfigs: T,
                          onSeeWishlistClick: t,
                          onWishlistItemClick: n,
                          totalUnownedWishlistItems: _,
                          analyticsLocations: S,
                      }),
            }),
        ],
    });
}
function q(e) {
    let {
            giftRecipient: i,
            onClose: t,
            nitroSection: n,
            analyticsLocations: s,
            displayItems: o,
            wishlistCount: d,
            defaultWishlistId: _,
            isWishlistLoaded: m,
        } = e,
        p = (0, E.tA)({ isGift: !0, giftRecipient: i }),
        h = (m ? d : 0) > 0 ? U.intl.string(U.t["7lZ31J"]) : U.intl.string(U.t.BCi1gT),
        [I, C] = r.useState("Nitro"),
        g = r.useRef(null),
        x = r.useRef(null),
        T = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        k = r.useRef(!1),
        w = r.useCallback(
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
                        ? t?.scrollTo({ top: 0, behavior: T ? "auto" : "smooth" })
                        : x.current?.scrollIntoView({ behavior: T ? "auto" : "smooth", block: "start" }),
                    M.default.track(D.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: i.id,
                        tab_name: e,
                        location_stack: s,
                    });
            },
            [i.id, s, T],
        ),
        L = r.useCallback(() => {
            M.default.track(D.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: i.id,
                wishlist_item_count: d,
                location_stack: s,
            }),
                t(),
                (0, S.openUserProfileModal)({ userId: i.id, tabSection: Q.RP.WISHLIST });
        }, [i.id, d, s, t]);
    return (
        r.useEffect(() => {
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
        (0, a.jsxs)(a.Fragment, {
            children: [
                p &&
                    (0, a.jsx)("div", {
                        className: K.CE,
                        children: (0, a.jsxs)(l.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: I,
                            onItemSelect: w,
                            children: [
                                (0, a.jsx)(l.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": U.intl.string(U.t.Ipxkog),
                                    children: U.intl.string(U.t.Ipxkog),
                                }),
                                (0, a.jsx)(l.VQ0.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, a.jsx)(u.HOs, {
                    ref: g,
                    className: K.XG,
                    children: (0, a.jsxs)("div", {
                        className: K.Qs,
                        children: [
                            (0, a.jsx)("div", { className: K.XP, children: n }),
                            p &&
                                (0, a.jsx)("div", {
                                    ref: x,
                                    className: K.XP,
                                    children: (0, a.jsx)($, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: L,
                                        onWishlistItemClick: t,
                                        displayItems: o,
                                        defaultWishlistId: _,
                                        analyticsLocations: s,
                                        isLoading: !m,
                                        totalUnownedWishlistItems: d,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function Y(e) {
    let { giftRecipient: i, onClose: t, nitroSection: n, analyticsLocations: o } = e,
        {
            wishlistAndRecommendations: l,
            totalUnownedWishlistItemCount: c,
            skusToUserAndReason: d,
            status: _,
            defaultWishlistId: u,
        } = (0, b.rg)({ userId: i.id, numItems: 12, source: E.B5.USER_PROFILE }),
        f = r.useMemo(
            () =>
                s()(
                    l.map((e) => {
                        let t = e.productLine === D.EZt.COLLECTIBLES ? j.A.fromSKU(e) : N.A.fromSKU(e),
                            a = null != d[e.id] && d[e.id][i.id] === v.j.WISHLIST ? E.uS.WISHLIST : E.uS.POPULAR;
                        return null != t ? { item: t, source: a } : null;
                    }),
                ),
            [l, i.id, d],
        );
    return (0, a.jsx)(q, {
        giftRecipient: i,
        onClose: t,
        nitroSection: n,
        analyticsLocations: o,
        displayItems: f,
        wishlistCount: c,
        defaultWishlistId: u,
        isWishlistLoaded: "loading" !== _,
    });
}
function ee(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: n,
            analyticsLocations: s,
            analyticsLocation: o,
            analyticsObject: c,
            giftMessage: d,
            giftingOrigin: _ = B.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: f } = (0, I.P5)(),
        { claimableRewards: m } = (0, h.Pv)(),
        p = null != m && m.length > 0,
        g = r.useCallback(
            (e) => {
                (0, C.A)({
                    isGift: !0,
                    giftRecipient: i,
                    giftingOrigin: _,
                    subscriptionTier: e,
                    analyticsLocations: s ?? [],
                    analyticsLocation: o ?? D.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: c ?? {
                        page: null != i ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
                        section: D.JJy.CHANNEL_TEXT_AREA,
                        object: D.ZSU.BUTTON_ICON,
                        objectType: D.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: d,
                }),
                    t();
            },
            [i, _, s, o, c, d, t],
        ),
        x = r.useRef(!1);
    r.useEffect(() => {
        x.current ||
            ((x.current = !0),
            M.default.track(D.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: i?.id, location_stack: s }));
    }, [i, s]);
    let S = (0, a.jsx)(X, { onSelectSku: g, priceOptions: f, showPromotionalGiftBanner: p });
    return (0, a.jsx)(l.dWK, {
        transitionState: n,
        size: "lg",
        onClose: t,
        "aria-label": U.intl.string(U.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: K.jE,
            children: [
                (0, a.jsx)(l.rQ0, { title: U.intl.string(U.t["wg/30i"]) }),
                null != i
                    ? (0, a.jsx)(Y, { giftRecipient: i, onClose: t, nitroSection: S, analyticsLocations: s })
                    : (0, a.jsx)(u.HOs, {
                          className: K.XG,
                          children: (0, a.jsx)("div", {
                              className: `${K.Qs} ${K.GP}`,
                              children: (0, a.jsx)("div", { className: K.XP, children: S }),
                          }),
                      }),
            ],
        }),
    });
}
function ei(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: r,
        analyticsLocations: n,
        analyticsLocation: s,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: c = B.vQ.DM_CHANNEL,
    } = e;
    return (0, a.jsx)(I.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: B.T7,
        isGift: !0,
        children: (0, a.jsx)(h.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c,
            children: (0, a.jsx)(ee, {
                giftRecipient: i,
                onClose: t,
                transitionState: r,
                analyticsLocations: n,
                analyticsLocation: s,
                analyticsObject: o,
                giftMessage: l,
                giftingOrigin: c,
            }),
        }),
    });
}
