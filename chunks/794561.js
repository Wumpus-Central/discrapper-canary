n.d(t, { default: () => eu });
var i,
    s = n(477900),
    r = n(582128),
    l = n(855986),
    a = n(935462),
    u = n(821609),
    o = n(534514),
    d = n(289873),
    c = n(793574),
    p = n(688810),
    m = n(571827),
    g = n(725807),
    h = n(919395),
    I = n(84540),
    f = n(287809),
    x = n(129230),
    A = n(448645),
    C = n(429811),
    j = n(993408),
    y = n(821701),
    v = n(841702),
    k = n(451909),
    P = n(641318),
    E = n(101058),
    S = n(836602),
    b = n(814390),
    N = n(448429),
    R = n(792996),
    _ = n(788991);
let M = function (e) {
    let { user: t, profileFrame: n, guild: i } = e,
        {
            pendingGlobalName: r,
            pendingNickname: a,
            pendingPronouns: u,
            pendingBio: o,
            pendingBanner: d,
            pendingAvatar: c,
            pendingAvatarDecoration: p,
            pendingProfileEffect: m,
            pendingDisplayNameStyles: g,
            pendingThemeColors: h,
            pendingAccentColor: I,
            pendingPrimaryGuildId: f,
        } = (0, l.cf)([S.A], () => S.A.getPendingChanges(i?.id)),
        x = A.Ay.canUsePremiumProfileCustomization(t),
        C = (0, b.A)() && null != o ? k.Ay.parse(void 0, o).content : o;
    return (0, s.jsxs)("div", {
        className: _.i,
        children: [
            (0, s.jsx)(P.A, {
                user: t,
                guild: i,
                pendingProfileFrame: n ?? null,
                pendingGlobalName: r,
                pendingNickname: a,
                pendingPronouns: u,
                pendingBio: C,
                pendingBanner: d,
                pendingAvatar: (0, E.V7)({ userId: t.id, image: c }),
                pendingAvatarDecoration: p,
                pendingThemeColors: h,
                pendingAccentColor: I,
                pendingProfileEffect: m,
                pendingDisplayNameStyles: g,
                pendingPrimaryGuildId: f,
                canUsePremiumCustomization: x,
                disabledInputs: !0,
                hideCustomStatus: !0,
            }),
            (0, s.jsx)(N.A, {
                user: t,
                previewSkuId: n?.skuId,
                nitroChurnCTA: R.intl.string(R.t.RPIwEb),
                nitroJoinCTA: R.intl.string(R.t.iu352Z),
            }),
        ],
    });
};
var F = n(503698),
    O = n.n(F),
    T = n(575593),
    U = n(939249),
    w = n(428678),
    G = n(834730),
    D = n(34188),
    H = n(297778),
    L = n(892118),
    z = n(483968);
