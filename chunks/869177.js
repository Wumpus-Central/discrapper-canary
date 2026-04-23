"use strict";
n.d(t, { V: () => u });
var r = n(627968),
    i = n(289873),
    s = n(452027),
    a = n(405139),
    o = n(985018),
    l = n(387650);
function u(e) {
    let t,
        {
            onChooseType: n,
            onStripePaymentMethodReceived: u,
            onPaymentRequestFailure: c,
            onValidPaymentRequest: d,
            paymentRequestRef: _,
            paymentRequestWallet: f,
        } = e,
        p = {
            paymentLabel: o.intl.string(o.t.ZURqX0),
            paymentRequestRef: _,
            renderConnectorView: !0,
            onStripePaymentMethodReceived: u,
            onPaymentRequestFailure: c,
            onValidPaymentRequest: d,
            onChooseType: n,
            loadingComponent: (0, r.jsx)(i.y, { style: { marginTop: 16 }, type: i.t.PULSING_ELLIPSIS }),
        };
    return (
        (t = "applePay" === f ? (0, r.jsx)(a.Mv, { ...p }) : (0, r.jsx)(a.dP, { ...p })),
        (0, r.jsx)("div", {
            className: l.r,
            children: (0, r.jsx)(s.D, { label: o.intl.string(o.t.eQ2bLp), children: t }),
        })
    );
}
