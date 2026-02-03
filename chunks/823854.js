n.d(t, {
    A: () => c,
});
var r,
    i = n(311907),
    a = n(73153),
    o = n(961350);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class l extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default);
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
s(l, "displayName", "VoiceDareTrackingStore");
let c = new l(a.h, {});
