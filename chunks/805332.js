n.d(t, { A: () => a });
var i = n(17928),
    r = n(228366);
let l = null,
    s = !1;
class o extends i.Ay.Store {
    getBuilderPreviewApplicationId() {
        return l;
    }
    isBuilderPreviewMobile() {
        return s;
    }
}
let a = new o(r.h, {
    LOGOUT: function () {
        if (null == l && !s) return !1;
        (l = null), (s = !1);
    },
    VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (l === t) return !1;
        l = t;
    },
    VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (s === t) return !1;
        s = t;
    },
});
