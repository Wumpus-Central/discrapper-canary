r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(789020);
var a = r(913527),
    o = r.n(a),
    s = r(81825),
    l = r(812206),
    u = r(630388),
    c = r(959546),
    d = r(981631);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = 'master';
class h extends s.Z {
    static createFromServer(e) {
        return new h({
            id: e.application.id,
            branchId: e.branch_id,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => c.Z.createFromServer(e)) : [],
            branch: e.branch,
            flags: e.flags,
            createdAt: e.created_at,
            sku: {
                id: e.sku.id,
                type: e.sku.type,
                premium: e.sku.premium,
                preorderReleaseAt: null != e.sku.preorder_release_at ? o()(e.sku.preorder_release_at) : null,
                preorderApproximateReleaseDate: null != e.sku.preorder_approximate_release_date ? e.sku.preorder_approximate_release_date : null
            }
        });
    }
    static createForTestMode(e) {
        return new h({
            id: e.id,
            entitlements: [],
            branchId: e.branch.id,
            branch: e.branch,
            flags: d.eHb.ENTITLED,
            createdAt: e.branch.created_at,
            sku: {
                id: e.skuId,
                type: d.epS.DURABLE_PRIMARY,
                premium: !1
            },
            isTestMode: !0
        });
    }
    getFlags() {
        return this.flags;
    }
    hasFlag(e) {
        return u.yE(this.flags, e);
    }
    isHidden() {
        return this.hasFlag(d.eHb.HIDDEN);
    }
    isOverlayEnabled() {
        return !this.hasFlag(d.eHb.OVERLAY_DISABLED);
    }
    isMasterBranch() {
        return this.branchId === this.id;
    }
    isDiscordApplication() {
        return !0;
    }
    isEntitled(e, n) {
        return !!this.isTestMode || this.entitlements.some((r) => r.isValid(e, n, this.branchId));
    }
    isPreorder() {
        return null != this.sku.preorderReleaseAt || null != this.sku.preorderApproximateReleaseDate;
    }
    getDistributor() {
        return d.GQo.DISCORD;
    }
    getBranchName() {
        return null != this.branch ? this.branch.name : p;
    }
    getBranchedName(e) {
        return this.isMasterBranch() || null == this.branch ? e.name : ''.concat(e.name, ' (').concat(this.branch.name, ')');
    }
    getSkuIdForAnalytics() {
        return this.sku.id;
    }
    getAnalyticsData() {
        let e = l.Z.getApplication(this.id);
        return {
            application_id: null != e ? e.id : null,
            application_name: null != e ? e.name : null,
            sku_id: this.getSkuIdForAnalytics(),
            launcher_platform: this.getDistributor()
        };
    }
    constructor(e) {
        super(), f(this, 'id', void 0), f(this, 'branchId', void 0), f(this, 'flags', void 0), f(this, 'createdAt', void 0), f(this, 'entitlements', void 0), f(this, 'branch', void 0), f(this, 'sku', void 0), f(this, 'isTestMode', void 0), (this.id = e.id), (this.createdAt = e.createdAt), (this.flags = e.flags), (this.branchId = e.branchId), (this.entitlements = e.entitlements), (this.branch = e.branch), (this.sku = e.sku), (this.isTestMode = e.isTestMode || !1);
    }
}
