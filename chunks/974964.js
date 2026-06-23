n.d(t, { default: () => eu });
var i,
    s = n(627968),
    r = n(64700),
    l = n(17928),
    a = n(821609),
    u = n(935462),
    o = n(534514),
    c = n(289873),
    d = n(793574),
    p = n(688810),
    m = n(571827),
    g = n(725807),
    h = n(919395),
    x = n(84540),
    f = n(287809),
    I = n(174459),
    A = n(428262),
    C = n(564064),
    j = n(993408),
    k = n(821701),
    y = n(841702),
    P = n(451909),
    v = n(986687),
    E = n(101058),
    S = n(836602),
    N = n(814390),
    R = n(448429),
    _ = n(375708),
    b = n(220674);
let F = function (e) {
    let { user: t, profileFrame: n, guild: i } = e,
        {
            pendingGlobalName: r,
            pendingNickname: a,
            pendingPronouns: u,
            pendingBio: o,
            pendingBanner: c,
            pendingAvatar: d,
            pendingAvatarDecoration: p,
            pendingProfileEffect: m,
            pendingDisplayNameStyles: g,
            pendingThemeColors: h,
            pendingAccentColor: x,
        } = (0, l.cf)([S.A], () => S.A.getPendingChanges(i?.id)),
        f = A.Ay.canUsePremiumProfileCustomization(t),
        I = (0, N.A)() && null != o ? P.Ay.parse(void 0, o).content : o;
    return (0, s.jsxs)("div", {
        className: b.i,
        children: [
            (0, s.jsx)(v.A, {
                user: t,
                guild: i,
                pendingProfileFrame: n ?? null,
                pendingGlobalName: r,
                pendingNickname: a,
                pendingPronouns: u,
                pendingBio: I,
                pendingBanner: c,
                pendingAvatar: (0, E.V7)({ userId: t.id, image: d }),
                pendingAvatarDecoration: p,
                pendingThemeColors: h,
                pendingAccentColor: x,
                pendingProfileEffect: m,
                pendingDisplayNameStyles: g,
                canUsePremiumCustomization: f,
                disabledInputs: !0,
                hideCustomStatus: !0,
            }),
            (0, s.jsx)(R.A, {
                user: t,
                previewSkuId: n?.skuId,
                nitroChurnCTA: _.intl.string(_.t.RPIwEb),
                nitroJoinCTA: _.intl.string(_.t.iu352Z),
            }),
        ],
    });
};
var M = n(503698),
    O = n.n(M),
    U = n(575593),
    T = n(939249),
    w = n(428678),
    D = n(834730),
    G = n(34188),
    H = n(92008),
    L = n(892118),
    z = n(483968);
