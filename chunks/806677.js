i.d(t, { default: () => ei });
var r = i(627968),
    s = i(64700),
    a = i(791282),
    n = i.n(a),
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
    x = i(622543),
    k = i(657331),
    E = i(18983),
    L = i(798048),
    j = i(834796),
    A = i(178213),
    T = i(332772),
    b = i(594832),
    w = i(631784),
    N = i(872472),
    v = i(721932),
    O = i(310209),
    y = i(878244),
    H = i(46537),
    M = i(734057),
    G = i(309010),
    W = i(954571),
    P = i(427262),
    R = i(407775),
    D = i(672525),
    F = i(788868),
    Q = i(652215),
    U = i(518477),
    B = i(699976),
    Z = i(985018),
    K = i(855135),
    X = i(958237);
function z(e) {
    let { onSelectSku: t, priceOptions: i, showPromotionalGiftBanner: s } = e;
    return (0, r.jsxs)("div", {
        className: X.u6,
        children: [
            (0, r.jsx)(D.D3, {
                onClick: () => t(F.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: s,
                wumpusPosition: R.Rf.GIFT_SELECTION_MODAL,
                className: K.giftSelectionModalContext,
            }),
            (0, r.jsx)(D.Ls, {
                onClick: () => t(F.pe.TIER_0),
                isGift: !0,
                priceOptions: i,
                removeTopMargin: !0,
                className: K.giftSelectionModalContext,
            }),
        ],
    });
}
function V(e) {
    let { isEligibleForWishlistSkuPreview: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: Array.from(
            { length: 12 },
            t
                ? (e, t) => (0, r.jsx)(y.O, { spec: B.Z.SIZE_150 }, `placeholder-${t}`)
                : (e, t) => (0, r.jsx)(j.A, { cardSize: L.Y.MEDIUM_SQUARE }, `placeholder-${t}`),
        ),
    });
}
function J(e) {
    let {
            item: t,
            source: i,
            giftRecipient: s,
            defaultWishlistId: a,
            tooltipConfig: n,
            onWishlistItemClick: l,
            analyticsLocations: o,
        } = e,
        d = (0, r.jsx)(
            E.A,
            {
                item: t,
                profileOwner: s,
                wishlistId: a,
                isOwner: !1,
                cardSize: L.Y.MEDIUM_SQUARE,
                showOverlayButton: !1,
                giftingOrigin: F.vQ.DM_CHANNEL_WISHLIST,
                source: i,
                showIcons: !0,
                heartColor: "white",
                onWishlistItemClick: l,
                analyticsLocations: o,
            },
            t.skuId,
        );
    return n.shouldShow
        ? (0, H.Qc)(n)
            ? (0, r.jsx)(_.m, { text: n.title, position: "top", asContainer: !0, delay: b.Zh, children: d }, t.skuId)
            : (0, r.jsx)(
                  c.u,
                  {
                      title: n.title,
                      body: n.body ?? "",
                      asset: n.renderIcon?.(t),
                      assetSize: b.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: b.Zh,
                      children: d,
                  },
                  t.skuId,
              )
        : d;
}
function $(e) {
    let {
            isEligibleForWishlistSkuPreview: t,
            displayItems: i,
            giftRecipient: a,
            defaultWishlistId: n,
            tooltipConfigs: l,
            onSeeWishlistClick: o,
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
        m = (0, d.bG)([G.A, M.A], () => M.A.getChannel(G.A.getChannelId())),
        p = _ > i.length ? _ - i.length + 1 : void 0;
    return ((0, T.T)({ location: "gift_selection_modal_wishlist_section" }), t)
        ? (0, r.jsx)(r.Fragment, {
              children: i.map((e, t) => {
                  let { item: s, source: l } = e;
                  return (
                      null != s.sku &&
                      (0, r.jsx)(
                          y.A,
                          {
                              numMoreItems: t === i.length - 1 ? p : void 0,
                              sku: s.sku,
                              wishlistId: n,
                              source: l,
                              wishlistOwner: a,
                              hasMultipleSources: f.size > 1,
                              onOpenWishlist: o,
                              onClick: c,
                              analyticsLocations: u,
                              spec: B.Z.SIZE_150,
                              guildId: m?.guild_id,
                              channelId: m?.id,
                          },
                          s.skuId,
                      )
                  );
              }),
          })
        : (0, r.jsx)(r.Fragment, {
              children: i.map((e, t) => {
                  let { item: i, source: s } = e;
                  return (0, r.jsx)(
                      J,
                      {
                          item: i,
                          source: s,
                          giftRecipient: a,
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
function q(e) {
    let {
            giftRecipient: t,
            onSeeWishlistClick: i,
            onWishlistItemClick: a,
            displayItems: n,
            defaultWishlistId: d,
            isLoading: c,
            totalUnownedWishlistItems: _,
            analyticsLocations: f,
        } = e,
        h = (0, A.GG)("gift_selection_modal_wishlist_section"),
        I = (0, P.tx)(t),
        C = Z.intl.formatToPlainString(_ >= 12 ? Z.t.Y2RFOQ : Z.t.dIDKgi, { username: I }),
        { analyticsLocations: x } = (0, p.Ay)(...(f ?? []), m.A.GIFT_SELECTION_MODAL_WISHLIST),
        k = (0, H.bc)(n, t),
        [E, L] = s.useState(!1),
        j = s.useCallback(
            (e) => {
                e &&
                    !c &&
                    n.length > 0 &&
                    (W.default.track(Q.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
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
                    L(!0));
            },
            [c, n, t.id, x],
        ),
        T = (0, l.K)(j, void 0, !c && !E),
        b = s.useMemo(
            () =>
                n.some((e) => {
                    let { item: t } = e;
                    return (0, g.bF)(t.sku);
                }),
            [n],
        );
    return (0, r.jsxs)("div", {
        ref: T,
        className: X.jf,
        children: [
            (0, r.jsxs)("div", {
                className: X.nM,
                children: [
                    (0, r.jsx)(o.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: X.Uf,
                        children: C,
                    }),
                    !h &&
                        (0, r.jsx)(u.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: Z.intl.string(Z.t.y6PSA3),
                            onClick: i,
                        }),
                ],
            }),
            b && (0, r.jsx)(S.A, { location: "gift_selection_modal_wishlist" }),
            (0, r.jsx)("div", {
                className: X.KN,
                children: c
                    ? (0, r.jsx)(V, { isEligibleForWishlistSkuPreview: h })
                    : (0, r.jsx)($, {
                          isEligibleForWishlistSkuPreview: h,
                          displayItems: n,
                          giftRecipient: t,
                          defaultWishlistId: d,
                          tooltipConfigs: k,
                          onSeeWishlistClick: i,
                          onWishlistItemClick: a,
                          totalUnownedWishlistItems: _,
                          analyticsLocations: x,
                      }),
            }),
        ],
    });
}
function Y(e) {
    let {
            giftRecipient: t,
            onClose: i,
            nitroSection: a,
            analyticsLocations: n,
            displayItems: l,
            wishlistCount: c,
            defaultWishlistId: _,
            isWishlistLoaded: m,
        } = e,
        p = null != (0, d.bG)([x.A], () => x.A.getFirstWishlistId(t.id)) && (!m || c > 0),
        h = Z.intl.string(Z.t["7lZ31J"]),
        [I, C] = s.useState("Nitro"),
        g = s.useRef(null),
        S = s.useRef(null),
        E = (0, d.bG)([f.A], () => f.A.useReducedMotion),
        L = s.useRef(!1),
        j = s.useCallback(
            (e) => {
                C(e), (L.current = !0);
                let i = g.current;
                null != i &&
                    i.addEventListener(
                        "scrollend",
                        () => {
                            L.current = !1;
                        },
                        { once: !0 },
                    ),
                    "Nitro" === e
                        ? i?.scrollTo({ top: 0, behavior: E ? "auto" : "smooth" })
                        : S.current?.scrollIntoView({ behavior: E ? "auto" : "smooth", block: "start" }),
                    W.default.track(Q.HAw.GIFT_SELECTION_TAB_SELECTED, {
                        gift_recipient_id: t.id,
                        tab_name: e,
                        location_stack: n,
                    });
            },
            [t.id, n, E],
        ),
        A = s.useCallback(() => {
            W.default.track(Q.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: c,
                location_stack: n,
            }),
                i(),
                (0, k.openUserProfileModal)({ userId: t.id, tabSection: U.RP.WISHLIST });
        }, [t.id, c, n, i]);
    return (
        s.useEffect(() => {
            let e = S.current,
                t = g.current;
            if (null == e || null == t) return;
            let i = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    L.current || C(t.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: t, threshold: 0.5 },
            );
            return i.observe(e), () => i.disconnect();
        }, [p]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                p &&
                    (0, r.jsx)("div", {
                        className: X.CE,
                        children: (0, r.jsxs)(o.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: I,
                            onItemSelect: j,
                            children: [
                                (0, r.jsx)(o.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": Z.intl.string(Z.t.Ipxkog),
                                    children: Z.intl.string(Z.t.Ipxkog),
                                }),
                                (0, r.jsx)(o.VQ0.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, r.jsx)(u.HOs, {
                    ref: g,
                    className: X.XG,
                    children: (0, r.jsxs)("div", {
                        className: X.Qs,
                        children: [
                            (0, r.jsx)("div", { className: X.XP, children: a }),
                            p &&
                                (0, r.jsx)("div", {
                                    ref: S,
                                    className: X.XP,
                                    children: (0, r.jsx)(q, {
                                        giftRecipient: t,
                                        onSeeWishlistClick: A,
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
function ee(e) {
    let { giftRecipient: t, onClose: i, nitroSection: a, analyticsLocations: l } = e,
        {
            wishlistAndRecommendations: o,
            totalUnownedWishlistItemCount: d,
            skusToUserAndReason: c,
            status: _,
            defaultWishlistId: u,
        } = (0, w.r)({ userId: t.id, numItems: 12, source: b.B5.USER_PROFILE }),
        f = s.useMemo(
            () =>
                n()(
                    o.map((e) => {
                        let i = e.productLine === Q.EZt.COLLECTIBLES ? N.A.fromSKU(e) : v.A.fromSKU(e),
                            r = null != c[e.id] && c[e.id][t.id] === O.j.WISHLIST ? b.uS.WISHLIST : b.uS.POPULAR;
                        return null != i ? { item: i, source: r } : null;
                    }),
                ),
            [o, t.id, c],
        );
    return (0, r.jsx)(Y, {
        giftRecipient: t,
        onClose: i,
        nitroSection: a,
        analyticsLocations: l,
        displayItems: f,
        wishlistCount: d,
        defaultWishlistId: u,
        isWishlistLoaded: "loading" !== _,
    });
}
function et(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: a,
            analyticsLocations: n,
            analyticsLocation: l,
            analyticsObject: d,
            giftMessage: c,
            giftingOrigin: _ = F.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: f } = (0, I.P5)(),
        { claimableRewards: m } = (0, h.Pv)(),
        p = null != m && m.length > 0,
        g = s.useCallback(
            (e) => {
                (0, C.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: _,
                    subscriptionTier: e,
                    analyticsLocations: n ?? [],
                    analyticsLocation: l ?? Q.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: d ?? {
                        page: null != t ? Q.liQ.DM_CHANNEL : Q.liQ.GUILD_CHANNEL,
                        section: Q.JJy.CHANNEL_TEXT_AREA,
                        object: Q.ZSU.BUTTON_ICON,
                        objectType: Q.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: c,
                }),
                    i();
            },
            [t, _, n, l, d, c, i],
        ),
        S = s.useRef(!1);
    s.useEffect(() => {
        S.current ||
            ((S.current = !0),
            W.default.track(Q.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: t?.id, location_stack: n }));
    }, [t, n]);
    let x = (0, r.jsx)(z, { onSelectSku: g, priceOptions: f, showPromotionalGiftBanner: p });
    return (0, r.jsx)(o.dWK, {
        transitionState: a,
        size: "lg",
        onClose: i,
        "aria-label": Z.intl.string(Z.t["wg/30i"]),
        children: (0, r.jsxs)("div", {
            className: X.jE,
            children: [
                (0, r.jsx)(o.rQ0, { title: Z.intl.string(Z.t["wg/30i"]) }),
                null != t
                    ? (0, r.jsx)(ee, { giftRecipient: t, onClose: i, nitroSection: x, analyticsLocations: n })
                    : (0, r.jsx)(u.HOs, {
                          className: X.XG,
                          children: (0, r.jsx)("div", {
                              className: `${X.Qs} ${X.GP}`,
                              children: (0, r.jsx)("div", { className: X.XP, children: x }),
                          }),
                      }),
            ],
        }),
    });
}
function ei(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: s,
        analyticsLocations: a,
        analyticsLocation: n,
        analyticsObject: l,
        giftMessage: o,
        giftingOrigin: d = F.vQ.DM_CHANNEL,
    } = e;
    return (0, r.jsx)(I.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: F.T7,
        isGift: !0,
        children: (0, r.jsx)(h.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d,
            children: (0, r.jsx)(et, {
                giftRecipient: t,
                onClose: i,
                transitionState: s,
                analyticsLocations: a,
                analyticsLocation: n,
                analyticsObject: l,
                giftMessage: o,
                giftingOrigin: d,
            }),
        }),
    });
}
