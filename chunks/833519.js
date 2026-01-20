n.d(t, {
    Z: () => z,
    _: () => H,
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
    g = n(598006),
    m = n(194082),
    b = n(710845),
    h = n(965048),
    v = n(590293),
    E = n(595816),
    y = n(863908),
    _ = n(871118),
    O = n(517525),
    C = n(347147),
    S = n(590076),
    x = n(507675),
    I = n(199902),
    N = n(314897),
    T = n(592125),
    j = n(131951),
    P = n(451478),
    w = n(112560),
    Z = n(442168),
    A = n(822296),
    R = n(916771),
    D = n(792517),
    M = (n(351483), n(979425)),
    k = n(651183),
    L = n(623825),
    U = n(981631),
    F = n(354459),
    V = n(65154),
    W = n(388032),
    B = n(858329);
let G = new b.Z("StreamTile");
function H(e) {
    let { participant: t, selected: n, focused: i, idle: l, width: a, premiumIndicator: c } = e,
        s = (0, o.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, L.K)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n || i ? null : (0, r.jsx)(k.Z, { participant: t }),
            i || null == s || s.state === U.jm8.ENDED || s.state === U.jm8.FAILED
                ? null
                : (0, r.jsx)(O.Z, {
                      size: m.ZP.Sizes.SMALL,
                      className: B.liveIndicator,
                      participant: t,
                      showQuality: !u && !l,
                      isUpsellEnabled: !1,
                      premiumIndicator: c,
                  }),
        ],
    });
}
function z(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: l,
            fit: m,
            popoutType: b,
            width: O,
            focused: k,
            wrapperClassName: L,
            paused: H = !1,
            idle: z = !1,
            controlsBottom: Y,
        } = e,
        K = j.Z.getVideoComponent(),
        q = (0, o.e7)([N.default], () => N.default.getId()),
        Q = (0, v.Z)(),
        { stream: X, user: J, streamId: $ } = t,
        ee = (0, o.e7)([T.Z], () => T.Z.getChannel(X.channelId)),
        et = (0, o.e7)([I.Z], () => I.Z.getActiveStreamForUser(J.id, X.guildId), [J.id, X.guildId]),
        { defaultWatchMultipleStreams: en } = (0, E.P)({ location: "StreamTile" }),
        er = (0, o.e7)([I.Z], () => I.Z.getAllActiveStreams().length > 0),
        ei = (0, o.e7)([P.Z], () => P.Z.isFocused()),
        el = (null == et ? void 0 : et.ownerId) === q,
        ea = el && !ei && b === g.P.NO_POPOUT,
        eo = null != et ? (0, y.Z)(et, J, J.id === q, ea) : null,
        ec = O < 195;
    (0, f.ZP)(() => {
        !er &&
            (null == ee ? void 0 : ee.isGuildStageVoice()) &&
            !el &&
            ((0, d.rn)(X), u.Z.updateStageStreamSize(X.channelId, !1));
    });
    let es = (0, h.c)(V.Yn.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            G.info(
                "Stream Tile State - activeStream: "
                    .concat(null != et, " | selected: ")
                    .concat(n, " | Video: ")
                    .concat(null != K, " | MediaEngine: ")
                    .concat(j.Z.supports(V.AN.VIDEO)),
            );
        }, [K, et, n]),
        Q)
    )
        return (0, r.jsx)(M.Z, {
            stream: t.stream,
            isSmall: ec,
            selected: n,
            isSelfStream: J.id === q,
        });
    if ((null == et ? void 0 : et.state) === U.jm8.ENDED)
        return (0, r.jsx)(A.Z, {
            selected: n,
            stream: et,
            width: O,
        });
    if (null != es || (null == et ? void 0 : et.state) === U.jm8.FAILED)
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
    if (!(null != et && !n && null != K && j.Z.supports(V.AN.VIDEO)))
        return (0, r.jsxs)("div", {
            className: a()(B.content, B.streamPreview, { [B.small]: ec }),
            children: [
                (0, r.jsx)(_.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(B.absoluteFill, { [B.streamPreviewOpacity]: null == et }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: B.cta,
                                  children: (0, r.jsx)(s.Button, {
                                      variant: "secondary",
                                      size: ec ? "sm" : "md",
                                      text: O < 175 ? W.intl.string(W.t.I6JG46) : W.intl.string(W.t["7Xq/nV"]),
                                  }),
                              }),
                              er && !en
                                  ? (0, r.jsx)("div", {
                                        className: a()(B.cta, B.addCta),
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
                    ? (0, r.jsx)(S.Z, {
                          focused: k,
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
                        enableZoom: k,
                        onResize: l,
                        wrapperClassName: a()(b !== g.P.CALL_TILE ? B.videoWrapper : void 0, L),
                        className: B.content,
                        streamId: $,
                        videoComponent: K,
                        fit: m,
                        paused: H || (null == et ? void 0 : et.state) === U.jm8.PAUSED || ea,
                        videoSpinnerContext: el ? p.m.SELF_STREAM : p.m.REMOTE_STREAM,
                        userId: J.id,
                        streamKey: t.id,
                        controlsBottom: Y,
                        idle: z,
                    },
                    $,
                ),
                null != eo
                    ? (0, r.jsx)(
                          x.Z,
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
                          })({ size: (0, w.L)(O) }, eo),
                      )
                    : null,
                (0, r.jsx)(Z.Z, {
                    stream: X,
                    popoutType: b,
                }),
            ],
        });
}
