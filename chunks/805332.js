n.d(t, { A: () => o });
var i = n(17928),
    a = n(228366);
let s = null,
    l = !1;
class r extends i.Ay.Store {
    getBuilderPreviewApplicationId() {
        return s;
    }
    isBuilderPreviewMobile() {
        return l;
    }
}
let o = new r(a.h, {
    LOGOUT: function () {
        if (null == s && !l) return !1;
        (s = null), (l = !1);
    },
    VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (s === t) return !1;
        s = t;
    },
    VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (l === t) return !1;
        l = t;
    },
});
