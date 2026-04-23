"use strict";
n.d(t, { F: () => a, u: () => o });
var r = n(311907),
    i = n(10716),
    s = n(147964);
function a(e) {
    return s.A.inTestModeForApplication(e) || i.A.inDevModeForApplication(e);
}
function o(e) {
    return (0, r.bG)(
        [s.A, i.A],
        () => null != e && (s.A.inTestModeForApplication(e) || i.A.inDevModeForApplication(e)),
        [e],
    );
}
