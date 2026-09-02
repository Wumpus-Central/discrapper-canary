t.d(i, { default: () => ea });
var l = t(477900),
    a = t(582128),
    s = t(503698),
    n = t.n(s),
    r = t(281445),
    d = t(224640),
    c = t(17928),
    o = t(843282),
    u = t(866665),
    m = t(834730),
    x = t(408278),
    h = t(789645),
    v = t(297264),
    g = t(290136),
    j = t(95477),
    p = t(821609),
    b = t(287809),
    f = t(975571),
    N = t(123917),
    E = t(158045),
    C = t(498480),
    A = t(42957),
    S = t(814201),
    P = t(73825),
    k = t(793574),
    U = t(529427),
    w = t(97352),
    I = t(192308);
async function z(e) {
    let {
            skuId: i,
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
        h = w.A.getForSKU(i)[0]?.id;
    if (null == h) {
        let e = await (0, P.ur)(i);
        h = e[0]?.id;
    }
    x && (await Promise.all(o.filter((e) => e !== i).map((e) => (0, P.ur)(e))));
    let v = o.flatMap((e) => w.A.getForSKU(e).map((e) => e.id));
    return U.UnifiedCheckoutFlowManagerSingletons[U.CL.GAME_SERVER_SUBSCRIPTION_CHECKOUT].get().openCheckoutModal({
        checkoutConfiguration: { skuId: i, activeSubscription: d ?? null },
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
                let i = x && c && null != d ? d.id : null;
                null != i && (0, C.hE)(i),
                    (0, C.hU)()
                        .catch(() => {})
                        .then(() => {
                            null != i && (0, C.hE)(i);
                        }),
                    (e = {
                        gameId: s,
                        gameName: a,
                        onViewServer: u ?? (() => {}),
                        isPlanChange: x,
                        isDowngrade: x && !c,
                        renewalDate: d?.currentPeriodEnd,
                    }),
                    (0, I.openModalLazy)(async () => {
                        let { default: i } = await Promise.all([t.e("909189"), t.e("489541")]).then(t.bind(t, 978084));
                        return (t) => (0, l.jsx)(i, { ...t, ...e });
                    });
            },
        },
        modalAPIOptions: { modalKey: "game-server-subscription-payment-modal" },
    });
}
var L = t(349085),
    M = t(749351),
    V = t(115815),
    y = t(231513),
    R = t(885574),
    G = t(394107),
    D = t(375708),
    O = t(233658);
function T(e) {
    let { gameName: i, text: t } = e;
    return (0, l.jsxs)("div", {
        className: O.lm,
        children: [
            (0, l.jsx)(R.CircleInformationIcon, {
                className: O.Kk,
                size: "custom",
                width: 24,
                height: 24,
                color: "currentColor",
            }),
            (0, l.jsx)(m.E, {
                className: O.Qq,
                variant: "text-sm/medium",
                color: "text-default",
                tag: "p",
                children: t ?? D.intl.format(G.default.uVpJYf, { gameName: i }),
            }),
        ],
    });
}
var _ = t(403581),
    K = t(939249),
    W = t(532794),
    F = t(580630),
    H = t(202541),
    Z = t(77271);
