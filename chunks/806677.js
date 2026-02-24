t.d(i, { default: () => E });
var a = t(627968),
    r = t(64700),
    s = t(158954),
    n = t(311907),
    o = t(459192),
    d = t(990078),
    l = t(397927),
    _ = t(775602),
    c = t(793574),
    f = t(688810),
    p = t(937008),
    u = t(156312),
    m = t(532794),
    C = t(622543),
    h = t(657331),
    x = t(18983),
    g = t(798048),
    I = t(834796),
    b = t(594832),
    S = t(996353),
    j = t(46537),
    A = t(427262),
    N = t(407775),
    T = t(672525),
    v = t(788868),
    w = t(652215),
    k = t(518477),
    y = t(985018),
    M = t(235889),
    H = t(8043);
function O(e) {
    let { onSelectSku: i, priceOptions: t, showPromotionalGiftBanner: r } = e;
    return (0, a.jsxs)("div", {
        className: H.u6,
        children: [
            (0, a.jsx)(T.D3, {
                onClick: () => i(v.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: r,
                wumpusPosition: N.Rf.GIFT_SELECTION_MODAL,
                className: M.giftSelectionModalContext,
            }),
            (0, a.jsx)(T.Ls, {
                onClick: () => i(v.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0,
                className: M.giftSelectionModalContext,
            }),
        ],
    });
}
function L(e) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: t,
            onWishlistItemClick: r,
            displayItems: n,
            defaultWishlistId: l,
            analyticsLocations: _,
            isLoading: p,
        } = e,
        u = (0, A.tx)(i),
        m = y.intl.formatToPlainString(y.t.Y2RFOQ, { username: u }),
        { analyticsLocations: C } = (0, f.Ay)(...(_ ?? []), c.A.GIFT_SELECTION_MODAL_WISHLIST),
        h = (0, j.bc)(n, i);
    return (0, a.jsxs)("div", {
        className: H.jf,
        children: [
            (0, a.jsxs)("div", {
                className: H.nM,
                children: [
                    (0, a.jsx)(s.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: H.Uf,
                        children: m,
                    }),
                    (0, a.jsx)(s.$nd, {
                        variant: "secondary",
                        size: "md",
                        text: y.intl.string(y.t.WFDSTv),
                        onClick: t,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: H.KN,
                children: p
                    ? Array.from({ length: 12 }, (e, i) =>
                          (0, a.jsx)(I.A, { cardSize: g.Y.MEDIUM_SQUARE }, `placeholder-${i}`),
                      )
                    : n.map((e, t) => {
                          let { item: s, source: n } = e,
                              _ = h[t],
                              c = (0, a.jsx)(
                                  x.A,
                                  {
                                      item: s,
                                      profileOwner: i,
                                      wishlistId: l,
                                      isOwner: !1,
                                      cardSize: g.Y.MEDIUM_SQUARE,
                                      showOverlayButton: !1,
                                      giftingOrigin: v.vQ.DM_CHANNEL_WISHLIST,
                                      source: n,
                                      showIcons: !0,
                                      heartColor: "white",
                                      onWishlistItemClick: r,
                                      analyticsLocations: C,
                                  },
                                  s.skuId,
                              );
                          return _.shouldShow
                              ? (0, j.Qc)(_)
                                  ? (0, a.jsx)(
                                        d.m,
                                        { text: _.title, position: "top", asContainer: !0, delay: b.Zh, children: c },
                                        s.skuId,
                                    )
                                  : (0, a.jsx)(
                                        o.u,
                                        {
                                            title: _.title,
                                            body: _.body ?? "",
                                            asset: _.renderIcon?.(s),
                                            assetSize: b.Q8,
                                            position: "top",
                                            asContainer: !0,
                                            delay: b.Zh,
                                            children: c,
                                        },
                                        s.skuId,
                                    )
                              : c;
                      }),
            }),
        ],
    });
}
function G(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: o,
            analyticsLocations: d,
            analyticsLocation: c,
            analyticsObject: f,
            giftMessage: x,
            giftingOrigin: g = v.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: I } = (0, u.P5)(),
        { claimableRewards: b } = (0, p.Pv)(),
        j = null != b && b.length > 0,
        {
            totalUnownedWishlistItemCount: A,
            displayItems: N,
            defaultWishlistId: T,
            fetchState: M,
        } = (0, S.A)({ user: i, numItems: 12, location: "Gift Selection Modal" }),
        G = null != (0, n.bG)([C.A], () => C.A.getFirstWishlistId(i.id)),
        E = "loading" !== M.status,
        P = G && (!E || A > 0),
        R = y.intl.string(y.t["7lZ31J"]),
        [Q, W] = r.useState("Nitro"),
        B = r.useRef(null),
        D = r.useRef(null),
        U = (0, n.bG)([_.A], () => _.A.useReducedMotion),
        F = r.useCallback(() => {
            t(), (0, h.openUserProfileModal)({ userId: i.id, tabSection: k.RP.WISHLIST });
        }, [i.id, t]);
    r.useEffect(() => {
        "Nitro" === Q
            ? B.current?.scrollTo({ top: 0, behavior: U ? "auto" : "smooth" })
            : D.current?.scrollIntoView({ behavior: U ? "auto" : "smooth", block: "start" });
    }, [Q, U]);
    let X = r.useCallback(
        (e) => {
            (0, m.A)({
                isGift: !0,
                giftRecipient: i,
                subscriptionTier: e,
                giftingOrigin: g,
                analyticsLocations: d ?? [],
                analyticsLocation: c,
                analyticsObject: f ?? {
                    page: w.liQ.DM_CHANNEL,
                    section: w.JJy.CHANNEL_TEXT_AREA,
                    object: w.ZSU.BUTTON_ICON,
                    objectType: w.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: x,
            }),
                t();
        },
        [i, d, c, f, x, t, g],
    );
    return (0, a.jsx)(s.dWK, {
        transitionState: o,
        size: "lg",
        onClose: t,
        "aria-label": y.intl.string(y.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: H.jE,
            children: [
                (0, a.jsx)(s.rQ0, { title: y.intl.string(y.t["wg/30i"]) }),
                P &&
                    (0, a.jsx)("div", {
                        className: H.CE,
                        children: (0, a.jsxs)(s.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: Q,
                            onItemSelect: W,
                            children: [
                                (0, a.jsx)(s.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": y.intl.string(y.t.Ipxkog),
                                    children: y.intl.string(y.t.Ipxkog),
                                }),
                                (0, a.jsx)(s.VQ0.Item, { id: "Wishlist", "aria-label": R, children: R }),
                            ],
                        }),
                    }),
                (0, a.jsx)(l.HOs, {
                    ref: B,
                    className: H.XG,
                    children: (0, a.jsxs)("div", {
                        className: H.Qs,
                        children: [
                            (0, a.jsx)("div", {
                                className: H.XP,
                                children: (0, a.jsx)(O, {
                                    onSelectSku: X,
                                    priceOptions: I,
                                    showPromotionalGiftBanner: j,
                                }),
                            }),
                            P &&
                                (0, a.jsx)("div", {
                                    ref: D,
                                    className: H.XP,
                                    children: (0, a.jsx)(L, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: F,
                                        onWishlistItemClick: t,
                                        displayItems: N,
                                        defaultWishlistId: T,
                                        analyticsLocations: d,
                                        isLoading: !E,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function E(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: r,
        analyticsLocations: s,
        analyticsLocation: n,
        analyticsObject: o,
        giftMessage: d,
        giftingOrigin: l = v.vQ.DM_CHANNEL,
    } = e;
    return (0, a.jsx)(u.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: v.T7,
        isGift: !0,
        children: (0, a.jsx)(p.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: l,
            children: (0, a.jsx)(G, {
                giftRecipient: i,
                onClose: t,
                transitionState: r,
                analyticsLocations: s,
                analyticsLocation: n,
                analyticsObject: o,
                giftMessage: d,
                giftingOrigin: l,
            }),
        }),
    });
}
