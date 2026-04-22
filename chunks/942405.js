"use strict";
n.d(t, { AV: () => O, NP: () => I, TC: () => g, Tn: () => N, XQ: () => A, sL: () => C, yA: () => T, z8: () => b });
var r = n(311907),
    i = n(691540),
    s = n(857250),
    a = n(97483),
    o = n(73153),
    l = n(626584),
    u = n(15285),
    d = n(954571),
    c = n(723702),
    _ = n(728458),
    f = n(837921),
    E = n(309576),
    h = n(652215),
    p = n(985018);
let m = new l.A("SystemServiceNativeUtils");
function g() {
    return !!c.isPlatformEmbedded && (f.Ay.IsSystemServiceInstalled() ?? !1);
}
function A() {
    return !!c.isPlatformEmbedded && (f.Ay.CanSystemServiceBeInstalled() ?? !1);
}
function I() {
    let e = (0, r.bG)([u.Ay], () => u.Ay.canShowAdminWarning),
        t = A();
    return !!c.isPlatformEmbedded && e && !g() && t;
}
function T(e) {
    return (
        !!c.isPlatformEmbedded &&
        e.canShowAdminWarning &&
        !g() &&
        !!c.isPlatformEmbedded &&
        !0 === f.Ay.CanSystemServiceBeInstalled()
    );
}
function S(e, t, n) {
    (0, E.H)(e, t),
        "running" === t.state
            ? (m.info(`${e} initialized.`),
              d.default.track(h.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !0, source: n, modules: [e] }))
            : "failure" === t.state &&
              (m.info(`${e} failed to initialize.`, t),
              d.default.track(h.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !1, source: n, modules: [e] }));
}
function y(e) {
    c.isPlatformEmbedded &&
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
    if (c.isPlatformEmbedded && g())
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
async function O() {
    c.isPlatformEmbedded &&
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
function R(e) {
    if (e instanceof Error)
        try {
            let t = JSON.parse(e.message);
            if (null == t.error_code || null == t.error_message) return;
            return t;
        } catch (e) {
            return;
        }
}
function v(e, t) {
    t && (0, i.P0)(e);
}
async function C(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (c.isPlatformEmbedded && f.Ay.CanSystemServiceBeInstalled())
        try {
            await f.Ay.InstallSystemService(),
                m.info("System service installed."),
                d.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, { success: !0, source: e }),
                v((0, s.o)(p.intl.string(p.t.kQnWby), a.Ck.SUCCESS), t),
                y("after-install");
        } catch (r) {
            let n = R(r);
            if (null == n && r instanceof Error) {
                v((0, s.o)(p.intl.formatToPlainString(p.t.sdKYCE, { error: r.message }), a.Ck.FAILURE), t),
                    _.A.captureMessage("Unknown error during system service installation", { extra: { error: r } }),
                    m.error("System service install failed.", r),
                    d.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                v((0, s.o)(p.intl.formatToPlainString(p.t.sdKYCE, { error: r }), a.Ck.FAILURE), t),
                    _.A.captureMessage("Really unknown error during system service installation", {
                        extra: { error: r },
                    }),
                    m.error("System service install failed.", r),
                    d.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r?.toString(),
                    });
                return;
            }
            if (
                (d.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: n.error_code,
                    error_message: n.error_message,
                }),
                -0x7ff8fb39 === n.error_code)
            ) {
                v((0, s.o)(p.intl.string(p.t.xu9k8G), a.Ck.FAILURE), t),
                    m.error("User cancelled system service install.");
                return;
            }
            v((0, s.o)(p.intl.formatToPlainString(p.t.sdKYCE, { error: n.error_message }), a.Ck.FAILURE), t),
                0 !== n.error_code &&
                    _.A.captureMessage("Error during system service installation", { extra: { error: n } }),
                m.error("System service install failed.", n);
        }
}
async function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (c.isPlatformEmbedded)
        try {
            await O(),
                await f.Ay.UninstallSystemService(),
                m.info("System service uninstalled."),
                v((0, s.o)(p.intl.string(p.t.dThS5H), a.Ck.SUCCESS), t),
                d.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, { success: !0, source: e });
        } catch (r) {
            let n = R(r);
            if (null == n && r instanceof Error) {
                v((0, s.o)(p.intl.formatToPlainString(p.t.oHh3oI, { error: r.message }), a.Ck.FAILURE), t),
                    _.A.captureMessage("Unknown error during system service uninstallation", { extra: { error: r } }),
                    m.error("System service uninstall failed.", r),
                    d.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r.message,
                    });
                return;
            }
            if (null == n) {
                v((0, s.o)(p.intl.formatToPlainString(p.t.oHh3oI, { error: r }), a.Ck.FAILURE), t),
                    _.A.captureMessage("Really unknown error during system service uninstallation", {
                        extra: { error: r },
                    }),
                    m.error("System service uninstall failed.", r),
                    d.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: r?.toString(),
                    });
                return;
            }
            d.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                success: !1,
                source: e,
                error_code: n.error_code,
                error_message: n.error_message,
            }),
                v((0, s.o)(p.intl.formatToPlainString(p.t.oHh3oI, { error: n.error_message }), a.Ck.FAILURE), t),
                _.A.captureMessage("Error during system service uninstallation", { extra: { error: n } }),
                m.error("System service uninstall failed.", n);
        }
}
