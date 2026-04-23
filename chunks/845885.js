"use strict";
n.d(t, { E: () => S });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(477782),
    o = n(183623),
    l = n(959988),
    u = n(827343),
    c = n(401843),
    d = n(571044),
    _ = n(338771),
    f = n(929921),
    p = n(430452),
    h = n(723702),
    E = n(74329),
    m = n(361618),
    g = n(652215),
    A = n(818348),
    I = n(731854),
    T = n(985018);
function S(e) {
    let {
            stream: t,
            handleGoLive: n,
            showReportOption: S = !1,
            disableChangeWindows: y = !1,
            minimal: N = !1,
            appContext: v = g.BRT.APP,
        } = e,
        { desktopSourceId: C, lastPickedContent: O } = (0, s.cf)([d.Ay, p.Ay], () => {
            let { desktopSource: e } = p.Ay.getGoLiveSource() ?? {},
                t = d.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        R = (0, s.bG)([f.A], () => f.A.getState().soundshareEnabled),
        b = p.Ay.supports(I.O5.DESKTOP_CAPTURE_APPLICATIONS),
        D = (0, s.bG)([p.Ay], () => p.Ay.supports(I.O5.SOUNDSHARE)),
        L = (0, s.bG)([p.Ay], () => p.Ay.supportsScreenSoundshare()),
        w = (0, m.A)(t, v),
        M = (0, E.A)(t, v, A.FX),
        P = null != C && D && (!C.startsWith("screen") || L),
        x = (0, s.bG)([p.Ay], () => p.Ay.getUseSystemScreensharePicker() && (0, h.isLinux)()),
        k = i.useCallback(() => {
            C?.startsWith("prepicked:")
                ? p.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === I.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : n();
        }, [C, n]),
        U = C?.startsWith("prepicked:") ?? !1,
        G = (0, h.isMac)() && h.isPlatformEmbedded && U && (O?.windows.length ?? 0) > 0,
        F = (0, h.isMac)() && h.isPlatformEmbedded && U && (O?.applications.length ?? 0) > 0,
        V = G
            ? T.intl.string(T.t.qDK8gQ)
            : F
              ? T.intl.string(T.t["3m8w+Q"])
              : N
                ? T.intl.string(T.t.eAktHv)
                : T.intl.string(T.t.qntSal),
        B = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = f.A.getState(),
                r = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: I.x.STREAM };
            null != C && (r.desktopSettings = { sourceId: C, sound: !R }),
                (0, c.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !R }),
                u.A.setGoLiveSource(r);
        }, [C, R]);
    if (null == t)
        return (0, r.jsx)(a.Dr, {
            id: "share-your-screen",
            label: T.intl.string(T.t.fjBNo1),
            icon: o.F,
            leadingAccessory: { type: "icon", icon: o.F },
            action: n,
        });
    let H = h.isPlatformEmbedded
            ? (0, r.jsx)(a.Dr, { id: "stream-settings", label: T.intl.string(T.t.ytAD9d), children: w })
            : null,
        j = P
            ? (0, r.jsx)(a.sL, {
                  id: "stream-settings-audio-enable",
                  label: N ? T.intl.string(T.t.af2Tw1) : T.intl.string(T.t.ZJEHt7),
                  checked: R,
                  action: B,
              })
            : null,
        Y =
            !b || y || x
                ? null
                : (0, r.jsx)(a.Dr, {
                      id: "change-windows",
                      label: V,
                      icon: o.F,
                      leadingAccessory: { type: "icon", icon: o.F },
                      action: k,
                  }),
        W = (0, r.jsx)(a.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: T.intl.string(T.t.S5anIc),
            icon: l.G,
            leadingAccessory: { type: "icon", icon: l.G },
            action: () => (0, _.A)(t),
        });
    return N
        ? (0, r.jsxs)(r.Fragment, { children: [W, Y, H, j] })
        : (0, r.jsxs)(r.Fragment, { children: [H, S ? M : null, j, Y, W] });
}
