"use strict";
n.d(t, { Ay: () => l, m1: () => o, n_: () => a });
var i = n(315069),
    r = n(788868);
class s extends i.A {
    id;
    name;
    interval;
    intervalCount;
    taxInclusive;
    skuId;
    currency;
    price;
    prices;
    static createFromServer(e) {
        let t = {};
        return (
            null != e.prices &&
                (t = Object.keys(e.prices).reduce((t, n) => {
                    if (null == e.prices) return t;
                    let i = e.prices[n];
                    return (
                        (t[n] = {
                            countryPrices: {
                                countryCode: i.country_prices.country_code,
                                prices: i.country_prices.prices.map((t) => a(t, e.tax_inclusive)),
                            },
                            paymentSourcePrices: Object.entries(i.payment_source_prices).reduce((t, n) => {
                                let [i, r] = n;
                                return (t[i] = r.map((t) => a(t, e.tax_inclusive))), t;
                            }, {}),
                        }),
                        t
                    );
                }, {})),
            new s({
                id: e.id,
                name: e.name,
                interval: e.interval,
                intervalCount: e.interval_count,
                taxInclusive: e.tax_inclusive,
                skuId: e.sku_id,
                currency: e.currency,
                price: e.price,
                prices: t,
            })
        );
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.interval = e.interval),
            (this.intervalCount = e.intervalCount),
            (this.taxInclusive = e.taxInclusive),
            (this.skuId = e.skuId),
            (this.currency = e.currency),
            (this.price = e.price),
            (this.prices = e.prices);
    }
    get premiumSubscriptionType() {
        switch (this.skuId) {
            case r.pe.LEGACY:
            case r.pe.TIER_2:
                return r.PremiumTypes.TIER_2;
            case r.pe.TIER_1:
                return r.PremiumTypes.TIER_1;
            case r.pe.TIER_0:
                return r.PremiumTypes.TIER_0;
            default:
                return null;
        }
    }
    toServerData() {
        let e = {};
        return (
            Object.keys(this.prices).forEach((t) => {
                let n = this.prices[t];
                e[t] = {
                    country_prices: { country_code: n.countryPrices.countryCode, prices: n.countryPrices.prices },
                    payment_source_prices: n.paymentSourcePrices,
                };
            }),
            {
                id: this.id,
                name: this.name,
                sku_id: this.skuId,
                interval: this.interval,
                interval_count: this.intervalCount,
                tax_inclusive: this.taxInclusive,
                currency: this.currency,
                price: this.price,
                prices: e,
                price_tier: this.price,
            }
        );
    }
}
function a(e, t) {
    return { amount: e.amount, currency: e.currency, tax: 0, taxInclusive: t };
}
function o(e) {
    return [r.gD.NONE_MONTH, r.gD.NONE_3_MONTH, r.gD.NONE_6_MONTH, r.gD.NONE_YEAR].includes(e);
}
let l = s;
