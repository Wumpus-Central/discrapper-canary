n.d(t, {
    n: () => m,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(450233),
    l = n(773669),
    c = n(615405),
    u = n(493822),
    d = n(652215),
    f = n(985018),
    p = n(182468);

function _(e, t, n) {
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

function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let m = (e) => {
    let t,
        { billingAddressInfo: n, billingError: _, onBillingAddressChange: m, paymentSourceType: g } = e,
        E = null != _ && (null == _.code || (0, u.ou)(_) === u.gj.ADDRESS),
        b = (0, a.bG)([l.default], () => l.default.locale);
    switch (g) {
        case d.hes.GIROPAY:
        case d.hes.PAYSAFE_CARD:
        case d.hes.GCASH:
        case d.hes.GRABPAY_MY:
        case d.hes.MOMO_WALLET:
        case d.hes.KAKAOPAY:
        case d.hes.GOPAY_WALLET:
        case d.hes.BANCONTACT:
            t = "en-US" === b ? o.Ay.Layouts.MODAL_US_WITH_NAME : o.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case d.hes.VENMO:
        case d.hes.CASH_APP:
            t = o.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === b ? o.Ay.Layouts.MODAL_US : o.Ay.Layouts.MODAL_INTL;
    }
    let y = (0, a.bG)([c.A], () => c.A.ipCountryCode);
    return (
        0 === n.country.length && (n.country = null != y ? y : ""),
        (0, r.jsxs)(i.Fragment, {
            children: [
                E
                    ? (0, r.jsx)("div", {
                          className: p.QK,
                          children: (0, r.jsx)(s.wx6, {
                              type: "critical",
                              children: f.intl.string(f.t.vZ8y7l),
                          }),
                      })
                    : null,
                (0, r.jsx)(
                    o.Ay,
                    h(
                        {
                            className: p.__invalid_formItem,
                            onBillingAddressChange: m,
                            error: _,
                            layout: t,
                        },
                        n,
                    ),
                ),
            ],
        })
    );
};
