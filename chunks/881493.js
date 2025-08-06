n.d(t, { w: () => f }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(434333),
    o = n(82659),
    c = n(74538),
    d = n(937615),
    u = n(811334),
    m = n(42818),
    p = n(594135),
    g = n(388032),
    h = n(585871);
let f = () => {
    let {
            transitionState: e,
            planId: t,
            renewalInvoice: n,
            onClose: s,
            handleCancellation: f,
            renewalInvoiceDetails: b,
            fullPrice: x,
            premiumSubscription: _,
        } = (0, p.a)(),
        [j, E] = r.useState(!1),
        [C, O] = r.useState(!1);
    if (null == n) return null;
    let v = async () => {
            E(!0), O(!1);
            try {
                await f(), s();
            } catch (e) {
                O(!0), E(!1);
            }
        },
        S = [
            {
                text: g.intl.string(g.t.h9tkAA),
                onClick: () => s(),
                variant: "secondary",
            },
            {
                text: "".concat(
                    g.intl.format(g.t.yxFzdH, { planPremiumType: c.ZP.getDisplayPremiumType("".concat(t)) }),
                ),
                onClick: v,
                disabled: j,
                variant: "critical-primary",
                loading: j,
            },
        ];
    if (null == b) return null;
    let { intervalType: T, intervalCount: I } = b,
        N = (0, d.og)("".concat(x), T, I);
    return (0, i.jsxs)(o.Modal, {
        size: "md",
        transitionState: e,
        title: "".concat(g.intl.format(g.t.LZunzc, { planPremiumType: c.ZP.getDisplayPremiumType("".concat(t)) })),
        subtitle:
            0 !== n.total
                ? g.intl.format(g.t.ycyeBw, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, d.og)((0, d.T4)(n.total, n.currency), T, I),
                  })
                : g.intl.format(g.t["+y0Tj4"], { renewalDate: n.subscriptionPeriodStart }),
        actions: S,
        onClose: async () => s(),
        children: [
            (0, i.jsxs)(u.aO, {
                isPremiumRebrand: !0,
                className: a()({ [h.hasError]: C }),
                children: [
                    (0, i.jsx)(u.Z9, { children: g.intl.string(g.t.iqhIp6) }),
                    (0, i.jsx)(u.B1, {
                        label: g.intl.formatToPlainString(g.t.r3jVZm, { planName: c.ZP.getDisplayName("".concat(t)) }),
                        value: "".concat(N),
                        className: h.canceled,
                    }),
                    (0, i.jsx)(u.UN, {}),
                    (0, i.jsx)(m.nd, {
                        premiumSubscription: _,
                        renewalInvoice: n,
                        isUpdate: !0,
                    }),
                ],
            }),
            C ? (0, i.jsx)(l.k, { children: g.intl.string(g.t["5mlOCQ"]) }) : null,
        ],
    });
};