n(321073);
var J = n(164636),
    K = n(590180),
    X = n(4227),
    B = n(407528),
    V = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let W = { skuId: "None" },
    $ = { skuId: "Shop" },
    Z = function () {
        let e = (0, J.bG)([X.A], () => X.A.purchases),
            [t, n] = (0, J.yK)([K.A], () => [K.A.categories, K.A.products]),
            i = (0, r.useMemo)(() => {
                let i = (0, j.MG)(e, t).reduce(
                        (t, i) => {
                            let s = e.get(i.skuId);
                            return (
                                (null != s ? (0, j.gA)(s) : (0, j.G0)(n.get(i.skuId)))
                                    ? t.premium_purchase.push(i)
                                    : null != s
                                      ? t.purchase.push(i)
                                      : t.preview.push(i),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    ),
                    s = R.intl.string(R.t.TiLCgw);
                return [
                    {
                        section: "purchase",
                        items: [W, $, ...i.purchase],
                        height: 12,
                        header: R.intl.string(R.t["9eZ4aO"]),
                    },
                    { section: "premium_purchase", items: i.premium_purchase, height: 12, header: s },
                    { section: "preview", items: i.preview, height: 12, header: R.intl.string(R.t["1vbbee"]) },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, n, e]);
        return (0, B.A)(i, "preview");
    };
var q = n(665411),
    Y = n(774832);
function Q() {
    return 80;
}
function ee(e) {
    let { children: t, className: n, isSelected: i, ...r } = e;
    return (0, s.jsx)(U.D, {
        "aria-pressed": i,
        className: O()(Y.X5, n, { [Y.wH]: i }),
        ...r,
        onClick: r.onSelect,
        children: t,
    });
}
function et(e) {
    let { profileFrame: t, innerRef: n, section: i, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
        o = r.useRef(null);
    return (0, s.jsxs)(ee, {
        innerRef: n ?? o,
        isSelected: l,
        className: Y.IO,
        ...u,
        children: [
            (0, s.jsx)(q.A, { frame: t }),
            (0, s.jsx)(z.A, {
                skuId: t.skuId,
                canUsePremiumCollectibles: a,
                isPurchaseSection: i === V.PURCHASE,
                isPremiumSection: i === V.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let en = function (e) {
    let { user: t, guild: n, pendingProfileFrame: i, selectedProfileFrameRef: r, onSelect: l, onOpenShop: a } = e,
        u = Z(),
        d = null != i,
        c = A.Ay.canUseCollectibles(t);
    return (0, s.jsx)("section", {
        className: Y.uW,
        children: (0, s.jsx)(H.f, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: Y.p_,
            columns: 3,
            sections: u.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            renderItem: (e, t, o, p) => {
                let { section: m, items: g } = u[e],
                    h = g[t];
                if (h === W)
                    return (0, s.jsxs)(
                        ee,
                        {
                            style: { ...o },
                            isSelected: !d,
                            onSelect: () => l(null),
                            children: [
                                (0, s.jsx)(w.DenyIcon, { size: "md", color: "currentColor", className: Y.vo }),
                                (0, s.jsx)(G.E, {
                                    variant: "body-xs/normal",
                                    color: "text-strong",
                                    children: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.PoWNfe),
                                }),
                            ],
                        },
                        p,
                    );
                if (h === $)
                    return (0, s.jsxs)(
                        ee,
                        {
                            style: o,
                            onSelect: () => a(),
                            children: [
                                (0, s.jsx)(D.ShopIcon, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: Y.sV,
                                }),
                                (0, s.jsx)(G.E, {
                                    variant: "body-xs/normal",
                                    color: "text-strong",
                                    children: R.intl.string(R.t.pWG4ze),
                                }),
                            ],
                        },
                        p,
                    );
                if ((0, L.s)(h)) {
                    let e = i?.skuId === h.skuId;
                    return (0, s.jsx)(
                        et,
                        {
                            style: { ...o },
                            profileFrame: h,
                            section: m,
                            innerRef: e ? r : void 0,
                            isSelected: e,
                            canUsePremiumCollectibles: c,
                            onSelect: () => l({ skuId: h.skuId, type: T.R.PROFILE_FRAME }),
                        },
                        p,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: n } = u[e];
                return (0, s.jsx)("div", {
                    style: { ...t, height: "16px", position: "absolute" },
                    children: (0, s.jsx)(o.D, { variant: "heading-sm/medium", children: n }),
                });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => u[e].items[t].skuId,
            getItemHeight: Q,
            removeEdgeItemGutters: !0,
        }),
    });
};
var ei = n(652215),
    es = n(682901),
    er = n(409451);
function el(e) {
    let {
            user: t,
            product: n,
            purchase: i,
            onApply: r,
            onClose: l,
            onOpenShop: o,
            disableApplyButton: d,
            canUsePremiumCollectibles: c,
            selectedProfileFrame: p,
        } = e,
        h = null != i ? (0, j.gA)(i) : (0, j.G0)(n);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(a.jl, {
            "data-migration-pending": !0,
            className: er.Hx,
            children: [
                (null != i && (c || !h)) || null === p
                    ? (0, s.jsx)(u.$, { variant: "primary", text: R.intl.string(R.t.Jh8fJz), onClick: r, disabled: d })
                    : null == i && (c || !h)
                      ? (0, s.jsx)(u.$, {
                            variant: "primary",
                            text: R.intl.string(R.t.fYfGgK),
                            onClick: () => o(p?.skuId),
                        })
                      : (0, s.jsx)(g.A, {
                            subscriptionTier: es.pe.TIER_2,
                            showGradient: !c,
                            textOptions: {
                                textOverride: A.Ay.isPremium(t)
                                    ? R.intl.string(R.t.KXLX7l)
                                    : c
                                      ? R.intl.string(R.t.mr4K7D)
                                      : R.intl.string(R.t.pj0XBN),
                            },
                        }),
                !c && h
                    ? (0, s.jsx)(m.A, { itemType: i?.type ?? n?.type, onClose: l })
                    : (0, s.jsx)(u.$, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function ea(e) {
    let {
            user: t,
            guild: n,
            categories: i,
            purchases: l,
            currentSavedFrame: u,
            analyticsLocations: d,
            modalHeadingId: p,
            initialSelectedProfileFrame: m,
            onClose: g,
        } = e,
        { pendingProfileFrame: f } = (0, h.Tu)(n?.id),
        x = r.useMemo(() => (0, j.MG)(l, i), [i, l]),
        [v, k] = r.useState(() => (null != m ? m : void 0 !== f ? f : (u ?? null))),
        P = r.useMemo(
            () =>
                x.find((e) => {
                    let { skuId: t } = e;
                    return t === v?.skuId;
                }) ?? null,
            [v, x],
        ),
        { product: E, purchase: S } = (0, y.A)(P?.skuId),
        b = r.useRef(null),
        N = A.Ay.canUseCollectibles(t),
        _ = void 0 === f ? v?.skuId === u?.skuId : v?.skuId === f?.skuId,
        F = r.useCallback(
            (e) => {
                k(e);
            },
            [k],
        ),
        O = r.useCallback(
            (e) => {
                (g(),
                    (0, C.Cz)({
                        analyticsLocations: d,
                        analyticsSource: c.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    }));
            },
            [d, g],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: er.Hc,
                children: [
                    (0, s.jsx)(o.D, { id: p, variant: "heading-lg/semibold", children: R.intl.string(R.t["oTSa/q"]) }),
                    (0, s.jsx)(a.s_, { "data-migration-pending": !0, className: er.iT, onClick: g }),
                ],
            }),
            (0, s.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: er.jE,
                children: [
                    (0, s.jsx)(en, {
                        user: t,
                        guild: n,
                        pendingProfileFrame: v,
                        selectedProfileFrameRef: b,
                        onSelect: F,
                        onOpenShop: O,
                    }),
                    (0, s.jsx)(M, { user: t, profileFrame: P, guild: n }),
                ],
            }),
            (0, s.jsx)(el, {
                user: t,
                onApply: function () {
                    ((0, I.p)({ guildId: n?.id, profileFrame: v ?? null }), g());
                },
                onClose: g,
                onOpenShop: O,
                product: E,
                purchase: S,
                canUsePremiumCollectibles: N,
                selectedProfileFrame: v,
                disableApplyButton: _,
            }),
        ],
    });
}
function eu(e) {
    let {
            transitionState: t,
            analyticsLocations: n,
            guild: i,
            onClose: u,
            initialSelectedProfileFrame: o,
            returnRef: m,
        } = e,
        { categories: g, purchases: I, isFetchingCategories: A, isFetchingPurchases: C } = (0, v.Ay)(),
        j = A || (C && 0 === I.size),
        y = r.useId(),
        k = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: P } = (0, p.Ay)(n, c.A.EDIT_PROFILE_FRAME_MODAL),
        E = (0, h.Xf)({ user: k, guildId: i?.id });
    return (
        r.useEffect(() => {
            x.default.track(ei.HAw.OPEN_MODAL, { type: ei.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: P });
        }, [P]),
        (0, s.jsx)(p.f5, {
            value: P,
            children: (0, s.jsx)(a.EO, {
                transitionState: t,
                className: er.yl,
                size: j ? a.rI.DYNAMIC : a.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                returnRef: m,
                "aria-label": j ? R.intl.string(R.t["oTSa/q"]) : void 0,
                "aria-labelledby": j ? void 0 : y,
                "data-migration-pending": !0,
                children: j
                    ? (0, s.jsx)(d.y, { className: er.u1, type: d.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(ea, {
                          user: k,
                          guild: i,
                          categories: g,
                          purchases: I,
                          currentSavedFrame: E,
                          onClose: u,
                          analyticsLocations: P,
                          modalHeadingId: y,
                          initialSelectedProfileFrame: o,
                      }),
            }),
        })
    );
}
