i.d(e, { B4: () => J, Mp: () => V, B8: () => X });
var l = i(477900),
    s = i(582128),
    t = i(834730),
    r = i(958077);
function a(n) {
    let {
            title: e,
            subtitle: i,
            iconSrc: a,
            backgroundSrc: d,
            animatedBackgroundSrc: u,
            prefersReducedMotion: o = !0,
        } = n,
        c = s.useMemo(() => {
            let n = d ?? a;
            if (null != n) return { "--custom-background-url": `url(${n.toString()})` };
        }, [d, a]),
        m = s.useMemo(() => {
            if (null == d) return;
            let n = { "--custom-background-static": `url(${d.toString()}` };
            return (o || null == u || (n["--custom-background-animated"] = `url(${u.toString()})`), n);
        }, [u, d, o]);
    return (0, l.jsxs)("div", {
        className: r.iE,
        children: [
            (0, l.jsx)("div", { className: r.Tp, style: c }),
            (0, l.jsxs)("div", {
                className: r.Qs,
                children: [
                    null != a &&
                        (0, l.jsx)("div", {
                            className: r.Kk,
                            children: (0, l.jsx)("img", { src: a.toString(), alt: "" }),
                        }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(t.E, { variant: "heading-xl/semibold", tag: "div", children: e }),
                            null != i &&
                                (0, l.jsxs)(t.E, { variant: "body-sm/normal", children: ["\u201C", i, "\u201D"] }),
                        ],
                    }),
                ],
            }),
            null != d ? (0, l.jsx)("div", { className: r.Sl, style: m }) : null,
        ],
    });
}
var d = i(503698),
    u = i.n(d),
    o = i(559106),
    c = i(638916),
    m = i(883510),
    p = i(840362);
