n.d(t, {
    Yz: () => v,
    hi: () => b,
    s2: () => y,
    sU: () => S,
    wt: () => I,
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
    let { enabled: t, force: n } = f.Z.getConfig({ location: "can-install" });
    return !!t && (!!n || (null != (e = d.ZP.CanSystemServiceBeInstalled()) && e));
}
function b() {
    let e = (0, r.e7)([s.ZP], () => s.ZP.canShowAdminWarning);
    return !!c.isPlatformEmbedded && e && !g() && E();
}
function y(e) {
    return !!c.isPlatformEmbedded && e.canShowAdminWarning && !g() && E();
}
function O(e) {
    c.isPlatformEmbedded &&
        (d.ZP.InputEventServiceSetAllowed(!0),
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
async function v(e) {
    if (c.isPlatformEmbedded && g())
        try {
            (await d.ZP.DoesSystemServiceHaveUpdate()) && (await d.ZP.UpdateSystemService()), O(e);
        } catch (e) {
            throw (
                (u.Z.captureMessage("Error during system service initialization", { extra: { error: e } }),
                h.error("System service initialization failed", e),
                e)
            );
        }
}
function I() {
    c.isPlatformEmbedded &&
        (d.ZP.InputEventServiceSetAllowed(!1),
        a.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            initialized: !1,
            modules: ["input-service"],
        }),
        h.info("System service terminated."));
}
function T(e) {
    if (e instanceof Error)
        try {
            let t = JSON.parse(e.message);
            if (null == t.error_code || null == t.error_message) return;
            return t;
        } catch (e) {
            return;
        }
}
async function S(e) {
    if (c.isPlatformEmbedded)
        try {
            await d.ZP.InstallSystemService(),
                h.info("System service installed."),
                l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !0,
                    source: e,
                }),
                (0, i.showToast)((0, i.createToast)(p.intl.string(p.t.kQnWb2), i.ToastType.SUCCESS)),
                O("after-install");
        } catch (n) {
            let t = T(n);
            if (null == t && n instanceof Error) {
                (0, i.showToast)(
                    (0, i.createToast)(
                        p.intl.formatToPlainString(p.t.sdKYCA, { error: n.message }),
                        i.ToastType.FAILURE,
                    ),
                ),
                    u.Z.captureMessage("Unknown error during system service installation", { extra: { error: n } }),
                    h.error("System service install failed.", n),
                    l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: n.message,
                    });
                return;
            }
            if (null == t) {
                (0, i.showToast)(
                    (0, i.createToast)(p.intl.formatToPlainString(p.t.sdKYCA, { error: n }), i.ToastType.FAILURE),
                ),
                    u.Z.captureMessage("Really unknown error during system service installation", {
                        extra: { error: n },
                    }),
                    h.error("System service install failed.", n),
                    l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: null == n ? void 0 : n.toString(),
                    });
                return;
            }
            if (
                (l.default.track(_.rMx.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: t.error_code,
                    error_message: t.error_message,
                }),
                t.error_code === m)
            ) {
                (0, i.showToast)((0, i.createToast)(p.intl.string(p.t.xu9k8P), i.ToastType.FAILURE)),
                    h.error("User cancelled system service install.");
                return;
            }
            (0, i.showToast)(
                (0, i.createToast)(
                    p.intl.formatToPlainString(p.t.sdKYCA, { error: t.error_message }),
                    i.ToastType.FAILURE,
                ),
            ),
                u.Z.captureMessage("Error during system service installation", { extra: { error: t } }),
                h.error("System service install failed.", t);
        }
}
