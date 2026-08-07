i.d(t, { default: () => ea });
var l = i(477900),
    a = i(582128),
    s = i(503698),
    n = i.n(s),
    r = i(281445),
    d = i(224640),
    c = i(17928),
    o = i(843282),
    u = i(866665),
    m = i(834730),
    x = i(408278),
    h = i(789645),
    v = i(297264),
    g = i(290136),
    j = i(95477),
    p = i(821609),
    b = i(287809),
    f = i(975571),
    N = i(123917),
    E = i(158045),
    C = i(498480),
    A = i(42957),
    S = i(814201),
    P = i(73825),
    k = i(793574),
    U = i(529427),
    w = i(97352),
    z = i(192308);
async function L(e) {
    let {
            skuId: t,
            gameName: a,
            gameId: s,
            serverName: n = "",
            regionId: r = "",
            activeSubscription: d,
            isPlanUpgrade: c = !1,
            planGroup: o = [],
            onViewServer: u,
            onBack: m,
        } = e,
        x = null != d,
        h = w.A.getForSKU(t)[0]?.id;
    if (null == h) {
        let e = await (0, P.ur)(t);
        h = e[0]?.id;
    }
    x && (await Promise.all(o.filter((e) => e !== t).map((e) => (0, P.ur)(e))));
    let v = o.flatMap((e) => w.A.getForSKU(e).map((e) => e.id));
    return U.UnifiedCheckoutFlowManagerSingletons[U.CL.GAME_SERVER_SUBSCRIPTION_CHECKOUT].get().openCheckoutModal({
        checkoutConfiguration: { skuId: t, activeSubscription: d ?? null },
        forwardedPaymentModalProps: { initialPlanId: h, planGroup: v, skipConfirm: !0 },
        unifiedCheckoutProviderProps: { analyticsLocations: [k.A.GAME_SERVER_SETUP_MODAL] },
        tenantParams: {
            serverName: n,
            regionId: r,
            gameId: s,
            gameName: a,
            isPlanChange: x,
            isPlanUpgrade: c,
            onBack: m,
        },
        checkoutHandlers: {
            onComplete: () => {
                var e;
                let t = x && c && null != d ? d.id : null;
                null != t && (0, C.hE)(t),
                    (0, C.hU)()
                        .catch(() => {})
                        .then(() => {
                            null != t && (0, C.hE)(t);
                        }),
                    (e = {
                        gameId: s,
                        gameName: a,
                        onViewServer: u ?? (() => {}),
                        isPlanChange: x,
                        isDowngrade: x && !c,
                        renewalDate: d?.currentPeriodEnd,
                    }),
                    (0, z.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([i.e("44504"), i.e("11922")]).then(i.bind(i, 978084));
                        return (i) => (0, l.jsx)(t, { ...i, ...e });
                    });
            },
        },
        modalAPIOptions: { modalKey: "game-server-subscription-payment-modal" },
    });
}
var M = i(349085),
    V = i(749351),
    y = i(115815),
    R = i(231513),
    G = i(885574),
    I = i(275695),
    D = i(375708),
    O = i(89625);
function T(e) {
    let { gameName: t, text: i } = e;
    return (0, l.jsxs)("div", {
        className: O.lm,
        children: [
            (0, l.jsx)(G.m, { className: O.Kk, size: "custom", width: 24, height: 24, color: "currentColor" }),
            (0, l.jsx)(m.E, {
                className: O.Qq,
                variant: "text-sm/medium",
                color: "text-default",
                tag: "p",
                children: i ?? D.intl.format(I.default.uVpJYf, { gameName: t }),
            }),
        ],
    });
}
var _ = i(403581),
    K = i(939249),
    W = i(532794),
    F = i(580630),
    H = i(202541),
    Z = i(634876);
function B(e) {
    let { nitroPriceAmount: t, priceCurrency: i } = e,
        s = a.useCallback(() => {
            (0, W.A)({ subscriptionTier: H.pe.TIER_2, analyticsLocations: [k.A.GAME_SERVER_PAGE] });
        }, []),
        n = (0, F.RS)(t, i);
    return (0, l.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, l.jsx)(_.t, { className: Z.Kk, size: "custom", width: 16, height: 16, color: "currentColor" }),
            (0, l.jsx)(m.E, {
                variant: "text-xs/medium",
                tag: "span",
                children: D.intl.format(D.t.Sv8iic, {
                    price: n,
                    subscribeNowHook: (e) => (0, l.jsx)(K.D, { className: Z.FS, onClick: s, children: e }),
                }),
            }),
        ],
    });
}
var Y = i(721425),
    q = i(451341);
