n.d(t, { w: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(434333),
    l = n(82659),
    c = n(74538),
    u = n(937615),
    d = n(811334),
    f = n(42818),
    _ = n(594135),
    p = n(388032),
    h = n(704442);
let m = () => {
    let {
            transitionState: e,
            planId: t,
            renewalInvoice: n,
            onClose: a,
            handleCancellation: m,
            renewalInvoiceDetails: g,
            fullPrice: E,
            premiumSubscription: b,
        } = (0, _.a)(),
        [y, O] = i.useState(!1),
        [v, I] = i.useState(!1);
    if (null == n) return null;
    let T = async () => {
            O(!0), I(!1);
            try {
                await m(), a();
            } catch (e) {
                I(!0), O(!1);
            }
        },
        S = [
            {
                text: p.intl.string(p.t.h9tkAA),
                onClick: () => a(),
                variant: "secondary",
            },
            {
                text: "".concat(
                    p.intl.format(p.t.yxFzdH, { planPremiumType: c.ZP.getDisplayPremiumType("".concat(t)) }),
                ),
                onClick: T,
                disabled: y,
                variant: "critical-primary",
                loading: y,
            },
        ];
    if (null == g) return null;
    let { intervalType: A, intervalCount: C } = g,
        N = (0, u.og)("".concat(E), A, C);
    return (0, r.jsxs)(l.Modal, {
        size: "md",
        transitionState: e,
        title: "".concat(p.intl.format(p.t.LZunzc, { planPremiumType: c.ZP.getDisplayPremiumType("".concat(t)) })),
        subtitle:
            0 !== n.total
                ? p.intl.format(p.t.ycyeBw, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, u.og)((0, u.T4)(n.total, n.currency), A, C),
                  })
                : p.intl.format(p.t["+y0Tj4"], { renewalDate: n.subscriptionPeriodStart }),
        actions: S,
        onClose: async () => a(),
        children: [
            (0, r.jsxs)(d.aO, {
                isPremiumRebrand: !0,
                className: o()({ [h.hasError]: v }),
                children: [
                    (0, r.jsx)(d.Z9, { children: p.intl.string(p.t.iqhIp6) }),
                    (0, r.jsx)(d.B1, {
                        label: p.intl.formatToPlainString(p.t.r3jVZm, { planName: c.ZP.getDisplayName("".concat(t)) }),
                        value: "".concat(N),
                        className: h.canceled,
                    }),
                    (0, r.jsx)(d.UN, {}),
                    (0, r.jsx)(f.nd, {
                        premiumSubscription: b,
                        renewalInvoice: n,
                        isUpdate: !0,
                    }),
                ],
            }),
            v ? (0, r.jsx)(s.k, { children: p.intl.string(p.t["5mlOCQ"]) }) : null,
        ],
    });
};
