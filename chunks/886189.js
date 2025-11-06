n.d(t, {
    H: () => f,
    s: () => u,
}),
    n(388685),
    n(415506);
var r = n(579092),
    i = n(379649),
    a = n(570140),
    o = n(522474),
    s = n(509140),
    l = n(501787);
let c = new r.Yd("OverlayV3NativeModuleUtils");
async function u() {
    let e;
    if (null == o.Z.getWindow(l.$J)) return;
    c.warn("Waiting for previous overlay popout to be destroyed.");
    let t = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5000);
    });
    function n() {
        null == o.Z.getWindow(l.$J) && (null == e || e());
    }
    let r = new Promise((t) => {
        (e = t), o.Z.addChangeListener(n);
    });
    try {
        await Promise.race([t, r]);
    } finally {
        o.Z.removeChangeListener(n);
    }
    null != o.Z.getWindow(l.$J) && c.error("Previous overlay popout was not destroyed after 5 seconds!");
}
let d = 1000;
async function f() {
    let e,
        t = s.Z.isModuleLoaded,
        n = s.Z.getNativeModule();
    if (t && null != n) return await (0, i._v)(d), n;
    if (t && null == n) throw Error("Native module loaded but not found in store");
    let r = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5000);
    });
    function o() {
        null == e || e();
    }
    let l = new Promise((t) => {
        (e = t),
            a.Z.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", o),
            a.Z.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", o);
    });
    try {
        await Promise.race([r, l]);
    } finally {
        a.Z.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", o),
            a.Z.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", o);
    }
    return s.Z.getNativeModule();
}
