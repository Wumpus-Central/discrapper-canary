n.d(t, { w: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(74538),
    c = n(937615),
    u = n(811334),
    d = n(42818),
    f = n(594135),
    p = n(388032),
    _ = n(704442);
let m = () => {
    let {
            transitionState: e,
            planId: t,
            renewalInvoice: n,
            onClose: a,
            handleCancellation: m,
            renewalInvoiceDetails: h,
            fullPrice: g,
            premiumSubscription: E,
        } = (0, f.a)(),
        [b, y] = i.useState(!1),
        [O, v] = i.useState(!1);
    if (null == n) return null;
    let S = async () => {
            y(!0), v(!1);
            try {
                await m(), a();
            } catch (e) {
                v(!0), y(!1);
            }
        },
        I = [
            {
                text: p.intl.string(p.t.h9tkAK),
                onClick: () => a(),
                variant: "secondary",
            },
            {
                text: "".concat(
                    p.intl.format(p.t.yxFzdO, { planPremiumType: l.ZP.getTierDisplayNameByPlanId("".concat(t)) }),
                ),
                onClick: S,
                disabled: b,
                variant: "critical-primary",
                loading: b,
            },
        ];
    if (null == h) return null;
    let { intervalType: T, intervalCount: A } = h,
        C = (0, c.og)("".concat(g), T, A);
    return (0, r.jsxs)(s.Modal, {
        size: "md",
        transitionState: e,
        title: "".concat(p.intl.format(p.t.LZunzZ, { planPremiumType: l.ZP.getTierDisplayNameByPlanId("".concat(t)) })),
        subtitle:
            0 !== n.total
                ? p.intl.format(p.t.ycyeBx, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, c.og)((0, c.T4)(n.total, n.currency), T, A),
                  })
                : p.intl.format(p.t["+y0Tjy"], { renewalDate: n.subscriptionPeriodStart }),
        actions: I,
        onClose: async () => a(),
        children: [
            (0, r.jsxs)(u.aO, {
                isPremiumRebrand: !0,
                className: o()({ [_.hasError]: O }),
                children: [
                    (0, r.jsx)(u.Z9, { children: p.intl.string(p.t.iqhIp4) }),
                    (0, r.jsx)(u.B1, {
                        label: p.intl.formatToPlainString(p.t.r3jVZq, { planName: l.ZP.getDisplayName("".concat(t)) }),
                        value: "".concat(C),
                        className: _.canceled,
                    }),
                    (0, r.jsx)(u.UN, {}),
                    (0, r.jsx)(d.nd, {
                        premiumSubscription: E,
                        renewalInvoice: n,
                        isUpdate: !0,
                    }),
                ],
            }),
            O
                ? (0, r.jsx)(s.M14, {
                      type: "critical",
                      children: p.intl.string(p.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
