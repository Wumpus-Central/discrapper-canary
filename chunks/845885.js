n.d(t, {
    E: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(827343),
    l = n(401843),
    c = n(571044),
    u = n(338771),
    d = n(929921),
    f = n(430452),
    p = n(723702),
    _ = n(74329),
    h = n(361618),
    m = n(652215),
    g = n(818348),
    E = n(731854),
    y = n(985018);

function b(e) {
    var t, n, b;
    let {
            stream: O,
            handleGoLive: v,
            showReportOption: A = !1,
            disableChangeWindows: I = !1,
            minimal: S = !1,
            appContext: T = m.BRT.APP,
        } = e,
        { desktopSourceId: C, lastPickedContent: N } = (0, a.cf)([c.Ay, f.A], () => {
            var e;
            let { desktopSource: t } = null != (e = f.A.getGoLiveSource()) ? e : {},
                n = c.Ay.getLastPickedContent();
            return {
                desktopSourceId: null == t ? void 0 : t.id,
                lastPickedContent: n,
            };
        }),
        w = (0, a.bG)([d.A], () => d.A.getState().soundshareEnabled),
        R = f.A.supports(E.O5.DESKTOP_CAPTURE_APPLICATIONS),
        P = (0, a.bG)([f.A], () => f.A.supports(E.O5.SOUNDSHARE)),
        D = (0, a.bG)([f.A], () => f.A.supportsScreenSoundshare()),
        x = (0, h.A)(O, T),
        L = (0, _.A)(O, T, g.FX),
        j = null != C && P && (!C.startsWith("screen") || D),
        M = (0, a.bG)([f.A], () => f.A.getUseSystemScreensharePicker() && (0, p.isLinux)()),
        k = i.useCallback(() => {
            (null == C ? void 0 : C.startsWith("prepicked:"))
                ? f.A.getMediaEngine().eachConnection((e) => {
                      e.context === E.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : v();
        }, [C, v]),
        U = null != (t = null == C ? void 0 : C.startsWith("prepicked:")) && t,
        G =
            (0, p.isMac)() &&
            p.isPlatformEmbedded &&
            U &&
            (null != (n = null == N ? void 0 : N.windows.length) ? n : 0) > 0,
        V =
            (0, p.isMac)() &&
            p.isPlatformEmbedded &&
            U &&
            (null != (b = null == N ? void 0 : N.applications.length) ? b : 0) > 0,
        F = G
            ? y.intl.string(y.t.qDK8gQ)
            : V
              ? y.intl.string(y.t["3m8w+Q"])
              : S
                ? y.intl.string(y.t.eAktHv)
                : y.intl.string(y.t.qntSal),
        B = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = d.A.getState(),
                r = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n,
                    },
                    context: E.x.STREAM,
                };
            null != C &&
                (r.desktopSettings = {
                    sourceId: C,
                    sound: !w,
                }),
                (0, l.Xd)({
                    preset: e,
                    resolution: t,
                    frameRate: n,
                    soundshareEnabled: !w,
                }),
                o.A.setGoLiveSource(r);
        }, [C, w]);
    if (null == O)
        return (0, r.jsx)(s.Drp, {
            id: "share-your-screen",
            label: y.intl.string(y.t.fjBNo1),
            icon: s.Fzq,
            leadingAccessory: {
                type: "icon",
                icon: s.Fzq,
            },
            action: v,
        });
    let H = p.isPlatformEmbedded
            ? (0, r.jsx)(s.Drp, {
                  id: "stream-settings",
                  label: y.intl.string(y.t.ytAD9d),
                  children: x,
              })
            : null,
        Y = j
            ? (0, r.jsx)(s.sLh, {
                  id: "stream-settings-audio-enable",
                  label: S ? y.intl.string(y.t.af2Tw1) : y.intl.string(y.t.ZJEHt7),
                  checked: w,
                  action: B,
              })
            : null,
        W =
            !R || I || M
                ? null
                : (0, r.jsx)(s.Drp, {
                      id: "change-windows",
                      label: F,
                      icon: s.Fzq,
                      leadingAccessory: {
                          type: "icon",
                          icon: s.Fzq,
                      },
                      action: k,
                  }),
        K = (0, r.jsx)(s.Drp, {
            id: "stop-streaming",
            color: "danger",
            label: y.intl.string(y.t.S5anIc),
            icon: s.GT3,
            leadingAccessory: {
                type: "icon",
                icon: s.GT3,
            },
            action: () => (0, u.A)(O),
        });
    return S
        ? (0, r.jsxs)(r.Fragment, {
              children: [K, W, H, Y],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [H, A ? L : null, Y, W, K],
          });
}
