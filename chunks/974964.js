i.d(t, { default: () => ea });
var n,
    s = i(627968),
    r = i(64700),
    l = i(17928),
    a = i(821609),
    u = i(935462),
    o = i(534514),
    d = i(289873),
    c = i(793574),
    p = i(688810),
    m = i(571827),
    g = i(725807),
    h = i(919395),
    x = i(84540),
    I = i(287809),
    A = i(174459),
    f = i(927578),
    C = i(859040),
    j = i(993408),
    k = i(821701),
    y = i(841702),
    P = i(451909),
    v = i(986687),
    E = i(101058),
    S = i(836602),
    N = i(814390),
    R = i(448429),
    _ = i(375708),
    b = i(220674);
let F = (e) => {
    let { user: t, profileFrame: i, guild: n } = e,
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
            pendingAccentColor: x,
        } = (0, l.cf)([S.A], () => S.A.getPendingChanges(n?.id)),
        I = f.Ay.canUsePremiumProfileCustomization(t),
        A = (0, N.A)() && null != o ? P.Ay.parse(void 0, o).content : o;
    return (0, s.jsxs)("div", {
        className: b.i,
        children: [
            (0, s.jsx)(v.A, {
                user: t,
                guild: n,
                pendingProfileFrame: i ?? null,
                pendingGlobalName: r,
                pendingNickname: a,
                pendingPronouns: u,
                pendingBio: A,
                pendingBanner: d,
                pendingAvatar: (0, E.V7)({ userId: t.id, image: c }),
                pendingAvatarDecoration: p,
                pendingThemeColors: h,
                pendingAccentColor: x,
                pendingProfileEffect: m,
                pendingDisplayNameStyles: g,
                canUsePremiumCustomization: I,
                disabledInputs: !0,
                hideCustomStatus: !0,
            }),
            (0, s.jsx)(R.A, {
                user: t,
                previewSkuId: i?.skuId,
                nitroChurnCTA: _.intl.string(_.t.RPIwEb),
                nitroJoinCTA: _.intl.string(_.t.iu352Z),
            }),
        ],
    });
};
var M = i(503698),
    U = i.n(M),
    O = i(575593),
    T = i(939249),
    w = i(428678),
    D = i(834730),
    G = i(34188),
    H = i(92008),
    L = i(892118),
    z = i(483968);
i(321073);
var J = i(702841),
    K = i(590180),
    X = i(4227),
    B = i(13875),
    V = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let W = { skuId: "None" },
    $ = { skuId: "Shop" };
var Z = i(887792),
    Y = i(900183);
