n.d(t, { default: () => eu });
var i,
    s = n(627968),
    r = n(64700),
    l = n(17928),
    a = n(935462),
    u = n(821609),
    c = n(297264),
    o = n(289873),
    d = n(793574),
    p = n(688810),
    m = n(571827),
    g = n(725807),
    h = n(919395),
    f = n(84540),
    x = n(287809),
    I = n(174459),
    C = n(428262),
    A = n(34332),
    j = n(993408),
    E = n(821701),
    v = n(841702),
    y = n(451909),
    P = n(986687),
    k = n(101058),
    S = n(836602),
    N = n(814390),
    _ = n(448429),
    b = n(375708),
    R = n(717887);
let U = function (e) {
    let { user: t, profileEffect: n, guild: i } = e,
        {
            pendingGlobalName: r,
            pendingNickname: a,
            pendingPronouns: u,
            pendingBio: c,
            pendingBanner: o,
            pendingAvatar: d,
            pendingAvatarDecoration: p,
            pendingProfileFrame: m,
            pendingDisplayNameStyles: g,
            pendingThemeColors: h,
            pendingAccentColor: f,
            pendingPrimaryGuildId: x,
        } = (0, l.cf)([S.A], () => S.A.getPendingChanges(i?.id)),
        I = C.Ay.canUsePremiumProfileCustomization(t),
        A = (0, N.A)() && null != c ? y.Ay.parse(void 0, c).content : c;
    return (0, s.jsxs)("div", {
        className: R.i1,
        children: [
            (0, s.jsx)(P.A, {
                user: t,
                guild: i,
                pendingProfileEffect: n ?? null,
                pendingGlobalName: r,
                pendingNickname: a,
                pendingPronouns: u,
                pendingBio: A,
                pendingBanner: o,
                pendingAvatar: (0, k.V7)({ userId: t.id, image: d }),
                pendingAvatarDecoration: p,
                pendingThemeColors: h,
                pendingAccentColor: f,
                pendingProfileFrame: m,
                pendingDisplayNameStyles: g,
                pendingPrimaryGuildId: x,
                canUsePremiumCustomization: I,
                disabledInputs: !0,
                hideCustomStatus: !0,
            }),
            !1,
            (0, s.jsx)(_.A, {
                user: t,
                previewSkuId: n?.skuId,
                nitroChurnCTA: b.intl.string(b.t["1UPza/"]),
                nitroJoinCTA: b.intl.string(b.t.melduy),
            }),
        ],
    });
};
var T = n(503698),
    M = n.n(T),
    w = n(939249),
    O = n(428678),
    D = n(834730),
    G = n(34188),
    z = n(92008),
    F = n(203632),
    H = n(181774),
    L = n(483968),
    J = n(942426);
