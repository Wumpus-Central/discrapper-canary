i.d(t, { default: () => et });
var r = i(627968),
    a = i(64700),
    s = i(791282),
    n = i.n(s),
    l = i(172218),
    o = i(158954),
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
    x = i(657331),
    k = i(18983),
    T = i(798048),
    E = i(834796),
    L = i(178213),
    j = i(332772),
    A = i(594832),
    b = i(631784),
    w = i(872472),
    N = i(721932),
    v = i(310209),
    O = i(878244),
    y = i(46537),
    H = i(734057),
    M = i(309010),
    G = i(954571),
    W = i(427262),
    P = i(407775),
    R = i(672525),
    D = i(788868),
    F = i(652215),
    Q = i(518477),
    B = i(699976),
    U = i(985018),
    Z = i(855135),
    K = i(958237);
function X(e) {
    let { onSelectSku: t, priceOptions: i, showPromotionalGiftBanner: a } = e;
    return (0, r.jsxs)("div", {
        className: K.u6,
        children: [
            (0, r.jsx)(R.D3, {
                onClick: () => t(D.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: a,
                wumpusPosition: P.Rf.GIFT_SELECTION_MODAL,
                className: Z.giftSelectionModalContext,
            }),
            (0, r.jsx)(R.Ls, {
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
    return (0, r.jsx)(r.Fragment, {
        children: Array.from(
            { length: 12 },
            t
                ? (e, t) => (0, r.jsx)(O.O, { spec: B.Z.SIZE_150 }, `placeholder-${t}`)
                : (e, t) => (0, r.jsx)(E.A, { cardSize: T.Y.MEDIUM_SQUARE }, `placeholder-${t}`),
        ),
    });
}
function V(e) {
    let {
            item: t,
            source: i,
            giftRecipient: a,
            defaultWishlistId: s,
            tooltipConfig: n,
            onWishlistItemClick: l,
            analyticsLocations: o,
        } = e,
        d = (0, r.jsx)(
            k.A,
            {
                item: t,
                profileOwner: a,
                wishlistId: s,
                isOwner: !1,
                cardSize: T.Y.MEDIUM_SQUARE,
                showOverlayButton: !1,
                giftingOrigin: D.vQ.DM_CHANNEL_WISHLIST,
                source: i,
                showIcons: !0,
                heartColor: "white",
                onWishlistItemClick: l,
                analyticsLocations: o,
            },
            t.skuId,
        );
    return n.shouldShow
        ? (0, y.Qc)(n)
            ? (0, r.jsx)(_.m, { text: n.title, position: "top", asContainer: !0, delay: A.Zh, children: d }, t.skuId)
            : (0, r.jsx)(
                  c.u,
                  {
                      title: n.title,
                      body: n.body ?? "",
                      asset: n.renderIcon?.(t),
                      assetSize: A.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: A.Zh,
                      children: d,
                  },
                  t.skuId,
              )
        : d;
}
function J(e) {
    let {
            isEligibleForWishlistSkuPreview: t,
            displayItems: i,
            giftRecipient: s,
            defaultWishlistId: n,
            tooltipConfigs: l,
            onSeeWishlistClick: o,
            onWishlistItemClick: c,
            totalUnownedWishlistItems: _,
            analyticsLocations: f,
        } = e,
        m = a.useMemo(
            () =>
                new Set(
                    i.map((e) => {
                        let { source: t } = e;
                        return t;
                    }),
                ),
            [i],
        ),
        p = (0, d.bG)([M.A, H.A], () => H.A.getChannel(M.A.getChannelId())),
        h = _ > i.length ? _ - i.length + 1 : void 0,
        I = a.useCallback(() => {
            c?.(), (0, u.s7G)();
        }, [c]);
    return ((0, j.T)({ location: "gift_selection_modal_wishlist_section" }), t)
        ? (0, r.jsx)(r.Fragment, {
              children: i.map((e, t) => {
                  let { item: a, source: l } = e;
                  return (
                      null != a.sku &&
                      (0, r.jsx)(
                          O.A,
                          {
                              numMoreItems: t === i.length - 1 ? h : void 0,
                              sku: a.sku,
                              wishlistId: n,
                              source: l,
                              wishlistOwner: s,
                              hasMultipleSources: m.size > 1,
                              onOpenWishlist: o,
                              onClick: I,
                              analyticsLocations: f,
                              spec: B.Z.SIZE_150,
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
                      V,
                      {
                          item: i,
                          source: a,
                          giftRecipient: s,
                          defaultWishlistId: n,
                          tooltipConfig: l[t],
                          onWishlistItemClick: I,
                          analyticsLocations: f,
                      },
                      i.skuId,
                  );
              }),
          });
}
function $(e) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: i,
            onWishlistItemClick: s,
            displayItems: n,
            defaultWishlistId: d,
            isLoading: c,
            totalUnownedWishlistItems: _,
            analyticsLocations: f,
        } = e,
        h = (0, L.GG)("gift_selection_modal_wishlist_section"),
        I = (0, W.tx)(t),
        C =
            0 === _
                ? U.intl.string(U.t.BCi1gT)
                : _ >= 12
                  ? U.intl.formatToPlainString(U.t.Y2RFOQ, { username: I })
                  : U.intl.formatToPlainString(U.t.dIDKgi, { username: I }),
        { analyticsLocations: x } = (0, p.Ay)(...(f ?? []), m.A.GIFT_SELECTION_MODAL_WISHLIST),
        k = (0, y.bc)(n, t),
        [T, E] = a.useState(!1),
        j = a.useCallback(
            (e) => {
                e &&
                    !c &&
                    n.length > 0 &&
                    (G.default.track(F.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
                        gift_recipient_id: t.id,
                        sku_ids: n.map((e) => {
                            let { item: t } = e;
                            return t.skuId;
                        }),
                        product_lines: Array.from(
                            new Set(
                                n.map((e) => {
                                    let { item: t } = e;
                                    return t.skuProductLine;
                                }),
                            ),
                        ),
                        location_stack: x,
                    }),
                    E(!0));
            },
            [c, n, t.id, x],
        ),
        A = (0, l.K)(j, void 0, !c && !T),
        b = a.useMemo(
            () =>
                n.some((e) => {
                    let { item: t } = e;
                    return (0, g.bF)(t.sku);
                }),
            [n],
        );
    return (0, r.jsxs)("div", {
        ref: A,
        className: K.jf,
        children: [
            (0, r.jsxs)("div", {
                className: K.nM,
                children: [
                    (0, r.jsx)(o.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: K.Uf,
                        children: C,
                    }),
                    !h &&
                        (0, r.jsx)(u.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: U.intl.string(U.t.y6PSA3),
                            onClick: i,
                        }),
                ],
            }),
            b && (0, r.jsx)(S.A, { location: "gift_selection_modal_wishlist" }),
            (0, r.jsx)("div", {
                className: K.KN,
                children: c
                    ? (0, r.jsx)(z, { isEligibleForWishlistSkuPreview: h })
                    : (0, r.jsx)(J, {
                          isEligibleForWishlistSkuPreview: h,
                          displayItems: n,
                          giftRecipient: t,
                          defaultWishlistId: d,
                          tooltipConfigs: k,
                          onSeeWishlistClick: i,
                          onWishlistItemClick: s,
                          totalUnownedWishlistItems: _,
                          analyticsLocations: x,
                      }),
            }),
        ],
    });
}
function q(e) {
    let {
            giftRecipient: t,
            onClose: i,
            nitroSection: s,
            analyticsLocations: n,
            displayItems: l,
            wishlistCount: c,
            defaultWishlistId: _,
            isWishlistLoaded: m,
        } = e,
        p = (0, A.tA)({ isGift: !0, giftRecipient: t }),
        h = (m ? c : 0) > 0 ? U.intl.string(U.t["7lZ31J"]) : U.intl.string(U.t.BCi1gT),
        [I, C] = a.useState("Nitro"),
        g = a.useRef(null),
        S = a.useRef(null),
        k = (0, d.bG)([f.A], () => f.A.useReducedMotion),
        T = a.useRef(!1),
        E = a.useCallback(
            (e) => {
                C(e), (T.current = !0);
                let i = g.current;
                null != i &&
                    i.addEventListener(
                        "scrollend",
                        () => {
                            T.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === e
                        ? i?.scrollTo({ top: 0, behavior: k ? "auto" : "smooth" })
                        : S.current?.scrollIntoView({ behavior: k ? "auto" : "smooth", block: "start" }),
                    G.default.track(F.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: e,
                        location_stack: n,
                    });
            },
            [t.id, n, k],
        ),
        L = a.useCallback(() => {
            G.default.track(F.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: c,
                location_stack: n,
            }),
                i(),
                (0, x.openUserProfileModal)({ userId: t.id, tabSection: Q.RP.WISHLIST });
        }, [t.id, c, n, i]);
    return (
        a.useEffect(() => {
            let e = S.current,
                t = g.current;
            if (null == e || null == t) return;
            let i = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    T.current || C(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return i.observe(e), () => i.disconnect();
        }, [p]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                p &&
                    (0, r.jsx)("div", {
                        className: K.CE,
                        children: (0, r.jsxs)(o.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: I,
                            onItemSelect: E,
                            children: [
                                (0, r.jsx)(o.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": U.intl.string(U.t.Ipxkog),
                                    children: U.intl.string(U.t.Ipxkog),
                                }),
                                (0, r.jsx)(o.VQ0.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, r.jsx)(u.HOs, {
                    ref: g,
                    className: K.XG,
                    children: (0, r.jsxs)("div", {
                        className: K.Qs,
                        children: [
                            (0, r.jsx)("div", { className: K.XP, children: s }),
                            p &&
                                (0, r.jsx)("div", {
                                    ref: S,
                                    className: K.XP,
                                    children: (0, r.jsx)($, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: L,
                                        onWishlistItemClick: i,
                                        displayItems: l,
                                        defaultWishlistId: _,
                                        analyticsLocations: n,
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
function Y(e) {
    let { giftRecipient: t, onClose: i, nitroSection: s, analyticsLocations: l } = e,
        {
            wishlistAndRecommendations: o,
            totalUnownedWishlistItemCount: d,
            skusToUserAndReason: c,
            status: _,
            defaultWishlistId: u,
        } = (0, b.rg)({ userId: t.id, numItems: 12, source: A.B5.USER_PROFILE }),
        f = a.useMemo(
            () =>
                n()(
                    o.map((e) => {
                        let i = e.productLine === F.EZt.COLLECTIBLES ? w.A.fromSKU(e) : N.A.fromSKU(e),
                            r = null != c[e.id] && c[e.id][t.id] === v.j.WISHLIST ? A.uS.WISHLIST : A.uS.POPULAR;
                        return null != i ? { item: i, source: r } : null;
                    }),
                ),
            [o, t.id, c],
        );
    return (0, r.jsx)(q, {
        giftRecipient: t,
        onClose: i,
        nitroSection: s,
        analyticsLocations: l,
        displayItems: f,
        wishlistCount: d,
        defaultWishlistId: u,
        isWishlistLoaded: "loading" !== _,
    });
}
function ee(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: s,
            analyticsLocations: n,
            analyticsLocation: l,
            analyticsObject: d,
            giftMessage: c,
            giftingOrigin: _ = D.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: f } = (0, I.P5)(),
        { claimableRewards: m } = (0, h.Pv)(),
        p = null != m && m.length > 0,
        g = a.useCallback(
            (e) => {
                (0, C.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: _,
                    subscriptionTier: e,
                    analyticsLocations: n ?? [],
                    analyticsLocation: l ?? F.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: d ?? {
                        page: null != t ? F.liQ.DM_CHANNEL : F.liQ.GUILD_CHANNEL,
                        section: F.JJy.CHANNEL_TEXT_AREA,
                        object: F.ZSU.BUTTON_ICON,
                        objectType: F.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: c,
                }),
                    i();
            },
            [t, _, n, l, d, c, i],
        ),
        S = a.useRef(!1);
    a.useEffect(() => {
        S.current ||
            ((S.current = !0),
            G.default.track(F.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: n }));
    }, [t, n]);
    let x = (0, r.jsx)(X, { onSelectSku: g, priceOptions: f, showPromotionalGiftBanner: p });
    return (0, r.jsx)(o.dWK, {
        transitionState: s,
        size: "lg",
        onClose: i,
        "aria-label": U.intl.string(U.t["wg/30i"]),
        children: (0, r.jsxs)("div", {
            className: K.jE,
            children: [
                (0, r.jsx)(o.rQ0, { title: U.intl.string(U.t["wg/30i"]) }),
                null != t
                    ? (0, r.jsx)(Y, { giftRecipient: t, onClose: i, nitroSection: x, analyticsLocations: n })
                    : (0, r.jsx)(u.HOs, {
                          className: K.XG,
                          children: (0, r.jsx)("div", {
                              className: `${K.Qs} ${K.GP}`,
                              children: (0, r.jsx)("div", { className: K.XP, children: x }),
                          }),
                      }),
            ],
        }),
    });
}
function et(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: a,
        analyticsLocations: s,
        analyticsLocation: n,
        analyticsObject: l,
        giftMessage: o,
        giftingOrigin: d = D.vQ.DM_CHANNEL,
    } = e;
    return (0, r.jsx)(I.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: D.T7,
        isGift: !0,
        children: (0, r.jsx)(h.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d,
            children: (0, r.jsx)(ee, {
                giftRecipient: t,
                onClose: i,
                transitionState: a,
                analyticsLocations: s,
                analyticsLocation: n,
                analyticsObject: l,
                giftMessage: o,
                giftingOrigin: d,
            }),
        }),
    });
}
