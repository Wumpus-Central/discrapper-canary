n.d(t, {
    Ay: () => _,
    Be: () => u,
    Nj: () => d,
    y3: () => f,
}),
    n(747238),
    n(812715);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(666817);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var u = (function (e) {
    return (
        (e.UNKNOWN = "unknown"),
        (e.VISA = "visa"),
        (e.DISCOVER = "discover"),
        (e.MASTERCARD = "mastercard"),
        (e.AMEX = "amex"),
        (e.PAYPAL = "paypal"),
        (e.PAYMENT_REQUEST = "paymentRequest"),
        (e.G_PAY = "gPay"),
        (e.DINERS = "diners"),
        (e.JCB = "jcb"),
        (e.UNIONPAY = "unionpay"),
        (e.SOFORT = "sofort"),
        (e.PRZELEWY24 = "przelewy24"),
        (e.GIROPAY = "giropay"),
        (e.PAYSAFECARD = "paysafecard"),
        (e.GCASH = "gcash"),
        (e.GRABPAY = "grabpay"),
        (e.MOMO_WALLET = "momo_wallet"),
        (e.VENMO = "venmo"),
        (e.KAKAOPAY = "kakaopay"),
        (e.GOPAY_WALLET = "gopay_wallet"),
        (e.BANCONTACT = "bancontact"),
        (e.EPS = "eps"),
        (e.IDEAL = "ideal"),
        (e.CASH_APP = "cash_app"),
        (e.APPLE = "apple"),
        (e.APPLE_LIGHT = "apple_light"),
        e
    );
})({});

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
let f = {
    SMALL: l.cardIconSmall,
    MEDIUM: l.cardIconMedium,
    LARGE: l.cardIconLarge,
    XLARGE: l.cardIconXLarge,
};
class p extends (r = a.PureComponent) {
    static getType(e) {
        return null == e ? "unknown" : u[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    render() {
        let { flipped: e, type: t, className: n, size: r } = this.props;
        return (0, i.jsx)("div", {
            className: o()(r, l[t], n, {
                [l.flipped]: e,
            }),
            children: t,
        });
    }
}
c(p, "Types", u),
    c(p, "Sizes", f),
    c(p, "defaultProps", {
        size: f.SMALL,
        flipped: !1,
    });
let _ = p;