function J(e) {
    let { gameName: t, coverUrl: i, plan: a } = e;
    return (0, l.jsxs)("div", {
        className: q.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: q.ys,
                "aria-hidden": !0,
                children: [
                    null != i && (0, l.jsx)("img", { className: q.Fc, src: i, alt: "" }),
                    (0, l.jsx)("div", { className: q.ex }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: q.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: q.Vs,
                        children: [
                            null != i
                                ? (0, l.jsx)("img", { className: q.uP, src: i, alt: "" })
                                : (0, l.jsx)("div", {
                                      className: q.Vj,
                                      children: (0, l.jsx)(m.E, {
                                          variant: "text-xs/semibold",
                                          color: "text-muted",
                                          children: t,
                                      }),
                                  }),
                            (0, l.jsx)("div", { className: q.tw, "aria-hidden": !0 }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: q.i8,
                        children: [
                            (0, l.jsx)(m.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "div",
                                children: t,
                            }),
                            (0, l.jsx)(m.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "div",
                                children: a.name,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: q.M1,
                children: [
                    (0, l.jsxs)("div", {
                        className: q.zu,
                        children: [
                            (0, l.jsx)(m.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "div",
                                children: a.playersLabel,
                            }),
                            (0, l.jsx)(m.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "div",
                                children: D.intl.string(I.default.i5lFSU),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: q.Wc }),
                    (0, l.jsxs)("div", {
                        className: q.zu,
                        children: [
                            (0, l.jsxs)("div", {
                                className: q.mi,
                                children: [
                                    (0, l.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        tag: "span",
                                        children: a.ramValueLabel,
                                    }),
                                    (0, l.jsx)(m.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-default",
                                        tag: "span",
                                        children: a.ramUnitLabel,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(m.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "div",
                                children: D.intl.string(I.default["3+gt2d"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: q.Wc }),
                    (0, l.jsxs)("div", {
                        className: q.zu,
                        children: [
                            (0, l.jsx)(m.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "div",
                                children: a.vcpusLabel,
                            }),
                            (0, l.jsx)(m.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "div",
                                children: D.intl.string(I.default["jlz/q6"]),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: q.UK, children: (0, l.jsx)(Y.X, {}) }),
        ],
    });
}
var X = i(199781),
    Q = i(628049),
    $ = i(652215),
    ee = i(727298);
let et = [];
function ei(e) {
    let { region: t, disabled: i } = e,
        { pingText: a, pingCircleStyle: s } = (0, y.b)(t.pingUrl);
    return (0, l.jsxs)("div", {
        className: ee.wV,
        children: [
            (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: t.name }),
            !0 === i
                ? (0, l.jsx)(m.E, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      tag: "span",
                      children: D.intl.string(I.default.aCyHe2),
                  })
                : "" !== t.pingUrl
                  ? (0, l.jsxs)("div", {
                        className: ee.$T,
                        children: [
                            (0, l.jsx)("div", { className: n()(ee.Jg, s) }),
                            (0, l.jsx)(m.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: a,
                            }),
                        ],
                    })
                  : null,
        ],
    });
}
function el(e) {
    let { plan: t, canUseShopDiscount: i } = e;
    return (0, l.jsxs)("div", {
        className: ee.wV,
        children: [
            (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: t.name }),
            (0, l.jsx)(m.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                tag: "span",
                children: i && null != t.nitroPriceLabel ? t.nitroPriceLabel : t.standardPriceLabel,
            }),
        ],
    });
}
function ea(e) {
    let {
            gameName: t,
            gameId: i,
            coverUrl: s,
            plans: n = et,
            initialPlanId: P,
            initialRegionId: k,
            initialRegionName: U,
            initialServerName: w,
            activeSubscription: z,
            onViewServer: y,
            ...G
        } = e,
        O = null != z,
        _ = (0, M.A)(i, "cover") ?? s;
    a.useEffect(() => {
        (0, C.dk)();
    }, []);
    let K = (0, c.bG)([A.A], () => A.A.getRegions()),
        W = (0, c.bG)([A.A], () => A.A.getRegionState()),
        F = (0, c.bG)([A.A], () => A.A.isCreationDisabled()),
        H = (0, c.bG)([S.A], () => S.A.getGameServers().length),
        Z = (0, c.bG)([S.A], () => S.A.getMaxServers()),
        Y = !O && H >= Z,
        [q, ea] = a.useState(w ?? ""),
        [es, en] = a.useState(k),
        [er, ed] = a.useState(P ?? n[0]?.id),
        ec = (0, c.bG)([b.default], () => E.Ay.canUseShopDiscounts(b.default.getCurrentUser())),
        { isValid: eo, errors: eu } = (0, V.u)(q),
        em = n.find((e) => e.id === er) ?? n[0],
        ex =
            !ec &&
            em?.nitroPriceAmount != null &&
            null != em.standardPriceAmount &&
            null != em.priceCurrency &&
            em.nitroPriceAmount < em.standardPriceAmount,
        eh = O ? n.findIndex((e) => e.id === P) : -1,
        ev = null != em ? n.findIndex((e) => e.id === em.id) : -1,
        eg = eh >= 0 && ev > eh,
        ej = O && null != em && em.id !== P,
        ep = O && q.trim().length > 0 && eo && q.trim() !== (w ?? "").trim(),
        eb = O
            ? ej
                ? eh >= 0 && ev >= 0 && ev < eh
                    ? D.intl.string(I.default.UGbET9)
                    : D.intl.string(I.default.yUWVlo)
                : D.intl.string(D.t["R3BPH+"])
            : D.intl.string(D.t["3PatSz"]),
        ef = a.useMemo(
            () =>
                [...K]
                    .sort((e, t) => (0, R.A)(e, t, W))
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })),
            [K, W],
        ),
        eN = a.useMemo(() => n.map((e) => ({ value: e, label: e.name })), [n]),
        eE = O ? (ej && !F) || ep : !F && !Y && q.trim().length > 0 && eo && null != es,
        eC = a.useCallback(() => {
            (0, X.S)({
                gameName: t,
                gameId: i,
                coverUrl: s,
                plans: n,
                activeSubscription: z,
                initialPlanId: er,
                initialRegionId: es,
                initialRegionName: U,
                initialServerName: q,
                onViewServer: y,
            });
        }, [t, i, s, n, z, er, es, U, q, y]),
        eA = a.useCallback(() => {
            if (null != em) {
                if (O) {
                    if (!eE || null == z) return;
                    ep && (0, C.Ce)(z.id, q.trim()),
                        ej &&
                            L({
                                skuId: em.id,
                                gameName: t,
                                gameId: i,
                                activeSubscription: z,
                                isPlanUpgrade: eg,
                                planGroup: n.map((e) => e.id),
                                onViewServer: y,
                                onBack: eC,
                            }),
                        G.onClose();
                    return;
                }
                eE &&
                    null != es &&
                    (L({
                        skuId: em.id,
                        gameName: t,
                        gameId: i,
                        serverName: q,
                        regionId: es,
                        onViewServer: y,
                        onBack: eC,
                    }),
                    G.onClose());
            }
        }, [O, eg, ej, ep, z, eE, em, n, es, t, i, q, G, eC, y]),
        eS = Q.eh[r.X.SHOCKBYTE] ?? "";
    return (0, l.jsxs)(d.d, {
        ...G,
        size: "lg",
        "aria-label": D.intl.string(I.default.RLGW9z),
        children: [
            (0, l.jsx)("div", {
                className: ee.b,
                children: (0, l.jsx)(x.K, {
                    size: "sm",
                    variant: "icon-only",
                    icon: h.P,
                    onClick: G.onClose,
                    "aria-label": D.intl.string(D.t.cpT0Cq),
                }),
            }),
            (0, l.jsxs)("div", {
                className: ee.Qs,
                children: [
                    (0, l.jsx)(v.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: D.intl.string(I.default.RLGW9z),
                    }),
                    Y &&
                        (0, l.jsx)(T, {
                            gameName: t,
                            text: D.intl.formatToPlainString(I.default["Yi+FzV"], { maxInstances: Z }),
                        }),
                    (0, l.jsxs)("div", {
                        className: ee.nM,
                        children: [
                            (0, l.jsxs)("div", {
                                className: ee.OA,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ee.ZZ,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: ee.bk,
                                                children: [
                                                    (0, l.jsx)(v.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-muted",
                                                        children: D.intl.string(I.default.rOMEZd),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: D.intl.string(I.default.THJY1n),
                                                        children: (0, l.jsx)("span", {
                                                            className: ee.WV,
                                                            tabIndex: 0,
                                                            children: (0, l.jsx)(g.c, {
                                                                size: "custom",
                                                                width: 14,
                                                                height: 14,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsx)(j.k, {
                                                value: q,
                                                onChange: ea,
                                                maxLength: Q.XF,
                                                error: eu.name,
                                                disabled: Y,
                                                placeholder: D.intl.string(I.default.ElVYr3),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: ee.ZZ,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: ee.bk,
                                                children: [
                                                    (0, l.jsx)(v.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-muted",
                                                        children: D.intl.string(I.default.nB5OZ4),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: D.intl.string(I.default["61N+P6"]),
                                                        children: (0, l.jsx)("span", {
                                                            className: ee.WV,
                                                            tabIndex: 0,
                                                            children: (0, l.jsx)(g.c, {
                                                                size: "custom",
                                                                width: 14,
                                                                height: 14,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            O
                                                ? (0, l.jsx)(j.k, { value: U ?? "", onChange: $.tEg, disabled: !0 })
                                                : (0, l.jsx)(o.Pw, {
                                                      serialize: (e) => e.id,
                                                      isSelected: (e) => e.id === es,
                                                      options: ef,
                                                      select: (e) => en(e.id),
                                                      isDisabled: Y,
                                                      placeholder: D.intl.string(I.default["k+RTIm"]),
                                                      renderOptionLabel: (e) =>
                                                          (0, l.jsx)(ei, { region: e.value, disabled: e.disabled }),
                                                      renderOptionValue: (e) =>
                                                          null != e[0]
                                                              ? (0, l.jsx)(ei, {
                                                                    region: e[0].value,
                                                                    disabled: e[0].disabled,
                                                                })
                                                              : null,
                                                      "data-migration-pending": !0,
                                                  }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: ee.ZZ,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: ee.bk,
                                                children: [
                                                    (0, l.jsx)(v.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-muted",
                                                        children: D.intl.string(I.default.I143Ml),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: D.intl.string(I.default["/wD5IM"]),
                                                        children: (0, l.jsx)("span", {
                                                            className: ee.WV,
                                                            tabIndex: 0,
                                                            children: (0, l.jsx)(g.c, {
                                                                size: "custom",
                                                                width: 14,
                                                                height: 14,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsx)(o.Pw, {
                                                serialize: (e) => e.id,
                                                isSelected: (e) => e.id === er,
                                                options: eN,
                                                select: (e) => ed(e.id),
                                                isDisabled: Y,
                                                placeholder: D.intl.string(I.default.JdMW0i),
                                                renderOptionLabel: (e) =>
                                                    (0, l.jsx)(el, { plan: e.value, canUseShopDiscount: ec }),
                                                renderOptionValue: (e) =>
                                                    null != e[0]
                                                        ? (0, l.jsx)(el, { plan: e[0].value, canUseShopDiscount: ec })
                                                        : null,
                                                "data-migration-pending": !0,
                                            }),
                                            ex &&
                                                em?.nitroPriceAmount != null &&
                                                null != em.priceCurrency &&
                                                (0, l.jsx)(B, {
                                                    nitroPriceAmount: em.nitroPriceAmount,
                                                    priceCurrency: em.priceCurrency,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != em && (0, l.jsx)(J, { gameName: t, coverUrl: _, plan: em }),
                        ],
                    }),
                    (0, l.jsx)(m.E, {
                        className: ee.aL,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        tag: "p",
                        children: D.intl.format(I.default["2zdDw5"], {
                            cta: eb,
                            provider: D.intl.string(I.default.z5lesv),
                            termsOfServiceUrl: () => (0, N.h)({ href: eS }),
                            helpCenterUrl: f.A.getArticleURL($.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                    F && (0, l.jsx)(T, { gameName: t }),
                ],
            }),
            (0, l.jsx)("div", {
                className: ee.qr,
                children: (0, l.jsx)(p.$, { variant: "primary", size: "md", text: eb, onClick: eA, disabled: !eE }),
            }),
        ],
    });
}
