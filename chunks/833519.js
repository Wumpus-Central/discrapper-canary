n.d(t, {
    Z: () => Y,
    _: () => q,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(681715),
    s = n(481060),
    u = n(475179),
    d = n(872810),
    f = n(493773),
    p = n(763520),
    _ = n(598006),
    m = n(194082),
    g = n(710845),
    v = n(965048),
    b = n(590293),
    E = n(595816),
    h = n(863908),
    S = n(871118),
    y = n(517525),
    O = n(352978),
    I = n(590076),
    C = n(507675),
    w = n(199902),
    P = n(314897),
    j = n(592125),
    Z = n(131951),
    R = n(451478),
    A = n(112560),
    T = n(442168),
    x = n(822296),
    N = n(916771),
    D = n(792517),
    M = (n(351483), n(979425)),
    k = n(651183),
    L = n(623825),
    F = n(981631),
    V = n(354459),
    U = n(65154),
    W = n(388032),
    H = n(7504);
let B = new g.Z("StreamTile");
function q(e) {
    let { participant: t, selected: n, focused: i, idle: l, width: a, premiumIndicator: c } = e,
        s = (0, o.e7)([w.Z], () => w.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, L.K)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n || i ? null : (0, r.jsx)(k.Z, { participant: t }),
            i || null == s || s.state === F.jm8.ENDED || s.state === F.jm8.FAILED
                ? null
                : (0, r.jsx)(y.Z, {
                      size: m.ZP.Sizes.SMALL,
                      className: H.liveIndicator,
                      participant: t,
                      showQuality: !u && !l,
                      isUpsellEnabled: !1,
                      premiumIndicator: c,
                  }),
        ],
    });
}
function Y(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: l,
            fit: m,
            popoutType: g,
            width: y,
            focused: k,
            wrapperClassName: L,
            paused: q = !1,
        } = e,
        Y = Z.Z.getVideoComponent(),
        z = (0, o.e7)([P.default], () => P.default.getId()),
        K = (0, b.Z)(),
        { stream: G, user: Q, streamId: X } = t,
        J = (0, o.e7)([j.Z], () => j.Z.getChannel(G.channelId)),
        $ = (0, o.e7)([w.Z], () => w.Z.getActiveStreamForUser(Q.id, G.guildId), [Q.id, G.guildId]),
        { defaultWatchMultipleStreams: ee } = (0, E.P)({ location: "StreamTile" }),
        et = (0, o.e7)([w.Z], () => w.Z.getAllActiveStreams().length > 0),
        en = (0, o.e7)([R.Z], () => R.Z.isFocused()),
        er = (null == $ ? void 0 : $.ownerId) === z,
        ei = er && !en && g === _.P.NO_POPOUT,
        el = null != $ ? (0, h.Z)($, Q, Q.id === z, ei) : null,
        ea = y < 195;
    (0, f.ZP)(() => {
        !et &&
            (null == J ? void 0 : J.isGuildStageVoice()) &&
            !er &&
            ((0, d.rn)(G), u.Z.updateStageStreamSize(G.channelId, !1));
    });
    let eo = (0, v.c)(U.Yn.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            B.info(
                "Stream Tile State - activeStream: "
                    .concat(null != $, " | selected: ")
                    .concat(n, " | Video: ")
                    .concat(null != Y, " | MediaEngine: ")
                    .concat(Z.Z.supports(U.AN.VIDEO)),
            );
        }, [Y, $, n]),
        K)
    )
        return (0, r.jsx)(M.Z, {
            stream: t.stream,
            isSmall: ea,
            selected: n,
            isSelfStream: Q.id === z,
        });
    if ((null == $ ? void 0 : $.state) === F.jm8.ENDED)
        return (0, r.jsx)(x.Z, {
            selected: n,
            stream: $,
            width: y,
        });
    if (null != eo || (null == $ ? void 0 : $.state) === F.jm8.FAILED)
        return (0, r.jsx)(N.Z, {
            avError: null == eo ? void 0 : eo.type,
            avErrorContext: eo,
            selected: n,
            stream: t.stream,
            width: y,
        });
    if (t.type === V.fO.HIDDEN_STREAM)
        return (0, r.jsx)(D.Z, {
            selected: n,
            participant: t,
            width: y,
        });
    if (!(null != $ && !n && null != Y && Z.Z.supports(U.AN.VIDEO)))
        return (0, r.jsxs)("div", {
            className: a()(H.content, H.streamPreview, { [H.small]: ea }),
            children: [
                (0, r.jsx)(S.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(H.absoluteFill, { [H.streamPreviewOpacity]: null == $ }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: H.cta,
                                  children: (0, r.jsx)(s.Button, {
                                      variant: "secondary",
                                      size: ea ? "sm" : "md",
                                      text: y < 175 ? W.intl.string(W.t.I6JG46) : W.intl.string(W.t["7Xq/nV"]),
                                  }),
                              }),
                              et && !ee
                                  ? (0, r.jsx)("div", {
                                        className: a()(H.cta, H.addCta),
                                        children: (0, r.jsx)(c.u, {
                                            text: W.intl.string(W.t.wCrzut),
                                            children: (0, r.jsx)(s.hU, {
                                                variant: "secondary",
                                                size: ea ? "sm" : "md",
                                                icon: s.OgY,
                                                "aria-label": W.intl.string(W.t.wCrzut),
                                                onClick: (e) => {
                                                    e.stopPropagation(), (0, d.rn)(t.stream, { forceMultiple: !0 });
                                                },
                                            }),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
            ],
        });
    else
        return (0, r.jsxs)(r.Fragment, {
            children: [
                null != J
                    ? (0, r.jsx)(I.Z, {
                          focused: k,
                          channelId: J.id,
                          guildId: J.guild_id,
                          streamerId: Q.id,
                          hasScreenMessage: null != el,
                          stream: G,
                      })
                    : null,
                (0, r.jsx)(
                    O.Z,
                    {
                        onResize: l,
                        wrapperClassName: a()(g !== _.P.CALL_TILE ? H.videoWrapper : void 0, L),
                        className: H.content,
                        streamId: X,
                        videoComponent: Y,
                        fit: m,
                        paused: q || (null == $ ? void 0 : $.state) === F.jm8.PAUSED || ei,
                        videoSpinnerContext: er ? p.m.SELF_STREAM : p.m.REMOTE_STREAM,
                        userId: Q.id,
                        streamKey: t.id,
                    },
                    X,
                ),
                null != el
                    ? (0, r.jsx)(
                          C.Z,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({ size: (0, A.L)(y) }, el),
                      )
                    : null,
                (0, r.jsx)(T.Z, {
                    stream: G,
                    popoutType: g,
                }),
            ],
        });
}
