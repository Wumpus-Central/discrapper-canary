n.d(t, { Z: () => u });
var r = n(361268),
    i = n(81825),
    a = n(74538),
    o = n(659181),
    s = n(598077),
    l = n(981631);
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
class u extends i.Z {
    static createFromServer(e) {
        var t, n, r, i;
        return new u({
            id: e.id,
            skuId: e.sku_id,
            applicationId: e.application_id,
            user: null != e.user ? new s.Z(e.user) : null,
            userId: e.user_id,
            gifterId: e.gifter_user_id,
            type: e.type,
            branches: null != (t = e.branches) ? t : [],
            startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
            endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
            subscriptionId: e.subscription_id,
            subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : null,
            parentId: null != e.parent_id ? e.parent_id : null,
            consumed: null != e.consumed ? e.consumed : null,
            giftCodeBatchId: null != (n = e.gift_code_batch_id) ? n : null,
            giftStyle: e.gift_style,
            guildId: e.guild_id,
            deleted: e.deleted,
            sku: null != e.sku ? o.Z.createFromServer(e.sku) : null,
            sourceType: null != (r = e.source_type) ? r : null,
            fulfillmentStatus: null != (i = e.fulfillment_status) ? i : null,
        });
    }
    get isGiftable() {
        return this.type === l.qc2.USER_GIFT && null == this.gifterId;
    }
    isValid(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (this.isGiftable || this.deleted) return !1;
        if (this.type === l.qc2.PREMIUM_SUBSCRIPTION) {
            let n = t.get(this.skuId);
            if ((null != n && !n.premium) || !a.ZP.canInstallPremiumApplications(e)) return !1;
        }
        let r = new Date();
        if ((null != this.startsAt && r < this.startsAt) || (null != this.endsAt && r >= this.endsAt)) return !1;
        if (null != n) {
            if (0 === this.branches.length) {
                if (this.applicationId !== n) return !1;
            } else if (!this.branches.includes(n)) return !1;
        }
        return !0;
    }
    isFulfilled() {
        return this.fulfillmentStatus === r.m.FULFILLED;
    }
    constructor(e) {
        super(),
            c(this, "id", void 0),
            c(this, "skuId", void 0),
            c(this, "applicationId", void 0),
            c(this, "user", void 0),
            c(this, "userId", void 0),
            c(this, "gifterId", void 0),
            c(this, "type", void 0),
            c(this, "branches", void 0),
            c(this, "startsAt", void 0),
            c(this, "endsAt", void 0),
            c(this, "subscriptionId", void 0),
            c(this, "subscriptionPlanId", void 0),
            c(this, "parentId", void 0),
            c(this, "consumed", void 0),
            c(this, "giftCodeBatchId", void 0),
            c(this, "giftStyle", void 0),
            c(this, "guildId", void 0),
            c(this, "deleted", void 0),
            c(this, "sourceType", void 0),
            c(this, "fulfillmentStatus", void 0),
            (this.id = e.id),
            (this.skuId = e.skuId),
            (this.applicationId = e.applicationId),
            (this.user = e.user),
            (this.userId = e.userId),
            (this.gifterId = e.gifterId),
            (this.type = e.type),
            (this.branches = e.branches),
            (this.startsAt = e.startsAt),
            (this.endsAt = e.endsAt),
            (this.subscriptionId = e.subscriptionId),
            (this.subscriptionPlanId = e.subscriptionPlanId),
            (this.parentId = e.parentId),
            (this.consumed = e.consumed),
            (this.giftCodeBatchId = e.giftCodeBatchId),
            (this.giftStyle = e.giftStyle),
            (this.guildId = e.guildId),
            (this.deleted = e.deleted),
            (this.sourceType = e.sourceType),
            (this.fulfillmentStatus = e.fulfillmentStatus);
    }
}
