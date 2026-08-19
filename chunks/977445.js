"use strict";
n.d(t, { Fs: () => s, pq: () => l, uS: () => o });
var i = n(17928),
    r = n(10716),
    a = n(147964);
function s(e) {
    return a.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e);
}
function l() {
    return null != a.A.getTestModeApplicationId() || r.A.getIsEnabled();
}
function o(e) {
    return (0, i.bG)(
        [a.A, r.A],
        () => null != e && (a.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e)),
        [e],
    );
}
