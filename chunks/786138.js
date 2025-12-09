n.d(t, { b: () => y });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(846027),
    l = n(872810),
    c = n(960861),
    u = n(803647),
    d = n(361291),
    f = n(131951),
    p = n(358085),
    _ = n(418469),
    m = n(776031),
    h = n(981631),
    g = n(231338),
    E = n(65154),
    b = n(388032);
function y(e) {
    var t, n, y;
    let {
            stream: O,
            handleGoLive: v,
            showReportOption: S = !1,
            disableChangeWindows: I = !1,
            minimal: T = !1,
            appContext: A = h.IlC.APP,
        } = e,
        { desktopSourceId: C, lastPickedContent: N } = (0, a.cj)([c.ZP, f.Z], () => {
            var e;
            let { desktopSource: t } = null != (e = f.Z.getGoLiveSource()) ? e : {},
                n = c.ZP.getLastPickedContent();
            return {
                desktopSourceId: null == t ? void 0 : t.id,
                lastPickedContent: n,
            };
        }),
        P = (0, a.e7)([d.Z], () => d.Z.getState().soundshareEnabled),
        R = f.Z.supports(E.AN.DESKTOP_CAPTURE_APPLICATIONS),
        D = (0, a.e7)([f.Z], () => f.Z.supports(E.AN.SOUNDSHARE)),
        w = (0, a.e7)([f.Z], () => f.Z.supportsScreenSoundshare()),
        x = (0, m.Z)(O, A),
        L = (0, _.Z)(O, A, g.Vq),
        j = null != C && D && (!C.startsWith("screen") || w),
        M = (0, a.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, p.isLinux)()),
        k = i.useCallback(() => {
            (null == C ? void 0 : C.startsWith("prepicked:"))
                ? f.Z.getMediaEngine().eachConnection((e) => {
                      e.context === E.Yn.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : v();
        }, [C, v]),
        U = null != (t = null == C ? void 0 : C.startsWith("prepicked:")) && t,
        G =
            (0, p.isMac)() &&
            p.isPlatformEmbedded &&
            U &&
            (null != (n = null == N ? void 0 : N.windows.length) ? n : 0) > 0,
        Z =
            (0, p.isMac)() &&
            p.isPlatformEmbedded &&
            U &&
            (null != (y = null == N ? void 0 : N.applications.length) ? y : 0) > 0,
        B = G
            ? b.intl.string(b.t.qDK8gQ)
            : Z
              ? b.intl.string(b.t["3m8w+Q"])
              : T
                ? b.intl.string(b.t.eAktHv)
                : b.intl.string(b.t.qntSal),
        F = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = d.Z.getState(),
                r = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n,
                    },
                    context: E.Yn.STREAM,
                };
            null != C &&
                (r.desktopSettings = {
                    sourceId: C,
                    sound: !P,
                }),
                (0, l.Rc)({
                    preset: e,
                    resolution: t,
                    frameRate: n,
                    soundshareEnabled: !P,
                }),
                s.Z.setGoLiveSource(r);
        }, [C, P]);
    if (null == O)
        return (0, r.jsx)(o.sNh, {
            id: "share-your-screen",
            label: b.intl.string(b.t.fjBNo1),
            icon: o.hGI,
            action: v,
        });
    let V = p.isPlatformEmbedded
            ? (0, r.jsx)(o.sNh, {
                  id: "stream-settings",
                  label: b.intl.string(b.t.ytAD9d),
                  children: x,
              })
            : null,
        H = j
            ? (0, r.jsx)(o.S89, {
                  id: "stream-settings-audio-enable",
                  label: T ? b.intl.string(b.t.af2Tw1) : b.intl.string(b.t.ZJEHt7),
                  checked: P,
                  action: F,
              })
            : null,
        Y =
            !R || I || M
                ? null
                : (0, r.jsx)(o.sNh, {
                      id: "change-windows",
                      label: B,
                      icon: o.hGI,
                      action: k,
                  }),
        W = (0, r.jsx)(o.sNh, {
            id: "stop-streaming",
            color: "danger",
            label: b.intl.string(b.t.S5anIc),
            icon: o.g5r,
            action: () => (0, u.Z)(O),
        });
    return T
        ? (0, r.jsxs)(r.Fragment, {
              children: [W, Y, V, H],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [V, S ? L : null, H, Y, W],
          });
}
