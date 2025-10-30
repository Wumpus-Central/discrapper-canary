n.d(t, {
    Z: () => q,
    _: () => z,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(681715),
    c = n(481060),
    u = n(475179),
    d = n(872810),
    p = n(493773),
    f = n(763520),
    h = n(598006),
    m = n(194082),
    g = n(710845),
    b = n(965048),
    _ = n(590293),
    y = n(595816),
    C = n(863908),
    v = n(871118),
    O = n(517525),
    x = n(102793),
    E = n(347147),
    j = n(590076),
    S = n(507675),
    P = n(199902),
    I = n(314897),
    Z = n(592125),
    T = n(131951),
    N = n(451478),
    A = n(112560),
    w = n(442168),
    M = n(822296),
    R = n(916771),
    D = n(792517),
    L = (n(351483), n(979425)),
    k = n(651183),
    U = n(623825),
    B = n(981631),
    F = n(354459),
    V = n(65154),
    H = n(388032),
    G = n(400872);
let W = new g.Z("StreamTile");
function z(e) {
    let { participant: t, selected: n, focused: i, idle: l, width: a, premiumIndicator: s } = e,
        c = (0, o.e7)([P.Z], () => P.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, U.K)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n || i ? null : (0, r.jsx)(k.Z, { participant: t }),
            i || null == c || c.state === B.jm8.ENDED || c.state === B.jm8.FAILED
                ? null
                : (0, r.jsx)(O.Z, {
                      size: m.ZP.Sizes.SMALL,
                      className: G.liveIndicator,
                      participant: t,
                      showQuality: !u && !l,
                      isUpsellEnabled: !1,
                      premiumIndicator: s,
                  }),
        ],
    });
}
function q(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: l,
            fit: m,
            popoutType: g,
            width: O,
            focused: k,
            wrapperClassName: U,
            paused: z = !1,
        } = e,
        q = T.Z.getVideoComponent(),
        Y = (0, o.e7)([I.default], () => I.default.getId()),
        K = (0, _.Z)(),
        { stream: X, user: J, streamId: Q } = t,
        $ = (0, o.e7)([Z.Z], () => Z.Z.getChannel(X.channelId)),
        ee = (0, o.e7)([P.Z], () => P.Z.getActiveStreamForUser(J.id, X.guildId), [J.id, X.guildId]),
        { defaultWatchMultipleStreams: et } = (0, y.P)({ location: "StreamTile" }),
        en = (0, o.e7)([P.Z], () => P.Z.getAllActiveStreams().length > 0),
        er = (0, o.e7)([N.Z], () => N.Z.isFocused()),
        ei = (null == ee ? void 0 : ee.ownerId) === Y,
        el = ei && !er && g === h.P.NO_POPOUT,
        ea = null != ee ? (0, C.Z)(ee, J, J.id === Y, el) : null,
        eo = O < 195;
    (0, p.ZP)(() => {
        !en &&
            (null == $ ? void 0 : $.isGuildStageVoice()) &&
            !ei &&
            ((0, d.rn)(X), u.Z.updateStageStreamSize(X.channelId, !1));
    });
    let es = (0, b.c)(V.Yn.STREAM, t.user.id);
    i.useEffect(() => {
        W.info(
            "Stream Tile State - activeStream: "
                .concat(null != ee, " | selected: ")
                .concat(n, " | Video: ")
                .concat(null != q, " | MediaEngine: ")
                .concat(T.Z.supports(V.AN.VIDEO)),
        );
    }, [q, ee, n]);
    let { allowGoLiveZoomPan: ec } = (0, x.H)({ location: "StreamTile" });
    if (K)
        return (0, r.jsx)(L.Z, {
            stream: t.stream,
            isSmall: eo,
            selected: n,
            isSelfStream: J.id === Y,
        });
    if ((null == ee ? void 0 : ee.state) === B.jm8.ENDED)
        return (0, r.jsx)(M.Z, {
            selected: n,
            stream: ee,
            width: O,
        });
    if (null != es || (null == ee ? void 0 : ee.state) === B.jm8.FAILED)
        return (0, r.jsx)(R.Z, {
            avError: null == es ? void 0 : es.type,
            avErrorContext: es,
            selected: n,
            stream: t.stream,
            width: O,
        });
    if (t.type === F.fO.HIDDEN_STREAM)
        return (0, r.jsx)(D.Z, {
            selected: n,
            participant: t,
            width: O,
        });
    if (!(null != ee && !n && null != q && T.Z.supports(V.AN.VIDEO)))
        return (0, r.jsxs)("div", {
            className: a()(G.content, G.streamPreview, { [G.small]: eo }),
            children: [
                (0, r.jsx)(v.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(G.absoluteFill, { [G.streamPreviewOpacity]: null == ee }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: G.cta,
                                  children: (0, r.jsx)(c.Button, {
                                      variant: "secondary",
                                      size: eo ? "sm" : "md",
                                      text: O < 175 ? H.intl.string(H.t.I6JG46) : H.intl.string(H.t["7Xq/nV"]),
                                  }),
                              }),
                              en && !et
                                  ? (0, r.jsx)("div", {
                                        className: a()(G.cta, G.addCta),
                                        children: (0, r.jsx)(s.u, {
                                            text: H.intl.string(H.t.wCrzut),
                                            children: (0, r.jsx)(c.hU, {
                                                variant: "secondary",
                                                size: eo ? "sm" : "md",
                                                icon: c.OgY,
                                                "aria-label": H.intl.string(H.t.wCrzut),
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
                null != $
                    ? (0, r.jsx)(j.Z, {
                          focused: k,
                          channelId: $.id,
                          guildId: $.guild_id,
                          streamerId: J.id,
                          hasScreenMessage: null != ea,
                          stream: X,
                      })
                    : null,
                (0, r.jsx)(
                    E.Z,
                    {
                        enableZoom: ec && k,
                        onResize: l,
                        wrapperClassName: a()(g !== h.P.CALL_TILE ? G.videoWrapper : void 0, U),
                        className: G.content,
                        streamId: Q,
                        videoComponent: q,
                        fit: m,
                        paused: z || (null == ee ? void 0 : ee.state) === B.jm8.PAUSED || el,
                        videoSpinnerContext: ei ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
                        userId: J.id,
                        streamKey: t.id,
                    },
                    Q,
                ),
                null != ea
                    ? (0, r.jsx)(
                          S.Z,
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
                          })({ size: (0, A.L)(O) }, ea),
                      )
                    : null,
                (0, r.jsx)(w.Z, {
                    stream: X,
                    popoutType: g,
                }),
            ],
        });
}
