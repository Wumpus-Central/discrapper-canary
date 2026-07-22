n.d(t, { Ay: () => A, Be: () => f, Nj: () => p, y3: () => g });
var a,
    s = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    u = n(355522),
    o = n(37766),
    c = n(637956),
    d = n(352224),
    m = n(646838),
    f =
        (((a = {}).UNKNOWN = "unknown"),
        (a.VISA = "visa"),
        (a.DISCOVER = "discover"),
        (a.MASTERCARD = "mastercard"),
        (a.AMEX = "amex"),
        (a.PAYPAL = "paypal"),
        (a.PAYMENT_REQUEST = "paymentRequest"),
        (a.G_PAY = "gPay"),
        (a.DINERS = "diners"),
        (a.JCB = "jcb"),
        (a.UNIONPAY = "unionpay"),
        (a.SOFORT = "sofort"),
        (a.PRZELEWY24 = "przelewy24"),
        (a.GIROPAY = "giropay"),
        (a.PAYSAFECARD = "paysafecard"),
        (a.GCASH = "gcash"),
        (a.GRABPAY = "grabpay"),
        (a.MOMO_WALLET = "momo_wallet"),
        (a.VENMO = "venmo"),
        (a.KAKAOPAY = "kakaopay"),
        (a.GOPAY_WALLET = "gopay_wallet"),
        (a.BANCONTACT = "bancontact"),
        (a.EPS = "eps"),
        (a.IDEAL = "ideal"),
        (a.CASH_APP = "cash_app"),
        (a.APPLE = "apple"),
        (a.APPLE_LIGHT = "apple_light"),
        (a.BANK = "bank"),
        (a.GIFT_CARD = "gift_card"),
        (a.PIX = "pix"),
        a);
function p(e) {
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
let g = { SMALL: m.cardIconSmall, MEDIUM: m.cardIconMedium, LARGE: m.cardIconLarge, XLARGE: m.cardIconXLarge };
class x extends r.PureComponent {
    static Types = f;
    static Sizes = g;
    static getType(e) {
        return null == e ? "unknown" : f[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    static defaultProps = { size: g.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: t, className: n, size: a } = this.props;
        return "bank" === t
            ? (0, s.jsx)(u.M, { className: n })
            : "gift_card" === t
              ? (0, s.jsx)(o._, { className: n, size: "lg" })
              : "pix" === t
                ? (0, s.jsx)(c.W, { className: n, size: "lg" })
                : "ideal" === t
                  ? (0, s.jsx)(d.E, { className: n, size: "lg" })
                  : (0, s.jsx)("div", {
                        "aria-hidden": !0,
                        className: l()(a, m[t], n, { [m.flipped]: e }),
                        children: t,
                    });
    }
}
let A = x;
