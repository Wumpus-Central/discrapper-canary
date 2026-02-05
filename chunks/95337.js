"use strict";
n.d(t, { r: () => m }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(975571),
    l = n(927578),
    u = n(473702),
    c = n(916974),
    d = n(788868),
    _ = n(88001),
    f = n(652215),
    p = n(519412),
    h = n(985018);
let m = () => {
        let {
                transitionState: e,
                onClose: t,
                premiumType: n,
                setStep: o,
                premiumSubscription: _,
                paymentsBlocked: f,
                planId: m,
                handleCancellation: E,
            } = (0, c.X)(),
            [A, I] = (0, i.useState)(!1),
            [T, y] = (0, i.useState)(!1),
            S = async () => {
                I(!0), y(!1);
                try {
                    await E(), t();
                } catch (e) {
                    y(!0), I(!1);
                }
            },
            v =
                (_.items.some((e) => {
                    let { planId: t } = e;
                    return !d.JM.has(t);
                }) &&
                    null == _.renewalMutations) ||
                _.renewalMutations?.items.find((e) => {
                    let { planId: t } = e;
                    return !d.JM.has(t);
                }) != null,
            C = [];
        C.push({ text: h.intl.string(h.t.h9tkAK), onClick: () => t(), variant: "secondary" }),
            v
                ? C.push({
                      text: h.intl.string(h.t.PDTjLN),
                      onClick: () => o(u.g.PREVIEW),
                      disabled: A,
                      variant: "critical-primary",
                      loading: A,
                  })
                : C.push({
                      text: h.intl.string(h.t["cY+Oob"]),
                      onClick: () => S(),
                      disabled: A,
                      variant: "critical-primary",
                      loading: A,
                  });
        let b = (0, l.Zb)(m),
            N = b
                ? h.intl.string(p.default.qbDPGM)
                : h.intl.formatToPlainString(h.t.LZunzZ, { planPremiumType: l.Ay.getTierDisplayNameByPlanId(`${m}`) });
        return (0, r.jsx)(a.Modal, {
            size: "md",
            transitionState: e,
            title: N,
            subtitle: g(f, n, _, b),
            actions: C,
            onClose: async () => t(),
            children: T ? (0, r.jsx)(s.wx6, { type: "critical", children: h.intl.string(h.t["5mlOCW"]) }) : null,
        });
    },
    g = (e, t, n, r) => {
        switch (n.status) {
            case f.Dmq.PAST_DUE:
            case f.Dmq.PAUSED:
            case f.Dmq.BILLING_RETRY:
                return h.intl.string(h.t.FClXh9);
            default:
                if (r)
                    return h.intl.formatToPlainString(p.default.MI8Rml, {
                        endDate: n.currentPeriodEnd,
                        premiumGroupProductName: (0, _.DP)(),
                    });
                switch (t) {
                    case d.PremiumTypes.TIER_0:
                        return e
                            ? h.intl.format(h.t["l+A50F"], {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: o.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : h.intl.format(h.t.Y6Wfaw, { date: n.currentPeriodEnd });
                    case d.PremiumTypes.TIER_1:
                        return e
                            ? h.intl.format(h.t.QN7eIt, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: o.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : h.intl.format(h.t.X7i9D8, { date: n.currentPeriodEnd });
                    default:
                        return e
                            ? h.intl.format(h.t.vuSNhj, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: o.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : h.intl.format(h.t.fCdmNs, { date: n.currentPeriodEnd });
                }
        }
    };