let q = () => 80,
    Q = (e) => {
        let { children: t, className: i, isSelected: n, ...r } = e;
        return (0, s.jsx)(T.D, {
            "aria-pressed": n,
            className: U()(Y.X5, i, { [Y.wH]: n }),
            ...r,
            onClick: r.onSelect,
            children: t,
        });
    },
    ee = (e) => {
        let { profileFrame: t, innerRef: i, section: n, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
            o = r.useRef(null);
        return (0, s.jsxs)(Q, {
            innerRef: i ?? o,
            isSelected: l,
            ...u,
            children: [
                (0, s.jsx)(Z.A, { frame: t }),
                (0, s.jsx)(z.A, {
                    skuId: t.skuId,
                    canUsePremiumCollectibles: a,
                    isPurchaseSection: n === V.PURCHASE,
                    isPremiumSection: n === V.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    et = (e) => {
        let { user: t, guild: i, pendingProfileFrame: n, selectedProfileFrameRef: l, onSelect: a, onOpenShop: u } = e,
            d = (() => {
                let e = (0, J.bG)([X.A], () => X.A.purchases),
                    [t, i] = (0, J.yK)([K.A], () => [K.A.categories, K.A.products]),
                    n = (0, B.Do)("useProfileFrameSections");
                return (0, r.useMemo)(() => {
                    let s = (0, j.MG)(e, t).reduce(
                            (t, n) => {
                                let s = e.get(n.skuId);
                                return (
                                    (null != s ? (0, j.gA)(s) : (0, j.G0)(i.get(n.skuId)))
                                        ? t.premium_purchase.push(n)
                                        : null != s
                                          ? t.purchase.push(n)
                                          : t.preview.push(n),
                                    t
                                );
                            },
                            { purchase: [], premium_purchase: [], preview: [] },
                        ),
                        r = _.intl.string(_.t.TiLCgw);
                    return [
                        {
                            section: "purchase",
                            items: [W, $, ...s.purchase],
                            height: 12,
                            header: _.intl.string(_.t["9eZ4aO"]),
                        },
                        { section: "premium_purchase", items: s.premium_purchase, height: 12, header: r },
                        {
                            section: "preview",
                            items: s.preview,
                            height: 12,
                            header: n ? r : _.intl.string(_.t["1vbbee"]),
                        },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, i, e, n]);
            })(),
            c = null != n,
            p = f.Ay.canUseCollectibles(t);
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
                sections: d.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, r, o) => {
                    let { section: m, items: g } = d[e],
                        h = g[t];
                    if (h === W)
                        return (0, s.jsxs)(
                            Q,
                            {
                                style: { ...r },
                                isSelected: !c,
                                onSelect: () => a(null),
                                children: [
                                    (0, s.jsx)(w.K, { size: "md", color: "currentColor", className: Y.vo }),
                                    (0, s.jsx)(D.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != i ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t.PoWNfe),
                                    }),
                                ],
                            },
                            o,
                        );
                    if (h === $)
                        return (0, s.jsxs)(
                            Q,
                            {
                                style: r,
                                onSelect: u,
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
                                        children: _.intl.string(_.t.pWG4ze),
                                    }),
                                ],
                            },
                            o,
                        );
                    if ((0, L.s)(h)) {
                        let e = n?.skuId === h.skuId;
                        return (0, s.jsx)(
                            ee,
                            {
                                style: { ...r },
                                profileFrame: h,
                                section: m,
                                innerRef: e ? l : void 0,
                                isSelected: e,
                                canUsePremiumCollectibles: p,
                                onSelect: () => a({ skuId: h.skuId, type: O.R.PROFILE_FRAME }),
                            },
                            o,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: i } = d[e];
                    return (0, s.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, s.jsx)(o.D, { variant: "heading-md/medium", children: i }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => d[e].items[t].skuId,
                getItemHeight: q,
                removeEdgeItemGutters: !0,
            }),
        });
    };
var ei = i(652215),
    en = i(788868),
    es = i(12960);
function er(e) {
    let {
            user: t,
            product: i,
            purchase: n,
            onApply: r,
            onClose: l,
            onOpenShop: o,
            disableApplyButton: d,
            canUsePremiumCollectibles: c,
            selectedProfileFrame: p,
        } = e,
        h = null != n ? (0, j.gA)(n) : (0, j.G0)(i);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(u.jl, {
            "data-migration-pending": !0,
            className: es.Hx,
            children: [
                (null != n && (c || !h)) || null === p
                    ? (0, s.jsx)(a.$, { variant: "primary", text: _.intl.string(_.t.Jh8fJz), onClick: r, disabled: d })
                    : null == n && (c || !h)
                      ? (0, s.jsx)(a.$, {
                            variant: "primary",
                            text: _.intl.string(_.t.fYfGgK),
                            onClick: () => o(p?.skuId),
                        })
                      : (0, s.jsx)(g.A, {
                            subscriptionTier: en.pe.TIER_2,
                            showGradient: !c,
                            textOptions: {
                                textOverride: f.Ay.isPremium(t)
                                    ? _.intl.string(_.t.KXLX7l)
                                    : c
                                      ? _.intl.string(_.t.mr4K7D)
                                      : _.intl.string(_.t.pj0XBN),
                            },
                        }),
                !c && h
                    ? (0, s.jsx)(m.A, { itemType: n?.type ?? i?.type, onClose: l })
                    : (0, s.jsx)(a.$, { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function el(e) {
    let {
            user: t,
            guild: i,
            categories: n,
            purchases: l,
            currentSavedFrame: a,
            analyticsLocations: d,
            initialSelectedProfileFrame: p,
            onClose: m,
        } = e,
        { pendingProfileFrame: g } = (0, h.Tu)(i?.id),
        I = r.useMemo(() => (0, j.MG)(l, n), [n, l]),
        [A, y] = r.useState(() => (null != p ? p : void 0 !== g ? g : (a ?? null))),
        P = r.useMemo(
            () =>
                I.find((e) => {
                    let { skuId: t } = e;
                    return t === A?.skuId;
                }) ?? null,
            [A, I],
        ),
        { product: v, purchase: E } = (0, k.A)(P?.skuId),
        S = r.useRef(null),
        N = f.Ay.canUseCollectibles(t),
        R = void 0 === g ? A?.skuId === a?.skuId : A?.skuId === g?.skuId,
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
                        analyticsLocations: d,
                        analyticsSource: c.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, m],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: es.Hc,
                children: [
                    (0, s.jsx)(o.D, { variant: "heading-lg/semibold", children: _.intl.string(_.t["oTSa/q"]) }),
                    (0, s.jsx)(u.s_, { "data-migration-pending": !0, className: es.iT, onClick: m }),
                ],
            }),
            (0, s.jsxs)(u.$m, {
                "data-migration-pending": !0,
                className: es.jE,
                children: [
                    (0, s.jsx)(et, {
                        user: t,
                        guild: i,
                        pendingProfileFrame: A,
                        selectedProfileFrameRef: S,
                        onSelect: b,
                        onOpenShop: M,
                    }),
                    (0, s.jsx)(F, { user: t, profileFrame: P, guild: i }),
                ],
            }),
            (0, s.jsx)(er, {
                user: t,
                onApply: () => {
                    (0, x.p)({ guildId: i?.id, profileFrame: A ?? null }), m();
                },
                onClose: m,
                onOpenShop: M,
                product: v,
                purchase: E,
                canUsePremiumCollectibles: N,
                selectedProfileFrame: A,
                disableApplyButton: R,
            }),
        ],
    });
}
function ea(e) {
    let { transitionState: t, analyticsLocations: i, guild: n, onClose: a, initialSelectedProfileFrame: o } = e,
        { isFetching: m, categories: g, purchases: x } = (0, y.Ay)(),
        f = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
        { analyticsLocations: C } = (0, p.Ay)(i, c.A.EDIT_PROFILE_FRAME_MODAL),
        j = (0, h.Xf)({ user: f, guildId: n?.id });
    return (
        r.useEffect(() => {
            A.default.track(ei.HAw.OPEN_MODAL, { type: ei.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: C });
        }, [C]),
        (0, s.jsx)(p.f5, {
            value: C,
            children: (0, s.jsx)(u.EO, {
                transitionState: t,
                className: es.yl,
                size: m ? u.rI.DYNAMIC : u.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: m
                    ? (0, s.jsx)(d.y, { className: es.u1, type: d.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(el, {
                          user: f,
                          guild: n,
                          categories: g,
                          purchases: x,
                          currentSavedFrame: j,
                          onClose: a,
                          analyticsLocations: C,
                          initialSelectedProfileFrame: o,
                      }),
            }),
        })
    );
}
