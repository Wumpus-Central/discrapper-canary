n.d(t, {
    Z: () => H,
    _: () => Y
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(475179),
    u = n(872810),
    d = n(493773),
    f = n(763520),
    m = n(194082),
    p = n(710845),
    h = n(501640),
    v = n(590293),
    b = n(863908),
    g = n(871118),
    E = n(517525),
    y = n(352978),
    O = n(576645),
    S = n(590076),
    x = n(507675),
    j = n(199902),
    w = n(314897),
    Z = n(592125),
    C = n(131951),
    P = n(451478),
    N = n(685203),
    I = n(112560),
    _ = n(442168),
    R = n(822296),
    T = n(916771),
    A = n(792517),
    D = (n(351483), n(979425)),
    k = n(651183),
    M = n(623825),
    L = n(981631),
    W = n(354459),
    U = n(65154),
    F = n(388032),
    z = n(454698);
let V = new p.Z('StreamTile');
function Y(e) {
    let { participant: t, selected: n, focused: l, idle: o, width: s, premiumIndicator: c } = e,
        u = (0, a.e7)([j.Z], () => j.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, M.K)(s),
        [f, p] = i.useState(!1),
        h = (0, a.e7)([Z.Z], () => Z.Z.getChannel(null == u ? void 0 : u.channelId));
    return (
        (0, O.J)(h, () => {
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
                n || l ? null : (0, r.jsx)(k.Z, { participant: t }),
                l || null == u || u.state === L.jm8.ENDED || u.state === L.jm8.FAILED
                    ? null
                    : (0, r.jsx)(E.Z, {
                          size: m.ZP.Sizes.SMALL,
                          className: z.liveIndicator,
                          participant: t,
                          showQuality: (!d && !o) || f,
                          isUpsellEnabled: !1,
                          premiumIndicator: c
                      })
            ]
        })
    );
}
function H(e) {
    let { participant: t, selected: n, onVideoResize: l, paused: m, fit: p, inPopout: E, inOverlayPopout: O = !1, width: k, focused: M, wrapperClassName: Y } = e,
        H = C.Z.getVideoComponent(),
        K = (0, a.e7)([w.default], () => w.default.getId()),
        G = (0, v.Z)(),
        { stream: B, user: q, streamId: J } = t,
        X = (0, a.e7)([Z.Z], () => Z.Z.getChannel(B.channelId)),
        Q = (0, a.e7)([j.Z], () => j.Z.getActiveStreamForUser(q.id, B.guildId), [q.id, B.guildId]),
        $ = (0, a.e7)([j.Z], () => j.Z.getAllActiveStreams().length > 0),
        ee = (0, a.e7)([P.Z], () => P.Z.isFocused()),
        et = (null == Q ? void 0 : Q.ownerId) === K,
        en = et && !ee && !E,
        er = null != Q ? (0, b.Z)(Q, q, q.id === K, en) : null,
        ei = k < 195;
    (0, d.ZP)(() => {
        !$ && (null == X ? void 0 : X.isGuildStageVoice()) && !et && ((0, u.rn)(B), c.Z.updateStageStreamSize(B.channelId, !1));
    });
    let el = (0, h.Z)(t);
    if (
        (i.useEffect(() => {
            V.info(
                'Stream Tile State - activeStream: '
                    .concat(null != Q, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != H, ' | MediaEngine: ')
                    .concat(C.Z.supports(U.AN.VIDEO))
            );
        }, [H, Q, n]),
        G)
    )
        return (0, r.jsx)(D.Z, {
            stream: t.stream,
            isSmall: ei,
            selected: n,
            isSelfStream: q.id === K
        });
    if ((null == Q ? void 0 : Q.state) === L.jm8.ENDED)
        return (0, r.jsx)(R.Z, {
            selected: n,
            stream: Q,
            width: k
        });
    if (null != el || (null == Q ? void 0 : Q.state) === L.jm8.FAILED)
        return (0, r.jsx)(T.Z, {
            avError: el,
            selected: n,
            stream: t.stream,
            width: k
        });
    if (t.type === W.fO.HIDDEN_STREAM)
        return (0, r.jsx)(A.Z, {
            selected: n,
            participant: t,
            width: k
        });
    if (!(null != Q && !n && null != H && C.Z.supports(U.AN.VIDEO)))
        return (0, r.jsxs)('div', {
            className: o()(z.content, z.streamPreview, { [z.small]: ei }),
            children: [
                (0, r.jsx)(g.Z, {
                    noImage: !0,
                    noText: !0,
                    className: o()(z.absoluteFill, { [z.streamPreviewOpacity]: null == Q }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N.a, {
                                  isSmall: ei,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: ei ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: k < 175 ? F.NW.string(F.t['I6JG4+']) : F.NW.string(F.t['7Xq/nZ'])
                                  })
                              }),
                              $
                                  ? (0, r.jsx)(N.a, {
                                        className: z.addCTA,
                                        tooltip: F.NW.string(F.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(B, { forceMultiple: !0 });
                                        },
                                        isSmall: ei,
                                        children: (0, r.jsx)(s.OgY, {
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
        return (0, r.jsxs)(r.Fragment, {
            children: [
                null != X
                    ? (0, r.jsx)(S.Z, {
                          focused: M,
                          channelId: X.id,
                          guildId: X.guild_id,
                          streamerId: q.id,
                          hasScreenMessage: null != er,
                          stream: B
                      })
                    : null,
                (0, r.jsx)(
                    y.Z,
                    {
                        onResize: l,
                        wrapperClassName: o()(z.videoWrapper, Y),
                        className: z.content,
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
                          x.Z,
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
                          })({ size: (0, I.L)(k) }, er)
                      )
                    : null,
                (0, r.jsx)(_.Z, {
                    stream: B,
                    inPopout: E
                })
            ]
        });
}
