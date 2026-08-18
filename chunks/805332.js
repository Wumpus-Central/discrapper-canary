i.d(t, { A: () => r });
var n = i(17928),
    s = i(228366);
let a = null;
class l extends n.Ay.Store {
    getBuilderPreviewApplicationId() {
        return a;
    }
}
let r = new l(s.h, {
    LOGOUT: function () {
        if (null == a) return !1;
        a = null;
    },
    VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (a === t) return !1;
        a = t;
    },
});
