"use strict";
n.d(t, { AV: () => v, NP: () => I, TC: () => g, Tn: () => N, XQ: () => A, sL: () => R, yA: () => T, z8: () => b });
var r = n(311907),
    i = n(691540),
    s = n(857250),
    a = n(97483),
    o = n(73153),
    l = n(626584),
    u = n(15285),
    c = n(954571),
    d = n(723702),
    _ = n(728458),
    f = n(837921),
    p = n(309576),
    h = n(652215),
    E = n(985018);
let m = new l.A("SystemServiceNativeUtils");
function g() {
    return !!d.isPlatformEmbedded && (f.Ay.IsSystemServiceInstalled() ?? !1);
}
function A() {
    return !!d.isPlatformEmbedded && (f.Ay.CanSystemServiceBeInstalled() ?? !1);
}
function I() {
    let e = (0, r.bG)([u.Ay], () => u.Ay.canShowAdminWarning),
        t = A();
    return !!d.isPlatformEmbedded && e && !g() && t;
}
function T(e) {
    return (
        !!d.isPlatformEmbedded &&
        e.canShowAdminWarning &&
        !g() &&
        !!d.isPlatformEmbedded &&
        !0 === f.Ay.CanSystemServiceBeInstalled()
    );
}
function S(e, t, n) {
    (0, p.H)(e, t),
        "running" === t.state
            ? (m.info(`${e} initialized.`),
              c.default.track(h.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !0, source: n, modules: [e] }))
            : "failure" === t.state &&
              (m.info(`${e} failed to initialize.`, t),
              c.default.track(h.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !1, source: n, modules: [e] }));
}
function y(e) {
    d.isPlatformEmbedded &&
        (f.Ay.InputEventServiceSetStatusCallback((t) => {
            S("input-service", t, e);
        }),
        f.Ay.InputEventServiceSetAllowed(!0),
        f.Ay.ToolServiceSetStatusCallback((t) => {
            S("tool-service", t, e);
        }),
        f.Ay.ToolServiceSetAllowed(!0));
}
async function N(e) {
    if (d.isPlatformEmbedded && g())
        try {
            (await f.Ay.DoesSystemServiceHaveUpdate()) && (await f.Ay.UpdateSystemService()), y(e);
        } catch (e) {
            throw (
                (_.A.captureMessage("Error during system service initialization", { extra: { error: e } }),
                m.error("System service initialization failed", e),
                e)
            );
        }
}
async function v() {
    d.isPlatformEmbedded &&
        (f.Ay.InputEventServiceSetAllowed(!1),
        f.Ay.ToolServiceSetAllowed(!1),
        await o.h.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["input-service"],
        }),
        await o.h.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["tool-service"],
        }),
        m.info("System service terminated."));
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
function O(e, t) {
    t && (0, i.P0)(e);
}
async function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (d.isPlatformEmbedded && f.Ay.CanSystemServiceBeInstalled())
        try {
            await f.Ay.InstallSystemService(),
                m.info("System service installed."),
                c.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, { success: !0, source: e }),
                O((0, s.o)(E.intl.string(E.t.kQnWby), a.Ck.SUCCESS), t),
                y("after-install");
        } catch (r) {
            let n = C(r);
            if (null == n && r instanceof Error) {
                O((0, s.o)(E.intl.formatToPlainString(E.t.sdKYCE, { error: r.message }), a.Ck.FAILURE), t),
                    _.A.captureMessage("Unknown error during system service installation", { extra: { error: r } }),
                    m.error("System service install failed.", r),
                    c.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                O((0, s.o)(E.intl.formatToPlainString(E.t.sdKYCE, { error: r }), a.Ck.FAILURE), t),
                    _.A.captureMessage("Really unknown error during system service installation", {
                        extra: { error: r },
                    }),
                    m.error("System service install failed.", r),
                    c.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r?.toString(),
                    });
                return;
            }
            if (
                (c.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: n.error_code,
                    error_message: n.error_message,
                }),
                -0x7ff8fb39 === n.error_code)
            ) {
                O((0, s.o)(E.intl.string(E.t.xu9k8G), a.Ck.FAILURE), t),
                    m.error("User cancelled system service install.");
                return;
            }
            O((0, s.o)(E.intl.formatToPlainString(E.t.sdKYCE, { error: n.error_message }), a.Ck.FAILURE), t),
                0 !== n.error_code &&
                    _.A.captureMessage("Error during system service installation", { extra: { error: n } }),
                m.error("System service install failed.", n);
        }
}
async function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (d.isPlatformEmbedded)
        try {
            await v(),
                await f.Ay.UninstallSystemService(),
                m.info("System service uninstalled."),
                O((0, s.o)(E.intl.string(E.t.dThS5H), a.Ck.SUCCESS), t),
                c.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, { success: !0, source: e });
        } catch (r) {
            let n = C(r);
            if (null == n && r instanceof Error) {
                O((0, s.o)(E.intl.formatToPlainString(E.t.oHh3oI, { error: r.message }), a.Ck.FAILURE), t),
                    _.A.captureMessage("Unknown error during system service uninstallation", { extra: { error: r } }),
                    m.error("System service uninstall failed.", r),
                    c.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                O((0, s.o)(E.intl.formatToPlainString(E.t.oHh3oI, { error: r }), a.Ck.FAILURE), t),
                    _.A.captureMessage("Really unknown error during system service uninstallation", {
                        extra: { error: r },
                    }),
                    m.error("System service uninstall failed.", r),
                    c.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r?.toString(),
                    });
                return;
            }
            c.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                success: !1,
                source: e,
                error_code: n.error_code,
                error_message: n.error_message,
            }),
                O((0, s.o)(E.intl.formatToPlainString(E.t.oHh3oI, { error: n.error_message }), a.Ck.FAILURE), t),
                _.A.captureMessage("Error during system service uninstallation", { extra: { error: n } }),
                m.error("System service uninstall failed.", n);
        }
}
