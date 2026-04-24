n.d(t, { default: () => ef });
var r,
    s = n(627968),
    i = n(64700),
    l = n(17928),
    a = n(821609),
    o = n(935462),
    c = n(534514),
    d = n(289873),
    u = n(793574),
    m = n(688810),
    p = n(571827),
    f = n(725807),
    g = n(919395),
    h = n(84540),
    x = n(287809),
    A = n(954571),
    _ = n(927578),
    E = n(29292),
    C = n(993408),
    j = n(821701),
    I = n(841702),
    y = n(735438),
    v = n(834730),
    P = n(451909),
    N = n(702211),
    b = n(986687),
    T = n(101058),
    S = n(836602),
    k = n(999291),
    L = n(814390),
    R = n(773669),
    O = n(780207),
    U = n(58703),
    M = n(590180),
    w = n(536572),
    D = n(985018),
    G = n(236263);
let F = (e) => {
        let { pendingProfileEffectRecord: t, product: n, purchase: r } = e,
            i = (0, l.bG)([x.default], () => x.default.getCurrentUser()),
            a = (0, l.bG)([M.A], () => M.A.getProduct(t?.skuId)),
            o = (0, l.bG)([R.default], () => R.default.locale),
            c = _.Ay.canUseCollectibles(i),
            d = (0, C.gA)(r),
            u = (0, C.G0)(n),
            m = !c && d,
            p = r?.expiresAt != null ? (0, U.Tf)(Date.now(), r.expiresAt) : null,
            f = (0, w.Sw)(r),
            g = (0, w.VG)(a),
            h = (0, N.b)(!u || c),
            A = B(m, u, c, h),
            E = null == r || m;
        return null != t
            ? (0, s.jsx)("div", {
                  className: E ? G.Mf : G.zf,
                  children: (0, s.jsxs)("div", {
                      className: G.RQ,
                      children: [
                          (0, s.jsx)(v.E, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, y.isEmpty)(f) ? g : f,
                          }),
                          E
                              ? (0, s.jsx)(v.E, { color: "text-default", variant: "text-sm/normal", children: A })
                              : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        null != p &&
                                            (0, s.jsx)(v.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: D.intl.format(D.t.Io7ozn, { days: p.days.toString() }),
                                            }),
                                        (0, s.jsxs)(v.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                D.intl.format(D.t.gW9R4B, {
                                                    date: r.purchasedAt.toLocaleDateString(o, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != r.expiresAt &&
                                                    (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            (0, s.jsx)("br", {}),
                                                            D.intl.format(D.t.eZSTa5, {
                                                                date: r.expiresAt.toLocaleDateString(o, {
                                                                    minute: "numeric",
                                                                    hour: "numeric",
                                                                    day: "numeric",
                                                                    month: "long",
                                                                    year: "numeric",
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        d &&
                                            (0, s.jsx)(v.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: D.intl.string(D.t.nKdAlO),
                                            }),
                                    ],
                                }),
                      ],
                  }),
              })
            : null;
    },
    B = (e, t, n, r) =>
        e
            ? D.intl.string(D.t["1UPza/"])
            : t && n
              ? D.intl.string(D.t.hmyYK8)
              : t && !n
                ? r
                    ? D.intl.string(D.t.melduy)
                    : D.intl.string(D.t.JtAKwp)
                : D.intl.string(D.t.fEGjVQ),
    z = (e) => {
        let { user: t, pendingProfileEffectRecord: n, product: r, purchase: i, guild: a } = e,
            {
                pendingGlobalName: o,
                pendingNickname: c,
                pendingPronouns: d,
                pendingBio: u,
                pendingBanner: m,
                pendingAvatar: p,
                pendingAvatarDecoration: f,
                pendingThemeColors: g,
                pendingAccentColor: x,
            } = (0, l.cf)([S.A], () => S.A.getPendingChanges(a?.id)),
            A = _.Ay.isPremium(t),
            E = _.Ay.canUsePremiumProfileCustomization(t),
            C = (0, k.Ay)(t.id),
            j = !!C?.getPreviewBio(u),
            I = {
                user: t,
                guild: a,
                pendingGlobalName: o,
                pendingNickname: c,
                pendingPronouns: d,
                pendingBio: (0, L.A)() && null != u ? P.Ay.parse(void 0, u).content : u,
                pendingBanner: m,
                useLargeBanner: !0,
                pendingAvatar: (0, T.V7)({ userId: t.id, image: p }),
                pendingAvatarDecoration: f,
                pendingThemeColors: g,
                pendingAccentColor: x,
                pendingProfileEffect: n ?? null,
                hideFakeActivity: j,
                canUsePremiumCustomization: E,
                onUpsellClick: O.A,
                onBannerChange: (e) => (0, h.p)({ banner: e }),
            };
        return (0, s.jsxs)("div", {
            className: G.i1,
            children: [
                (0, s.jsx)(b.A, { ...I, disabledInputs: !0, hideCustomStatus: !0 }),
                !1,
                (0, s.jsx)(F, { pendingProfileEffectRecord: n, product: r, purchase: i, userIsPremium: A }),
            ],
        });
    };
var H = n(503698),
    K = n.n(H),
    J = n(939249),
    V = n(428678),
    W = n(34188),
    Z = n(92008),
    Q = n(203632),
    X = n(181774),
    Y = n(483968),
    $ = n(942426);
n(321073);
var q = n(702841),
    ee = n(4227),
    et = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let en = { skuId: "None" },
    er = { skuId: "Shop" };
var es = n(302509);
let ei = () => 80,
    el = (e) => {
        let { children: t, className: n, isSelected: r, ...i } = e;
        return (0, s.jsx)(J.D, {
            "aria-pressed": r,
            className: K()(es.BP, n, { [es.wH]: r }),
            ...i,
            onClick: i.onSelect,
            children: t,
        });
    },
    ea = (e) => {
        let { skuId: t, innerRef: n, section: r, isSelected: l, canUsePremiumCollectibles: a, ...o } = e,
            c = (0, $.A)(t),
            d = i.useRef(null),
            { accessibilityLabel: u, thumbnailPreviewSrc: m, title: p } = c ?? {},
            f = i.useMemo(() => (0, X.Rc)(m), [m]);
        return (0, s.jsxs)(el, {
            innerRef: n ?? d,
            isSelected: l,
            ...o,
            children: [
                (0, s.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/a859611882903f1102a796c08c68278917821af3e87eb9191df74bf78426971d.png",
                    alt: u,
                    className: es.rQ,
                }),
                (0, s.jsx)("img", { className: es.Wv, src: f, alt: p }),
                (0, s.jsx)(Y.A, {
                    skuId: t,
                    canUsePremiumCollectibles: a,
                    isPurchaseSection: r === et.PURCHASE,
                    isPremiumSection: r === et.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    eo = (e) => {
        let { user: t, guild: n, pendingProfileEffect: r, selectedProfileEffectRef: l, onSelect: a, onOpenShop: o } = e,
            d = (() => {
                let e = (0, q.bG)([ee.A], () => ee.A.purchases),
                    [t, n] = (0, q.yK)([M.A], () => [M.A.categories, M.A.products]);
                return (0, i.useMemo)(() => {
                    let r = (0, C.wo)(e, t).reduce(
                        (t, r) => {
                            let s = e.get(r.skuId);
                            return (
                                (null != s ? (0, C.gA)(s) : (0, C.G0)(n.get(r.skuId)))
                                    ? t.premium_purchase.push(r)
                                    : null != s
                                      ? t.purchase.push(r)
                                      : t.preview.push(r),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [en, er, ...r.purchase],
                            height: 12,
                            header: D.intl.string(D.t["9x1v/p"]),
                        },
                        {
                            section: "premium_purchase",
                            items: r.premium_purchase,
                            height: 12,
                            header: D.intl.string(D.t.TiLCgw),
                        },
                        { section: "preview", items: r.preview, height: 12, header: D.intl.string(D.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, n, e]);
            })(),
            u = null != r,
            m = _.Ay.canUseCollectibles(t);
        return (0, s.jsx)("section", {
            className: es.uW,
            children: (0, s.jsx)(Z.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: es.p_,
                columns: 3,
                sections: d.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, i, c) => {
                    let { section: p, items: f } = d[e],
                        g = f[t];
                    if (g === en)
                        return (0, s.jsxs)(
                            el,
                            {
                                style: { ...i },
                                isSelected: !u,
                                onSelect: () => a(null),
                                children: [
                                    (0, s.jsx)(V.K, { size: "md", color: "currentColor", className: es.vo }),
                                    (0, s.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != n ? D.intl.string(D.t.CHf9iJ) : D.intl.string(D.t.PoWNfe),
                                    }),
                                ],
                            },
                            c,
                        );
                    if (g === er)
                        return (0, s.jsxs)(
                            el,
                            {
                                style: i,
                                onSelect: o,
                                children: [
                                    (0, s.jsx)(W.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: es.sV,
                                    }),
                                    (0, s.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: D.intl.string(D.t.pWG4ze),
                                    }),
                                ],
                            },
                            c,
                        );
                    if ((0, Q.C3)(g)) {
                        let e = r?.skuId === g.skuId;
                        return (0, s.jsx)(
                            ea,
                            {
                                style: { ...i },
                                section: p,
                                skuId: g.skuId,
                                innerRef: e ? l : void 0,
                                isSelected: e,
                                onSelect: () => a(g),
                                canUsePremiumCollectibles: m,
                            },
                            c,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = d[e];
                    return (0, s.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, s.jsx)(c.D, { variant: "heading-md/medium", children: n }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => d[e].items[t].skuId,
                getItemHeight: ei,
                removeEdgeItemGutters: !0,
            }),
        });
    };
var ec = n(652215),
    ed = n(788868),
    eu = n(289138);
function em(e) {
    let {
            user: t,
            product: n,
            purchase: r,
            onApply: i,
            onClose: l,
            onOpenShop: c,
            disableApplyButton: d,
            canUsePremiumCollectibles: u,
            selectedProfileEffect: m,
        } = e,
        g = null != r ? (0, C.gA)(r) : (0, C.G0)(n);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(o.jl, {
            "data-migration-pending": !0,
            className: eu.Hx,
            children: [
                (null != r && (u || !g)) || null === m
                    ? (0, s.jsx)(a.$, { variant: "primary", text: D.intl.string(D.t.Jh8fJz), onClick: i, disabled: d })
                    : null == r && (u || !g)
                      ? (0, s.jsx)(a.$, {
                            variant: "primary",
                            text: D.intl.string(D.t.fYfGgK),
                            onClick: () => c(m?.skuId),
                        })
                      : (0, s.jsx)(f.A, {
                            subscriptionTier: ed.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: _.Ay.isPremium(t)
                                    ? D.intl.string(D.t.KXLX7l)
                                    : u
                                      ? D.intl.string(D.t.mr4K7D)
                                      : D.intl.string(D.t.pj0XBN),
                            },
                        }),
                !u && g
                    ? (0, s.jsx)(p.A, { itemType: r?.type ?? n?.type, onClose: l })
                    : (0, s.jsx)(a.$, { variant: "secondary", text: D.intl.string(D.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function ep(e) {
    let {
            user: t,
            guild: n,
            categories: r,
            purchases: l,
            initialSelectedProfileEffect: a,
            currentSavedEffect: d,
            analyticsLocations: m,
            onClose: p,
        } = e,
        { pendingProfileEffect: f } = (0, g.nZ)(n?.id),
        [x, A] = i.useMemo(() => {
            let e = (0, C.sz)(r, l);
            return [e.purchased, e.shopPreviews];
        }, [r, l]),
        [I, y] = i.useState(() => (null != a ? a : void 0 !== f ? f : null == d ? null : (d ?? null))),
        v = i.useMemo(
            () =>
                x.find((e) => {
                    let { skuId: t } = e;
                    return t === I?.skuId;
                }) ??
                A.find((e) => {
                    let { skuId: t } = e;
                    return t === I?.skuId;
                }) ??
                null,
            [I, x, A],
        ),
        { product: P, purchase: N } = (0, j.A)(v?.skuId),
        b = i.useRef(null),
        T = _.Ay.canUseCollectibles(t),
        S = void 0 === f ? I?.skuId === d?.skuId : I?.skuId === f?.skuId,
        k = i.useCallback(
            (e) => {
                y(e);
            },
            [y],
        ),
        L = i.useCallback(
            (e) => {
                p(),
                    (0, E.Cz)({
                        analyticsLocations: m,
                        analyticsSource: u.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, p],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(o.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eu.Hc,
                children: [
                    (0, s.jsx)(c.D, { variant: "heading-lg/semibold", children: D.intl.string(D.t["/6nv6N"]) }),
                    (0, s.jsx)(o.s_, { "data-migration-pending": !0, className: eu.iT, onClick: p }),
                ],
            }),
            (0, s.jsxs)(o.$m, {
                "data-migration-pending": !0,
                className: eu.jE,
                children: [
                    (0, s.jsx)(eo, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: I,
                        selectedProfileEffectRef: b,
                        onSelect: k,
                        onOpenShop: L,
                    }),
                    (0, s.jsx)(z, { user: t, pendingProfileEffectRecord: v, product: P, purchase: N, guild: n }),
                ],
            }),
            (0, s.jsx)(em, {
                user: t,
                onApply: () => {
                    (0, h.p)({ guildId: n?.id, profileEffect: I ?? null }), p();
                },
                onClose: p,
                onOpenShop: L,
                product: P,
                purchase: N,
                canUsePremiumCollectibles: T,
                selectedProfileEffect: I,
                disableApplyButton: S,
            }),
        ],
    });
}
function ef(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: r, guild: a, onClose: c } = e,
        { isFetching: p, categories: f, purchases: h } = (0, I.Ay)(),
        _ = (0, l.bG)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: E } = (0, m.Ay)(n, u.A.EDIT_PROFILE_EFFECT_MODAL),
        C = (0, g.N2)({ user: _, guildId: a?.id });
    return (
        i.useEffect(() => {
            A.default.track(ec.HAw.OPEN_MODAL, { type: ec.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: E });
        }, [E]),
        (0, s.jsx)(m.f5, {
            value: E,
            children: (0, s.jsx)(o.EO, {
                transitionState: t,
                className: eu.yl,
                size: p ? o.rI.DYNAMIC : o.rI.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, s.jsx)(d.y, { className: eu.u1, type: d.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(ep, {
                          user: _,
                          guild: a,
                          categories: f,
                          purchases: h,
                          initialSelectedProfileEffect: r,
                          currentSavedEffect: C,
                          onClose: c,
                          analyticsLocations: E,
                      }),
            }),
        })
    );
}
