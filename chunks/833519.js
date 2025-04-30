n.d(t, {
    Z: () => z,
    _: () => H
}),
    n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    u = n(475179),
    c = n(872810),
    d = n(493773),
    f = n(763520),
    m = n(194082),
    p = n(710845),
    E = n(965048),
    g = n(590293),
    v = n(863908),
    h = n(871118),
    S = n(517525),
    b = n(352978),
    y = n(576645),
    O = n(590076),
    Z = n(507675),
    j = n(199902),
    I = n(314897),
    _ = n(592125),
    P = n(131951),
    w = n(451478),
    x = n(685203),
    A = n(112560),
    R = n(442168),
    N = n(822296),
    C = n(916771),
    T = n(792517),
    D = (n(351483), n(979425)),
    M = n(651183),
    L = n(623825),
    k = n(981631),
    U = n(354459),
    F = n(65154),
    V = n(388032),
    W = n(519417);
let Y = new p.Z('StreamTile');
function H(e) {
    let { participant: t, selected: n, focused: i, idle: a, width: s, premiumIndicator: u } = e,
        c = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, L.K)(s),
        [f, p] = l.useState(!1),
        E = (0, o.e7)([_.Z], () => _.Z.getChannel(null == c ? void 0 : c.channelId));
    return (
        (0, y.J)(E, () => {
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
                    : (0, r.jsx)(S.Z, {
                          size: m.ZP.Sizes.SMALL,
                          className: W.liveIndicator,
                          participant: t,
                          showQuality: (!d && !a) || f,
                          isUpsellEnabled: !1,
                          premiumIndicator: u
                      })
            ]
        })
    );
}
function z(e) {
    let { participant: t, selected: n, onVideoResize: i, fit: m, inPopout: p, inOverlayPopout: S = !1, width: y, focused: M, wrapperClassName: L, paused: H = !1 } = e,
        z = P.Z.getVideoComponent(),
        G = (0, o.e7)([I.default], () => I.default.getId()),
        K = (0, g.Z)(),
        { stream: B, user: q, streamId: J } = t,
        X = (0, o.e7)([_.Z], () => _.Z.getChannel(B.channelId)),
        Q = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(q.id, B.guildId), [q.id, B.guildId]),
        $ = (0, o.e7)([j.Z], () => j.Z.getAllActiveStreams().length > 0),
        ee = (0, o.e7)([w.Z], () => w.Z.isFocused()),
        et = (null == Q ? void 0 : Q.ownerId) === G,
        en = et && !ee && !p,
        er = null != Q ? (0, v.Z)(Q, q, q.id === G, en) : null,
        el = y < 195;
    (0, d.ZP)(() => {
        !$ && (null == X ? void 0 : X.isGuildStageVoice()) && !et && ((0, c.rn)(B), u.Z.updateStageStreamSize(B.channelId, !1));
    });
    let ei = (0, E.Z)(F.Yn.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            Y.info(
                'Stream Tile State - activeStream: '
                    .concat(null != Q, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != z, ' | MediaEngine: ')
                    .concat(P.Z.supports(F.AN.VIDEO))
            );
        }, [z, Q, n]),
        K)
    )
        return (0, r.jsx)(D.Z, {
            stream: t.stream,
            isSmall: el,
            selected: n,
            isSelfStream: q.id === G
        });
    if ((null == Q ? void 0 : Q.state) === k.jm8.ENDED)
        return (0, r.jsx)(N.Z, {
            selected: n,
            stream: Q,
            width: y
        });
    if (null != ei || (null == Q ? void 0 : Q.state) === k.jm8.FAILED)
        return (0, r.jsx)(C.Z, {
            avError: ei,
            selected: n,
            stream: t.stream,
            width: y
        });
    if (t.type === U.fO.HIDDEN_STREAM)
        return (0, r.jsx)(T.Z, {
            selected: n,
            participant: t,
            width: y
        });
    if (!(null != Q && !n && null != z && P.Z.supports(F.AN.VIDEO)))
        return (0, r.jsxs)('div', {
            className: a()(W.content, W.streamPreview, { [W.small]: el }),
            children: [
                (0, r.jsx)(h.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(W.absoluteFill, { [W.streamPreviewOpacity]: null == Q }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(x.a, {
                                  isSmall: el,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: el ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: y < 175 ? V.intl.string(V.t['I6JG4+']) : V.intl.string(V.t['7Xq/nZ'])
                                  })
                              }),
                              $
                                  ? (0, r.jsx)(x.a, {
                                        className: W.addCTA,
                                        tooltip: V.intl.string(V.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, c.rn)(B, { forceMultiple: !0 });
                                        },
                                        isSmall: el,
                                        children: (0, r.jsx)(s.OgY, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: W.addStreamIcon
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
                          stream: B
                      })
                    : null,
                (0, r.jsx)(
                    b.Z,
                    {
                        onResize: i,
                        wrapperClassName: a()(W.videoWrapper, L),
                        className: W.content,
                        streamId: J,
                        videoComponent: z,
                        fit: m,
                        paused: H || (null == Q ? void 0 : Q.state) === k.jm8.PAUSED || en,
                        videoSpinnerContext: et ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
                        userId: q.id,
                        streamKey: t.id
                    },
                    J
                ),
                null != er
                    ? (0, r.jsx)(
                          Z.Z,
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
                          })({ size: (0, A.L)(y) }, er)
                      )
                    : null,
                (0, r.jsx)(R.Z, {
                    stream: B,
                    inPopout: p
                })
            ]
        });
}
