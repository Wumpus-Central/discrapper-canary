n.d(t, {
    Z: () => Y,
    _: () => W
});
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    u = n(481060),
    s = n(475179),
    c = n(872810),
    d = n(493773),
    f = n(763520),
    p = n(194082),
    m = n(710845),
    E = n(965048),
    g = n(590293),
    v = n(863908),
    h = n(871118),
    S = n(517525),
    b = n(352978),
    O = n(590076),
    y = n(507675),
    _ = n(199902),
    Z = n(314897),
    j = n(592125),
    I = n(131951),
    w = n(451478),
    P = n(685203),
    A = n(112560),
    C = n(442168),
    x = n(822296),
    R = n(916771),
    N = n(792517),
    T = (n(351483), n(979425)),
    D = n(651183),
    M = n(623825),
    L = n(981631),
    F = n(354459),
    k = n(65154),
    U = n(388032),
    V = n(519417);
let H = new m.Z('StreamTile');
function W(e) {
    let { participant: t, selected: n, focused: l, idle: i, width: a, premiumIndicator: u } = e,
        s = (0, o.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, M.K)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n || l ? null : (0, r.jsx)(D.Z, { participant: t }),
            l || null == s || s.state === L.jm8.ENDED || s.state === L.jm8.FAILED
                ? null
                : (0, r.jsx)(S.Z, {
                      size: p.ZP.Sizes.SMALL,
                      className: V.liveIndicator,
                      participant: t,
                      showQuality: !c && !i,
                      isUpsellEnabled: !1,
                      premiumIndicator: u
                  })
        ]
    });
}
function Y(e) {
    let { participant: t, selected: n, onVideoResize: i, fit: p, inPopout: m, inOverlayPopout: S = !1, width: D, focused: M, wrapperClassName: W, paused: Y = !1 } = e,
        z = I.Z.getVideoComponent(),
        G = (0, o.e7)([Z.default], () => Z.default.getId()),
        B = (0, g.Z)(),
        { stream: K, user: q, streamId: J } = t,
        X = (0, o.e7)([j.Z], () => j.Z.getChannel(K.channelId)),
        Q = (0, o.e7)([_.Z], () => _.Z.getActiveStreamForUser(q.id, K.guildId), [q.id, K.guildId]),
        $ = (0, o.e7)([_.Z], () => _.Z.getAllActiveStreams().length > 0),
        ee = (0, o.e7)([w.Z], () => w.Z.isFocused()),
        et = (null == Q ? void 0 : Q.ownerId) === G,
        en = et && !ee && !m,
        er = null != Q ? (0, v.Z)(Q, q, q.id === G, en) : null,
        el = D < 195;
    (0, d.ZP)(() => {
        !$ && (null == X ? void 0 : X.isGuildStageVoice()) && !et && ((0, c.rn)(K), s.Z.updateStageStreamSize(K.channelId, !1));
    });
    let ei = (0, E.c)(k.Yn.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            H.info(
                'Stream Tile State - activeStream: '
                    .concat(null != Q, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != z, ' | MediaEngine: ')
                    .concat(I.Z.supports(k.AN.VIDEO))
            );
        }, [z, Q, n]),
        B)
    )
        return (0, r.jsx)(T.Z, {
            stream: t.stream,
            isSmall: el,
            selected: n,
            isSelfStream: q.id === G
        });
    if ((null == Q ? void 0 : Q.state) === L.jm8.ENDED)
        return (0, r.jsx)(x.Z, {
            selected: n,
            stream: Q,
            width: D
        });
    if (null != ei || (null == Q ? void 0 : Q.state) === L.jm8.FAILED)
        return (0, r.jsx)(R.Z, {
            avError: null == ei ? void 0 : ei.type,
            avErrorContext: ei,
            selected: n,
            stream: t.stream,
            width: D
        });
    if (t.type === F.fO.HIDDEN_STREAM)
        return (0, r.jsx)(N.Z, {
            selected: n,
            participant: t,
            width: D
        });
    if (!(null != Q && !n && null != z && I.Z.supports(k.AN.VIDEO)))
        return (0, r.jsxs)('div', {
            className: a()(V.content, V.streamPreview, { [V.small]: el }),
            children: [
                (0, r.jsx)(h.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(V.absoluteFill, { [V.streamPreviewOpacity]: null == Q }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(P.a, {
                                  isSmall: el,
                                  children: (0, r.jsx)(u.Text, {
                                      variant: el ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: D < 175 ? U.intl.string(U.t['I6JG4+']) : U.intl.string(U.t['7Xq/nZ'])
                                  })
                              }),
                              $
                                  ? (0, r.jsx)(P.a, {
                                        className: V.addCTA,
                                        tooltip: U.intl.string(U.t.wCrzur),
                                        onClick: (e) => {
                                            (e.stopPropagation(), (0, c.rn)(K, { forceMultiple: !0 }));
                                        },
                                        isSmall: el,
                                        children: (0, r.jsx)(u.OgY, {
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
        return (0, r.jsxs)(r.Fragment, {
            children: [
                null != X
                    ? (0, r.jsx)(O.Z, {
                          focused: M,
                          channelId: X.id,
                          guildId: X.guild_id,
                          streamerId: q.id,
                          hasScreenMessage: null != er,
                          stream: K
                      })
                    : null,
                (0, r.jsx)(
                    b.Z,
                    {
                        onResize: i,
                        wrapperClassName: a()(V.videoWrapper, W),
                        className: V.content,
                        streamId: J,
                        videoComponent: z,
                        fit: p,
                        paused: Y || (null == Q ? void 0 : Q.state) === L.jm8.PAUSED || en,
                        videoSpinnerContext: et ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
                        userId: q.id,
                        streamKey: t.id
                    },
                    J
                ),
                null != er
                    ? (0, r.jsx)(
                          y.Z,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          ((r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r));
                                      }));
                              }
                              return e;
                          })({ size: (0, A.L)(D) }, er)
                      )
                    : null,
                (0, r.jsx)(C.Z, {
                    stream: K,
                    inPopout: m
                })
            ]
        });
}
