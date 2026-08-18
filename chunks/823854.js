"use strict";
n.d(t, { A: () => a });
var l = n(17928),
    i = n(228366),
    s = n(280450);
class r extends l.Ay.Store {
    static displayName = "VoiceDareTrackingStore";
    initialize() {
        this.waitFor(s.default);
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
let a = new r(i.h, {});
