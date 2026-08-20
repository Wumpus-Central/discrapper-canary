n.d(t, { Ay: () => g, Be: () => p, Nj: () => f, y3: () => x });
var s,
    r = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    u = n(355522),
    c = n(37766),
    o = n(637956),
    d = n(352224),
    m = n(509115),
    p =
        (((s = {}).UNKNOWN = "unknown"),
        (s.VISA = "visa"),
        (s.DISCOVER = "discover"),
        (s.MASTERCARD = "mastercard"),
        (s.AMEX = "amex"),
        (s.PAYPAL = "paypal"),
        (s.PAYMENT_REQUEST = "paymentRequest"),
        (s.G_PAY = "gPay"),
        (s.DINERS = "diners"),
        (s.JCB = "jcb"),
        (s.UNIONPAY = "unionpay"),
        (s.SOFORT = "sofort"),
        (s.PRZELEWY24 = "przelewy24"),
        (s.GIROPAY = "giropay"),
        (s.PAYSAFECARD = "paysafecard"),
        (s.GCASH = "gcash"),
        (s.GRABPAY = "grabpay"),
        (s.MOMO_WALLET = "momo_wallet"),
        (s.VENMO = "venmo"),
        (s.KAKAOPAY = "kakaopay"),
        (s.GOPAY_WALLET = "gopay_wallet"),
        (s.BANCONTACT = "bancontact"),
        (s.EPS = "eps"),
        (s.IDEAL = "ideal"),
        (s.CASH_APP = "cash_app"),
        (s.APPLE = "apple"),
        (s.APPLE_LIGHT = "apple_light"),
        (s.BANK = "bank"),
        (s.GIFT_CARD = "gift_card"),
        (s.PIX = "pix"),
        s);
function f(e) {
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
let x = { SMALL: m.cardIconSmall, MEDIUM: m.cardIconMedium, LARGE: m.cardIconLarge, XLARGE: m.cardIconXLarge };
class v extends i.PureComponent {
    static Types = p;
    static Sizes = x;
    static getType(e) {
        return null == e ? "unknown" : p[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    static defaultProps = { size: x.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: t, className: n, size: s } = this.props;
        return "bank" === t
            ? (0, r.jsx)(u.M, { className: n })
            : "gift_card" === t
              ? (0, r.jsx)(c._, { className: n, size: "lg" })
              : "pix" === t
                ? (0, r.jsx)(o.W, { className: n, size: "lg" })
                : "ideal" === t
                  ? (0, r.jsx)(d.E, { className: n, size: "lg" })
                  : (0, r.jsx)("div", {
                        "aria-hidden": !0,
                        className: l()(s, m[t], n, { [m.flipped]: e }),
                        children: t,
                    });
    }
}
let g = v;
