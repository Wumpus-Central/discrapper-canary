n.d(t, {
    O9: () => b,
    OK: () => P,
    Yz: () => I,
    aL: () => g,
    hi: () => y,
    s2: () => O,
    sU: () => N,
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
    f = n(517110),
    p = n(981631),
    _ = n(388032);
let m = new o.Z("SystemServiceNativeUtils"),
    h = -2147023673;
function g() {
    var e;
    return !!c.isPlatformEmbedded && null != (e = d.ZP.IsSystemServiceInstalled()) && e;
}
function E() {
    return !!c.isPlatformEmbedded && !0 === d.ZP.CanSystemServiceBeInstalled();
}
function b() {
    var e;
    return !!c.isPlatformEmbedded && null != (e = d.ZP.CanSystemServiceBeInstalled()) && e;
}
function y() {
    let e = (0, r.e7)([s.ZP], () => s.ZP.canShowAdminWarning),
        t = b();
    return !!c.isPlatformEmbedded && e && !g() && t;
}
function O(e) {
    return !!c.isPlatformEmbedded && e.canShowAdminWarning && !g() && E();
}
function v(e, t, n) {
    (0, f.a)(e, t),
        "running" === t.state
            ? (m.info("".concat(e, " initialized.")),
              l.default.track(p.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
                  success: !0,
                  source: n,
                  modules: [e],
              }))
            : "failure" === t.state &&
              (m.info("".concat(e, " failed to initialize."), t),
              l.default.track(p.rMx.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
                  success: !1,
                  source: n,
                  modules: [e],
              }));
}
function S(e) {
    c.isPlatformEmbedded &&
        (d.ZP.InputEventServiceSetStatusCallback((t) => {
            v("input-service", t, e);
        }),
        d.ZP.InputEventServiceSetAllowed(!0),
        d.ZP.ToolServiceSetStatusCallback((t) => {
            v("tool-service", t, e);
        }),
        d.ZP.ToolServiceSetAllowed(!0));
}
async function I(e) {
    if (c.isPlatformEmbedded && g())
        try {
            (await d.ZP.DoesSystemServiceHaveUpdate()) && (await d.ZP.UpdateSystemService()), S(e);
        } catch (e) {
            throw (
                (u.Z.captureMessage("Error during system service initialization", { extra: { error: e } }),
                m.error("System service initialization failed", e),
                e)
            );
        }
}
async function T() {
    c.isPlatformEmbedded &&
        (d.ZP.InputEventServiceSetAllowed(!1),
        d.ZP.ToolServiceSetAllowed(!1),
        await a.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["input-service"],
        }),
        await a.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["tool-service"],
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
                C((0, i.createToast)(_.intl.string(_.t.kQnWby), i.ToastType.SUCCESS), t),
                S("after-install");
        } catch (r) {
            let n = A(r);
            if (null == n && r instanceof Error) {
                C(
                    (0, i.createToast)(
                        _.intl.formatToPlainString(_.t.sdKYCE, { error: r.message }),
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
                C((0, i.createToast)(_.intl.formatToPlainString(_.t.sdKYCE, { error: r }), i.ToastType.FAILURE), t),
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
                n.error_code === h)
            ) {
                C((0, i.createToast)(_.intl.string(_.t.xu9k8G), i.ToastType.FAILURE), t),
                    m.error("User cancelled system service install.");
                return;
            }
            C(
                (0, i.createToast)(
                    _.intl.formatToPlainString(_.t.sdKYCE, { error: n.error_message }),
                    i.ToastType.FAILURE,
                ),
                t,
            ),
                u.Z.captureMessage("Error during system service installation", { extra: { error: n } }),
                m.error("System service install failed.", n);
        }
}
async function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (c.isPlatformEmbedded)
        try {
            await T(),
                await d.ZP.UninstallSystemService(),
                m.info("System service uninstalled."),
                C((0, i.createToast)(_.intl.string(_.t.dThS5H), i.ToastType.SUCCESS), t),
                l.default.track(p.rMx.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                    success: !0,
                    source: e,
                });
        } catch (r) {
            let n = A(r);
            if (null == n && r instanceof Error) {
                C(
                    (0, i.createToast)(
                        _.intl.formatToPlainString(_.t.oHh3oI, { error: r.message }),
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
                C((0, i.createToast)(_.intl.formatToPlainString(_.t.oHh3oI, { error: r }), i.ToastType.FAILURE), t),
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
                        _.intl.formatToPlainString(_.t.oHh3oI, { error: n.error_message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                u.Z.captureMessage("Error during system service uninstallation", { extra: { error: n } }),
                m.error("System service uninstall failed.", n);
        }
}
