n.d(t, {
    A: () => G,
    G: () => U,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(273166),
    s = n(885996),
    o = n(311907),
    l = n(435371),
    c = n(397927),
    u = n(384904),
    d = n(793574),
    f = n(688810),
    p = n(943775),
    _ = n(123791),
    h = n(147441),
    m = n(627363),
    g = n(263063),
    E = n(543767),
    b = n(420139),
    y = n(272207),
    O = n(71393),
    A = n(97352),
    v = n(67480),
    S = n(328968),
    I = n(580630),
    T = n(163437),
    C = n(3432),
    N = n(572566),
    R = n(861621),
    w = n(652215),
    P = n(985018),
    D = n(486526);

function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}

function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = "https://support.discord.com/hc/en-us";
var U = (function (e) {
    return (e[(e.LOADING = 0)] = "LOADING"), (e[(e.DONE = 1)] = "DONE"), (e[(e.ERROR = 2)] = "ERROR"), e;
})({});

function G(e) {
    var t, n, s, l, u;
    let { subscription: _, navigateToSwitchPlan: h, loadingState: b } = e,
        y = null == (u = _.metadata) ? void 0 : u.application_subscription_guild_id,
        { renewalMutations: I, planId: C } = _,
        {
            appId: R,
            plan: x,
            storeListing: L,
            isGuildSubscription: j,
            subscriptionForGuild: M,
            sku: k,
            isCancelled: U,
            renewalPlan: G,
        } = (0, o.cf)([A.A, v.A, S.A, O.A], () => {
            let e,
                t = A.A.get(C),
                n = null != t ? v.A.get(t.skuId) : void 0,
                r = null == n ? void 0 : n.applicationId,
                i = null != t ? S.A.getForSKU(t.skuId) : null,
                a = null != i && (0, T.PJ)(i.skuFlags),
                s = a && null != y ? O.A.getGuild(y) : void 0,
                o = (0, T.Uo)(_, n);
            if (!1 === o && null != I && I.items.length > 0) {
                var l;
                let t = I.items[0];
                e = null != (l = A.A.get(t.planId)) ? l : void 0;
            }
            return {
                appId: r,
                isGuildSubscription: a,
                plan: t,
                sku: n,
                storeListing: i,
                subscriptionForGuild: s,
                isCancelled: o,
                renewalPlan: e,
            };
        }, [y, C, I, _]),
        { data: z } = (0, m.YY)(R),
        q = i.useMemo(() => (null != z ? (0, p.A)(z, 100) : null), [z]),
        X = null != (t = null == k ? void 0 : k.deleted) && t,
        Z = null != k && (0, T.Se)(k),
        Q = _.status === w.Dmq.PAST_DUE,
        { analyticsLocations: $ } = (0, f.Ay)(),
        [J, ee] = (0, E.Kq)({
            subscriptionId: _.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: d.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        et = (null == ee ? void 0 : ee.code) === 100062 && null != y && null == M,
        en = (0, N.Y)(_.currentPeriodEnd),
        er = 0 === b;
    return (0, r.jsxs)(a.q, {
        headerClassName: D.dL,
        header:
            !1 === er
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: D.VW,
                              children: [
                                  null != q &&
                                      (0, r.jsx)(c._V3, {
                                          src: q.href,
                                          imageClassName: D.Z2,
                                          width: 40,
                                          height: 40,
                                      }),
                                  (0, r.jsxs)("div", {
                                      className: D.aF,
                                      children: [
                                          (0, r.jsx)(c.Heading, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children:
                                                  null != (n = null == z ? void 0 : z.name)
                                                      ? n
                                                      : P.intl.string(P.t["7kqy7W"]),
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children:
                                                  null != (s = null == x ? void 0 : x.name)
                                                      ? s
                                                      : P.intl.string(P.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: D.Pz,
                              children:
                                  null != z &&
                                  null != L &&
                                  null != k &&
                                  !1 === et &&
                                  (0, r.jsx)(Y, {
                                      subscription: _,
                                      app: z,
                                      guild: M,
                                      sku: k,
                                      storeListing: L,
                                      isCancelled: U,
                                      navigateToSwitchPlan: h,
                                      renewalSkuId: null == G ? void 0 : G.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, r.jsx)(c.y$y, {
                      type: c.tVU.PULSING_ELLIPSIS,
                  }),
        children: [
            U &&
                (0, r.jsx)(H, {
                    type: "warning",
                    title: Z
                        ? P.intl.formatToPlainString(P.t.QOnM1y, {
                              subscriptionPeriodEnd: en,
                          })
                        : P.intl.formatToPlainString(P.t.HOaZu8, {
                              subscriptionPeriodEnd: en,
                          }),
                }),
            et &&
                (0, r.jsx)(H, {
                    type: "warning",
                    title: P.intl.formatToPlainString(P.t.HOaZu8, {
                        subscriptionPeriodEnd: en,
                    }),
                }),
            Q &&
                (0, r.jsx)(H, {
                    type: "danger",
                    title: P.intl.string(P.t.fvOqBo),
                }),
            (0, r.jsxs)("div", {
                className: D.zH,
                children: [
                    (0, r.jsx)(B, {
                        title: P.intl.string(P.t["5D/KEH"]),
                        content: j
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)("span", {
                                          className: D.yW,
                                          children: [
                                              (0, r.jsx)(c.RR9, {
                                                  size: "xs",
                                              }),
                                              P.intl.string(P.t.QjL3vn),
                                          ],
                                      }),
                                      null != M &&
                                          (0, r.jsxs)("span", {
                                              className: D._t,
                                              children: [
                                                  (0, r.jsx)(c.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: P.intl.format(P.t["7ZD8p1"], {
                                                          guildName: M.name,
                                                      }),
                                                  }),
                                                  (0, r.jsx)(g.A, {
                                                      guild: M,
                                                      size: g.A.Sizes.MINI,
                                                  }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, r.jsxs)("span", {
                                  className: D.yW,
                                  children: [
                                      (0, r.jsx)(c.nys, {
                                          size: "xs",
                                      }),
                                      P.intl.string(P.t["6anEVv"]),
                                  ],
                              }),
                    }),
                    (0, r.jsx)(V, {
                        invoicePreview: J,
                        subscriptionPlan: x,
                    }),
                    (0, r.jsx)(B, {
                        title: P.intl.string(P.t.dnUzb6),
                        content: (0, N.Y)(null != (l = _.createdAt) ? l : _.currentPeriodStart),
                    }),
                    (0, r.jsx)(F, {
                        isCancelled: U,
                        subscriptionPeriodEnd: en,
                        renewalPlan: G,
                    }),
                ],
            }),
            (0, r.jsx)(K, {
                subscription: _,
                currentInvoicePreview: J,
                loadingState: b,
                isDeleted: X,
                isCancelled: U,
            }),
            null != z &&
                (null == L ? void 0 : L.benefits) != null &&
                L.benefits.length > 0 &&
                (0, r.jsx)(W, {
                    appId: z.id,
                    listingBenefits: L.benefits,
                }),
        ],
    });
}

function V(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t)
        return (0, r.jsx)(B, {
            title: P.intl.string(P.t.KI7ERx),
            content: "",
        });
    let i = (0, I.CE)((0, I.$g)(t.price, t.currency), t.interval, t.intervalCount),
        a = null == n ? void 0 : n.findInvoiceItemByPlanId(t.id);
    if (null == a)
        return (0, r.jsx)(B, {
            title: P.intl.string(P.t.KI7ERx),
            content: i,
        });
    let s = (0, I.CE)((0, I.$g)(a.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, r.jsx)(B, {
        title: P.intl.string(P.t.KI7ERx),
        content: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: s,
                }),
                s !== i &&
                    (0, r.jsx)(l.m_, {
                        text: P.intl.format(P.t["6DoE57"], {
                            listPrice: i,
                        }),
                        position: "bottom",
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, r.jsx)("s", {
                                children: i,
                            }),
                        }),
                    }),
            ],
        }),
    });
}

function F(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, I.CE)((0, I.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, r.jsx)(B, {
            title: P.intl.string(P.t.hIhAM3),
            content: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        children: n,
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        children: P.intl.format(P.t.MCLbvj, {
                            planName: i.name,
                            price: e,
                        }),
                    }),
                ],
            }),
        });
    }
    return (0, r.jsx)(B, {
        title: t ? P.intl.string(P.t.enxcAl) : P.intl.string(P.t["Ms+6Zq"]),
        content: n,
    });
}

