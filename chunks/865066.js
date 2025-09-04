n.d(t, {
    Yz: () => y,
    hi: () => g,
    s2: () => E,
    sU: () => I,
    wt: () => O,
}),
    n(415506);
var r = n(442837),
    i = n(481060),
    a = n(570140),
    o = n(710845),
    s = n(594190),
    l = n(358085),
    c = n(960048),
    u = n(998502),
    d = n(765504),
    f = n(388032);
let _ = new o.Z("SystemServiceNativeUtils"),
    p = -2147023673;
function h() {
    var e;
    return !!l.isPlatformEmbedded && null != (e = u.ZP.IsSystemServiceInstalled()) && e;
}
function m() {
    var e;
    if (!l.isPlatformEmbedded) return !1;
    let { enabled: t, force: n } = d.Z.getConfig({ location: "can-install" });
    return !!t && (!!n || (null != (e = u.ZP.CanSystemServiceBeInstalled()) && e));
}
function g() {
    let e = (0, r.e7)([s.ZP], () => s.ZP.canShowAdminWarning);
    return !!l.isPlatformEmbedded && e && !h() && m();
}
function E(e) {
    return !!l.isPlatformEmbedded && e.canShowAdminWarning && !h() && m();
}
function b() {
    l.isPlatformEmbedded &&
        (u.ZP.InputEventServiceSetAllowed(!0),
        a.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            initialized: !0,
        }),
        _.info("System service initialized."));
}
async function y() {
    if (l.isPlatformEmbedded && h())
        try {
            (await u.ZP.DoesSystemServiceHaveUpdate()) && (await u.ZP.UpdateSystemService()), b();
        } catch (e) {
            throw (
                (c.Z.captureMessage("Error during system service initialization", { extra: { error: e } }),
                _.error("System service initialization failed", e),
                e)
            );
        }
}
function O() {
    l.isPlatformEmbedded &&
        (u.ZP.InputEventServiceSetAllowed(!1),
        a.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            initialized: !1,
        }),
        _.info("System service terminated."));
}
function v(e) {
    if (e instanceof Error)
        try {
            let t = JSON.parse(e.message);
            if (null == t.error_code || null == t.error_message) return;
            return t;
        } catch (e) {
            return;
        }
}
async function I() {
    if (l.isPlatformEmbedded)
        try {
            await u.ZP.InstallSystemService(),
                _.info("System service installed."),
                (0, i.showToast)((0, i.createToast)(f.intl.string(f.t.kQnWb2), i.ToastType.SUCCESS)),
                b();
        } catch (t) {
            let e = v(t);
            if (null == e && t instanceof Error) {
                (0, i.showToast)(
                    (0, i.createToast)(
                        f.intl.formatToPlainString(f.t.sdKYCA, { error: t.message }),
                        i.ToastType.FAILURE,
                    ),
                ),
                    c.Z.captureMessage("Unknown error during system service installation", { extra: { error: t } }),
                    _.error("System service install failed.", t);
                return;
            }
            if (null == e) {
                (0, i.showToast)(
                    (0, i.createToast)(f.intl.formatToPlainString(f.t.sdKYCA, { error: t }), i.ToastType.FAILURE),
                ),
                    c.Z.captureMessage("Really unknown error during system service installation", {
                        extra: { error: t },
                    }),
                    _.error("System service install failed.", t);
                return;
            }
            if (e.error_code === p) {
                (0, i.showToast)((0, i.createToast)(f.intl.string(f.t.xu9k8P), i.ToastType.FAILURE)),
                    _.error("User cancelled system service install.");
                return;
            }
            (0, i.showToast)(
                (0, i.createToast)(
                    f.intl.formatToPlainString(f.t.sdKYCA, { error: e.error_message }),
                    i.ToastType.FAILURE,
                ),
            ),
                c.Z.captureMessage("Error during system service installation", { extra: { error: e } }),
                _.error("System service install failed.", e);
        }
}
