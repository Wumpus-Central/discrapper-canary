n.d(t, {
    Z: () => B,
    _: () => W
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
    _ = n(517525),
    I = n(352978),
    S = n(576645),
    x = n(590076),
    E = n(507675),
    C = n(199902),
    Z = n(314897),
    y = n(592125),
    b = n(131951),
    N = n(451478),
    T = n(685203),
    A = n(112560),
    w = n(442168),
    P = n(822296),
    j = n(916771),
    R = n(792517),
    k = (n(351483), n(979425)),
    L = n(651183),
    O = n(623825),
    M = n(981631),
    D = n(354459),
    U = n(65154),
    F = n(388032),
    z = n(995544);
let V = new p.Z('StreamTile');
function W(e) {
    let { participant: t, selected: n, focused: a, idle: r, width: o, premiumIndicator: c } = e,
        u = (0, s.e7)([C.Z], () => C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, O.K)(o),
        [m, p] = l.useState(!1),
        h = (0, s.e7)([y.Z], () => y.Z.getChannel(null == u ? void 0 : u.channelId));
    return (
        (0, S.J)(h, () => {
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
                a || null == u || u.state === M.jm8.ENDED || u.state === M.jm8.FAILED
                    ? null
                    : (0, i.jsx)(_.Z, {
                          size: f.ZP.Sizes.SMALL,
                          className: z.liveIndicator,
                          participant: t,
                          showQuality: (!d && !r) || m,
                          isUpsellEnabled: !1,
                          premiumIndicator: c
                      })
            ]
        })
    );
}
function B(e) {
    let { participant: t, selected: n, onVideoResize: a, paused: f, fit: p, inPopout: _, inOverlayPopout: S = !1, width: L, focused: O, wrapperClassName: W } = e,
        B = b.Z.getVideoComponent(),
        Y = (0, s.e7)([Z.default], () => Z.default.getId()),
        G = (0, h.Z)(),
        { stream: H, user: J, streamId: q } = t,
        X = (0, s.e7)([y.Z], () => y.Z.getChannel(H.channelId)),
        K = (0, s.e7)([C.Z], () => C.Z.getActiveStreamForUser(J.id, H.guildId), [J.id, H.guildId]),
        Q = (0, s.e7)([C.Z], () => C.Z.getAllActiveStreams().length > 0),
        $ = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        ee = (null == K ? void 0 : K.ownerId) === Y,
        et = ee && !$ && !_,
        en = null != K ? (0, g.Z)(K, J, J.id === Y, et) : null,
        ei = L < 195;
    if (
        ((0, d.Z)(() => {
            !Q && (null == X ? void 0 : X.isGuildStageVoice()) && !ee && ((0, u.rn)(H), c.Z.updateStageStreamSize(H.channelId, !1));
        }),
        l.useEffect(() => {
            V.info(
                'Stream Tile State - activeStream: '
                    .concat(null != K, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != B, ' | MediaEngine: ')
                    .concat(b.Z.supports(U.AN.VIDEO))
            );
        }, [B, K, n]),
        G)
    )
        return (0, i.jsx)(k.Z, {
            stream: t.stream,
            isSmall: ei,
            selected: n,
            isSelfStream: J.id === Y
        });
    if ((null == K ? void 0 : K.state) === M.jm8.ENDED)
        return (0, i.jsx)(P.Z, {
            selected: n,
            stream: K,
            width: L
        });
    if ((null == K ? void 0 : K.state) === M.jm8.FAILED)
        return (0, i.jsx)(j.Z, {
            selected: n,
            stream: K,
            width: L
        });
    if (t.type === D.fO.HIDDEN_STREAM)
        return (0, i.jsx)(R.Z, {
            selected: n,
            participant: t,
            width: L
        });
    if (!(null != K && !n && null != B && b.Z.supports(U.AN.VIDEO)))
        return (0, i.jsxs)('div', {
            className: r()(z.content, z.streamPreview, { [z.small]: ei }),
            children: [
                (0, i.jsx)(v.Z, {
                    noText: !0,
                    className: r()(z.absoluteFill, { [z.streamPreviewOpacity]: null == K }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(T.a, {
                                  isSmall: ei,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: ei ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: L < 175 ? F.intl.string(F.t['I6JG4+']) : F.intl.string(F.t['7Xq/nZ'])
                                  })
                              }),
                              Q
                                  ? (0, i.jsx)(T.a, {
                                        className: z.addCTA,
                                        tooltip: F.intl.string(F.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(H, { forceMultiple: !0 });
                                        },
                                        isSmall: ei,
                                        children: (0, i.jsx)(o.OgY, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: z.addStreamIcon
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
                          focused: O,
                          channelId: X.id,
                          guildId: X.guild_id,
                          streamerId: J.id,
                          hasScreenMessage: null != en,
                          stream: H
                      })
                    : null,
                (0, i.jsx)(
                    I.Z,
                    {
                        onResize: a,
                        wrapperClassName: r()(z.videoWrapper, W),
                        className: z.content,
                        streamId: q,
                        videoComponent: B,
                        fit: p,
                        paused: f || et,
                        videoSpinnerContext: ee ? m.m.SELF_STREAM : m.m.REMOTE_STREAM,
                        userId: J.id
                    },
                    q
                ),
                null != en
                    ? (0, i.jsx)(E.Z, {
                          size: (0, A.L)(L),
                          ...en
                      })
                    : null,
                (0, i.jsx)(w.Z, {
                    stream: H,
                    inPopout: _
                })
            ]
        });
}
