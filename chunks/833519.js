n.d(t, {
    Z: () => H,
    _: () => z
}),
    n(47120);
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
    g = n(965048),
    E = n(590293),
    h = n(863908),
    v = n(871118),
    b = n(517525),
    S = n(352978),
    y = n(576645),
    O = n(590076),
    Z = n(507675),
    I = n(199902),
    j = n(314897),
    x = n(592125),
    N = n(131951),
    _ = n(451478),
    w = n(685203),
    P = n(112560),
    R = n(442168),
    A = n(822296),
    C = n(916771),
    T = n(792517),
    D = (n(351483), n(979425)),
    M = n(651183),
    k = n(623825),
    L = n(981631),
    U = n(354459),
    F = n(65154),
    V = n(388032),
    W = n(519417);
let Y = new p.Z('StreamTile');
function z(e) {
    let { participant: t, selected: n, focused: i, idle: a, width: s, premiumIndicator: u } = e,
        c = (0, o.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, k.K)(s),
        [f, p] = l.useState(!1),
        g = (0, o.e7)([x.Z], () => x.Z.getChannel(null == c ? void 0 : c.channelId));
    return (
        (0, y.J)(g, () => {
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
                i || null == c || c.state === L.jm8.ENDED || c.state === L.jm8.FAILED
                    ? null
                    : (0, r.jsx)(b.Z, {
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
function H(e) {
    let { participant: t, selected: n, onVideoResize: i, paused: m, fit: p, inPopout: b, inOverlayPopout: y = !1, width: M, focused: k, wrapperClassName: z } = e,
        H = N.Z.getVideoComponent(),
        G = (0, o.e7)([j.default], () => j.default.getId()),
        B = (0, E.Z)(),
        { stream: K, user: q, streamId: J } = t,
        X = (0, o.e7)([x.Z], () => x.Z.getChannel(K.channelId)),
        Q = (0, o.e7)([I.Z], () => I.Z.getActiveStreamForUser(q.id, K.guildId), [q.id, K.guildId]),
        $ = (0, o.e7)([I.Z], () => I.Z.getAllActiveStreams().length > 0),
        ee = (0, o.e7)([_.Z], () => _.Z.isFocused()),
        et = (null == Q ? void 0 : Q.ownerId) === G,
        en = et && !ee && !b,
        er = null != Q ? (0, h.Z)(Q, q, q.id === G, en) : null,
        el = M < 195;
    (0, d.ZP)(() => {
        !$ && (null == X ? void 0 : X.isGuildStageVoice()) && !et && ((0, c.rn)(K), u.Z.updateStageStreamSize(K.channelId, !1));
    });
    let ei = (0, g.Z)(F.Yn.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            Y.info(
                'Stream Tile State - activeStream: '
                    .concat(null != Q, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != H, ' | MediaEngine: ')
                    .concat(N.Z.supports(F.AN.VIDEO))
            );
        }, [H, Q, n]),
        B)
    )
        return (0, r.jsx)(D.Z, {
            stream: t.stream,
            isSmall: el,
            selected: n,
            isSelfStream: q.id === G
        });
    if ((null == Q ? void 0 : Q.state) === L.jm8.ENDED)
        return (0, r.jsx)(A.Z, {
            selected: n,
            stream: Q,
            width: M
        });
    if (null != ei || (null == Q ? void 0 : Q.state) === L.jm8.FAILED)
        return (0, r.jsx)(C.Z, {
            avError: ei,
            selected: n,
            stream: t.stream,
            width: M
        });
    if (t.type === U.fO.HIDDEN_STREAM)
        return (0, r.jsx)(T.Z, {
            selected: n,
            participant: t,
            width: M
        });
    if (!(null != Q && !n && null != H && N.Z.supports(F.AN.VIDEO)))
        return (0, r.jsxs)('div', {
            className: a()(W.content, W.streamPreview, { [W.small]: el }),
            children: [
                (0, r.jsx)(v.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(W.absoluteFill, { [W.streamPreviewOpacity]: null == Q }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(w.a, {
                                  isSmall: el,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: el ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: M < 175 ? V.NW.string(V.t['I6JG4+']) : V.NW.string(V.t['7Xq/nZ'])
                                  })
                              }),
                              $
                                  ? (0, r.jsx)(w.a, {
                                        className: W.addCTA,
                                        tooltip: V.NW.string(V.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, c.rn)(K, { forceMultiple: !0 });
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
                          focused: k,
                          channelId: X.id,
                          guildId: X.guild_id,
                          streamerId: q.id,
                          hasScreenMessage: null != er,
                          stream: K
                      })
                    : null,
                (0, r.jsx)(
                    S.Z,
                    {
                        onResize: i,
                        wrapperClassName: a()(W.videoWrapper, z),
                        className: W.content,
                        streamId: J,
                        videoComponent: H,
                        fit: p,
                        paused: m || en,
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
                          })({ size: (0, P.L)(M) }, er)
                      )
                    : null,
                (0, r.jsx)(R.Z, {
                    stream: K,
                    inPopout: b
                })
            ]
        });
}
