var l = n(855986),
    i = n(73153);
let s = !1;
class r extends l.Ay.PersistedStore {
    static displayName = "ParentalConsentStore";
    static persistKey = "ParentalConsentStore";
    initialize(e) {
        s = e?.shouldShowGuardianConnect ?? !1;
    }
    getShouldShowGuardianConnect() {
        return s;
    }
    getState() {
        return { shouldShowGuardianConnect: s };
    }
}
let a = new r(i.h, {
        GUARDIAN_CONNECT_REQUIRED: function (e) {
            let { shouldShowGuardianConnect: t } = e;
            ((s = !0 === t), a.persist());
        },
        GUARDIAN_CONNECT_CLEARED: function () {
            ((s = !1), a.persist());
        },
        NUF_COMPLETE: function () {
            ((s = !1), a.persist());
        },
    }),
    o = 221552 == n.j ? a : null;
n.d(t, {}, { A: o });
