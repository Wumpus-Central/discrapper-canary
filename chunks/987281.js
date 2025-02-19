n.d(t, { default: () => T });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(846027),
    a = n(239091),
    c = n(287734),
    s = n(872810),
    u = n(410575),
    d = n(441061),
    f = n(431368),
    g = n(418469),
    b = n(701098),
    p = n(607783),
    h = n(786138),
    j = n(435064),
    m = n(779618),
    O = n(39604),
    S = n(258609),
    v = n(111672),
    y = n(441167),
    Z = n(700994),
    x = n(76021),
    I = n(199902),
    w = n(314897),
    C = n(592125),
    N = n(131951),
    P = n(594174),
    W = n(358085),
    k = n(569545),
    E = n(981631),
    M = n(65154),
    V = n(388032);
function A(e) {
    return (0, l.e7)([I.Z], () => {
        let t = I.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, k.V9)(t) === (0, k.V9)(e);
    });
}
function T(e) {
    let { stream: t, analyticsContext: n, appContext: I, exitFullscreen: T, onSelect: U, simplified: D = !1 } = e,
        F = (0, l.cj)([P.default], () => {
            var e;
            return (null == t ? void 0 : t.ownerId) === (null === (e = P.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
        }),
        J = (function (e) {
            let t = A(e),
                n = (0, m.Z)(N.Z),
                o = j.Z.getSettings().clipsEnabled,
                a = e.ownerId === w.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: s } = y.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                u = (0, l.e7)([j.Z], () => j.Z.getIsAtMaxSaveClipOperations()),
                d = (0, l.e7)([j.Z], () => j.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
            return n && c && t
                ? (0, r.jsx)(i.sNh, {
                      id: 'clip-stream',
                      disabled: !o || !(a || d) || u,
                      label: V.NW.string(V.t.U4URzM),
                      action: () => (a ? (0, O.C1)() : (0, O.C1)((0, k.V9)(e)))
                  })
                : null;
        })(t),
        Q = A(t),
        R = (function (e) {
            let t = A(e),
                n = (0, Z.Z)(e.ownerId, M.Yn.STREAM);
            return t ? n : null;
        })(t),
        _ = (function (e, t) {
            let n;
            let o = (0, l.e7)([S.Z], () => null != S.Z.getRemoteSessionId()),
                a = (0, l.e7)([C.Z], () => C.Z.getChannel(e.channelId), [e.channelId]),
                u = A(e),
                d = P.default.getCurrentUser(),
                f = null != d && e.ownerId === d.id;
            return ((n = f ? V.NW.string(V.t.S5anIS) : u ? V.NW.string(V.t.q3O3Jy) : V.NW.string(V.t['7Xq/nZ'])), o || (!f && u && (null == a ? void 0 : a.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(i.sNh, {
                      id: 'watch',
                      label: n,
                      action: u
                          ? function () {
                                (0, s.g)((0, k.V9)(e));
                            }
                          : function () {
                                c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e);
                            },
                      icon: t && u && i.g5r
                  });
        })(t, D),
        G = (function (e) {
            let t = A(e),
                n = (0, l.e7)([N.Z], () => N.Z.isLocalMute(e.ownerId, M.Yn.STREAM)),
                a = P.default.getCurrentUser(),
                c = null != a && e.ownerId === a.id;
            return !t || c
                ? null
                : (0, r.jsx)(i.S89, {
                      id: 'mute',
                      label: V.NW.string(V.t.sWmtIy),
                      action: function () {
                          o.Z.toggleLocalMute(e.ownerId, M.Yn.STREAM);
                      },
                      checked: n
                  });
        })(t),
        L = (function (e) {
            let t = A(e),
                n = e.ownerId === w.default.getId(),
                { sidechainAvailable: a } = v.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                c = (0, l.e7)([N.Z], () => N.Z.getSidechainCompression()),
                s = (0, l.e7)([N.Z], () => N.Z.getSidechainCompressionStrength());
            return n || !t || !a || (0, W.isWeb)()
                ? null
                : (0, r.jsxs)(i.kSQ, {
                      children: [
                          (0, r.jsx)(i.S89, {
                              id: 'sidechain-compression',
                              label: V.NW.string(V.t['/jwMtr']),
                              subtext: V.NW.string(V.t.zlA23N),
                              action: () => o.Z.setSidechainCompression(!c),
                              checked: c
                          }),
                          (0, r.jsx)(i.II_, {
                              id: 'sidechain-parameters',
                              label: V.NW.string(V.t.fhEzfn),
                              control: (e, t) => {
                                  var n, l;
                                  return (0, r.jsx)(
                                      i._wy,
                                      ((n = (function (e) {
                                          for (var t = 1; t < arguments.length; t++) {
                                              var n = null != arguments[t] ? arguments[t] : {},
                                                  r = Object.keys(n);
                                              'function' == typeof Object.getOwnPropertySymbols &&
                                                  (r = r.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                      })
                                                  )),
                                                  r.forEach(function (t) {
                                                      var r;
                                                      (r = n[t]),
                                                          t in e
                                                              ? Object.defineProperty(e, t, {
                                                                    value: r,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0
                                                                })
                                                              : (e[t] = r);
                                                  });
                                          }
                                          return e;
                                      })({}, e)),
                                      (l = l =
                                          {
                                              ref: t,
                                              value: s,
                                              maxValue: 100,
                                              onChange: (e) => o.Z.setSidechainCompressionStrength(e),
                                              'aria-label': V.NW.string(V.t.fhEzfn)
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(l)).forEach(function (e) {
                                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                            }),
                                      n)
                                  );
                              }
                          })
                      ]
                  });
        })(t),
        Y = (0, g.Z)(t, I, T),
        z = (0, f.Z)(t.channelId, t.ownerId),
        B = (0, d.Z)(t.channelId),
        q = (0, l.e7)([C.Z], () => C.Z.getChannel(t.channelId), [t.channelId]),
        H = (0, b.G)({
            stream: t,
            channelId: t.channelId,
            location: 'StreamContextMenu'
        }),
        X = (0, p.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId,
            location: 'StreamContextMenu',
            simplified: D
        }),
        K = (0, h.b)({
            stream: t,
            handleGoLive: () => (0, x.Z)(t.guildId, t.channelId, 'StreamContextMenu'),
            simplified: D,
            appContext: I
        });
    return D
        ? (0, r.jsxs)(i.v2r, {
              navId: 'stream-context',
              onClose: a.Zy,
              'aria-label': V.NW.string(V.t.Gl3Q39),
              variant: 'fixed',
              onSelect: U,
              children: [
                  (0, r.jsx)(i.kSQ, { children: F ? K : _ }),
                  (0, r.jsx)(i.kSQ, { children: R }),
                  L,
                  Q
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.Clw, {}),
                                (0, r.jsxs)(i.sNh, {
                                    id: 'more-options',
                                    label: V.NW.string(V.t.PdRCRk),
                                    children: [z, X, H, Y]
                                })
                            ]
                        })
                      : null
              ]
          })
        : (0, r.jsx)(u.Z, {
              context: n,
              object: E.qAy.CONTEXT_MENU,
              children: (0, r.jsxs)(i.v2r, {
                  navId: 'stream-context',
                  onClose: a.Zy,
                  'aria-label': V.NW.string(V.t.Gl3Q39),
                  variant: D ? 'fixed' : 'flexible',
                  onSelect: U,
                  children: [
                      (0, r.jsx)(i.kSQ, {
                          children: (0, r.jsxs)(r.Fragment, {
                              children: [_, J, G, H, X]
                          })
                      }),
                      (0, r.jsx)(i.kSQ, { children: R }),
                      L,
                      (0, r.jsxs)(i.kSQ, {
                          children: [(null == q ? void 0 : q.isGuildStageVoice()) ? null : B, z, Q && Y]
                      })
                  ]
              })
          });
}
