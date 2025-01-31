t.d(n, { default: () => N });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(846027),
    o = t(239091),
    s = t(287734),
    c = t(872810),
    u = t(410575),
    d = t(441061),
    g = t(431368),
    h = t(418469),
    f = t(701098),
    Z = t(607783),
    I = t(435064),
    m = t(779618),
    S = t(39604),
    p = t(258609),
    C = t(111672),
    x = t(441167),
    b = t(700994),
    v = t(199902),
    j = t(314897),
    w = t(592125),
    M = t(131951),
    V = t(594174),
    E = t(358085),
    k = t(569545),
    A = t(981631),
    T = t(65154),
    U = t(388032);
function J(e) {
    return (0, i.e7)([v.Z], () => {
        let n = v.Z.getActiveStreamForApplicationStream(e);
        return null != n && (0, k.V9)(n) === (0, k.V9)(e);
    });
}
function N(e) {
    let { stream: n, analyticsContext: t, appContext: v, exitFullscreen: N, onSelect: _ } = e,
        y = (function (e) {
            let n = J(e),
                t = (0, m.Z)(M.Z),
                a = I.Z.getSettings().clipsEnabled,
                o = e.ownerId === j.default.getId(),
                { enableViewerClipping: s, ignoreSenderPreference: c } = x.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                u = (0, i.e7)([I.Z], () => I.Z.getIsAtMaxSaveClipOperations()),
                d = (0, i.e7)([I.Z], () => I.Z.isViewerClippingAllowedForUser(e.ownerId)) || c;
            return t && s && n
                ? (0, l.jsx)(r.sNh, {
                      id: 'clip-stream',
                      disabled: !a || !(o || d) || u,
                      label: U.intl.string(U.t.U4URzM),
                      action: () => (o ? (0, S.C1)() : (0, S.C1)((0, k.V9)(e)))
                  })
                : null;
        })(n),
        F = J(n),
        R = (function (e) {
            let n = J(e),
                t = (0, b.Z)(e.ownerId, T.Yn.STREAM);
            return n ? t : null;
        })(n),
        Y = (function (e) {
            let n;
            let t = (0, i.e7)([p.Z], () => null != p.Z.getRemoteSessionId()),
                a = (0, i.e7)([w.Z], () => w.Z.getChannel(e.channelId), [e.channelId]),
                o = J(e),
                u = V.default.getCurrentUser(),
                d = null != u && e.ownerId === u.id;
            return ((n = d ? U.intl.string(U.t.S5anIS) : o ? U.intl.string(U.t.q3O3Jy) : U.intl.string(U.t['7Xq/nZ'])), t || (!d && o && (null == a ? void 0 : a.isGuildStageVoice())))
                ? null
                : (0, l.jsx)(r.sNh, {
                      id: 'watch',
                      label: n,
                      action: o
                          ? function () {
                                (0, c.g)((0, k.V9)(e));
                            }
                          : function () {
                                s.default.selectVoiceChannel(e.channelId), (0, c.rn)(e);
                            }
                  });
        })(n),
        G = (function (e) {
            let n = J(e),
                t = (0, i.e7)([M.Z], () => M.Z.isLocalMute(e.ownerId, T.Yn.STREAM)),
                o = V.default.getCurrentUser(),
                s = null != o && e.ownerId === o.id;
            return !n || s
                ? null
                : (0, l.jsx)(r.S89, {
                      id: 'mute',
                      label: U.intl.string(U.t.sWmtIy),
                      action: function () {
                          a.Z.toggleLocalMute(e.ownerId, T.Yn.STREAM);
                      },
                      checked: t
                  });
        })(n),
        L = (function (e) {
            let n = J(e),
                t = e.ownerId === j.default.getId(),
                { sidechainAvailable: o } = C.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                s = (0, i.e7)([M.Z], () => M.Z.getSidechainCompression()),
                c = (0, i.e7)([M.Z], () => M.Z.getSidechainCompressionStrength());
            return t || !n || !o || (0, E.isWeb)()
                ? null
                : (0, l.jsxs)(r.kSQ, {
                      children: [
                          (0, l.jsx)(r.S89, {
                              id: 'sidechain-compression',
                              label: U.intl.string(U.t['/jwMtr']),
                              action: () => a.Z.setSidechainCompression(!s),
                              checked: s
                          }),
                          (0, l.jsx)(r.II_, {
                              id: 'sidechain-parameters',
                              label: U.intl.string(U.t.fhEzfn),
                              control: (e, n) =>
                                  (0, l.jsx)(r._wy, {
                                      ...e,
                                      ref: n,
                                      value: c,
                                      maxValue: 100,
                                      onChange: (e) => a.Z.setSidechainCompressionStrength(e),
                                      'aria-label': U.intl.string(U.t.fhEzfn)
                                  })
                          })
                      ]
                  });
        })(n),
        Q = (0, h.Z)(n, v, N),
        z = (0, g.Z)(n.channelId, n.ownerId),
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
    return (0, l.jsx)(u.Z, {
        context: t,
        object: A.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.v2r, {
            navId: 'stream-context',
            onClose: o.Zy,
            'aria-label': U.intl.string(U.t.Gl3Q39),
            onSelect: _,
            children: [
                (0, l.jsxs)(r.kSQ, {
                    children: [Y, y, G, O, W]
                }),
                (0, l.jsx)(r.kSQ, { children: R }),
                L,
                (0, l.jsxs)(r.kSQ, {
                    children: [(null == q ? void 0 : q.isGuildStageVoice()) ? null : B, z, F && Q]
                })
            ]
        })
    });
}
