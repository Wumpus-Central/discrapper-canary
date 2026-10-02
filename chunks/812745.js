s.d(t, { Ay: () => I, Be: () => v, Nj: () => g, y3: () => x });
var r,
    n = s(477900),
    a = s(582128),
    i = s(503698),
    l = s.n(i),
    c = s(355522),
    u = s(37766),
    o = s(637956),
    d = s(352224),
    p = s(509115),
    v =
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
        (r.GIFT_CARD = "gift_card"),
        (r.PIX = "pix"),
        r);
function g(e) {
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
let x = { SMALL: p.cardIconSmall, MEDIUM: p.cardIconMedium, LARGE: p.cardIconLarge, XLARGE: p.cardIconXLarge };
class m extends a.PureComponent {
    static Types = v;
    static Sizes = x;
    static getType(e) {
        return null == e ? "unknown" : v[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    static defaultProps = { size: x.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: t, className: s, size: r } = this.props;
        return "bank" === t
            ? (0, n.jsx)(c.M, { className: s })
            : "gift_card" === t
              ? (0, n.jsx)(u._, { className: s, size: "lg" })
              : "pix" === t
                ? (0, n.jsx)(o.W, { className: s, size: "lg" })
                : "ideal" === t
                  ? (0, n.jsx)(d.E, { className: s, size: "lg" })
                  : (0, n.jsx)("div", {
                        "aria-hidden": !0,
                        className: l()(r, p[t], s, { [p.flipped]: e }),
                        children: t,
                    });
    }
}
let I = m;
