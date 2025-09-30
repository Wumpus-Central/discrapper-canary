n.d(t, {
    O9: () => y,
    OK: () => R,
    Yz: () => T,
    aL: () => E,
    hi: () => O,
    s2: () => v,
    sU: () => N,
    wt: () => S,
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
    _ = n(517110),
    p = n(981631),
    h = n(388032);
let m = new o.Z("SystemServiceNativeUtils"),
    g = -2147023673;
function E() {
    var e;
    return !!c.isPlatformEmbedded && null != (e = d.ZP.IsSystemServiceInstalled()) && e;
}
function b() {
    var e;
    if (!c.isPlatformEmbedded) return !1;
    let { enabled: t } = f.Z.getConfig({ location: "can-install" });
    return !!t && null != (e = d.ZP.CanSystemServiceBeInstalled()) && e;
}
function y() {
    var e;
    let { enabled: t } = f.Z.useConfig({ location: "can-install-hook" });
    return !!c.isPlatformEmbedded && !!t && null != (e = d.ZP.CanSystemServiceBeInstalled()) && e;
}
function O() {
    let e = (0, r.e7)([s.ZP], () => s.ZP.canShowAdminWarning),
        t = y();
    return !!c.isPlatformEmbedded && e && !E() && t;
}
function v(e) {
    return !!c.isPlatformEmbedded && e.canShowAdminWarning && !E() && b();
}
function I(e) {
    c.isPlatformEmbedded &&
        (d.ZP.InputEventServiceSetStatusCallback((t) => {
            "running" === t.state ? (0, _.y)(!0) : (0, _.y)(!1),
                "running" === t.state
                    ? (m.info("System service initialized."),
                      l.default.track(p.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
                          success: !0,
                          source: e,
                          modules: ["input-service"],
                      }))
                    : "failure" === t.state &&
                      (m.info("System service failed to initialize."),
                      l.default.track(p.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
                          success: !1,
                          source: e,
                          modules: ["input-service"],
                      }));
        }),
        d.ZP.InputEventServiceSetAllowed(!0));
}
async function T(e) {
    if (c.isPlatformEmbedded && E())
        try {
            (await d.ZP.DoesSystemServiceHaveUpdate()) && (await d.ZP.UpdateSystemService()), I(e);
        } catch (e) {
            throw (
                (u.Z.captureMessage("Error during system service initialization", { extra: { error: e } }),
                m.error("System service initialization failed", e),
                e)
            );
        }
}
function S() {
    c.isPlatformEmbedded &&
        (d.ZP.InputEventServiceSetAllowed(!1),
        a.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            initialized: !1,
            modules: ["input-service"],
        }),
        m.info("System service terminated."));
}
function A(e) {
    if (e instanceof Error)
        try {
            let t = JSON.parse(e.message);
            if (null == t.error_code || null == t.error_message) return;
            return t;
        } catch (e) {
            return;
        }
}
function C(e, t) {
    t && (0, i.showToast)(e);
}
async function N(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (c.isPlatformEmbedded && d.ZP.CanSystemServiceBeInstalled())
        try {
            await d.ZP.InstallSystemService(),
                m.info("System service installed."),
                l.default.track(p.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !0,
                    source: e,
                }),
                C((0, i.createToast)(h.intl.string(h.t.kQnWb2), i.ToastType.SUCCESS), t),
                I("after-install");
        } catch (r) {
            let n = A(r);
            if (null == n && r instanceof Error) {
                C(
                    (0, i.createToast)(
                        h.intl.formatToPlainString(h.t.sdKYCA, { error: r.message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                    u.Z.captureMessage("Unknown error during system service installation", { extra: { error: r } }),
                    m.error("System service install failed.", r),
                    l.default.track(p.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                C((0, i.createToast)(h.intl.formatToPlainString(h.t.sdKYCA, { error: r }), i.ToastType.FAILURE), t),
                    u.Z.captureMessage("Really unknown error during system service installation", {
                        extra: { error: r },
                    }),
                    m.error("System service install failed.", r),
                    l.default.track(p.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: null == r ? void 0 : r.toString(),
                    });
                return;
            }
            if (
                (l.default.track(p.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: n.error_code,
                    error_message: n.error_message,
                }),
                n.error_code === g)
            ) {
                C((0, i.createToast)(h.intl.string(h.t.xu9k8P), i.ToastType.FAILURE), t),
                    m.error("User cancelled system service install.");
                return;
            }
            C(
                (0, i.createToast)(
                    h.intl.formatToPlainString(h.t.sdKYCA, { error: n.error_message }),
                    i.ToastType.FAILURE,
                ),
                t,
            ),
                u.Z.captureMessage("Error during system service installation", { extra: { error: n } }),
                m.error("System service install failed.", n);
        }
}
async function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (c.isPlatformEmbedded)
        try {
            await S(),
                await d.ZP.UninstallSystemService(),
                m.info("System service uninstalled."),
                C((0, i.createToast)(h.intl.string(h.t.dThS5O), i.ToastType.SUCCESS), t),
                l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                    success: !0,
                    source: e,
                });
        } catch (r) {
            let n = A(r);
            if (null == n && r instanceof Error) {
                C(
                    (0, i.createToast)(
                        h.intl.formatToPlainString(h.t.oHh3oK, { error: r.message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                    u.Z.captureMessage("Unknown error during system service uninstallation", { extra: { error: r } }),
                    m.error("System service uninstall failed.", r),
                    l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                C((0, i.createToast)(h.intl.formatToPlainString(h.t.oHh3oK, { error: r }), i.ToastType.FAILURE), t),
                    u.Z.captureMessage("Really unknown error during system service uninstallation", {
                        extra: { error: r },
                    }),
                    m.error("System service uninstall failed.", r),
                    l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: null == r ? void 0 : r.toString(),
                    });
                return;
            }
            l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                success: !1,
                source: e,
                error_code: n.error_code,
                error_message: n.error_message,
            }),
                C(
                    (0, i.createToast)(
                        h.intl.formatToPlainString(h.t.oHh3oK, { error: n.error_message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                u.Z.captureMessage("Error during system service uninstallation", { extra: { error: n } }),
                m.error("System service uninstall failed.", n);
        }
}
