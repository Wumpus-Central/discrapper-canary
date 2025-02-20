n.d(t, {
    Z: () => H,
    _: () => V
}),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(475179),
    u = n(872810),
    d = n(493773),
    f = n(763520),
    m = n(194082),
    p = n(710845),
    h = n(590293),
    v = n(863908),
    g = n(871118),
    b = n(517525),
    y = n(352978),
    E = n(576645),
    O = n(590076),
    S = n(507675),
    j = n(199902),
    x = n(314897),
    Z = n(592125),
    w = n(131951),
    C = n(451478),
    P = n(685203),
    N = n(112560),
    I = n(442168),
    R = n(822296),
    _ = n(916771),
    k = n(792517),
    A = (n(351483), n(979425)),
    T = n(651183),
    D = n(623825),
    M = n(981631),
    L = n(354459),
    F = n(65154),
    W = n(388032),
    U = n(668595);
let z = new p.Z('StreamTile');
function V(e) {
    let { participant: t, selected: n, focused: i, idle: a, width: s, premiumIndicator: c } = e,
        u = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, D.K)(s),
        [f, p] = l.useState(!1),
        h = (0, o.e7)([Z.Z], () => Z.Z.getChannel(null == u ? void 0 : u.channelId));
    return (
        (0, E.J)(h, () => {
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
                n ? null : (0, r.jsx)(T.Z, { participant: t }),
                i || null == u || u.state === M.jm8.ENDED || u.state === M.jm8.FAILED
                    ? null
                    : (0, r.jsx)(b.Z, {
                          size: m.ZP.Sizes.SMALL,
                          className: U.liveIndicator,
                          participant: t,
                          showQuality: (!d && !a) || f,
                          isUpsellEnabled: !1,
                          premiumIndicator: c
                      })
            ]
        })
    );
}
function H(e) {
    let { participant: t, selected: n, onVideoResize: i, paused: m, fit: p, inPopout: b, inOverlayPopout: E = !1, width: T, focused: D, wrapperClassName: V } = e,
        H = w.Z.getVideoComponent(),
        Y = (0, o.e7)([x.default], () => x.default.getId()),
        B = (0, h.Z)(),
        { stream: K, user: q, streamId: G } = t,
        J = (0, o.e7)([Z.Z], () => Z.Z.getChannel(K.channelId)),
        Q = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(q.id, K.guildId), [q.id, K.guildId]),
        X = (0, o.e7)([j.Z], () => j.Z.getAllActiveStreams().length > 0),
        $ = (0, o.e7)([C.Z], () => C.Z.isFocused()),
        ee = (null == Q ? void 0 : Q.ownerId) === Y,
        et = ee && !$ && !b,
        en = null != Q ? (0, v.Z)(Q, q, q.id === Y, et) : null,
        er = T < 195;
    if (
        ((0, d.ZP)(() => {
            !X && (null == J ? void 0 : J.isGuildStageVoice()) && !ee && ((0, u.rn)(K), c.Z.updateStageStreamSize(K.channelId, !1));
        }),
        l.useEffect(() => {
            z.info(
                'Stream Tile State - activeStream: '
                    .concat(null != Q, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != H, ' | MediaEngine: ')
                    .concat(w.Z.supports(F.AN.VIDEO))
            );
        }, [H, Q, n]),
        B)
    )
        return (0, r.jsx)(A.Z, {
            stream: t.stream,
            isSmall: er,
            selected: n,
            isSelfStream: q.id === Y
        });
    if ((null == Q ? void 0 : Q.state) === M.jm8.ENDED)
        return (0, r.jsx)(R.Z, {
            selected: n,
            stream: Q,
            width: T
        });
    if ((null == Q ? void 0 : Q.state) === M.jm8.FAILED)
        return (0, r.jsx)(_.Z, {
            selected: n,
            stream: Q,
            width: T
        });
    if (t.type === L.fO.HIDDEN_STREAM)
        return (0, r.jsx)(k.Z, {
            selected: n,
            participant: t,
            width: T
        });
    if (!(null != Q && !n && null != H && w.Z.supports(F.AN.VIDEO)))
        return (0, r.jsxs)('div', {
            className: a()(U.content, U.streamPreview, { [U.small]: er }),
            children: [
                (0, r.jsx)(g.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(U.absoluteFill, { [U.streamPreviewOpacity]: null == Q }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(P.a, {
                                  isSmall: er,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: er ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: T < 175 ? W.NW.string(W.t['I6JG4+']) : W.NW.string(W.t['7Xq/nZ'])
                                  })
                              }),
                              X
                                  ? (0, r.jsx)(P.a, {
                                        className: U.addCTA,
                                        tooltip: W.NW.string(W.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(K, { forceMultiple: !0 });
                                        },
                                        isSmall: er,
                                        children: (0, r.jsx)(s.OgY, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: U.addStreamIcon
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
                null != J
                    ? (0, r.jsx)(O.Z, {
                          focused: D,
                          channelId: J.id,
                          guildId: J.guild_id,
                          streamerId: q.id,
                          hasScreenMessage: null != en,
                          stream: K
                      })
                    : null,
                (0, r.jsx)(
                    y.Z,
                    {
                        onResize: i,
                        wrapperClassName: a()(U.videoWrapper, V),
                        className: U.content,
                        streamId: G,
                        videoComponent: H,
                        fit: p,
                        paused: m || et,
                        videoSpinnerContext: ee ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
                        userId: q.id
                    },
                    G
                ),
                null != en
                    ? (0, r.jsx)(
                          S.Z,
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
                          })({ size: (0, N.L)(T) }, en)
                      )
                    : null,
                (0, r.jsx)(I.Z, {
                    stream: K,
                    inPopout: b
                })
            ]
        });
}
