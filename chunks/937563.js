n.d(t, { default: () => eu });
var i,
    s = n(477900),
    r = n(582128),
    l = n(17928),
    a = n(935462),
    u = n(821609),
    c = n(297264),
    o = n(289873),
    d = n(793574),
    p = n(688810),
    m = n(571827),
    g = n(919395),
    h = n(84540),
    f = n(287809),
    x = n(174459),
    I = n(24482),
    C = n(815996),
    A = n(993408),
    j = n(821701),
    v = n(841702),
    E = n(907391),
    y = n(451909),
    P = n(986687),
    k = n(101058),
    N = n(836602),
    S = n(814390),
    b = n(448429),
    _ = n(105292),
    R = n(529676);
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
        } = (0, l.cf)([N.A], () => N.A.getPendingChanges(i?.id)),
        C = I.Ay.canUsePremiumProfileCustomization(t),
        A = (0, S.A)() && null != c ? y.Ay.parse(void 0, c).content : c;
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
                canUsePremiumCustomization: C,
                disabledInputs: !0,
                hideCustomStatus: !0,
            }),
            !1,
            (0, s.jsx)(b.A, {
                user: t,
                previewSkuId: n?.skuId,
                nitroChurnCTA: _.intl.string(_.t["1UPza/"]),
                nitroJoinCTA: _.intl.string(_.t.melduy),
            }),
        ],
    });
};
var w = n(503698),
    M = n.n(w),
    T = n(939249),
    D = n(428678),
    G = n(834730),
    H = n(34188),
    z = n(92008),
    F = n(203632),
    O = n(181774),
    L = n(483968),
    J = n(942426);
