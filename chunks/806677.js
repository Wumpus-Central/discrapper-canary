t.d(i, { default: () => I });
var a = t(627968),
    r = t(64700),
    n = t(158954),
    o = t(311907),
    s = t(397927),
    d = t(775602),
    l = t(937008),
    _ = t(156312),
    c = t(532794),
    f = t(657331),
    m = t(996353),
    p = t(427262),
    u = t(407775),
    C = t(672525),
    x = t(788868),
    g = t(652215),
    h = t(518477),
    b = t(985018),
    j = t(855135),
    S = t(958237);
function v(e) {
    let { onSelectSku: i, priceOptions: t, showPromotionalGiftBanner: r } = e;
    return (0, a.jsxs)("div", {
        className: S.u6,
        children: [
            (0, a.jsx)(C.D3, {
                onClick: () => i(x.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: r,
                wumpusPosition: u.Rf.GIFT_SELECTION_MODAL,
                className: j.giftSelectionModalContext,
            }),
            (0, a.jsx)(C.Ls, {
                onClick: () => i(x.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0,
                className: j.giftSelectionModalContext,
            }),
        ],
    });
}
function N(e) {
    let { giftRecipient: i, onSeeWishlistClick: t } = e,
        r = (0, p.tx)(i),
        o = b.intl.formatToPlainString(b.t.Y2RFOQ, { username: r });
    return (0, a.jsxs)("div", {
        className: S.jf,
        children: [
            (0, a.jsxs)("div", {
                className: S.nM,
                children: [
                    (0, a.jsx)(n.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: S.Uf,
                        children: o,
                    }),
                    (0, a.jsx)(n.$nd, {
                        variant: "secondary",
                        size: "md",
                        text: b.intl.string(b.t.WFDSTv),
                        onClick: t,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: S.KN,
                children: Array.from({ length: 12 }).map((e, i) => (0, a.jsx)("div", { className: S.lV }, i)),
            }),
        ],
    });
}
function T(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: p,
            analyticsLocations: u,
            analyticsLocation: C,
            analyticsObject: j,
            giftMessage: T,
            giftingOrigin: I = x.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: w } = (0, _.P5)(),
        { claimableRewards: k } = (0, l.Pv)(),
        H = null != k && k.length > 0,
        { totalUnownedWishlistItemCount: A, fetchState: G } = (0, m.A)({
            user: i,
            numItems: 1,
            location: "Gift Selection Modal",
        }),
        M = b.intl.formatToPlainString(b.t.cu96mS, { count: "loading" === G.status ? 0 : A }),
        [O, P] = r.useState("Nitro"),
        y = r.useRef(null),
        E = r.useRef(null),
        L = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        R = r.useCallback(() => {
            t(), (0, f.openUserProfileModal)({ userId: i.id, tabSection: h.RP.WISHLIST });
        }, [i.id, t]);
    r.useEffect(() => {
        "Nitro" === O
            ? y.current?.scrollTo({ top: 0, behavior: L ? "auto" : "smooth" })
            : E.current?.scrollIntoView({ behavior: L ? "auto" : "smooth", block: "start" });
    }, [O, L]);
    let B = r.useCallback(
        (e) => {
            (0, c.A)({
                isGift: !0,
                giftRecipient: i,
                subscriptionTier: e,
                giftingOrigin: I,
                analyticsLocations: u ?? [],
                analyticsLocation: C,
                analyticsObject: j ?? {
                    page: g.liQ.DM_CHANNEL,
                    section: g.JJy.CHANNEL_TEXT_AREA,
                    object: g.ZSU.BUTTON_ICON,
                    objectType: g.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: T,
            }),
                t();
        },
        [i, u, C, j, T, t, I],
    );
    return (0, a.jsx)(n.dWK, {
        transitionState: p,
        size: "lg",
        onClose: t,
        "aria-label": b.intl.string(b.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: S.jE,
            children: [
                (0, a.jsx)(n.rQ0, { title: b.intl.string(b.t["wg/30i"]) }),
                (0, a.jsx)("div", {
                    className: S.CE,
                    children: (0, a.jsxs)(n.VQ0, {
                        type: "top",
                        look: "brand",
                        selectedItem: O,
                        onItemSelect: P,
                        children: [
                            (0, a.jsx)(n.VQ0.Item, {
                                id: "Nitro",
                                "aria-label": b.intl.string(b.t.Ipxkog),
                                children: b.intl.string(b.t.Ipxkog),
                            }),
                            (0, a.jsx)(n.VQ0.Item, { id: "Wishlist", "aria-label": M, children: M }),
                        ],
                    }),
                }),
                (0, a.jsx)(s.HOs, {
                    ref: y,
                    className: S.XG,
                    children: (0, a.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            (0, a.jsx)("div", {
                                className: S.XP,
                                children: (0, a.jsx)(v, {
                                    onSelectSku: B,
                                    priceOptions: w,
                                    showPromotionalGiftBanner: H,
                                }),
                            }),
                            (0, a.jsx)("div", {
                                ref: E,
                                className: S.XP,
                                children: (0, a.jsx)(N, { giftRecipient: i, onSeeWishlistClick: R }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function I(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: r,
        analyticsLocations: n,
        analyticsLocation: o,
        analyticsObject: s,
        giftMessage: d,
        giftingOrigin: c = x.vQ.DM_CHANNEL,
    } = e;
    return (0, a.jsx)(_.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: x.T7,
        isGift: !0,
        children: (0, a.jsx)(l.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c,
            children: (0, a.jsx)(T, {
                giftRecipient: i,
                onClose: t,
                transitionState: r,
                analyticsLocations: n,
                analyticsLocation: o,
                analyticsObject: s,
                giftMessage: d,
                giftingOrigin: c,
            }),
        }),
    });
}
