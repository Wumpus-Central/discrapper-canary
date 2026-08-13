"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = !1;
class s extends i.Ay.PersistedStore {
    static displayName = "ParentalConsentStore";
    static persistKey = "ParentalConsentStore";
    initialize(e) {
        a = e?.shouldShowGuardianConnect ?? !1;
    }
    getShouldShowGuardianConnect() {
        return a;
    }
    getState() {
        return { shouldShowGuardianConnect: a };
    }
}
let l = new s(r.h, {
        GUARDIAN_CONNECT_REQUIRED: function (e) {
            let { shouldShowGuardianConnect: t } = e;
            (a = !0 === t), l.persist();
        },
        GUARDIAN_CONNECT_CLEARED: function () {
            (a = !1), l.persist();
        },
        NUF_COMPLETE: function () {
            (a = !1), l.persist();
        },
    }),
    o = l;