function B(e) {
    let { title: t, content: n } = e;
    return (0, r.jsxs)("div", {
        className: D.nM,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                children: t,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                className: D.u4,
                children: n,
            }),
        ],
    });
}

function H(e) {
    let { type: t, title: n } = e,
        i = "warning" === t;
    return (0, r.jsx)(c.po8, {
        messageType: i ? c.YCn.WARNING : c.YCn.ERROR,
        className: D.Xm,
        children: (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: n,
        }),
    });
}

function Y(e) {
    let {
            app: t,
            storeListing: a,
            sku: s,
            subscription: l,
            isCancelled: d,
            guild: p,
            renewalSkuId: h,
            navigateToSwitchPlan: m,
        } = e,
        g = (0, T.Se)(s),
        { analyticsLocations: E } = (0, f.Ay)(),
        [b, O] = i.useState(!1),
        A = (0, _.C)(t.id),
        S = (0, o.bG)([v.A], () => v.A.getParentSKU(a.skuId), [a.skuId]),
        I = i.useMemo(() => (null == S ? [] : (0, R.l)(a.id, S, A.subscriptions)), [a.id, A, S]),
        C = 0 !== I.length,
        N = () => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("33102").then(n.bind(n, 386077));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        M(L({}, n), {
                            application: t,
                            storeListing: a,
                            subscription: l,
                            guild: p,
                        }),
                    );
            });
        },
        w = async () => {
            try {
                O(!0);
                let { subscription: e } = await (0, u.QP)(l, E);
                if (null == e) return;
                (0, c.mMO)(async () => {
                    let { default: t } = await n.e("52396").then(n.bind(n, 115623));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            M(L({}, n), {
                                storeListing: a,
                                subscription: y.A.createFromServer(e),
                            }),
                        );
                });
            } finally {
                O(!1);
            }
        };
    return (0, r.jsxs)("div", {
        className: D.fw,
        children: [
            g
                ? null
                : d
                  ? (0, r.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: P.intl.string(P.t.QtMnkW),
                        onClick: w,
                        loading: b,
                    })
                  : (0, r.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: P.intl.string(P.t["E8G/tr"]),
                        onClick: N,
                    }),
            C &&
                null != S &&
                !1 === d &&
                (0, r.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    text: P.intl.string(P.t.R74ZBR),
                    onClick: () => {
                        m({
                            currentSubscription: l,
                            alternativeListings: I,
                            app: t,
                            subscriptionGroup: S,
                            currentListing: a,
                            renewalSkuId: h,
                        });
                    },
                }),
        ],
    });
}

