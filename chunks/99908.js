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
    j = i(292666),
    p = i(821609),
    f = i(73825),
    b = i(793574),
    N = i(529427),
    E = i(396748),
    C = i(97352),
    A = i(192308);
async function P(e) {
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
        h = C.A.getForSKU(t)[0]?.id;
    if (null == h) {
        let e = await (0, f.ur)(t);
        h = e[0]?.id;
    }
    x && (await Promise.all(o.filter((e) => e !== t).map((e) => (0, f.ur)(e))));
    let v = o.flatMap((e) => C.A.getForSKU(e).map((e) => e.id));
    return N.UnifiedCheckoutFlowManagerSingletons[N.CL.GAME_SERVER_SUBSCRIPTION_CHECKOUT].get().openCheckoutModal({
        checkoutConfiguration: { skuId: t, activeSubscription: d ?? null },
        forwardedPaymentModalProps: { initialPlanId: h, planGroup: v, skipConfirm: !0 },
        unifiedCheckoutProviderProps: { analyticsLocations: [b.A.GAME_SERVER_SETUP_MODAL] },
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
                null != t && (0, E.hE)(t),
                    (0, E.hU)()
                        .catch(() => {})
                        .then(() => {
                            null != t && (0, E.hE)(t);
                        }),
                    (e = {
                        gameId: s,
                        gameName: a,
                        onViewServer: u ?? (() => {}),
                        isPlanChange: x,
                        isDowngrade: x && !c,
                        renewalDate: d?.currentPeriodEnd,
                    }),
                    (0, A.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([i.e("32531"), i.e("21128")]).then(i.bind(i, 544699));
                        return (i) => (0, l.jsx)(t, { ...i, ...e });
                    });
            },
        },
        modalAPIOptions: { modalKey: "game-server-subscription-payment-modal" },
    });
}
var k = i(287809),
    S = i(975571),
    w = i(123917),
    U = i(428262),
    z = i(588591),
    L = i(98091),
    M = i(2799),
    V = i(298009),
    y = i(638529),
    R = i(12663),
    I = i(885574),
    G = i(576709),
    D = i(375708),
    O = i(763911);
function T(e) {
    let { gameName: t, text: i } = e;
    return (0, l.jsxs)("div", {
        className: O.lm,
        children: [
            (0, l.jsx)(I.m, { className: O.Kk, size: "custom", width: 24, height: 24, color: "currentColor" }),
            (0, l.jsx)(m.E, {
                className: O.Qq,
                variant: "text-sm/medium",
                color: "text-default",
                tag: "p",
                children: i ?? D.intl.format(G.default.uVpJYf, { gameName: t }),
            }),
        ],
    });
}
var _ = i(403581),
    K = i(939249),
    W = i(532794),
    F = i(580630),
    H = i(202541),
    Z = i(482982);
