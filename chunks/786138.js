n.d(t, { b: () => y });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(846027),
    l = n(872810),
    c = n(803647),
    u = n(521147),
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
    let { stream: t, handleGoLive: n, showReportOption: y = !1, disableChangeWindows: v = !1, simplified: O = !1, appContext: I = m.IlC.APP } = e,
        { desktopSourceId: S } = (0, o.cj)([f.Z], () => {
            var e;
            let { desktopSource: t } = null != (e = f.Z.getGoLiveSource()) ? e : {};
            return { desktopSourceId: null == t ? void 0 : t.id };
        }),
        T = (0, o.e7)([d.Z], () => d.Z.getState().soundshareEnabled),
        N = f.Z.supports(E.AN.DESKTOP_CAPTURE_APPLICATIONS),
        A = (0, o.e7)([f.Z], () => f.Z.supports(E.AN.SOUNDSHARE)),
        C = (0, o.e7)([f.Z], () => f.Z.supportsScreenSoundshare()),
        R = (0, h.Z)(t, I),
        P = (0, p.Z)(t, I, g.Vq),
        w = null != S && A && (!S.startsWith('screen') || C),
        D = u.Z.useExperiment(
            { location: 'ManageStreamsMenu' },
            {
                disable: !w,
                autoTrackExposure: !0
            }
        ).enabled,
        L = i.useCallback(() => {
            (null == S ? void 0 : S.startsWith('prepicked:'))
                ? f.Z.getMediaEngine().eachConnection((e) => {
                      e.context === E.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : n();
        }, [S, n]),
        x = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = d.Z.getState(),
                r = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n
                    },
                    context: E.Yn.STREAM
                };
            null != S &&
                (r.desktopSettings = {
                    sourceId: S,
                    sound: !T
                }),
                (0, l.Rc)({
                    preset: e,
                    resolution: t,
                    frameRate: n,
                    soundshareEnabled: !T
                }),
                s.Z.setGoLiveSource(r);
        }, [S, T]);
    if (null == t)
        return (0, r.jsx)(a.sNh, {
            id: 'share-your-screen',
            label: b.NW.string(b.t.fjBNo6),
            icon: a.hGI,
            action: n
        });
    let M = _.isPlatformEmbedded
            ? (0, r.jsx)(a.sNh, {
                  id: 'stream-settings',
                  label: b.NW.string(b.t.ytAD9f),
                  children: R
              })
            : null,
        k = D
            ? (0, r.jsx)(a.S89, {
                  id: 'stream-settings-audio-enable',
                  label: O ? b.NW.string(b.t.af2Tw8) : b.NW.string(b.t.ZJEHt7),
                  checked: T,
                  action: x
              })
            : null,
        j =
            N && !v
                ? (0, r.jsx)(a.sNh, {
                      id: 'change-windows',
                      label: O ? b.NW.string(b.t.eAktHh) : b.NW.string(b.t.qntSam),
                      icon: a.hGI,
                      action: L
                  })
                : null,
        U = (0, r.jsx)(a.sNh, {
            id: 'stop-streaming',
            label: b.NW.string(b.t.S5anIS),
            icon: a.g5r,
            action: () => (0, c.Z)(t)
        });
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [U, j, M, k]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [M, y ? P : null, k, j, U]
          });
}
