t.d(n, { default: () => Q });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(846027),
    o = t(239091),
    s = t(287734),
    d = t(872810),
    c = t(410575),
    u = t(441061),
    g = t(431368),
    h = t(418469),
    f = t(701098),
    Z = t(607783),
    m = t(786138),
    x = t(435064),
    I = t(779618),
    S = t(39604),
    C = t(258609),
    v = t(111672),
    b = t(441167),
    p = t(700994),
    j = t(76021),
    w = t(199902),
    k = t(314897),
    M = t(592125),
    V = t(131951),
    A = t(594174),
    E = t(358085),
    N = t(569545),
    T = t(981631),
    U = t(65154),
    F = t(388032);
function J(e) {
    return (0, i.e7)([w.Z], () => {
        let n = w.Z.getActiveStreamForApplicationStream(e);
        return null != n && (0, N.V9)(n) === (0, N.V9)(e);
    });
}
function Q(e) {
    let { stream: n, analyticsContext: t, appContext: w, exitFullscreen: Q, onSelect: R, simplified: _ = !1 } = e,
        y = (0, i.cj)([A.default], () => {
            var e;
            return (null == n ? void 0 : n.ownerId) === (null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
        }),
        G = (function (e) {
            let n = J(e),
                t = (0, I.Z)(V.Z),
                a = x.Z.getSettings().clipsEnabled,
                o = e.ownerId === k.default.getId(),
                { enableViewerClipping: s, ignoreSenderPreference: d } = b.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                c = (0, i.e7)([x.Z], () => x.Z.getIsAtMaxSaveClipOperations()),
                u = (0, i.e7)([x.Z], () => x.Z.isViewerClippingAllowedForUser(e.ownerId)) || d;
            return t && s && n
                ? (0, l.jsx)(r.sNh, {
                      id: 'clip-stream',
                      disabled: !a || !(o || u) || c,
                      label: F.intl.string(F.t.U4URzM),
                      action: () => (o ? (0, S.C1)() : (0, S.C1)((0, N.V9)(e)))
                  })
                : null;
        })(n),
        L = J(n),
        Y = (function (e) {
            let n = J(e),
                t = (0, p.Z)(e.ownerId, U.Yn.STREAM);
            return n ? t : null;
        })(n),
        z = (function (e, n) {
            let t;
            let a = (0, i.e7)([C.Z], () => null != C.Z.getRemoteSessionId()),
                o = (0, i.e7)([M.Z], () => M.Z.getChannel(e.channelId), [e.channelId]),
                c = J(e),
                u = A.default.getCurrentUser(),
                g = null != u && e.ownerId === u.id;
            return ((t = g ? F.intl.string(F.t.S5anIS) : c ? F.intl.string(F.t.q3O3Jy) : F.intl.string(F.t['7Xq/nZ'])), a || (!g && c && (null == o ? void 0 : o.isGuildStageVoice())))
                ? null
                : (0, l.jsx)(r.sNh, {
                      id: 'watch',
                      label: t,
                      action: c
                          ? function () {
                                (0, d.g)((0, N.V9)(e));
                            }
                          : function () {
                                s.default.selectVoiceChannel(e.channelId), (0, d.rn)(e);
                            },
                      icon: n && c && r.g5r
                  });
        })(n, _),
        B = (function (e) {
            let n = J(e),
                t = (0, i.e7)([V.Z], () => V.Z.isLocalMute(e.ownerId, U.Yn.STREAM)),
                o = A.default.getCurrentUser(),
                s = null != o && e.ownerId === o.id;
            return !n || s
                ? null
                : (0, l.jsx)(r.S89, {
                      id: 'mute',
                      label: F.intl.string(F.t.sWmtIy),
                      action: function () {
                          a.Z.toggleLocalMute(e.ownerId, U.Yn.STREAM);
                      },
                      checked: t
                  });
        })(n),
        q = (function (e) {
            let n = J(e),
                t = e.ownerId === k.default.getId(),
                { sidechainAvailable: o } = v.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                s = (0, i.e7)([V.Z], () => V.Z.getSidechainCompression()),
                d = (0, i.e7)([V.Z], () => V.Z.getSidechainCompressionStrength());
            return t || !n || !o || (0, E.isWeb)()
                ? null
                : (0, l.jsxs)(r.kSQ, {
                      children: [
                          (0, l.jsx)(r.S89, {
                              id: 'sidechain-compression',
                              label: F.intl.string(F.t['/jwMtr']),
                              subtext: F.intl.string(F.t.zlA23N),
                              action: () => a.Z.setSidechainCompression(!s),
                              checked: s
                          }),
                          (0, l.jsx)(r.II_, {
                              id: 'sidechain-parameters',
                              label: F.intl.string(F.t.fhEzfn),
                              control: (e, n) =>
                                  (0, l.jsx)(r._wy, {
                                      ...e,
                                      ref: n,
                                      value: d,
                                      maxValue: 100,
                                      onChange: (e) => a.Z.setSidechainCompressionStrength(e),
                                      'aria-label': F.intl.string(F.t.fhEzfn)
                                  })
                          })
                      ]
                  });
        })(n),
        O = (0, h.Z)(n, w, Q),
        P = (0, g.Z)(n.channelId, n.ownerId),
        W = (0, u.Z)(n.channelId),
        H = (0, i.e7)([M.Z], () => M.Z.getChannel(n.channelId), [n.channelId]),
        X = (0, f.G)({
            stream: n,
            channelId: n.channelId,
            location: 'StreamContextMenu'
        }),
        D = (0, Z.B)({
            userId: n.ownerId,
            channelId: n.channelId,
            guildId: n.guildId,
            location: 'StreamContextMenu',
            simplified: _
        }),
        K = (0, m.b)({
            stream: n,
            handleGoLive: () => (0, j.Z)(n.guildId, n.channelId, 'StreamContextMenu'),
            simplified: _,
            appContext: w
        });
    return _
        ? (0, l.jsxs)(r.v2r, {
              navId: 'stream-context',
              onClose: o.Zy,
              'aria-label': F.intl.string(F.t.Gl3Q39),
              variant: 'fixed',
              onSelect: R,
              children: [
                  (0, l.jsx)(r.kSQ, { children: y ? K : z }),
                  (0, l.jsx)(r.kSQ, { children: Y }),
                  q,
                  L
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.Clw, {}),
                                (0, l.jsxs)(r.sNh, {
                                    id: 'more-options',
                                    label: F.intl.string(F.t.PdRCRk),
                                    children: [P, D, X, O]
                                })
                            ]
                        })
                      : null
              ]
          })
        : (0, l.jsx)(c.Z, {
              context: t,
              object: T.qAy.CONTEXT_MENU,
              children: (0, l.jsxs)(r.v2r, {
                  navId: 'stream-context',
                  onClose: o.Zy,
                  'aria-label': F.intl.string(F.t.Gl3Q39),
                  variant: _ ? 'fixed' : 'flexible',
                  onSelect: R,
                  children: [
                      (0, l.jsx)(r.kSQ, {
                          children: (0, l.jsxs)(l.Fragment, {
                              children: [z, G, B, X, D]
                          })
                      }),
                      (0, l.jsx)(r.kSQ, { children: Y }),
                      q,
                      (0, l.jsxs)(r.kSQ, {
                          children: [(null == H ? void 0 : H.isGuildStageVoice()) ? null : W, P, L && O]
                      })
                  ]
              })
          });
}
