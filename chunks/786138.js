n.d(t, { b: () => y });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(846027),
    l = n(872810),
    u = n(803647),
    c = n(521147),
    d = n(361291),
    f = n(131951),
    _ = n(358085),
    p = n(418469),
    h = n(776031),
    m = n(981631),
    g = n(231338),
    E = n(65154),
    v = n(388032);
function y(e) {
    let { stream: t, handleGoLive: n, showReportOption: y = !1, disableChangeWindows: I = !1, simplified: T = !1, appContext: b = m.IlC.APP } = e,
        { desktopSourceId: S } = (0, a.cj)([f.Z], () => {
            var e;
            let { desktopSource: t } = null !== (e = f.Z.getGoLiveSource()) && void 0 !== e ? e : {};
            return { desktopSourceId: null == t ? void 0 : t.id };
        }),
        A = (0, a.e7)([d.Z], () => d.Z.getState().soundshareEnabled),
        N = f.Z.supports(E.AN.DESKTOP_CAPTURE_APPLICATIONS),
        C = (0, a.e7)([f.Z], () => f.Z.supports(E.AN.SOUNDSHARE)),
        R = (0, a.e7)([f.Z], () => f.Z.supportsScreenSoundshare()),
        O = (0, h.Z)(t, b),
        D = (0, p.Z)(t, b, g.Vq),
        L = null != S && C && (!S.startsWith('screen') || R),
        x = c.Z.useExperiment(
            { location: 'ManageStreamsMenu' },
            {
                disable: !L,
                autoTrackExposure: !0
            }
        ).enabled,
        P = r.useCallback(() => {
            (null == S ? void 0 : S.startsWith('prepicked:'))
                ? f.Z.getMediaEngine().eachConnection((e) => {
                      e.context === E.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : n();
        }, [S, n]),
        w = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = d.Z.getState(),
                i = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n
                    },
                    context: E.Yn.STREAM
                };
            null != S &&
                (i.desktopSettings = {
                    sourceId: S,
                    sound: !A
                }),
                (0, l.Rc)({
                    preset: e,
                    resolution: t,
                    frameRate: n,
                    soundshareEnabled: !A
                }),
                o.Z.setGoLiveSource(i);
        }, [S, A]);
    if (null == t)
        return (0, i.jsx)(s.sNh, {
            id: 'share-your-screen',
            label: v.intl.string(v.t.fjBNo6),
            icon: s.hGI,
            action: n
        });
    let M = _.isPlatformEmbedded
            ? (0, i.jsx)(s.sNh, {
                  id: 'stream-settings',
                  label: v.intl.string(v.t.ytAD9f),
                  children: O
              })
            : null,
        k = x
            ? (0, i.jsx)(s.S89, {
                  id: 'stream-settings-audio-enable',
                  label: T ? v.intl.string(v.t.f2MUfX) : v.intl.string(v.t.ZJEHt7),
                  checked: T ? !A : A,
                  action: w
              })
            : null,
        U =
            N && !I
                ? (0, i.jsx)(s.sNh, {
                      id: 'change-windows',
                      label: T ? v.intl.string(v.t.eAktHh) : v.intl.string(v.t.qntSam),
                      icon: s.hGI,
                      action: P
                  })
                : null,
        G = (0, i.jsx)(s.sNh, {
            id: 'stop-streaming',
            label: v.intl.string(v.t.S5anIS),
            icon: s.g5r,
            action: () => (0, u.Z)(t)
        });
    return T
        ? (0, i.jsxs)(i.Fragment, {
              children: [G, U, M, k]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [M, y ? D : null, k, U, G]
          });
}
