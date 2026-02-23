"use strict";
let r, i;
function s() {
    if (null == r) throw Error("Native dependencies have not been injected.");
}
function a(e) {
    r = e;
}
function o() {
    return s(), r.supported();
}
function l(e) {
    return s(), r.supportsFeature(e);
}
function u(e) {
    s(), r.setProcessPriority(e);
}
function c() {
    return s(), i ?? (i = r.getVoiceEngine());
}
function d() {
    return s(), r.getOpenH264LibraryPath();
}
n.d(t, { $b: () => l, $j: () => o, WQ: () => a, XH: () => d, i0: () => u, lE: () => c });
