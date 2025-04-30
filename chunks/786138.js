n.d(t, { b: () => b });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(846027),
    l = n(872810),
    c = n(803647),
    u = n(361291),
    d = n(131951),
    f = n(358085),
    _ = n(418469),
    p = n(776031),
    h = n(981631),
    m = n(231338),
    g = n(65154),
    E = n(388032);
function b(e) {
    let { stream: t, handleGoLive: n, showReportOption: b = !1, disableChangeWindows: y = !1, simplified: O = !1, appContext: v = h.IlC.APP } = e,
        { desktopSourceId: I } = (0, a.cj)([d.Z], () => {
            var e;
            let { desktopSource: t } = null != (e = d.Z.getGoLiveSource()) ? e : {};
            return { desktopSourceId: null == t ? void 0 : t.id };
        }),
        S = (0, a.e7)([u.Z], () => u.Z.getState().soundshareEnabled),
        T = d.Z.supports(g.AN.DESKTOP_CAPTURE_APPLICATIONS),
        A = (0, a.e7)([d.Z], () => d.Z.supports(g.AN.SOUNDSHARE)),
        N = (0, a.e7)([d.Z], () => d.Z.supportsScreenSoundshare()),
        C = (0, p.Z)(t, v),
        R = (0, _.Z)(t, v, m.Vq),
        P = null != I && A && (!I.startsWith('screen') || N),
        w = i.useCallback(() => {
            (null == I ? void 0 : I.startsWith('prepicked:'))
                ? d.Z.getMediaEngine().eachConnection((e) => {
                      e.context === g.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : n();
        }, [I, n]),
        D = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = u.Z.getState(),
                r = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n
                    },
                    context: g.Yn.STREAM
                };
            null != I &&
                (r.desktopSettings = {
                    sourceId: I,
                    sound: !S
                }),
                (0, l.Rc)({
                    preset: e,
                    resolution: t,
                    frameRate: n,
                    soundshareEnabled: !S
                }),
                s.Z.setGoLiveSource(r);
        }, [I, S]);
    if (null == t)
        return (0, r.jsx)(o.sNh, {
            id: 'share-your-screen',
            label: E.intl.string(E.t.fjBNo6),
            icon: o.hGI,
            action: n
        });
    let L = f.isPlatformEmbedded
            ? (0, r.jsx)(o.sNh, {
                  id: 'stream-settings',
                  label: E.intl.string(E.t.ytAD9f),
                  children: C
              })
            : null,
        x = P
            ? (0, r.jsx)(o.S89, {
                  id: 'stream-settings-audio-enable',
                  label: O ? E.intl.string(E.t.af2Tw8) : E.intl.string(E.t.ZJEHt7),
                  checked: S,
                  action: D
              })
            : null,
        M =
            T && !y
                ? (0, r.jsx)(o.sNh, {
                      id: 'change-windows',
                      label: O ? E.intl.string(E.t.eAktHh) : E.intl.string(E.t.qntSam),
                      icon: o.hGI,
                      action: w
                  })
                : null,
        k = (0, r.jsx)(o.sNh, {
            id: 'stop-streaming',
            label: E.intl.string(E.t.S5anIS),
            icon: o.g5r,
            action: () => (0, c.Z)(t)
        });
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [k, M, L, x]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [L, b ? R : null, x, M, k]
          });
}
