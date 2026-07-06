"use strict";
n.d(t, { A: () => c });
var i = n(157559),
    r = n(723702),
    s = n(19575),
    a = n(187522);
let o = (0, n(945810).mj)({
    name: "2026-07-windows-camera-mic-permissions",
    kind: "user",
    defaultConfig: { checkPermissionsEnabled: !1 },
    variations: { 1: { checkPermissionsEnabled: !0 } },
});
var l = n(765682);
class u extends a.V {
    nativeUtils = s.Ay.getDiscordUtils();
    get platformAlwaysPermits() {
        return (
            !!(0, r.isLinux)() ||
            (!!(0, r.isWindows)() && !o.getConfig({ location: "native_permission_utils" }).checkPermissionsEnabled)
        );
    }
    static requestTypeLookup = {
        [l.iL.CAMERA]: s.kw.Camera,
        [l.iL.AUDIO]: s.kw.Microphone,
        [l.iL.PHOTOS]: s.kw.Photo,
        [l.iL.INPUT_MONITORING]: s.kw.InputMonitoring,
        [l.iL.SCREEN_RECORDING]: s.kw.ScreenRecording,
    };
    requestPermissionCore(e, t) {
        return this.asyncify(
            this.platformAlwaysPermits ? void 0 : this.nativeUtils?.nativePermssionRequestAuthorization,
            e,
            t,
        );
    }
    hasPermissionCore(e, t) {
        return this.asyncify(
            this.platformAlwaysPermits ? void 0 : this.nativeUtils?.nativePermssionHasAuthorization,
            e,
            t,
        );
    }
    asyncify(e, t, n) {
        let i = u.requestTypeLookup[t];
        return void 0 === i
            ? Promise.resolve(!0)
            : this.requestAuthorization(
                  t,
                  () => (null == e ? Promise.resolve(l.F5.AUTHORIZED) : new Promise((t, n) => e(t, i))),
                  n,
              );
    }
    openSettings(e) {
        if ((0, r.isWindows)())
            switch (e) {
                case l.iL.AUDIO:
                    window.open("ms-settings:privacy-microphone");
                    return;
                case l.iL.CAMERA:
                    window.open("ms-settings:privacy-webcam");
                    return;
                default:
                    return;
            }
        if (this.nativeUtils?.nativePermissionOpenSettings == null) return;
        let t = u.requestTypeLookup[e];
        void 0 !== t && this.nativeUtils.nativePermissionOpenSettings(t);
    }
    didHavePermission(e) {
        return this.storage.hasPermission(e);
    }
    openAlertModal(e) {
        let { title: t, body: n, onConfirm: r, cancelText: s, confirmText: a } = e;
        i.A.show({ title: t, body: n, onConfirm: r, cancelText: s, confirmText: a });
    }
}
let c = new u();
