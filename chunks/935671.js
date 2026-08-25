"use strict";
n.d(t, { sL: () => L, NP: () => T, XQ: () => p, Tn: () => N, yA: () => m, TC: () => f, AV: () => C, z8: () => y });
var i = n(17928),
    r = n(691540),
    a = n(857250),
    s = n(97483),
    l = n(228366),
    o = n(626584),
    d = n(952818),
    c = n(174459),
    u = n(723702),
    _ = n(38405),
    E = n(19575),
    A = n(652215),
    h = n(375708);
let I = new o.A("SystemServiceNativeUtils");
function f() {
    return !!u.isPlatformEmbedded && (E.Ay.IsSystemServiceInstalled() ?? !1);
}
function p() {
    return !!u.isPlatformEmbedded && (E.Ay.CanSystemServiceBeInstalled() ?? !1);
}
function T() {
    let e = (0, i.bG)([d.Ay], () => d.Ay.canShowAdminWarning),
        t = p();
    return !!u.isPlatformEmbedded && e && !f() && t;
}
function m(e) {
    return (
        !!u.isPlatformEmbedded &&
        e.canShowAdminWarning &&
        !f() &&
        !!u.isPlatformEmbedded &&
        !0 === E.Ay.CanSystemServiceBeInstalled()
    );
}
function g(e, t, n) {
    d.Ay.getSystemServiceStatus(e).state !== t.state &&
        l.h.dispatch({ type: "SYSTEM_SERVICE_INITIALIZE", status: t, modules: [e] }),
        "running" === t.state
            ? (I.info(`${e} initialized.`),
              c.default.track(A.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !0, source: n, modules: [e] }))
            : "failure" === t.state &&
              (I.info(`${e} failed to initialize.`, t),
              c.default.track(A.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !1, source: n, modules: [e] }));
}
function S(e) {
    u.isPlatformEmbedded &&
        (E.Ay.InputEventServiceSetStatusCallback((t) => {
            g("input-service", t, e);
        }),
        E.Ay.InputEventServiceSetAllowed(!0),
        E.Ay.ToolServiceSetStatusCallback((t) => {
            g("tool-service", t, e);
        }),
        E.Ay.ToolServiceSetAllowed(!0));
}
async function N(e) {
    if (u.isPlatformEmbedded && f())
        try {
            (await E.Ay.DoesSystemServiceHaveUpdate()) && (await E.Ay.UpdateSystemService()), S(e);
        } catch (e) {
            throw (
                (_.A.captureMessage("Error during system service initialization", { extra: { error: e } }),
                I.error("System service initialization failed", e),
                e)
            );
        }
}
async function C() {
    u.isPlatformEmbedded &&
        (E.Ay.InputEventServiceSetAllowed(!1),
        E.Ay.ToolServiceSetAllowed(!1),
        await l.h.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["input-service"],
        }),
        await l.h.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["tool-service"],
        }),
        I.info("System service terminated."));
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
function O(e, t) {
    t && (0, r.P0)(e);
}
async function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (u.isPlatformEmbedded && E.Ay.CanSystemServiceBeInstalled())
        try {
            await E.Ay.InstallSystemService(),
                I.info("System service installed."),
                c.default.track(A.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, { success: !0, source: e }),
                O((0, a.o)(h.intl.string(h.t.kQnWby), s.Ck.SUCCESS), t),
                S("after-install");
        } catch (i) {
            let n = R(i);
            if (null == n && i instanceof Error) {
                O((0, a.o)(h.intl.formatToPlainString(h.t.sdKYCE, { error: i.message }), s.Ck.FAILURE), t),
                    _.A.captureMessage("Unknown error during system service installation", { extra: { error: i } }),
                    I.error("System service install failed.", i),
                    c.default.track(A.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i.message,
                    });
                return;
            }
            if (null == n) {
                O((0, a.o)(h.intl.formatToPlainString(h.t.sdKYCE, { error: i }), s.Ck.FAILURE), t),
                    _.A.captureMessage("Really unknown error during system service installation", {
                        extra: { error: i },
                    }),
                    I.error("System service install failed.", i),
                    c.default.track(A.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i?.toString(),
                    });
                return;
            }
            if (
                (c.default.track(A.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: n.error_code,
                    error_message: n.error_message,
                }),
                -0x7ff8fb39 === n.error_code)
            ) {
                O((0, a.o)(h.intl.string(h.t.xu9k8G), s.Ck.FAILURE), t),
                    I.error("User cancelled system service install.");
                return;
            }
            O((0, a.o)(h.intl.formatToPlainString(h.t.sdKYCE, { error: n.error_message }), s.Ck.FAILURE), t),
                0 !== n.error_code &&
                    _.A.captureMessage("Error during system service installation", { extra: { error: n } }),
                I.error("System service install failed.", n);
        }
}
async function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (u.isPlatformEmbedded)
        try {
            await C(),
                await E.Ay.UninstallSystemService(),
                I.info("System service uninstalled."),
                O((0, a.o)(h.intl.string(h.t.dThS5H), s.Ck.SUCCESS), t),
                c.default.track(A.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, { success: !0, source: e });
        } catch (i) {
            let n = R(i);
            if (null == n && i instanceof Error) {
                O((0, a.o)(h.intl.formatToPlainString(h.t.oHh3oI, { error: i.message }), s.Ck.FAILURE), t),
                    _.A.captureMessage("Unknown error during system service uninstallation", { extra: { error: i } }),
                    I.error("System service uninstall failed.", i),
                    c.default.track(A.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i.message,
                    });
                return;
            }
            if (null == n) {
                O((0, a.o)(h.intl.formatToPlainString(h.t.oHh3oI, { error: i }), s.Ck.FAILURE), t),
                    _.A.captureMessage("Really unknown error during system service uninstallation", {
                        extra: { error: i },
                    }),
                    I.error("System service uninstall failed.", i),
                    c.default.track(A.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i?.toString(),
                    });
                return;
            }
            c.default.track(A.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                success: !1,
                source: e,
                error_code: n.error_code,
                error_message: n.error_message,
            }),
                O((0, a.o)(h.intl.formatToPlainString(h.t.oHh3oI, { error: n.error_message }), s.Ck.FAILURE), t),
                _.A.captureMessage("Error during system service uninstallation", { extra: { error: n } }),
                I.error("System service uninstall failed.", n);
        }
}
