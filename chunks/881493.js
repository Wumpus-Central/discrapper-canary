n.d(e, { w: () => g }), n(388685);
var i = n(951288),
    r = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(793030),
    o = n(74538),
    c = n(937615),
    u = n(811334),
    d = n(42818),
    m = n(594135),
    f = n(388032),
    p = n(704442);
let g = () => {
    let {
            transitionState: t,
            planId: e,
            renewalInvoice: n,
            onClose: a,
            handleCancellation: g,
            renewalInvoiceDetails: h,
            fullPrice: x,
            premiumSubscription: P,
        } = (0, m.a)(),
        [C, y] = r.useState(!1),
        [v, T] = r.useState(!1);
    if (null == n) return null;
    let E = async () => {
            y(!0), T(!1);
            try {
                await g(), a();
            } catch (t) {
                T(!0), y(!1);
            }
        },
        S = [
            {
                text: f.intl.string(f.t.h9tkAA),
                onClick: () => a(),
                variant: "secondary",
            },
            {
                text: "".concat(
                    f.intl.format(f.t.yxFzdH, { planPremiumType: o.ZP.getDisplayPremiumType("".concat(e)) }),
                ),
                onClick: E,
                disabled: C,
                variant: "critical-primary",
                loading: C,
            },
        ];
    if (null == h) return null;
    let { intervalType: _, intervalCount: N } = h,
        j = (0, c.og)("".concat(x), _, N);
    return (0, i.jsxs)(s.Modal, {
        size: "md",
        transitionState: t,
        title: "".concat(f.intl.format(f.t.LZunzc, { planPremiumType: o.ZP.getDisplayPremiumType("".concat(e)) })),
        subtitle:
            0 !== n.total
                ? f.intl.format(f.t.ycyeBw, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, c.og)((0, c.T4)(n.total, n.currency), _, N),
                  })
                : f.intl.format(f.t["+y0Tj4"], { renewalDate: n.subscriptionPeriodStart }),
        actions: S,
        onClose: async () => a(),
        children: [
            (0, i.jsxs)(u.aO, {
                isPremiumRebrand: !0,
                className: l()({ [p.hasError]: v }),
                children: [
                    (0, i.jsx)(u.Z9, { children: f.intl.string(f.t.iqhIp6) }),
                    (0, i.jsx)(u.B1, {
                        label: f.intl.formatToPlainString(f.t.r3jVZm, { planName: o.ZP.getDisplayName("".concat(e)) }),
                        value: "".concat(j),
                        className: p.canceled,
                    }),
                    (0, i.jsx)(u.UN, {}),
                    (0, i.jsx)(d.nd, {
                        premiumSubscription: P,
                        renewalInvoice: n,
                        isUpdate: !0,
                    }),
                ],
            }),
            v
                ? (0, i.jsx)(s.M14, {
                      type: "critical",
                      children: f.intl.string(f.t["5mlOCQ"]),
                  })
                : null,
        ],
    });
};