function B(e) {
    let { nitroPriceAmount: i, priceCurrency: t } = e,
        s = a.useCallback(() => {
            (0, W.A)({ subscriptionTier: H.pe.TIER_2, analyticsLocations: [k.A.GAME_SERVER_PAGE] });
        }, []),
        n = (0, F.RS)(i, t);
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
var Q = t(721425),
    Y = t(138804);
function q(e) {
    let { gameName: i, coverUrl: t, plan: a } = e;
    return (0, l.jsxs)("div", {
        className: Y.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: Y.ys,
                "aria-hidden": !0,
                children: [
                    null != t && (0, l.jsx)("img", { className: Y.Fc, src: t, alt: "" }),
                    (0, l.jsx)("div", { className: Y.ex }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: Y.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: Y.Vs,
                        children: [
                            null != t
                                ? (0, l.jsx)("img", { className: Y.uP, src: t, alt: "" })
                                : (0, l.jsx)("div", {
                                      className: Y.Vj,
                                      children: (0, l.jsx)(m.E, {
                                          variant: "text-xs/semibold",
                                          color: "text-muted",
                                          children: i,
                                      }),
                                  }),
                            (0, l.jsx)("div", { className: Y.tw, "aria-hidden": !0 }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: Y.i8,
                        children: [
                            (0, l.jsx)(m.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "div",
                                children: i,
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
                className: Y.M1,
                children: [
                    (0, l.jsxs)("div", {
                        className: Y.zu,
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
                                children: D.intl.string(G.default.i5lFSU),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: Y.Wc }),
                    (0, l.jsxs)("div", {
                        className: Y.zu,
                        children: [
                            (0, l.jsxs)("div", {
                                className: Y.mi,
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
                                children: D.intl.string(G.default["3+gt2d"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: Y.Wc }),
                    (0, l.jsxs)("div", {
                        className: Y.zu,
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
                                children: D.intl.string(G.default["jlz/q6"]),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: Y.UK, children: (0, l.jsx)(Q.X, {}) }),
        ],
    });
}
var J = t(199781),
    X = t(628049),
    $ = t(652215),
    ee = t(950915);
let ei = [];
function et(e) {
    let { region: i, disabled: t } = e,
        { pingText: a, pingCircleStyle: s } = (0, V.b)(i.pingUrl);
    return (0, l.jsxs)("div", {
        className: ee.wV,
        children: [
            (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: i.name }),
            !0 === t
                ? (0, l.jsx)(m.E, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      tag: "span",
                      children: D.intl.string(G.default.aCyHe2),
                  })
                : "" !== i.pingUrl
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
    let { plan: i, canUseShopDiscount: t } = e;
    return (0, l.jsxs)("div", {
        className: ee.wV,
        children: [
            (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: i.name }),
            (0, l.jsx)(m.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                tag: "span",
                children: t && null != i.nitroPriceLabel ? i.nitroPriceLabel : i.standardPriceLabel,
            }),
        ],
    });
}
function ea(e) {
    let {
            gameName: i,
            gameId: t,
            coverUrl: s,
            plans: n = ei,
            initialPlanId: P,
            initialRegionId: k,
            initialRegionName: U,
            initialServerName: w,
            activeSubscription: I,
            onViewServer: V,
            ...R
        } = e,
        O = null != I,
        _ = (0, L.A)(t, "cover") ?? s;
    a.useEffect(() => {
        (0, C.dk)();
    }, []);
    let K = (0, c.bG)([A.A], () => A.A.getRegions()),
        W = (0, c.bG)([A.A], () => A.A.getRegionState()),
        F = (0, c.bG)([A.A], () => A.A.isCreationDisabled()),
        H = (0, c.bG)([S.A], () => S.A.getGameServers().length),
        Z = (0, c.bG)([S.A], () => S.A.getMaxServers()),
        Q = !O && H >= Z,
        [Y, ea] = a.useState(w ?? ""),
        [es, en] = a.useState(k),
        [er, ed] = a.useState(P ?? n[0]?.id),
        ec = (0, c.bG)([b.default], () => E.Ay.canUseShopDiscounts(b.default.getCurrentUser())),
        { isValid: eo, errors: eu } = (0, M.u)(Y),
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
        ep = O && Y.trim().length > 0 && eo && Y.trim() !== (w ?? "").trim(),
        eb = O
            ? ej
                ? eh >= 0 && ev >= 0 && ev < eh
                    ? D.intl.string(G.default.UGbET9)
                    : D.intl.string(G.default.yUWVlo)
                : D.intl.string(D.t["R3BPH+"])
            : D.intl.string(D.t["3PatSz"]),
        ef = a.useMemo(
            () =>
                [...K]
                    .sort((e, i) => (0, y.A)(e, i, W))
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })),
            [K, W],
        ),
        eN = a.useMemo(() => n.map((e) => ({ value: e, label: e.name })), [n]),
        eE = O ? (ej && !F) || ep : !F && !Q && Y.trim().length > 0 && eo && null != es,
        eC = a.useCallback(() => {
            (0, J.S)({
                gameName: i,
                gameId: t,
                coverUrl: s,
                plans: n,
                activeSubscription: I,
                initialPlanId: er,
                initialRegionId: es,
                initialRegionName: U,
                initialServerName: Y,
                onViewServer: V,
            });
        }, [i, t, s, n, I, er, es, U, Y, V]),
        eA = a.useCallback(() => {
            if (null != em) {
                if (O) {
                    if (!eE || null == I) return;
                    ep && (0, C.Ce)(I.id, Y.trim()),
                        ej &&
                            z({
                                skuId: em.id,
                                gameName: i,
                                gameId: t,
                                activeSubscription: I,
                                isPlanUpgrade: eg,
                                planGroup: n.map((e) => e.id),
                                onViewServer: V,
                                onBack: eC,
                            }),
                        R.onClose();
                    return;
                }
                eE &&
                    null != es &&
                    (z({
                        skuId: em.id,
                        gameName: i,
                        gameId: t,
                        serverName: Y,
                        regionId: es,
                        onViewServer: V,
                        onBack: eC,
                    }),
                    R.onClose());
            }
        }, [O, eg, ej, ep, I, eE, em, n, es, i, t, Y, R, eC, V]),
        eS = X.eh[r.X.SHOCKBYTE] ?? "";
    return (0, l.jsxs)(d.d, {
        ...R,
        size: "lg",
        "aria-label": D.intl.string(G.default.RLGW9z),
        children: [
            (0, l.jsx)("div", {
                className: ee.b,
                children: (0, l.jsx)(x.K, {
                    size: "sm",
                    variant: "icon-only",
                    icon: h.P,
                    onClick: R.onClose,
                    "aria-label": D.intl.string(D.t.cpT0Cq),
                }),
            }),
            (0, l.jsxs)("div", {
                className: ee.Qs,
                children: [
                    (0, l.jsx)(v.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: D.intl.string(G.default.RLGW9z),
                    }),
                    Q &&
                        (0, l.jsx)(T, {
                            gameName: i,
                            text: D.intl.formatToPlainString(G.default["Yi+FzV"], { maxInstances: Z }),
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
                                                        children: D.intl.string(G.default.rOMEZd),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: D.intl.string(G.default.THJY1n),
                                                        children: (0, l.jsx)("span", {
                                                            className: ee.WV,
                                                            tabIndex: 0,
                                                            children: (0, l.jsx)(g.CircleQuestionIcon, {
                                                                size: "custom",
                                                                width: 14,
                                                                height: 14,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsx)(j.k, {
                                                value: Y,
                                                onChange: ea,
                                                maxLength: X.XF,
                                                error: eu.name,
                                                disabled: Q,
                                                placeholder: D.intl.string(G.default.ElVYr3),
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
                                                        children: D.intl.string(G.default.nB5OZ4),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: D.intl.string(G.default["61N+P6"]),
                                                        children: (0, l.jsx)("span", {
                                                            className: ee.WV,
                                                            tabIndex: 0,
                                                            children: (0, l.jsx)(g.CircleQuestionIcon, {
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
                                                      isDisabled: Q,
                                                      placeholder: D.intl.string(G.default["k+RTIm"]),
                                                      renderOptionLabel: (e) =>
                                                          (0, l.jsx)(et, { region: e.value, disabled: e.disabled }),
                                                      renderOptionValue: (e) =>
                                                          null != e[0]
                                                              ? (0, l.jsx)(et, {
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
                                                        children: D.intl.string(G.default.I143Ml),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: D.intl.string(G.default["/wD5IM"]),
                                                        children: (0, l.jsx)("span", {
                                                            className: ee.WV,
                                                            tabIndex: 0,
                                                            children: (0, l.jsx)(g.CircleQuestionIcon, {
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
                                                isDisabled: Q,
                                                placeholder: D.intl.string(G.default.JdMW0i),
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
                            null != em && (0, l.jsx)(q, { gameName: i, coverUrl: _, plan: em }),
                        ],
                    }),
                    (0, l.jsx)(m.E, {
                        className: ee.aL,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        tag: "p",
                        children: D.intl.format(G.default["2zdDw5"], {
                            cta: eb,
                            provider: D.intl.string(G.default.z5lesv),
                            termsOfServiceUrl: () => (0, N.h)({ href: eS }),
                            helpCenterUrl: f.A.getArticleURL($.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                    F && (0, l.jsx)(T, { gameName: i }),
                ],
            }),
            (0, l.jsx)("div", {
                className: ee.qr,
                children: (0, l.jsx)(p.$, { variant: "primary", size: "md", text: eb, onClick: eA, disabled: !eE }),
            }),
        ],
    });
}
