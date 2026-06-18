"use strict";
n.d(t, { Ay: () => p, Be: () => d, Nj: () => _, y3: () => h });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(355522),
    u = n(37766),
    c = n(34382),
    d =
        (((i = {}).UNKNOWN = "unknown"),
        (i.VISA = "visa"),
        (i.DISCOVER = "discover"),
        (i.MASTERCARD = "mastercard"),
        (i.AMEX = "amex"),
        (i.PAYPAL = "paypal"),
        (i.PAYMENT_REQUEST = "paymentRequest"),
        (i.G_PAY = "gPay"),
        (i.DINERS = "diners"),
        (i.JCB = "jcb"),
        (i.UNIONPAY = "unionpay"),
        (i.SOFORT = "sofort"),
        (i.PRZELEWY24 = "przelewy24"),
        (i.GIROPAY = "giropay"),
        (i.PAYSAFECARD = "paysafecard"),
        (i.GCASH = "gcash"),
        (i.GRABPAY = "grabpay"),
        (i.MOMO_WALLET = "momo_wallet"),
        (i.VENMO = "venmo"),
        (i.KAKAOPAY = "kakaopay"),
        (i.GOPAY_WALLET = "gopay_wallet"),
        (i.BANCONTACT = "bancontact"),
        (i.EPS = "eps"),
        (i.IDEAL = "ideal"),
        (i.CASH_APP = "cash_app"),
        (i.APPLE = "apple"),
        (i.APPLE_LIGHT = "apple_light"),
        (i.BANK = "bank"),
        (i.GIFT_CARD = "gift_card"),
        i);
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dark";
    if ("light" === t) {
        if ("apple" === e) return n(685430);
        if ("venmo" === e) return n(779777);
    }
    switch (e) {
        case "visa":
            return n(998723);
        case "amex":
            return n(44377);
        case "discover":
            return n(216329);
        case "mastercard":
            return n(2832);
        case "paypal":
            return n(331273);
        case "paymentRequest":
            return n(414456);
        case "gPay":
            return n(696551);
        case "sofort":
            return n(320648);
        case "przelewy24":
            return n(418971);
        case "giropay":
            return n(856718);
        case "paysafecard":
            return n(130512);
        case "gcash":
            return n(446409);
        case "grabpay":
            return n(238355);
        case "momo_wallet":
            return n(510669);
        case "venmo":
            return n(280427);
        case "kakaopay":
            return n(503714);
        case "gopay_wallet":
            return n(235323);
        case "bancontact":
            return n(999776);
        case "eps":
            return n(116129);
        case "ideal":
            return n(147496);
        case "cash_app":
            return n(464568);
        case "apple":
            return n(685430);
        case "apple_light":
            return n(545350);
        default:
            return n(511403);
    }
}
let h = { SMALL: c.cardIconSmall, MEDIUM: c.cardIconMedium, LARGE: c.cardIconLarge, XLARGE: c.cardIconXLarge };
class f extends s.PureComponent {
    static Types = d;
    static Sizes = h;
    static getType(e) {
        return null == e ? "unknown" : d[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    static defaultProps = { size: h.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: t, className: n, size: i } = this.props;
        return "bank" === t
            ? (0, r.jsx)(l.M, { className: n })
            : "gift_card" === t
              ? (0, r.jsx)(u._, { className: n, size: "lg" })
              : (0, r.jsx)("div", { "aria-hidden": !0, className: o()(i, c[t], n, { [c.flipped]: e }), children: t });
    }
}
let p = f;
