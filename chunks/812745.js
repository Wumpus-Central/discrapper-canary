s.d(t, { Ay: () => h, Be: () => p, Nj: () => x, y3: () => f });
var n,
    r = s(477900),
    a = s(582128),
    i = s(503698),
    l = s.n(i),
    c = s(355522),
    u = s(37766),
    o = s(637956),
    d = s(352224),
    m = s(509115),
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
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dark";
    if ("light" === t) {
        if ("apple" === e) return s(685430);
        if ("venmo" === e) return s(779777);
    }
    switch (e) {
        case "visa":
            return s(998723);
        case "amex":
            return s(44377);
        case "discover":
            return s(216329);
        case "mastercard":
            return s(2832);
        case "paypal":
            return s(331273);
        case "paymentRequest":
            return s(414456);
        case "gPay":
            return s(696551);
        case "sofort":
            return s(320648);
        case "przelewy24":
            return s(418971);
        case "giropay":
            return s(856718);
        case "paysafecard":
            return s(130512);
        case "gcash":
            return s(446409);
        case "grabpay":
            return s(238355);
        case "momo_wallet":
            return s(510669);
        case "venmo":
            return s(280427);
        case "kakaopay":
            return s(503714);
        case "gopay_wallet":
            return s(235323);
        case "bancontact":
            return s(999776);
        case "eps":
            return s(116129);
        case "ideal":
            return s(147496);
        case "cash_app":
            return s(464568);
        case "apple":
            return s(685430);
        case "apple_light":
            return s(545350);
        default:
            return s(511403);
    }
}
let f = { SMALL: m.cardIconSmall, MEDIUM: m.cardIconMedium, LARGE: m.cardIconLarge, XLARGE: m.cardIconXLarge };
class C extends a.PureComponent {
    static Types = p;
    static Sizes = f;
    static getType(e) {
        return null == e ? "unknown" : p[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    static defaultProps = { size: f.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: t, className: s, size: n } = this.props;
        return "bank" === t
            ? (0, r.jsx)(c.M, { className: s })
            : "gift_card" === t
              ? (0, r.jsx)(u._, { className: s, size: "lg" })
              : "pix" === t
                ? (0, r.jsx)(o.W, { className: s, size: "lg" })
                : "ideal" === t
                  ? (0, r.jsx)(d.E, { className: s, size: "lg" })
                  : (0, r.jsx)("div", {
                        "aria-hidden": !0,
                        className: l()(n, m[t], s, { [m.flipped]: e }),
                        children: t,
                    });
    }
}
let h = C;
