"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(73153),
    a = n(961350);
class s extends r.Ay.Store {
    static displayName = "VoiceDareTrackingStore";
    initialize() {
        this.waitFor(a.default);
    }
    getProgressForUserId(e) {
        return null;
    }
    getTrackingEntryForUserId(e) {
        return null;
    }
    hasVoiceDareForUserId(e) {
        return !1;
    }
    getProgressForDareId(e) {
        return null;
    }
    getActiveDareForUserId(e) {
        return null;
    }
}
let o = new s(i.h, {});
