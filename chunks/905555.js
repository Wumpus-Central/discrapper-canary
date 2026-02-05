"use strict";
n.d(t, { H: () => c, N: () => _ });
var r = n(118356),
    i = n(499979),
    a = n(73153),
    s = n(87001),
    o = n(680243),
    l = n(392164);
let u = new r.Vy("OverlayV3NativeModuleUtils");
async function c() {
    let e;
    if (null == s.A.getWindow(l.f)) return;
    u.warn("Waiting for previous overlay popout to be destroyed.");
    let t = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5e3);
    });
    function n() {
        null == s.A.getWindow(l.f) && e?.();
    }
    let r = new Promise((t) => {
        (e = t), s.A.addChangeListener(n);
    });
    try {
        await Promise.race([t, r]);
    } finally {
        s.A.removeChangeListener(n);
    }
    null != s.A.getWindow(l.f) && u.error("Previous overlay popout was not destroyed after 5 seconds!");
}
let d = 1e3;
async function _() {
    let e,
        t = o.A.isModuleLoaded,
        n = o.A.getNativeModule();
    if (t && null != n) return await (0, i.yy)(d), n;
    if (t && null == n) throw Error("Native module loaded but not found in store");
    let r = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5e3);
    });
    function s() {
        e?.();
    }
    let l = new Promise((t) => {
        (e = t),
            a.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", s),
            a.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", s);
    });
    try {
        await Promise.race([r, l]);
    } finally {
        a.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", s),
            a.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", s);
    }
    return o.A.getNativeModule();
}