function h(n) {
    let {
        title: e,
        description: i,
        headerImage: s,
        onDetails: r,
        onPurchase: a,
        PurchaseButton: d,
        GiftButton: h,
        availabilityLabel: x,
    } = n;
    return (0, l.jsx)(o.vN, {
        children: (0, l.jsxs)("div", {
            className: u()(m.iE, p.t),
            tabIndex: 0,
            onClick: () => {
                null != r ? r() : null != a && a();
            },
            onKeyUp: (n) => {
                "Enter" === n.key && (n.stopPropagation(), n.preventDefault(), null != r ? r() : null != a && a());
            },
            children: [
                (0, l.jsx)("div", {
                    className: m.Td,
                    style: null != s ? { backgroundImage: null != s ? `url(${s.toString()})` : void 0 } : void 0,
                    children: null == s && (0, l.jsx)(c.q, { color: "white", size: "custom", height: 80, width: 80 }),
                }),
                (0, l.jsxs)("div", {
                    className: m.zH,
                    children: [
                        (0, l.jsx)(t.E, { color: "text-strong", variant: "body-md/semibold", children: e }),
                        null != i &&
                            (0, l.jsx)(t.E, {
                                className: m.h_,
                                color: "text-muted",
                                variant: "body-sm/normal",
                                children: i,
                            }),
                    ],
                }),
                (null != d || null != h) &&
                    (0, l.jsxs)("div", {
                        className: m.qr,
                        children: [
                            null != d &&
                                (0, l.jsx)(t.E, {
                                    color: "interactive-text-default",
                                    variant: "body-sm/normal",
                                    children: x,
                                }),
                            (0, l.jsxs)("div", {
                                className: m.GC,
                                children: [
                                    null != d &&
                                        (0, l.jsx)(d, {
                                            onClick: (n) => {
                                                (n.stopPropagation(), a?.());
                                            },
                                        }),
                                    null != h && (0, l.jsx)(h, {}),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var x = i(885996),
    b = i(17928),
    g = i(534514),
    v = i(192308),
    I = i(775602),
    j = i(793574),
    k = i(688810),
    A = i(75304),
    f = i(548118),
    P = i(915043),
    y = i(163437),
    E = i(955440),
    N = i(638643),
    S = i(3432),
    T = i(185438),
    R = i(71393),
    M = i(67480),
    _ = i(328968),
    U = i(174459),
    L = i(486020),
    F = i(371794),
    C = i(240248),
    G = i(998218),
    D = i(943775),
    O = i(237218),
    z = i(56754),
    B = i(376374),
    w = i(311321),
    K = i(652215),
    $ = i(105292),
    q = i(80890);
let H = new Intl.DateTimeFormat($.intl.currentLocale, { month: "short", day: "numeric" });
function V(n) {
    let { app: e, guildId: i, subscriptions: t, otps: r } = n,
        d = s.useMemo(() => (0, D.A)(e, 100), [e]),
        { bot: u } = e,
        o = s.useMemo(() => {
            if (u?.banner == null) return;
            let n = (0, L.z)({ id: u.id, banner: u.banner, size: 1024, canAnimate: !1 });
            return null != n ? (G.A.toURLSafe(n) ?? void 0) : void 0;
        }, [u]),
        c = s.useMemo(() => {
            if (u?.banner == null) return;
            let n = (0, L.z)({ id: u.id, banner: u.banner, size: 1024, canAnimate: !0 });
            return null != n ? (G.A.toURLSafe(n) ?? void 0) : void 0;
        }, [u]),
        m = (0, b.bG)([I.Ay], () => I.Ay.useReducedMotion),
        p = s.useMemo(() => [...t.map((n) => n.skuId), ...r.map((n) => n.skuId)], [t, r]),
        { analyticsLocations: h } = (0, k.Ay)(j.A.APP_STOREFRONT);
    return (
        s.useEffect(() => {
            0 !== p.length &&
                U.default.track(K.HAw.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: e.id,
                    sku_ids: p,
                    location_stack: h,
                });
        }, [h, e.id, p]),
        (0, l.jsxs)("div", {
            className: q.iE,
            children: [
                (0, l.jsx)(a, {
                    title: e.name,
                    iconSrc: d,
                    backgroundSrc: o,
                    animatedBackgroundSrc: c,
                    prefersReducedMotion: m,
                }),
                (0, l.jsx)(Z, { appId: e.id, subscriptions: t, otps: r, guildId: i }),
            ],
        })
    );
}
function Z(n) {
    let { appId: e, subscriptions: i, otps: s, guildId: t } = n;
    return (0, l.jsxs)("div", {
        className: q.q4,
        children: [
            i.length > 0 &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(w.A, { subscriptions: i }),
                        (0, l.jsx)("div", {
                            className: q.dD,
                            children: i.map((n) =>
                                (0, l.jsx)(
                                    J,
                                    {
                                        appId: e,
                                        guildId: t,
                                        listing: n,
                                        subscriptionType: (0, y.bg)(n.skuFlags) ? "user" : "guild",
                                    },
                                    n.id,
                                ),
                            ),
                        }),
                    ],
                }),
            s.length > 0 &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(g.D, { variant: "heading-lg/semibold", children: $.intl.string($.t.yUGTs8) }),
                        (0, l.jsx)("div", {
                            className: q.dD,
                            children: s.map((n) => (0, l.jsx)(X, { skuId: n.skuId, appId: e }, n.id)),
                        }),
                    ],
                }),
        ],
    });
}
function J(n) {
    let { appId: e, guildId: r, listing: a, subscriptionType: d, onDetails: u } = n,
        { data: o } = (0, E.A)(a.skuId),
        c = o?.[0],
        m = (0, b.bG)([M.A], () => M.A.get(a.skuId), [a.skuId]),
        p = (0, b.bG)([R.A], () => R.A.getGuild(r), [r]),
        h = (0, b.bG)([M.A], () => M.A.getParentSKU(a.skuId), [a.skuId]),
        g = (0, P.GD)(h, r),
        I = g?.subscription,
        j = (0, P.Ko)(h, r),
        k = null != I && (0, y.Uo)(I, m),
        A = null != j && g?.subscriptionPlan?.id !== j?.subscriptionPlan.id,
        N = !1 === k && j?.subscriptionPlan.skuId === a.skuId,
        _ = g?.subscriptionPlan.skuId === a.skuId,
        {
            openModal: U,
            subscriptionPurchaseButtonState: L,
            isGuildSubscribed: F,
        } = (0, T.A)({ skuId: a.skuId, initialSubscribeForGuild: r, analyticsLocation: K.ThZ.APP_STOREFRONT }),
        C = s.useMemo(
            () =>
                a.benefits?.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, S.N)(e, n.icon),
                })),
            [e, a.benefits],
        ),
        G = s.useMemo(() => (null != a.thumbnail ? (0, O.t)(e, a.thumbnail, 256) : void 0), [e, a.thumbnail]),
        D = s.useCallback(
            (n) =>
                (0, l.jsx)(B.rc, {
                    ...n,
                    appId: e,
                    subscriptionType: d,
                    skuId: a.skuId,
                    subscriptionPlan: c,
                    state: L,
                }),
            [e, d, a.skuId, c, L],
        ),
        z = s.useMemo(() => {
            if (A && I?.currentPeriodEnd != null) {
                let n = H.format(I?.currentPeriodEnd);
                if (_) return $.intl.formatToPlainString($.t.EV2lZz, { date: n });
                if (N) return $.intl.formatToPlainString($.t["2w6+NN"], { date: n });
            }
            if (F)
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        null != p && (0, l.jsx)(f.Ay, { guild: p, size: f.Ay.Sizes.MINI }),
                        $.intl.string($.t.l8ufqL),
                    ],
                });
        }, [I?.currentPeriodEnd, p, A, _, F, N]),
        w =
            null != z
                ? (0, l.jsx)(t.E, { color: "text-default", variant: "body-sm/normal", className: q.BJ, children: z })
                : void 0;
    return (0, l.jsx)(x.OP, {
        title: a.summary,
        subtitle: w,
        maxBenefits: null != w ? x.GS - 1 : x.GS,
        description: a.description ?? void 0,
        imgSrc: G,
        onPurchase: U,
        renderPurchaseButton: D,
        benefitItems: null != C ? C.map((n) => (0, l.jsx)(x.FY, { description: n.title, icon: n.icon }, n.id)) : void 0,
        onDetails:
            null != u
                ? u
                : null != C
                  ? () => {
                        (0, v.openModalLazy)(async () => {
                            let { SubscriptionDetailsModal: n } = await Promise.all([
                                i.e("426782"),
                                i.e("406322"),
                                i.e("942571"),
                                i.e("817989"),
                                i.e("480830"),
                                i.e("564850"),
                            ]).then(i.bind(i, 168393));
                            return (i) =>
                                (0, l.jsx)(n, { appId: e, subscriptionType: d, skuId: a.skuId, guildId: r, ...i });
                        });
                    }
                  : void 0,
    });
}
function X(n) {
    let { skuId: e, appId: s, onDetails: t } = n,
        { analyticsLocations: r } = (0, k.Ay)(j.A.APP_STOREFRONT),
        a = (0, b.bG)([_.A], () => _.A.getForSKU(e), [e]),
        d = (0, b.bG)([M.A], () => M.A.get(e), [e]),
        u = (0, z.L)(e);
    if (null == d) return null;
    let o = d.name ?? "",
        c = a?.description?.trim() ?? void 0,
        m = a?.headerBackground != null ? (G.A.toURLSafe((0, F.YE)(s, a.headerBackground, 256)) ?? void 0) : void 0,
        p = d.type === K.Puh.DURABLE && u,
        x = d.type === K.Puh.DURABLE ? (p ? $.intl.string($.t.bm82mm) : $.intl.string($.t["6gprwf"])) : void 0,
        { price: g } = d;
    return null == g
        ? null
        : (0, l.jsx)(h, {
              title: o,
              description: c,
              headerImage: m,
              availabilityLabel: x,
              PurchaseButton: function (n) {
                  return null == d ? null : (0, l.jsx)(B.$P, { ...n, appId: s, sku: d });
              },
              onPurchase: function () {
                  null != d &&
                      (0, N.k)({
                          appId: s,
                          skuId: d.id,
                          analyticsLocations: r,
                          checkoutFlow: A.C.PREMIUM_APPS_OTP_CHECKOUT,
                      });
              },
              onDetails:
                  null != t
                      ? t
                      : (0, C.uJ)(c)
                        ? void 0
                        : () => {
                              (0, v.openModalLazy)(async () => {
                                  let { ItemDetailsModal: n } = await Promise.all([
                                      i.e("426782"),
                                      i.e("406322"),
                                      i.e("942571"),
                                      i.e("817989"),
                                      i.e("480830"),
                                      i.e("170104"),
                                  ]).then(i.bind(i, 963179));
                                  return (i) => (0, l.jsx)(n, { appId: s, skuId: e, ...i });
                              });
                          },
          });
}