n(321073);
var K = n(702841),
    B = n(590180),
    W = n(4227),
    V = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let $ = { skuId: "None" },
    X = { skuId: "Shop" },
    Q = function () {
        let e = (0, K.bG)([W.A], () => W.A.purchases),
            [t, n] = (0, K.yK)([B.A], () => [B.A.categories, B.A.products]);
        return (0, r.useMemo)(() => {
            let i = (0, j.wo)(e, t).reduce(
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
            );
            return [
                { section: "purchase", items: [$, X, ...i.purchase], height: 12, header: b.intl.string(b.t["9x1v/p"]) },
                {
                    section: "premium_purchase",
                    items: i.premium_purchase,
                    height: 12,
                    header: b.intl.string(b.t.TiLCgw),
                },
                { section: "preview", items: i.preview, height: 12, header: b.intl.string(b.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, n, e]);
    };
var Y = n(176341),
    Z = n(423393);
function q() {
    return 80;
}
function ee(e) {
    let { children: t, className: n, isSelected: i, ...r } = e;
    return (0, s.jsx)(w.D, {
        "aria-pressed": i,
        className: M()(Y.BP, n, { [Y.wH]: i }),
        ...r,
        onClick: r.onSelect,
        children: t,
    });
}
function et(e) {
    let { skuId: t, innerRef: n, section: i, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
        c = (0, J.A)(t),
        o = r.useRef(null),
        { accessibilityLabel: d, thumbnailPreviewSrc: p, title: m } = c ?? {},
        g = r.useMemo(() => (0, H.Rc)(p), [p]);
    return (0, s.jsxs)(ee, {
        innerRef: n ?? o,
        isSelected: l,
        ...u,
        children: [
            (0, s.jsx)("img", { src: Z.A, alt: d, className: Y.rQ }),
            (0, s.jsx)("img", { className: Y.Wv, src: g, alt: m }),
            (0, s.jsx)(L.A, {
                skuId: t,
                canUsePremiumCollectibles: a,
                isPurchaseSection: i === V.PURCHASE,
                isPremiumSection: i === V.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let en = function (e) {
    let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: r, onSelect: l, onOpenShop: a } = e,
        u = Q(),
        o = null != i,
        d = C.Ay.canUseCollectibles(t);
    return (0, s.jsx)("section", {
        className: Y.uW,
        children: (0, s.jsx)(z.f, {
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
            renderItem: (e, t, c, p) => {
                let { section: m, items: g } = u[e],
                    h = g[t];
                if (h === $)
                    return (0, s.jsxs)(
                        ee,
                        {
                            style: { ...c },
                            isSelected: !o,
                            onSelect: () => l(null),
                            children: [
                                (0, s.jsx)(O.K, { size: "md", color: "currentColor", className: Y.vo }),
                                (0, s.jsx)(D.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: null != n ? b.intl.string(b.t.CHf9iJ) : b.intl.string(b.t.PoWNfe),
                                }),
                            ],
                        },
                        p,
                    );
                if (h === X)
                    return (0, s.jsxs)(
                        ee,
                        {
                            style: c,
                            onSelect: a,
                            children: [
                                (0, s.jsx)(G.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: Y.sV,
                                }),
                                (0, s.jsx)(D.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: b.intl.string(b.t.pWG4ze),
                                }),
                            ],
                        },
                        p,
                    );
                if ((0, F.C3)(h)) {
                    let e = i?.skuId === h.skuId;
                    return (0, s.jsx)(
                        et,
                        {
                            style: { ...c },
                            section: m,
                            skuId: h.skuId,
                            innerRef: e ? r : void 0,
                            isSelected: e,
                            onSelect: () => l(h),
                            canUsePremiumCollectibles: d,
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
                    children: (0, s.jsx)(c.D, { variant: "heading-md/medium", children: n }),
                });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => u[e].items[t].skuId,
            getItemHeight: q,
            removeEdgeItemGutters: !0,
        }),
    });
};
var ei = n(652215),
    es = n(202541),
    er = n(369226);
function el(e) {
    let {
            user: t,
            product: n,
            purchase: i,
            onApply: r,
            onClose: l,
            onOpenShop: c,
            disableApplyButton: o,
            canUsePremiumCollectibles: d,
            selectedProfileEffect: p,
        } = e,
        h = null != i ? (0, j.gA)(i) : (0, j.G0)(n);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(a.jl, {
            "data-migration-pending": !0,
            className: er.Hx,
            children: [
                (null != i && (d || !h)) || null === p
                    ? (0, s.jsx)(u.$, { variant: "primary", text: b.intl.string(b.t.Jh8fJz), onClick: r, disabled: o })
                    : null == i && (d || !h)
                      ? (0, s.jsx)(u.$, {
                            variant: "primary",
                            text: b.intl.string(b.t.fYfGgK),
                            onClick: () => c(p?.skuId),
                        })
                      : (0, s.jsx)(g.A, {
                            subscriptionTier: es.pe.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: C.Ay.isPremium(t)
                                    ? b.intl.string(b.t.KXLX7l)
                                    : d
                                      ? b.intl.string(b.t.mr4K7D)
                                      : b.intl.string(b.t.pj0XBN),
                            },
                        }),
                !d && h
                    ? (0, s.jsx)(m.A, { itemType: i?.type ?? n?.type, onClose: l })
                    : (0, s.jsx)(u.$, { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: l }),
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
            initialSelectedProfileEffect: u,
            currentSavedEffect: o,
            analyticsLocations: p,
            onClose: m,
        } = e,
        { pendingProfileEffect: g } = (0, h.nZ)(n?.id),
        [x, I] = r.useMemo(() => {
            let e = (0, j.sz)(i, l);
            return [e.purchased, e.shopPreviews];
        }, [i, l]),
        [v, y] = r.useState(() => (null != u ? u : void 0 !== g ? g : null == o ? null : (o ?? null))),
        P = r.useMemo(
            () =>
                x.find((e) => {
                    let { skuId: t } = e;
                    return t === v?.skuId;
                }) ??
                I.find((e) => {
                    let { skuId: t } = e;
                    return t === v?.skuId;
                }) ??
                null,
            [v, x, I],
        ),
        { product: k, purchase: S } = (0, E.A)(P?.skuId),
        N = r.useRef(null),
        _ = C.Ay.canUseCollectibles(t),
        R = void 0 === g ? v?.skuId === o?.skuId : v?.skuId === g?.skuId,
        T = r.useCallback(
            (e) => {
                y(e);
            },
            [y],
        ),
        M = r.useCallback(
            (e) => {
                m(),
                    (0, A.Cz)({
                        analyticsLocations: p,
                        analyticsSource: d.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [p, m],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: er.Hc,
                children: [
                    (0, s.jsx)(c.D, { variant: "heading-lg/semibold", children: b.intl.string(b.t["/6nv6N"]) }),
                    (0, s.jsx)(a.s_, { "data-migration-pending": !0, className: er.iT, onClick: m }),
                ],
            }),
            (0, s.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: er.jE,
                children: [
                    (0, s.jsx)(en, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: v,
                        selectedProfileEffectRef: N,
                        onSelect: T,
                        onOpenShop: M,
                    }),
                    (0, s.jsx)(U, { user: t, profileEffect: P, guild: n }),
                ],
            }),
            (0, s.jsx)(el, {
                user: t,
                onApply: function () {
                    (0, f.p)({ guildId: n?.id, profileEffect: v ?? null }), m();
                },
                onClose: m,
                onOpenShop: M,
                product: k,
                purchase: S,
                canUsePremiumCollectibles: _,
                selectedProfileEffect: v,
                disableApplyButton: R,
            }),
        ],
    });
}
function eu(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: i, guild: u, onClose: c, returnRef: m } = e,
        { categories: g, purchases: f, isFetchingCategories: C, isFetchingPurchases: A } = (0, v.Ay)(),
        j = C || (A && 0 === f.size),
        E = (0, l.bG)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: y } = (0, p.Ay)(n, d.A.EDIT_PROFILE_EFFECT_MODAL),
        P = (0, h.N2)({ user: E, guildId: u?.id });
    return (
        r.useEffect(() => {
            I.default.track(ei.HAw.OPEN_MODAL, { type: ei.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: y });
        }, [y]),
        (0, s.jsx)(p.f5, {
            value: y,
            children: (0, s.jsx)(a.EO, {
                transitionState: t,
                className: er.yl,
                size: j ? a.rI.DYNAMIC : a.rI.MEDIUM,
                parentComponent: "ProfileEffectModal",
                returnRef: m,
                "data-migration-pending": !0,
                children: j
                    ? (0, s.jsx)(o.y, { className: er.u1, type: o.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(ea, {
                          user: E,
                          guild: u,
                          categories: g,
                          purchases: f,
                          initialSelectedProfileEffect: i,
                          currentSavedEffect: P,
                          onClose: c,
                          analyticsLocations: y,
                      }),
            }),
        })
    );
}
