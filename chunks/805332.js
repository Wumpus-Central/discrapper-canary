n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366);
let l = null,
    o = !1;
class s extends i.Ay.Store {
    getBuilderPreviewApplicationId() {
        return l;
    }
    isBuilderPreviewMobile() {
        return o;
    }
}
let u = new s(r.h, {
    LOGOUT: function () {
        if (null == l && !o) return !1;
        ((l = null), (o = !1));
    },
    VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (l === t) return !1;
        l = t;
    },
    VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (o === t) return !1;
        o = t;
    },
});
