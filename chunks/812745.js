n.d(t, { Ay: () => x, Be: () => m, Nj: () => f, y3: () => p });
var r,
    a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    u = n(355522),
    o = n(37766),
    c = n(637956),
    d = n(287310),
    m =
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
let p = { SMALL: d.cardIconSmall, MEDIUM: d.cardIconMedium, LARGE: d.cardIconLarge, XLARGE: d.cardIconXLarge };
class g extends s.PureComponent {
    static Types = m;
    static Sizes = p;
    static getType(e) {
        return null == e ? "unknown" : m[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    static defaultProps = { size: p.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: t, className: n, size: r } = this.props;
        return "bank" === t
            ? (0, a.jsx)(u.M, { className: n })
            : "gift_card" === t
              ? (0, a.jsx)(o._, { className: n, size: "lg" })
              : "pix" === t
                ? (0, a.jsx)(c.W, { className: n, size: "lg" })
                : (0, a.jsx)("div", { "aria-hidden": !0, className: l()(r, d[t], n, { [d.flipped]: e }), children: t });
    }
}
let x = g;
