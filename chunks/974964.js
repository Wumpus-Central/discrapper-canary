i.d(t, { default: () => er });
var n,
    s = i(627968),
    r = i(64700),
    l = i(17928),
    a = i(821609),
    u = i(935462),
    o = i(534514),
    c = i(289873),
    d = i(793574),
    p = i(688810),
    m = i(571827),
    g = i(725807),
    h = i(919395),
    x = i(84540),
    I = i(287809),
    A = i(954571),
    f = i(927578),
    j = i(693477),
    C = i(993408),
    y = i(821701),
    k = i(841702),
    P = i(451909),
    v = i(986687),
    E = i(101058),
    S = i(836602),
    N = i(814390),
    _ = i(220674);
let R = (e) => {
    let { user: t, profileFrame: i, guild: n } = e,
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
        } = (0, l.cf)([S.A], () => S.A.getPendingChanges(n?.id)),
        I = f.Ay.canUsePremiumProfileCustomization(t),
        A = (0, N.A)() && null != o ? P.Ay.parse(void 0, o).content : o;
    return (0, s.jsx)("div", {
        className: _.i,
        children: (0, s.jsx)(v.A, {
            user: t,
            guild: n,
            pendingProfileFrame: i ?? null,
            pendingGlobalName: r,
            pendingNickname: a,
            pendingPronouns: u,
            pendingBio: A,
            pendingBanner: c,
            pendingAvatar: (0, E.V7)({ userId: t.id, image: d }),
            pendingAvatarDecoration: p,
            pendingThemeColors: h,
            pendingAccentColor: x,
            pendingProfileEffect: m,
            pendingDisplayNameStyles: g,
            canUsePremiumCustomization: I,
            disabledInputs: !0,
            hideCustomStatus: !0,
        }),
    });
};
var M = i(503698),
    b = i.n(M),
    F = i(575593),
    U = i(939249),
    O = i(428678),
    G = i(834730),
    T = i(34188),
    D = i(92008),
    w = i(892118),
    H = i(483968);
i(321073);
var L = i(702841),
    z = i(590180),
    K = i(4227),
    J = i(985018),
    X = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let B = { skuId: "None" },
    V = { skuId: "Shop" };
var W = i(887792),
    $ = i(900183);
