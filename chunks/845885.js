"use strict";
n.d(t, { E: () => T });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(827343),
    l = n(401843),
    u = n(571044),
    c = n(338771),
    d = n(929921),
    _ = n(430452),
    f = n(723702),
    h = n(74329),
    p = n(361618),
    g = n(652215),
    E = n(818348),
    A = n(731854),
    I = n(985018);
function T(e) {
    let {
            stream: t,
            handleGoLive: n,
            showReportOption: T = !1,
            disableChangeWindows: y = !1,
            minimal: S = !1,
            appContext: v = g.BRT.APP,
        } = e,
        { desktopSourceId: C, lastPickedContent: b } = (0, a.cf)([u.Ay, _.Ay], () => {
            let { desktopSource: e } = _.Ay.getGoLiveSource() ?? {},
                t = u.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        N = (0, a.bG)([d.A], () => d.A.getState().soundshareEnabled),
        R = _.Ay.supports(A.O5.DESKTOP_CAPTURE_APPLICATIONS),
        O = (0, a.bG)([_.Ay], () => _.Ay.supports(A.O5.SOUNDSHARE)),
        D = (0, a.bG)([_.Ay], () => _.Ay.supportsScreenSoundshare()),
        L = (0, p.A)(t, v),
        w = (0, h.A)(t, v, E.FX),
        x = null != C && O && (!C.startsWith("screen") || D),
        P = (0, a.bG)([_.Ay], () => _.Ay.getUseSystemScreensharePicker() && (0, f.isLinux)()),
        M = i.useCallback(() => {
            C?.startsWith("prepicked:")
                ? _.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === A.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : n();
        }, [C, n]),
        k = C?.startsWith("prepicked:") ?? !1,
        U = (0, f.isMac)() && f.isPlatformEmbedded && k && (b?.windows.length ?? 0) > 0,
        G = (0, f.isMac)() && f.isPlatformEmbedded && k && (b?.applications.length ?? 0) > 0,
        F = U
            ? I.intl.string(I.t.qDK8gQ)
            : G
              ? I.intl.string(I.t["3m8w+Q"])
              : S
                ? I.intl.string(I.t.eAktHv)
                : I.intl.string(I.t.qntSal),
        V = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = d.A.getState(),
                r = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: A.x.STREAM };
            null != C && (r.desktopSettings = { sourceId: C, sound: !N }),
                (0, l.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !N }),
                o.A.setGoLiveSource(r);
        }, [C, N]);
    if (null == t)
        return (0, r.jsx)(s.Drp, {
            id: "share-your-screen",
            label: I.intl.string(I.t.fjBNo1),
            icon: s.Fzq,
            leadingAccessory: { type: "icon", icon: s.Fzq },
            action: n,
        });
    let B = f.isPlatformEmbedded
            ? (0, r.jsx)(s.Drp, { id: "stream-settings", label: I.intl.string(I.t.ytAD9d), children: L })
            : null,
        j = x
            ? (0, r.jsx)(s.sLh, {
                  id: "stream-settings-audio-enable",
                  label: S ? I.intl.string(I.t.af2Tw1) : I.intl.string(I.t.ZJEHt7),
                  checked: N,
                  action: V,
              })
            : null,
        H =
            !R || y || P
                ? null
                : (0, r.jsx)(s.Drp, {
                      id: "change-windows",
                      label: F,
                      icon: s.Fzq,
                      leadingAccessory: { type: "icon", icon: s.Fzq },
                      action: M,
                  }),
        Y = (0, r.jsx)(s.Drp, {
            id: "stop-streaming",
            color: "danger",
            label: I.intl.string(I.t.S5anIc),
            icon: s.GT3,
            leadingAccessory: { type: "icon", icon: s.GT3 },
            action: () => (0, c.A)(t),
        });
    return S
        ? (0, r.jsxs)(r.Fragment, { children: [Y, H, B, j] })
        : (0, r.jsxs)(r.Fragment, { children: [B, T ? w : null, j, H, Y] });
}
