"use strict";
n.d(t, { A: () => a });
var i = n(315069),
    r = n(310507);
class a extends i.A {
    id;
    userId;
    trialId;
    expiresAt;
    referrerId;
    referrer;
    subscriptionTrial;
    redeemedAt;
    static createFromServer(e) {
        return new a({
            id: e.id,
            userId: e.user_id,
            trialId: e.trial_id,
            expiresAt: null != e.expires_at ? new Date(e.expires_at) : null,
            referrerId: e.referrer_id ?? null,
            referrer: e.referrer ?? null,
            subscriptionTrial: null != e.subscription_trial ? r.A.createFromServer(e.subscription_trial) : null,
            redeemedAt: null != e.redeemed_at ? new Date(e.redeemed_at) : null,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.userId = e.userId),
            (this.trialId = e.trialId),
            (this.expiresAt = e.expiresAt ?? null),
            (this.referrerId = e.referrerId ?? null),
            (this.referrer = e.referrer ?? null),
            (this.subscriptionTrial = e.subscriptionTrial ?? null),
            (this.redeemedAt = e.redeemedAt ?? null);
    }
    hasExpired() {
        return null != this.expiresAt && Date.now() > this.expiresAt.getTime();
    }
    isRedeemed() {
        return null != this.redeemedAt;
    }
}
