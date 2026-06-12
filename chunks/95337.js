i.d(e, { r: () => h }), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(189213),
    a = i(683071),
    s = i(975571),
    o = i(428262),
    u = i(473702),
    c = i(916974),
    d = i(788868),
    m = i(88001),
    f = i(652215),
    g = i(466919),
    p = i(375708);
let h = () => {
        let {
                transitionState: t,
                onClose: e,
                premiumType: i,
                setStep: s,
                premiumSubscription: m,
                paymentsBlocked: f,
                planId: h,
                handleCancellation: P,
            } = (0, c.X)(),
            [C, y] = (0, r.useState)(!1),
            [E, v] = (0, r.useState)(!1),
            D = async () => {
                y(!0), v(!1);
                try {
                    await P(), e();
                } catch (t) {
                    v(!0), y(!1);
                }
            },
            j =
                (m.items.some((t) => {
                    let { planId: e } = t;
                    return !d.JM.has(e);
                }) &&
                    null == m.renewalMutations) ||
                m.renewalMutations?.items.find((t) => {
                    let { planId: e } = t;
                    return !d.JM.has(e);
                }) != null,
            S = [];
        S.push({ text: p.intl.string(p.t.rzVN6j), onClick: () => e(), variant: "secondary" }),
            j
                ? S.push({
                      text: p.intl.string(p.t.PDTjLN),
                      onClick: () => s(u.g.PREVIEW),
                      disabled: C,
                      variant: "critical-primary",
                      loading: C,
                  })
                : S.push({
                      text: p.intl.string(p.t["cY+Oob"]),
                      onClick: () => D(),
                      disabled: C,
                      variant: "critical-primary",
                      loading: C,
                  });
        let A = (0, o.Zb)(h),
            N = A ? p.intl.string(g.default.qbDPGM) : p.intl.string(p.t.LZunzZ);
        return (0, n.jsx)(l.Modal, {
            size: "md",
            transitionState: t,
            title: N,
            subtitle: x(f, i, m, A),
            actions: S,
            onClose: async () => e(),
            children: E ? (0, n.jsx)(a.w, { type: "critical", children: p.intl.string(p.t["5mlOCW"]) }) : null,
        });
    },
    x = (t, e, i, n) => {
        switch (i.status) {
            case f.Dmq.PAST_DUE:
            case f.Dmq.PAUSED:
            case f.Dmq.BILLING_RETRY:
                return p.intl.string(p.t.FClXh9);
            default:
                if (n)
                    return p.intl.formatToPlainString(g.default.MI8Rml, {
                        endDate: i.currentPeriodEnd,
                        premiumGroupProductName: (0, m.DP)(),
                    });
                switch (e) {
                    case d.PremiumTypes.TIER_0:
                        return t
                            ? p.intl.format(p.t["l+A50F"], {
                                  date: i.currentPeriodEnd,
                                  helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : p.intl.format(p.t.Y6Wfaw, { date: i.currentPeriodEnd });
                    case d.PremiumTypes.TIER_1:
                        return t
                            ? p.intl.format(p.t.QN7eIt, {
                                  date: i.currentPeriodEnd,
                                  helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : p.intl.format(p.t.X7i9D8, { date: i.currentPeriodEnd });
                    default:
                        return t
                            ? p.intl.format(p.t.vuSNhj, {
                                  date: i.currentPeriodEnd,
                                  helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : p.intl.format(p.t.fCdmNs, { date: i.currentPeriodEnd });
                }
        }
    };