function W(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, r.jsx)(h.A, {
        children: (e) =>
            (0, r.jsxs)("div", {
                className: D.PX,
                children: [
                    (0, r.jsxs)("div", {
                        className: D.wV,
                        children: [
                            e &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    children: P.intl.string(P.t.mORL67),
                                }),
                            (0, r.jsx)(h.A.Toggle, {
                                className: D.Bh,
                                text: e ? P.intl.string(P.t.gsbFAw) : P.intl.string(P.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: a, icon: o } = e;
                              return (0, r.jsx)(
                                  s.FY,
                                  {
                                      header: i,
                                      icon: (0, C.N)(t, o),
                                      description: a,
                                  },
                                  n,
                              );
                          })
                        : null,
                ],
            }),
    });
}

function K(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: a, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, r.jsx)("div", {
                className: D.Ji,
                children: (0, r.jsx)(c.D0$, {
                    label: P.intl.string(P.t.azZaZa),
                    children: (0, r.jsx)(c.y$y, {
                        type: c.tVU.PULSING_ELLIPSIS,
                    }),
                }),
            })
          : 2 === i
            ? (0, r.jsx)("div", {
                  className: D.Ji,
                  children: (0, r.jsxs)(c.$Td, {
                      color: c.Hv$.DANGER,
                      style: {
                          borderRadius: 0,
                      },
                      children: [
                          P.intl.format(P.t.IIHUUF, {
                              subscriptionId: t.id,
                          }),
                          (0, r.jsx)("br", {}),
                          P.intl.format(P.t.fh65ES, {
                              helpLink: k,
                          }),
                      ],
                  }),
              })
            : (0, r.jsx)("div", {
                  className: D.Ji,
                  children: (0, r.jsx)(c.D0$, {
                      label: P.intl.string(P.t.azZaZa),
                      children: (0, r.jsx)(b.A, {
                          subscription: t,
                          currentInvoicePreview: n,
                          disabled: a || s,
                      }),
                  }),
              });
}
