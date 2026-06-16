"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    s = n(495544);
class a extends i.Ay.Store {
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
let o = new a(r.h, {});
