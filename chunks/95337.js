e(321073);
var i = e(477900),
    r = e(582128),
    l = e(189213),
    a = e(834730),
    s = e(136857),
    o = e(975571),
    u = e(448645),
    c = e(473702),
    d = e(916974),
    m = e(682901),
    f = e(88001),
    y = e(652215),
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
                    premiumSubscription: h,
                    paymentsBlocked: P,
                    planId: x,
                    handleCancellation: v,
                } = (0, d.X)(),
                [E, D] = (0, r.useState)(!1),
                [b, A] = (0, r.useState)(null),
                N =
                    (h.items.some((t) => {
                        let { planId: n } = t;
                        return !m.JM.has(n);
                    }) &&
                        null == h.renewalMutations) ||
                    h.renewalMutations?.items.find((t) => {
                        let { planId: n } = t;
                        return !m.JM.has(n);
                    }) != null,
                j = [];
            (j.push({ text: C.intl.string(C.t.rzVN6j), onClick: () => n(), variant: "secondary" }),
                N
                    ? j.push({
                          text: C.intl.string(C.t.PDTjLN),
                          onClick: () => g(c.g.PREVIEW),
                          disabled: E,
                          variant: "critical-primary",
                          loading: E,
                      })
                    : j.push({
                          text: C.intl.string(C.t["cY+Oob"]),
                          onClick: () =>
                              (async function () {
                                  (D(!0), A(null));
                                  try {
                                      (await v(), n());
                                  } catch (t) {
                                      A(t instanceof s.Ay ? t : new s.Ay(t));
                                  } finally {
                                      D(!1);
                                  }
                              })(),
                          disabled: E,
                          variant: "critical-primary",
                          loading: E,
                      }));
            let S = (0, u.Zb)(x),
                T = S ? C.intl.string(p.default.qbDPGM) : C.intl.string(C.t.LZunzZ);
            return (0, i.jsx)(l.a, {
                size: "md",
                transitionState: t,
                title: T,
                subtitle: (function (t, n, e, i) {
                    switch (e.status) {
                        case y.Dmq.PAST_DUE:
                        case y.Dmq.PAUSED:
                        case y.Dmq.BILLING_RETRY:
                            return C.intl.string(C.t.FClXh9);
                        default:
                            if (i)
                                return C.intl.formatToPlainString(p.default.MI8Rml, {
                                    endDate: e.currentPeriodEnd,
                                    premiumGroupProductName: (0, f.DP)(),
                                });
                            switch (n) {
                                case m.PremiumTypes.TIER_0:
                                    return t
                                        ? C.intl.format(C.t["l+A50F"], {
                                              date: e.currentPeriodEnd,
                                              helpdeskArticle: o.A.getArticleURL(y.MVz.BLOCKED_PAYMENTS),
                                          })
                                        : C.intl.format(C.t.Y6Wfaw, { date: e.currentPeriodEnd });
                                case m.PremiumTypes.TIER_1:
                                    return t
                                        ? C.intl.format(C.t.QN7eIt, {
                                              date: e.currentPeriodEnd,
                                              helpdeskArticle: o.A.getArticleURL(y.MVz.BLOCKED_PAYMENTS),
                                          })
                                        : C.intl.format(C.t.X7i9D8, { date: e.currentPeriodEnd });
                                default:
                                    return t
                                        ? C.intl.format(C.t.vuSNhj, {
                                              date: e.currentPeriodEnd,
                                              helpdeskArticle: o.A.getArticleURL(y.MVz.BLOCKED_PAYMENTS),
                                          })
                                        : C.intl.format(C.t.fCdmNs, { date: e.currentPeriodEnd });
                            }
                    }
                })(P, e, h, S),
                actions: j,
                onClose: async () => n(),
                children:
                    null != b
                        ? (0, i.jsx)(a.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: b.message,
                          })
                        : null,
            });
        },
    },
);
