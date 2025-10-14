n.d(t, {
    Z: () => q,
    _: () => B,
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
    _ = n(194082),
    m = n(710845),
    g = n(965048),
    E = n(590293),
    b = n(595816),
    v = n(863908),
    h = n(871118),
    y = n(517525),
    S = n(352978),
    O = n(590076),
    I = n(507675),
    C = n(199902),
    w = n(314897),
    j = n(592125),
    Z = n(131951),
    P = n(451478),
    x = n(112560),
    A = n(442168),
    T = n(822296),
    R = n(916771),
    N = n(792517),
    D = (n(351483), n(979425)),
    M = n(651183),
    k = n(623825),
    F = n(981631),
    L = n(354459),
    V = n(65154),
    U = n(388032),
    W = n(7504);
let H = new m.Z("StreamTile");
function B(e) {
    let { participant: t, selected: n, focused: i, idle: l, width: a, premiumIndicator: c } = e,
        s = (0, o.e7)([C.Z], () => C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, k.K)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n || i ? null : (0, r.jsx)(M.Z, { participant: t }),
            i || null == s || s.state === F.jm8.ENDED || s.state === F.jm8.FAILED
                ? null
                : (0, r.jsx)(y.Z, {
                      size: _.ZP.Sizes.SMALL,
                      className: W.liveIndicator,
                      participant: t,
                      showQuality: !u && !l,
                      isUpsellEnabled: !1,
                      premiumIndicator: c,
                  }),
        ],
    });
}
function q(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: l,
            fit: _,
            inPopout: m,
            inOverlayPopout: y = !1,
            width: M,
            focused: k,
            wrapperClassName: B,
            paused: q = !1,
        } = e,
        Y = Z.Z.getVideoComponent(),
        z = (0, o.e7)([w.default], () => w.default.getId()),
        K = (0, E.Z)(),
        { stream: G, user: Q, streamId: X } = t,
        J = (0, o.e7)([j.Z], () => j.Z.getChannel(G.channelId)),
        $ = (0, o.e7)([C.Z], () => C.Z.getActiveStreamForUser(Q.id, G.guildId), [Q.id, G.guildId]),
        { defaultWatchMultipleStreams: ee } = (0, b.P)({ location: "StreamTile" }),
        et = (0, o.e7)([C.Z], () => C.Z.getAllActiveStreams().length > 0),
        en = (0, o.e7)([P.Z], () => P.Z.isFocused()),
        er = (null == $ ? void 0 : $.ownerId) === z,
        ei = er && !en && !m,
        el = null != $ ? (0, v.Z)($, Q, Q.id === z, ei) : null,
        ea = M < 195;
    (0, f.ZP)(() => {
        !et &&
            (null == J ? void 0 : J.isGuildStageVoice()) &&
            !er &&
            ((0, d.rn)(G), u.Z.updateStageStreamSize(G.channelId, !1));
    });
    let eo = (0, g.c)(V.Yn.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            H.info(
                "Stream Tile State - activeStream: "
                    .concat(null != $, " | selected: ")
                    .concat(n, " | Video: ")
                    .concat(null != Y, " | MediaEngine: ")
                    .concat(Z.Z.supports(V.AN.VIDEO)),
            );
        }, [Y, $, n]),
        K)
    )
        return (0, r.jsx)(D.Z, {
            stream: t.stream,
            isSmall: ea,
            selected: n,
            isSelfStream: Q.id === z,
        });
    if ((null == $ ? void 0 : $.state) === F.jm8.ENDED)
        return (0, r.jsx)(T.Z, {
            selected: n,
            stream: $,
            width: M,
        });
    if (null != eo || (null == $ ? void 0 : $.state) === F.jm8.FAILED)
        return (0, r.jsx)(R.Z, {
            avError: null == eo ? void 0 : eo.type,
            avErrorContext: eo,
            selected: n,
            stream: t.stream,
            width: M,
        });
    if (t.type === L.fO.HIDDEN_STREAM)
        return (0, r.jsx)(N.Z, {
            selected: n,
            participant: t,
            width: M,
        });
    if (!(null != $ && !n && null != Y && Z.Z.supports(V.AN.VIDEO)))
        return (0, r.jsxs)("div", {
            className: a()(W.content, W.streamPreview, { [W.small]: ea }),
            children: [
                (0, r.jsx)(h.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(W.absoluteFill, { [W.streamPreviewOpacity]: null == $ }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: W.cta,
                                  children: (0, r.jsx)(s.Button, {
                                      variant: "secondary",
                                      size: ea ? "sm" : "md",
                                      text: M < 175 ? U.intl.string(U.t["I6JG4+"]) : U.intl.string(U.t["7Xq/nZ"]),
                                  }),
                              }),
                              et && !ee
                                  ? (0, r.jsx)("div", {
                                        className: a()(W.cta, W.addCta),
                                        children: (0, r.jsx)(c.u, {
                                            text: U.intl.string(U.t.wCrzur),
                                            children: (0, r.jsx)(s.hU, {
                                                variant: "secondary",
                                                size: ea ? "sm" : "md",
                                                icon: s.OgY,
                                                "aria-label": U.intl.string(U.t.wCrzur),
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
                    ? (0, r.jsx)(O.Z, {
                          focused: k,
                          channelId: J.id,
                          guildId: J.guild_id,
                          streamerId: Q.id,
                          hasScreenMessage: null != el,
                          stream: G,
                      })
                    : null,
                (0, r.jsx)(
                    S.Z,
                    {
                        onResize: l,
                        wrapperClassName: a()(W.videoWrapper, B),
                        className: W.content,
                        streamId: X,
                        videoComponent: Y,
                        fit: _,
                        paused: q || (null == $ ? void 0 : $.state) === F.jm8.PAUSED || ei,
                        videoSpinnerContext: er ? p.m.SELF_STREAM : p.m.REMOTE_STREAM,
                        userId: Q.id,
                        streamKey: t.id,
                    },
                    X,
                ),
                null != el
                    ? (0, r.jsx)(
                          I.Z,
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
                          })({ size: (0, x.L)(M) }, el),
                      )
                    : null,
                (0, r.jsx)(A.Z, {
                    stream: G,
                    inPopout: m,
                }),
            ],
        });
}
