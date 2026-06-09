"use strict";
n.d(t, { Fs: () => a, pq: () => o, uS: () => l });
var i = n(17928),
    r = n(10716),
    s = n(147964);
function a(e) {
    return s.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e);
}
function o() {
    return null != s.A.getTestModeApplicationId() || r.A.getIsEnabled();
}
function l(e) {
    return (0, i.bG)(
        [s.A, r.A],
        () => null != e && (s.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e)),
        [e],
    );
}
