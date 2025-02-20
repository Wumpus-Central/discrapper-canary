n.d(t, { b: () => b });
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
    p = n(358085),
    _ = n(418469),
    h = n(776031),
    m = n(981631),
    g = n(231338),
    E = n(65154),
    v = n(388032);
function b(e) {
    let { stream: t, handleGoLive: n, showReportOption: b = !1, disableChangeWindows: y = !1, simplified: O = !1, appContext: S = m.IlC.APP } = e,
        { desktopSourceId: I } = (0, o.cj)([f.Z], () => {
            var e;
            let { desktopSource: t } = null !== (e = f.Z.getGoLiveSource()) && void 0 !== e ? e : {};
            return { desktopSourceId: null == t ? void 0 : t.id };
        }),
        T = (0, o.e7)([d.Z], () => d.Z.getState().soundshareEnabled),
        N = f.Z.supports(E.AN.DESKTOP_CAPTURE_APPLICATIONS),
        A = (0, o.e7)([f.Z], () => f.Z.supports(E.AN.SOUNDSHARE)),
        C = (0, o.e7)([f.Z], () => f.Z.supportsScreenSoundshare()),
        R = (0, h.Z)(t, S),
        P = (0, _.Z)(t, S, g.Vq),
        w = null != I && A && (!I.startsWith('screen') || C),
        D = u.Z.useExperiment(
            { location: 'ManageStreamsMenu' },
            {
                disable: !w,
                autoTrackExposure: !0
            }
        ).enabled,
        x = i.useCallback(() => {
            (null == I ? void 0 : I.startsWith('prepicked:'))
                ? f.Z.getMediaEngine().eachConnection((e) => {
                      e.context === E.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : n();
        }, [I, n]),
        L = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = d.Z.getState(),
                r = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n
                    },
                    context: E.Yn.STREAM
                };
            null != I &&
                (r.desktopSettings = {
                    sourceId: I,
                    sound: !T
                }),
                (0, l.Rc)({
                    preset: e,
                    resolution: t,
                    frameRate: n,
                    soundshareEnabled: !T
                }),
                s.Z.setGoLiveSource(r);
        }, [I, T]);
    if (null == t)
        return (0, r.jsx)(a.sNh, {
            id: 'share-your-screen',
            label: v.NW.string(v.t.fjBNo6),
            icon: a.hGI,
            action: n
        });
    let M = p.isPlatformEmbedded
            ? (0, r.jsx)(a.sNh, {
                  id: 'stream-settings',
                  label: v.NW.string(v.t.ytAD9f),
                  children: R
              })
            : null,
        k = D
            ? (0, r.jsx)(a.S89, {
                  id: 'stream-settings-audio-enable',
                  label: O ? v.NW.string(v.t.f2MUfX) : v.NW.string(v.t.ZJEHt7),
                  checked: O ? !T : T,
                  action: L
              })
            : null,
        j =
            N && !y
                ? (0, r.jsx)(a.sNh, {
                      id: 'change-windows',
                      label: O ? v.NW.string(v.t.eAktHh) : v.NW.string(v.t.qntSam),
                      icon: a.hGI,
                      action: x
                  })
                : null,
        U = (0, r.jsx)(a.sNh, {
            id: 'stop-streaming',
            label: v.NW.string(v.t.S5anIS),
            icon: a.g5r,
            action: () => (0, c.Z)(t)
        });
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [U, j, M, k]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [M, b ? P : null, k, j, U]
          });
}
