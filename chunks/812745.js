n.d(t, { Ay: () => g, Be: () => d, Nj: () => m, y3: () => p });
var l,
    a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    u = n(355522),
    o = n(37766),
    c = n(34382),
    d =
        (((l = {}).UNKNOWN = "unknown"),
        (l.VISA = "visa"),
        (l.DISCOVER = "discover"),
        (l.MASTERCARD = "mastercard"),
        (l.AMEX = "amex"),
        (l.PAYPAL = "paypal"),
        (l.PAYMENT_REQUEST = "paymentRequest"),
        (l.G_PAY = "gPay"),
        (l.DINERS = "diners"),
        (l.JCB = "jcb"),
        (l.UNIONPAY = "unionpay"),
        (l.SOFORT = "sofort"),
        (l.PRZELEWY24 = "przelewy24"),
        (l.GIROPAY = "giropay"),
        (l.PAYSAFECARD = "paysafecard"),
        (l.GCASH = "gcash"),
        (l.GRABPAY = "grabpay"),
        (l.MOMO_WALLET = "momo_wallet"),
        (l.VENMO = "venmo"),
        (l.KAKAOPAY = "kakaopay"),
        (l.GOPAY_WALLET = "gopay_wallet"),
        (l.BANCONTACT = "bancontact"),
        (l.EPS = "eps"),
        (l.IDEAL = "ideal"),
        (l.CASH_APP = "cash_app"),
        (l.APPLE = "apple"),
        (l.APPLE_LIGHT = "apple_light"),
        (l.BANK = "bank"),
        (l.GIFT_CARD = "gift_card"),
        l);
function m(e) {
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
let p = { SMALL: c.cardIconSmall, MEDIUM: c.cardIconMedium, LARGE: c.cardIconLarge, XLARGE: c.cardIconXLarge };
class f extends r.PureComponent {
    static Types = d;
    static Sizes = p;
    static getType(e) {
        return null == e ? "unknown" : d[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    static defaultProps = { size: p.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: t, className: n, size: l } = this.props;
        return "bank" === t
            ? (0, a.jsx)(u.M, { className: n })
            : "gift_card" === t
              ? (0, a.jsx)(o._, { className: n, size: "lg" })
              : (0, a.jsx)("div", { "aria-hidden": !0, className: s()(l, c[t], n, { [c.flipped]: e }), children: t });
    }
}
let g = f;
