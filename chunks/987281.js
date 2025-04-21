n.d(t, { default: () => D });
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
    P = n(314897),
    E = n(592125),
    k = n(131951),
    M = n(594174),
    A = n(358085),
    V = n(569545),
    N = n(981631),
    T = n(65154),
    U = n(388032);
function _(e) {
    return (0, l.e7)([C.Z], () => {
        let t = C.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, V.V9)(t) === (0, V.V9)(e);
    });
}
function D(e) {
    let { stream: t, analyticsContext: n, appContext: C, exitFullscreen: D, onSelect: R, onInteraction: F, simplified: G = !1 } = e,
        J = (0, l.cj)([M.default], () => {
            var e;
            return (null == t ? void 0 : t.ownerId) === (null == (e = M.default.getCurrentUser()) ? void 0 : e.id);
        }),
        Q = (function (e) {
            let t = _(e),
                n = (0, S.Z)(k.Z),
                o = O.Z.getSettings().clipsEnabled,
                a = e.ownerId === P.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: s } = I.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                u = (0, l.e7)([O.Z], () => O.Z.getIsAtMaxSaveClipOperations()),
                d = (0, l.e7)([O.Z], () => O.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
            return n && c && t
                ? (0, r.jsx)(i.sNh, {
                      id: 'clip-stream',
                      disabled: !o || !(a || d) || u,
                      label: U.intl.string(U.t.U4URzM),
                      action: () => (a ? (0, Z.C1)() : (0, Z.C1)((0, V.V9)(e)))
                  })
                : null;
        })(t),
        L = _(t),
        Y = (function (e) {
            let t = _(e),
                n = (0, x.Z)(e.ownerId, T.Yn.STREAM);
            return t ? n : null;
        })(t),
        z = (function (e, t) {
            let n,
                o = (0, l.e7)([v.Z], () => null != v.Z.getRemoteSessionId()),
                a = (0, l.e7)([E.Z], () => E.Z.getChannel(e.channelId), [e.channelId]),
                u = _(e),
                d = M.default.getCurrentUser(),
                f = null != d && e.ownerId === d.id;
            return ((n = f ? U.intl.string(U.t.S5anIS) : u ? U.intl.string(U.t.q3O3Jy) : U.intl.string(U.t['7Xq/nZ'])), o || (!f && u && (null == a ? void 0 : a.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(i.sNh, {
                      id: 'watch',
                      label: n,
                      action: u
                          ? function () {
                                (0, s.g)((0, V.V9)(e));
                            }
                          : function () {
                                c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e);
                            },
                      icon: t && u && i.g5r
                  });
        })(t, G),
        B = (function (e) {
            let t = _(e),
                n = (0, l.e7)([k.Z], () => k.Z.isLocalMute(e.ownerId, T.Yn.STREAM)),
                a = M.default.getCurrentUser(),
                c = null != a && e.ownerId === a.id;
            return !t || c
                ? null
                : (0, r.jsx)(i.S89, {
                      id: 'mute',
                      label: U.intl.string(U.t.sWmtIy),
                      action: function () {
                          o.Z.toggleLocalMute(e.ownerId, T.Yn.STREAM);
                      },
                      checked: n
                  });
        })(t),
        q = (function (e) {
            let t = _(e),
                n = e.ownerId === P.default.getId(),
                { sidechainAvailable: a } = y.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                c = (0, l.e7)([k.Z], () => k.Z.getSidechainCompression()),
                s = (0, l.e7)([k.Z], () => k.Z.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, f.ZP)();
            return n || !t || !a || (0, A.isWeb)()
                ? null
                : (0, r.jsxs)(i.kSQ, {
                      children: [
                          (0, r.jsx)(i.S89, {
                              id: 'sidechain-compression',
                              label: U.intl.string(U.t['/jwMtr']),
                              subtext: U.intl.string(U.t.zlA23N),
                              action: () => o.Z.setSidechainCompression(!c, { analyticsLocations: u }),
                              checked: c
                          }),
                          (0, r.jsx)(i.II_, {
                              id: 'sidechain-parameters',
                              label: U.intl.string(U.t.fhEzfn),
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
                                              'aria-label': U.intl.string(U.t.fhEzfn)
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
        W = (0, p.Z)(t, C, D),
        X = (0, b.Z)(t.channelId, t.ownerId),
        H = (0, g.Z)(t.channelId),
        K = (0, l.e7)([E.Z], () => E.Z.getChannel(t.channelId), [t.channelId]),
        $ = (0, h.G)({
            stream: t,
            channelId: t.channelId
        }),
        ee = (0, j.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId,
            simplified: G
        }),
        et = (0, m.b)({
            stream: t,
            handleGoLive: () => (0, w.Z)(t.guildId, t.channelId, 'StreamContextMenu'),
            simplified: G,
            appContext: C
        }),
        { analyticsLocations: en } = (0, f.ZP)(d.Z.STREAM_CONTEXT_MENU);
    return G
        ? (0, r.jsx)(f.Gt, {
              value: en,
              children: (0, r.jsxs)(i.v2r, {
                  navId: 'stream-context',
                  onClose: a.Zy,
                  'aria-label': U.intl.string(U.t.Gl3Q39),
                  variant: 'fixed',
                  onSelect: R,
                  onInteraction: F,
                  children: [
                      (0, r.jsx)(i.kSQ, { children: J ? et : z }),
                      (0, r.jsxs)(i.kSQ, {
                          children: [B, Y]
                      }),
                      q,
                      L
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(i.Clw, {}),
                                    (0, r.jsxs)(i.sNh, {
                                        id: 'more-options',
                                        label: U.intl.string(U.t.PdRCRk),
                                        children: [X, ee, $, W]
                                    })
                                ]
                            })
                          : null
                  ]
              })
          })
        : (0, r.jsx)(u.Z, {
              context: n,
              object: N.qAy.CONTEXT_MENU,
              children: (0, r.jsxs)(i.v2r, {
                  navId: 'stream-context',
                  onClose: a.Zy,
                  'aria-label': U.intl.string(U.t.Gl3Q39),
                  variant: G ? 'fixed' : 'flexible',
                  onSelect: R,
                  onInteraction: F,
                  children: [
                      (0, r.jsx)(i.kSQ, {
                          children: (0, r.jsxs)(r.Fragment, {
                              children: [z, Q, B, $, ee]
                          })
                      }),
                      (0, r.jsx)(i.kSQ, { children: Y }),
                      q,
                      (0, r.jsxs)(i.kSQ, {
                          children: [(null == K ? void 0 : K.isGuildStageVoice()) ? null : H, X, L && W]
                      })
                  ]
              })
          });
}
