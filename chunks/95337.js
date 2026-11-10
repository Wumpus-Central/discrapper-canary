e(321073);
var i = e(477900),
    r = e(582128),
    l = e(189213),
    a = e(683071),
    s = e(975571),
    o = e(448645),
    u = e(473702),
    c = e(916974),
    d = e(682901),
    m = e(88001),
    f = e(652215),
    p = e(107198),
    C = e(792996);
e.d(
    n,
    {},
    {
        r: () => {
            let {
                    transitionState: t,
                    onClose: n,
                    premiumType: e,
                    setStep: g,
                    premiumSubscription: y,
                    paymentsBlocked: h,
                    planId: P,
                    handleCancellation: x,
                } = (0, c.X)(),
                [v, E] = (0, r.useState)(!1),
                [D, j] = (0, r.useState)(!1),
                b =
                    (y.items.some((t) => {
                        let { planId: n } = t;
                        return !d.JM.has(n);
                    }) &&
                        null == y.renewalMutations) ||
                    y.renewalMutations?.items.find((t) => {
                        let { planId: n } = t;
                        return !d.JM.has(n);
                    }) != null,
                N = [];
            (N.push({ text: C.intl.string(C.t.rzVN6j), onClick: () => n(), variant: "secondary" }),
                b
                    ? N.push({
                          text: C.intl.string(C.t.PDTjLN),
                          onClick: () => g(u.g.PREVIEW),
                          disabled: v,
                          variant: "critical-primary",
                          loading: v,
                      })
                    : N.push({
                          text: C.intl.string(C.t["cY+Oob"]),
                          onClick: () =>
                              (async function () {
                                  (E(!0), j(!1));
                                  try {
                                      (await x(), n());
                                  } catch (t) {
                                      (j(!0), E(!1));
                                  }
                              })(),
                          disabled: v,
                          variant: "critical-primary",
                          loading: v,
                      }));
            let S = (0, o.Zb)(P),
                T = S ? C.intl.string(p.default.qbDPGM) : C.intl.string(C.t.LZunzZ);
            return (0, i.jsx)(l.a, {
                size: "md",
                transitionState: t,
                title: T,
                subtitle: (function (t, n, e, i) {
                    switch (e.status) {
                        case f.Dmq.PAST_DUE:
                        case f.Dmq.PAUSED:
                        case f.Dmq.BILLING_RETRY:
                            return C.intl.string(C.t.FClXh9);
                        default:
                            if (i)
                                return C.intl.formatToPlainString(p.default.MI8Rml, {
                                    endDate: e.currentPeriodEnd,
                                    premiumGroupProductName: (0, m.DP)(),
                                });
                            switch (n) {
                                case d.PremiumTypes.TIER_0:
                                    return t
                                        ? C.intl.format(C.t["l+A50F"], {
                                              date: e.currentPeriodEnd,
                                              helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                                          })
                                        : C.intl.format(C.t.Y6Wfaw, { date: e.currentPeriodEnd });
                                case d.PremiumTypes.TIER_1:
                                    return t
                                        ? C.intl.format(C.t.QN7eIt, {
                                              date: e.currentPeriodEnd,
                                              helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                                          })
                                        : C.intl.format(C.t.X7i9D8, { date: e.currentPeriodEnd });
                                default:
                                    return t
                                        ? C.intl.format(C.t.vuSNhj, {
                                              date: e.currentPeriodEnd,
                                              helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                                          })
                                        : C.intl.format(C.t.fCdmNs, { date: e.currentPeriodEnd });
                            }
                    }
                })(h, e, y, S),
                actions: N,
                onClose: async () => n(),
                children: D
                    ? (0, i.jsx)(a.w, { type: "critical", message: C.intl.string(C.t["5mlOCW"]), role: "alert" })
                    : null,
            });
        },
    },
);