n(321073);
var K = n(702841),
    B = n(590180),
    W = n(4227),
    V = n(341879),
    $ = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let X = { skuId: "None" },
    Q = { skuId: "Shop" },
    Y = function () {
        let e = (0, K.bG)([W.A], () => W.A.purchases),
            [t, n] = (0, K.yK)([B.A], () => [B.A.categories, B.A.products]),
            i = (0, r.useMemo)(() => {
                let i = (0, A.wo)(e, t).reduce(
                    (t, i) => {
                        let s = e.get(i.skuId);
                        return (
                            (null != s ? (0, A.gA)(s) : (0, A.G0)(n.get(i.skuId)))
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
                    {
                        section: "purchase",
                        items: [X, Q, ...i.purchase],
                        height: 12,
                        header: _.intl.string(_.t["9x1v/p"]),
                    },
                    {
                        section: "premium_purchase",
                        items: i.premium_purchase,
                        height: 12,
                        header: _.intl.string(_.t.TiLCgw),
                    },
                    { section: "preview", items: i.preview, height: 12, header: _.intl.string(_.t["1vbbee"]) },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, n, e]);
        return (0, V.A)(i, "preview");
    };
var Z = n(986782),
    q = n(423393);
function ee() {
    return 80;
}
function et(e) {
    let { children: t, className: n, isSelected: i, ...r } = e;
    return (0, s.jsx)(T.D, {
        "aria-pressed": i,
        className: M()(Z.BP, n, { [Z.wH]: i }),
        ...r,
        onClick: r.onSelect,
        children: t,
    });
}
function en(e) {
    let { skuId: t, innerRef: n, section: i, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
        c = (0, J.A)(t),
        o = r.useRef(null),
        { accessibilityLabel: d, thumbnailPreviewSrc: p, title: m } = c ?? {},
        g = r.useMemo(() => (0, O.Rc)(p), [p]);
    return (0, s.jsxs)(et, {
        innerRef: n ?? o,
        isSelected: l,
        ...u,
        children: [
            (0, s.jsx)("img", { src: q.A, alt: d, className: Z.rQ }),
            (0, s.jsx)("img", { className: Z.Wv, src: g, alt: m }),
            (0, s.jsx)(L.A, {
                skuId: t,
                canUsePremiumCollectibles: a,
                isPurchaseSection: i === $.PURCHASE,
                isPremiumSection: i === $.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let ei = function (e) {
    let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: r, onSelect: l, onOpenShop: a } = e,
        u = Y(),
        o = null != i,
        d = I.Ay.canUseCollectibles(t);
    return (0, s.jsx)("section", {
        className: Z.uW,
        children: (0, s.jsx)(z.f, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: Z.p_,
            columns: 3,
            sections: u.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            renderItem: (e, t, c, p) => {
                let { section: m, items: g } = u[e],
                    h = g[t];
                if (h === X)
                    return (0, s.jsxs)(
                        et,
                        {
                            style: { ...c },
                            isSelected: !o,
                            onSelect: () => l(null),
                            children: [
                                (0, s.jsx)(D.K, { size: "md", color: "currentColor", className: Z.vo }),
                                (0, s.jsx)(G.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: null != n ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t.PoWNfe),
                                }),
                            ],
                        },
                        p,
                    );
                if (h === Q)
                    return (0, s.jsxs)(
                        et,
                        {
                            style: c,
                            onSelect: () => a(),
                            children: [
                                (0, s.jsx)(H.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: Z.sV,
                                }),
                                (0, s.jsx)(G.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: _.intl.string(_.t.pWG4ze),
                                }),
                            ],
                        },
                        p,
                    );
                if ((0, F.C3)(h)) {
                    let e = i?.skuId === h.skuId;
                    return (0, s.jsx)(
                        en,
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
            getItemHeight: ee,
            removeEdgeItemGutters: !0,
        }),
    });
};
var es = n(652215),
    er = n(529005);
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
        g = null != i ? (0, A.gA)(i) : (0, A.G0)(n);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(a.jl, {
            "data-migration-pending": !0,
            className: er.Hx,
            children: [
                (null != i && (d || !g)) || null === p
                    ? (0, s.jsx)(u.$, { variant: "primary", text: _.intl.string(_.t.Jh8fJz), onClick: r, disabled: o })
                    : null == i && (d || !g)
                      ? (0, s.jsx)(u.$, {
                            variant: "primary",
                            text: _.intl.string(_.t.fYfGgK),
                            onClick: () => c(p?.skuId),
                        })
                      : (0, s.jsx)(E.A, {
                            showGradient: !d,
                            text: I.Ay.isPremium(t)
                                ? _.intl.string(_.t.KXLX7l)
                                : d
                                  ? _.intl.string(_.t.mr4K7D)
                                  : _.intl.string(_.t.pj0XBN),
                        }),
                !d && g
                    ? (0, s.jsx)(m.A, { itemType: i?.type ?? n?.type, onClose: l })
                    : (0, s.jsx)(u.$, { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: l }),
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
            modalHeadingId: m,
            onClose: f,
        } = e,
        { pendingProfileEffect: x } = (0, g.nZ)(n?.id),
        [v, E] = r.useMemo(() => {
            let e = (0, A.sz)(i, l);
            return [e.purchased, e.shopPreviews];
        }, [i, l]),
        [y, P] = r.useState(() => (null != u ? u : void 0 !== x ? x : null == o ? null : (o ?? null))),
        k = r.useMemo(
            () =>
                v.find((e) => {
                    let { skuId: t } = e;
                    return t === y?.skuId;
                }) ??
                E.find((e) => {
                    let { skuId: t } = e;
                    return t === y?.skuId;
                }) ??
                null,
            [y, v, E],
        ),
        { product: N, purchase: S } = (0, j.A)(k?.skuId),
        b = r.useRef(null),
        R = I.Ay.canUseCollectibles(t),
        w = void 0 === x ? y?.skuId === o?.skuId : y?.skuId === x?.skuId,
        M = r.useCallback(
            (e) => {
                P(e);
            },
            [P],
        ),
        T = r.useCallback(
            (e) => {
                (f(),
                    (0, C.Cz)({
                        analyticsLocations: p,
                        analyticsSource: d.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    }));
            },
            [p, f],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: er.Hc,
                children: [
                    (0, s.jsx)(c.D, { id: m, variant: "heading-lg/semibold", children: _.intl.string(_.t["/6nv6N"]) }),
                    (0, s.jsx)(a.s_, { "data-migration-pending": !0, className: er.iT, onClick: f }),
                ],
            }),
            (0, s.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: er.jE,
                children: [
                    (0, s.jsx)(ei, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: y,
                        selectedProfileEffectRef: b,
                        onSelect: M,
                        onOpenShop: T,
                    }),
                    (0, s.jsx)(U, { user: t, profileEffect: k, guild: n }),
                ],
            }),
            (0, s.jsx)(el, {
                user: t,
                onApply: function () {
                    ((0, h.p)({ guildId: n?.id, profileEffect: y ?? null }), f());
                },
                onClose: f,
                onOpenShop: T,
                product: N,
                purchase: S,
                canUsePremiumCollectibles: R,
                selectedProfileEffect: y,
                disableApplyButton: w,
            }),
        ],
    });
}
function eu(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: i, guild: u, onClose: c, returnRef: m } = e,
        { categories: h, purchases: I, isFetchingCategories: C, isFetchingPurchases: A } = (0, v.Ay)(),
        j = C || (A && 0 === I.size),
        E = r.useId(),
        y = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: P } = (0, p.Ay)(n, d.A.EDIT_PROFILE_EFFECT_MODAL),
        k = (0, g.N2)({ user: y, guildId: u?.id });
    return (
        r.useEffect(() => {
            x.default.track(es.HAw.OPEN_MODAL, { type: es.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: P });
        }, [P]),
        (0, s.jsx)(p.f5, {
            value: P,
            children: (0, s.jsx)(a.EO, {
                transitionState: t,
                className: er.yl,
                size: j ? a.rI.DYNAMIC : a.rI.MEDIUM,
                parentComponent: "ProfileEffectModal",
                returnRef: m,
                "aria-label": j ? _.intl.string(_.t["/6nv6N"]) : void 0,
                "aria-labelledby": j ? void 0 : E,
                "data-migration-pending": !0,
                children: j
                    ? (0, s.jsx)(o.y, { className: er.u1, type: o.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(ea, {
                          user: y,
                          guild: u,
                          categories: h,
                          purchases: I,
                          initialSelectedProfileEffect: i,
                          currentSavedEffect: k,
                          onClose: c,
                          analyticsLocations: P,
                          modalHeadingId: E,
                      }),
            }),
        })
    );
}
