n.d(t, {
    Z: () => q,
    _: () => z,
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(475179),
    u = n(872810),
    d = n(493773),
    f = n(763520),
    _ = n(194082),
    p = n(710845),
    h = n(965048),
    m = n(590293),
    g = n(863908),
    E = n(871118),
    b = n(517525),
    y = n(352978),
    O = n(590076),
    v = n(507675),
    I = n(199902),
    T = n(314897),
    S = n(592125),
    A = n(131951),
    N = n(451478),
    C = n(685203),
    R = n(112560),
    P = n(442168),
    w = n(542726),
    D = n(916771),
    L = n(792517),
    x = n(351483),
    M = n(979425),
    k = n(651183),
    j = n(623825),
    U = n(981631),
    G = n(354459),
    B = n(65154),
    Z = n(388032),
    F = n(867236);
function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
let Y = 195,
    W = 175,
    K = new p.Z("StreamTile");
function z(e) {
    let { participant: t, selected: n, focused: i, idle: o, width: a, premiumIndicator: l } = e,
        c = (0, s.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, j.K)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n || i ? null : (0, r.jsx)(k.Z, { participant: t }),
            i || null == c || c.state === U.jm8.ENDED || c.state === U.jm8.FAILED
                ? null
                : (0, r.jsx)(b.Z, {
                      size: _.ZP.Sizes.SMALL,
                      className: F.liveIndicator,
                      participant: t,
                      showQuality: !u && !o,
                      isUpsellEnabled: !1,
                      premiumIndicator: l,
                  }),
        ],
    });
}
function q(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: o,
            fit: _,
            inPopout: p,
            inOverlayPopout: b = !1,
            width: k,
            focused: j,
            wrapperClassName: V,
            paused: z = !1,
        } = e,
        q = A.Z.getVideoComponent(),
        X = (0, s.e7)([T.default], () => T.default.getId()),
        Q = (0, m.Z)(),
        { stream: J, user: $, streamId: ee } = t,
        et = (0, s.e7)([S.Z], () => S.Z.getChannel(J.channelId)),
        en = (0, s.e7)([I.Z], () => I.Z.getActiveStreamForUser($.id, J.guildId), [$.id, J.guildId]),
        er = (0, s.e7)([I.Z], () => I.Z.getAllActiveStreams().length > 0),
        ei = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        eo = (null == en ? void 0 : en.ownerId) === X,
        ea = eo && !ei && !p,
        es = null != en ? (0, g.Z)(en, $, $.id === X, ea) : null,
        el = k < Y;
    (0, d.ZP)(() => {
        !er &&
            (null == et ? void 0 : et.isGuildStageVoice()) &&
            !eo &&
            ((0, u.rn)(J), c.Z.updateStageStreamSize(J.channelId, !1));
    });
    let ec = (0, h.c)(B.Yn.STREAM, t.user.id);
    i.useEffect(() => {
        K.info(
            "Stream Tile State - activeStream: "
                .concat(null != en, " | selected: ")
                .concat(n, " | Video: ")
                .concat(null != q, " | MediaEngine: ")
                .concat(A.Z.supports(B.AN.VIDEO)),
        );
    }, [q, en, n]);
    let eu = !1;
    if (Q)
        return (0, r.jsx)(M.Z, {
            stream: t.stream,
            isSmall: el,
            selected: n,
            isSelfStream: $.id === X,
        });
    if ((null == en ? void 0 : en.state) === U.jm8.ENDED)
        return (0, r.jsx)(w.Z, {
            selected: n,
            stream: en,
            width: k,
        });
    if (null != ec || (null == en ? void 0 : en.state) === U.jm8.FAILED)
        return (0, r.jsx)(D.Z, {
            avError: null == ec ? void 0 : ec.type,
            avErrorContext: ec,
            selected: n,
            stream: t.stream,
            width: k,
        });
    if (t.type === G.fO.HIDDEN_STREAM)
        return (0, r.jsx)(L.Z, {
            selected: n,
            participant: t,
            width: k,
        });
    if (!(null != en && !n && null != q && A.Z.supports(B.AN.VIDEO)))
        return (0, r.jsxs)("div", {
            className: a()(F.content, F.streamPreview, { [F.small]: el }),
            children: [
                (0, r.jsx)(E.Z, {
                    noImage: !0,
                    noText: !0,
                    className: a()(F.absoluteFill, { [F.streamPreviewOpacity]: null == en }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(C.a, {
                                  isSmall: el,
                                  children: (0, r.jsx)(l.Text, {
                                      variant: el ? "text-sm/semibold" : "text-md/semibold",
                                      color: "none",
                                      children: k < W ? Z.intl.string(Z.t["I6JG4+"]) : Z.intl.string(Z.t["7Xq/nZ"]),
                                  }),
                              }),
                              er
                                  ? (0, r.jsx)(C.a, {
                                        className: F.addCTA,
                                        tooltip: Z.intl.string(Z.t.wCrzur),
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(J, { forceMultiple: !0 });
                                        },
                                        isSmall: el,
                                        children: (0, r.jsx)(l.OgY, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: F.addStreamIcon,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
            ],
        });
    else
        return eu && !b
            ? (0, r.jsx)(x.Z, {
                  selected: n,
                  width: k,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      null != et
                          ? (0, r.jsx)(O.Z, {
                                focused: j,
                                channelId: et.id,
                                guildId: et.guild_id,
                                streamerId: $.id,
                                hasScreenMessage: null != es,
                                stream: J,
                            })
                          : null,
                      (0, r.jsx)(
                          y.Z,
                          {
                              onResize: o,
                              wrapperClassName: a()(F.videoWrapper, V),
                              className: F.content,
                              streamId: ee,
                              videoComponent: q,
                              fit: _,
                              paused: z || (null == en ? void 0 : en.state) === U.jm8.PAUSED || ea,
                              videoSpinnerContext: eo ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
                              userId: $.id,
                              streamKey: t.id,
                          },
                          ee,
                      ),
                      null != es ? (0, r.jsx)(v.Z, H({ size: (0, R.L)(k) }, es)) : null,
                      (0, r.jsx)(P.Z, {
                          stream: J,
                          inPopout: p,
                      }),
                  ],
              });
}
