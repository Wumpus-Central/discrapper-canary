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

function c(e) {
    a(), r.setProcessPriority(e);
}

function u() {
    return a(), null != i ? i : (i = r.getVoiceEngine());
}
n.d(t, {
    $b: () => l,
    $j: () => o,
    WQ: () => s,
    i0: () => c,
    lE: () => u,
}),
    n(65821);
