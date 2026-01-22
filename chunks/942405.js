n.d(t, {
    AV: () => T,
    NP: () => O,
    TC: () => E,
    Tn: () => I,
    XQ: () => y,
    sL: () => R,
    yA: () => A,
    z8: () => w,
}),
    n(65821);
var r = n(311907),
    i = n(397927),
    a = n(73153),
    s = n(626584),
    o = n(15285),
    l = n(954571),
    c = n(723702),
    u = n(728458),
    d = n(837921),
    f = n(309576),
    p = n(652215),
    _ = n(985018);
let h = new s.A("SystemServiceNativeUtils"),
    m = -2147023673,
    g = 0;
function E() {
    var e;
    return !!c.isPlatformEmbedded && null != (e = d.Ay.IsSystemServiceInstalled()) && e;
}
function b() {
    return !!c.isPlatformEmbedded && !0 === d.Ay.CanSystemServiceBeInstalled();
}
function y() {
    var e;
    return !!c.isPlatformEmbedded && null != (e = d.Ay.CanSystemServiceBeInstalled()) && e;
}
function O() {
    let e = (0, r.bG)([o.Ay], () => o.Ay.canShowAdminWarning),
        t = y();
    return !!c.isPlatformEmbedded && e && !E() && t;
}
function A(e) {
    return !!c.isPlatformEmbedded && e.canShowAdminWarning && !E() && b();
}
function v(e, t, n) {
    (0, f.H)(e, t),
        "running" === t.state
            ? (h.info("".concat(e, " initialized.")),
              l.default.track(p.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
                  success: !0,
                  source: n,
                  modules: [e],
              }))
            : "failure" === t.state &&
              (h.info("".concat(e, " failed to initialize."), t),
              l.default.track(p.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, {
                  success: !1,
                  source: n,
                  modules: [e],
              }));
}
function S(e) {
    c.isPlatformEmbedded &&
        (d.Ay.InputEventServiceSetStatusCallback((t) => {
            v("input-service", t, e);
        }),
        d.Ay.InputEventServiceSetAllowed(!0),
        d.Ay.ToolServiceSetStatusCallback((t) => {
            v("tool-service", t, e);
        }),
        d.Ay.ToolServiceSetAllowed(!0));
}
async function I(e) {
    if (c.isPlatformEmbedded && E())
        try {
            (await d.Ay.DoesSystemServiceHaveUpdate()) && (await d.Ay.UpdateSystemService()), S(e);
        } catch (e) {
            throw (
                (u.A.captureMessage("Error during system service initialization", { extra: { error: e } }),
                h.error("System service initialization failed", e),
                e)
            );
        }
}
async function T() {
    c.isPlatformEmbedded &&
        (d.Ay.InputEventServiceSetAllowed(!1),
        d.Ay.ToolServiceSetAllowed(!1),
        await a.h.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["input-service"],
        }),
        await a.h.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["tool-service"],
        }),
        h.info("System service terminated."));
}
function C(e) {
    if (e instanceof Error)
        try {
            let t = JSON.parse(e.message);
            if (null == t.error_code || null == t.error_message) return;
            return t;
        } catch (e) {
            return;
        }
}
function N(e, t) {
    t && (0, i.showToast)(e);
}
async function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (c.isPlatformEmbedded && d.Ay.CanSystemServiceBeInstalled())
        try {
            await d.Ay.InstallSystemService(),
                h.info("System service installed."),
                l.default.track(p.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !0,
                    source: e,
                }),
                N((0, i.createToast)(_.intl.string(_.t.kQnWby), i.ToastType.SUCCESS), t),
                S("after-install");
        } catch (r) {
            let n = C(r);
            if (null == n && r instanceof Error) {
                N(
                    (0, i.createToast)(
                        _.intl.formatToPlainString(_.t.sdKYCE, { error: r.message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                    u.A.captureMessage("Unknown error during system service installation", { extra: { error: r } }),
                    h.error("System service install failed.", r),
                    l.default.track(p.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                N((0, i.createToast)(_.intl.formatToPlainString(_.t.sdKYCE, { error: r }), i.ToastType.FAILURE), t),
                    u.A.captureMessage("Really unknown error during system service installation", {
                        extra: { error: r },
                    }),
                    h.error("System service install failed.", r),
                    l.default.track(p.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: null == r ? void 0 : r.toString(),
                    });
                return;
            }
            if (
                (l.default.track(p.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: n.error_code,
                    error_message: n.error_message,
                }),
                n.error_code === m)
            ) {
                N((0, i.createToast)(_.intl.string(_.t.xu9k8G), i.ToastType.FAILURE), t),
                    h.error("User cancelled system service install.");
                return;
            }
            N(
                (0, i.createToast)(
                    _.intl.formatToPlainString(_.t.sdKYCE, { error: n.error_message }),
                    i.ToastType.FAILURE,
                ),
                t,
            ),
                n.error_code !== g &&
                    u.A.captureMessage("Error during system service installation", { extra: { error: n } }),
                h.error("System service install failed.", n);
        }
}
async function w(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (c.isPlatformEmbedded)
        try {
            await T(),
                await d.Ay.UninstallSystemService(),
                h.info("System service uninstalled."),
                N((0, i.createToast)(_.intl.string(_.t.dThS5H), i.ToastType.SUCCESS), t),
                l.default.track(p.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                    success: !0,
                    source: e,
                });
        } catch (r) {
            let n = C(r);
            if (null == n && r instanceof Error) {
                N(
                    (0, i.createToast)(
                        _.intl.formatToPlainString(_.t.oHh3oI, { error: r.message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                    u.A.captureMessage("Unknown error during system service uninstallation", { extra: { error: r } }),
                    h.error("System service uninstall failed.", r),
                    l.default.track(p.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                N((0, i.createToast)(_.intl.formatToPlainString(_.t.oHh3oI, { error: r }), i.ToastType.FAILURE), t),
                    u.A.captureMessage("Really unknown error during system service uninstallation", {
                        extra: { error: r },
                    }),
                    h.error("System service uninstall failed.", r),
                    l.default.track(p.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: null == r ? void 0 : r.toString(),
                    });
                return;
            }
            l.default.track(p.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                success: !1,
                source: e,
                error_code: n.error_code,
                error_message: n.error_message,
            }),
                N(
                    (0, i.createToast)(
                        _.intl.formatToPlainString(_.t.oHh3oI, { error: n.error_message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                u.A.captureMessage("Error during system service uninstallation", { extra: { error: n } }),
                h.error("System service uninstall failed.", n);
        }
}
