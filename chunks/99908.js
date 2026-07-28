i.d(t, { default: () => el });
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
    k = i(192308);
async function A(e) {
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
                    (0, k.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([i.e("32531"), i.e("21128")]).then(i.bind(i, 544699));
                        return (i) => (0, l.jsx)(t, { ...i, ...e });
                    });
            },
        },
        modalAPIOptions: { modalKey: "game-server-subscription-payment-modal" },
    });
}
var P = i(287809),
    S = i(975571),
    w = i(123917),
    U = i(428262),
    z = i(588591),
    L = i(2799),
    M = i(298009),
    y = i(638529),
    R = i(12663),
    V = i(885574),
    I = i(576709),
    G = i(375708),
    O = i(763911);
function _(e) {
    let { gameName: t } = e;
    return (0, l.jsxs)("div", {
        className: O.lm,
        children: [
            (0, l.jsx)(V.m, { className: O.Kk, size: "custom", width: 24, height: 24, color: "currentColor" }),
            (0, l.jsx)(m.E, {
                className: O.Qq,
                variant: "text-sm/medium",
                color: "text-default",
                tag: "p",
                children: G.intl.format(I.default.uVpJYf, { gameName: t }),
            }),
        ],
    });
}
var D = i(403581),
    T = i(939249),
    K = i(532794),
    W = i(580630),
    H = i(202541),
    Z = i(482982);
function F(e) {
    let { nitroPriceAmount: t, priceCurrency: i } = e,
        s = a.useCallback(() => {
            (0, K.A)({ subscriptionTier: H.pe.TIER_2, analyticsLocations: [b.A.GAME_SERVER_PAGE] });
        }, []),
        n = (0, W.RS)(t, i);
    return (0, l.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, l.jsx)(D.t, { className: Z.Kk, size: "custom", width: 16, height: 16, color: "currentColor" }),
            (0, l.jsx)(m.E, {
                variant: "text-xs/medium",
                tag: "span",
                children: G.intl.format(G.t.Sv8iic, {
                    price: n,
                    subscribeNowHook: (e) => (0, l.jsx)(T.D, { className: Z.FS, onClick: s, children: e }),
                }),
            }),
        ],
    });
}
var B = i(752975),
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
                                children: G.intl.string(I.default.i5lFSU),
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
                                children: G.intl.string(I.default["3+gt2d"]),
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
                                children: G.intl.string(I.default["jlz/q6"]),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: q.UK, children: (0, l.jsx)(B.X, {}) }),
        ],
    });
}
var Y = i(135987),
    X = i(800007),
    Q = i(652215),
    $ = i(842472);
