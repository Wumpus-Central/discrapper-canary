n.d(t, {
    V: () => u,
});
var r = n(627968),
    i = n(397927),
    a = n(405139),
    s = n(985018),
    o = n(802177);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e) {
    let t,
        {
            onChooseType: n,
            onStripePaymentMethodReceived: l,
            onPaymentRequestFailure: u,
            onValidPaymentRequest: d,
            paymentRequestRef: f,
            paymentRequestWallet: p,
        } = e,
        _ = {
            paymentLabel: s.intl.string(s.t.ZURqX0),
            paymentRequestRef: f,
            renderConnectorView: !0,
            onStripePaymentMethodReceived: l,
            onPaymentRequestFailure: u,
            onValidPaymentRequest: d,
            onChooseType: n,
            loadingComponent: (0, r.jsx)(i.y$y, {
                style: {
                    marginTop: 16,
                },
                type: i.tVU.PULSING_ELLIPSIS,
            }),
        };
    return (
        (t = "applePay" === p ? (0, r.jsx)(a.Mv, c({}, _)) : (0, r.jsx)(a.dP, c({}, _))),
        (0, r.jsx)("div", {
            className: o.r,
            children: (0, r.jsx)(i.D0$, {
                label: s.intl.string(s.t.eQ2bLp),
                children: t,
            }),
        })
    );
}
