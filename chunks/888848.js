n.d(t, { A: () => M, G: () => D });
var i,
    s = n(627968),
    a = n(64700),
    l = n(273166),
    r = n(885996),
    o = n(311907),
    c = n(435371),
    d = n(397927),
    u = n(384904),
    _ = n(793574),
    m = n(688810),
    A = n(943775),
    g = n(123791),
    h = n(147441),
    x = n(627363),
    p = n(263063),
    E = n(543767),
    C = n(420139),
    T = n(272207),
    S = n(71393),
    I = n(97352),
    f = n(67480),
    N = n(328968),
    b = n(580630),
    j = n(163437),
    v = n(3432),
    O = n(572566),
    R = n(861621),
    y = n(652215),
    P = n(985018),
    L = n(509940),
    D = (((i = {})[(i.LOADING = 0)] = "LOADING"), (i[(i.DONE = 1)] = "DONE"), (i[(i.ERROR = 2)] = "ERROR"), i);
function M(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        r = t.metadata?.application_subscription_guild_id,
        { renewalMutations: c, planId: u } = t,
        {
            appId: g,
            plan: h,
            storeListing: C,
            isGuildSubscription: T,
            subscriptionForGuild: b,
            sku: v,
            isCancelled: R,
            renewalPlan: D,
        } = (0, o.cf)([I.A, f.A, N.A, S.A], () => {
            let e,
                n = I.A.get(u),
                i = null != n ? f.A.get(n.skuId) : void 0,
                s = i?.applicationId,
                a = null != n ? N.A.getForSKU(n.skuId) : null,
                l = null != a && (0, j.PJ)(a.skuFlags),
                o = l && null != r ? S.A.getGuild(r) : void 0,
                d = (0, j.Uo)(t, i);
            if (!1 === d && null != c && c.items.length > 0) {
                let t = c.items[0];
                e = I.A.get(t.planId) ?? void 0;
            }
            return {
                appId: s,
                isGuildSubscription: l,
                plan: n,
                sku: i,
                storeListing: a,
                subscriptionForGuild: o,
                isCancelled: d,
                renewalPlan: e,
            };
        }, [r, u, c, t]),
        { data: M } = (0, x.YY)(g),
        Y = a.useMemo(() => (null != M ? (0, A.A)(M, 100) : null), [M]),
        F = v?.deleted ?? !1,
        z = null != v && (0, j.Se)(v),
        W = t.status === y.Dmq.PAST_DUE,
        { analyticsLocations: K } = (0, m.Ay)(),
        [Z, q] = (0, E.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: _.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        X = q?.code === 100062 && null != r && null == b,
        Q = (0, O.Y)(t.currentPeriodEnd),
        J = 0 === i;
    return (0, s.jsxs)(l.q, {
        headerClassName: L.dL,
        header:
            !1 === J
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsxs)("div", {
                              className: L.VW,
                              children: [
                                  null != Y &&
                                      (0, s.jsx)(d._V3, { src: Y.href, imageClassName: L.Z2, width: 40, height: 40 }),
                                  (0, s.jsxs)("div", {
                                      className: L.aF,
                                      children: [
                                          (0, s.jsx)(d.Heading, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: M?.name ?? P.intl.string(P.t["7kqy7W"]),
                                          }),
                                          (0, s.jsx)(d.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: h?.name ?? P.intl.string(P.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: L.Pz,
                              children:
                                  null != M &&
                                  null != C &&
                                  null != v &&
                                  !1 === X &&
                                  (0, s.jsx)(H, {
                                      subscription: t,
                                      app: M,
                                      guild: b,
                                      sku: v,
                                      storeListing: C,
                                      isCancelled: R,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: D?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, s.jsx)(d.y$y, { type: d.tVU.PULSING_ELLIPSIS }),
        children: [
            R &&
                (0, s.jsx)(V, {
                    type: "warning",
                    title: z
                        ? P.intl.formatToPlainString(P.t.QOnM1y, { subscriptionPeriodEnd: Q })
                        : P.intl.formatToPlainString(P.t.HOaZu8, { subscriptionPeriodEnd: Q }),
                }),
            X &&
                (0, s.jsx)(V, {
                    type: "warning",
                    title: P.intl.formatToPlainString(P.t.HOaZu8, { subscriptionPeriodEnd: Q }),
                }),
            W && (0, s.jsx)(V, { type: "danger", title: P.intl.string(P.t.fvOqBo) }),
            (0, s.jsxs)("div", {
                className: L.zH,
                children: [
                    (0, s.jsx)(k, {
                        title: P.intl.string(P.t["5D/KEH"]),
                        content: T
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsxs)("span", {
                                          className: L.yW,
                                          children: [(0, s.jsx)(d.RR9, { size: "xs" }), P.intl.string(P.t.QjL3vn)],
                                      }),
                                      null != b &&
                                          (0, s.jsxs)("span", {
                                              className: L._t,
                                              children: [
                                                  (0, s.jsx)(d.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: P.intl.format(P.t["7ZD8p1"], { guildName: b.name }),
                                                  }),
                                                  (0, s.jsx)(p.Ay, { guild: b, size: p.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, s.jsxs)("span", {
                                  className: L.yW,
                                  children: [(0, s.jsx)(d.nys, { size: "xs" }), P.intl.string(P.t["6anEVv"])],
                              }),
                    }),
                    (0, s.jsx)(G, { invoicePreview: Z, subscriptionPlan: h }),
                    (0, s.jsx)(k, {
                        title: P.intl.string(P.t.dnUzb6),
                        content: (0, O.Y)(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, s.jsx)(U, { isCancelled: R, subscriptionPeriodEnd: Q, renewalPlan: D }),
                ],
            }),
            (0, s.jsx)(B, { subscription: t, currentInvoicePreview: Z, loadingState: i, isDeleted: F, isCancelled: R }),
            null != M &&
                C?.benefits != null &&
                C.benefits.length > 0 &&
                (0, s.jsx)(w, { appId: M.id, listingBenefits: C.benefits }),
        ],
    });
}
function G(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, s.jsx)(k, { title: P.intl.string(P.t.KI7ERx), content: "" });
    let i = (0, b.CE)((0, b.$g)(t.price, t.currency), t.interval, t.intervalCount),
        a = n?.findInvoiceItemByPlanId(t.id);
    if (null == a) return (0, s.jsx)(k, { title: P.intl.string(P.t.KI7ERx), content: i });
    let l = (0, b.CE)((0, b.$g)(a.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, s.jsx)(k, {
        title: P.intl.string(P.t.KI7ERx),
        content: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(d.Text, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, s.jsx)(c.m_, {
                        text: P.intl.format(P.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, s.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, s.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function U(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, b.CE)((0, b.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, s.jsx)(k, {
            title: P.intl.string(P.t.hIhAM3),
            content: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(d.Text, { variant: "text-sm/medium", children: n }),
                    (0, s.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: P.intl.format(P.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, s.jsx)(k, { title: t ? P.intl.string(P.t.enxcAl) : P.intl.string(P.t["Ms+6Zq"]), content: n });
}
function k(e) {
    let { title: t, content: n } = e;
    return (0, s.jsxs)("div", {
        className: L.nM,
        children: [
            (0, s.jsx)(d.Text, { variant: "text-sm/medium", children: t }),
            (0, s.jsx)(d.Text, { variant: "text-sm/medium", className: L.u4, children: n }),
        ],
    });
}
function V(e) {
    let { type: t, title: n } = e;
    return (0, s.jsx)(d.po8, {
        messageType: "warning" === t ? d.YCn.WARNING : d.YCn.ERROR,
        className: L.Xm,
        children: (0, s.jsx)(d.Text, { variant: "text-sm/normal", children: n }),
    });
}
function H(e) {
    let {
            app: t,
            storeListing: i,
            sku: l,
            subscription: r,
            isCancelled: c,
            guild: _,
            renewalSkuId: A,
            navigateToSwitchPlan: h,
        } = e,
        x = (0, j.Se)(l),
        { analyticsLocations: p } = (0, m.Ay)(),
        [E, C] = a.useState(!1),
        S = (0, g.C)(t.id),
        I = (0, o.bG)([f.A], () => f.A.getParentSKU(i.skuId), [i.skuId]),
        N = a.useMemo(() => (null == I ? [] : (0, R.l)(i.id, I, S.subscriptions)), [i.id, S, I]),
        b = 0 !== N.length,
        v = async () => {
            try {
                C(!0);
                let { subscription: e } = await (0, u.QP)(r, p);
                if (null == e) return;
                (0, d.mMO)(async () => {
                    let { default: t } = await n.e("52396").then(n.bind(n, 115623));
                    return (n) => (0, s.jsx)(t, { ...n, storeListing: i, subscription: T.A.createFromServer(e) });
                });
            } finally {
                C(!1);
            }
        };
    return (0, s.jsxs)("div", {
        className: L.fw,
        children: [
            x
                ? null
                : c
                  ? (0, s.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: P.intl.string(P.t.QtMnkW),
                        onClick: v,
                        loading: E,
                    })
                  : (0, s.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: P.intl.string(P.t["E8G/tr"]),
                        onClick: () => {
                            (0, d.mMO)(async () => {
                                let { default: e } = await n.e("33102").then(n.bind(n, 386077));
                                return (n) =>
                                    (0, s.jsx)(e, { ...n, application: t, storeListing: i, subscription: r, guild: _ });
                            });
                        },
                    }),
            b &&
                null != I &&
                !1 === c &&
                (0, s.jsx)(d.Button, {
                    variant: "primary",
                    size: "sm",
                    text: P.intl.string(P.t.R74ZBR),
                    onClick: () => {
                        h({
                            currentSubscription: r,
                            alternativeListings: N,
                            app: t,
                            subscriptionGroup: I,
                            currentListing: i,
                            renewalSkuId: A,
                        });
                    },
                }),
        ],
    });
}
function w(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, s.jsx)(h.A, {
        children: (e) =>
            (0, s.jsxs)("div", {
                className: L.PX,
                children: [
                    (0, s.jsxs)("div", {
                        className: L.wV,
                        children: [
                            e &&
                                (0, s.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    children: P.intl.string(P.t.mORL67),
                                }),
                            (0, s.jsx)(h.A.Toggle, {
                                className: L.Bh,
                                text: e ? P.intl.string(P.t.gsbFAw) : P.intl.string(P.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: a, icon: l } = e;
                              return (0, s.jsx)(r.FY, { header: i, icon: (0, v.N)(t, l), description: a }, n);
                          })
                        : null,
                ],
            }),
    });
}
function B(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: a, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, s.jsx)("div", {
                className: L.Ji,
                children: (0, s.jsx)(d.D0$, {
                    label: P.intl.string(P.t.azZaZa),
                    children: (0, s.jsx)(d.y$y, { type: d.tVU.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, s.jsx)("div", {
                  className: L.Ji,
                  children: (0, s.jsxs)(d.$Td, {
                      color: d.Hv$.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          P.intl.format(P.t.IIHUUF, { subscriptionId: t.id }),
                          (0, s.jsx)("br", {}),
                          P.intl.format(P.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, s.jsx)("div", {
                  className: L.Ji,
                  children: (0, s.jsx)(d.D0$, {
                      label: P.intl.string(P.t.azZaZa),
                      children: (0, s.jsx)(C.A, { subscription: t, currentInvoicePreview: n, disabled: a || l }),
                  }),
              });
}
