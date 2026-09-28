t.d(s, { Ay: () => f, Be: () => p, Nj: () => x, y3: () => C });
var n,
    r = t(477900),
    a = t(582128),
    i = t(503698),
    l = t.n(i),
    c = t(355522),
    u = t(37766),
    o = t(637956),
    d = t(352224),
    m = t(509115),
    p =
        (((n = {}).UNKNOWN = "unknown"),
        (n.VISA = "visa"),
        (n.DISCOVER = "discover"),
        (n.MASTERCARD = "mastercard"),
        (n.AMEX = "amex"),
        (n.PAYPAL = "paypal"),
        (n.PAYMENT_REQUEST = "paymentRequest"),
        (n.G_PAY = "gPay"),
        (n.DINERS = "diners"),
        (n.JCB = "jcb"),
        (n.UNIONPAY = "unionpay"),
        (n.SOFORT = "sofort"),
        (n.PRZELEWY24 = "przelewy24"),
        (n.GIROPAY = "giropay"),
        (n.PAYSAFECARD = "paysafecard"),
        (n.GCASH = "gcash"),
        (n.GRABPAY = "grabpay"),
        (n.MOMO_WALLET = "momo_wallet"),
        (n.VENMO = "venmo"),
        (n.KAKAOPAY = "kakaopay"),
        (n.GOPAY_WALLET = "gopay_wallet"),
        (n.BANCONTACT = "bancontact"),
        (n.EPS = "eps"),
        (n.IDEAL = "ideal"),
        (n.CASH_APP = "cash_app"),
        (n.APPLE = "apple"),
        (n.APPLE_LIGHT = "apple_light"),
        (n.BANK = "bank"),
        (n.GIFT_CARD = "gift_card"),
        (n.PIX = "pix"),
        n);
function x(e) {
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dark";
    if ("light" === s) {
        if ("apple" === e) return t(685430);
        if ("venmo" === e) return t(779777);
    }
    switch (e) {
        case "visa":
            return t(998723);
        case "amex":
            return t(44377);
        case "discover":
            return t(216329);
        case "mastercard":
            return t(2832);
        case "paypal":
            return t(331273);
        case "paymentRequest":
            return t(414456);
        case "gPay":
            return t(696551);
        case "sofort":
            return t(320648);
        case "przelewy24":
            return t(418971);
        case "giropay":
            return t(856718);
        case "paysafecard":
            return t(130512);
        case "gcash":
            return t(446409);
        case "grabpay":
            return t(238355);
        case "momo_wallet":
            return t(510669);
        case "venmo":
            return t(280427);
        case "kakaopay":
            return t(503714);
        case "gopay_wallet":
            return t(235323);
        case "bancontact":
            return t(999776);
        case "eps":
            return t(116129);
        case "ideal":
            return t(147496);
        case "cash_app":
            return t(464568);
        case "apple":
            return t(685430);
        case "apple_light":
            return t(545350);
        default:
            return t(511403);
    }
}
let C = { SMALL: m.cardIconSmall, MEDIUM: m.cardIconMedium, LARGE: m.cardIconLarge, XLARGE: m.cardIconXLarge };
class L extends a.PureComponent {
    static Types = p;
    static Sizes = C;
    static getType(e) {
        return null == e ? "unknown" : p[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    static defaultProps = { size: C.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: s, className: t, size: n } = this.props;
        return "bank" === s
            ? (0, r.jsx)(c.M, { className: t })
            : "gift_card" === s
              ? (0, r.jsx)(u._, { className: t, size: "lg" })
              : "pix" === s
                ? (0, r.jsx)(o.W, { className: t, size: "lg" })
                : "ideal" === s
                  ? (0, r.jsx)(d.E, { className: t, size: "lg" })
                  : (0, r.jsx)("div", {
                        "aria-hidden": !0,
                        className: l()(n, m[s], t, { [m.flipped]: e }),
                        children: s,
                    });
    }
}
let f = L;
