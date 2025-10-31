n.d(t, { b: () => y });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(846027),
    l = n(872810),
    c = n(960861),
    u = n(803647),
    d = n(361291),
    f = n(131951),
    _ = n(358085),
    p = n(418469),
    h = n(776031),
    m = n(981631),
    g = n(231338),
    E = n(65154),
    b = n(388032);
function y(e) {
    var t, n, y;
    let {
            stream: O,
            handleGoLive: v,
            showReportOption: I = !1,
            disableChangeWindows: T = !1,
            minimal: S = !1,
            appContext: A = m.IlC.APP,
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
        R = (0, a.e7)([d.Z], () => d.Z.getState().soundshareEnabled),
        P = f.Z.supports(E.AN.DESKTOP_CAPTURE_APPLICATIONS),
        w = (0, a.e7)([f.Z], () => f.Z.supports(E.AN.SOUNDSHARE)),
        D = (0, a.e7)([f.Z], () => f.Z.supportsScreenSoundshare()),
        x = (0, h.Z)(O, A),
        L = (0, p.Z)(O, A, g.Vq),
        M = null != C && w && (!C.startsWith("screen") || D),
        j = (0, a.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, _.isLinux)()),
        k = i.useCallback(() => {
            (null == C ? void 0 : C.startsWith("prepicked:"))
                ? f.Z.getMediaEngine().eachConnection((e) => {
                      e.context === E.Yn.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : v();
        }, [C, v]),
        U = null != (t = null == C ? void 0 : C.startsWith("prepicked:")) && t,
        G =
            (0, _.isMac)() &&
            _.isPlatformEmbedded &&
            U &&
            (null != (n = null == N ? void 0 : N.windows.length) ? n : 0) > 0,
        B =
            (0, _.isMac)() &&
            _.isPlatformEmbedded &&
            U &&
            (null != (y = null == N ? void 0 : N.applications.length) ? y : 0) > 0,
        Z = G
            ? b.intl.string(b.t.qDK8gQ)
            : B
              ? b.intl.string(b.t["3m8w+Q"])
              : S
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
                    sound: !R,
                }),
                (0, l.Rc)({
                    preset: e,
                    resolution: t,
                    frameRate: n,
                    soundshareEnabled: !R,
                }),
                s.Z.setGoLiveSource(r);
        }, [C, R]);
    if (null == O)
        return (0, r.jsx)(o.sNh, {
            id: "share-your-screen",
            label: b.intl.string(b.t.fjBNo1),
            icon: o.hGI,
            action: v,
        });
    let V = _.isPlatformEmbedded
            ? (0, r.jsx)(o.sNh, {
                  id: "stream-settings",
                  label: b.intl.string(b.t.ytAD9d),
                  children: x,
              })
            : null,
        H = M
            ? (0, r.jsx)(o.S89, {
                  id: "stream-settings-audio-enable",
                  label: S ? b.intl.string(b.t.af2Tw1) : b.intl.string(b.t.ZJEHt7),
                  checked: R,
                  action: F,
              })
            : null,
        Y =
            !P || T || j
                ? null
                : (0, r.jsx)(o.sNh, {
                      id: "change-windows",
                      label: Z,
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
    return S
        ? (0, r.jsxs)(r.Fragment, {
              children: [W, Y, V, H],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [V, I ? L : null, H, Y, W],
          });
}
