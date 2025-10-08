n.d(t, {
    Z: () => z,
    _: () => B,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(475179),
    u = n(872810),
    d = n(493773),
    f = n(763520),
    p = n(194082),
    m = n(710845),
    _ = n(965048),
    g = n(590293),
    b = n(595816),
    E = n(863908),
    v = n(871118),
    h = n(517525),
    S = n(352978),
    y = n(590076),
    O = n(507675),
    I = n(199902),
    C = n(314897),
    w = n(592125),
    j = n(131951),
    Z = n(451478),
    P = n(685203),
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
    W = n(400872);
let H = new m.Z("StreamTile");
function B(e) {
    let { participant: t, selected: n, focused: i, idle: l, width: a, premiumIndicator: c } = e,
        s = (0, o.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, k.K)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n || i ? null : (0, r.jsx)(M.Z, { participant: t }),
            i || null == s || s.state === F.jm8.ENDED || s.state === F.jm8.FAILED
                ? null
                : (0, r.jsx)(h.Z, {
                      size: p.ZP.Sizes.SMALL,
                      className: W.liveIndicator,
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
            fit: p,
            inPopout: m,
            inOverlayPopout: h = !1,
            width: M,
            focused: k,
            wrapperClassName: B,
            paused: z = !1,
        } = e,
        q = j.Z.getVideoComponent(),
        Y = (0, o.e7)([C.default], () => C.default.getId()),
        G = (0, g.Z)(),
        { stream: K, user: Q, streamId: X } = t,
        J = (0, o.e7)([w.Z], () => w.Z.getChannel(K.channelId)),
        $ = (0, o.e7)([I.Z], () => I.Z.getActiveStreamForUser(Q.id, K.guildId), [Q.id, K.guildId]),
        { defaultWatchMultipleStreams: ee } = (0, b.P)({ location: "StreamTile" }),
        et = (0, o.e7)([I.Z], () => I.Z.getAllActiveStreams().length > 0),
        en = (0, o.e7)([Z.Z], () => Z.Z.isFocused()),
        er = (null == $ ? void 0 : $.ownerId) === Y,
        ei = er && !en && !m,
        el = null != $ ? (0, E.Z)($, Q, Q.id === Y, ei) : null,
        ea = M < 195;
    (0, d.ZP)(() => {
        !et &&
            (null == J ? void 0 : J.isGuildStageVoice()) &&
            !er &&
            ((0, u.rn)(K), s.Z.updateStageStreamSize(K.channelId, !1));
    });
    let eo = (0, _.c)(V.Yn.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            H.info(
                "Stream Tile State - activeStream: "
                    .concat(null != $, " | selected: ")
                    .concat(n, " | Video: ")
                    .concat(null != q, " | MediaEngine: ")
                    .concat(j.Z.supports(V.AN.VIDEO)),
            );
        }, [q, $, n]),
        G)
    )
        return (0, r.jsx)(D.Z, {
            stream: t.stream,
            isSmall: ea,
            selected: n,
            isSelfStream: Q.id === Y,
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
    if (!(null != $ && !n && null != q && j.Z.supports(V.AN.VIDEO)))
        return (0, r.jsxs)("div", {
            className: a()(W.content, W.streamPreview, { [W.small]: ea }),
            children: [
                (0, r.jsx)(v.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(W.absoluteFill, { [W.streamPreviewOpacity]: null == $ }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(P.a, {
                                  isSmall: ea,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: ea ? "text-sm/semibold" : "text-md/semibold",
                                      color: "none",
                                      children: M < 175 ? U.intl.string(U.t["I6JG4+"]) : U.intl.string(U.t["7Xq/nZ"]),
                                  }),
                              }),
                              et && !ee
                                  ? (0, r.jsx)(P.a, {
                                        className: W.addCTA,
                                        tooltip: U.intl.string(U.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(K, { forceMultiple: !0 });
                                        },
                                        isSmall: ea,
                                        children: (0, r.jsx)(c.OgY, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: W.addStreamIcon,
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
                    ? (0, r.jsx)(y.Z, {
                          focused: k,
                          channelId: J.id,
                          guildId: J.guild_id,
                          streamerId: Q.id,
                          hasScreenMessage: null != el,
                          stream: K,
                      })
                    : null,
                (0, r.jsx)(
                    S.Z,
                    {
                        onResize: l,
                        wrapperClassName: a()(W.videoWrapper, B),
                        className: W.content,
                        streamId: X,
                        videoComponent: q,
                        fit: p,
                        paused: z || (null == $ ? void 0 : $.state) === F.jm8.PAUSED || ei,
                        videoSpinnerContext: er ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
                        userId: Q.id,
                        streamKey: t.id,
                    },
                    X,
                ),
                null != el
                    ? (0, r.jsx)(
                          O.Z,
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
                    stream: K,
                    inPopout: m,
                }),
            ],
        });
}
