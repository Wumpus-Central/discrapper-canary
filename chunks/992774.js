let i, r;
function a() {
    if (null == i) throw Error('Native dependencies have not been injected.');
}
function s(e) {
    i = e;
}
function o() {
    return a(), i.supported();
}
function l(e) {
    return a(), i.supportsFeature(e);
}
function u(e) {
    a(), i.setProcessPriority(e);
}
function c() {
    return a(), null != r ? r : (r = i.getVoiceEngine());
}
n.d(t, {
    Zh: () => o,
    eJ: () => l,
    f3: () => s,
    p8: () => u,
    zS: () => c
}),
    n(411104);
