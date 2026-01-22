n.d(t, { Ay: () => s });
var r = n(315069);
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
class a extends r.A {
    static createFromServer(e) {
        return new a({
            userId: e.user_id,
            subscriptionId: e.subscription_id,
            oldCurrency: e.old_currency,
            oldPrice: e.old_price,
            newCurrency: e.new_currency,
            newPrice: e.new_price,
            priceChangeMode: e.price_change_mode,
            expectedChargeTime: e.expected_charge_time,
            priceChangeId: e.price_change_id,
        });
    }
    get isPriceIncrease() {
        return "PRICE_INCREASE" === this.priceChangeMode || "OPT_OUT_PRICE_INCREASE" === this.priceChangeMode;
    }
    get isOptOutPriceIncrease() {
        return "OPT_OUT_PRICE_INCREASE" === this.priceChangeMode;
    }
    get isPriceDecrease() {
        return "PRICE_DECREASE" === this.priceChangeMode;
    }
    get isInFuture() {
        return this.expectedChargeTime > new Date().toISOString();
    }
    constructor(e) {
        super(),
            i(this, "userId", void 0),
            i(this, "subscriptionId", void 0),
            i(this, "oldCurrency", void 0),
            i(this, "oldPrice", void 0),
            i(this, "newCurrency", void 0),
            i(this, "newPrice", void 0),
            i(this, "priceChangeMode", void 0),
            i(this, "expectedChargeTime", void 0),
            i(this, "priceChangeId", void 0),
            (this.userId = e.userId),
            (this.subscriptionId = e.subscriptionId),
            (this.oldCurrency = e.oldCurrency),
            (this.oldPrice = e.oldPrice),
            (this.newCurrency = e.newCurrency),
            (this.newPrice = e.newPrice),
            (this.priceChangeMode = e.priceChangeMode),
            (this.expectedChargeTime = e.expectedChargeTime),
            (this.priceChangeId = e.priceChangeId);
    }
}
let s = a;
