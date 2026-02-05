"use strict";
n.d(t, { AV: () => b, NP: () => T, TC: () => E, Tn: () => C, XQ: () => I, sL: () => O, yA: () => y, z8: () => D });
var r = n(311907),
    i = n(397927),
    a = n(73153),
    s = n(626584),
    o = n(15285),
    l = n(954571),
    u = n(723702),
    c = n(728458),
    d = n(837921),
    _ = n(309576),
    f = n(652215),
    p = n(985018);
let h = new s.A("SystemServiceNativeUtils"),
    m = -0x7ff8fb39,
    g = 0;
function E() {
    return !!u.isPlatformEmbedded && (d.Ay.IsSystemServiceInstalled() ?? !1);
}
function A() {
    return !!u.isPlatformEmbedded && !0 === d.Ay.CanSystemServiceBeInstalled();
}
function I() {
    return !!u.isPlatformEmbedded && (d.Ay.CanSystemServiceBeInstalled() ?? !1);
}
function T() {
    let e = (0, r.bG)([o.Ay], () => o.Ay.canShowAdminWarning),
        t = I();
    return !!u.isPlatformEmbedded && e && !E() && t;
}
function y(e) {
    return !!u.isPlatformEmbedded && e.canShowAdminWarning && !E() && A();
}
function S(e, t, n) {
    (0, _.H)(e, t),
        "running" === t.state
            ? (h.info(`${e} initialized.`),
              l.default.track(f.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !0, source: n, modules: [e] }))
            : "failure" === t.state &&
              (h.info(`${e} failed to initialize.`, t),
              l.default.track(f.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !1, source: n, modules: [e] }));
}
function v(e) {
    u.isPlatformEmbedded &&
        (d.Ay.InputEventServiceSetStatusCallback((t) => {
            S("input-service", t, e);
        }),
        d.Ay.InputEventServiceSetAllowed(!0),
        d.Ay.ToolServiceSetStatusCallback((t) => {
            S("tool-service", t, e);
        }),
        d.Ay.ToolServiceSetAllowed(!0));
}
async function C(e) {
    if (u.isPlatformEmbedded && E())
        try {
            (await d.Ay.DoesSystemServiceHaveUpdate()) && (await d.Ay.UpdateSystemService()), v(e);
        } catch (e) {
            throw (
                (c.A.captureMessage("Error during system service initialization", { extra: { error: e } }),
                h.error("System service initialization failed", e),
                e)
            );
        }
}
async function b() {
    u.isPlatformEmbedded &&
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
function N(e) {
    if (e instanceof Error)
        try {
            let t = JSON.parse(e.message);
            if (null == t.error_code || null == t.error_message) return;
            return t;
        } catch (e) {
            return;
        }
}
function R(e, t) {
    t && (0, i.showToast)(e);
}
async function O(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (u.isPlatformEmbedded && d.Ay.CanSystemServiceBeInstalled())
        try {
            await d.Ay.InstallSystemService(),
                h.info("System service installed."),
                l.default.track(f.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, { success: !0, source: e }),
                R((0, i.createToast)(p.intl.string(p.t.kQnWby), i.ToastType.SUCCESS), t),
                v("after-install");
        } catch (r) {
            let n = N(r);
            if (null == n && r instanceof Error) {
                R(
                    (0, i.createToast)(
                        p.intl.formatToPlainString(p.t.sdKYCE, { error: r.message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                    c.A.captureMessage("Unknown error during system service installation", { extra: { error: r } }),
                    h.error("System service install failed.", r),
                    l.default.track(f.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                R((0, i.createToast)(p.intl.formatToPlainString(p.t.sdKYCE, { error: r }), i.ToastType.FAILURE), t),
                    c.A.captureMessage("Really unknown error during system service installation", {
                        extra: { error: r },
                    }),
                    h.error("System service install failed.", r),
                    l.default.track(f.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r?.toString(),
                    });
                return;
            }
            if (
                (l.default.track(f.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: n.error_code,
                    error_message: n.error_message,
                }),
                n.error_code === m)
            ) {
                R((0, i.createToast)(p.intl.string(p.t.xu9k8G), i.ToastType.FAILURE), t),
                    h.error("User cancelled system service install.");
                return;
            }
            R(
                (0, i.createToast)(
                    p.intl.formatToPlainString(p.t.sdKYCE, { error: n.error_message }),
                    i.ToastType.FAILURE,
                ),
                t,
            ),
                n.error_code !== g &&
                    c.A.captureMessage("Error during system service installation", { extra: { error: n } }),
                h.error("System service install failed.", n);
        }
}
async function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (u.isPlatformEmbedded)
        try {
            await b(),
                await d.Ay.UninstallSystemService(),
                h.info("System service uninstalled."),
                R((0, i.createToast)(p.intl.string(p.t.dThS5H), i.ToastType.SUCCESS), t),
                l.default.track(f.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, { success: !0, source: e });
        } catch (r) {
            let n = N(r);
            if (null == n && r instanceof Error) {
                R(
                    (0, i.createToast)(
                        p.intl.formatToPlainString(p.t.oHh3oI, { error: r.message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                    c.A.captureMessage("Unknown error during system service uninstallation", { extra: { error: r } }),
                    h.error("System service uninstall failed.", r),
                    l.default.track(f.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                R((0, i.createToast)(p.intl.formatToPlainString(p.t.oHh3oI, { error: r }), i.ToastType.FAILURE), t),
                    c.A.captureMessage("Really unknown error during system service uninstallation", {
                        extra: { error: r },
                    }),
                    h.error("System service uninstall failed.", r),
                    l.default.track(f.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r?.toString(),
                    });
                return;
            }
            l.default.track(f.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                success: !1,
                source: e,
                error_code: n.error_code,
                error_message: n.error_message,
            }),
                R(
                    (0, i.createToast)(
                        p.intl.formatToPlainString(p.t.oHh3oI, { error: n.error_message }),
                        i.ToastType.FAILURE,
                    ),
                    t,
                ),
                c.A.captureMessage("Error during system service uninstallation", { extra: { error: n } }),
                h.error("System service uninstall failed.", n);
        }
}
