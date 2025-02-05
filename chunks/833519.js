n.d(t, {
    Z: () => Y,
    _: () => W
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    u = n(475179),
    c = n(872810),
    d = n(493773),
    m = n(763520),
    f = n(194082),
    h = n(710845),
    p = n(590293),
    v = n(863908),
    g = n(871118),
    E = n(517525),
    Z = n(352978),
    x = n(576645),
    S = n(590076),
    C = n(507675),
    b = n(199902),
    I = n(314897),
    _ = n(592125),
    N = n(131951),
    R = n(451478),
    y = n(685203),
    T = n(112560),
    j = n(442168),
    w = n(822296),
    A = n(916771),
    O = n(792517),
    P = (n(351483), n(979425)),
    k = n(651183),
    M = n(623825),
    D = n(981631),
    L = n(354459),
    F = n(65154),
    U = n(388032),
    V = n(995544);
let z = new h.Z('StreamTile');
function W(e) {
    let { participant: t, selected: n, focused: r, idle: a, width: o, premiumIndicator: u } = e,
        c = (0, s.e7)([b.Z], () => b.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, M.K)(o),
        [m, h] = i.useState(!1),
        p = (0, s.e7)([_.Z], () => _.Z.getChannel(null == c ? void 0 : c.channelId));
    return (
        (0, x.J)(p, () => {
            let e = setTimeout(() => {
                    h(!0);
                }, 5000),
                t = setTimeout(() => {
                    h(!1);
                }, 15000);
            return () => {
                h(!1), clearTimeout(e), clearTimeout(t);
            };
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                n ? null : (0, l.jsx)(k.Z, { participant: t }),
                r || null == c || c.state === D.jm8.ENDED || c.state === D.jm8.FAILED
                    ? null
                    : (0, l.jsx)(E.Z, {
                          size: f.ZP.Sizes.SMALL,
                          className: V.liveIndicator,
                          participant: t,
                          showQuality: (!d && !a) || m,
                          isUpsellEnabled: !1,
                          premiumIndicator: u
                      })
            ]
        })
    );
}
function Y(e) {
    let { participant: t, selected: n, onVideoResize: r, paused: f, fit: h, inPopout: E, inOverlayPopout: x = !1, width: k, focused: M, wrapperClassName: W } = e,
        Y = N.Z.getVideoComponent(),
        H = (0, s.e7)([I.default], () => I.default.getId()),
        B = (0, p.Z)(),
        { stream: K, user: G, streamId: q } = t,
        J = (0, s.e7)([_.Z], () => _.Z.getChannel(K.channelId)),
        Q = (0, s.e7)([b.Z], () => b.Z.getActiveStreamForUser(G.id, K.guildId), [G.id, K.guildId]),
        X = (0, s.e7)([b.Z], () => b.Z.getAllActiveStreams().length > 0),
        $ = (0, s.e7)([R.Z], () => R.Z.isFocused()),
        ee = (null == Q ? void 0 : Q.ownerId) === H,
        et = ee && !$ && !E,
        en = null != Q ? (0, v.Z)(Q, G, G.id === H, et) : null,
        el = k < 195;
    if (
        ((0, d.ZP)(() => {
            !X && (null == J ? void 0 : J.isGuildStageVoice()) && !ee && ((0, c.rn)(K), u.Z.updateStageStreamSize(K.channelId, !1));
        }),
        i.useEffect(() => {
            z.info(
                'Stream Tile State - activeStream: '
                    .concat(null != Q, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != Y, ' | MediaEngine: ')
                    .concat(N.Z.supports(F.AN.VIDEO))
            );
        }, [Y, Q, n]),
        B)
    )
        return (0, l.jsx)(P.Z, {
            stream: t.stream,
            isSmall: el,
            selected: n,
            isSelfStream: G.id === H
        });
    if ((null == Q ? void 0 : Q.state) === D.jm8.ENDED)
        return (0, l.jsx)(w.Z, {
            selected: n,
            stream: Q,
            width: k
        });
    if ((null == Q ? void 0 : Q.state) === D.jm8.FAILED)
        return (0, l.jsx)(A.Z, {
            selected: n,
            stream: Q,
            width: k
        });
    if (t.type === L.fO.HIDDEN_STREAM)
        return (0, l.jsx)(O.Z, {
            selected: n,
            participant: t,
            width: k
        });
    if (!(null != Q && !n && null != Y && N.Z.supports(F.AN.VIDEO)))
        return (0, l.jsxs)('div', {
            className: a()(V.content, V.streamPreview, { [V.small]: el }),
            children: [
                (0, l.jsx)(g.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(V.absoluteFill, { [V.streamPreviewOpacity]: null == Q }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(y.a, {
                                  isSmall: el,
                                  children: (0, l.jsx)(o.Text, {
                                      variant: el ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: k < 175 ? U.intl.string(U.t['I6JG4+']) : U.intl.string(U.t['7Xq/nZ'])
                                  })
                              }),
                              X
                                  ? (0, l.jsx)(y.a, {
                                        className: V.addCTA,
                                        tooltip: U.intl.string(U.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, c.rn)(K, { forceMultiple: !0 });
                                        },
                                        isSmall: el,
                                        children: (0, l.jsx)(o.OgY, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: V.addStreamIcon
                                        })
                                    })
                                  : null
                          ]
                      })
            ]
        });
    else
        return (0, l.jsxs)(l.Fragment, {
            children: [
                null != J
                    ? (0, l.jsx)(S.Z, {
                          focused: M,
                          channelId: J.id,
                          guildId: J.guild_id,
                          streamerId: G.id,
                          hasScreenMessage: null != en,
                          stream: K
                      })
                    : null,
                (0, l.jsx)(
                    Z.Z,
                    {
                        onResize: r,
                        wrapperClassName: a()(V.videoWrapper, W),
                        className: V.content,
                        streamId: q,
                        videoComponent: Y,
                        fit: h,
                        paused: f || et,
                        videoSpinnerContext: ee ? m.m.SELF_STREAM : m.m.REMOTE_STREAM,
                        userId: G.id
                    },
                    q
                ),
                null != en
                    ? (0, l.jsx)(C.Z, {
                          size: (0, T.L)(k),
                          ...en
                      })
                    : null,
                (0, l.jsx)(j.Z, {
                    stream: K,
                    inPopout: E
                })
            ]
        });
}
