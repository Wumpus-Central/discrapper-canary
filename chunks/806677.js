t.d(i, { default: () => L });
var a = t(627968),
    r = t(64700),
    o = t(158954),
    n = t(311907),
    s = t(459192),
    d = t(990078),
    l = t(397927),
    c = t(775602),
    _ = t(793574),
    f = t(688810),
    p = t(937008),
    u = t(156312),
    m = t(532794),
    C = t(657331),
    h = t(18983),
    x = t(798048),
    g = t(594832),
    I = t(996353),
    S = t(46537),
    b = t(427262),
    j = t(407775),
    T = t(672525),
    N = t(788868),
    v = t(652215),
    w = t(518477),
    k = t(985018),
    A = t(235889),
    y = t(8043);
function H(e) {
    let { onSelectSku: i, priceOptions: t, showPromotionalGiftBanner: r } = e;
    return (0, a.jsxs)("div", {
        className: y.u6,
        children: [
            (0, a.jsx)(T.D3, {
                onClick: () => i(N.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: r,
                wumpusPosition: j.Rf.GIFT_SELECTION_MODAL,
                className: A.giftSelectionModalContext,
            }),
            (0, a.jsx)(T.Ls, {
                onClick: () => i(N.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0,
                className: A.giftSelectionModalContext,
            }),
        ],
    });
}
function O(e) {
    let {
            giftRecipient: i,
            onSeeWishlistClick: t,
            onWishlistItemClick: r,
            displayItems: n,
            defaultWishlistId: l,
            analyticsLocations: c,
        } = e,
        p = (0, b.tx)(i),
        u = k.intl.formatToPlainString(k.t.Y2RFOQ, { username: p }),
        { analyticsLocations: m } = (0, f.Ay)(...(c ?? []), _.A.GIFT_SELECTION_MODAL_WISHLIST),
        C = (0, S.bc)(n, i);
    return (0, a.jsxs)("div", {
        className: y.jf,
        children: [
            (0, a.jsxs)("div", {
                className: y.nM,
                children: [
                    (0, a.jsx)(o.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: y.Uf,
                        children: u,
                    }),
                    (0, a.jsx)(o.$nd, {
                        variant: "secondary",
                        size: "md",
                        text: k.intl.string(k.t.WFDSTv),
                        onClick: t,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: y.KN,
                children: n.map((e, t) => {
                    let { item: o, source: n } = e,
                        c = C[t],
                        _ = (0, a.jsx)(
                            h.A,
                            {
                                item: o,
                                profileOwner: i,
                                wishlistId: l,
                                isOwner: !1,
                                cardSize: x.Y.MEDIUM_SQUARE,
                                showOverlayButton: !1,
                                giftingOrigin: N.vQ.DM_CHANNEL_WISHLIST,
                                source: n,
                                showIcons: !0,
                                heartColor: "white",
                                onWishlistItemClick: r,
                                analyticsLocations: m,
                            },
                            o.skuId,
                        );
                    return c.shouldShow
                        ? (0, S.Qc)(c)
                            ? (0, a.jsx)(
                                  d.m,
                                  { text: c.title, position: "top", asContainer: !0, delay: g.Zh, children: _ },
                                  o.skuId,
                              )
                            : (0, a.jsx)(
                                  s.u,
                                  {
                                      title: c.title,
                                      body: c.body ?? "",
                                      asset: c.renderIcon?.(o),
                                      assetSize: g.Q8,
                                      position: "top",
                                      asContainer: !0,
                                      delay: g.Zh,
                                      children: _,
                                  },
                                  o.skuId,
                              )
                        : _;
                }),
            }),
        ],
    });
}
function M(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: s,
            analyticsLocations: d,
            analyticsLocation: _,
            analyticsObject: f,
            giftMessage: h,
            giftingOrigin: x = N.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: g } = (0, u.P5)(),
        { claimableRewards: S } = (0, p.Pv)(),
        b = null != S && S.length > 0,
        {
            totalUnownedWishlistItemCount: j,
            displayItems: T,
            defaultWishlistId: A,
            fetchState: M,
        } = (0, I.A)({ user: i, numItems: 12, location: "Gift Selection Modal" }),
        L = "loading" !== M.status && j > 0,
        G = k.intl.formatToPlainString(k.t.cu96mS, { count: j }),
        [E, P] = r.useState("Nitro"),
        R = r.useRef(null),
        Q = r.useRef(null),
        B = (0, n.bG)([c.A], () => c.A.useReducedMotion),
        W = r.useCallback(() => {
            t(), (0, C.openUserProfileModal)({ userId: i.id, tabSection: w.RP.WISHLIST });
        }, [i.id, t]);
    r.useEffect(() => {
        "Nitro" === E
            ? R.current?.scrollTo({ top: 0, behavior: B ? "auto" : "smooth" })
            : Q.current?.scrollIntoView({ behavior: B ? "auto" : "smooth", block: "start" });
    }, [E, B]);
    let D = r.useCallback(
        (e) => {
            (0, m.A)({
                isGift: !0,
                giftRecipient: i,
                subscriptionTier: e,
                giftingOrigin: x,
                analyticsLocations: d ?? [],
                analyticsLocation: _,
                analyticsObject: f ?? {
                    page: v.liQ.DM_CHANNEL,
                    section: v.JJy.CHANNEL_TEXT_AREA,
                    object: v.ZSU.BUTTON_ICON,
                    objectType: v.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: h,
            }),
                t();
        },
        [i, d, _, f, h, t, x],
    );
    return (0, a.jsx)(o.dWK, {
        transitionState: s,
        size: "lg",
        onClose: t,
        "aria-label": k.intl.string(k.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: y.jE,
            children: [
                (0, a.jsx)(o.rQ0, { title: k.intl.string(k.t["wg/30i"]) }),
                L &&
                    (0, a.jsx)("div", {
                        className: y.CE,
                        children: (0, a.jsxs)(o.VQ0, {
                            type: "top",
                            look: "brand",
                            selectedItem: E,
                            onItemSelect: P,
                            children: [
                                (0, a.jsx)(o.VQ0.Item, {
                                    id: "Nitro",
                                    "aria-label": k.intl.string(k.t.Ipxkog),
                                    children: k.intl.string(k.t.Ipxkog),
                                }),
                                (0, a.jsx)(o.VQ0.Item, { id: "Wishlist", "aria-label": G, children: G }),
                            ],
                        }),
                    }),
                (0, a.jsx)(l.HOs, {
                    ref: R,
                    className: y.XG,
                    children: (0, a.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            (0, a.jsx)("div", {
                                className: y.XP,
                                children: (0, a.jsx)(H, {
                                    onSelectSku: D,
                                    priceOptions: g,
                                    showPromotionalGiftBanner: b,
                                }),
                            }),
                            L &&
                                (0, a.jsx)("div", {
                                    ref: Q,
                                    className: y.XP,
                                    children: (0, a.jsx)(O, {
                                        giftRecipient: i,
                                        onSeeWishlistClick: W,
                                        onWishlistItemClick: t,
                                        displayItems: T,
                                        defaultWishlistId: A,
                                        analyticsLocations: d,
                                    }),
                                }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function L(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: r,
        analyticsLocations: o,
        analyticsLocation: n,
        analyticsObject: s,
        giftMessage: d,
        giftingOrigin: l = N.vQ.DM_CHANNEL,
    } = e;
    return (0, a.jsx)(u.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: N.T7,
        isGift: !0,
        children: (0, a.jsx)(p.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: l,
            children: (0, a.jsx)(M, {
                giftRecipient: i,
                onClose: t,
                transitionState: r,
                analyticsLocations: o,
                analyticsLocation: n,
                analyticsObject: s,
                giftMessage: d,
                giftingOrigin: l,
            }),
        }),
    });
}
