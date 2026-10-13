(n.d(t, { Ay: () => I, Be: () => p, Nj: () => f, y3: () => v }), n(205816));
var r,
    i = n(477900),
    a = n(582128),
    l = n(503698),
    s = n.n(l),
    u = n(355522),
    c = n(37766),
    o = n(637956),
    d = n(352224),
    m = n(509115),
    p =
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
let v = { SMALL: m.cardIconSmall, MEDIUM: m.cardIconMedium, LARGE: m.cardIconLarge, XLARGE: m.cardIconXLarge };
class g extends a.PureComponent {
    static Types = p;
    static Sizes = v;
    static getType(e) {
        if (null == e) return "unknown";
        let t = e.replace(/[^a-z0-9_]/gi, "").toUpperCase();
        return Object.hasOwn(p, t) ? p[t] : "unknown";
    }
    static defaultProps = { size: v.SMALL, flipped: !1 };
    render() {
        let { flipped: e, type: t, className: n, size: r } = this.props;
        return "bank" === t
            ? (0, i.jsx)(u.M, { className: n })
            : "gift_card" === t
              ? (0, i.jsx)(c._, { className: n, size: "lg" })
              : "pix" === t
                ? (0, i.jsx)(o.W, { className: n, size: "lg" })
                : "ideal" === t
                  ? (0, i.jsx)(d.E, { className: n, size: "lg" })
                  : (0, i.jsx)("div", {
                        "aria-hidden": !0,
                        className: s()(r, m[t], n, { [m.flipped]: e }),
                        children: t,
                    });
    }
}
let I = g;
