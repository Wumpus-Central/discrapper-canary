n.d(t, {
    Z: function () {
        return G;
    },
    _: function () {
        return W;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    x = n(576645),
    _ = n(590076),
    C = n(507675),
    b = n(199902),
    E = n(314897),
    y = n(592125),
    Z = n(131951),
    T = n(451478),
    N = n(685203),
    A = n(112560),
    j = n(442168),
    w = n(822296),
    P = n(916771),
    R = n(792517),
    O = n(351483),
    M = n(979425),
    k = n(651183),
    L = n(623825),
    D = n(981631),
    U = n(354459),
    V = n(65154),
    F = n(388032),
    z = n(995544);
let B = new p.Z('StreamTile');
function W(e) {
    let { participant: t, selected: n, focused: r, idle: a, width: o, premiumIndicator: c } = e,
        u = (0, s.e7)([b.Z], () => b.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, L.K)(o),
        [m, p] = l.useState(!1),
        h = (0, s.e7)([y.Z], () => y.Z.getChannel(null == u ? void 0 : u.channelId));
    return (
        (0, x.J)(h, () => {
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
                n ? null : (0, i.jsx)(k.Z, { participant: t }),
                r || null == u || u.state === D.jm8.ENDED || u.state === D.jm8.FAILED
                    ? null
                    : (0, i.jsx)(S.Z, {
                          size: f.ZP.Sizes.SMALL,
                          className: z.liveIndicator,
                          participant: t,
                          showQuality: (!d && !a) || m,
                          isUpsellEnabled: !1,
                          premiumIndicator: c
                      })
            ]
        })
    );
}
function G(e) {
    let { participant: t, selected: n, onVideoResize: r, paused: f, fit: p, inPopout: S, inOverlayPopout: x = !1, width: O, focused: k, wrapperClassName: L } = e,
        W = Z.Z.getVideoComponent(),
        G = (0, s.e7)([E.default], () => E.default.getId()),
        H = (0, h.Z)(),
        { stream: Y, user: q, streamId: J } = t,
        X = (0, s.e7)([y.Z], () => y.Z.getChannel(Y.channelId)),
        K = (0, s.e7)([b.Z], () => b.Z.getActiveStreamForUser(q.id, Y.guildId), [q.id, Y.guildId]),
        Q = (0, s.e7)([b.Z], () => b.Z.getAllActiveStreams().length > 0),
        $ = (0, s.e7)([T.Z], () => T.Z.isFocused()),
        ee = (null == K ? void 0 : K.ownerId) === G,
        et = ee && !$ && !S,
        en = null != K ? (0, g.Z)(K, q, q.id === G, et) : null,
        ei = O < 195;
    (0, d.Z)(() => {
        !Q && (null == X ? void 0 : X.isGuildStageVoice()) && !ee && ((0, u.rn)(Y), c.Z.updateStageStreamSize(Y.channelId, !1));
    }),
        l.useEffect(() => {
            B.info(
                'Stream Tile State - activeStream: '
                    .concat(null != K, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != W, ' | MediaEngine: ')
                    .concat(Z.Z.supports(V.AN.VIDEO))
            );
        }, [W, K, n]);
    if (H)
        return (0, i.jsx)(M.Z, {
            stream: t.stream,
            isSmall: ei,
            selected: n,
            isSelfStream: q.id === G
        });
    if ((null == K ? void 0 : K.state) === D.jm8.ENDED)
        return (0, i.jsx)(w.Z, {
            selected: n,
            stream: K,
            width: O
        });
    if ((null == K ? void 0 : K.state) === D.jm8.FAILED)
        return (0, i.jsx)(P.Z, {
            selected: n,
            stream: K,
            width: O
        });
    else if (t.type === U.fO.HIDDEN_STREAM)
        return (0, i.jsx)(R.Z, {
            selected: n,
            participant: t,
            width: O
        });
    else if (!(null != K && !n && null != W && Z.Z.supports(V.AN.VIDEO)))
        return (0, i.jsxs)('div', {
            className: a()(z.content, z.streamPreview, { [z.small]: ei }),
            children: [
                (0, i.jsx)(v.Z, {
                    noText: !0,
                    className: a()(z.absoluteFill, { [z.streamPreviewOpacity]: null == K }),
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
                                      children: O < 175 ? F.intl.string(F.t['I6JG4+']) : F.intl.string(F.t['7Xq/nZ'])
                                  })
                              }),
                              Q
                                  ? (0, i.jsx)(N.a, {
                                        className: z.addCTA,
                                        tooltip: F.intl.string(F.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(Y, { forceMultiple: !0 });
                                        },
                                        isSmall: ei,
                                        children: (0, i.jsx)(o.EyePlusIcon, {
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
                    ? (0, i.jsx)(_.Z, {
                          focused: k,
                          channelId: X.id,
                          guildId: X.guild_id,
                          streamerId: q.id,
                          hasScreenMessage: null != en,
                          stream: Y
                      })
                    : null,
                (0, i.jsx)(
                    I.Z,
                    {
                        onResize: r,
                        wrapperClassName: a()(z.videoWrapper, L),
                        className: z.content,
                        streamId: J,
                        videoComponent: W,
                        fit: p,
                        paused: f || et,
                        videoSpinnerContext: ee ? m.m.SELF_STREAM : m.m.REMOTE_STREAM,
                        userId: q.id
                    },
                    J
                ),
                null != en
                    ? (0, i.jsx)(C.Z, {
                          size: (0, A.L)(O),
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
