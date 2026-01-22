n.d(t, { default: () => C }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    c = n(793574),
    o = n(688810),
    a = n(979286),
    u = n(993408),
    d = n(821701),
    p = n(841702),
    f = n(571827),
    m = n(465794),
    b = n(919395),
    g = n(287809),
    y = n(954571),
    x = n(927578),
    h = n(725550),
    j = n(307560),
    O = n(652215),
    A = n(788868),
    v = n(985018),
    P = n(347677);
function E(e) {
    var t;
    let {
            user: n,
            product: l,
            purchase: i,
            onApply: c,
            onClose: o,
            onOpenShop: a,
            disableApplyButton: d,
            canUsePremiumCollectibles: p,
            selectedProfileEffect: b,
        } = e,
        g = null != i ? (0, u.gA)(i) : (0, u.G0)(l);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(s.jlY, {
            "data-migration-pending": !0,
            className: P.Hx,
            children: [
                (null != i && (p || !g)) || null === b
                    ? (0, r.jsx)(s.Button, {
                          variant: "primary",
                          text: v.intl.string(v.t.Jh8fJz),
                          onClick: c,
                          disabled: d,
                      })
                    : null == i && (p || !g)
                      ? (0, r.jsx)(s.Button, {
                            variant: "primary",
                            text: v.intl.string(v.t.fYfGgK),
                            onClick: () => a(null == b ? void 0 : b.skuId),
                        })
                      : (0, r.jsx)(m.A, {
                            subscriptionTier: A.pe.TIER_2,
                            showGradient: !p,
                            textOptions: {
                                textOverride: x.Ay.isPremium(n)
                                    ? v.intl.string(v.t.KXLX7l)
                                    : p
                                      ? v.intl.string(v.t.mr4K7D)
                                      : v.intl.string(v.t.pj0XBN),
                            },
                        }),
                !p && g
                    ? (0, r.jsx)(f.A, {
                          itemType: null != (t = null == i ? void 0 : i.type) ? t : null == l ? void 0 : l.type,
                          onClose: o,
                      })
                    : (0, r.jsx)(s.Button, {
                          variant: "secondary",
                          text: v.intl.string(v.t["ETE/oC"]),
                          onClick: o,
                      }),
            ],
        }),
    });
}
function _(e) {
    let {
            user: t,
            guild: n,
            categories: i,
            purchases: o,
            initialSelectedProfileEffect: p,
            currentSavedEffect: f,
            analyticsLocations: m,
            onClose: g,
        } = e,
        { pendingProfileEffect: y } = (0, b.nZ)(null == n ? void 0 : n.id),
        [O, A] = l.useMemo(() => {
            let e = (0, u.sz)(i, o);
            return [e.purchased, e.shopPreviews];
        }, [i, o]),
        [_, C] = l.useState(() => (null != p ? p : void 0 !== y ? y : null == f ? null : null != f ? f : null)),
        I = l.useMemo(() => {
            var e;
            let t = O.find((e) => {
                let { skuId: t } = e;
                return t === (null == _ ? void 0 : _.skuId);
            });
            return null !=
                (e =
                    null != t
                        ? t
                        : A.find((e) => {
                              let { skuId: t } = e;
                              return t === (null == _ ? void 0 : _.skuId);
                          }))
                ? e
                : null;
        }, [_, O, A]),
        { product: S, purchase: w } = (0, d.A)(null == I ? void 0 : I.skuId),
        k = l.useRef(null),
        N = x.Ay.canUseCollectibles(t),
        T =
            void 0 === y
                ? (null == _ ? void 0 : _.skuId) === (null == f ? void 0 : f.skuId)
                : (null == _ ? void 0 : _.skuId) === (null == y ? void 0 : y.skuId),
        R = l.useCallback(
            (e) => {
                C(e);
            },
            [C],
        ),
        L = l.useCallback(
            (e) => {
                g(),
                    (0, a.Cz)({
                        analyticsLocations: m,
                        analyticsSource: c.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, g],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: P.Hc,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: v.intl.string(v.t["/6nv6N"]),
                    }),
                    (0, r.jsx)(s.s_y, {
                        "data-migration-pending": !0,
                        className: P.iT,
                        onClick: g,
                    }),
                ],
            }),
            (0, r.jsxs)(s.$mQ, {
                "data-migration-pending": !0,
                className: P.jE,
                children: [
                    (0, r.jsx)(j.A, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: _,
                        selectedProfileEffectRef: k,
                        onSelect: R,
                        onOpenShop: L,
                    }),
                    (0, r.jsx)(h.A, {
                        user: t,
                        pendingProfileEffectRecord: I,
                        product: S,
                        purchase: w,
                        guild: n,
                    }),
                ],
            }),
            (0, r.jsx)(E, {
                user: t,
                onApply: () => {
                    (0, b.mZ)(_, null == n ? void 0 : n.id), g();
                },
                onClose: g,
                onOpenShop: L,
                product: S,
                purchase: w,
                canUsePremiumCollectibles: N,
                selectedProfileEffect: _,
                disableApplyButton: T,
            }),
        ],
    });
}
function C(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: a, guild: u, onClose: d } = e,
        { isFetching: f, categories: m, purchases: x } = (0, p.Ay)(),
        h = (0, i.bG)([g.default], () => g.default.getCurrentUser()),
        { analyticsLocations: j } = (0, o.Ay)(n, c.A.EDIT_PROFILE_EFFECT_MODAL),
        A = (0, b.N2)({
            user: h,
            guildId: null == u ? void 0 : u.id,
        });
    return (
        l.useEffect(() => {
            y.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: j,
            });
        }, [j]),
        (0, r.jsx)(o.f5, {
            value: j,
            children: (0, r.jsx)(s.EOs, {
                transitionState: t,
                className: P.yl,
                size: f ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: f
                    ? (0, r.jsx)(s.y$y, {
                          className: P.u1,
                          type: s.y$y.Type.SPINNING_CIRCLE,
                      })
                    : (0, r.jsx)(_, {
                          user: h,
                          guild: u,
                          categories: m,
                          purchases: x,
                          initialSelectedProfileEffect: a,
                          currentSavedEffect: A,
                          onClose: d,
                          analyticsLocations: j,
                      }),
            }),
        })
    );
}
