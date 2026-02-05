"use strict";
n.d(t, { E: () => I });
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
    p = n(74329),
    h = n(361618),
    m = n(652215),
    g = n(818348),
    E = n(731854),
    A = n(985018);
function I(e) {
    let {
            stream: t,
            handleGoLive: n,
            showReportOption: I = !1,
            disableChangeWindows: T = !1,
            minimal: y = !1,
            appContext: S = m.BRT.APP,
        } = e,
        { desktopSourceId: v, lastPickedContent: C } = (0, a.cf)([u.Ay, _.A], () => {
            let { desktopSource: e } = _.A.getGoLiveSource() ?? {},
                t = u.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        b = (0, a.bG)([d.A], () => d.A.getState().soundshareEnabled),
        N = _.A.supports(E.O5.DESKTOP_CAPTURE_APPLICATIONS),
        R = (0, a.bG)([_.A], () => _.A.supports(E.O5.SOUNDSHARE)),
        O = (0, a.bG)([_.A], () => _.A.supportsScreenSoundshare()),
        D = (0, h.A)(t, S),
        L = (0, p.A)(t, S, g.FX),
        w = null != v && R && (!v.startsWith("screen") || O),
        x = (0, a.bG)([_.A], () => _.A.getUseSystemScreensharePicker() && (0, f.isLinux)()),
        P = i.useCallback(() => {
            v?.startsWith("prepicked:")
                ? _.A.getMediaEngine().eachConnection((e) => {
                      e.context === E.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : n();
        }, [v, n]),
        M = v?.startsWith("prepicked:") ?? !1,
        k = (0, f.isMac)() && f.isPlatformEmbedded && M && (C?.windows.length ?? 0) > 0,
        U = (0, f.isMac)() && f.isPlatformEmbedded && M && (C?.applications.length ?? 0) > 0,
        G = k
            ? A.intl.string(A.t.qDK8gQ)
            : U
              ? A.intl.string(A.t["3m8w+Q"])
              : y
                ? A.intl.string(A.t.eAktHv)
                : A.intl.string(A.t.qntSal),
        V = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = d.A.getState(),
                r = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: E.x.STREAM };
            null != v && (r.desktopSettings = { sourceId: v, sound: !b }),
                (0, l.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !b }),
                o.A.setGoLiveSource(r);
        }, [v, b]);
    if (null == t)
        return (0, r.jsx)(s.Drp, {
            id: "share-your-screen",
            label: A.intl.string(A.t.fjBNo1),
            icon: s.Fzq,
            leadingAccessory: { type: "icon", icon: s.Fzq },
            action: n,
        });
    let F = f.isPlatformEmbedded
            ? (0, r.jsx)(s.Drp, { id: "stream-settings", label: A.intl.string(A.t.ytAD9d), children: D })
            : null,
        B = w
            ? (0, r.jsx)(s.sLh, {
                  id: "stream-settings-audio-enable",
                  label: y ? A.intl.string(A.t.af2Tw1) : A.intl.string(A.t.ZJEHt7),
                  checked: b,
                  action: V,
              })
            : null,
        j =
            !N || T || x
                ? null
                : (0, r.jsx)(s.Drp, {
                      id: "change-windows",
                      label: G,
                      icon: s.Fzq,
                      leadingAccessory: { type: "icon", icon: s.Fzq },
                      action: P,
                  }),
        H = (0, r.jsx)(s.Drp, {
            id: "stop-streaming",
            color: "danger",
            label: A.intl.string(A.t.S5anIc),
            icon: s.GT3,
            leadingAccessory: { type: "icon", icon: s.GT3 },
            action: () => (0, c.A)(t),
        });
    return y
        ? (0, r.jsxs)(r.Fragment, { children: [H, j, F, B] })
        : (0, r.jsxs)(r.Fragment, { children: [F, I ? L : null, B, j, H] });
}
