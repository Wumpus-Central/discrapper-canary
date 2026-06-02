r.d(t, { A: () => a }), r(938796);
var n = r(202613);
class a {
    source;
    enabled;
    allowedCurrencies;
    relocationCountry;
    relocationCurrencyCode;
    willForfeitGiftCardBalance;
    constructor(e, t, r, n) {
        (this.source = e),
            (this.enabled = t),
            (this.allowedCurrencies = r),
            (this.relocationCountry = n?.country ?? null),
            (this.relocationCurrencyCode = n?.currencyCode ?? null),
            (this.willForfeitGiftCardBalance = n?.willForfeitGiftCardBalance ?? !1);
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
        return new a(n.Ay.createFromServer(t), e.enabled, e.allowed_currencies ?? [], {
            country: e.relocation_info?.country ?? null,
            currencyCode: e.relocation_info?.currency ?? null,
            willForfeitGiftCardBalance: e.relocation_info?.will_forfeit_gift_card_balance ?? !1,
        });
    }
}
