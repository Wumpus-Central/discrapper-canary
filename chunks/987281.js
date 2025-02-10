t.d(n, { default: () => J });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(846027),
    o = t(239091),
    s = t(287734),
    u = t(872810),
    c = t(410575),
    d = t(441061),
    g = t(431368),
    h = t(418469),
    f = t(701098),
    Z = t(607783),
    I = t(435064),
    m = t(779618),
    S = t(39604),
    p = t(258609),
    x = t(111672),
    C = t(441167),
    b = t(700994),
    v = t(199902),
    j = t(314897),
    w = t(592125),
    M = t(131951),
    V = t(594174),
    A = t(358085),
    E = t(569545),
    k = t(981631),
    T = t(65154),
    N = t(388032);
function U(e) {
    return (0, i.e7)([v.Z], () => {
        let n = v.Z.getActiveStreamForApplicationStream(e);
        return null != n && (0, E.V9)(n) === (0, E.V9)(e);
    });
}
function J(e) {
    let { stream: n, analyticsContext: t, appContext: v, exitFullscreen: J, onSelect: _ } = e,
        y = (function (e) {
            let n = U(e),
                t = (0, m.Z)(M.Z),
                a = I.Z.getSettings().clipsEnabled,
                o = e.ownerId === j.default.getId(),
                { enableViewerClipping: s, ignoreSenderPreference: u } = C.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                c = (0, i.e7)([I.Z], () => I.Z.getIsAtMaxSaveClipOperations()),
                d = (0, i.e7)([I.Z], () => I.Z.isViewerClippingAllowedForUser(e.ownerId)) || u;
            return t && s && n
                ? (0, l.jsx)(r.sNh, {
                      id: 'clip-stream',
                      disabled: !a || !(o || d) || c,
                      label: N.intl.string(N.t.U4URzM),
                      action: () => (o ? (0, S.C1)() : (0, S.C1)((0, E.V9)(e)))
                  })
                : null;
        })(n),
        F = U(n),
        R = (function (e) {
            let n = U(e),
                t = (0, b.Z)(e.ownerId, T.Yn.STREAM);
            return n ? t : null;
        })(n),
        Y = (function (e) {
            let n;
            let t = (0, i.e7)([p.Z], () => null != p.Z.getRemoteSessionId()),
                a = (0, i.e7)([w.Z], () => w.Z.getChannel(e.channelId), [e.channelId]),
                o = U(e),
                c = V.default.getCurrentUser(),
                d = null != c && e.ownerId === c.id;
            return ((n = d ? N.intl.string(N.t.S5anIS) : o ? N.intl.string(N.t.q3O3Jy) : N.intl.string(N.t['7Xq/nZ'])), t || (!d && o && (null == a ? void 0 : a.isGuildStageVoice())))
                ? null
                : (0, l.jsx)(r.sNh, {
                      id: 'watch',
                      label: n,
                      action: o
                          ? function () {
                                (0, u.g)((0, E.V9)(e));
                            }
                          : function () {
                                s.default.selectVoiceChannel(e.channelId), (0, u.rn)(e);
                            }
                  });
        })(n),
        z = (function (e) {
            let n = U(e),
                t = (0, i.e7)([M.Z], () => M.Z.isLocalMute(e.ownerId, T.Yn.STREAM)),
                o = V.default.getCurrentUser(),
                s = null != o && e.ownerId === o.id;
            return !n || s
                ? null
                : (0, l.jsx)(r.S89, {
                      id: 'mute',
                      label: N.intl.string(N.t.sWmtIy),
                      action: function () {
                          a.Z.toggleLocalMute(e.ownerId, T.Yn.STREAM);
                      },
                      checked: t
                  });
        })(n),
        G = (function (e) {
            let n = U(e),
                t = e.ownerId === j.default.getId(),
                { sidechainAvailable: o } = x.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                s = (0, i.e7)([M.Z], () => M.Z.getSidechainCompression()),
                u = (0, i.e7)([M.Z], () => M.Z.getSidechainCompressionStrength());
            return t || !n || !o || (0, A.isWeb)()
                ? null
                : (0, l.jsxs)(r.kSQ, {
                      children: [
                          (0, l.jsx)(r.S89, {
                              id: 'sidechain-compression',
                              label: N.intl.string(N.t['/jwMtr']),
                              subtext: N.intl.string(N.t.zlA23N),
                              action: () => a.Z.setSidechainCompression(!s),
                              checked: s
                          }),
                          (0, l.jsx)(r.II_, {
                              id: 'sidechain-parameters',
                              label: N.intl.string(N.t.fhEzfn),
                              control: (e, n) =>
                                  (0, l.jsx)(r._wy, {
                                      ...e,
                                      ref: n,
                                      value: u,
                                      maxValue: 100,
                                      onChange: (e) => a.Z.setSidechainCompressionStrength(e),
                                      'aria-label': N.intl.string(N.t.fhEzfn)
                                  })
                          })
                      ]
                  });
        })(n),
        L = (0, h.Z)(n, v, J),
        Q = (0, g.Z)(n.channelId, n.ownerId),
        B = (0, d.Z)(n.channelId),
        q = (0, i.e7)([w.Z], () => w.Z.getChannel(n.channelId), [n.channelId]),
        O = (0, f.G)({
            stream: n,
            channelId: n.channelId,
            location: 'StreamContextMenu'
        }),
        W = (0, Z.B)({
            userId: n.ownerId,
            channelId: n.channelId,
            guildId: n.guildId,
            location: 'StreamContextMenu'
        });
    return (0, l.jsx)(c.Z, {
        context: t,
        object: k.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.v2r, {
            navId: 'stream-context',
            onClose: o.Zy,
            'aria-label': N.intl.string(N.t.Gl3Q39),
            onSelect: _,
            children: [
                (0, l.jsxs)(r.kSQ, {
                    children: [Y, y, z, O, W]
                }),
                (0, l.jsx)(r.kSQ, { children: R }),
                G,
                (0, l.jsxs)(r.kSQ, {
                    children: [(null == q ? void 0 : q.isGuildStageVoice()) ? null : B, Q, F && L]
                })
            ]
        })
    });
}
