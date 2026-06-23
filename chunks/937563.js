n.d(t, { default: () => eu });
var i,
    s = n(627968),
    r = n(64700),
    l = n(17928),
    a = n(821609),
    u = n(935462),
    c = n(534514),
    o = n(289873),
    d = n(793574),
    p = n(688810),
    m = n(571827),
    g = n(725807),
    h = n(919395),
    f = n(84540),
    x = n(287809),
    C = n(174459),
    I = n(428262),
    A = n(564064),
    j = n(993408),
    E = n(821701),
    v = n(841702),
    k = n(451909),
    y = n(986687),
    P = n(101058),
    S = n(836602),
    N = n(814390),
    _ = n(448429),
    b = n(375708),
    R = n(236263);
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
        } = (0, l.cf)([S.A], () => S.A.getPendingChanges(i?.id)),
        x = I.Ay.canUsePremiumProfileCustomization(t),
        C = (0, N.A)() && null != c ? k.Ay.parse(void 0, c).content : c;
    return (0, s.jsxs)("div", {
        className: R.i1,
        children: [
            (0, s.jsx)(y.A, {
                user: t,
                guild: i,
                pendingProfileEffect: n ?? null,
                pendingGlobalName: r,
                pendingNickname: a,
                pendingPronouns: u,
                pendingBio: C,
                pendingBanner: o,
                pendingAvatar: (0, P.V7)({ userId: t.id, image: d }),
                pendingAvatarDecoration: p,
                pendingThemeColors: h,
                pendingAccentColor: f,
                pendingProfileFrame: m,
                pendingDisplayNameStyles: g,
                canUsePremiumCustomization: x,
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
    z = n(34188),
    F = n(92008),
    G = n(203632),
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
var Y = n(302509),
    Z = n(423393);
let q = () => 80;
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
let en = (e) => {
    let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: r, onSelect: l, onOpenShop: a } = e,
        u = Q(),
        o = null != i,
        d = I.Ay.canUseCollectibles(t);
    return (0, s.jsx)("section", {
        className: Y.uW,
        children: (0, s.jsx)(F.f, {
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
                                (0, s.jsx)(z.U, {
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
                if ((0, G.C3)(h)) {
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
    es = n(788868),
    er = n(289138);
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
        children: (0, s.jsxs)(u.jl, {
            "data-migration-pending": !0,
            className: er.Hx,
            children: [
                (null != i && (d || !h)) || null === p
                    ? (0, s.jsx)(a.$, { variant: "primary", text: b.intl.string(b.t.Jh8fJz), onClick: r, disabled: o })
                    : null == i && (d || !h)
                      ? (0, s.jsx)(a.$, {
                            variant: "primary",
                            text: b.intl.string(b.t.fYfGgK),
                            onClick: () => c(p?.skuId),
                        })
                      : (0, s.jsx)(g.A, {
                            subscriptionTier: es.pe.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: I.Ay.isPremium(t)
                                    ? b.intl.string(b.t.KXLX7l)
                                    : d
                                      ? b.intl.string(b.t.mr4K7D)
                                      : b.intl.string(b.t.pj0XBN),
                            },
                        }),
                !d && h
                    ? (0, s.jsx)(m.A, { itemType: i?.type ?? n?.type, onClose: l })
                    : (0, s.jsx)(a.$, { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: l }),
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
            initialSelectedProfileEffect: a,
            currentSavedEffect: o,
            analyticsLocations: p,
            onClose: m,
        } = e,
        { pendingProfileEffect: g } = (0, h.nZ)(n?.id),
        [x, C] = r.useMemo(() => {
            let e = (0, j.sz)(i, l);
            return [e.purchased, e.shopPreviews];
        }, [i, l]),
        [v, k] = r.useState(() => (null != a ? a : void 0 !== g ? g : null == o ? null : (o ?? null))),
        y = r.useMemo(
            () =>
                x.find((e) => {
                    let { skuId: t } = e;
                    return t === v?.skuId;
                }) ??
                C.find((e) => {
                    let { skuId: t } = e;
                    return t === v?.skuId;
                }) ??
                null,
            [v, x, C],
        ),
        { product: P, purchase: S } = (0, E.A)(y?.skuId),
        N = r.useRef(null),
        _ = I.Ay.canUseCollectibles(t),
        R = void 0 === g ? v?.skuId === o?.skuId : v?.skuId === g?.skuId,
        T = r.useCallback(
            (e) => {
                k(e);
            },
            [k],
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
            (0, s.jsxs)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: er.Hc,
                children: [
                    (0, s.jsx)(c.D, { variant: "heading-lg/semibold", children: b.intl.string(b.t["/6nv6N"]) }),
                    (0, s.jsx)(u.s_, { "data-migration-pending": !0, className: er.iT, onClick: m }),
                ],
            }),
            (0, s.jsxs)(u.$m, {
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
                    (0, s.jsx)(U, { user: t, profileEffect: y, guild: n }),
                ],
            }),
            (0, s.jsx)(el, {
                user: t,
                onApply: function () {
                    (0, f.p)({ guildId: n?.id, profileEffect: v ?? null }), m();
                },
                onClose: m,
                onOpenShop: M,
                product: P,
                purchase: S,
                canUsePremiumCollectibles: _,
                selectedProfileEffect: v,
                disableApplyButton: R,
            }),
        ],
    });
}
function eu(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: i, guild: a, onClose: c } = e,
        { categories: m, purchases: g, isFetchingCategories: f, isFetchingPurchases: I } = (0, v.Ay)(),
        A = f || (I && 0 === g.size),
        j = (0, l.bG)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: E } = (0, p.Ay)(n, d.A.EDIT_PROFILE_EFFECT_MODAL),
        k = (0, h.N2)({ user: j, guildId: a?.id });
    return (
        r.useEffect(() => {
            C.default.track(ei.HAw.OPEN_MODAL, { type: ei.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: E });
        }, [E]),
        (0, s.jsx)(p.f5, {
            value: E,
            children: (0, s.jsx)(u.EO, {
                transitionState: t,
                className: er.yl,
                size: A ? u.rI.DYNAMIC : u.rI.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: A
                    ? (0, s.jsx)(o.y, { className: er.u1, type: o.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(ea, {
                          user: j,
                          guild: a,
                          categories: m,
                          purchases: g,
                          initialSelectedProfileEffect: i,
                          currentSavedEffect: k,
                          onClose: c,
                          analyticsLocations: E,
                      }),
            }),
        })
    );
}
