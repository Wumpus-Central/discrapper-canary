"use strict";
n.d(t, { A: () => i }), n(938796);
var r = n(202613);
class i {
    source;
    enabled;
    allowedCurrencies;
    relocationCountry;
    constructor(e, t, n, r = null) {
        (this.source = e), (this.enabled = t), (this.allowedCurrencies = n), (this.relocationCountry = r);
    }
    get id() {
        return this.source.id;
    }
    get type() {
        return this.source.type;
    }
    get paymentGateway() {
        return this.source.paymentGateway;
    }
    get isDefault() {
        return this.source.isDefault;
    }
    static createFromCheckoutContext(e) {
        let t = {
            id: e.id,
            type: e.type,
            invalid: e.invalid,
            flags: e.flags,
            default: e.default,
            country: e.country,
            payment_gateway: e.payment_gateway,
            billing_address: e.billing_address ?? {},
            brand: e.brand,
            last_4: e.last_4,
            expires_month: e.expires_month,
            expires_year: e.expires_year,
            email: e.email,
            username: e.username,
            bank: e.bank,
        };
        return new i(r.Ay.createFromServer(t), e.enabled, e.allowed_currencies, e.relocation_country ?? null);
    }
}
