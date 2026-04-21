"use strict";
n.d(t, { n: () => h });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(450233),
    l = n(546605),
    u = n(116673),
    c = n(773669),
    d = n(493822),
    _ = n(652215),
    f = n(985018),
    p = n(723429);
let h = (e) => {
    let t,
        { billingAddressInfo: n, billingError: h, onBillingAddressChange: m, paymentSourceType: E } = e,
        g = null != h && (null == h.code || (0, d.ou)(h) === d.gj.ADDRESS),
        A = (0, s.bG)([c.default], () => c.default.locale);
    switch (E) {
        case _.hes.GIROPAY:
        case _.hes.PAYSAFE_CARD:
        case _.hes.GCASH:
        case _.hes.GRABPAY_MY:
        case _.hes.MOMO_WALLET:
        case _.hes.KAKAOPAY:
        case _.hes.GOPAY_WALLET:
        case _.hes.BANCONTACT:
            t = "en-US" === A ? o.Ay.Layouts.MODAL_US_WITH_NAME : o.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case _.hes.VENMO:
        case _.hes.CASH_APP:
            t = o.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === A ? o.Ay.Layouts.MODAL_US : o.Ay.Layouts.MODAL_INTL;
    }
    let I = (0, l.vg)("AddressStep"),
        T = (0, u.z)();
    return (
        0 === n.country.length && null != T && T.length > 0 && (n.country = T[0]),
        (0, r.jsxs)(i.Fragment, {
            children: [
                g
                    ? (0, r.jsx)("div", {
                          className: p.QK,
                          children: (0, r.jsx)(a.wx6, { type: "critical", children: f.intl.string(f.t.vZ8y7l) }),
                      })
                    : null,
                (0, r.jsx)(o.Ay, {
                    className: p.__invalid_formItem,
                    onBillingAddressChange: m,
                    error: h,
                    layout: t,
                    allowedBillingAddressCountries: T,
                    ...n,
                }),
                I && null != T && T.length > 0
                    ? (0, r.jsx)(a.wx6, { type: "info", children: f.intl.string(f.t.Pg2hU0) })
                    : null,
            ],
        })
    );
};
