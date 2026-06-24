n.d(e, { r: () => h }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(189213),
    a = n(683071),
    s = n(975571),
    o = n(428262),
    u = n(473702),
    c = n(916974),
    d = n(788868),
    m = n(88001),
    f = n(652215),
    g = n(466919),
    p = n(375708);
let h = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            setStep: h,
            premiumSubscription: x,
            paymentsBlocked: P,
            planId: C,
            handleCancellation: y,
        } = (0, c.X)(),
        [E, v] = (0, r.useState)(!1),
        [D, j] = (0, r.useState)(!1);
    async function S() {
        v(!0), j(!1);
        try {
            await y(), e();
        } catch (t) {
            j(!0), v(!1);
        }
    }
    let A =
            (x.items.some((t) => {
                let { planId: e } = t;
                return !d.JM.has(e);
            }) &&
                null == x.renewalMutations) ||
            x.renewalMutations?.items.find((t) => {
                let { planId: e } = t;
                return !d.JM.has(e);
            }) != null,
        N = [];
    N.push({ text: p.intl.string(p.t.rzVN6j), onClick: () => e(), variant: "secondary" }),
        A
            ? N.push({
                  text: p.intl.string(p.t.PDTjLN),
                  onClick: () => h(u.g.PREVIEW),
                  disabled: E,
                  variant: "critical-primary",
                  loading: E,
              })
            : N.push({
                  text: p.intl.string(p.t["cY+Oob"]),
                  onClick: () => S(),
                  disabled: E,
                  variant: "critical-primary",
                  loading: E,
              });
    let L = (0, o.Zb)(C),
        T = L ? p.intl.string(g.default.qbDPGM) : p.intl.string(p.t.LZunzZ);
    return (0, i.jsx)(l.Modal, {
        size: "md",
        transitionState: t,
        title: T,
        subtitle: (function (t, e, n, i) {
            switch (n.status) {
                case f.Dmq.PAST_DUE:
                case f.Dmq.PAUSED:
                case f.Dmq.BILLING_RETRY:
                    return p.intl.string(p.t.FClXh9);
                default:
                    if (i)
                        return p.intl.formatToPlainString(g.default.MI8Rml, {
                            endDate: n.currentPeriodEnd,
                            premiumGroupProductName: (0, m.DP)(),
                        });
                    switch (e) {
                        case d.PremiumTypes.TIER_0:
                            return t
                                ? p.intl.format(p.t["l+A50F"], {
                                      date: n.currentPeriodEnd,
                                      helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                                  })
                                : p.intl.format(p.t.Y6Wfaw, { date: n.currentPeriodEnd });
                        case d.PremiumTypes.TIER_1:
                            return t
                                ? p.intl.format(p.t.QN7eIt, {
                                      date: n.currentPeriodEnd,
                                      helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                                  })
                                : p.intl.format(p.t.X7i9D8, { date: n.currentPeriodEnd });
                        default:
                            return t
                                ? p.intl.format(p.t.vuSNhj, {
                                      date: n.currentPeriodEnd,
                                      helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                                  })
                                : p.intl.format(p.t.fCdmNs, { date: n.currentPeriodEnd });
                    }
            }
        })(P, n, x, L),
        actions: N,
        onClose: async () => e(),
        children: D ? (0, i.jsx)(a.w, { type: "critical", children: p.intl.string(p.t["5mlOCW"]) }) : null,
    });
};
