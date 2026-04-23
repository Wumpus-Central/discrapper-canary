"use strict";
n.d(t, { F: () => a, u: () => o });
var i = n(17928),
    r = n(10716),
    s = n(147964);
function a(e) {
    return s.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e);
}
function o(e) {
    return (0, i.bG)(
        [s.A, r.A],
        () => null != e && (s.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e)),
        [e],
    );
}
