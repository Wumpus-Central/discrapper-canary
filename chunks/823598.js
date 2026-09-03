let i, r;
function a() {
    if (null == i) throw Error("Native dependencies have not been injected.");
}
function s(e) {
    i = e;
}
function l() {
    return a(), i.supported();
}
function o(e) {
    return a(), i.supportsFeature(e);
}
function d(e) {
    a(), i.setProcessPriority(e);
}
function c() {
    return a(), r ?? (r = i.getVoiceEngine());
}
function u() {
    return a(), i.getOpenH264LibraryPath();
}
n.d(t, { $b: () => o, $j: () => l, WQ: () => s, XH: () => u, i0: () => d, lE: () => c });
