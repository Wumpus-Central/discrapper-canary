t.d(n, { default: () => U });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(846027),
    o = t(239091),
    s = t(287734),
    u = t(872810),
    c = t(410575),
    d = t(418469),
    g = t(701098),
    f = t(607783),
    h = t(435064),
    m = t(779618),
    Z = t(39604),
    I = t(258609),
    S = t(569545),
    x = t(352978),
    C = t(111672),
    p = t(441167),
    b = t(700994),
    v = t(199902),
    j = t(314897),
    w = t(592125),
    E = t(131951),
    V = t(594174),
    k = t(358085),
    A = t(1226),
    M = t(981631),
    N = t(65154),
    T = t(388032);
function L(e) {
    return (0, i.e7)([v.Z], () => {
        let n = v.Z.getActiveStreamForApplicationStream(e);
        return null != n && (0, S.V9)(n) === (0, S.V9)(e);
    });
}
function U(e) {
    let { stream: n, analyticsContext: t, appContext: v, exitFullscreen: U, onSelect: _ } = e,
        J = (function (e) {
            let n = L(e),
                t = (0, m.Z)(E.Z),
                a = h.Z.getSettings().clipsEnabled,
                o = e.ownerId === j.default.getId(),
                { enableViewerClipping: s, ignoreSenderPreference: u } = p.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                c = (0, i.e7)([h.Z], () => h.Z.getIsAtMaxSaveClipOperations()),
                d = (0, i.e7)([h.Z], () => h.Z.isViewerClippingAllowedForUser(e.ownerId)) || u;
            return t && s && n
                ? (0, l.jsx)(r.sNh, {
                      id: 'clip-stream',
                      disabled: !a || !(o || d) || c,
                      label: T.intl.string(T.t.U4URzM),
                      action: () => (o ? (0, Z.C1)() : (0, Z.C1)((0, S.V9)(e)))
                  })
                : null;
        })(n),
        O = L(n),
        R = (function (e) {
            let n = L(e),
                t = (0, b.Z)(e.ownerId, N.Yn.STREAM);
            return n ? t : null;
        })(n),
        y = (function (e) {
            let n;
            let t = (0, i.e7)([I.Z], () => null != I.Z.getRemoteSessionId()),
                a = (0, i.e7)([w.Z], () => w.Z.getChannel(e.channelId), [e.channelId]),
                o = L(e),
                c = V.default.getCurrentUser(),
                d = null != c && e.ownerId === c.id;
            return ((n = d ? T.intl.string(T.t.S5anIS) : o ? T.intl.string(T.t.q3O3Jy) : T.intl.string(T.t['7Xq/nZ'])), t || (!d && o && (null == a ? void 0 : a.isGuildStageVoice())))
                ? null
                : (0, l.jsx)(r.sNh, {
                      id: 'watch',
                      label: n,
                      action: o
                          ? function () {
                                (0, u.g)((0, S.V9)(e));
                            }
                          : function () {
                                s.default.selectVoiceChannel(e.channelId), (0, u.rn)(e);
                            }
                  });
        })(n),
        B = (function (e) {
            let n = L(e),
                t = (0, i.e7)([E.Z], () => E.Z.isLocalMute(e.ownerId, N.Yn.STREAM)),
                o = V.default.getCurrentUser(),
                s = null != o && e.ownerId === o.id;
            return !n || s
                ? null
                : (0, l.jsx)(r.S89, {
                      id: 'mute',
                      label: T.intl.string(T.t.sWmtIy),
                      action: function () {
                          a.Z.toggleLocalMute(e.ownerId, N.Yn.STREAM);
                      },
                      checked: t
                  });
        })(n),
        F = (function (e) {
            let n = L(e),
                t = e.ownerId === j.default.getId(),
                { sidechainAvailable: o } = C.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                s = (0, i.e7)([E.Z], () => E.Z.getSidechainCompression()),
                u = (0, i.e7)([E.Z], () => E.Z.getSidechainCompressionStrength());
            return t || !n || !o || (0, k.isWeb)()
                ? null
                : (0, l.jsxs)(r.kSQ, {
                      children: [
                          (0, l.jsx)(r.S89, {
                              id: 'sidechain-compression',
                              label: T.intl.string(T.t['/jwMtr']),
                              action: () => a.Z.setSidechainCompression(!s),
                              checked: s
                          }),
                          (0, l.jsx)(r.II_, {
                              id: 'sidechain-parameters',
                              label: T.intl.string(T.t.fhEzfn),
                              control: (e, n) =>
                                  (0, l.jsx)(r._wy, {
                                      ...e,
                                      ref: n,
                                      value: u,
                                      maxValue: 100,
                                      onChange: (e) => a.Z.setSidechainCompressionStrength(e),
                                      'aria-label': T.intl.string(T.t.fhEzfn)
                                  })
                          })
                      ]
                  });
        })(n),
        Q = (0, d.Z)(n, v, U),
        Y = (0, g.G)({
            stream: n,
            channelId: n.channelId,
            location: 'StreamContextMenu'
        }),
        z = (0, f.B)({
            userId: n.ownerId,
            channelId: n.channelId,
            guildId: n.guildId,
            location: 'StreamContextMenu'
        }),
        q = (function (e) {
            let n = (n) => {
                    (0, A.cq)(e, n);
                },
                t = (0, A.BO)(e);
            return (0, l.jsx)(r.II_, {
                id: 'stream-zoom',
                label: T.intl.string(T.t.B3kEDg),
                control: (e, i) =>
                    (0, l.jsx)(r._wy, {
                        ...e,
                        ref: i,
                        value: t,
                        maxValue: 300,
                        onChange: n,
                        minValue: 100,
                        'aria-label': T.intl.string(T.t.B3kEDg)
                    })
            });
        })(n),
        G = (function (e) {
            let n = (0, A.xN)(e);
            return (0, l.jsx)(r.S89, {
                id: 'fit',
                label: T.intl.string(T.t.mpnvra),
                action: () => {
                    (0, A.gI)(e, n === x.L.CONTAIN ? x.L.COVER : x.L.CONTAIN);
                },
                checked: n === x.L.COVER
            });
        })(n);
    return (0, l.jsx)(c.Z, {
        context: t,
        object: M.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.v2r, {
            navId: 'stream-context',
            onClose: o.Zy,
            'aria-label': T.intl.string(T.t.Gl3Q39),
            onSelect: _,
            children: [
                (0, l.jsxs)(r.kSQ, {
                    children: [y, J, B, Y, z]
                }),
                (0, l.jsx)(r.kSQ, { children: R }),
                (0, l.jsxs)(r.kSQ, {
                    children: [q, G]
                }),
                F,
                (0, l.jsx)(r.kSQ, { children: O && Q })
            ]
        })
    });
}
