t.d(r, { A: () => a });
var C = t(17928),
    l = t(228366),
    s = t(280450);
class n extends C.Ay.Store {
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
let a = new n(l.h, {});
