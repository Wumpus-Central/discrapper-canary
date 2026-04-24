n.d(t, { V: () => u });
var l = n(627968),
    a = n(289873),
    i = n(452027),
    r = n(405139),
    s = n(985018),
    o = n(387650);
function u(e) {
    let t,
        {
            onChooseType: n,
            onStripePaymentMethodReceived: u,
            onPaymentRequestFailure: c,
            onValidPaymentRequest: d,
            paymentRequestRef: p,
            paymentRequestWallet: m,
        } = e,
        h = {
            paymentLabel: s.intl.string(s.t.ZURqX0),
            paymentRequestRef: p,
            renderConnectorView: !0,
            onStripePaymentMethodReceived: u,
            onPaymentRequestFailure: c,
            onValidPaymentRequest: d,
            onChooseType: n,
            loadingComponent: (0, l.jsx)(a.y, { style: { marginTop: 16 }, type: a.t.PULSING_ELLIPSIS }),
        };
    return (
        (t = "applePay" === m ? (0, l.jsx)(r.Mv, { ...h }) : (0, l.jsx)(r.dP, { ...h })),
        (0, l.jsx)("div", {
            className: o.r,
            children: (0, l.jsx)(i.D, { label: s.intl.string(s.t.eQ2bLp), children: t }),
        })
    );
}
