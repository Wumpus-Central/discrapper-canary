n.d(t, {
    Z: function () {
        return B;
    },
    _: function () {
        return G;
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
    _ = n(576645),
    x = n(590076),
    E = n(507675),
    C = n(199902),
    Z = n(314897),
    y = n(592125),
    b = n(131951),
    T = n(451478),
    A = n(685203),
    N = n(112560),
    w = n(442168),
    j = n(822296),
    P = n(916771),
    R = n(792517),
    M = n(979425),
    O = n(651183),
    L = n(623825),
    k = n(981631),
    D = n(354459),
    U = n(65154),
    V = n(388032),
    F = n(995544);
let W = new p.Z('StreamTile');
function G(e) {
    let { participant: t, selected: n, focused: r, idle: a, width: o, premiumIndicator: c } = e,
        u = (0, s.e7)([C.Z], () => C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, L.K)(o),
        [m, p] = l.useState(!1),
        h = (0, s.e7)([y.Z], () => y.Z.getChannel(null == u ? void 0 : u.channelId));
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
                n ? null : (0, i.jsx)(O.Z, { participant: t }),
                r || null == u || u.state === k.jm8.ENDED || u.state === k.jm8.FAILED
                    ? null
                    : (0, i.jsx)(S.Z, {
                          size: f.ZP.Sizes.SMALL,
                          className: F.liveIndicator,
                          participant: t,
                          showQuality: (!d && !a) || m,
                          isUpsellEnabled: !1,
                          premiumIndicator: c
                      })
            ]
        })
    );
}
function B(e) {
    let { participant: t, selected: n, onVideoResize: r, paused: f, fit: p, inPopout: S, width: _, focused: O, wrapperClassName: L } = e,
        G = b.Z.getVideoComponent(),
        B = (0, s.e7)([Z.default], () => Z.default.getId()),
        z = (0, h.Z)(),
        { stream: H, user: Y, streamId: J } = t,
        q = (0, s.e7)([y.Z], () => y.Z.getChannel(H.channelId)),
        X = (0, s.e7)([C.Z], () => C.Z.getActiveStreamForUser(Y.id, H.guildId), [Y.id, H.guildId]),
        K = (0, s.e7)([C.Z], () => C.Z.getAllActiveStreams().length > 0),
        Q = (0, s.e7)([T.Z], () => T.Z.isFocused()),
        $ = (null == X ? void 0 : X.ownerId) === B,
        ee = $ && !Q && !S,
        et = null != X ? (0, g.Z)(X, Y, Y.id === B, ee) : null,
        en = _ < 195;
    if (
        ((0, d.Z)(() => {
            !K && (null == q ? void 0 : q.isGuildStageVoice()) && !$ && ((0, u.rn)(H), c.Z.updateStageStreamSize(H.channelId, !1));
        }),
        l.useEffect(() => {
            W.info(
                'Stream Tile State - activeStream: '
                    .concat(null != X, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != G, ' | MediaEngine: ')
                    .concat(b.Z.supports(U.AN.VIDEO))
            );
        }, [G, X, n]),
        z)
    )
        return (0, i.jsx)(M.Z, {
            stream: t.stream,
            isSmall: en,
            selected: n,
            isSelfStream: Y.id === B
        });
    if ((null == X ? void 0 : X.state) === k.jm8.ENDED)
        return (0, i.jsx)(j.Z, {
            selected: n,
            stream: X,
            width: _
        });
    if ((null == X ? void 0 : X.state) === k.jm8.FAILED)
        return (0, i.jsx)(P.Z, {
            selected: n,
            stream: X,
            width: _
        });
    else if (t.type === D.fO.HIDDEN_STREAM)
        return (0, i.jsx)(R.Z, {
            selected: n,
            participant: t,
            width: _
        });
    else if (null != X && !n && null != G && b.Z.supports(U.AN.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != q
                    ? (0, i.jsx)(x.Z, {
                          focused: O,
                          channelId: q.id,
                          guildId: q.guild_id,
                          streamerId: Y.id,
                          hasScreenMessage: null != et,
                          stream: H
                      })
                    : null,
                (0, i.jsx)(
                    I.Z,
                    {
                        onResize: r,
                        wrapperClassName: a()(F.videoWrapper, L),
                        className: F.content,
                        streamId: J,
                        videoComponent: G,
                        fit: p,
                        paused: f || ee,
                        videoSpinnerContext: $ ? m.m.SELF_STREAM : m.m.REMOTE_STREAM,
                        userId: Y.id
                    },
                    J
                ),
                null != et
                    ? (0, i.jsx)(E.Z, {
                          size: (0, N.L)(_),
                          ...et
                      })
                    : null,
                (0, i.jsx)(w.Z, {
                    stream: H,
                    inPopout: S
                })
            ]
        });
    else
        return (0, i.jsxs)('div', {
            className: a()(F.content, F.streamPreview, { [F.small]: en }),
            children: [
                (0, i.jsx)(v.Z, {
                    noText: !0,
                    className: a()(F.absoluteFill, { [F.streamPreviewOpacity]: null == X }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(A.a, {
                                  isSmall: en,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: en ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: _ < 175 ? V.intl.string(V.t['I6JG4+']) : V.intl.string(V.t['7Xq/nZ'])
                                  })
                              }),
                              K
                                  ? (0, i.jsx)(A.a, {
                                        className: F.addCTA,
                                        tooltip: V.intl.string(V.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(H, { forceMultiple: !0 });
                                        },
                                        isSmall: en,
                                        children: (0, i.jsx)(o.EyePlusIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: F.addStreamIcon
                                        })
                                    })
                                  : null
                          ]
                      })
            ]
        });
}
