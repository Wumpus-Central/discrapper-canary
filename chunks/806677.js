r.d(i, { default: () => T });
var a = r(627968),
    t = r(64700),
    n = r(158954),
    s = r(311907),
    o = r(397927),
    d = r(775602),
    l = r(937008),
    _ = r(156312),
    c = r(532794),
    p = r(657331),
    f = r(996353),
    m = r(427262),
    u = r(672525),
    C = r(788868),
    h = r(652215),
    x = r(518477),
    g = r(985018),
    b = r(958237);
function j(e) {
    let { onSelectSku: i, priceOptions: r, showPromotionalGiftBanner: t } = e;
    return (0, a.jsxs)("div", {
        className: b.u6,
        children: [
            (0, a.jsx)(u.D3, {
                onClick: () => i(C.pe.TIER_2),
                isGift: !0,
                priceOptions: r,
                showPromotionalGiftBanner: t,
            }),
            (0, a.jsx)(u.Ls, { onClick: () => i(C.pe.TIER_0), isGift: !0, priceOptions: r, removeTopMargin: !0 }),
        ],
    });
}
function v(e) {
    let { giftRecipient: i, onSeeWishlistClick: r } = e,
        t = (0, m.tx)(i),
        s = g.intl.formatToPlainString(g.t.Y2RFOQ, { username: t });
    return (0, a.jsxs)("div", {
        className: b.jf,
        children: [
            (0, a.jsxs)("div", {
                className: b.nM,
                children: [
                    (0, a.jsx)(n.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: b.Uf,
                        children: s,
                    }),
                    (0, a.jsx)(n.$nd, {
                        variant: "secondary",
                        size: "md",
                        text: g.intl.string(g.t.WFDSTv),
                        onClick: r,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: b.KN,
                children: Array.from({ length: 12 }).map((e, i) => (0, a.jsx)("div", { className: b.lV }, i)),
            }),
        ],
    });
}
function N(e) {
    let {
            giftRecipient: i,
            onClose: r,
            transitionState: m,
            analyticsLocations: u,
            analyticsLocation: N,
            analyticsObject: T,
            giftMessage: I,
            giftingOrigin: S = C.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: k } = (0, _.P5)(),
        { claimableRewards: w } = (0, l.Pv)(),
        H = null != w && w.length > 0,
        { totalUnownedWishlistItemCount: A, fetchState: G } = (0, f.A)({
            user: i,
            numItems: 1,
            location: "Gift Selection Modal",
        }),
        O = g.intl.formatToPlainString(g.t.cu96mS, { count: "loading" === G.status ? 0 : A }),
        [P, y] = t.useState("Nitro"),
        M = t.useRef(null),
        R = t.useRef(null),
        E = (0, s.bG)([d.A], () => d.A.useReducedMotion),
        L = t.useCallback(() => {
            r(), (0, p.openUserProfileModal)({ userId: i.id, tabSection: x.RP.WISHLIST });
        }, [i.id, r]);
    t.useEffect(() => {
        "Nitro" === P
            ? M.current?.scrollTo({ top: 0, behavior: E ? "auto" : "smooth" })
            : R.current?.scrollIntoView({ behavior: E ? "auto" : "smooth", block: "start" });
    }, [P, E]);
    let B = t.useCallback(
        (e) => {
            (0, c.A)({
                isGift: !0,
                giftRecipient: i,
                subscriptionTier: e,
                giftingOrigin: S,
                analyticsLocations: u ?? [],
                analyticsLocation: N,
                analyticsObject: T ?? {
                    page: h.liQ.DM_CHANNEL,
                    section: h.JJy.CHANNEL_TEXT_AREA,
                    object: h.ZSU.BUTTON_ICON,
                    objectType: h.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: I,
            }),
                r();
        },
        [i, u, N, T, I, r, S],
    );
    return (0, a.jsx)(n.dWK, {
        transitionState: m,
        size: "lg",
        onClose: r,
        "aria-label": g.intl.string(g.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: b.jE,
            children: [
                (0, a.jsx)(n.rQ0, { title: g.intl.string(g.t["wg/30i"]) }),
                (0, a.jsx)("div", {
                    className: b.CE,
                    children: (0, a.jsxs)(n.VQ0, {
                        type: "top",
                        look: "brand",
                        selectedItem: P,
                        onItemSelect: y,
                        children: [
                            (0, a.jsx)(n.VQ0.Item, {
                                id: "Nitro",
                                "aria-label": g.intl.string(g.t.Ipxkog),
                                children: g.intl.string(g.t.Ipxkog),
                            }),
                            (0, a.jsx)(n.VQ0.Item, { id: "Wishlist", "aria-label": O, children: O }),
                        ],
                    }),
                }),
                (0, a.jsx)(o.HOs, {
                    ref: M,
                    className: b.XG,
                    children: (0, a.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, a.jsx)("div", {
                                className: b.XP,
                                children: (0, a.jsx)(j, {
                                    onSelectSku: B,
                                    priceOptions: k,
                                    showPromotionalGiftBanner: H,
                                }),
                            }),
                            (0, a.jsx)("div", {
                                ref: R,
                                className: b.XP,
                                children: (0, a.jsx)(v, { giftRecipient: i, onSeeWishlistClick: L }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function T(e) {
    let {
        giftRecipient: i,
        onClose: r,
        transitionState: t,
        analyticsLocations: n,
        analyticsLocation: s,
        analyticsObject: o,
        giftMessage: d,
        giftingOrigin: c = C.vQ.DM_CHANNEL,
    } = e;
    return (0, a.jsx)(_.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: C.T7,
        isGift: !0,
        children: (0, a.jsx)(l.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c,
            children: (0, a.jsx)(N, {
                giftRecipient: i,
                onClose: r,
                transitionState: t,
                analyticsLocations: n,
                analyticsLocation: s,
                analyticsObject: o,
                giftMessage: d,
                giftingOrigin: c,
            }),
        }),
    });
}
