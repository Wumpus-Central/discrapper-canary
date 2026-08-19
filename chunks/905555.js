"use strict";
n.d(t, { H: () => c, N: () => u });
var i = n(941426),
    r = n(499979),
    a = n(228366),
    s = n(567249),
    l = n(614455),
    o = n(392164);
let d = new i.Vy("OverlayV3NativeModuleUtils");
async function c() {
    let e;
    if (null == s.A.getWindow(o.f)) return;
    d.warn("Waiting for previous overlay popout to be destroyed.");
    let t = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5e3);
    });
    function n() {
        null == s.A.getWindow(o.f) && e?.();
    }
    let i = new Promise((t) => {
        (e = t), s.A.addChangeListener(n);
    });
    try {
        await Promise.race([t, i]);
    } finally {
        s.A.removeChangeListener(n);
    }
    null != s.A.getWindow(o.f) && d.error("Previous overlay popout was not destroyed after 5 seconds!");
}
async function u() {
    let e,
        t = l.A.isModuleLoaded,
        n = l.A.getNativeModule();
    if (t && null != n) return await (0, r.yy)(1e3), n;
    if (t && null == n) throw Error("Native module loaded but not found in store");
    let i = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5e3);
    });
    function s() {
        e?.();
    }
    let o = new Promise((t) => {
        (e = t),
            a.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", s),
            a.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", s);
    });
    try {
        await Promise.race([i, o]);
    } finally {
        a.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", s),
            a.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", s);
    }
    return l.A.getNativeModule();
}
