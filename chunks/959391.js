"use strict";
n.d(t, { n: () => p });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(450233),
    l = n(773669),
    u = n(615405),
    c = n(493822),
    d = n(652215),
    _ = n(985018),
    f = n(182468);
let p = (e) => {
    let t,
        { billingAddressInfo: n, billingError: p, onBillingAddressChange: h, paymentSourceType: m } = e,
        g = null != p && (null == p.code || (0, c.ou)(p) === c.gj.ADDRESS),
        E = (0, a.bG)([l.default], () => l.default.locale);
    switch (m) {
        case d.hes.GIROPAY:
        case d.hes.PAYSAFE_CARD:
        case d.hes.GCASH:
        case d.hes.GRABPAY_MY:
        case d.hes.MOMO_WALLET:
        case d.hes.KAKAOPAY:
        case d.hes.GOPAY_WALLET:
        case d.hes.BANCONTACT:
            t = "en-US" === E ? o.Ay.Layouts.MODAL_US_WITH_NAME : o.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case d.hes.VENMO:
        case d.hes.CASH_APP:
            t = o.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === E ? o.Ay.Layouts.MODAL_US : o.Ay.Layouts.MODAL_INTL;
    }
    let A = (0, a.bG)([u.A], () => u.A.ipCountryCode);
    return (
        0 === n.country.length && (n.country = A ?? ""),
        (0, r.jsxs)(i.Fragment, {
            children: [
                g
                    ? (0, r.jsx)("div", {
                          className: f.QK,
                          children: (0, r.jsx)(s.wx6, { type: "critical", children: _.intl.string(_.t.vZ8y7l) }),
                      })
                    : null,
                (0, r.jsx)(o.Ay, {
                    className: f.__invalid_formItem,
                    onBillingAddressChange: h,
                    error: p,
                    layout: t,
                    ...n,
                }),
            ],
        })
    );
};
