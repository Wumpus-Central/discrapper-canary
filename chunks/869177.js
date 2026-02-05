"use strict";
n.d(t, { V: () => l });
var r = n(627968),
    i = n(397927),
    a = n(405139),
    s = n(985018),
    o = n(802177);
function l(e) {
    let t,
        {
            onChooseType: n,
            onStripePaymentMethodReceived: l,
            onPaymentRequestFailure: u,
            onValidPaymentRequest: c,
            paymentRequestRef: d,
            paymentRequestWallet: _,
        } = e,
        f = {
            paymentLabel: s.intl.string(s.t.ZURqX0),
            paymentRequestRef: d,
            renderConnectorView: !0,
            onStripePaymentMethodReceived: l,
            onPaymentRequestFailure: u,
            onValidPaymentRequest: c,
            onChooseType: n,
            loadingComponent: (0, r.jsx)(i.y$y, { style: { marginTop: 16 }, type: i.tVU.PULSING_ELLIPSIS }),
        };
    return (
        (t = "applePay" === _ ? (0, r.jsx)(a.Mv, { ...f }) : (0, r.jsx)(a.dP, { ...f })),
        (0, r.jsx)("div", {
            className: o.r,
            children: (0, r.jsx)(i.D0$, { label: s.intl.string(s.t.eQ2bLp), children: t }),
        })
    );
}
