n.d(t, { default: () => T });
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
    A = n(287809),
    f = n(954571),
    h = n(927578),
    _ = n(725550),
    E = n(307560),
    y = n(652215),
    C = n(788868),
    j = n(985018),
    I = n(347677);
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
            className: I.Hx,
            children: [
                (null != i && (u || !x)) || null === m
                    ? (0, r.jsx)(l.Button, {
                          variant: "primary",
                          text: j.intl.string(j.t.Jh8fJz),
                          onClick: s,
                          disabled: c,
                      })
                    : null == i && (u || !x)
                      ? (0, r.jsx)(l.Button, {
                            variant: "primary",
                            text: j.intl.string(j.t.fYfGgK),
                            onClick: () => o(m?.skuId),
                        })
                      : (0, r.jsx)(g.A, {
                            subscriptionTier: C.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: h.Ay.isPremium(t)
                                    ? j.intl.string(j.t.KXLX7l)
                                    : u
                                      ? j.intl.string(j.t.mr4K7D)
                                      : j.intl.string(j.t.pj0XBN),
                            },
                        }),
                !u && x
                    ? (0, r.jsx)(p.A, { itemType: i?.type ?? n?.type, onClose: a })
                    : (0, r.jsx)(l.Button, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: a }),
            ],
        }),
    });
}
function P(e) {
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
        { pendingProfileEffect: f } = (0, x.nZ)(n?.id),
        [y, C] = i.useMemo(() => {
            let e = (0, d.sz)(s, o);
            return [e.purchased, e.shopPreviews];
        }, [s, o]),
        [P, T] = i.useState(() => (null != m ? m : void 0 !== f ? f : null == p ? null : (p ?? null))),
        b = i.useMemo(
            () =>
                y.find((e) => {
                    let { skuId: t } = e;
                    return t === P?.skuId;
                }) ??
                C.find((e) => {
                    let { skuId: t } = e;
                    return t === P?.skuId;
                }) ??
                null,
            [P, y, C],
        ),
        { product: N, purchase: S } = (0, u.A)(b?.skuId),
        k = i.useRef(null),
        O = h.Ay.canUseCollectibles(t),
        R = void 0 === f ? P?.skuId === p?.skuId : P?.skuId === f?.skuId,
        U = i.useCallback(
            (e) => {
                T(e);
            },
            [T],
        ),
        L = i.useCallback(
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
                className: I.Hc,
                children: [
                    (0, r.jsx)(l.Heading, { variant: "heading-lg/semibold", children: j.intl.string(j.t["/6nv6N"]) }),
                    (0, r.jsx)(l.s_y, { "data-migration-pending": !0, className: I.iT, onClick: A }),
                ],
            }),
            (0, r.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: I.jE,
                children: [
                    (0, r.jsx)(E.A, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: P,
                        selectedProfileEffectRef: k,
                        onSelect: U,
                        onOpenShop: L,
                    }),
                    (0, r.jsx)(_.A, { user: t, pendingProfileEffectRecord: b, product: N, purchase: S, guild: n }),
                ],
            }),
            (0, r.jsx)(v, {
                user: t,
                onApply: () => {
                    (0, x.mZ)(P, n?.id), A();
                },
                onClose: A,
                onOpenShop: L,
                product: N,
                purchase: S,
                canUsePremiumCollectibles: O,
                selectedProfileEffect: P,
                disableApplyButton: R,
            }),
        ],
    });
}
function T(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: c, guild: d, onClose: u } = e,
        { isFetching: p, categories: g, purchases: h } = (0, m.Ay)(),
        _ = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: E } = (0, o.Ay)(n, a.A.EDIT_PROFILE_EFFECT_MODAL),
        C = (0, x.N2)({ user: _, guildId: d?.id });
    return (
        i.useEffect(() => {
            f.default.track(y.HAw.OPEN_MODAL, { type: y.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: E });
        }, [E]),
        (0, r.jsx)(o.f5, {
            value: E,
            children: (0, r.jsx)(l.EOs, {
                transitionState: t,
                className: I.yl,
                size: p ? l.rIJ.DYNAMIC : l.rIJ.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, r.jsx)(l.y$y, { className: I.u1, type: l.y$y.Type.SPINNING_CIRCLE })
                    : (0, r.jsx)(P, {
                          user: _,
                          guild: d,
                          categories: g,
                          purchases: h,
                          initialSelectedProfileEffect: c,
                          currentSavedEffect: C,
                          onClose: u,
                          analyticsLocations: E,
                      }),
            }),
        })
    );
}
