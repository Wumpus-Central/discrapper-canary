"use strict";
n.d(t, { sL: () => y, NP: () => A, XQ: () => p, Tn: () => N, yA: () => I, TC: () => g, AV: () => C, z8: () => v });
var i = n(17928),
    r = n(691540),
    s = n(857250),
    a = n(97483),
    o = n(228366),
    l = n(626584),
    d = n(328153),
    _ = n(954571),
    u = n(723702),
    c = n(38405),
    E = n(19575),
    h = n(652215),
    m = n(985018);
let f = new l.A("SystemServiceNativeUtils");
function g() {
    return !!u.isPlatformEmbedded && (E.Ay.IsSystemServiceInstalled() ?? !1);
}
function p() {
    return !!u.isPlatformEmbedded && (E.Ay.CanSystemServiceBeInstalled() ?? !1);
}
function A() {
    let e = (0, i.bG)([d.Ay], () => d.Ay.canShowAdminWarning),
        t = p();
    return !!u.isPlatformEmbedded && e && !g() && t;
}
function I(e) {
    return (
        !!u.isPlatformEmbedded &&
        e.canShowAdminWarning &&
        !g() &&
        !!u.isPlatformEmbedded &&
        !0 === E.Ay.CanSystemServiceBeInstalled()
    );
}
function T(e, t, n) {
    d.Ay.getSystemServiceStatus(e).state !== t.state &&
        o.h.dispatch({ type: "SYSTEM_SERVICE_INITIALIZE", status: t, modules: [e] }),
        "running" === t.state
            ? (f.info(`${e} initialized.`),
              _.default.track(h.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !0, source: n, modules: [e] }))
            : "failure" === t.state &&
              (f.info(`${e} failed to initialize.`, t),
              _.default.track(h.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !1, source: n, modules: [e] }));
}
function S(e) {
    u.isPlatformEmbedded &&
        (E.Ay.InputEventServiceSetStatusCallback((t) => {
            T("input-service", t, e);
        }),
        E.Ay.InputEventServiceSetAllowed(!0),
        E.Ay.ToolServiceSetStatusCallback((t) => {
            T("tool-service", t, e);
        }),
        E.Ay.ToolServiceSetAllowed(!0));
}
async function N(e) {
    if (u.isPlatformEmbedded && g())
        try {
            (await E.Ay.DoesSystemServiceHaveUpdate()) && (await E.Ay.UpdateSystemService()), S(e);
        } catch (e) {
            throw (
                (c.A.captureMessage("Error during system service initialization", { extra: { error: e } }),
                f.error("System service initialization failed", e),
                e)
            );
        }
}
async function C() {
    u.isPlatformEmbedded &&
        (E.Ay.InputEventServiceSetAllowed(!1),
        E.Ay.ToolServiceSetAllowed(!1),
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
        f.info("System service terminated."));
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
async function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (u.isPlatformEmbedded && E.Ay.CanSystemServiceBeInstalled())
        try {
            await E.Ay.InstallSystemService(),
                f.info("System service installed."),
                _.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, { success: !0, source: e }),
                O((0, s.o)(m.intl.string(m.t.kQnWby), a.Ck.SUCCESS), t),
                S("after-install");
        } catch (i) {
            let n = R(i);
            if (null == n && i instanceof Error) {
                O((0, s.o)(m.intl.formatToPlainString(m.t.sdKYCE, { error: i.message }), a.Ck.FAILURE), t),
                    c.A.captureMessage("Unknown error during system service installation", { extra: { error: i } }),
                    f.error("System service install failed.", i),
                    _.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i.message,
                    });
                return;
            }
            if (null == n) {
                O((0, s.o)(m.intl.formatToPlainString(m.t.sdKYCE, { error: i }), a.Ck.FAILURE), t),
                    c.A.captureMessage("Really unknown error during system service installation", {
                        extra: { error: i },
                    }),
                    f.error("System service install failed.", i),
                    _.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i?.toString(),
                    });
                return;
            }
            if (
                (_.default.track(h.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: n.error_code,
                    error_message: n.error_message,
                }),
                -0x7ff8fb39 === n.error_code)
            ) {
                O((0, s.o)(m.intl.string(m.t.xu9k8G), a.Ck.FAILURE), t),
                    f.error("User cancelled system service install.");
                return;
            }
            O((0, s.o)(m.intl.formatToPlainString(m.t.sdKYCE, { error: n.error_message }), a.Ck.FAILURE), t),
                0 !== n.error_code &&
                    c.A.captureMessage("Error during system service installation", { extra: { error: n } }),
                f.error("System service install failed.", n);
        }
}
async function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (u.isPlatformEmbedded)
        try {
            await C(),
                await E.Ay.UninstallSystemService(),
                f.info("System service uninstalled."),
                O((0, s.o)(m.intl.string(m.t.dThS5H), a.Ck.SUCCESS), t),
                _.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, { success: !0, source: e });
        } catch (i) {
            let n = R(i);
            if (null == n && i instanceof Error) {
                O((0, s.o)(m.intl.formatToPlainString(m.t.oHh3oI, { error: i.message }), a.Ck.FAILURE), t),
                    c.A.captureMessage("Unknown error during system service uninstallation", { extra: { error: i } }),
                    f.error("System service uninstall failed.", i),
                    _.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i.message,
                    });
                return;
            }
            if (null == n) {
                O((0, s.o)(m.intl.formatToPlainString(m.t.oHh3oI, { error: i }), a.Ck.FAILURE), t),
                    c.A.captureMessage("Really unknown error during system service uninstallation", {
                        extra: { error: i },
                    }),
                    f.error("System service uninstall failed.", i),
                    _.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i?.toString(),
                    });
                return;
            }
            _.default.track(h.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                success: !1,
                source: e,
                error_code: n.error_code,
                error_message: n.error_message,
            }),
                O((0, s.o)(m.intl.formatToPlainString(m.t.oHh3oI, { error: n.error_message }), a.Ck.FAILURE), t),
                c.A.captureMessage("Error during system service uninstallation", { extra: { error: n } }),
                f.error("System service uninstall failed.", n);
        }
}
