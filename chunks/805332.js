n.d(t, { A: () => u });
var l = n(17928),
    i = n(228366);
let r = null,
    s = !1;
class o extends l.Ay.Store {
    getBuilderPreviewApplicationId() {
        return r;
    }
    isBuilderPreviewMobile() {
        return s;
    }
}
let u = new o(i.h, {
    LOGOUT: function () {
        if (null == r && !s) return !1;
        (r = null), (s = !1);
    },
    VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (r === t) return !1;
        r = t;
    },
    VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (s === t) return !1;
        s = t;
    },
});