let Y = () => 80,
    Z = (e) => {
        let { children: t, className: i, isSelected: n, ...r } = e;
        return (0, s.jsx)(U.D, {
            "aria-pressed": n,
            className: b()($.X5, i, { [$.wH]: n }),
            ...r,
            onClick: r.onSelect,
            children: t,
        });
    },
    q = (e) => {
        let { profileFrame: t, innerRef: i, section: n, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
            o = r.useRef(null);
        return (0, s.jsxs)(Z, {
            innerRef: i ?? o,
            isSelected: l,
            ...u,
            children: [
                (0, s.jsx)(W.A, { frame: t }),
                (0, s.jsx)(H.A, {
                    skuId: t.skuId,
                    canUsePremiumCollectibles: a,
                    isPurchaseSection: n === X.PURCHASE,
                    isPremiumSection: n === X.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    Q = (e) => {
        let { user: t, guild: i, pendingProfileFrame: n, selectedProfileFrameRef: l, onSelect: a, onOpenShop: u } = e,
            c = (() => {
                let e = (0, L.bG)([K.A], () => K.A.purchases),
                    [t, i] = (0, L.yK)([z.A], () => [z.A.categories, z.A.products]);
                return (0, r.useMemo)(() => {
                    let n = (0, C.MG)(e, t).reduce(
                        (t, n) => {
                            let s = e.get(n.skuId);
                            return (
                                (null != s ? (0, C.gA)(s) : (0, C.G0)(i.get(n.skuId)))
                                    ? t.premium_purchase.push(n)
                                    : null != s
                                      ? t.purchase.push(n)
                                      : t.preview.push(n),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [B, V, ...n.purchase],
                            height: 12,
                            header: J.intl.string(J.t["9eZ4aO"]),
                        },
                        {
                            section: "premium_purchase",
                            items: n.premium_purchase,
                            height: 12,
                            header: J.intl.string(J.t.TiLCgw),
                        },
                        { section: "preview", items: n.preview, height: 12, header: J.intl.string(J.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, i, e]);
            })(),
            d = null != n,
            p = f.Ay.canUseCollectibles(t);
        return (0, s.jsx)("section", {
            className: $.uW,
            children: (0, s.jsx)(D.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: $.p_,
                columns: 3,
                sections: c.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, r, o) => {
                    let { section: m, items: g } = c[e],
                        h = g[t];
                    if (h === B)
                        return (0, s.jsxs)(
                            Z,
                            {
                                style: { ...r },
                                isSelected: !d,
                                onSelect: () => a(null),
                                children: [
                                    (0, s.jsx)(O.K, { size: "md", color: "currentColor", className: $.vo }),
                                    (0, s.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != i ? J.intl.string(J.t.CHf9iJ) : J.intl.string(J.t.PoWNfe),
                                    }),
                                ],
                            },
                            o,
                        );
                    if (h === V)
                        return (0, s.jsxs)(
                            Z,
                            {
                                style: r,
                                onSelect: u,
                                children: [
                                    (0, s.jsx)(T.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: $.sV,
                                    }),
                                    (0, s.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: J.intl.string(J.t.pWG4ze),
                                    }),
                                ],
                            },
                            o,
                        );
                    if ((0, w.s)(h)) {
                        let e = n?.skuId === h.skuId;
                        return (0, s.jsx)(
                            q,
                            {
                                style: { ...r },
                                profileFrame: h,
                                section: m,
                                innerRef: e ? l : void 0,
                                isSelected: e,
                                canUsePremiumCollectibles: p,
                                onSelect: () => a({ skuId: h.skuId, type: F.R.PROFILE_FRAME }),
                            },
                            o,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: i } = c[e];
                    return (0, s.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, s.jsx)(o.D, { variant: "heading-md/medium", children: i }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => c[e].items[t].skuId,
                getItemHeight: Y,
                removeEdgeItemGutters: !0,
            }),
        });
    };
var ee = i(652215),
    et = i(788868),
    ei = i(12960);
function en(e) {
    let {
            user: t,
            product: i,
            purchase: n,
            onApply: r,
            onClose: l,
            onOpenShop: o,
            disableApplyButton: c,
            canUsePremiumCollectibles: d,
            selectedProfileFrame: p,
        } = e,
        h = null != n ? (0, C.gA)(n) : (0, C.G0)(i);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(u.jl, {
            "data-migration-pending": !0,
            className: ei.Hx,
            children: [
                (null != n && (d || !h)) || null === p
                    ? (0, s.jsx)(a.$, { variant: "primary", text: J.intl.string(J.t.Jh8fJz), onClick: r, disabled: c })
                    : null == n && (d || !h)
                      ? (0, s.jsx)(a.$, {
                            variant: "primary",
                            text: J.intl.string(J.t.fYfGgK),
                            onClick: () => o(p?.skuId),
                        })
                      : (0, s.jsx)(g.A, {
                            subscriptionTier: et.pe.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: f.Ay.isPremium(t)
                                    ? J.intl.string(J.t.KXLX7l)
                                    : d
                                      ? J.intl.string(J.t.mr4K7D)
                                      : J.intl.string(J.t.pj0XBN),
                            },
                        }),
                !d && h
                    ? (0, s.jsx)(m.A, { itemType: n?.type ?? i?.type, onClose: l })
                    : (0, s.jsx)(a.$, { variant: "secondary", text: J.intl.string(J.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function es(e) {
    let {
            user: t,
            guild: i,
            categories: n,
            purchases: l,
            currentSavedFrame: a,
            analyticsLocations: c,
            initialSelectedProfileFrame: p,
            onClose: m,
        } = e,
        { pendingProfileFrame: g } = (0, h.Tu)(i?.id),
        I = r.useMemo(() => (0, C.MG)(l, n), [n, l]),
        [A, k] = r.useState(() => (null != p ? p : void 0 !== g ? g : (a ?? null))),
        P = r.useMemo(
            () =>
                I.find((e) => {
                    let { skuId: t } = e;
                    return t === A?.skuId;
                }) ?? null,
            [A, I],
        ),
        { product: v, purchase: E } = (0, y.A)(P?.skuId),
        S = r.useRef(null),
        N = f.Ay.canUseCollectibles(t),
        _ = void 0 === g ? A?.skuId === a?.skuId : A?.skuId === g?.skuId,
        M = r.useCallback(
            (e) => {
                k(e);
            },
            [k],
        ),
        b = r.useCallback(
            (e) => {
                m(),
                    (0, j.Cz)({
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
                className: ei.Hc,
                children: [
                    (0, s.jsx)(o.D, { variant: "heading-lg/semibold", children: J.intl.string(J.t["oTSa/q"]) }),
                    (0, s.jsx)(u.s_, { "data-migration-pending": !0, className: ei.iT, onClick: m }),
                ],
            }),
            (0, s.jsxs)(u.$m, {
                "data-migration-pending": !0,
                className: ei.jE,
                children: [
                    (0, s.jsx)(Q, {
                        user: t,
                        guild: i,
                        pendingProfileFrame: A,
                        selectedProfileFrameRef: S,
                        onSelect: M,
                        onOpenShop: b,
                    }),
                    (0, s.jsx)(R, { user: t, profileFrame: P, product: v, purchase: E, guild: i }),
                ],
            }),
            (0, s.jsx)(en, {
                user: t,
                onApply: () => {
                    (0, x.p)({ guildId: i?.id, profileFrame: A ?? null }), m();
                },
                onClose: m,
                onOpenShop: b,
                product: v,
                purchase: E,
                canUsePremiumCollectibles: N,
                selectedProfileFrame: A,
                disableApplyButton: _,
            }),
        ],
    });
}
function er(e) {
    let { transitionState: t, analyticsLocations: i, guild: n, onClose: a, initialSelectedProfileFrame: o } = e,
        { isFetching: m, categories: g, purchases: x } = (0, k.Ay)(),
        f = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
        { analyticsLocations: j } = (0, p.Ay)(i, d.A.EDIT_PROFILE_FRAME_MODAL),
        C = (0, h.Xf)({ user: f, guildId: n?.id });
    return (
        r.useEffect(() => {
            A.default.track(ee.HAw.OPEN_MODAL, { type: ee.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: j });
        }, [j]),
        (0, s.jsx)(p.f5, {
            value: j,
            children: (0, s.jsx)(u.EO, {
                transitionState: t,
                className: ei.yl,
                size: m ? u.rI.DYNAMIC : u.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: m
                    ? (0, s.jsx)(c.y, { className: ei.u1, type: c.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(es, {
                          user: f,
                          guild: n,
                          categories: g,
                          purchases: x,
                          currentSavedFrame: C,
                          onClose: a,
                          analyticsLocations: j,
                          initialSelectedProfileFrame: o,
                      }),
            }),
        })
    );
}
