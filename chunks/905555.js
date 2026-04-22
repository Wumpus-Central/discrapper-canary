"use strict";
n.d(t, { H: () => d, N: () => c });
var r = n(118356),
    i = n(499979),
    s = n(73153),
    a = n(87001),
    o = n(680243),
    l = n(392164);
let u = new r.Vy("OverlayV3NativeModuleUtils");
async function d() {
    let e;
    if (null == a.A.getWindow(l.f)) return;
    u.warn("Waiting for previous overlay popout to be destroyed.");
    let t = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5e3);
    });
    function n() {
        null == a.A.getWindow(l.f) && e?.();
    }
    let r = new Promise((t) => {
        (e = t), a.A.addChangeListener(n);
    });
    try {
        await Promise.race([t, r]);
    } finally {
        a.A.removeChangeListener(n);
    }
    null != a.A.getWindow(l.f) && u.error("Previous overlay popout was not destroyed after 5 seconds!");
}
async function c() {
    let e,
        t = o.A.isModuleLoaded,
        n = o.A.getNativeModule();
    if (t && null != n) return await (0, i.yy)(1e3), n;
    if (t && null == n) throw Error("Native module loaded but not found in store");
    let r = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5e3);
    });
    function a() {
        e?.();
    }
    let l = new Promise((t) => {
        (e = t),
            s.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a),
            s.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a);
    });
    try {
        await Promise.race([r, l]);
    } finally {
        s.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a),
            s.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a);
    }
    return o.A.getNativeModule();
}
