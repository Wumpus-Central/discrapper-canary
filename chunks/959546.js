n.d(t, { Z: () => l });
var i = n(81825),
    r = n(74538),
    a = n(659181),
    s = n(981631);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class l extends i.Z {
    static createFromServer(e) {
        var t, n, i;
        return new l({
            id: e.id,
            skuId: e.sku_id,
            applicationId: e.application_id,
            userId: e.user_id,
            gifterId: e.gifter_user_id,
            type: e.type,
            branches: null !== (t = e.branches) && void 0 !== t ? t : [],
            startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
            endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
            subscriptionId: e.subscription_id,
            subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : null,
            parentId: null != e.parent_id ? e.parent_id : null,
            consumed: null != e.consumed ? e.consumed : null,
            giftCodeBatchId: null !== (n = e.gift_code_batch_id) && void 0 !== n ? n : null,
            giftStyle: e.gift_style,
            guildId: e.guild_id,
            deleted: e.deleted,
            sku: null != e.sku ? a.Z.createFromServer(e.sku) : null,
            sourceType: null !== (i = e.source_type) && void 0 !== i ? i : null
        });
    }
    get isGiftable() {
        return this.type === s.qc2.USER_GIFT && null == this.gifterId;
    }
    isValid(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (this.isGiftable || this.deleted) return !1;
        if (this.type === s.qc2.PREMIUM_SUBSCRIPTION) {
            let n = t.get(this.skuId);
            if ((null != n && !n.premium) || !r.ZP.canInstallPremiumApplications(e)) return !1;
        }
        let i = new Date();
        if ((null != this.startsAt && i < this.startsAt) || (null != this.endsAt && i >= this.endsAt)) return !1;
        if (null != n) {
            if (0 === this.branches.length) {
                if (this.applicationId !== n) return !1;
            } else if (!this.branches.includes(n)) return !1;
        }
        return !0;
    }
    constructor(e) {
        super(), o(this, 'id', void 0), o(this, 'skuId', void 0), o(this, 'applicationId', void 0), o(this, 'userId', void 0), o(this, 'gifterId', void 0), o(this, 'type', void 0), o(this, 'branches', void 0), o(this, 'startsAt', void 0), o(this, 'endsAt', void 0), o(this, 'subscriptionId', void 0), o(this, 'subscriptionPlanId', void 0), o(this, 'parentId', void 0), o(this, 'consumed', void 0), o(this, 'giftCodeBatchId', void 0), o(this, 'giftStyle', void 0), o(this, 'guildId', void 0), o(this, 'deleted', void 0), o(this, 'sourceType', void 0), (this.id = e.id), (this.skuId = e.skuId), (this.applicationId = e.applicationId), (this.userId = e.userId), (this.gifterId = e.gifterId), (this.type = e.type), (this.branches = e.branches), (this.startsAt = e.startsAt), (this.endsAt = e.endsAt), (this.subscriptionId = e.subscriptionId), (this.subscriptionPlanId = e.subscriptionPlanId), (this.parentId = e.parentId), (this.consumed = e.consumed), (this.giftCodeBatchId = e.giftCodeBatchId), (this.giftStyle = e.giftStyle), (this.guildId = e.guildId), (this.deleted = e.deleted), (this.sourceType = e.sourceType);
    }
}
