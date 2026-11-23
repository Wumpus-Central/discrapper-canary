var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(855986),
    o = n(778712),
    u = n(866665),
    c = n(653766),
    d = n(646514),
    m = n(695366),
    p = n(367513),
    g = n(684339),
    f = n(628983),
    h = n(520698),
    A = n(164617),
    x = n(958713),
    v = n(525505),
    E = n(550946),
    C = n(697682),
    j = n(259264),
    S = n(869146),
    I = n(718734),
    b = n(854627),
    y = n(912630),
    _ = n(530804),
    N = n(46653),
    w = n(988468),
    k = n(531685),
    R = n(562153),
    L = n(51082),
    T = n(566566),
    D = n(289552),
    M = n(652215),
    O = n(731854),
    P = n(792996),
    G = n(584841);
let V = o._3.SIZE_80,
    F = o._3.SIZE_40;
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    participant: t,
                    channel: n,
                    inCall: r,
                    width: o,
                    selected: u,
                    popoutType: c,
                    fit: d,
                    onVideoResize: m,
                    blocked: y,
                    ignored: _,
                    noVideoRender: D = !1,
                    pulseSpeakingIndicator: H = !1,
                    paused: U = !1,
                } = e,
                z = w.Ay.getVideoComponent(),
                W = (0, s.bG)([N.default], () => N.default.getId()),
                { user: $, streamId: B, speaking: K } = t,
                Y = $.id === W,
                Z = (0, L.Ay)(t),
                X = (0, s.bG)([k.A], () => k.A.isFocused()),
                Q = (0, s.bG)([S.A], () => S.A.getWindowFocused(M.MLl.CHANNEL_CALL_POPOUT)),
                q = (0, s.bG)([w.Ay], () => null != $.id && w.Ay.isLocalVideoDisabled($.id, (0, h.A)(t.type)), [
                    $.id,
                    t.type,
                ]),
                J = (0, E.A)(n.guild_id, $.id),
                ee = R.Ay.getName(n.getGuildId(), n.id, $) + (J ? ` ${P.intl.string(P.t["pFO/Ph"])}` : ""),
                et = K && (Q || X),
                en = o < 124 ? F : V,
                { avatarSrc: el, avatarDecorationSrc: ei } = (0, b.A)({
                    userId: $.id,
                    guildId: n.guild_id,
                    size: en,
                    animateOnHover: !et,
                }),
                er = (0, s.bG)([f.A], () => f.A.getSelectedParticipant(n.id)),
                ea = (0, v.A)(O.x.DEFAULT, t.user.id),
                es = (0, x.A)(t.user.id),
                eo = (0, I.e)(n, "UserTile"),
                eu = { channel: n, selectedParticipant: er, user: $, isStageUnifiedCall: eo },
                ec = i.useRef(eu);
            return (i.useEffect(() => {
                ec.current = eu;
            }),
            i.useEffect(() => {
                let { channel: e, selectedParticipant: t, user: n, isStageUnifiedCall: l } = ec.current;
                !l && e.isGuildStageVoice() && !Z && t?.id === n.id && p.A.selectParticipant(e.id, null);
            }, [Z]),
            r && !q && !D && Z && !u && null != z && w.Ay.supports(O.O5.VIDEO))
                ? null != ea && null == es
                    ? (0, l.jsx)(T.A, { avError: ea, userId: t.id, width: o, selected: u })
                    : (0, l.jsx)(
                          j.A,
                          {
                              onResize: m,
                              wrapperClassName: c !== A.N.CALL_TILE ? G.tN : void 0,
                              className: G.Qs,
                              mirror: Y,
                              streamId: B,
                              videoComponent: z,
                              fit: d,
                              videoSpinnerContext: $.id === W ? g.u.SELF_VIDEO : g.u.REMOTE_VIDEO,
                              paused: U,
                              userId: $.id,
                          },
                          B,
                      )
                : (0, l.jsx)("div", {
                      className: a()(G.Qs, { [G.Kx]: y || _ }),
                      children: (0, l.jsx)(C.A, {
                          "aria-label": ee,
                          avatarDecoration: ei,
                          backgroundSrc: $.getAvatarURL(n.guild_id, 80),
                          guildId: n.guild_id,
                          pulseSpeakingIndicator: H,
                          size: en,
                          speaking: K,
                          src: el,
                          userId: $.id,
                      }),
                  });
        },
        s: function (e) {
            let { channelId: t, participant: n } = e,
                i = (0, _.uy)(t, n.id),
                r = (0, _.b0)(n.id),
                o = (0, s.bG)([N.default], () => N.default.getId()),
                p = (0, s.bG)([y.A], () => y.A.videoBackgroundUnavailable);
            return r
                ? (0, l.jsx)(u.m, {
                      text: P.intl.string(P.t["6mh541"]),
                      position: "bottom",
                      children: (0, l.jsx)("div", {
                          className: a()(G.h5, G.bG),
                          children: (0, l.jsx)(c.ConnectionUnknownIcon, { color: d.A.colors.ICON_FEEDBACK_WARNING }),
                      }),
                  })
                : i
                  ? (0, l.jsx)(u.m, {
                        text: P.intl.string(P.t.HFwRpk),
                        position: "bottom",
                        children: (0, l.jsx)("div", {
                            className: G.bG,
                            children: (0, l.jsx)(m.CircleErrorIcon, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                        }),
                    })
                  : n.user.id === o && p
                    ? (0, l.jsx)(u.m, {
                          text: P.intl.string(P.t["8n9gj5"]),
                          position: "bottom",
                          children: (0, l.jsx)("div", {
                              className: G.bG,
                              children: (0, l.jsx)(m.CircleErrorIcon, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                          }),
                      })
                    : (0, l.jsx)(D.A, { userId: n.user.id });
        },
    },
);
