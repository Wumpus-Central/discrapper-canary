n.d(t, {
    Z: () => Y,
    _: () => q,
});
var r = n(54381),
    i = n(473749),
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
    b = n(965048),
    v = n(590293),
    E = n(595816),
    h = n(863908),
    y = n(871118),
    S = n(517525),
    O = n(102793),
    C = n(347147),
    w = n(590076),
    I = n(507675),
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
    H = n(400872);
let B = new g.Z("StreamTile");
function q(e) {
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
function Y(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: l,
            fit: _,
            popoutType: g,
            width: S,
            focused: L,
            wrapperClassName: F,
            paused: q = !1,
            idle: Y = !1,
            controlsBottom: K,
        } = e,
        G = Z.Z.getVideoComponent(),
        Q = (0, o.e7)([j.default], () => j.default.getId()),
        X = (0, v.Z)(),
        { stream: J, user: $, streamId: ee } = t,
        et = (0, o.e7)([x.Z], () => x.Z.getChannel(J.channelId)),
        en = (0, o.e7)([P.Z], () => P.Z.getActiveStreamForUser($.id, J.guildId), [$.id, J.guildId]),
        { defaultWatchMultipleStreams: er } = (0, E.P)({ location: "StreamTile" }),
        ei = (0, o.e7)([P.Z], () => P.Z.getAllActiveStreams().length > 0),
        el = (0, o.e7)([R.Z], () => R.Z.isFocused()),
        ea = (null == en ? void 0 : en.ownerId) === Q,
        eo = ea && !el && g === m.P.NO_POPOUT,
        ec = null != en ? (0, h.Z)(en, $, $.id === Q, eo) : null,
        es = S < 195;
    (0, f.ZP)(() => {
        !ei &&
            (null == et ? void 0 : et.isGuildStageVoice()) &&
            !ea &&
            ((0, d.rn)(J), u.Z.updateStageStreamSize(J.channelId, !1));
    });
    let eu = (0, b.c)(z.Yn.STREAM, t.user.id);
    i.useEffect(() => {
        B.info(
            "Stream Tile State - activeStream: "
                .concat(null != en, " | selected: ")
                .concat(n, " | Video: ")
                .concat(null != G, " | MediaEngine: ")
                .concat(Z.Z.supports(z.AN.VIDEO)),
        );
    }, [G, en, n]);
    let { allowGoLiveZoomPan: ed } = (0, O.H)({ location: "StreamTile" });
    if (X)
        return (0, r.jsx)(k.Z, {
            stream: t.stream,
            isSmall: es,
            selected: n,
            isSelfStream: $.id === Q,
        });
    if ((null == en ? void 0 : en.state) === V.jm8.ENDED)
        return (0, r.jsx)(N.Z, {
            selected: n,
            stream: en,
            width: S,
        });
    if (null != eu || (null == en ? void 0 : en.state) === V.jm8.FAILED)
        return (0, r.jsx)(D.Z, {
            avError: null == eu ? void 0 : eu.type,
            avErrorContext: eu,
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
    if (!(null != en && !n && null != G && Z.Z.supports(z.AN.VIDEO)))
        return (0, r.jsxs)("div", {
            className: a()(H.content, H.streamPreview, { [H.small]: es }),
            children: [
                (0, r.jsx)(y.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(H.absoluteFill, { [H.streamPreviewOpacity]: null == en }),
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
                                      size: es ? "sm" : "md",
                                      text: S < 175 ? W.intl.string(W.t.I6JG46) : W.intl.string(W.t["7Xq/nV"]),
                                  }),
                              }),
                              ei && !er
                                  ? (0, r.jsx)("div", {
                                        className: a()(H.cta, H.addCta),
                                        children: (0, r.jsx)(c.u, {
                                            text: W.intl.string(W.t.wCrzut),
                                            children: (0, r.jsx)(s.hU, {
                                                variant: "secondary",
                                                size: es ? "sm" : "md",
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
                null != et
                    ? (0, r.jsx)(w.Z, {
                          focused: L,
                          channelId: et.id,
                          guildId: et.guild_id,
                          streamerId: $.id,
                          hasScreenMessage: null != ec,
                          stream: J,
                      })
                    : null,
                (0, r.jsx)(
                    C.Z,
                    {
                        enableZoom: ed && L,
                        onResize: l,
                        wrapperClassName: a()(g !== m.P.CALL_TILE ? H.videoWrapper : void 0, F),
                        className: H.content,
                        streamId: ee,
                        videoComponent: G,
                        fit: _,
                        paused: q || (null == en ? void 0 : en.state) === V.jm8.PAUSED || eo,
                        videoSpinnerContext: ea ? p.m.SELF_STREAM : p.m.REMOTE_STREAM,
                        userId: $.id,
                        streamKey: t.id,
                        controlsBottom: K,
                        idle: Y,
                    },
                    ee,
                ),
                null != ec
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
                          })({ size: (0, T.L)(S) }, ec),
                      )
                    : null,
                (0, r.jsx)(A.Z, {
                    stream: J,
                    popoutType: g,
                }),
            ],
        });
}
