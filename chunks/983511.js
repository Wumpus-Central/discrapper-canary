var i = n(477900),
    l = n(582128),
    s = n(435558),
    r = n.n(s),
    a = n(855986),
    o = n(189213),
    u = n(224640),
    c = n(430993),
    d = n(696208),
    m = n(123292),
    g = n(289873),
    A = n(683071),
    E = n(559201),
    h = n(793574),
    f = n(688810),
    p = n(669815),
    S = n(531260),
    T = n(725836),
    x = n(169797),
    I = n(543767),
    _ = n(253390),
    b = n(735164),
    C = n(24659),
    y = n(178368),
    N = n(97352),
    v = n(166403),
    j = n(473145),
    O = n(448645),
    D = n(580630),
    P = n(682502),
    R = n(816571),
    L = n(682901),
    G = n(818348),
    M = n(792996),
    U = n(119757);
function V(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: l,
            onNext: s,
            onClose: r,
            transitionState: a,
        } = e,
        u = M.intl.format(M.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (u = M.intl.format(M.t.HbpFLg, {
              paymentGatewayName: G.qm[t.paymentGateway],
              subscriptionManagementLink: (0, O.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (u = M.intl.format(M.t.Hzqe6y, { expirationDate: n.endsAt.toDate() }))
          : l && (u = M.intl.format(M.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let c = l ? M.intl.string(M.t.iIoSd6) : M.intl.string(M.t.Skzv0u),
        d = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: M.intl.string(M.t["ETE/oC"]), onClick: r },
                  { variant: "primary", text: M.intl.string(M.t.PDTjLN), onClick: s },
              ];
    return (0, i.jsx)(o.a, {
        transitionState: a,
        onClose: r,
        size: "sm",
        title: c,
        actions: d,
        children: (0, i.jsx)("div", { className: U.rf, children: (0, i.jsx)("div", { children: u }) }),
    });
}
function w(e) {
    let {
            premiumSubscription: t,
            guildBoostSlotId: n,
            fractionalPremiumInfo: s,
            transitionState: o,
            onBack: S,
            onNext: v,
            onClose: P,
        } = e,
        [R, G] = l.useState(!1),
        [V, w] = l.useState(null),
        [k, F] = l.useMemo(() => {
            try {
                return [(0, _.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        B = l.useRef(P);
    (l.useEffect(() => {
        B.current = P;
    }),
        l.useEffect(() => {
            F && B.current();
        }, [F]));
    let { premiumSubscriptionPlan: H, premiumGuildPlan: z } = (0, a.cf)([N.A], () => {
            let e = N.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? N.A.getForSkuAndInterval((0, O.mH)(L.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: X } = (0, f.Ay)(),
        [Y] = (0, I.YV)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: X,
            analyticsLocation: h.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        W = null != z ? (0, O.Om)(t, k[0]?.quantity ?? 0, z.id) : null,
        [K] = (0, I.YV)({
            subscriptionId: t.id,
            items: W,
            renewal: !0,
            analyticsLocations: X,
            analyticsLocation: h.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        });
    if (null == K || null == H || null == z || null == Y)
        return (0, i.jsxs)(u.d, {
            transitionState: o,
            onClose: P,
            "aria-label": M.intl.string(M.t.CRwE7n),
            children: [
                (0, i.jsx)(T.e0, { children: (0, i.jsx)(x.s3, { title: M.intl.string(M.t.CRwE7n) }) }),
                (0, i.jsx)(c.c, { children: (0, i.jsx)("div", { className: U.Lq, children: (0, i.jsx)(g.y, {}) }) }),
            ],
        });
    let Z =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !L.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !L.pW.has(t);
            }) != null,
        q = k.some((e) => {
            let { planId: t } = e;
            return L.pW.has(t);
        }),
        Q = Z || q ? K.total - Y.total : -Y.total,
        { interval: $, intervalCount: J } = H,
        ee = M.intl.format(M.t["0W23cu"], { endDate: K.subscriptionPeriodStart });
    return (
        t.isPausedForFractionalPremium &&
            s.fetched &&
            (ee = M.intl.format(M.t.eb0xgS, { expirationDate: s.endsAt.toDate() })),
        (0, i.jsxs)(u.d, {
            transitionState: o,
            onClose: P,
            "aria-label": M.intl.string(M.t.CRwE7n),
            children: [
                (0, i.jsx)(T.e0, { children: (0, i.jsx)(x.s3, { title: M.intl.string(M.t.CRwE7n) }) }),
                (0, i.jsx)(c.c, {
                    children: (0, i.jsxs)("div", {
                        className: U.rf,
                        children: [
                            null !== V &&
                                (0, i.jsx)("div", {
                                    className: U.z3,
                                    children: (0, i.jsx)(A.w, { type: "critical", message: V, role: "alert" }),
                                }),
                            (0, i.jsx)("div", { children: ee }),
                            (0, i.jsxs)(b.Yx, {
                                className: U.S,
                                children: [
                                    (0, i.jsx)(b.Xd, { children: M.intl.string(M.t.iqhIp4) }),
                                    (0, i.jsx)(b.oR, {
                                        label: M.intl.format(M.t["Vg+LRr"], { subscriptionCount: 1 }),
                                        value: (0, D.CE)((0, D.$g)(Q, t.currency), $, J),
                                        className: U.Au,
                                    }),
                                    null != W && W.length > 0
                                        ? (0, i.jsxs)("div", {
                                              children: [
                                                  (0, i.jsx)(b.pK, {}),
                                                  (0, i.jsx)(C.Hc, { renewalInvoice: K, isUpdate: !0 }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(d.H, {
                    leading: (0, i.jsx)(m.Q, { text: M.intl.string(M.t["13/7kX"]), onClick: S, variant: "secondary" }),
                    actions: [
                        {
                            variant: "critical-primary",
                            text: M.intl.string(M.t["/AS/gM"]),
                            disabled: R,
                            loading: R,
                            onClick: async function () {
                                try {
                                    (G(!0),
                                        w(null),
                                        await (async function (e, t, n, i) {
                                            let l,
                                                s,
                                                a =
                                                    null != i
                                                        ? i
                                                        : ((l = Object.values(y.A.boostSlots)),
                                                          (s = r().sortBy(
                                                              l.filter((e) => !(0, j.I5)(e)),
                                                              (e) => [
                                                                  null != e.premiumGuildSubscription,
                                                                  null != e.cooldownEndsAt
                                                                      ? new Date(e.cooldownEndsAt)
                                                                      : null,
                                                              ],
                                                          )[0]),
                                                          null != s ? s.id : null);
                                            if (null == a) throw Error("No slot to cancel");
                                            let o = (0, O.aE)(e, t);
                                            (await (0, E.HJ)(a),
                                                await (0, p.nV)(
                                                    e,
                                                    { items: o },
                                                    { amount: 0, currency: e.currency },
                                                    (0, O.UC)(o, e.currency, e.paymentSourceId),
                                                    n,
                                                ));
                                        })(t, k, X, n),
                                        v());
                                } catch (e) {
                                    (w(M.intl.string(M.t["5mlOCW"])), G(!1));
                                }
                            },
                        },
                    ],
                }),
            ],
        })
    );
}
function k(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, onClose: l, transitionState: s } = e,
        r = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (r = n.endsAt.toDate());
    let a = [{ variant: "primary", text: M.intl.string(M.t.BddRzS), onClick: l }];
    return (0, i.jsx)(o.a, {
        transitionState: s,
        onClose: l,
        size: "sm",
        title: M.intl.string(M.t["fZzV/B"]),
        actions: a,
        children: (0, i.jsx)("div", {
            className: U.rf,
            children: (0, i.jsx)("div", { children: M.intl.format(M.t["H+z0ns"], { endDate: r }) }),
        }),
    });
}
function F(e) {
    let { step: t } = e;
    throw new P.f({ message: `Unexpected step: ${t}`, extraSentryInformation: { step: t } });
}
n.d(
    t,
    {},
    {
        default: function (e) {
            let t,
                { guildBoostSlot: n, transitionState: s, onClose: r } = e;
            l.useEffect(() => {
                v.A.hasFetchedSubscriptions() || (0, p.hP)();
            }, []);
            let o = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
                d = (0, S.A)(),
                [m, A] = l.useState(1),
                { analyticsLocations: E } = (0, f.Ay)(h.A.GUILD_BOOST_CANCELLATION_MODAL);
            if (null == o)
                t = (0, i.jsxs)(u.d, {
                    transitionState: s,
                    onClose: r,
                    "aria-label": M.intl.string(M.t.CRwE7n),
                    children: [
                        (0, i.jsx)(T.e0, { children: (0, i.jsx)(x.s3, { title: M.intl.string(M.t.CRwE7n) }) }),
                        (0, i.jsx)(c.c, {
                            children: (0, i.jsx)("div", { className: U.Lq, children: (0, i.jsx)(g.y, {}) }),
                        }),
                    ],
                });
            else
                switch (m) {
                    case 1:
                        t = (0, i.jsx)(V, {
                            premiumSubscription: o,
                            fractionalPremiumInfo: d,
                            isInventory: null == n.premiumGuildSubscription,
                            onNext: () => A(2),
                            onClose: r,
                            transitionState: s,
                        });
                        break;
                    case 2:
                        t = (0, i.jsx)(w, {
                            premiumSubscription: o,
                            guildBoostSlotId: n.id,
                            fractionalPremiumInfo: d,
                            transitionState: s,
                            onBack: () => A(1),
                            onNext: () => A(3),
                            onClose: r,
                        });
                        break;
                    case 3:
                        t = (0, i.jsx)(k, {
                            premiumSubscription: o,
                            fractionalPremiumInfo: d,
                            onClose: r,
                            transitionState: s,
                        });
                        break;
                    default:
                        t = (0, i.jsx)(F, { step: m });
                }
            return (0, i.jsx)(f.f5, {
                value: E,
                children: (0, i.jsx)(R.d, { errorHandlingBehavior: "close-and-alert", guildBoostSlot: n, children: t }),
            });
        },
    },
);