n(321073);
var J = n(702841),
    K = n(590180),
    X = n(4227),
    B = n(13875),
    V = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let W = { skuId: "None" },
    $ = { skuId: "Shop" },
    Z = function () {
        let e = (0, J.bG)([X.A], () => X.A.purchases),
            [t, n] = (0, J.yK)([K.A], () => [K.A.categories, K.A.products]),
            i = (0, B.Do)("useProfileFrameSections");
        return (0, r.useMemo)(() => {
            let s = (0, j.MG)(e, t).reduce(
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
                r = _.intl.string(_.t.TiLCgw);
            return [
                { section: "purchase", items: [W, $, ...s.purchase], height: 12, header: _.intl.string(_.t["9eZ4aO"]) },
                { section: "premium_purchase", items: s.premium_purchase, height: 12, header: r },
                { section: "preview", items: s.preview, height: 12, header: i ? r : _.intl.string(_.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, n, e, i]);
    };
var Y = n(665411),
    q = n(900183);
let Q = () => 80;
function ee(e) {
    let { children: t, className: n, isSelected: i, ...r } = e;
    return (0, s.jsx)(T.D, {
        "aria-pressed": i,
        className: O()(q.X5, n, { [q.wH]: i }),
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
        className: q.IO,
        ...u,
        children: [
            (0, s.jsx)(Y.A, { frame: t }),
            (0, s.jsx)(z.A, {
                skuId: t.skuId,
                canUsePremiumCollectibles: a,
                isPurchaseSection: i === V.PURCHASE,
                isPremiumSection: i === V.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let en = (e) => {
    let { user: t, guild: n, pendingProfileFrame: i, selectedProfileFrameRef: r, onSelect: l, onOpenShop: a } = e,
        u = Z(),
        c = null != i,
        d = A.Ay.canUseCollectibles(t);
    return (0, s.jsx)("section", {
        className: q.uW,
        children: (0, s.jsx)(H.f, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: q.p_,
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
                            isSelected: !c,
                            onSelect: () => l(null),
                            children: [
                                (0, s.jsx)(w.K, { size: "md", color: "currentColor", className: q.vo }),
                                (0, s.jsx)(D.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: null != n ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t.PoWNfe),
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
                            onSelect: a,
                            children: [
                                (0, s.jsx)(G.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: q.sV,
                                }),
                                (0, s.jsx)(D.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: _.intl.string(_.t.pWG4ze),
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
                            canUsePremiumCollectibles: d,
                            onSelect: () => l({ skuId: h.skuId, type: U.R.PROFILE_FRAME }),
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
                    children: (0, s.jsx)(o.D, { variant: "heading-md/medium", children: n }),
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
    es = n(788868),
    er = n(12960);
function el(e) {
    let {
            user: t,
            product: n,
            purchase: i,
            onApply: r,
            onClose: l,
            onOpenShop: o,
            disableApplyButton: c,
            canUsePremiumCollectibles: d,
            selectedProfileFrame: p,
        } = e,
        h = null != i ? (0, j.gA)(i) : (0, j.G0)(n);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(u.jl, {
            "data-migration-pending": !0,
            className: er.Hx,
            children: [
                (null != i && (d || !h)) || null === p
                    ? (0, s.jsx)(a.$, { variant: "primary", text: _.intl.string(_.t.Jh8fJz), onClick: r, disabled: c })
                    : null == i && (d || !h)
                      ? (0, s.jsx)(a.$, {
                            variant: "primary",
                            text: _.intl.string(_.t.fYfGgK),
                            onClick: () => o(p?.skuId),
                        })
                      : (0, s.jsx)(g.A, {
                            subscriptionTier: es.pe.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: A.Ay.isPremium(t)
                                    ? _.intl.string(_.t.KXLX7l)
                                    : d
                                      ? _.intl.string(_.t.mr4K7D)
                                      : _.intl.string(_.t.pj0XBN),
                            },
                        }),
                !d && h
                    ? (0, s.jsx)(m.A, { itemType: i?.type ?? n?.type, onClose: l })
                    : (0, s.jsx)(a.$, { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: l }),
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
            currentSavedFrame: a,
            analyticsLocations: c,
            initialSelectedProfileFrame: p,
            onClose: m,
        } = e,
        { pendingProfileFrame: g } = (0, h.Tu)(n?.id),
        f = r.useMemo(() => (0, j.MG)(l, i), [i, l]),
        [I, y] = r.useState(() => (null != p ? p : void 0 !== g ? g : (a ?? null))),
        P = r.useMemo(
            () =>
                f.find((e) => {
                    let { skuId: t } = e;
                    return t === I?.skuId;
                }) ?? null,
            [I, f],
        ),
        { product: v, purchase: E } = (0, k.A)(P?.skuId),
        S = r.useRef(null),
        N = A.Ay.canUseCollectibles(t),
        R = void 0 === g ? I?.skuId === a?.skuId : I?.skuId === g?.skuId,
        b = r.useCallback(
            (e) => {
                y(e);
            },
            [y],
        ),
        M = r.useCallback(
            (e) => {
                m(),
                    (0, C.Cz)({
                        analyticsLocations: c,
                        analyticsSource: d.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [c, m],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: er.Hc,
                children: [
                    (0, s.jsx)(o.D, { variant: "heading-lg/semibold", children: _.intl.string(_.t["oTSa/q"]) }),
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
                        pendingProfileFrame: I,
                        selectedProfileFrameRef: S,
                        onSelect: b,
                        onOpenShop: M,
                    }),
                    (0, s.jsx)(F, { user: t, profileFrame: P, guild: n }),
                ],
            }),
            (0, s.jsx)(el, {
                user: t,
                onApply: function () {
                    (0, x.p)({ guildId: n?.id, profileFrame: I ?? null }), m();
                },
                onClose: m,
                onOpenShop: M,
                product: v,
                purchase: E,
                canUsePremiumCollectibles: N,
                selectedProfileFrame: I,
                disableApplyButton: R,
            }),
        ],
    });
}
function eu(e) {
    let { transitionState: t, analyticsLocations: n, guild: i, onClose: a, initialSelectedProfileFrame: o } = e,
        { categories: m, purchases: g, isFetchingCategories: x, isFetchingPurchases: A } = (0, y.Ay)(),
        C = x || (A && 0 === g.size),
        j = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: k } = (0, p.Ay)(n, d.A.EDIT_PROFILE_FRAME_MODAL),
        P = (0, h.Xf)({ user: j, guildId: i?.id });
    return (
        r.useEffect(() => {
            I.default.track(ei.HAw.OPEN_MODAL, { type: ei.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: k });
        }, [k]),
        (0, s.jsx)(p.f5, {
            value: k,
            children: (0, s.jsx)(u.EO, {
                transitionState: t,
                className: er.yl,
                size: C ? u.rI.DYNAMIC : u.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: C
                    ? (0, s.jsx)(c.y, { className: er.u1, type: c.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(ea, {
                          user: j,
                          guild: i,
                          categories: m,
                          purchases: g,
                          currentSavedFrame: P,
                          onClose: a,
                          analyticsLocations: k,
                          initialSelectedProfileFrame: o,
                      }),
            }),
        })
    );
}