let ee = [];
function et(e) {
    let { region: t, disabled: i } = e,
        { pingText: a, pingCircleStyle: s } = (0, y.b)(t.pingUrl);
    return (0, l.jsxs)("div", {
        className: $.wV,
        children: [
            (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: t.name }),
            !0 === i
                ? (0, l.jsx)(m.E, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      tag: "span",
                      children: G.intl.string(I.default.aCyHe2),
                  })
                : "" !== t.pingUrl
                  ? (0, l.jsxs)("div", {
                        className: $.$T,
                        children: [
                            (0, l.jsx)("div", { className: n()($.Jg, s) }),
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
function ei(e) {
    let { plan: t, hasNitro: i } = e;
    return (0, l.jsxs)("div", {
        className: $.wV,
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
function el(e) {
    let {
            gameName: t,
            gameId: i,
            coverUrl: s,
            plans: n = ee,
            initialPlanId: f,
            initialRegionId: b,
            initialRegionName: N,
            initialServerName: C,
            activeSubscription: k,
            onViewServer: y,
            ...V
        } = e,
        O = null != k,
        D = (0, L.A)(i, "cover") ?? s;
    a.useEffect(() => {
        (0, E.dk)();
    }, []);
    let T = (0, c.bG)([z.A], () => z.A.getRegions()),
        K = (0, c.bG)([z.A], () => z.A.getRegionState()),
        W = (0, c.bG)([z.A], () => z.A.isCreationDisabled()),
        [H, Z] = a.useState(C ?? ""),
        [B, q] = a.useState(b),
        [el, ea] = a.useState(f ?? n[Math.floor(n.length / 2)]?.id),
        es = (0, c.bG)([P.default], () => U.Ay.canUseShopDiscounts(P.default.getCurrentUser())),
        { isValid: en, errors: er } = (0, M.u)(H),
        ed = n.find((e) => e.id === el) ?? n[0],
        ec =
            !es &&
            ed?.nitroPriceAmount != null &&
            null != ed.standardPriceAmount &&
            null != ed.priceCurrency &&
            ed.nitroPriceAmount < ed.standardPriceAmount,
        eo = O ? n.findIndex((e) => e.id === f) : -1,
        eu = null != ed ? n.findIndex((e) => e.id === ed.id) : -1,
        em = eo >= 0 && eu > eo,
        ex = O && null != ed && ed.id !== f,
        eh = O && H.trim().length > 0 && en && H.trim() !== (C ?? "").trim(),
        ev = O
            ? ex
                ? eo >= 0 && eu >= 0 && eu < eo
                    ? G.intl.string(I.default.UGbET9)
                    : G.intl.string(I.default.yUWVlo)
                : G.intl.string(G.t["R3BPH+"])
            : G.intl.string(G.t["3PatSz"]),
        eg = a.useMemo(
            () =>
                [...T]
                    .sort((e, t) => (0, R.A)(e, t, K))
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })),
            [T, K],
        ),
        ej = a.useMemo(() => n.map((e) => ({ value: e, label: e.name })), [n]),
        ep = O ? (ex && !W) || eh : !W && H.trim().length > 0 && en && null != B,
        ef = a.useCallback(() => {
            (0, Y.S)({
                gameName: t,
                gameId: i,
                coverUrl: s,
                plans: n,
                activeSubscription: k,
                initialPlanId: el,
                initialRegionId: B,
                initialRegionName: N,
                initialServerName: H,
                onViewServer: y,
            });
        }, [t, i, s, n, k, el, B, N, H, y]),
        eb = a.useCallback(() => {
            if (null != ed) {
                if (O) {
                    if (!ep || null == k) return;
                    eh && (0, E.Ce)(k.id, H.trim()),
                        ex &&
                            A({
                                skuId: ed.id,
                                gameName: t,
                                gameId: i,
                                activeSubscription: k,
                                isPlanUpgrade: em,
                                planGroup: n.map((e) => e.id),
                                onViewServer: y,
                                onBack: ef,
                            }),
                        V.onClose();
                    return;
                }
                ep &&
                    null != B &&
                    (A({
                        skuId: ed.id,
                        gameName: t,
                        gameId: i,
                        serverName: H,
                        regionId: B,
                        onViewServer: y,
                        onBack: ef,
                    }),
                    V.onClose());
            }
        }, [O, em, ex, eh, k, ep, ed, n, B, t, i, H, V, ef, y]),
        eN = X.eh[r.X.SHOCKBYTE] ?? "";
    return (0, l.jsxs)(d.d, {
        ...V,
        size: "lg",
        "aria-label": G.intl.string(I.default.RLGW9z),
        children: [
            (0, l.jsx)("div", {
                className: $.b,
                children: (0, l.jsx)(x.K, {
                    size: "sm",
                    variant: "icon-only",
                    icon: h.P,
                    onClick: V.onClose,
                    "aria-label": G.intl.string(G.t.cpT0Cq),
                }),
            }),
            (0, l.jsxs)("div", {
                className: $.Qs,
                children: [
                    (0, l.jsx)(v.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: G.intl.string(I.default.RLGW9z),
                    }),
                    (0, l.jsxs)("div", {
                        className: $.nM,
                        children: [
                            (0, l.jsxs)("div", {
                                className: $.OA,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: $.ZZ,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: $.bk,
                                                children: [
                                                    (0, l.jsx)(v.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-muted",
                                                        children: G.intl.string(I.default.rOMEZd),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: G.intl.string(I.default.THJY1n),
                                                        children: (0, l.jsx)("span", {
                                                            className: $.WV,
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
                                                value: H,
                                                onChange: Z,
                                                maxLength: X.XF,
                                                error: er.name,
                                                placeholder: G.intl.string(I.default.ElVYr3),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: $.ZZ,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: $.bk,
                                                children: [
                                                    (0, l.jsx)(v.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-muted",
                                                        children: G.intl.string(I.default.nB5OZ4),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: G.intl.string(I.default["61N+P6"]),
                                                        children: (0, l.jsx)("span", {
                                                            className: $.WV,
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
                                                ? (0, l.jsx)(j.k, { value: N ?? "", onChange: Q.tEg, disabled: !0 })
                                                : (0, l.jsx)(o.Pw, {
                                                      serialize: (e) => e.id,
                                                      isSelected: (e) => e.id === B,
                                                      options: eg,
                                                      select: (e) => q(e.id),
                                                      placeholder: G.intl.string(I.default["k+RTIm"]),
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
                                        className: $.ZZ,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: $.bk,
                                                children: [
                                                    (0, l.jsx)(v.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-muted",
                                                        children: G.intl.string(I.default.I143Ml),
                                                    }),
                                                    (0, l.jsx)(u.m, {
                                                        position: "top",
                                                        text: G.intl.string(I.default["/wD5IM"]),
                                                        children: (0, l.jsx)("span", {
                                                            className: $.WV,
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
                                                isSelected: (e) => e.id === el,
                                                options: ej,
                                                select: (e) => ea(e.id),
                                                placeholder: G.intl.string(I.default.JdMW0i),
                                                renderOptionLabel: (e) =>
                                                    (0, l.jsx)(ei, { plan: e.value, hasNitro: es }),
                                                renderOptionValue: (e) =>
                                                    null != e[0]
                                                        ? (0, l.jsx)(ei, { plan: e[0].value, hasNitro: es })
                                                        : null,
                                                "data-migration-pending": !0,
                                            }),
                                            ec &&
                                                ed?.nitroPriceAmount != null &&
                                                null != ed.priceCurrency &&
                                                (0, l.jsx)(F, {
                                                    nitroPriceAmount: ed.nitroPriceAmount,
                                                    priceCurrency: ed.priceCurrency,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != ed && (0, l.jsx)(J, { gameName: t, coverUrl: D, plan: ed }),
                        ],
                    }),
                    (0, l.jsx)(m.E, {
                        className: $.aL,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        tag: "p",
                        children: G.intl.format(I.default["2zdDw5"], {
                            cta: ev,
                            provider: G.intl.string(I.default.z5lesv),
                            termsOfServiceUrl: () => (0, w.h)({ href: eN }),
                            helpCenterUrl: S.A.getArticleURL(Q.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                    W && (0, l.jsx)(_, { gameName: t }),
                ],
            }),
            (0, l.jsx)("div", {
                className: $.qr,
                children: (0, l.jsx)(p.$, { variant: "primary", size: "md", text: ev, onClick: eb, disabled: !ep }),
            }),
        ],
    });
}
