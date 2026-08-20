"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = null,
    s = !1;
class l extends i.Ay.Store {
    getBuilderPreviewApplicationId() {
        return a;
    }
    isBuilderPreviewMobile() {
        return s;
    }
}
let o = new l(r.h, {
    LOGOUT: function () {
        if (null == a && !s) return !1;
        (a = null), (s = !1);
    },
    VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (a === t) return !1;
        a = t;
    },
    VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (s === t) return !1;
        s = t;
    },
});
