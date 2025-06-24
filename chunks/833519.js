n.d(t, {
    Z: () => B,
    _: () => W
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    u = n(442837),
    o = n(481060),
    s = n(475179),
    c = n(872810),
    d = n(493773),
    f = n(763520),
    m = n(194082),
    p = n(710845),
    E = n(965048),
    g = n(590293),
    h = n(863908),
    S = n(871118),
    O = n(517525),
    v = n(352978),
    b = n(576645),
    I = n(590076),
    _ = n(507675),
    y = n(199902),
    Z = n(314897),
    A = n(592125),
    N = n(131951),
    R = n(451478),
    P = n(685203),
    T = n(112560),
    j = n(442168),
    C = n(822296),
    w = n(916771),
    x = n(792517),
    D = (n(351483), n(979425)),
    M = n(651183),
    L = n(623825),
    k = n(981631),
    U = n(354459),
    V = n(65154),
    F = n(388032),
    G = n(519417);
let H = new p.Z('StreamTile');
function W(e) {
    let { participant: t, selected: n, focused: i, idle: a, width: o, premiumIndicator: s } = e,
        c = (0, u.e7)([y.Z], () => y.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, L.K)(o),
        [f, p] = l.useState(!1),
        E = (0, u.e7)([A.Z], () => A.Z.getChannel(null == c ? void 0 : c.channelId));
    return (
        (0, b.J)(E, () => {
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
        (0, r.jsxs)(r.Fragment, {
            children: [
                n || i ? null : (0, r.jsx)(M.Z, { participant: t }),
                i || null == c || c.state === k.jm8.ENDED || c.state === k.jm8.FAILED
                    ? null
                    : (0, r.jsx)(O.Z, {
                          size: m.ZP.Sizes.SMALL,
                          className: G.liveIndicator,
                          participant: t,
                          showQuality: (!d && !a) || f,
                          isUpsellEnabled: !1,
                          premiumIndicator: s
                      })
            ]
        })
    );
}
function B(e) {
    let { participant: t, selected: n, onVideoResize: i, fit: m, inPopout: p, inOverlayPopout: O = !1, width: b, focused: M, wrapperClassName: L, paused: W = !1 } = e,
        B = N.Z.getVideoComponent(),
        Y = (0, u.e7)([Z.default], () => Z.default.getId()),
        z = (0, g.Z)(),
        { stream: K, user: q, streamId: J } = t,
        X = (0, u.e7)([A.Z], () => A.Z.getChannel(K.channelId)),
        Q = (0, u.e7)([y.Z], () => y.Z.getActiveStreamForUser(q.id, K.guildId), [q.id, K.guildId]),
        $ = (0, u.e7)([y.Z], () => y.Z.getAllActiveStreams().length > 0),
        ee = (0, u.e7)([R.Z], () => R.Z.isFocused()),
        et = (null == Q ? void 0 : Q.ownerId) === Y,
        en = et && !ee && !p,
        er = null != Q ? (0, h.Z)(Q, q, q.id === Y, en) : null,
        el = b < 195;
    (0, d.ZP)(() => {
        !$ && (null == X ? void 0 : X.isGuildStageVoice()) && !et && ((0, c.rn)(K), s.Z.updateStageStreamSize(K.channelId, !1));
    });
    let ei = (0, E.Z)(V.Yn.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            H.info(
                'Stream Tile State - activeStream: '
                    .concat(null != Q, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != B, ' | MediaEngine: ')
                    .concat(N.Z.supports(V.AN.VIDEO))
            );
        }, [B, Q, n]),
        z)
    )
        return (0, r.jsx)(D.Z, {
            stream: t.stream,
            isSmall: el,
            selected: n,
            isSelfStream: q.id === Y
        });
    if ((null == Q ? void 0 : Q.state) === k.jm8.ENDED)
        return (0, r.jsx)(C.Z, {
            selected: n,
            stream: Q,
            width: b
        });
    if (null != ei || (null == Q ? void 0 : Q.state) === k.jm8.FAILED)
        return (0, r.jsx)(w.Z, {
            avError: ei,
            selected: n,
            stream: t.stream,
            width: b
        });
    if (t.type === U.fO.HIDDEN_STREAM)
        return (0, r.jsx)(x.Z, {
            selected: n,
            participant: t,
            width: b
        });
    if (!(null != Q && !n && null != B && N.Z.supports(V.AN.VIDEO)))
        return (0, r.jsxs)('div', {
            className: a()(G.content, G.streamPreview, { [G.small]: el }),
            children: [
                (0, r.jsx)(S.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(G.absoluteFill, { [G.streamPreviewOpacity]: null == Q }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(P.a, {
                                  isSmall: el,
                                  children: (0, r.jsx)(o.Text, {
                                      variant: el ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: b < 175 ? F.intl.string(F.t['I6JG4+']) : F.intl.string(F.t['7Xq/nZ'])
                                  })
                              }),
                              $
                                  ? (0, r.jsx)(P.a, {
                                        className: G.addCTA,
                                        tooltip: F.intl.string(F.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, c.rn)(K, { forceMultiple: !0 });
                                        },
                                        isSmall: el,
                                        children: (0, r.jsx)(o.OgY, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: G.addStreamIcon
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
                    ? (0, r.jsx)(I.Z, {
                          focused: M,
                          channelId: X.id,
                          guildId: X.guild_id,
                          streamerId: q.id,
                          hasScreenMessage: null != er,
                          stream: K
                      })
                    : null,
                (0, r.jsx)(
                    v.Z,
                    {
                        onResize: i,
                        wrapperClassName: a()(G.videoWrapper, L),
                        className: G.content,
                        streamId: J,
                        videoComponent: B,
                        fit: m,
                        paused: W || (null == Q ? void 0 : Q.state) === k.jm8.PAUSED || en,
                        videoSpinnerContext: et ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
                        userId: q.id,
                        streamKey: t.id
                    },
                    J
                ),
                null != er
                    ? (0, r.jsx)(
                          _.Z,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({ size: (0, T.L)(b) }, er)
                      )
                    : null,
                (0, r.jsx)(j.Z, {
                    stream: K,
                    inPopout: p
                })
            ]
        });
}
