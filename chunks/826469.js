n(938796);
var i = n(202613);
n.d(
    t,
    {},
    {
        A: class e {
            source;
            enabled;
            disabledReason;
            allowedCurrencies;
            relocationCountry;
            relocationCurrencyCode;
            willForfeitGiftCardBalance;
            constructor(e, t, n, i, r = null) {
                ((this.source = e),
                    (this.enabled = t),
                    (this.disabledReason = r),
                    (this.allowedCurrencies = n),
                    (this.relocationCountry = i?.country ?? null),
                    (this.relocationCurrencyCode = i?.currencyCode ?? null),
                    (this.willForfeitGiftCardBalance = i?.willForfeitGiftCardBalance ?? !1));
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
            static createFromCheckoutContext(t) {
                let n = {
                    id: t.id,
                    type: t.type,
                    invalid: t.invalid,
                    flags: t.flags,
                    default: t.default,
                    country: t.country,
                    payment_gateway: t.payment_gateway,
                    billing_address: t.billing_address ?? {},
                    brand: t.brand,
                    last_4: t.last_4,
                    expires_month: t.expires_month,
                    expires_year: t.expires_year,
                    email: t.email,
                    username: t.username,
                    bank: t.bank,
                };
                return new e(
                    i.Ay.createFromServer(n),
                    t.enabled,
                    t.allowed_currencies ?? [],
                    {
                        country: t.relocation_info?.country ?? null,
                        currencyCode: t.relocation_info?.currency ?? null,
                        willForfeitGiftCardBalance: t.relocation_info?.will_forfeit_gift_card_balance ?? !1,
                    },
                    t.disabled_reason ?? null,
                );
            }
        },
    },
);
