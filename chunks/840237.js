i.d(t, { n: () => c, t: () => s });
var r = i(351618),
    n = i(682781);
async function o(e) {
    try {
        if ("u" < typeof navigator || !navigator.permissions) return "prompt";
        return (await navigator.permissions.query({ name: e })).state;
    } catch {
        return "prompt";
    }
}
async function a() {
    return o("camera");
}
async function s() {
    let e = await a();
    return "granted" === e ? "granted" : "denied" === e ? "denied" : "prompt";
}
async function l() {
    return new n.t().requestPermission();
}
async function c(e = {}) {
    try {
        return e.requestMotion && (await l()), (0, r.i)(await (0, r.r)({ video: !0 })), "granted";
    } catch (t) {
        let e = t instanceof Error ? t.name : void 0;
        if ("NotAllowedError" === e || "PermissionDeniedError" === e) return "denied";
        return "prompt";
    }
}
