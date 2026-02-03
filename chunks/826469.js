n.d(t, {
    A: () => a,
}),
    n(938796);
var r = n(202613);

function i(e, t, n) {
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
class a {
    get id() {
        return this.source.id;
    }
    get type() {
        return this.source.type;
    }
    get paymentGateway() {
        return this.source.paymentGateway;
    }
    static createFromCheckoutContext(e) {
        var t;
        let n = {
            id: e.id,
            type: e.type,
            invalid: e.invalid,
            flags: e.flags,
            default: e.default,
            country: e.country,
            payment_gateway: e.payment_gateway,
            billing_address: null != (t = e.billing_address) ? t : {},
            brand: e.brand,
            last_4: e.last_4,
            expires_month: e.expires_month,
            expires_year: e.expires_year,
            email: e.email,
            username: e.username,
            bank: e.bank,
        };
        return new a(r.Ay.createFromServer(n), e.enabled, e.allowed_currencies);
    }
    constructor(e, t, n) {
        i(this, "source", void 0),
            i(this, "enabled", void 0),
            i(this, "allowedCurrencies", void 0),
            (this.source = e),
            (this.enabled = t),
            (this.allowedCurrencies = n);
    }
}
