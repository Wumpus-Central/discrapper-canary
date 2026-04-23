"use strict";
n.d(t, { Ay: () => p, Be: () => c, Nj: () => d, y3: () => _ });
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(355522),
    u = n(34382),
    c =
        (((r = {}).UNKNOWN = "unknown"),
        (r.VISA = "visa"),
        (r.DISCOVER = "discover"),
        (r.MASTERCARD = "mastercard"),
        (r.AMEX = "amex"),
        (r.PAYPAL = "paypal"),
        (r.PAYMENT_REQUEST = "paymentRequest"),
        (r.G_PAY = "gPay"),
        (r.DINERS = "diners"),
        (r.JCB = "jcb"),
        (r.UNIONPAY = "unionpay"),
        (r.SOFORT = "sofort"),
        (r.PRZELEWY24 = "przelewy24"),
        (r.GIROPAY = "giropay"),
        (r.PAYSAFECARD = "paysafecard"),
        (r.GCASH = "gcash"),
        (r.GRABPAY = "grabpay"),
        (r.MOMO_WALLET = "momo_wallet"),
        (r.VENMO = "venmo"),
        (r.KAKAOPAY = "kakaopay"),
        (r.GOPAY_WALLET = "gopay_wallet"),
        (r.BANCONTACT = "bancontact"),
        (r.EPS = "eps"),
        (r.IDEAL = "ideal"),
        (r.CASH_APP = "cash_app"),
        (r.APPLE = "apple"),
        (r.APPLE_LIGHT = "apple_light"),
        (r.BANK = "bank"),
        r);
function d(e) {
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
            return n(242187);
        case "apple":
            return n(685430);
        case "apple_light":
            return n(545350);
        default:
            return n(511403);
    }
}
let _ = { SMALL: u.cardIconSmall, MEDIUM: u.cardIconMedium, LARGE: u.cardIconLarge, XLARGE: u.cardIconXLarge };
class f extends s.PureComponent {
    static Types = c;
    static Sizes = _;
    static getType(e) {
        return null == e ? "unknown" : c[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    static defaultProps = { size: _.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: t, className: n, size: r } = this.props;
        return "bank" === t
            ? (0, i.jsx)(l.M, { className: n })
            : (0, i.jsx)("div", { className: o()(r, u[t], n, { [u.flipped]: e }), children: t });
    }
}
let p = f;
