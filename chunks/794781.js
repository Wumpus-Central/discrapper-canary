"use strict";
n.d(t, { A: () => f });
var i = n(29583),
    r = n(618027),
    s = n(439372),
    a = n(927813),
    o = n(961250),
    l = n(532309),
    u = n(636592);
let c = 5 * a.A.Millis.MINUTE,
    d = 30 * a.A.Millis.SECOND;
class _ extends s.A {
    intervalId;
    newSubscriptionTimeoutId;
    virtualCurrencyUpdateTimeoutId;
    actions = {
        POST_CONNECTION_OPEN: () => this._initializeProgramRewards(),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, o.uM)(),
        BILLING_SUBSCRIPTION_CANCEL_SUCCESS: () => (0, o.uM)(),
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: () => this._handleNewSubscription(),
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: () => (0, o.uM)(),
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: () => (0, o.uM)(),
        VIRTUAL_CURRENCY_BALANCE_UPDATE: () => this._handleVirtualCurrencyUpdate(),
    };
    _handleVirtualCurrencyUpdate() {
        null != this.virtualCurrencyUpdateTimeoutId && clearTimeout(this.virtualCurrencyUpdateTimeoutId),
            (this.virtualCurrencyUpdateTimeoutId = setTimeout(() => {
                (0, o.uM)(), (this.virtualCurrencyUpdateTimeoutId = void 0);
            }, d));
    }
    _handleNewSubscription() {
        (0, o.uM)(),
            null != this.newSubscriptionTimeoutId && clearTimeout(this.newSubscriptionTimeoutId),
            (this.newSubscriptionTimeoutId = setTimeout(() => {
                (0, o.uM)(), (this.newSubscriptionTimeoutId = void 0);
            }, c));
    }
    _initializeProgramRewards() {
        let e = l.A.getRewardForProgram(u.W.NITRO),
            t = e?.next_reward_date;
        null == e ||
        (null != t &&
            (function (e) {
                return (0, r.A)(1, arguments), (0, i.default)(e).getTime() < Date.now();
            })(new Date(t)))
            ? (0, o.uM)()
            : (0, o.Ay)(),
            null != this.intervalId && clearInterval(this.intervalId),
            (this.intervalId = setInterval(() => {
                (0, o.Ay)();
            }, a.A.Millis.HOUR));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0)),
            null != this.newSubscriptionTimeoutId &&
                (clearTimeout(this.newSubscriptionTimeoutId), (this.newSubscriptionTimeoutId = void 0)),
            null != this.virtualCurrencyUpdateTimeoutId &&
                (clearTimeout(this.virtualCurrencyUpdateTimeoutId), (this.virtualCurrencyUpdateTimeoutId = void 0));
    }
}
let f = new _();
