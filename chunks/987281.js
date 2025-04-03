n.d(t, { default: () => _ });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(846027),
    a = n(239091),
    c = n(287734),
    s = n(872810),
    u = n(410575),
    d = n(100527),
    f = n(906732),
    g = n(441061),
    b = n(431368),
    p = n(418469),
    h = n(701098),
    j = n(607783),
    m = n(786138),
    O = n(435064),
    S = n(779618),
    Z = n(39604),
    v = n(258609),
    y = n(111672),
    I = n(441167),
    x = n(700994),
    w = n(76021),
    C = n(199902),
    N = n(314897),
    P = n(592125),
    E = n(131951),
    W = n(594174),
    k = n(358085),
    M = n(569545),
    A = n(981631),
    V = n(65154),
    T = n(388032);
function U(e) {
    return (0, l.e7)([C.Z], () => {
        let t = C.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, M.V9)(t) === (0, M.V9)(e);
    });
}
function _(e) {
    let { stream: t, analyticsContext: n, appContext: C, exitFullscreen: _, onSelect: D, onInteraction: R, simplified: F = !1 } = e,
        G = (0, l.cj)([W.default], () => {
            var e;
            return (null == t ? void 0 : t.ownerId) === (null == (e = W.default.getCurrentUser()) ? void 0 : e.id);
        }),
        J = (function (e) {
            let t = U(e),
                n = (0, S.Z)(E.Z),
                o = O.Z.getSettings().clipsEnabled,
                a = e.ownerId === N.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: s } = I.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                u = (0, l.e7)([O.Z], () => O.Z.getIsAtMaxSaveClipOperations()),
                d = (0, l.e7)([O.Z], () => O.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
            return n && c && t
                ? (0, r.jsx)(i.sNh, {
                      id: 'clip-stream',
                      disabled: !o || !(a || d) || u,
                      label: T.NW.string(T.t.U4URzM),
                      action: () => (a ? (0, Z.C1)() : (0, Z.C1)((0, M.V9)(e)))
                  })
                : null;
        })(t),
        Q = U(t),
        L = (function (e) {
            let t = U(e),
                n = (0, x.Z)(e.ownerId, V.Yn.STREAM);
            return t ? n : null;
        })(t),
        Y = (function (e, t) {
            let n,
                o = (0, l.e7)([v.Z], () => null != v.Z.getRemoteSessionId()),
                a = (0, l.e7)([P.Z], () => P.Z.getChannel(e.channelId), [e.channelId]),
                u = U(e),
                d = W.default.getCurrentUser(),
                f = null != d && e.ownerId === d.id;
            return ((n = f ? T.NW.string(T.t.S5anIS) : u ? T.NW.string(T.t.q3O3Jy) : T.NW.string(T.t['7Xq/nZ'])), o || (!f && u && (null == a ? void 0 : a.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(i.sNh, {
                      id: 'watch',
                      label: n,
                      action: u
                          ? function () {
                                (0, s.g)((0, M.V9)(e));
                            }
                          : function () {
                                c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e);
                            },
                      icon: t && u && i.g5r
                  });
        })(t, F),
        z = (function (e) {
            let t = U(e),
                n = (0, l.e7)([E.Z], () => E.Z.isLocalMute(e.ownerId, V.Yn.STREAM)),
                a = W.default.getCurrentUser(),
                c = null != a && e.ownerId === a.id;
            return !t || c
                ? null
                : (0, r.jsx)(i.S89, {
                      id: 'mute',
                      label: T.NW.string(T.t.sWmtIy),
                      action: function () {
                          o.Z.toggleLocalMute(e.ownerId, V.Yn.STREAM);
                      },
                      checked: n
                  });
        })(t),
        B = (function (e) {
            let t = U(e),
                n = e.ownerId === N.default.getId(),
                { sidechainAvailable: a } = y.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                c = (0, l.e7)([E.Z], () => E.Z.getSidechainCompression()),
                s = (0, l.e7)([E.Z], () => E.Z.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, f.ZP)();
            return n || !t || !a || (0, k.isWeb)()
                ? null
                : (0, r.jsxs)(i.kSQ, {
                      children: [
                          (0, r.jsx)(i.S89, {
                              id: 'sidechain-compression',
                              label: T.NW.string(T.t['/jwMtr']),
                              subtext: T.NW.string(T.t.zlA23N),
                              action: () => o.Z.setSidechainCompression(!c, { analyticsLocations: u }),
                              checked: c
                          }),
                          (0, r.jsx)(i.II_, {
                              id: 'sidechain-parameters',
                              label: T.NW.string(T.t.fhEzfn),
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
                                              onChange: (e) => o.Z.setSidechainCompressionStrength(e, { analyticsLocations: u }),
                                              'aria-label': T.NW.string(T.t.fhEzfn)
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
        q = (0, p.Z)(t, C, _),
        X = (0, b.Z)(t.channelId, t.ownerId),
        H = (0, g.Z)(t.channelId),
        K = (0, l.e7)([P.Z], () => P.Z.getChannel(t.channelId), [t.channelId]),
        $ = (0, h.G)({
            stream: t,
            channelId: t.channelId
        }),
        ee = (0, j.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId,
            simplified: F
        }),
        et = (0, m.b)({
            stream: t,
            handleGoLive: () => (0, w.Z)(t.guildId, t.channelId, 'StreamContextMenu'),
            simplified: F,
            appContext: C
        }),
        { analyticsLocations: en } = (0, f.ZP)(d.Z.STREAM_CONTEXT_MENU);
    return F
        ? (0, r.jsx)(f.Gt, {
              value: en,
              children: (0, r.jsxs)(i.v2r, {
                  navId: 'stream-context',
                  onClose: a.Zy,
                  'aria-label': T.NW.string(T.t.Gl3Q39),
                  variant: 'fixed',
                  onSelect: D,
                  onInteraction: R,
                  children: [
                      (0, r.jsx)(i.kSQ, { children: G ? et : Y }),
                      (0, r.jsxs)(i.kSQ, {
                          children: [z, L]
                      }),
                      B,
                      Q
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(i.Clw, {}),
                                    (0, r.jsxs)(i.sNh, {
                                        id: 'more-options',
                                        label: T.NW.string(T.t.PdRCRk),
                                        children: [X, ee, $, q]
                                    })
                                ]
                            })
                          : null
                  ]
              })
          })
        : (0, r.jsx)(u.Z, {
              context: n,
              object: A.qAy.CONTEXT_MENU,
              children: (0, r.jsxs)(i.v2r, {
                  navId: 'stream-context',
                  onClose: a.Zy,
                  'aria-label': T.NW.string(T.t.Gl3Q39),
                  variant: F ? 'fixed' : 'flexible',
                  onSelect: D,
                  onInteraction: R,
                  children: [
                      (0, r.jsx)(i.kSQ, {
                          children: (0, r.jsxs)(r.Fragment, {
                              children: [Y, J, z, $, ee]
                          })
                      }),
                      (0, r.jsx)(i.kSQ, { children: L }),
                      B,
                      (0, r.jsxs)(i.kSQ, {
                          children: [(null == K ? void 0 : K.isGuildStageVoice()) ? null : H, X, Q && q]
                      })
                  ]
              })
          });
}
