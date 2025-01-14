n.d(t, {
    Z: function () {
        return H;
    },
    _: function () {
        return z;
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
    _ = n(388627),
    x = n(576645),
    E = n(590076),
    C = n(507675),
    Z = n(199902),
    y = n(314897),
    b = n(592125),
    T = n(131951),
    A = n(451478),
    N = n(685203),
    w = n(112560),
    j = n(442168),
    P = n(822296),
    R = n(916771),
    M = n(792517),
    O = n(351483),
    L = n(979425),
    k = n(651183),
    D = n(623825),
    U = n(981631),
    V = n(354459),
    F = n(65154),
    W = n(388032),
    G = n(995544);
let B = new p.Z('StreamTile');
function z(e) {
    let { participant: t, selected: n, focused: r, idle: a, width: o, premiumIndicator: c } = e,
        u = (0, s.e7)([Z.Z], () => Z.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, D.K)(o),
        [m, p] = l.useState(!1),
        h = (0, s.e7)([b.Z], () => b.Z.getChannel(null == u ? void 0 : u.channelId));
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
                r || null == u || u.state === U.jm8.ENDED || u.state === U.jm8.FAILED
                    ? null
                    : (0, i.jsx)(S.Z, {
                          size: f.ZP.Sizes.SMALL,
                          className: G.liveIndicator,
                          participant: t,
                          showQuality: (!d && !a) || m,
                          isUpsellEnabled: !1,
                          premiumIndicator: c
                      })
            ]
        })
    );
}
function H(e) {
    let { participant: t, selected: n, onVideoResize: r, paused: f, fit: p, inPopout: S, inOverlayPopout: x = !1, width: k, focused: D, wrapperClassName: z } = e,
        H = T.Z.getVideoComponent(),
        Y = (0, s.e7)([y.default], () => y.default.getId()),
        J = (0, h.Z)(),
        { stream: q, user: X, streamId: K } = t,
        Q = (0, s.e7)([b.Z], () => b.Z.getChannel(q.channelId)),
        $ = (0, s.e7)([Z.Z], () => Z.Z.getActiveStreamForUser(X.id, q.guildId), [X.id, q.guildId]),
        ee = (0, s.e7)([Z.Z], () => Z.Z.getAllActiveStreams().length > 0),
        et = (0, s.e7)([A.Z], () => A.Z.isFocused()),
        en = (null == $ ? void 0 : $.ownerId) === Y,
        ei = en && !et && !S,
        el = null != $ ? (0, g.Z)($, X, X.id === Y, ei) : null,
        er = k < 195;
    (0, d.Z)(() => {
        !ee && (null == Q ? void 0 : Q.isGuildStageVoice()) && !en && ((0, u.rn)(q), c.Z.updateStageStreamSize(q.channelId, !1));
    }),
        l.useEffect(() => {
            B.info(
                'Stream Tile State - activeStream: '
                    .concat(null != $, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != H, ' | MediaEngine: ')
                    .concat(T.Z.supports(F.AN.VIDEO))
            );
        }, [H, $, n]);
    let ea = (0, _.x0)();
    if (J)
        return (0, i.jsx)(L.Z, {
            stream: t.stream,
            isSmall: er,
            selected: n,
            isSelfStream: X.id === Y
        });
    if ((null == $ ? void 0 : $.state) === U.jm8.ENDED)
        return (0, i.jsx)(P.Z, {
            selected: n,
            stream: $,
            width: k
        });
    if ((null == $ ? void 0 : $.state) === U.jm8.FAILED)
        return (0, i.jsx)(R.Z, {
            selected: n,
            stream: $,
            width: k
        });
    else if (t.type === V.fO.HIDDEN_STREAM)
        return (0, i.jsx)(M.Z, {
            selected: n,
            participant: t,
            width: k
        });
    else if (!(null != $ && !n && null != H && T.Z.supports(F.AN.VIDEO)))
        return (0, i.jsxs)('div', {
            className: a()(G.content, G.streamPreview, { [G.small]: er }),
            children: [
                (0, i.jsx)(v.Z, {
                    noText: !0,
                    className: a()(G.absoluteFill, { [G.streamPreviewOpacity]: null == $ }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(N.a, {
                                  isSmall: er,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: er ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: k < 175 ? W.intl.string(W.t['I6JG4+']) : W.intl.string(W.t['7Xq/nZ'])
                                  })
                              }),
                              ee
                                  ? (0, i.jsx)(N.a, {
                                        className: G.addCTA,
                                        tooltip: W.intl.string(W.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(q, { forceMultiple: !0 });
                                        },
                                        isSmall: er,
                                        children: (0, i.jsx)(o.EyePlusIcon, {
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
        return ea && !x
            ? (0, i.jsx)(O.Z, {
                  selected: n,
                  width: k
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != Q
                          ? (0, i.jsx)(E.Z, {
                                focused: D,
                                channelId: Q.id,
                                guildId: Q.guild_id,
                                streamerId: X.id,
                                hasScreenMessage: null != el,
                                stream: q
                            })
                          : null,
                      (0, i.jsx)(
                          I.Z,
                          {
                              onResize: r,
                              wrapperClassName: a()(G.videoWrapper, z),
                              className: G.content,
                              streamId: K,
                              videoComponent: H,
                              fit: p,
                              paused: f || ei,
                              videoSpinnerContext: en ? m.m.SELF_STREAM : m.m.REMOTE_STREAM,
                              userId: X.id
                          },
                          K
                      ),
                      null != el
                          ? (0, i.jsx)(C.Z, {
                                size: (0, w.L)(k),
                                ...el
                            })
                          : null,
                      (0, i.jsx)(j.Z, {
                          stream: q,
                          inPopout: S
                      })
                  ]
              });
}
