n.d(t, {
    Z: function () {
        return G;
    },
    _: function () {
        return z;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(872810),
    d = n(493773),
    m = n(763520),
    f = n(194082),
    p = n(710845),
    h = n(590293),
    g = n(863908),
    v = n(871118),
    S = n(517525),
    I = n(352978),
    _ = n(576645),
    x = n(590076),
    E = n(507675),
    C = n(199902),
    y = n(314897),
    b = n(592125),
    Z = n(131951),
    T = n(451478),
    N = n(685203),
    A = n(112560),
    j = n(442168),
    w = n(822296),
    P = n(916771),
    R = n(792517),
    M = n(351483),
    O = n(979425),
    L = n(651183),
    k = n(623825),
    D = n(981631),
    U = n(354459),
    V = n(65154),
    F = n(388032),
    B = n(995544);
let W = new p.Z('StreamTile');
function z(e) {
    let { participant: t, selected: n, focused: a, idle: r, width: o, premiumIndicator: c } = e,
        u = (0, s.e7)([C.Z], () => C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, k.K)(o),
        [m, p] = l.useState(!1),
        h = (0, s.e7)([b.Z], () => b.Z.getChannel(null == u ? void 0 : u.channelId));
    return (
        (0, _.J)(h, () => {
            let e = setTimeout(() => {
                    p(!0);
                }, 5000),
                t = setTimeout(() => {
                    p(!1);
                }, 15000);
            return () => {
                p(!1), clearTimeout(e), clearTimeout(t);
            };
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                n ? null : (0, i.jsx)(L.Z, { participant: t }),
                a || null == u || u.state === D.jm8.ENDED || u.state === D.jm8.FAILED
                    ? null
                    : (0, i.jsx)(S.Z, {
                          size: f.ZP.Sizes.SMALL,
                          className: B.liveIndicator,
                          participant: t,
                          showQuality: (!d && !r) || m,
                          isUpsellEnabled: !1,
                          premiumIndicator: c
                      })
            ]
        })
    );
}
function G(e) {
    let { participant: t, selected: n, onVideoResize: a, paused: f, fit: p, inPopout: S, inOverlayPopout: _ = !1, width: M, focused: L, wrapperClassName: k } = e,
        z = Z.Z.getVideoComponent(),
        G = (0, s.e7)([y.default], () => y.default.getId()),
        H = (0, h.Z)(),
        { stream: Y, user: J, streamId: q } = t,
        X = (0, s.e7)([b.Z], () => b.Z.getChannel(Y.channelId)),
        K = (0, s.e7)([C.Z], () => C.Z.getActiveStreamForUser(J.id, Y.guildId), [J.id, Y.guildId]),
        Q = (0, s.e7)([C.Z], () => C.Z.getAllActiveStreams().length > 0),
        $ = (0, s.e7)([T.Z], () => T.Z.isFocused()),
        ee = (null == K ? void 0 : K.ownerId) === G,
        et = ee && !$ && !S,
        en = null != K ? (0, g.Z)(K, J, J.id === G, et) : null,
        ei = M < 195;
    (0, d.Z)(() => {
        !Q && (null == X ? void 0 : X.isGuildStageVoice()) && !ee && ((0, u.rn)(Y), c.Z.updateStageStreamSize(Y.channelId, !1));
    }),
        l.useEffect(() => {
            W.info(
                'Stream Tile State - activeStream: '
                    .concat(null != K, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != z, ' | MediaEngine: ')
                    .concat(Z.Z.supports(V.AN.VIDEO))
            );
        }, [z, K, n]);
    if (H)
        return (0, i.jsx)(O.Z, {
            stream: t.stream,
            isSmall: ei,
            selected: n,
            isSelfStream: J.id === G
        });
    if ((null == K ? void 0 : K.state) === D.jm8.ENDED)
        return (0, i.jsx)(w.Z, {
            selected: n,
            stream: K,
            width: M
        });
    if ((null == K ? void 0 : K.state) === D.jm8.FAILED)
        return (0, i.jsx)(P.Z, {
            selected: n,
            stream: K,
            width: M
        });
    else if (t.type === U.fO.HIDDEN_STREAM)
        return (0, i.jsx)(R.Z, {
            selected: n,
            participant: t,
            width: M
        });
    else if (!(null != K && !n && null != z && Z.Z.supports(V.AN.VIDEO)))
        return (0, i.jsxs)('div', {
            className: r()(B.content, B.streamPreview, { [B.small]: ei }),
            children: [
                (0, i.jsx)(v.Z, {
                    noText: !0,
                    className: r()(B.absoluteFill, { [B.streamPreviewOpacity]: null == K }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(N.a, {
                                  isSmall: ei,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: ei ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: M < 175 ? F.intl.string(F.t['I6JG4+']) : F.intl.string(F.t['7Xq/nZ'])
                                  })
                              }),
                              Q
                                  ? (0, i.jsx)(N.a, {
                                        className: B.addCTA,
                                        tooltip: F.intl.string(F.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(Y, { forceMultiple: !0 });
                                        },
                                        isSmall: ei,
                                        children: (0, i.jsx)(o.EyePlusIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: B.addStreamIcon
                                        })
                                    })
                                  : null
                          ]
                      })
            ]
        });
    else
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != X
                    ? (0, i.jsx)(x.Z, {
                          focused: L,
                          channelId: X.id,
                          guildId: X.guild_id,
                          streamerId: J.id,
                          hasScreenMessage: null != en,
                          stream: Y
                      })
                    : null,
                (0, i.jsx)(
                    I.Z,
                    {
                        onResize: a,
                        wrapperClassName: r()(B.videoWrapper, k),
                        className: B.content,
                        streamId: q,
                        videoComponent: z,
                        fit: p,
                        paused: f || et,
                        videoSpinnerContext: ee ? m.m.SELF_STREAM : m.m.REMOTE_STREAM,
                        userId: J.id
                    },
                    q
                ),
                null != en
                    ? (0, i.jsx)(E.Z, {
                          size: (0, A.L)(M),
                          ...en
                      })
                    : null,
                (0, i.jsx)(j.Z, {
                    stream: Y,
                    inPopout: S
                })
            ]
        });
}
