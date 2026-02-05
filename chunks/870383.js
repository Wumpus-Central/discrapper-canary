"use strict";
n.d(t, { H: () => i, W: () => a });
var r = n(620715);
function i(e, t) {
    let { enabled: n } = r.Y.getConfig({ location: "getUpdatedAgeVerificationString" });
    return n ? t : e;
}
function a(e, t) {
    let { enabled: n } = r.Y.useConfig({ location: "useUpdatedAgeVerificationString" });
    return n ? t : e;
}
