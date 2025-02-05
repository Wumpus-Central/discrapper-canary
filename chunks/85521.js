n.d(t, { Z: () => f }), n(789020);
var i = n(913527),
    r = n.n(i),
    a = n(81825),
    s = n(812206),
    o = n(630388),
    l = n(959546),
    u = n(981631);
function c(e, t, n) {
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
let d = 'master';
class f extends a.Z {
    static createFromServer(e) {
        return new f({
            id: e.application.id,
            branchId: e.branch_id,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => l.Z.createFromServer(e)) : [],
            branch: e.branch,
            flags: e.flags,
            createdAt: e.created_at,
            sku: {
                id: e.sku.id,
                type: e.sku.type,
                premium: e.sku.premium,
                preorderReleaseAt: null != e.sku.preorder_release_at ? r()(e.sku.preorder_release_at) : null,
                preorderApproximateReleaseDate: null != e.sku.preorder_approximate_release_date ? e.sku.preorder_approximate_release_date : null
            }
        });
    }
    static createForTestMode(e) {
        return new f({
            id: e.id,
            entitlements: [],
            branchId: e.branch.id,
            branch: e.branch,
            flags: u.eHb.ENTITLED,
            createdAt: e.branch.created_at,
            sku: {
                id: e.skuId,
                type: u.epS.DURABLE_PRIMARY,
                premium: !1
            },
            isTestMode: !0
        });
    }
    getFlags() {
        return this.flags;
    }
    hasFlag(e) {
        return o.yE(this.flags, e);
    }
    isHidden() {
        return this.hasFlag(u.eHb.HIDDEN);
    }
    isLegacyOverlayEnabled() {
        return !this.hasFlag(u.eHb.OVERLAY_DISABLED);
    }
    isOverlayV3Enabled() {
        return !this.hasFlag(u.eHb.OVERLAY_V3_DISABLED);
    }
    isOverlayEnabled() {
        return this.isLegacyOverlayEnabled() || this.isOverlayV3Enabled();
    }
    isMasterBranch() {
        return this.branchId === this.id;
    }
    isDiscordApplication() {
        return !0;
    }
    isEntitled(e, t) {
        return !!this.isTestMode || this.entitlements.some((n) => n.isValid(e, t, this.branchId));
    }
    isPreorder() {
        return null != this.sku.preorderReleaseAt || null != this.sku.preorderApproximateReleaseDate;
    }
    getDistributor() {
        return u.GQo.DISCORD;
    }
    getBranchName() {
        return null != this.branch ? this.branch.name : d;
    }
    getBranchedName(e) {
        return this.isMasterBranch() || null == this.branch ? e.name : ''.concat(e.name, ' (').concat(this.branch.name, ')');
    }
    getSkuIdForAnalytics() {
        return this.sku.id;
    }
    getAnalyticsData() {
        let e = s.Z.getApplication(this.id);
        return {
            application_id: null != e ? e.id : null,
            application_name: null != e ? e.name : null,
            sku_id: this.getSkuIdForAnalytics(),
            launcher_platform: this.getDistributor()
        };
    }
    constructor(e) {
        super(), c(this, 'id', void 0), c(this, 'branchId', void 0), c(this, 'flags', void 0), c(this, 'createdAt', void 0), c(this, 'entitlements', void 0), c(this, 'branch', void 0), c(this, 'sku', void 0), c(this, 'isTestMode', void 0), (this.id = e.id), (this.createdAt = e.createdAt), (this.flags = e.flags), (this.branchId = e.branchId), (this.entitlements = e.entitlements), (this.branch = e.branch), (this.sku = e.sku), (this.isTestMode = e.isTestMode || !1);
    }
}
