"use strict";
n.d(t, { p: () => l });
var r = n(627968);
n(64700);
var i = n(295405),
    a = n(937008),
    s = n(166532),
    o = n(735305);
let l = { key: s.pn.ADD_PAYMENT_STEPS, renderStep: (e) => (0, r.jsx)(c, { ...e }), options: { renderHeader: !0 } },
    u = (e, t) => {
        if (0 === Object.keys(i.A.paymentSources).length) {
            if (t) return void e.handleStepChange(s.pn.GIFT_CUSTOMIZATION);
            e.handleClose();
        } else e.handleStepChange(s.pn.REVIEW, { trackedFromStep: s.pn.ADD_PAYMENT_STEPS });
    };
function c(e) {
    let { isGift: t } = (0, a.Pv)();
    return (0, r.jsx)(o.x, {
        ...e,
        breadcrumbSteps: [s.pn.ADD_PAYMENT_STEPS, s.pn.REVIEW, s.pn.CONFIRM],
        onReturn: () => u(e, t),
    });
}
