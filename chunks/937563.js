n.d(t, { default: () => ep });
var i,
    s = n(627968),
    r = n(64700),
    l = n(17928),
    a = n(821609),
    u = n(935462),
    c = n(534514),
    o = n(289873),
    d = n(793574),
    m = n(688810),
    p = n(571827),
    g = n(725807),
    h = n(919395),
    x = n(84540),
    f = n(287809),
    A = n(954571),
    j = n(927578),
    E = n(693477),
    I = n(993408),
    C = n(821701),
    y = n(841702),
    v = n(735438),
    P = n(834730),
    k = n(451909),
    S = n(702211),
    N = n(986687),
    b = n(101058),
    _ = n(836602),
    R = n(814390),
    U = n(773669),
    G = n(58703),
    w = n(590180),
    M = n(536572),
    T = n(985018),
    D = n(236263);
let O = (e) => {
        let { pendingProfileEffectRecord: t, product: n, purchase: i } = e,
            r = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
            a = (0, l.bG)([w.A], () => w.A.getProduct(t?.skuId)),
            u = (0, l.bG)([U.default], () => U.default.locale),
            c = j.Ay.canUseCollectibles(r),
            o = (0, I.gA)(i),
            d = (0, I.G0)(n),
            m = !c && o,
            p = i?.expiresAt != null ? (0, G.Tf)(Date.now(), i.expiresAt) : null,
            g = (0, M.Sw)(i),
            h = (0, M.VG)(a),
            x = (0, S.b)(!d || c),
            A = F(m, d, c, x),
            E = null == i || m;
        return null != t
            ? (0, s.jsx)("div", {
                  className: E ? D.Mf : D.zf,
                  children: (0, s.jsxs)("div", {
                      className: D.RQ,
                      children: [
                          (0, s.jsx)(P.E, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, v.isEmpty)(g) ? h : g,
                          }),
                          E
                              ? (0, s.jsx)(P.E, { color: "text-default", variant: "text-sm/normal", children: A })
                              : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        null != p &&
                                            (0, s.jsx)(P.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: T.intl.format(T.t.Io7ozn, { days: p.days.toString() }),
                                            }),
                                        (0, s.jsxs)(P.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                T.intl.format(T.t.gW9R4B, {
                                                    date: i.purchasedAt.toLocaleDateString(u, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != i.expiresAt &&
                                                    (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            (0, s.jsx)("br", {}),
                                                            T.intl.format(T.t.eZSTa5, {
                                                                date: i.expiresAt.toLocaleDateString(u, {
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
                                        o &&
                                            (0, s.jsx)(P.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: T.intl.string(T.t.nKdAlO),
                                            }),
                                    ],
                                }),
                      ],
                  }),
              })
            : null;
    },
    F = (e, t, n, i) =>
        e
            ? T.intl.string(T.t["1UPza/"])
            : t && n
              ? T.intl.string(T.t.hmyYK8)
              : t && !n
                ? i
                    ? T.intl.string(T.t.melduy)
                    : T.intl.string(T.t.JtAKwp)
                : T.intl.string(T.t.fEGjVQ),
    z = (e) => {
        let { user: t, profileEffect: n, product: i, purchase: r, guild: a } = e,
            {
                pendingGlobalName: u,
                pendingNickname: c,
                pendingPronouns: o,
                pendingBio: d,
                pendingBanner: m,
                pendingAvatar: p,
                pendingAvatarDecoration: g,
                pendingProfileFrame: h,
                pendingDisplayNameStyles: x,
                pendingThemeColors: f,
                pendingAccentColor: A,
            } = (0, l.cf)([_.A], () => _.A.getPendingChanges(a?.id)),
            E = j.Ay.isPremium(t),
            I = j.Ay.canUsePremiumProfileCustomization(t),
            C = (0, R.A)() && null != d ? k.Ay.parse(void 0, d).content : d;
        return (0, s.jsxs)("div", {
            className: D.i1,
            children: [
                (0, s.jsx)(N.A, {
                    user: t,
                    guild: a,
                    pendingProfileEffect: n ?? null,
                    pendingGlobalName: u,
                    pendingNickname: c,
                    pendingPronouns: o,
                    pendingBio: C,
                    pendingBanner: m,
                    pendingAvatar: (0, b.V7)({ userId: t.id, image: p }),
                    pendingAvatarDecoration: g,
                    pendingThemeColors: f,
                    pendingAccentColor: A,
                    pendingProfileFrame: h,
                    pendingDisplayNameStyles: x,
                    canUsePremiumCustomization: I,
                    disabledInputs: !0,
                    hideCustomStatus: !0,
                }),
                !1,
                (0, s.jsx)(O, { pendingProfileEffectRecord: n, product: i, purchase: r, userIsPremium: E }),
            ],
        });
    };
var L = n(503698),
    H = n.n(L),
    K = n(939249),
    B = n(428678),
    J = n(34188),
    V = n(92008),
    W = n(203632),
    Q = n(181774),
    $ = n(483968),
    X = n(942426);
n(321073);
var Y = n(702841),
    Z = n(4227),
    q = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let ee = { skuId: "None" },
    et = { skuId: "Shop" };
var en = n(302509),
    ei = n(423393);
let es = () => 80,
    er = (e) => {
        let { children: t, className: n, isSelected: i, ...r } = e;
        return (0, s.jsx)(K.D, {
            "aria-pressed": i,
            className: H()(en.BP, n, { [en.wH]: i }),
            ...r,
            onClick: r.onSelect,
            children: t,
        });
    },
    el = (e) => {
        let { skuId: t, innerRef: n, section: i, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
            c = (0, X.A)(t),
            o = r.useRef(null),
            { accessibilityLabel: d, thumbnailPreviewSrc: m, title: p } = c ?? {},
            g = r.useMemo(() => (0, Q.Rc)(m), [m]);
        return (0, s.jsxs)(er, {
            innerRef: n ?? o,
            isSelected: l,
            ...u,
            children: [
                (0, s.jsx)("img", { src: ei.A, alt: d, className: en.rQ }),
                (0, s.jsx)("img", { className: en.Wv, src: g, alt: p }),
                (0, s.jsx)($.A, {
                    skuId: t,
                    canUsePremiumCollectibles: a,
                    isPurchaseSection: i === q.PURCHASE,
                    isPremiumSection: i === q.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    ea = (e) => {
        let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: l, onSelect: a, onOpenShop: u } = e,
            o = (() => {
                let e = (0, Y.bG)([Z.A], () => Z.A.purchases),
                    [t, n] = (0, Y.yK)([w.A], () => [w.A.categories, w.A.products]);
                return (0, r.useMemo)(() => {
                    let i = (0, I.wo)(e, t).reduce(
                        (t, i) => {
                            let s = e.get(i.skuId);
                            return (
                                (null != s ? (0, I.gA)(s) : (0, I.G0)(n.get(i.skuId)))
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
                            items: [ee, et, ...i.purchase],
                            height: 12,
                            header: T.intl.string(T.t["9x1v/p"]),
                        },
                        {
                            section: "premium_purchase",
                            items: i.premium_purchase,
                            height: 12,
                            header: T.intl.string(T.t.TiLCgw),
                        },
                        { section: "preview", items: i.preview, height: 12, header: T.intl.string(T.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, n, e]);
            })(),
            d = null != i,
            m = j.Ay.canUseCollectibles(t);
        return (0, s.jsx)("section", {
            className: en.uW,
            children: (0, s.jsx)(V.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: en.p_,
                columns: 3,
                sections: o.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, r, c) => {
                    let { section: p, items: g } = o[e],
                        h = g[t];
                    if (h === ee)
                        return (0, s.jsxs)(
                            er,
                            {
                                style: { ...r },
                                isSelected: !d,
                                onSelect: () => a(null),
                                children: [
                                    (0, s.jsx)(B.K, { size: "md", color: "currentColor", className: en.vo }),
                                    (0, s.jsx)(P.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != n ? T.intl.string(T.t.CHf9iJ) : T.intl.string(T.t.PoWNfe),
                                    }),
                                ],
                            },
                            c,
                        );
                    if (h === et)
                        return (0, s.jsxs)(
                            er,
                            {
                                style: r,
                                onSelect: u,
                                children: [
                                    (0, s.jsx)(J.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: en.sV,
                                    }),
                                    (0, s.jsx)(P.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: T.intl.string(T.t.pWG4ze),
                                    }),
                                ],
                            },
                            c,
                        );
                    if ((0, W.C3)(h)) {
                        let e = i?.skuId === h.skuId;
                        return (0, s.jsx)(
                            el,
                            {
                                style: { ...r },
                                section: p,
                                skuId: h.skuId,
                                innerRef: e ? l : void 0,
                                isSelected: e,
                                onSelect: () => a(h),
                                canUsePremiumCollectibles: m,
                            },
                            c,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = o[e];
                    return (0, s.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, s.jsx)(c.D, { variant: "heading-md/medium", children: n }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => o[e].items[t].skuId,
                getItemHeight: es,
                removeEdgeItemGutters: !0,
            }),
        });
    };
var eu = n(652215),
    ec = n(788868),
    eo = n(289138);
function ed(e) {
    let {
            user: t,
            product: n,
            purchase: i,
            onApply: r,
            onClose: l,
            onOpenShop: c,
            disableApplyButton: o,
            canUsePremiumCollectibles: d,
            selectedProfileEffect: m,
        } = e,
        h = null != i ? (0, I.gA)(i) : (0, I.G0)(n);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(u.jl, {
            "data-migration-pending": !0,
            className: eo.Hx,
            children: [
                (null != i && (d || !h)) || null === m
                    ? (0, s.jsx)(a.$, { variant: "primary", text: T.intl.string(T.t.Jh8fJz), onClick: r, disabled: o })
                    : null == i && (d || !h)
                      ? (0, s.jsx)(a.$, {
                            variant: "primary",
                            text: T.intl.string(T.t.fYfGgK),
                            onClick: () => c(m?.skuId),
                        })
                      : (0, s.jsx)(g.A, {
                            subscriptionTier: ec.pe.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: j.Ay.isPremium(t)
                                    ? T.intl.string(T.t.KXLX7l)
                                    : d
                                      ? T.intl.string(T.t.mr4K7D)
                                      : T.intl.string(T.t.pj0XBN),
                            },
                        }),
                !d && h
                    ? (0, s.jsx)(p.A, { itemType: i?.type ?? n?.type, onClose: l })
                    : (0, s.jsx)(a.$, { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function em(e) {
    let {
            user: t,
            guild: n,
            categories: i,
            purchases: l,
            initialSelectedProfileEffect: a,
            currentSavedEffect: o,
            analyticsLocations: m,
            onClose: p,
        } = e,
        { pendingProfileEffect: g } = (0, h.nZ)(n?.id),
        [f, A] = r.useMemo(() => {
            let e = (0, I.sz)(i, l);
            return [e.purchased, e.shopPreviews];
        }, [i, l]),
        [y, v] = r.useState(() => (null != a ? a : void 0 !== g ? g : null == o ? null : (o ?? null))),
        P = r.useMemo(
            () =>
                f.find((e) => {
                    let { skuId: t } = e;
                    return t === y?.skuId;
                }) ??
                A.find((e) => {
                    let { skuId: t } = e;
                    return t === y?.skuId;
                }) ??
                null,
            [y, f, A],
        ),
        { product: k, purchase: S } = (0, C.A)(P?.skuId),
        N = r.useRef(null),
        b = j.Ay.canUseCollectibles(t),
        _ = void 0 === g ? y?.skuId === o?.skuId : y?.skuId === g?.skuId,
        R = r.useCallback(
            (e) => {
                v(e);
            },
            [v],
        ),
        U = r.useCallback(
            (e) => {
                p(),
                    (0, E.Cz)({
                        analyticsLocations: m,
                        analyticsSource: d.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, p],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eo.Hc,
                children: [
                    (0, s.jsx)(c.D, { variant: "heading-lg/semibold", children: T.intl.string(T.t["/6nv6N"]) }),
                    (0, s.jsx)(u.s_, { "data-migration-pending": !0, className: eo.iT, onClick: p }),
                ],
            }),
            (0, s.jsxs)(u.$m, {
                "data-migration-pending": !0,
                className: eo.jE,
                children: [
                    (0, s.jsx)(ea, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: y,
                        selectedProfileEffectRef: N,
                        onSelect: R,
                        onOpenShop: U,
                    }),
                    (0, s.jsx)(z, { user: t, profileEffect: P, product: k, purchase: S, guild: n }),
                ],
            }),
            (0, s.jsx)(ed, {
                user: t,
                onApply: () => {
                    (0, x.p)({ guildId: n?.id, profileEffect: y ?? null }), p();
                },
                onClose: p,
                onOpenShop: U,
                product: k,
                purchase: S,
                canUsePremiumCollectibles: b,
                selectedProfileEffect: y,
                disableApplyButton: _,
            }),
        ],
    });
}
function ep(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: i, guild: a, onClose: c } = e,
        { isFetching: p, categories: g, purchases: x } = (0, y.Ay)(),
        j = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: E } = (0, m.Ay)(n, d.A.EDIT_PROFILE_EFFECT_MODAL),
        I = (0, h.N2)({ user: j, guildId: a?.id });
    return (
        r.useEffect(() => {
            A.default.track(eu.HAw.OPEN_MODAL, { type: eu.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: E });
        }, [E]),
        (0, s.jsx)(m.f5, {
            value: E,
            children: (0, s.jsx)(u.EO, {
                transitionState: t,
                className: eo.yl,
                size: p ? u.rI.DYNAMIC : u.rI.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, s.jsx)(o.y, { className: eo.u1, type: o.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(em, {
                          user: j,
                          guild: a,
                          categories: g,
                          purchases: x,
                          initialSelectedProfileEffect: i,
                          currentSavedEffect: I,
                          onClose: c,
                          analyticsLocations: E,
                      }),
            }),
        })
    );
}
