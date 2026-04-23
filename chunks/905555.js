"use strict";
n.d(t, { H: () => _, N: () => u });
var i = n(118356),
    r = n(499979),
    s = n(228366),
    a = n(567249),
    o = n(680243),
    l = n(392164);
let d = new i.Vy("OverlayV3NativeModuleUtils");
async function _() {
    let e;
    if (null == a.A.getWindow(l.f)) return;
    d.warn("Waiting for previous overlay popout to be destroyed.");
    let t = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5e3);
    });
    function n() {
        null == a.A.getWindow(l.f) && e?.();
    }
    let i = new Promise((t) => {
        (e = t), a.A.addChangeListener(n);
    });
    try {
        await Promise.race([t, i]);
    } finally {
        a.A.removeChangeListener(n);
    }
    null != a.A.getWindow(l.f) && d.error("Previous overlay popout was not destroyed after 5 seconds!");
}
async function u() {
    let e,
        t = o.A.isModuleLoaded,
        n = o.A.getNativeModule();
    if (t && null != n) return await (0, r.yy)(1e3), n;
    if (t && null == n) throw Error("Native module loaded but not found in store");
    let i = new Promise((e) => {
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
        await Promise.race([i, l]);
    } finally {
        s.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a),
            s.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a);
    }
    return o.A.getNativeModule();
}
