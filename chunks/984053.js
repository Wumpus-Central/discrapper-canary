n.d(t, { default: () => e_ });
var a,
    r = n(627968),
    i = n(64700),
    l = n(17928),
    s = n(821609),
    o = n(935462),
    c = n(534514),
    d = n(289873),
    u = n(793574),
    p = n(688810),
    f = n(571827),
    _ = n(725807),
    h = n(919395),
    m = n(84540),
    g = n(287809),
    b = n(954571),
    v = n(927578),
    A = n(693477),
    y = n(993408),
    x = n(821701),
    E = n(841702),
    I = n(735438),
    C = n(834730),
    T = n(451909),
    w = n(702211),
    S = n(986687),
    L = n(101058),
    N = n(836602),
    R = n(999291),
    j = n(814390),
    O = n(773669),
    D = n(780207),
    P = n(58703),
    M = n(590180),
    k = n(536572),
    U = n(985018),
    F = n(236263);
let B = (e) => {
        let { pendingProfileEffectRecord: t, product: n, purchase: a } = e,
            i = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
            s = (0, l.bG)([M.A], () => M.A.getProduct(t?.skuId)),
            o = (0, l.bG)([O.default], () => O.default.locale),
            c = v.Ay.canUseCollectibles(i),
            d = (0, y.gA)(a),
            u = (0, y.G0)(n),
            p = !c && d,
            f = a?.expiresAt != null ? (0, P.Tf)(Date.now(), a.expiresAt) : null,
            _ = (0, k.Sw)(a),
            h = (0, k.VG)(s),
            m = (0, w.b)(!u || c),
            b = G(p, u, c, m),
            A = null == a || p;
        return null != t
            ? (0, r.jsx)("div", {
                  className: A ? F.Mf : F.zf,
                  children: (0, r.jsxs)("div", {
                      className: F.RQ,
                      children: [
                          (0, r.jsx)(C.E, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, I.isEmpty)(_) ? h : _,
                          }),
                          A
                              ? (0, r.jsx)(C.E, { color: "text-default", variant: "text-sm/normal", children: b })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != f &&
                                            (0, r.jsx)(C.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: U.intl.format(U.t.Io7ozn, { days: f.days.toString() }),
                                            }),
                                        (0, r.jsxs)(C.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                U.intl.format(U.t.gW9R4B, {
                                                    date: a.purchasedAt.toLocaleDateString(o, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != a.expiresAt &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("br", {}),
                                                            U.intl.format(U.t.eZSTa5, {
                                                                date: a.expiresAt.toLocaleDateString(o, {
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
                                            (0, r.jsx)(C.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: U.intl.string(U.t.nKdAlO),
                                            }),
                                    ],
                                }),
                      ],
                  }),
              })
            : null;
    },
    G = (e, t, n, a) =>
        e
            ? U.intl.string(U.t["1UPza/"])
            : t && n
              ? U.intl.string(U.t.hmyYK8)
              : t && !n
                ? a
                    ? U.intl.string(U.t.melduy)
                    : U.intl.string(U.t.JtAKwp)
                : U.intl.string(U.t.fEGjVQ),
    V = (e) => {
        let { user: t, pendingProfileEffectRecord: n, product: a, purchase: i, guild: s } = e,
            {
                pendingGlobalName: o,
                pendingNickname: c,
                pendingPronouns: d,
                pendingBio: u,
                pendingBanner: p,
                pendingAvatar: f,
                pendingAvatarDecoration: _,
                pendingThemeColors: h,
                pendingAccentColor: g,
            } = (0, l.cf)([N.A], () => N.A.getPendingChanges(s?.id)),
            b = v.Ay.isPremium(t),
            A = v.Ay.canUsePremiumProfileCustomization(t),
            y = (0, R.Ay)(t.id),
            x = !!y?.getPreviewBio(u),
            E = {
                user: t,
                guild: s,
                pendingGlobalName: o,
                pendingNickname: c,
                pendingPronouns: d,
                pendingBio: (0, j.A)() && null != u ? T.Ay.parse(void 0, u).content : u,
                pendingBanner: p,
                useLargeBanner: !0,
                pendingAvatar: (0, L.V7)({ userId: t.id, image: f }),
                pendingAvatarDecoration: _,
                pendingThemeColors: h,
                pendingAccentColor: g,
                pendingProfileEffect: n ?? null,
                hideFakeActivity: x,
                canUsePremiumCustomization: A,
                onUpsellClick: D.A,
                onBannerChange: (e) => (0, m.p)({ banner: e }),
            };
        return (0, r.jsxs)("div", {
            className: F.i1,
            children: [
                (0, r.jsx)(S.A, { ...E, disabledInputs: !0, hideCustomStatus: !0 }),
                !1,
                (0, r.jsx)(B, { pendingProfileEffectRecord: n, product: a, purchase: i, userIsPremium: b }),
            ],
        });
    };
var H = n(503698),
    W = n.n(H),
    Z = n(939249),
    z = n(428678),
    J = n(34188),
    $ = n(92008),
    K = n(203632),
    Y = n(181774),
    X = n(483968),
    Q = n(942426);
n(321073);
var q = n(702841),
    ee = n(4227),
    et = (((a = {}).PURCHASE = "purchase"), (a.PREMIUM_PURCHASE = "premium_purchase"), (a.PREVIEW = "preview"), a);
let en = { skuId: "None" },
    ea = { skuId: "Shop" };
var er = n(302509);
let ei = () => 80,
    el = (e) => {
        let { children: t, className: n, isSelected: a, ...i } = e;
        return (0, r.jsx)(Z.D, {
            "aria-pressed": a,
            className: W()(er.BP, n, { [er.wH]: a }),
            ...i,
            onClick: i.onSelect,
            children: t,
        });
    },
    es = (e) => {
        let { skuId: t, innerRef: n, section: a, isSelected: l, canUsePremiumCollectibles: s, ...o } = e,
            c = (0, Q.A)(t),
            d = i.useRef(null),
            { accessibilityLabel: u, thumbnailPreviewSrc: p, title: f } = c ?? {},
            _ = i.useMemo(() => (0, Y.Rc)(p), [p]);
        return (0, r.jsxs)(el, {
            innerRef: n ?? d,
            isSelected: l,
            ...o,
            children: [
                (0, r.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/a859611882903f1102a796c08c68278917821af3e87eb9191df74bf78426971d.png",
                    alt: u,
                    className: er.rQ,
                }),
                (0, r.jsx)("img", { className: er.Wv, src: _, alt: f }),
                (0, r.jsx)(X.A, {
                    skuId: t,
                    canUsePremiumCollectibles: s,
                    isPurchaseSection: a === et.PURCHASE,
                    isPremiumSection: a === et.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    eo = (e) => {
        let { user: t, guild: n, pendingProfileEffect: a, selectedProfileEffectRef: l, onSelect: s, onOpenShop: o } = e,
            d = (() => {
                let e = (0, q.bG)([ee.A], () => ee.A.purchases),
                    [t, n] = (0, q.yK)([M.A], () => [M.A.categories, M.A.products]);
                return (0, i.useMemo)(() => {
                    let a = (0, y.wo)(e, t).reduce(
                        (t, a) => {
                            let r = e.get(a.skuId);
                            return (
                                (null != r ? (0, y.gA)(r) : (0, y.G0)(n.get(a.skuId)))
                                    ? t.premium_purchase.push(a)
                                    : null != r
                                      ? t.purchase.push(a)
                                      : t.preview.push(a),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [en, ea, ...a.purchase],
                            height: 12,
                            header: U.intl.string(U.t["9x1v/p"]),
                        },
                        {
                            section: "premium_purchase",
                            items: a.premium_purchase,
                            height: 12,
                            header: U.intl.string(U.t.TiLCgw),
                        },
                        { section: "preview", items: a.preview, height: 12, header: U.intl.string(U.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, n, e]);
            })(),
            u = null != a,
            p = v.Ay.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: er.uW,
            children: (0, r.jsx)($.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: er.p_,
                columns: 3,
                sections: d.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, i, c) => {
                    let { section: f, items: _ } = d[e],
                        h = _[t];
                    if (h === en)
                        return (0, r.jsxs)(
                            el,
                            {
                                style: { ...i },
                                isSelected: !u,
                                onSelect: () => s(null),
                                children: [
                                    (0, r.jsx)(z.K, { size: "md", color: "currentColor", className: er.vo }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.PoWNfe),
                                    }),
                                ],
                            },
                            c,
                        );
                    if (h === ea)
                        return (0, r.jsxs)(
                            el,
                            {
                                style: i,
                                onSelect: o,
                                children: [
                                    (0, r.jsx)(J.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: er.sV,
                                    }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: U.intl.string(U.t.pWG4ze),
                                    }),
                                ],
                            },
                            c,
                        );
                    if ((0, K.C3)(h)) {
                        let e = a?.skuId === h.skuId;
                        return (0, r.jsx)(
                            es,
                            {
                                style: { ...i },
                                section: f,
                                skuId: h.skuId,
                                innerRef: e ? l : void 0,
                                isSelected: e,
                                onSelect: () => s(h),
                                canUsePremiumCollectibles: p,
                            },
                            c,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = d[e];
                    return (0, r.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, r.jsx)(c.D, { variant: "heading-md/medium", children: n }),
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
function ep(e) {
    let {
            user: t,
            product: n,
            purchase: a,
            onApply: i,
            onClose: l,
            onOpenShop: c,
            disableApplyButton: d,
            canUsePremiumCollectibles: u,
            selectedProfileEffect: p,
        } = e,
        h = null != a ? (0, y.gA)(a) : (0, y.G0)(n);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(o.jl, {
            "data-migration-pending": !0,
            className: eu.Hx,
            children: [
                (null != a && (u || !h)) || null === p
                    ? (0, r.jsx)(s.$, { variant: "primary", text: U.intl.string(U.t.Jh8fJz), onClick: i, disabled: d })
                    : null == a && (u || !h)
                      ? (0, r.jsx)(s.$, {
                            variant: "primary",
                            text: U.intl.string(U.t.fYfGgK),
                            onClick: () => c(p?.skuId),
                        })
                      : (0, r.jsx)(_.A, {
                            subscriptionTier: ed.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: v.Ay.isPremium(t)
                                    ? U.intl.string(U.t.KXLX7l)
                                    : u
                                      ? U.intl.string(U.t.mr4K7D)
                                      : U.intl.string(U.t.pj0XBN),
                            },
                        }),
                !u && h
                    ? (0, r.jsx)(f.A, { itemType: a?.type ?? n?.type, onClose: l })
                    : (0, r.jsx)(s.$, { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function ef(e) {
    let {
            user: t,
            guild: n,
            categories: a,
            purchases: l,
            initialSelectedProfileEffect: s,
            currentSavedEffect: d,
            analyticsLocations: p,
            onClose: f,
        } = e,
        { pendingProfileEffect: _ } = (0, h.nZ)(n?.id),
        [g, b] = i.useMemo(() => {
            let e = (0, y.sz)(a, l);
            return [e.purchased, e.shopPreviews];
        }, [a, l]),
        [E, I] = i.useState(() => (null != s ? s : void 0 !== _ ? _ : null == d ? null : (d ?? null))),
        C = i.useMemo(
            () =>
                g.find((e) => {
                    let { skuId: t } = e;
                    return t === E?.skuId;
                }) ??
                b.find((e) => {
                    let { skuId: t } = e;
                    return t === E?.skuId;
                }) ??
                null,
            [E, g, b],
        ),
        { product: T, purchase: w } = (0, x.A)(C?.skuId),
        S = i.useRef(null),
        L = v.Ay.canUseCollectibles(t),
        N = void 0 === _ ? E?.skuId === d?.skuId : E?.skuId === _?.skuId,
        R = i.useCallback(
            (e) => {
                I(e);
            },
            [I],
        ),
        j = i.useCallback(
            (e) => {
                f(),
                    (0, A.Cz)({
                        analyticsLocations: p,
                        analyticsSource: u.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [p, f],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eu.Hc,
                children: [
                    (0, r.jsx)(c.D, { variant: "heading-lg/semibold", children: U.intl.string(U.t["/6nv6N"]) }),
                    (0, r.jsx)(o.s_, { "data-migration-pending": !0, className: eu.iT, onClick: f }),
                ],
            }),
            (0, r.jsxs)(o.$m, {
                "data-migration-pending": !0,
                className: eu.jE,
                children: [
                    (0, r.jsx)(eo, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: E,
                        selectedProfileEffectRef: S,
                        onSelect: R,
                        onOpenShop: j,
                    }),
                    (0, r.jsx)(V, { user: t, pendingProfileEffectRecord: C, product: T, purchase: w, guild: n }),
                ],
            }),
            (0, r.jsx)(ep, {
                user: t,
                onApply: () => {
                    (0, m.p)({ guildId: n?.id, profileEffect: E ?? null }), f();
                },
                onClose: f,
                onOpenShop: j,
                product: T,
                purchase: w,
                canUsePremiumCollectibles: L,
                selectedProfileEffect: E,
                disableApplyButton: N,
            }),
        ],
    });
}
function e_(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: a, guild: s, onClose: c } = e,
        { isFetching: f, categories: _, purchases: m } = (0, E.Ay)(),
        v = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        { analyticsLocations: A } = (0, p.Ay)(n, u.A.EDIT_PROFILE_EFFECT_MODAL),
        y = (0, h.N2)({ user: v, guildId: s?.id });
    return (
        i.useEffect(() => {
            b.default.track(ec.HAw.OPEN_MODAL, { type: ec.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: A });
        }, [A]),
        (0, r.jsx)(p.f5, {
            value: A,
            children: (0, r.jsx)(o.EO, {
                transitionState: t,
                className: eu.yl,
                size: f ? o.rI.DYNAMIC : o.rI.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: f
                    ? (0, r.jsx)(d.y, { className: eu.u1, type: d.y.Type.SPINNING_CIRCLE })
                    : (0, r.jsx)(ef, {
                          user: v,
                          guild: s,
                          categories: _,
                          purchases: m,
                          initialSelectedProfileEffect: a,
                          currentSavedEffect: y,
                          onClose: c,
                          analyticsLocations: A,
                      }),
            }),
        })
    );
}