function B(e) {
    let { nitroPriceAmount: t, priceCurrency: i } = e,
        s = a.useCallback(() => {
            (0, W.A)({ subscriptionTier: H.pe.TIER_2, analyticsLocations: [b.A.GAME_SERVER_PAGE] });
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
var Y = i(752975),
    q = i(850563);
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
                                children: D.intl.string(G.default.i5lFSU),
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
                                children: D.intl.string(G.default["3+gt2d"]),
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
                                children: D.intl.string(G.default["jlz/q6"]),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: q.UK, children: (0, l.jsx)(Y.X, {}) }),
        ],
    });
}
var Q = i(135987),
    X = i(800007),
    $ = i(652215),
    ee = i(842472);
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
                      children: D.intl.string(G.default.aCyHe2),
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
    let { plan: t, hasNitro: i } = e;
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
            initialPlanId: f,
            initialRegionId: b,
            initialRegionName: N,
            initialServerName: C,
            activeSubscription: A,
            onViewServer: y,
            ...I
        } = e,
        O = null != A,
        _ = (0, M.A)(i, "cover") ?? s;
    a.useEffect(() => {
        (0, E.dk)();
    }, []);
    let K = (0, c.bG)([z.A], () => z.A.getRegions()),
        W = (0, c.bG)([z.A], () => z.A.getRegionState()),
        F = (0, c.bG)([z.A], () => z.A.isCreationDisabled()),
        H = (0, c.bG)([L.A], () => L.A.getGameServers().length),
        Z = !O && H >= X.NQ,
        [Y, q] = a.useState(C ?? ""),
        [ea, es] = a.useState(b),
        [en, er] = a.useState(f ?? n[Math.floor(n.length / 2)]?.id),
        ed = (0, c.bG)([k.default], () => U.Ay.canUseShopDiscounts(k.default.getCurrentUser())),
        { isValid: ec, errors: eo } = (0, V.u)(Y),
        eu = n.find((e) => e.id === en) ?? n[0],
        em =
            !ed &&
            eu?.nitroPriceAmount != null &&
            null != eu.standardPriceAmount &&
            null != eu.priceCurrency &&
            eu.nitroPriceAmount < eu.standardPriceAmount,
        ex = O ? n.findIndex((e) => e.id === f) : -1,
        eh = null != eu ? n.findIndex((e) => e.id === eu.id) : -1,
        ev = ex >= 0 && eh > ex,
        eg = O && null != eu && eu.id !== f,
        ej = O && Y.trim().length > 0 && ec && Y.trim() !== (C ?? "").trim(),
        ep = O
            ? eg
                ? ex >= 0 && eh >= 0 && eh < ex
                    ? D.intl.string(G.default.UGbET9)
                    : D.intl.string(G.default.yUWVlo)
                : D.intl.string(D.t["R3BPH+"])
            : D.intl.string(D.t["3PatSz"]),
        ef = a.useMemo(
            () =>
                [...K]
                    .sort((e, t) => (0, R.A)(e, t, W))
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })),
            [K, W],
        ),
        eb = a.useMemo(() => n.map((e) => ({ value: e, label: e.name })), [n]),
        eN = O ? (eg && !F) || ej : !F && !Z && Y.trim().length > 0 && ec && null != ea,
        eE = a.useCallback(() => {
            (0, Q.S)({
                gameName: t,
                gameId: i,
                coverUrl: s,
                plans: n,
                activeSubscription: A,
                initialPlanId: en,
                initialRegionId: ea,
                initialRegionName: N,
                initialServerName: Y,
                onViewServer: y,
            });
        }, [t, i, s, n, A, en, ea, N, Y, y]),
        eC = a.useCallback(() => {
            if (null != eu) {
                if (O) {
                    if (!eN || null == A) return;
                    ej && (0, E.Ce)(A.id, Y.trim()),
                        eg &&
                            P({
                                skuId: eu.id,
                                gameName: t,
                                gameId: i,
                                activeSubscription: A,
                                isPlanUpgrade: ev,
                                planGroup: n.map((e) => e.id),
                                onViewServer: y,
                                onBack: eE,
                            }),
                        I.onClose();
                    return;
                }
                eN &&
                    null != ea &&
                    (P({
                        skuId: eu.id,
                        gameName: t,
                        gameId: i,
                        serverName: Y,
                        regionId: ea,
                        onViewServer: y,
                        onBack: eE,
                    }),
                    I.onClose());
            }
        }, [O, ev, eg, ej, A, eN, eu, n, ea, t, i, Y, I, eE, y]),
        eA = X.eh[r.X.SHOCKBYTE] ?? "";
    return (0, l.jsxs)(d.d, {
        ...I,
        size: "lg",
        "aria-label": D.intl.string(G.default.RLGW9z),
        children: [
            (0, l.jsx)("div", {
                className: ee.b,
                children: (0, l.jsx)(x.K, {
                    size: "sm",
                    variant: "icon-only",
                    icon: h.P,
                    onClick: I.onClose,
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
                    Z &&
                        (0, l.jsx)(T, {
                            gameName: t,
                            text: D.intl.formatToPlainString(G.default["Yi+FzV"], { maxInstances: X.NQ }),
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
                                                value: Y,
                                                onChange: q,
                                                maxLength: X.XF,
                                                error: eo.name,
                                                disabled: Z,
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
                                                ? (0, l.jsx)(j.k, { value: N ?? "", onChange: $.tEg, disabled: !0 })
                                                : (0, l.jsx)(o.Pw, {
                                                      serialize: (e) => e.id,
                                                      isSelected: (e) => e.id === ea,
                                                      options: ef,
                                                      select: (e) => es(e.id),
                                                      isDisabled: Z,
                                                      placeholder: D.intl.string(G.default["k+RTIm"]),
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
                                                        children: D.intl.string(G.default.I143Ml),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: D.intl.string(G.default["/wD5IM"]),
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
                                                isSelected: (e) => e.id === en,
                                                options: eb,
                                                select: (e) => er(e.id),
                                                isDisabled: Z,
                                                placeholder: D.intl.string(G.default.JdMW0i),
                                                renderOptionLabel: (e) =>
                                                    (0, l.jsx)(el, { plan: e.value, hasNitro: ed }),
                                                renderOptionValue: (e) =>
                                                    null != e[0]
                                                        ? (0, l.jsx)(el, { plan: e[0].value, hasNitro: ed })
                                                        : null,
                                                "data-migration-pending": !0,
                                            }),
                                            em &&
                                                eu?.nitroPriceAmount != null &&
                                                null != eu.priceCurrency &&
                                                (0, l.jsx)(B, {
                                                    nitroPriceAmount: eu.nitroPriceAmount,
                                                    priceCurrency: eu.priceCurrency,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != eu && (0, l.jsx)(J, { gameName: t, coverUrl: _, plan: eu }),
                        ],
                    }),
                    (0, l.jsx)(m.E, {
                        className: ee.aL,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        tag: "p",
                        children: D.intl.format(G.default["2zdDw5"], {
                            cta: ep,
                            provider: D.intl.string(G.default.z5lesv),
                            termsOfServiceUrl: () => (0, w.h)({ href: eA }),
                            helpCenterUrl: S.A.getArticleURL($.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                    F && (0, l.jsx)(T, { gameName: t }),
                ],
            }),
            (0, l.jsx)("div", {
                className: ee.qr,
                children: (0, l.jsx)(p.$, { variant: "primary", size: "md", text: ep, onClick: eC, disabled: !eN }),
            }),
        ],
    });
}
