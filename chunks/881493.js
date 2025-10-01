n.d(e, { w: () => h }), n(388685);
var i = n(951288),
    r = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(793030),
    o = n(434333),
    c = n(74538),
    u = n(937615),
    d = n(811334),
    m = n(42818),
    f = n(594135),
    p = n(388032),
    g = n(704442);
let h = () => {
    let {
            transitionState: t,
            planId: e,
            renewalInvoice: n,
            onClose: a,
            handleCancellation: h,
            renewalInvoiceDetails: x,
            fullPrice: C,
            premiumSubscription: P,
        } = (0, f.a)(),
        [v, y] = r.useState(!1),
        [S, E] = r.useState(!1);
    if (null == n) return null;
    let _ = async () => {
            y(!0), E(!1);
            try {
                await h(), a();
            } catch (t) {
                E(!0), y(!1);
            }
        },
        D = [
            {
                text: p.intl.string(p.t.h9tkAA),
                onClick: () => a(),
                variant: "secondary",
            },
            {
                text: "".concat(
                    p.intl.format(p.t.yxFzdH, { planPremiumType: c.ZP.getDisplayPremiumType("".concat(e)) }),
                ),
                onClick: _,
                disabled: v,
                variant: "critical-primary",
                loading: v,
            },
        ];
    if (null == x) return null;
    let { intervalType: N, intervalCount: j } = x,
        T = (0, u.og)("".concat(C), N, j);
    return (0, i.jsxs)(s.Modal, {
        size: "md",
        transitionState: t,
        title: "".concat(p.intl.format(p.t.LZunzc, { planPremiumType: c.ZP.getDisplayPremiumType("".concat(e)) })),
        subtitle:
            0 !== n.total
                ? p.intl.format(p.t.ycyeBw, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, u.og)((0, u.T4)(n.total, n.currency), N, j),
                  })
                : p.intl.format(p.t["+y0Tj4"], { renewalDate: n.subscriptionPeriodStart }),
        actions: D,
        onClose: async () => a(),
        children: [
            (0, i.jsxs)(d.aO, {
                isPremiumRebrand: !0,
                className: l()({ [g.hasError]: S }),
                children: [
                    (0, i.jsx)(d.Z9, { children: p.intl.string(p.t.iqhIp6) }),
                    (0, i.jsx)(d.B1, {
                        label: p.intl.formatToPlainString(p.t.r3jVZm, { planName: c.ZP.getDisplayName("".concat(e)) }),
                        value: "".concat(T),
                        className: g.canceled,
                    }),
                    (0, i.jsx)(d.UN, {}),
                    (0, i.jsx)(m.nd, {
                        premiumSubscription: P,
                        renewalInvoice: n,
                        isUpdate: !0,
                    }),
                ],
            }),
            S ? (0, i.jsx)(o.k, { children: p.intl.string(p.t["5mlOCQ"]) }) : null,
        ],
    });
};
