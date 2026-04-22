"use strict";
n.d(t, { E: () => S });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(477782),
    o = n(183623),
    l = n(959988),
    u = n(827343),
    d = n(401843),
    c = n(571044),
    _ = n(338771),
    f = n(929921),
    E = n(430452),
    h = n(723702),
    p = n(74329),
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
            appContext: O = g.BRT.APP,
        } = e,
        { desktopSourceId: R, lastPickedContent: v } = (0, s.cf)([c.Ay, E.Ay], () => {
            let { desktopSource: e } = E.Ay.getGoLiveSource() ?? {},
                t = c.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        C = (0, s.bG)([f.A], () => f.A.getState().soundshareEnabled),
        b = E.Ay.supports(I.O5.DESKTOP_CAPTURE_APPLICATIONS),
        D = (0, s.bG)([E.Ay], () => E.Ay.supports(I.O5.SOUNDSHARE)),
        L = (0, s.bG)([E.Ay], () => E.Ay.supportsScreenSoundshare()),
        w = (0, m.A)(t, O),
        M = (0, p.A)(t, O, A.FX),
        P = null != R && D && (!R.startsWith("screen") || L),
        U = (0, s.bG)([E.Ay], () => E.Ay.getUseSystemScreensharePicker() && (0, h.isLinux)()),
        k = i.useCallback(() => {
            R?.startsWith("prepicked:")
                ? E.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === I.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : n();
        }, [R, n]),
        x = R?.startsWith("prepicked:") ?? !1,
        G = (0, h.isMac)() && h.isPlatformEmbedded && x && (v?.windows.length ?? 0) > 0,
        V = (0, h.isMac)() && h.isPlatformEmbedded && x && (v?.applications.length ?? 0) > 0,
        F = G
            ? T.intl.string(T.t.qDK8gQ)
            : V
              ? T.intl.string(T.t["3m8w+Q"])
              : N
                ? T.intl.string(T.t.eAktHv)
                : T.intl.string(T.t.qntSal),
        B = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = f.A.getState(),
                r = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: I.x.STREAM };
            null != R && (r.desktopSettings = { sourceId: R, sound: !C }),
                (0, d.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !C }),
                u.A.setGoLiveSource(r);
        }, [R, C]);
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
        Y = P
            ? (0, r.jsx)(a.sL, {
                  id: "stream-settings-audio-enable",
                  label: N ? T.intl.string(T.t.af2Tw1) : T.intl.string(T.t.ZJEHt7),
                  checked: C,
                  action: B,
              })
            : null,
        W =
            !b || y || U
                ? null
                : (0, r.jsx)(a.Dr, {
                      id: "change-windows",
                      label: F,
                      icon: o.F,
                      leadingAccessory: { type: "icon", icon: o.F },
                      action: k,
                  }),
        j = (0, r.jsx)(a.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: T.intl.string(T.t.S5anIc),
            icon: l.G,
            leadingAccessory: { type: "icon", icon: l.G },
            action: () => (0, _.A)(t),
        });
    return N
        ? (0, r.jsxs)(r.Fragment, { children: [j, W, H, Y] })
        : (0, r.jsxs)(r.Fragment, { children: [H, S ? M : null, Y, W, j] });
}
