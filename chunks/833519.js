n.d(t, {
    Z: () => q,
    _: () => Y,
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
    m = n(598006),
    _ = n(194082),
    g = n(710845),
    v = n(965048),
    b = n(590293),
    E = n(595816),
    h = n(863908),
    y = n(871118),
    S = n(517525),
    O = n(102793),
    C = n(347147),
    I = n(590076),
    w = n(507675),
    P = n(199902),
    j = n(314897),
    x = n(592125),
    Z = n(131951),
    R = n(451478),
    T = n(112560),
    A = n(442168),
    N = n(822296),
    D = n(916771),
    M = n(792517),
    k = (n(351483), n(979425)),
    L = n(651183),
    F = n(623825),
    V = n(981631),
    U = n(354459),
    z = n(65154),
    W = n(388032),
    H = n(7504);
let B = new g.Z("StreamTile");
function Y(e) {
    let { participant: t, selected: n, focused: i, idle: l, width: a, premiumIndicator: c } = e,
        s = (0, o.e7)([P.Z], () => P.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, F.K)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n || i ? null : (0, r.jsx)(L.Z, { participant: t }),
            i || null == s || s.state === V.jm8.ENDED || s.state === V.jm8.FAILED
                ? null
                : (0, r.jsx)(S.Z, {
                      size: _.ZP.Sizes.SMALL,
                      className: H.liveIndicator,
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
            popoutType: g,
            width: S,
            focused: L,
            wrapperClassName: F,
            paused: Y = !1,
            idle: q = !1,
        } = e,
        G = Z.Z.getVideoComponent(),
        K = (0, o.e7)([j.default], () => j.default.getId()),
        Q = (0, b.Z)(),
        { stream: X, user: J, streamId: $ } = t,
        ee = (0, o.e7)([x.Z], () => x.Z.getChannel(X.channelId)),
        et = (0, o.e7)([P.Z], () => P.Z.getActiveStreamForUser(J.id, X.guildId), [J.id, X.guildId]),
        { defaultWatchMultipleStreams: en } = (0, E.P)({ location: "StreamTile" }),
        er = (0, o.e7)([P.Z], () => P.Z.getAllActiveStreams().length > 0),
        ei = (0, o.e7)([R.Z], () => R.Z.isFocused()),
        el = (null == et ? void 0 : et.ownerId) === K,
        ea = el && !ei && g === m.P.NO_POPOUT,
        eo = null != et ? (0, h.Z)(et, J, J.id === K, ea) : null,
        ec = S < 195;
    (0, f.ZP)(() => {
        !er &&
            (null == ee ? void 0 : ee.isGuildStageVoice()) &&
            !el &&
            ((0, d.rn)(X), u.Z.updateStageStreamSize(X.channelId, !1));
    });
    let es = (0, v.c)(z.Yn.STREAM, t.user.id);
    i.useEffect(() => {
        B.info(
            "Stream Tile State - activeStream: "
                .concat(null != et, " | selected: ")
                .concat(n, " | Video: ")
                .concat(null != G, " | MediaEngine: ")
                .concat(Z.Z.supports(z.AN.VIDEO)),
        );
    }, [G, et, n]);
    let { allowGoLiveZoomPan: eu } = (0, O.H)({ location: "StreamTile" });
    if (Q)
        return (0, r.jsx)(k.Z, {
            stream: t.stream,
            isSmall: ec,
            selected: n,
            isSelfStream: J.id === K,
        });
    if ((null == et ? void 0 : et.state) === V.jm8.ENDED)
        return (0, r.jsx)(N.Z, {
            selected: n,
            stream: et,
            width: S,
        });
    if (null != es || (null == et ? void 0 : et.state) === V.jm8.FAILED)
        return (0, r.jsx)(D.Z, {
            avError: null == es ? void 0 : es.type,
            avErrorContext: es,
            selected: n,
            stream: t.stream,
            width: S,
        });
    if (t.type === U.fO.HIDDEN_STREAM)
        return (0, r.jsx)(M.Z, {
            selected: n,
            participant: t,
            width: S,
        });
    if (!(null != et && !n && null != G && Z.Z.supports(z.AN.VIDEO)))
        return (0, r.jsxs)("div", {
            className: a()(H.content, H.streamPreview, { [H.small]: ec }),
            children: [
                (0, r.jsx)(y.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(H.absoluteFill, { [H.streamPreviewOpacity]: null == et }),
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
                                      size: ec ? "sm" : "md",
                                      text: S < 175 ? W.intl.string(W.t.I6JG46) : W.intl.string(W.t["7Xq/nV"]),
                                  }),
                              }),
                              er && !en
                                  ? (0, r.jsx)("div", {
                                        className: a()(H.cta, H.addCta),
                                        children: (0, r.jsx)(c.u, {
                                            text: W.intl.string(W.t.wCrzut),
                                            children: (0, r.jsx)(s.hU, {
                                                variant: "secondary",
                                                size: ec ? "sm" : "md",
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
                null != ee
                    ? (0, r.jsx)(I.Z, {
                          focused: L,
                          channelId: ee.id,
                          guildId: ee.guild_id,
                          streamerId: J.id,
                          hasScreenMessage: null != eo,
                          stream: X,
                      })
                    : null,
                (0, r.jsx)(
                    C.Z,
                    {
                        enableZoom: eu && L,
                        idle: q,
                        onResize: l,
                        wrapperClassName: a()(g !== m.P.CALL_TILE ? H.videoWrapper : void 0, F),
                        className: H.content,
                        streamId: $,
                        videoComponent: G,
                        fit: _,
                        paused: Y || (null == et ? void 0 : et.state) === V.jm8.PAUSED || ea,
                        videoSpinnerContext: el ? p.m.SELF_STREAM : p.m.REMOTE_STREAM,
                        userId: J.id,
                        streamKey: t.id,
                    },
                    $,
                ),
                null != eo
                    ? (0, r.jsx)(
                          w.Z,
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
                          })({ size: (0, T.L)(S) }, eo),
                      )
                    : null,
                (0, r.jsx)(A.Z, {
                    stream: X,
                    popoutType: g,
                }),
            ],
        });
}
