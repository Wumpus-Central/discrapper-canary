n.d(t, {
    Yz: () => I,
    hi: () => y,
    s2: () => O,
    sU: () => C,
    wt: () => T,
}),
    n(415506);
var r = n(442837),
    i = n(481060),
    a = n(570140),
    o = n(710845),
    s = n(594190),
    l = n(626135),
    c = n(358085),
    u = n(960048),
    d = n(998502),
    f = n(765504),
    _ = n(981631),
    p = n(388032);
let h = new o.Z("SystemServiceNativeUtils"),
    m = -2147023673;
function g() {
    var e;
    return !!c.isPlatformEmbedded && null != (e = d.ZP.IsSystemServiceInstalled()) && e;
}
function E() {
    var e;
    if (!c.isPlatformEmbedded) return !1;
    let { enabled: t } = f.Z.getConfig({ location: "can-install" });
    return !!t && null != (e = d.ZP.CanSystemServiceBeInstalled()) && e;
}
function b() {
    var e;
    let { enabled: t } = f.Z.getConfig({ location: "can-install-hook" });
    return !!c.isPlatformEmbedded && !!t && null != (e = d.ZP.CanSystemServiceBeInstalled()) && e;
}
function y() {
    let e = (0, r.e7)([s.ZP], () => s.ZP.canShowAdminWarning),
        t = b();
    return !!c.isPlatformEmbedded && e && !g() && t;
}
function O(e) {
    return !!c.isPlatformEmbedded && e.canShowAdminWarning && !g() && E();
}
function v(e) {
    c.isPlatformEmbedded &&
        (d.ZP.InputEventServiceSetStatusCallback((e) => {
            h.info("Keybinds helper status changed", e);
        }),
        d.ZP.InputEventServiceSetAllowed(!0),
        a.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            initialized: !0,
            modules: ["input-service"],
        }),
        h.info("System service initialized."),
        l.default.track(_.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
            success: !0,
            source: e,
            modules: ["input-service"],
        }));
}
async function I(e) {
    if (c.isPlatformEmbedded && g())
        try {
            (await d.ZP.DoesSystemServiceHaveUpdate()) && (await d.ZP.UpdateSystemService()), v(e);
        } catch (e) {
            throw (
                (u.Z.captureMessage("Error during system service initialization", { extra: { error: e } }),
                h.error("System service initialization failed", e),
                e)
            );
        }
}
function T() {
    c.isPlatformEmbedded &&
        (d.ZP.InputEventServiceSetAllowed(!1),
        a.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            initialized: !1,
            modules: ["input-service"],
        }),
        h.info("System service terminated."));
}
function S(e) {
    if (e instanceof Error)
        try {
            let t = JSON.parse(e.message);
            if (null == t.error_code || null == t.error_message) return;
            return t;
        } catch (e) {
            return;
        }
}
function A(e, t) {
    t && (0, i.showToast)(e);
}
async function C(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (c.isPlatformEmbedded && d.ZP.CanSystemServiceBeInstalled())
        try {
            await d.ZP.InstallSystemService(),
                h.info("System service installed."),
                l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !0,
                    source: e,
                }),
                A((0, i.createToast)(p.intl.string(p.t.kQnWb2), i.ToastType.SUCCESS), t),
                v("after-install");
        } catch (r) {
            let n = S(r);
            if (null == n && r instanceof Error) {
                A(
                    (0, i.createToast)(
                        p.intl.formatToPlainString(p.t.sdKYCA, { error: r.message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                    u.Z.captureMessage("Unknown error during system service installation", { extra: { error: r } }),
                    h.error("System service install failed.", r),
                    l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                A((0, i.createToast)(p.intl.formatToPlainString(p.t.sdKYCA, { error: r }), i.ToastType.FAILURE), t),
                    u.Z.captureMessage("Really unknown error during system service installation", {
                        extra: { error: r },
                    }),
                    h.error("System service install failed.", r),
                    l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: null == r ? void 0 : r.toString(),
                    });
                return;
            }
            if (
                (l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: n.error_code,
                    error_message: n.error_message,
                }),
                n.error_code === m)
            ) {
                A((0, i.createToast)(p.intl.string(p.t.xu9k8P), i.ToastType.FAILURE), t),
                    h.error("User cancelled system service install.");
                return;
            }
            A(
                (0, i.createToast)(
                    p.intl.formatToPlainString(p.t.sdKYCA, { error: n.error_message }),
                    i.ToastType.FAILURE,
                ),
                t,
            ),
                u.Z.captureMessage("Error during system service installation", { extra: { error: n } }),
                h.error("System service install failed.", n);
        }
}
