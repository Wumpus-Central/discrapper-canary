n.d(t, { A: () => M, G: () => D });
var i,
    s = n(627968),
    r = n(64700),
    a = n(273166),
    l = n(885996),
    o = n(311907),
    c = n(435371),
    d = n(397927),
    u = n(384904),
    _ = n(793574),
    m = n(688810),
    A = n(943775),
    g = n(123791),
    E = n(147441),
    h = n(627363),
    p = n(263063),
    C = n(543767),
    x = n(420139),
    T = n(272207),
    I = n(71393),
    S = n(97352),
    f = n(67480),
    N = n(328968),
    b = n(580630),
    R = n(163437),
    v = n(3432),
    O = n(572566),
    j = n(861621),
    P = n(652215),
    y = n(985018),
    L = n(486526),
    D = (((i = {})[(i.LOADING = 0)] = "LOADING"), (i[(i.DONE = 1)] = "DONE"), (i[(i.ERROR = 2)] = "ERROR"), i);
function M(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        l = t.metadata?.application_subscription_guild_id,
        { renewalMutations: c, planId: u } = t,
        {
            appId: g,
            plan: E,
            storeListing: x,
            isGuildSubscription: T,
            subscriptionForGuild: b,
            sku: v,
            isCancelled: j,
            renewalPlan: D,
        } = (0, o.cf)([S.A, f.A, N.A, I.A], () => {
            let e,
                n = S.A.get(u),
                i = null != n ? f.A.get(n.skuId) : void 0,
                s = i?.applicationId,
                r = null != n ? N.A.getForSKU(n.skuId) : null,
                a = null != r && (0, R.PJ)(r.skuFlags),
                o = a && null != l ? I.A.getGuild(l) : void 0,
                d = (0, R.Uo)(t, i);
            if (!1 === d && null != c && c.items.length > 0) {
                let t = c.items[0];
                e = S.A.get(t.planId) ?? void 0;
            }
            return {
                appId: s,
                isGuildSubscription: a,
                plan: n,
                sku: i,
                storeListing: r,
                subscriptionForGuild: o,
                isCancelled: d,
                renewalPlan: e,
            };
        }, [l, u, c, t]),
        { data: M } = (0, h.YY)(g),
        F = r.useMemo(() => (null != M ? (0, A.A)(M, 100) : null), [M]),
        Y = v?.deleted ?? !1,
        W = null != v && (0, R.Se)(v),
        z = t.status === P.Dmq.PAST_DUE,
        { analyticsLocations: K } = (0, m.Ay)(),
        [Z, X] = (0, C.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: _.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        q = X?.code === 100062 && null != l && null == b,
        J = (0, O.Y)(t.currentPeriodEnd),
        Q = 0 === i;
    return (0, s.jsxs)(a.q, {
        headerClassName: L.dL,
        header:
            !1 === Q
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsxs)("div", {
                              className: L.VW,
                              children: [
                                  null != F &&
                                      (0, s.jsx)(d._V3, { src: F.href, imageClassName: L.Z2, width: 40, height: 40 }),
                                  (0, s.jsxs)("div", {
                                      className: L.aF,
                                      children: [
                                          (0, s.jsx)(d.Heading, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: M?.name ?? y.intl.string(y.t["7kqy7W"]),
                                          }),
                                          (0, s.jsx)(d.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: E?.name ?? y.intl.string(y.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: L.Pz,
                              children:
                                  null != M &&
                                  null != x &&
                                  null != v &&
                                  !1 === q &&
                                  (0, s.jsx)(w, {
                                      subscription: t,
                                      app: M,
                                      guild: b,
                                      sku: v,
                                      storeListing: x,
                                      isCancelled: j,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: D?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, s.jsx)(d.y$y, { type: d.tVU.PULSING_ELLIPSIS }),
        children: [
            j &&
                (0, s.jsx)(B, {
                    type: "warning",
                    title: W
                        ? y.intl.formatToPlainString(y.t.QOnM1y, { subscriptionPeriodEnd: J })
                        : y.intl.formatToPlainString(y.t.HOaZu8, { subscriptionPeriodEnd: J }),
                }),
            q &&
                (0, s.jsx)(B, {
                    type: "warning",
                    title: y.intl.formatToPlainString(y.t.HOaZu8, { subscriptionPeriodEnd: J }),
                }),
            z && (0, s.jsx)(B, { type: "danger", title: y.intl.string(y.t.fvOqBo) }),
            (0, s.jsxs)("div", {
                className: L.zH,
                children: [
                    (0, s.jsx)(k, {
                        title: y.intl.string(y.t["5D/KEH"]),
                        content: T
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsxs)("span", {
                                          className: L.yW,
                                          children: [(0, s.jsx)(d.RR9, { size: "xs" }), y.intl.string(y.t.QjL3vn)],
                                      }),
                                      null != b &&
                                          (0, s.jsxs)("span", {
                                              className: L._t,
                                              children: [
                                                  (0, s.jsx)(d.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: y.intl.format(y.t["7ZD8p1"], { guildName: b.name }),
                                                  }),
                                                  (0, s.jsx)(p.A, { guild: b, size: p.A.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, s.jsxs)("span", {
                                  className: L.yW,
                                  children: [(0, s.jsx)(d.nys, { size: "xs" }), y.intl.string(y.t["6anEVv"])],
                              }),
                    }),
                    (0, s.jsx)(G, { invoicePreview: Z, subscriptionPlan: E }),
                    (0, s.jsx)(k, {
                        title: y.intl.string(y.t.dnUzb6),
                        content: (0, O.Y)(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, s.jsx)(U, { isCancelled: j, subscriptionPeriodEnd: J, renewalPlan: D }),
                ],
            }),
            (0, s.jsx)(V, { subscription: t, currentInvoicePreview: Z, loadingState: i, isDeleted: Y, isCancelled: j }),
            null != M &&
                x?.benefits != null &&
                x.benefits.length > 0 &&
                (0, s.jsx)(H, { appId: M.id, listingBenefits: x.benefits }),
        ],
    });
}
function G(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, s.jsx)(k, { title: y.intl.string(y.t.KI7ERx), content: "" });
    let i = (0, b.CE)((0, b.$g)(t.price, t.currency), t.interval, t.intervalCount),
        r = n?.findInvoiceItemByPlanId(t.id);
    if (null == r) return (0, s.jsx)(k, { title: y.intl.string(y.t.KI7ERx), content: i });
    let a = (0, b.CE)((0, b.$g)(r.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, s.jsx)(k, {
        title: y.intl.string(y.t.KI7ERx),
        content: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(d.Text, { variant: "text-sm/semibold", children: a }),
                a !== i &&
                    (0, s.jsx)(c.m_, {
                        text: y.intl.format(y.t["6DoE57"], { listPrice: i }),
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
            title: y.intl.string(y.t.hIhAM3),
            content: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(d.Text, { variant: "text-sm/medium", children: n }),
                    (0, s.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: y.intl.format(y.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, s.jsx)(k, { title: t ? y.intl.string(y.t.enxcAl) : y.intl.string(y.t["Ms+6Zq"]), content: n });
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
function B(e) {
    let { type: t, title: n } = e;
    return (0, s.jsx)(d.po8, {
        messageType: "warning" === t ? d.YCn.WARNING : d.YCn.ERROR,
        className: L.Xm,
        children: (0, s.jsx)(d.Text, { variant: "text-sm/normal", children: n }),
    });
}
function w(e) {
    let {
            app: t,
            storeListing: i,
            sku: a,
            subscription: l,
            isCancelled: c,
            guild: _,
            renewalSkuId: A,
            navigateToSwitchPlan: E,
        } = e,
        h = (0, R.Se)(a),
        { analyticsLocations: p } = (0, m.Ay)(),
        [C, x] = r.useState(!1),
        I = (0, g.C)(t.id),
        S = (0, o.bG)([f.A], () => f.A.getParentSKU(i.skuId), [i.skuId]),
        N = r.useMemo(() => (null == S ? [] : (0, j.l)(i.id, S, I.subscriptions)), [i.id, I, S]),
        b = 0 !== N.length,
        v = async () => {
            try {
                x(!0);
                let { subscription: e } = await (0, u.QP)(l, p);
                if (null == e) return;
                (0, d.mMO)(async () => {
                    let { default: t } = await n.e("52396").then(n.bind(n, 115623));
                    return (n) => (0, s.jsx)(t, { ...n, storeListing: i, subscription: T.A.createFromServer(e) });
                });
            } finally {
                x(!1);
            }
        };
    return (0, s.jsxs)("div", {
        className: L.fw,
        children: [
            h
                ? null
                : c
                  ? (0, s.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: y.intl.string(y.t.QtMnkW),
                        onClick: v,
                        loading: C,
                    })
                  : (0, s.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: y.intl.string(y.t["E8G/tr"]),
                        onClick: () => {
                            (0, d.mMO)(async () => {
                                let { default: e } = await n.e("33102").then(n.bind(n, 386077));
                                return (n) =>
                                    (0, s.jsx)(e, { ...n, application: t, storeListing: i, subscription: l, guild: _ });
                            });
                        },
                    }),
            b &&
                null != S &&
                !1 === c &&
                (0, s.jsx)(d.Button, {
                    variant: "primary",
                    size: "sm",
                    text: y.intl.string(y.t.R74ZBR),
                    onClick: () => {
                        E({
                            currentSubscription: l,
                            alternativeListings: N,
                            app: t,
                            subscriptionGroup: S,
                            currentListing: i,
                            renewalSkuId: A,
                        });
                    },
                }),
        ],
    });
}
function H(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, s.jsx)(E.A, {
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
                                    children: y.intl.string(y.t.mORL67),
                                }),
                            (0, s.jsx)(E.A.Toggle, {
                                className: L.Bh,
                                text: e ? y.intl.string(y.t.gsbFAw) : y.intl.string(y.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: r, icon: a } = e;
                              return (0, s.jsx)(l.FY, { header: i, icon: (0, v.N)(t, a), description: r }, n);
                          })
                        : null,
                ],
            }),
    });
}
function V(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: r, isCancelled: a } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, s.jsx)("div", {
                className: L.Ji,
                children: (0, s.jsx)(d.D0$, {
                    label: y.intl.string(y.t.azZaZa),
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
                          y.intl.format(y.t.IIHUUF, { subscriptionId: t.id }),
                          (0, s.jsx)("br", {}),
                          y.intl.format(y.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, s.jsx)("div", {
                  className: L.Ji,
                  children: (0, s.jsx)(d.D0$, {
                      label: y.intl.string(y.t.azZaZa),
                      children: (0, s.jsx)(x.A, { subscription: t, currentInvoicePreview: n, disabled: r || a }),
                  }),
              });
}
