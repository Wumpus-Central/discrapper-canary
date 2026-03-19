n.d(t, { default: () => b });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(793574),
    o = n(688810),
    c = n(979286),
    d = n(993408),
    u = n(821701),
    m = n(841702),
    p = n(571827),
    g = n(465794),
    x = n(919395),
    f = n(84540),
    A = n(287809),
    h = n(954571),
    _ = n(927578),
    E = n(725550),
    y = n(307560),
    C = n(652215),
    j = n(788868),
    I = n(985018),
    P = n(818183);
function v(e) {
    let {
            user: t,
            product: n,
            purchase: i,
            onApply: s,
            onClose: a,
            onOpenShop: o,
            disableApplyButton: c,
            canUsePremiumCollectibles: u,
            selectedProfileEffect: m,
        } = e,
        x = null != i ? (0, d.gA)(i) : (0, d.G0)(n);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(l.jlY, {
            "data-migration-pending": !0,
            className: P.Hx,
            children: [
                (null != i && (u || !x)) || null === m
                    ? (0, r.jsx)(l.Button, {
                          variant: "primary",
                          text: I.intl.string(I.t.Jh8fJz),
                          onClick: s,
                          disabled: c,
                      })
                    : null == i && (u || !x)
                      ? (0, r.jsx)(l.Button, {
                            variant: "primary",
                            text: I.intl.string(I.t.fYfGgK),
                            onClick: () => o(m?.skuId),
                        })
                      : (0, r.jsx)(g.A, {
                            subscriptionTier: j.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: _.Ay.isPremium(t)
                                    ? I.intl.string(I.t.KXLX7l)
                                    : u
                                      ? I.intl.string(I.t.mr4K7D)
                                      : I.intl.string(I.t.pj0XBN),
                            },
                        }),
                !u && x
                    ? (0, r.jsx)(p.A, { itemType: i?.type ?? n?.type, onClose: a })
                    : (0, r.jsx)(l.Button, { variant: "secondary", text: I.intl.string(I.t["ETE/oC"]), onClick: a }),
            ],
        }),
    });
}
function T(e) {
    let {
            user: t,
            guild: n,
            categories: s,
            purchases: o,
            initialSelectedProfileEffect: m,
            currentSavedEffect: p,
            analyticsLocations: g,
            onClose: A,
        } = e,
        { pendingProfileEffect: h } = (0, x.nZ)(n?.id),
        [C, j] = i.useMemo(() => {
            let e = (0, d.sz)(s, o);
            return [e.purchased, e.shopPreviews];
        }, [s, o]),
        [T, b] = i.useState(() => (null != m ? m : void 0 !== h ? h : null == p ? null : (p ?? null))),
        S = i.useMemo(
            () =>
                C.find((e) => {
                    let { skuId: t } = e;
                    return t === T?.skuId;
                }) ??
                j.find((e) => {
                    let { skuId: t } = e;
                    return t === T?.skuId;
                }) ??
                null,
            [T, C, j],
        ),
        { product: N, purchase: k } = (0, u.A)(S?.skuId),
        O = i.useRef(null),
        R = _.Ay.canUseCollectibles(t),
        U = void 0 === h ? T?.skuId === p?.skuId : T?.skuId === h?.skuId,
        L = i.useCallback(
            (e) => {
                b(e);
            },
            [b],
        ),
        M = i.useCallback(
            (e) => {
                A(),
                    (0, c.Cz)({
                        analyticsLocations: g,
                        analyticsSource: a.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [g, A],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: P.Hc,
                children: [
                    (0, r.jsx)(l.Heading, { variant: "heading-lg/semibold", children: I.intl.string(I.t["/6nv6N"]) }),
                    (0, r.jsx)(l.s_y, { "data-migration-pending": !0, className: P.iT, onClick: A }),
                ],
            }),
            (0, r.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: P.jE,
                children: [
                    (0, r.jsx)(y.A, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: T,
                        selectedProfileEffectRef: O,
                        onSelect: L,
                        onOpenShop: M,
                    }),
                    (0, r.jsx)(E.A, { user: t, pendingProfileEffectRecord: S, product: N, purchase: k, guild: n }),
                ],
            }),
            (0, r.jsx)(v, {
                user: t,
                onApply: () => {
                    (0, f.p)({ guildId: n?.id, profileEffect: T ?? null }), A();
                },
                onClose: A,
                onOpenShop: M,
                product: N,
                purchase: k,
                canUsePremiumCollectibles: R,
                selectedProfileEffect: T,
                disableApplyButton: U,
            }),
        ],
    });
}
function b(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: c, guild: d, onClose: u } = e,
        { isFetching: p, categories: g, purchases: f } = (0, m.Ay)(),
        _ = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: E } = (0, o.Ay)(n, a.A.EDIT_PROFILE_EFFECT_MODAL),
        y = (0, x.N2)({ user: _, guildId: d?.id });
    return (
        i.useEffect(() => {
            h.default.track(C.HAw.OPEN_MODAL, { type: C.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: E });
        }, [E]),
        (0, r.jsx)(o.f5, {
            value: E,
            children: (0, r.jsx)(l.EOs, {
                transitionState: t,
                className: P.yl,
                size: p ? l.rIJ.DYNAMIC : l.rIJ.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, r.jsx)(l.y$y, { className: P.u1, type: l.y$y.Type.SPINNING_CIRCLE })
                    : (0, r.jsx)(T, {
                          user: _,
                          guild: d,
                          categories: g,
                          purchases: f,
                          initialSelectedProfileEffect: c,
                          currentSavedEffect: y,
                          onClose: u,
                          analyticsLocations: E,
                      }),
            }),
        })
    );
}
