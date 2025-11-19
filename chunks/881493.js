n.d(t, { w: () => h }), n(388685);
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
    _ = n(388032),
    p = n(181459);
let h = () => {
    let {
            transitionState: e,
            planId: t,
            renewalInvoice: n,
            onClose: a,
            handleCancellation: h,
            renewalInvoiceDetails: m,
            fullPrice: g,
            premiumSubscription: E,
        } = (0, f.a)(),
        [b, y] = i.useState(!1),
        [O, v] = i.useState(!1);
    if (null == n) return null;
    let I = async () => {
            y(!0), v(!1);
            try {
                await h(), a();
            } catch (e) {
                v(!0), y(!1);
            }
        },
        T = [
            {
                text: _.intl.string(_.t.h9tkAK),
                onClick: () => a(),
                variant: "secondary",
            },
            {
                text: "".concat(
                    _.intl.format(_.t.yxFzdO, { planPremiumType: l.ZP.getDisplayPremiumType("".concat(t)) }),
                ),
                onClick: I,
                disabled: b,
                variant: "critical-primary",
                loading: b,
            },
        ];
    if (null == m) return null;
    let { intervalType: S, intervalCount: A } = m,
        C = (0, c.og)("".concat(g), S, A);
    return (0, r.jsxs)(s.Modal, {
        size: "md",
        transitionState: e,
        title: "".concat(_.intl.format(_.t.LZunzZ, { planPremiumType: l.ZP.getDisplayPremiumType("".concat(t)) })),
        subtitle:
            0 !== n.total
                ? _.intl.format(_.t.ycyeBx, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, c.og)((0, c.T4)(n.total, n.currency), S, A),
                  })
                : _.intl.format(_.t["+y0Tjy"], { renewalDate: n.subscriptionPeriodStart }),
        actions: T,
        onClose: async () => a(),
        children: [
            (0, r.jsxs)(u.aO, {
                isPremiumRebrand: !0,
                className: o()({ [p.hasError]: O }),
                children: [
                    (0, r.jsx)(u.Z9, { children: _.intl.string(_.t.iqhIp4) }),
                    (0, r.jsx)(u.B1, {
                        label: _.intl.formatToPlainString(_.t.r3jVZq, { planName: l.ZP.getDisplayName("".concat(t)) }),
                        value: "".concat(C),
                        className: p.canceled,
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
                      children: _.intl.string(_.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
