t.d(i, { default: () => ei });
var r = t(627968),
    a = t(64700),
    n = t(791282),
    s = t.n(n),
    o = t(172218),
    l = t(158954),
    c = t(311907),
    _ = t(459192),
    d = t(990078),
    u = t(397927),
    m = t(775602),
    p = t(793574),
    f = t(688810),
    h = t(937008),
    I = t(156312),
    C = t(532794),
    g = t(871123),
    x = t(177569),
    S = t(657331),
    T = t(18983),
    b = t(798048),
    k = t(834796),
    w = t(178213),
    L = t(332772),
    A = t(594832),
    j = t(631784),
    E = t(872472),
    v = t(721932),
    N = t(310209),
    H = t(878244),
    O = t(46537),
    y = t(734057),
    G = t(309010),
    M = t(954571),
    P = t(427262),
    W = t(501007),
    R = t(672525),
    B = t(788868),
    D = t(652215),
    Q = t(518477),
    F = t(699976),
    U = t(985018),
    Z = t(345905),
    K = t(198267);
function X(e) {
    let { onSelectSku: i, priceOptions: t, showPromotionalGiftBanner: a } = e;
    return (0, r.jsxs)("div", {
        className: K.u6,
        children: [
            (0, r.jsx)(R.D3, {
                onClick: () => i(B.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: a,
                wumpusPosition: W.Rf.GIFT_SELECTION_MODAL,
                className: Z.giftSelectionModalContext,
            }),
            (0, r.jsx)(R.Ls, {
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
    return (0, r.jsx)(r.Fragment, {
        children: Array.from(
            { length: 12 },
            i
                ? (e, i) => (0, r.jsx)(H.O, { spec: F.Z.SIZE_150 }, `placeholder-${i}`)
                : (e, i) => (0, r.jsx)(k.A, { cardSize: b.Y.MEDIUM_SQUARE }, `placeholder-${i}`),
        ),
    });
}
function V(e) {
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
            T.A,
            {
                item: i,
                profileOwner: a,
                wishlistId: n,
                isOwner: !1,
                cardSize: b.Y.MEDIUM_SQUARE,
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
            ? (0, r.jsx)(d.m, { text: s.title, position: "top", asContainer: !0, delay: A.Zh, children: c }, i.skuId)
            : (0, r.jsx)(
                  _.u,
                  {
                      title: s.title,
                      body: s.body ?? "",
                      asset: s.renderIcon?.(i),
                      assetSize: A.Q8,
                      position: "top",
                      asContainer: !0,
                      delay: A.Zh,
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
            onWishlistItemClick: _,
            totalUnownedWishlistItems: d,
            analyticsLocations: m,
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
        f = (0, c.bG)([G.A, y.A], () => y.A.getChannel(G.A.getChannelId())),
        h = d > t.length ? d - t.length + 1 : void 0,
        I = a.useCallback(() => {
            _?.(), (0, u.s7G)();
        }, [_]);
    return ((0, L.T)({ location: "gift_selection_modal_wishlist_section" }), i)
        ? (0, r.jsx)(r.Fragment, {
              children: t.map((e, i) => {
                  let { item: a, source: o } = e;
                  return (
                      null != a.sku &&
                      (0, r.jsx)(
                          H.A,
                          {
                              numMoreItems: i === t.length - 1 ? h : void 0,
                              sku: a.sku,
                              wishlistId: s,
                              source: o,
                              wishlistOwner: n,
                              hasMultipleSources: p.size > 1,
                              onOpenWishlist: l,
                              onClick: I,
                              analyticsLocations: m,
                              spec: F.Z.SIZE_150,
                              guildId: f?.guild_id,
                              channelId: f?.id,
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
                      V,
                      {
                          item: t,
                          source: a,
                          giftRecipient: n,
                          defaultWishlistId: s,
                          tooltipConfig: o[i],
                          onWishlistItemClick: I,
                          analyticsLocations: m,
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
            isLoading: _,
            totalUnownedWishlistItems: d,
            analyticsLocations: m,
        } = e,
        h = (0, w.GG)("gift_selection_modal_wishlist_section"),
        I = (0, P.tx)(i),
        C =
            0 === d
                ? U.intl.string(U.t.BCi1gT)
                : d >= 12
                  ? U.intl.formatToPlainString(U.t.Y2RFOQ, { username: I })
                  : U.intl.formatToPlainString(U.t.dIDKgi, { username: I }),
        { analyticsLocations: S } = (0, f.Ay)(...(m ?? []), p.A.GIFT_SELECTION_MODAL_WISHLIST),
        T = (0, O.bc)(s, i),
        [b, k] = a.useState(!1),
        L = a.useCallback(
            (e) => {
                e &&
                    !_ &&
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
                    k(!0));
            },
            [_, s, i.id, S],
        ),
        A = (0, o.K)(L, void 0, !_ && !b),
        j = a.useMemo(
            () =>
                s.some((e) => {
                    let { item: i } = e;
                    return (0, g.bF)(i.sku);
                }),
            [s],
        );
    return (0, r.jsxs)("div", {
        ref: A,
        className: K.jf,
        children: [
            (0, r.jsxs)("div", {
                className: K.nM,
                children: [
                    (0, r.jsx)(l.DZT, {
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
                            onClick: t,
                        }),
                ],
            }),
            j && (0, r.jsx)(x.A, { location: "gift_selection_modal_wishlist" }),
            (0, r.jsx)("div", {
                className: K.KN,
                children: _
                    ? (0, r.jsx)(z, { isEligibleForWishlistSkuPreview: h })
                    : (0, r.jsx)(J, {
                          isEligibleForWishlistSkuPreview: h,
                          displayItems: s,
                          giftRecipient: i,
                          defaultWishlistId: c,
                          tooltipConfigs: T,
                          onSeeWishlistClick: t,
                          onWishlistItemClick: n,
                          totalUnownedWishlistItems: d,
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
            wishlistCount: _,
            defaultWishlistId: d,
            isWishlistLoaded: p,
        } = e,
        f = (0, A.tA)({ isGift: !0, giftRecipient: i }),
        h = (p ? _ : 0) > 0 ? U.intl.string(U.t["7lZ31J"]) : U.intl.string(U.t.BCi1gT),
        [I, C] = a.useState("Nitro"),
        g = a.useRef(null),
        x = a.useRef(null),
        T = (0, c.bG)([m.A], () => m.A.useReducedMotion),
        b = a.useRef(!1),
        k = a.useCallback(
            (e) => {
                C(e), (b.current = !0);
                let t = g.current;
                null != t &&
                    t.addEventListener(
                        "scrollend",
                        () => {
                            b.current = !1;
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
        w = a.useCallback(() => {
            M.default.track(D.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: i.id,
                wishlist_item_count: _,
                location_stack: s,
            }),
                t(),
                (0, S.openUserProfileModal)({ userId: i.id, tabSection: Q.RP.WISHLIST });
        }, [i.id, _, s, t]);
    return (
        a.useEffect(() => {
            let e = x.current,
                i = g.current;
            if (null == e || null == i) return;
            let t = new IntersectionObserver(
                (e) => {
                    let [i] = e;
                    b.current || C(i.isIntersecting ? "Wishlist" : "Nitro");
                },
                { root: i, threshold: 0.5 },
            );
            return t.observe(e), () => t.disconnect();
        }, [f]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                f &&
                    (0, r.jsx)("div", {
                        className: K.CE,
                        children: (0, r.jsxs)(l.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: I,
                            onItemSelect: k,
                            children: [
                                (0, r.jsx)(l.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": U.intl.string(U.t.Ipxkog),
                                    children: U.intl.string(U.t.Ipxkog),
                                }),
                                (0, r.jsx)(l.VQ0.Item, { id: "Wishlist", "aria-label": h, children: h }),
                            ],
                        }),
                    }),
                (0, r.jsx)(u.HOs, {
                    ref: g,
                    className: K.XG,
                    children: (0, r.jsxs)("div", {
                        className: K.Qs,
                        children: [
                            (0, r.jsx)("div", { className: K.XP, children: n }),
                            f &&
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: K.XP,
                                    children: (0, r.jsx)($, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: w,
                                        onWishlistItemClick: t,
                                        displayItems: o,
                                        defaultWishlistId: d,
                                        analyticsLocations: s,
                                        isLoading: !p,
                                        totalUnownedWishlistItems: _,
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
            skusToUserAndReason: _,
            status: d,
            defaultWishlistId: u,
        } = (0, j.rg)({ userId: i.id, numItems: 12, source: A.B5.USER_PROFILE }),
        m = a.useMemo(
            () =>
                s()(
                    l.map((e) => {
                        let t = e.productLine === D.EZt.COLLECTIBLES ? E.A.fromSKU(e) : v.A.fromSKU(e),
                            r = null != _[e.id] && _[e.id][i.id] === N.j.WISHLIST ? A.uS.WISHLIST : A.uS.POPULAR;
                        return null != t ? { item: t, source: r } : null;
                    }),
                ),
            [l, i.id, _],
        );
    return (0, r.jsx)(q, {
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
function ee(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: n,
            analyticsLocations: s,
            analyticsLocation: o,
            analyticsObject: c,
            giftMessage: _,
            giftingOrigin: d = B.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: m } = (0, I.P5)(),
        { claimableRewards: p } = (0, h.Pv)(),
        f = null != p && p.length > 0,
        g = a.useCallback(
            (e) => {
                (0, C.A)({
                    isGift: !0,
                    giftRecipient: i,
                    giftingOrigin: d,
                    subscriptionTier: e,
                    analyticsLocations: s ?? [],
                    analyticsLocation: o ?? D.ThZ.GIFT_SELECTION_MODAL,
                    analyticsObject: c ?? {
                        page: null != i ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
                        section: D.JJy.CHANNEL_TEXT_AREA,
                        object: D.ZSU.BUTTON_ICON,
                        objectType: D.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: _,
                }),
                    t();
            },
            [i, d, s, o, c, _, t],
        ),
        x = a.useRef(!1);
    a.useEffect(() => {
        x.current ||
            ((x.current = !0),
            M.default.track(D.HAw.GIFT_SELECTION_MODAL_OPENED, { gift_recipient_id: i?.id, location_stack: s }));
    }, [i, s]);
    let S = (0, r.jsx)(X, { onSelectSku: g, priceOptions: m, showPromotionalGiftBanner: f });
    return (0, r.jsx)(l.dWK, {
        transitionState: n,
        size: "lg",
        onClose: t,
        "aria-label": U.intl.string(U.t["wg/30i"]),
        children: (0, r.jsxs)("div", {
            className: K.jE,
            children: [
                (0, r.jsx)(l.rQ0, { title: U.intl.string(U.t["wg/30i"]) }),
                null != i
                    ? (0, r.jsx)(Y, { giftRecipient: i, onClose: t, nitroSection: S, analyticsLocations: s })
                    : (0, r.jsx)(u.HOs, {
                          className: K.XG,
                          children: (0, r.jsx)("div", {
                              className: `${K.Qs} ${K.GP}`,
                              children: (0, r.jsx)("div", { className: K.XP, children: S }),
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
        transitionState: a,
        analyticsLocations: n,
        analyticsLocation: s,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: c = B.vQ.DM_CHANNEL,
    } = e;
    return (0, r.jsx)(I.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: B.T7,
        isGift: !0,
        children: (0, r.jsx)(h.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c,
            children: (0, r.jsx)(ee, {
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
