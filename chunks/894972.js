"use strict";
n.d(t, { Ay: () => s });
var r = n(315069);
class i extends r.A {
    userId;
    subscriptionId;
    oldCurrency;
    oldPrice;
    newCurrency;
    newPrice;
    priceChangeMode;
    expectedChargeTime;
    priceChangeId;
    static createFromServer(e) {
        return new i({
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
    constructor(e) {
        super(),
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
}
let s = i;
