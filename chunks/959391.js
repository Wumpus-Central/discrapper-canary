"use strict";
n.d(t, { n: () => m });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(450233),
    l = n(813077),
    u = n(773669),
    c = n(287809),
    d = n(615405),
    _ = n(493822),
    f = n(652215),
    p = n(985018),
    h = n(525318);
let m = (e) => {
    let t,
        { billingAddressInfo: n, billingError: m, onBillingAddressChange: E, paymentSourceType: g } = e,
        A = null != m && (null == m.code || (0, _.ou)(m) === _.gj.ADDRESS),
        I = (0, s.bG)([u.default], () => u.default.locale);
    switch (g) {
        case f.hes.GIROPAY:
        case f.hes.PAYSAFE_CARD:
        case f.hes.GCASH:
        case f.hes.GRABPAY_MY:
        case f.hes.MOMO_WALLET:
        case f.hes.KAKAOPAY:
        case f.hes.GOPAY_WALLET:
        case f.hes.BANCONTACT:
            t = "en-US" === I ? o.Ay.Layouts.MODAL_US_WITH_NAME : o.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case f.hes.VENMO:
        case f.hes.CASH_APP:
            t = o.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === I ? o.Ay.Layouts.MODAL_US : o.Ay.Layouts.MODAL_INTL;
    }
    let T = (0, s.bG)([d.A], () => d.A.ipCountryCode),
        S = (0, s.bG)([c.default], () => c.default.getCurrentUser()?.storeCountry),
        y = (0, l.wI)("AddressStep") && S?.isLocked === !0 ? S.country : null;
    return (
        0 === n.country.length && (n.country = y ?? T ?? ""),
        (0, r.jsxs)(i.Fragment, {
            children: [
                A
                    ? (0, r.jsx)("div", {
                          className: h.QK,
                          children: (0, r.jsx)(a.wx6, { type: "critical", children: p.intl.string(p.t.vZ8y7l) }),
                      })
                    : null,
                (0, r.jsx)(o.Ay, {
                    className: h.__invalid_formItem,
                    onBillingAddressChange: E,
                    error: m,
                    layout: t,
                    lockedStoreCountry: y,
                    ...n,
                }),
            ],
        })
    );
};
