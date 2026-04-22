n.d(t, { A: () => Y, G: () => H });
var i,
    s = n(627968),
    l = n(64700),
    a = n(273166),
    r = n(885996),
    o = n(311907),
    d = n(990078),
    u = n(673698),
    c = n(534514),
    g = n(834730),
    m = n(289873),
    _ = n(664121),
    A = n(950305),
    h = n(512950),
    p = n(192308),
    x = n(821609),
    E = n(452027),
    T = n(417098),
    S = n(793574),
    f = n(688810),
    b = n(943775),
    C = n(123791),
    v = n(147441),
    N = n(627363),
    I = n(323082),
    y = n(263063),
    j = n(543767),
    O = n(420139),
    R = n(272207),
    L = n(71393),
    D = n(97352),
    P = n(67480),
    G = n(328968),
    M = n(580630),
    U = n(163437),
    k = n(3432),
    w = n(572566),
    V = n(861621),
    B = n(652215),
    F = n(985018),
    z = n(184451),
    H = (((i = {})[(i.LOADING = 0)] = "LOADING"), (i[(i.DONE = 1)] = "DONE"), (i[(i.ERROR = 2)] = "ERROR"), i);
function Y(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        r = t.metadata?.application_subscription_guild_id,
        { renewalMutations: d, planId: h } = t,
        {
            appId: p,
            plan: x,
            storeListing: E,
            isGuildSubscription: T,
            subscriptionForGuild: C,
            sku: v,
            isCancelled: I,
            isOrphanedGuildSubscription: O,
            renewalPlan: R,
        } = (0, o.cf)([D.A, P.A, G.A, L.A], () => {
            let e,
                n = D.A.get(h),
                i = null != n ? P.A.get(n.skuId) : void 0,
                s = i?.applicationId,
                l = null != n ? G.A.getForSKU(n.skuId) : null,
                a = null != l && (0, U.PJ)(l.skuFlags),
                o = a && null != r ? L.A.getGuild(r) : void 0,
                u = (0, U.Uo)(t, i),
                c = a && null != r && null == o;
            if (!1 === u && null != d && d.items.length > 0) {
                let t = d.items[0];
                e = D.A.get(t.planId) ?? void 0;
            }
            return {
                appId: s,
                isGuildSubscription: a,
                isOrphanedGuildSubscription: c,
                plan: n,
                sku: i,
                storeListing: l,
                subscriptionForGuild: o,
                isCancelled: u,
                renewalPlan: e,
            };
        }, [r, h, d, t]),
        { data: M } = (0, N.YY)(p),
        k = l.useMemo(() => (null != M ? (0, b.A)(M, 100) : null), [M]),
        V = v?.deleted ?? !1,
        H = null != v && (0, U.Se)(v),
        Y = t.status === B.Dmq.PAST_DUE,
        { analyticsLocations: $ } = (0, f.Ay)(),
        [ee] = (0, j.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: S.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        et = (0, w.Y)(t.currentPeriodEnd),
        en = 0 === i;
    return (0, s.jsxs)(a.q, {
        headerClassName: z.dL,
        header:
            !1 === en
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsxs)("div", {
                              className: z.VW,
                              children: [
                                  null != k &&
                                      (0, s.jsx)(u._, { src: k.href, imageClassName: z.Z2, width: 40, height: 40 }),
                                  (0, s.jsxs)("div", {
                                      className: z.aF,
                                      children: [
                                          (0, s.jsx)(c.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: M?.name ?? F.intl.string(F.t["7kqy7W"]),
                                          }),
                                          (0, s.jsx)(g.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: x?.name ?? F.intl.string(F.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: z.Pz,
                              children:
                                  null != M &&
                                  null != E &&
                                  null != v &&
                                  (0, s.jsx)(q, {
                                      subscription: t,
                                      app: M,
                                      guild: C,
                                      sku: v,
                                      storeListing: E,
                                      isCancelled: I,
                                      isOrphanedGuildSubscription: O,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: R?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, s.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
        children: [
            I &&
                (0, s.jsx)(Z, {
                    type: "warning",
                    title: H
                        ? F.intl.formatToPlainString(F.t.QOnM1y, { subscriptionPeriodEnd: et })
                        : F.intl.formatToPlainString(F.t.HOaZu8, { subscriptionPeriodEnd: et }),
                }),
            !I && O && (0, s.jsx)(Z, { type: "warning", title: F.intl.string(F.t.SmSP8Q) }),
            Y && (0, s.jsx)(Z, { type: "danger", title: F.intl.string(F.t.fvOqBo) }),
            (0, s.jsxs)("div", {
                className: z.zH,
                children: [
                    (0, s.jsx)(W, {
                        title: F.intl.string(F.t["5D/KEH"]),
                        content: T
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsxs)("span", {
                                          className: z.yW,
                                          children: [(0, s.jsx)(_.R, { size: "xs" }), F.intl.string(F.t.QjL3vn)],
                                      }),
                                      null != C &&
                                          (0, s.jsxs)("span", {
                                              className: z._t,
                                              children: [
                                                  (0, s.jsx)(g.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: F.intl.format(F.t["7ZD8p1"], { guildName: C.name }),
                                                  }),
                                                  (0, s.jsx)(y.Ay, { guild: C, size: y.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, s.jsxs)("span", {
                                  className: z.yW,
                                  children: [(0, s.jsx)(A.n, { size: "xs" }), F.intl.string(F.t["6anEVv"])],
                              }),
                    }),
                    (0, s.jsx)(X, { invoicePreview: ee, subscriptionPlan: x }),
                    (0, s.jsx)(W, {
                        title: F.intl.string(F.t.dnUzb6),
                        content: (0, w.Y)(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, s.jsx)(K, { isCancelled: I, subscriptionPeriodEnd: et, renewalPlan: R }),
                ],
            }),
            (0, s.jsx)(J, {
                subscription: t,
                currentInvoicePreview: ee,
                loadingState: i,
                isDeleted: V,
                isCancelled: I,
            }),
            null != M &&
                E?.benefits != null &&
                E.benefits.length > 0 &&
                (0, s.jsx)(Q, { appId: M.id, listingBenefits: E.benefits }),
        ],
    });
}
function X(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, s.jsx)(W, { title: F.intl.string(F.t.KI7ERx), content: "" });
    let i = (0, M.CE)((0, M.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, s.jsx)(W, { title: F.intl.string(F.t.KI7ERx), content: i });
    let a = (0, M.CE)((0, M.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, s.jsx)(W, {
        title: F.intl.string(F.t.KI7ERx),
        content: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(g.E, { variant: "text-sm/semibold", children: a }),
                a !== i &&
                    (0, s.jsx)(d.m, {
                        text: F.intl.format(F.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, s.jsx)(g.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, s.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function K(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, M.CE)((0, M.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, s.jsx)(W, {
            title: F.intl.string(F.t.hIhAM3),
            content: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(g.E, { variant: "text-sm/medium", children: n }),
                    (0, s.jsx)(g.E, {
                        variant: "text-sm/normal",
                        children: F.intl.format(F.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, s.jsx)(W, { title: t ? F.intl.string(F.t.enxcAl) : F.intl.string(F.t["Ms+6Zq"]), content: n });
}
function W(e) {
    let { title: t, content: n } = e;
    return (0, s.jsxs)("div", {
        className: z.nM,
        children: [
            (0, s.jsx)(g.E, { variant: "text-sm/medium", children: t }),
            (0, s.jsx)(g.E, { variant: "text-sm/medium", className: z.u4, children: n }),
        ],
    });
}
function Z(e) {
    let { type: t, title: n } = e;
    return (0, s.jsx)(h.p, {
        messageType: "warning" === t ? h.Y.WARNING : h.Y.ERROR,
        className: z.Xm,
        children: (0, s.jsx)(g.E, { variant: "text-sm/normal", children: n }),
    });
}
function q(e) {
    let {
            app: t,
            storeListing: i,
            sku: a,
            subscription: r,
            isCancelled: d,
            isOrphanedGuildSubscription: u,
            guild: c,
            renewalSkuId: g,
            navigateToSwitchPlan: m,
        } = e,
        _ = (0, U.Se)(a),
        { analyticsLocations: A } = (0, f.Ay)(),
        [h, E] = l.useState(!1),
        T = (0, C.C)(t.id),
        S = (0, o.bG)([P.A], () => P.A.getParentSKU(i.skuId), [i.skuId]),
        b = l.useMemo(() => (null == S ? [] : (0, V.l)(i.id, S, T.subscriptions)), [i.id, T, S]),
        v = 0 !== b.length,
        N = async () => {
            try {
                E(!0);
                let { subscription: e } = await (0, I.QP)(r, A);
                if (null == e) return;
                (0, p.openModalLazy)(async () => {
                    let { default: t } = await n.e("52396").then(n.bind(n, 115623));
                    return (n) => (0, s.jsx)(t, { ...n, storeListing: i, subscription: R.A.createFromServer(e) });
                });
            } finally {
                E(!1);
            }
        };
    return (0, s.jsxs)("div", {
        className: z.fw,
        children: [
            _ || (d && u)
                ? null
                : d
                  ? (0, s.jsx)(x.$, {
                        variant: "secondary",
                        size: "sm",
                        text: F.intl.string(F.t.QtMnkW),
                        onClick: N,
                        loading: h,
                    })
                  : (0, s.jsx)(x.$, {
                        variant: "secondary",
                        size: "sm",
                        text: F.intl.string(F.t["E8G/tr"]),
                        onClick: () => {
                            (0, p.openModalLazy)(async () => {
                                let { default: e } = await n.e("33102").then(n.bind(n, 386077));
                                return (n) =>
                                    (0, s.jsx)(e, { ...n, application: t, storeListing: i, subscription: r, guild: c });
                            });
                        },
                    }),
            v &&
                null != S &&
                !1 === d &&
                !1 === u &&
                (0, s.jsx)(x.$, {
                    variant: "primary",
                    size: "sm",
                    text: F.intl.string(F.t.R74ZBR),
                    onClick: () => {
                        m({
                            currentSubscription: r,
                            alternativeListings: b,
                            app: t,
                            subscriptionGroup: S,
                            currentListing: i,
                            renewalSkuId: g,
                        });
                    },
                }),
        ],
    });
}
function Q(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, s.jsx)(v.A, {
        children: (e) =>
            (0, s.jsxs)("div", {
                className: z.PX,
                children: [
                    (0, s.jsxs)("div", {
                        className: z.wV,
                        children: [
                            e && (0, s.jsx)(g.E, { variant: "text-sm/semibold", children: F.intl.string(F.t.mORL67) }),
                            (0, s.jsx)(v.A.Toggle, {
                                className: z.Bh,
                                text: e ? F.intl.string(F.t.gsbFAw) : F.intl.string(F.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: a } = e;
                              return (0, s.jsx)(r.FY, { header: i, icon: (0, k.N)(t, a), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function J(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: a } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, s.jsx)("div", {
                className: z.Ji,
                children: (0, s.jsx)(E.D, {
                    label: F.intl.string(F.t.azZaZa),
                    children: (0, s.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, s.jsx)("div", {
                  className: z.Ji,
                  children: (0, s.jsxs)(T.$T, {
                      color: T.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          F.intl.format(F.t.IIHUUF, { subscriptionId: t.id }),
                          (0, s.jsx)("br", {}),
                          F.intl.format(F.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, s.jsx)("div", {
                  className: z.Ji,
                  children: (0, s.jsx)(E.D, {
                      label: F.intl.string(F.t.azZaZa),
                      children: (0, s.jsx)(O.A, { subscription: t, currentInvoicePreview: n, disabled: l || a }),
                  }),
              });
}
