n.d(t, { default: () => z });
var i = n(477900),
    l = n(582128),
    s = n(435558),
    r = n.n(s),
    a = n(17928),
    o = n(189213),
    u = n(224640),
    d = n(430993),
    c = n(696208),
    g = n(123292),
    m = n(289873),
    A = n(683071),
    E = n(820739),
    h = n(793574),
    S = n(688810),
    x = n(277984),
    T = n(531260),
    p = n(725836),
    f = n(169797),
    _ = n(543767),
    I = n(253390),
    N = n(735164),
    C = n(264725),
    b = n(178368),
    y = n(97352),
    v = n(166403),
    j = n(473145),
    O = n(24482),
    L = n(580630),
    R = n(682502),
    D = n(816571),
    P = n(202541),
    G = n(818348),
    M = n(105292),
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
    let d = l ? M.intl.string(M.t.iIoSd6) : M.intl.string(M.t.Skzv0u),
        c = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: M.intl.string(M.t["ETE/oC"]), onClick: r },
                  { variant: "primary", text: M.intl.string(M.t.PDTjLN), onClick: s },
              ];
    return (0, i.jsx)(o.a, {
        transitionState: a,
        onClose: r,
        size: "sm",
        title: d,
        actions: c,
        children: (0, i.jsx)("div", { className: U.rf, children: (0, i.jsx)("div", { children: u }) }),
    });
}
async function k(e, t, n, i) {
    let l,
        s,
        a =
            null != i
                ? i
                : ((l = Object.values(b.A.boostSlots)),
                  null !=
                  (s = r().sortBy(
                      l.filter((e) => !(0, j.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? s.id
                      : null);
    if (null == a) throw Error("No slot to cancel");
    let o = (0, O.aE)(e, t);
    (await (0, E.HJ)(a),
        await (0, x.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, O.UC)(o, e.currency, e.paymentSourceId),
            n,
        ));
}
function w(e) {
    let {
            premiumSubscription: t,
            guildBoostSlotId: n,
            fractionalPremiumInfo: s,
            transitionState: r,
            onBack: o,
            onNext: E,
            onClose: x,
        } = e,
        [T, b] = l.useState(!1),
        [v, j] = l.useState(null),
        [R, D] = l.useMemo(() => {
            try {
                return [(0, I.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        G = l.useRef(x);
    (l.useEffect(() => {
        G.current = x;
    }),
        l.useEffect(() => {
            D && G.current();
        }, [D]));
    let { premiumSubscriptionPlan: V, premiumGuildPlan: w } = (0, a.cf)([y.A], () => {
            let e = y.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? y.A.getForSkuAndInterval((0, O.mH)(P.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: F } = (0, S.Ay)(),
        [B] = (0, _.YV)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: F,
            analyticsLocation: h.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        z = null != w ? (0, O.Om)(t, R[0]?.quantity ?? 0, w.id) : null,
        [X] = (0, _.YV)({
            subscriptionId: t.id,
            items: z,
            renewal: !0,
            analyticsLocations: F,
            analyticsLocation: h.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        });
    if (null == X || null == V || null == w || null == B)
        return (0, i.jsxs)(u.d, {
            transitionState: r,
            onClose: x,
            "aria-label": M.intl.string(M.t.CRwE7n),
            children: [
                (0, i.jsx)(p.e0, { children: (0, i.jsx)(f.s3, { title: M.intl.string(M.t.CRwE7n) }) }),
                (0, i.jsx)(d.c, { children: (0, i.jsx)("div", { className: U.Lq, children: (0, i.jsx)(m.y, {}) }) }),
            ],
        });
    let Y =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !P.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !P.pW.has(t);
            }) != null,
        H = R.some((e) => {
            let { planId: t } = e;
            return P.pW.has(t);
        }),
        W = Y || H ? X.total - B.total : -B.total,
        { interval: K, intervalCount: Z } = V,
        q = M.intl.format(M.t["0W23cu"], { endDate: X.subscriptionPeriodStart });
    async function Q() {
        try {
            (b(!0), j(null), await k(t, R, F, n), E());
        } catch (e) {
            (j(M.intl.string(M.t["5mlOCW"])), b(!1));
        }
    }
    return (
        t.isPausedForFractionalPremium &&
            s.fetched &&
            (q = M.intl.format(M.t.eb0xgS, { expirationDate: s.endsAt.toDate() })),
        (0, i.jsxs)(u.d, {
            transitionState: r,
            onClose: x,
            "aria-label": M.intl.string(M.t.CRwE7n),
            children: [
                (0, i.jsx)(p.e0, { children: (0, i.jsx)(f.s3, { title: M.intl.string(M.t.CRwE7n) }) }),
                (0, i.jsx)(d.c, {
                    children: (0, i.jsxs)("div", {
                        className: U.rf,
                        children: [
                            null !== v &&
                                (0, i.jsx)("div", {
                                    className: U.z3,
                                    children: (0, i.jsx)(A.w, { type: "critical", message: v, role: "alert" }),
                                }),
                            (0, i.jsx)("div", { children: q }),
                            (0, i.jsxs)(N.Yx, {
                                className: U.S,
                                children: [
                                    (0, i.jsx)(N.Xd, { children: M.intl.string(M.t.iqhIp4) }),
                                    (0, i.jsx)(N.oR, {
                                        label: M.intl.format(M.t["Vg+LRr"], { subscriptionCount: 1 }),
                                        value: (0, L.CE)((0, L.$g)(W, t.currency), K, Z),
                                        className: U.Au,
                                    }),
                                    null != z && z.length > 0
                                        ? (0, i.jsxs)("div", {
                                              children: [
                                                  (0, i.jsx)(N.pK, {}),
                                                  (0, i.jsx)(C.Hc, { renewalInvoice: X, isUpdate: !0 }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(c.H, {
                    leading: (0, i.jsx)(g.Q, { text: M.intl.string(M.t["13/7kX"]), onClick: o, variant: "secondary" }),
                    actions: [
                        {
                            variant: "critical-primary",
                            text: M.intl.string(M.t["/AS/gM"]),
                            disabled: T,
                            loading: T,
                            onClick: Q,
                        },
                    ],
                }),
            ],
        })
    );
}
function F(e) {
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
function B(e) {
    let { step: t } = e;
    throw new R.f({ message: `Unexpected step: ${t}`, extraSentryInformation: { step: t } });
}
function z(e) {
    let t,
        { guildBoostSlot: n, transitionState: s, onClose: r } = e;
    l.useEffect(() => {
        v.A.hasFetchedSubscriptions() || (0, x.hP)();
    }, []);
    let o = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        c = (0, T.A)(),
        [g, A] = l.useState(1),
        { analyticsLocations: E } = (0, S.Ay)(h.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == o)
        t = (0, i.jsxs)(u.d, {
            transitionState: s,
            onClose: r,
            "aria-label": M.intl.string(M.t.CRwE7n),
            children: [
                (0, i.jsx)(p.e0, { children: (0, i.jsx)(f.s3, { title: M.intl.string(M.t.CRwE7n) }) }),
                (0, i.jsx)(d.c, { children: (0, i.jsx)("div", { className: U.Lq, children: (0, i.jsx)(m.y, {}) }) }),
            ],
        });
    else
        switch (g) {
            case 1:
                t = (0, i.jsx)(V, {
                    premiumSubscription: o,
                    fractionalPremiumInfo: c,
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
                    fractionalPremiumInfo: c,
                    transitionState: s,
                    onBack: () => A(1),
                    onNext: () => A(3),
                    onClose: r,
                });
                break;
            case 3:
                t = (0, i.jsx)(F, { premiumSubscription: o, fractionalPremiumInfo: c, onClose: r, transitionState: s });
                break;
            default:
                t = (0, i.jsx)(B, { step: g });
        }
    return (0, i.jsx)(S.f5, {
        value: E,
        children: (0, i.jsx)(D.d, { errorHandlingBehavior: "close-and-alert", guildBoostSlot: n, children: t }),
    });
}
