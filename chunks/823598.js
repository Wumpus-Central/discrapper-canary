"use strict";
let r, i;
function a() {
    if (null == r) throw Error("Native dependencies have not been injected.");
}
function s(e) {
    r = e;
}
function o() {
    return a(), r.supported();
}
function l(e) {
    return a(), r.supportsFeature(e);
}
function u(e) {
    a(), r.setProcessPriority(e);
}
function c() {
    return a(), i ?? (i = r.getVoiceEngine());
}
n.d(t, { $b: () => l, $j: () => o, WQ: () => s, i0: () => u, lE: () => c });
