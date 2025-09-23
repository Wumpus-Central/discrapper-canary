n.d(t, {
    Z: () => z,
    _: () => Y,
});
var r = n(951288),
    l = n(647438),
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
    b = n(595816),
    S = n(863908),
    v = n(871118),
    O = n(517525),
    h = n(352978),
    y = n(590076),
    _ = n(507675),
    j = n(199902),
    Z = n(314897),
    I = n(592125),
    w = n(131951),
    P = n(451478),
    A = n(685203),
    C = n(112560),
    R = n(442168),
    x = n(822296),
    N = n(916771),
    T = n(792517),
    D = (n(351483), n(979425)),
    M = n(651183),
    L = n(623825),
    F = n(981631),
    k = n(354459),
    V = n(65154),
    U = n(388032),
    H = n(400872);
let W = new m.Z("StreamTile");
function Y(e) {
    let { participant: t, selected: n, focused: l, idle: i, width: a, premiumIndicator: u } = e,
        s = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, L.K)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n || l ? null : (0, r.jsx)(M.Z, { participant: t }),
            l || null == s || s.state === F.jm8.ENDED || s.state === F.jm8.FAILED
                ? null
                : (0, r.jsx)(O.Z, {
                      size: p.ZP.Sizes.SMALL,
                      className: H.liveIndicator,
                      participant: t,
                      showQuality: !c && !i,
                      isUpsellEnabled: !1,
                      premiumIndicator: u,
                  }),
        ],
    });
}
function z(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: i,
            fit: p,
            inPopout: m,
            inOverlayPopout: O = !1,
            width: M,
            focused: L,
            wrapperClassName: Y,
            paused: z = !1,
        } = e,
        G = w.Z.getVideoComponent(),
        K = (0, o.e7)([Z.default], () => Z.default.getId()),
        q = (0, g.Z)(),
        { stream: B, user: X, streamId: J } = t,
        Q = (0, o.e7)([I.Z], () => I.Z.getChannel(B.channelId)),
        $ = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(X.id, B.guildId), [X.id, B.guildId]),
        { defaultWatchMultipleStreams: ee } = (0, b.P)({ location: "StreamTile" }),
        et = (0, o.e7)([j.Z], () => j.Z.getAllActiveStreams().length > 0),
        en = (0, o.e7)([P.Z], () => P.Z.isFocused()),
        er = (null == $ ? void 0 : $.ownerId) === K,
        el = er && !en && !m,
        ei = null != $ ? (0, S.Z)($, X, X.id === K, el) : null,
        ea = M < 195;
    (0, d.ZP)(() => {
        !et &&
            (null == Q ? void 0 : Q.isGuildStageVoice()) &&
            !er &&
            ((0, c.rn)(B), s.Z.updateStageStreamSize(B.channelId, !1));
    });
    let eo = (0, E.c)(V.Yn.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            W.info(
                "Stream Tile State - activeStream: "
                    .concat(null != $, " | selected: ")
                    .concat(n, " | Video: ")
                    .concat(null != G, " | MediaEngine: ")
                    .concat(w.Z.supports(V.AN.VIDEO)),
            );
        }, [G, $, n]),
        q)
    )
        return (0, r.jsx)(D.Z, {
            stream: t.stream,
            isSmall: ea,
            selected: n,
            isSelfStream: X.id === K,
        });
    if ((null == $ ? void 0 : $.state) === F.jm8.ENDED)
        return (0, r.jsx)(x.Z, {
            selected: n,
            stream: $,
            width: M,
        });
    if (null != eo || (null == $ ? void 0 : $.state) === F.jm8.FAILED)
        return (0, r.jsx)(N.Z, {
            avError: null == eo ? void 0 : eo.type,
            avErrorContext: eo,
            selected: n,
            stream: t.stream,
            width: M,
        });
    if (t.type === k.fO.HIDDEN_STREAM)
        return (0, r.jsx)(T.Z, {
            selected: n,
            participant: t,
            width: M,
        });
    if (!(null != $ && !n && null != G && w.Z.supports(V.AN.VIDEO)))
        return (0, r.jsxs)("div", {
            className: a()(H.content, H.streamPreview, { [H.small]: ea }),
            children: [
                (0, r.jsx)(v.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(H.absoluteFill, { [H.streamPreviewOpacity]: null == $ }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(A.a, {
                                  isSmall: ea,
                                  children: (0, r.jsx)(u.Text, {
                                      variant: ea ? "text-sm/semibold" : "text-md/semibold",
                                      color: "none",
                                      children: M < 175 ? U.intl.string(U.t["I6JG4+"]) : U.intl.string(U.t["7Xq/nZ"]),
                                  }),
                              }),
                              et && !ee
                                  ? (0, r.jsx)(A.a, {
                                        className: H.addCTA,
                                        tooltip: U.intl.string(U.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, c.rn)(B, { forceMultiple: !0 });
                                        },
                                        isSmall: ea,
                                        children: (0, r.jsx)(u.OgY, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: H.addStreamIcon,
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
                null != Q
                    ? (0, r.jsx)(y.Z, {
                          focused: L,
                          channelId: Q.id,
                          guildId: Q.guild_id,
                          streamerId: X.id,
                          hasScreenMessage: null != ei,
                          stream: B,
                      })
                    : null,
                (0, r.jsx)(
                    h.Z,
                    {
                        onResize: i,
                        wrapperClassName: a()(H.videoWrapper, Y),
                        className: H.content,
                        streamId: J,
                        videoComponent: G,
                        fit: p,
                        paused: z || (null == $ ? void 0 : $.state) === F.jm8.PAUSED || el,
                        videoSpinnerContext: er ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
                        userId: X.id,
                        streamKey: t.id,
                    },
                    J,
                ),
                null != ei
                    ? (0, r.jsx)(
                          _.Z,
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
                          })({ size: (0, C.L)(M) }, ei),
                      )
                    : null,
                (0, r.jsx)(R.Z, {
                    stream: B,
                    inPopout: m,
                }),
            ],
        });
}
