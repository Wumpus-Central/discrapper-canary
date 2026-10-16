n.d(t, { A: () => _ });
var i = n(17928),
    r = n(73153),
    a = n(431560),
    s = n(617617);
let l = new Set(),
    o = new a.Z(),
    d = 0;
function c() {
    return (o.clear(), (d = 0), !0);
}
class u extends i.Ay.Store {
    static displayName = "ContextualReferralDismissalsStore";
    initialize() {
        this.waitFor(s.A);
    }
    getDismissedIds() {
        return o.getValue()?.dismissedIds ?? l;
    }
    isDismissedFor(e) {
        return o.getValue()?.dismissedIds.has(e) ?? !1;
    }
    getVersion() {
        return o.getValue()?.version ?? "0";
    }
    hasFetched() {
        return null != o.getValue() && !o.isLoading();
    }
    shouldFetch() {
        return o.shouldFetch();
    }
}
let _ = new u(r.h, {
    CONNECTION_OPEN: c,
    LOGOUT: c,
    CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START: function () {
        return !o.isLoading() && (o.setLoading(), !0);
    },
    CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS: function (e) {
        return (o.setValue({ dismissedIds: new Set(e.targetIds), version: e.version }), (d = 0), !0);
    },
    CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE: function () {
        return (o.clear(), !0);
    },
    CONTEXTUAL_REFERRAL_UPSELL_DISMISS: function (e) {
        let { targetId: t } = e,
            n = o.getValue();
        return (
            !(null == n || n.dismissedIds.has(t)) &&
            (o.setValue({ dismissedIds: new Set([...n.dismissedIds, t]), version: n.version }), (d += 1), !0)
        );
    },
    USER_SETTINGS_PROTO_UPDATE: function () {
        let e = o.getValue();
        if (null == e) return !1;
        let t = s.A.settings.userContent?.contextualReferralUpsellDismissalsVersion ?? "0";
        return (
            t !== e.version &&
            (d > 0 ? ((d -= 1), o.setValue({ dismissedIds: e.dismissedIds, version: t }), !1) : (o.clear(), !0))
        );
    },
});
