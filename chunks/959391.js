n.d(t, { n: () => A });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(683071),
    s = n(450233),
    o = n(546605),
    u = n(116673),
    c = n(773669),
    d = n(493822),
    p = n(652215),
    m = n(985018),
    h = n(723429);
let A = (e) => {
    let t,
        { billingAddressInfo: n, billingError: A, onBillingAddressChange: _, paymentSourceType: C } = e,
        E = null != A && (null == A.code || (0, d.ou)(A) === d.gj.ADDRESS),
        y = (0, a.bG)([c.default], () => c.default.locale);
    switch (C) {
        case p.hes.GIROPAY:
        case p.hes.PAYSAFE_CARD:
        case p.hes.GCASH:
        case p.hes.GRABPAY_MY:
        case p.hes.MOMO_WALLET:
        case p.hes.KAKAOPAY:
        case p.hes.GOPAY_WALLET:
        case p.hes.BANCONTACT:
            t = "en-US" === y ? s.Ay.Layouts.MODAL_US_WITH_NAME : s.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case p.hes.VENMO:
        case p.hes.CASH_APP:
            t = s.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === y ? s.Ay.Layouts.MODAL_US : s.Ay.Layouts.MODAL_INTL;
    }
    let f = (0, o.vg)("AddressStep"),
        P = (0, u.z)();
    return (
        0 === n.country.length && null != P && P.length > 0 && (n.country = P[0]),
        (0, l.jsxs)(i.Fragment, {
            children: [
                E
                    ? (0, l.jsx)("div", {
                          className: h.QK,
                          children: (0, l.jsx)(r.w, { type: "critical", children: m.intl.string(m.t.vZ8y7l) }),
                      })
                    : null,
                (0, l.jsx)(s.Ay, {
                    className: h.__invalid_formItem,
                    onBillingAddressChange: _,
                    error: A,
                    layout: t,
                    allowedBillingAddressCountries: P,
                    ...n,
                }),
                f && null != P && P.length > 0
                    ? (0, l.jsx)(r.w, { type: "info", children: m.intl.string(m.t.Pg2hU0) })
                    : null,
            ],
        })
    );
};
