n.d(t, {
    H: () => u,
    s: () => c,
}),
    n(388685),
    n(415506);
var r = n(579092),
    i = n(570140),
    a = n(522474),
    o = n(509140),
    s = n(501787);
let l = new r.Yd("OverlayV3NativeModuleUtils");
async function c() {
    let e;
    if (null == a.Z.getWindow(s.$J)) return;
    l.warn("Waiting for previous overlay popout to be destroyed.");
    let t = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5000);
    });
    function n() {
        null == a.Z.getWindow(s.$J) && (null == e || e());
    }
    let r = new Promise((t) => {
        (e = t), a.Z.addChangeListener(n);
    });
    try {
        await Promise.race([t, r]);
    } finally {
        a.Z.removeChangeListener(n);
    }
    null != a.Z.getWindow(s.$J) && l.error("Previous overlay popout was not destroyed after 5 seconds!");
}
async function u() {
    let e,
        t = o.Z.isModuleLoaded,
        n = o.Z.getNativeModule();
    if (t && null != n) return n;
    if (t && null == n) throw Error("Native module loaded but not found in store");
    let r = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5000);
    });
    function a() {
        null == e || e();
    }
    let s = new Promise((t) => {
        (e = t),
            i.Z.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a),
            i.Z.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a);
    });
    try {
        await Promise.race([r, s]);
    } finally {
        i.Z.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a),
            i.Z.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a);
    }
    return o.Z.getNativeModule();
}
