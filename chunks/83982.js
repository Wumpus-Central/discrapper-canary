var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(855986),
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
    I = n(259264),
    j = n(869146),
    S = n(718734),
    _ = n(854627),
    b = n(912630),
    N = n(530804),
    y = n(46653),
    R = n(754712),
    T = n(531685),
    L = n(562153),
    D = n(51082),
    k = n(566566),
    M = n(289552),
    w = n(652215),
    O = n(731854),
    G = n(792996),
    P = n(584841);
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
                    inCall: s,
                    width: o,
                    selected: u,
                    popoutType: c,
                    fit: d,
                    onVideoResize: m,
                    blocked: b,
                    ignored: N,
                    noVideoRender: M = !1,
                    pulseSpeakingIndicator: H = !1,
                    paused: U = !1,
                } = e,
                z = R.Ay.getVideoComponent(),
                W = (0, a.bG)([y.default], () => y.default.getId()),
                { user: $, streamId: B, speaking: Z } = t,
                Y = $.id === W,
                Q = (0, D.Ay)(t),
                K = (0, a.bG)([T.A], () => T.A.isFocused()),
                X = (0, a.bG)([j.A], () => j.A.getWindowFocused(w.MLl.CHANNEL_CALL_POPOUT)),
                q = (0, a.bG)([R.Ay], () => null != $.id && R.Ay.isLocalVideoDisabled($.id, (0, h.A)(t.type)), [
                    $.id,
                    t.type,
                ]),
                J = (0, E.A)(n.guild_id, $.id),
                ee = L.Ay.getName(n.getGuildId(), n.id, $) + (J ? ` ${G.intl.string(G.t["pFO/Ph"])}` : ""),
                et = Z && (X || K),
                en = o < 124 ? F : V,
                { avatarSrc: el, avatarDecorationSrc: ei } = (0, _.A)({
                    userId: $.id,
                    guildId: n.guild_id,
                    size: en,
                    animateOnHover: !et,
                }),
                es = (0, a.bG)([f.A], () => f.A.getSelectedParticipant(n.id)),
                er = (0, v.A)(O.x.DEFAULT, t.user.id),
                ea = (0, x.A)(t.user.id),
                eo = (0, S.e)(n, "UserTile"),
                eu = { channel: n, selectedParticipant: es, user: $, isStageUnifiedCall: eo },
                ec = i.useRef(eu);
            return (i.useEffect(() => {
                ec.current = eu;
            }),
            i.useEffect(() => {
                let { channel: e, selectedParticipant: t, user: n, isStageUnifiedCall: l } = ec.current;
                !l && e.isGuildStageVoice() && !Q && t?.id === n.id && p.A.selectParticipant(e.id, null);
            }, [Q]),
            s && !q && !M && Q && !u && null != z && R.Ay.supports(O.O5.VIDEO))
                ? null != er && null == ea
                    ? (0, l.jsx)(k.A, { avError: er, userId: t.id, width: o, selected: u })
                    : (0, l.jsx)(
                          I.A,
                          {
                              onResize: m,
                              wrapperClassName: c !== A.N.CALL_TILE ? P.tN : void 0,
                              className: P.Qs,
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
                      className: r()(P.Qs, { [P.Kx]: b || N }),
                      children: (0, l.jsx)(C.A, {
                          "aria-label": ee,
                          avatarDecoration: ei,
                          backgroundSrc: $.getAvatarURL(n.guild_id, 80),
                          guildId: n.guild_id,
                          pulseSpeakingIndicator: H,
                          size: en,
                          speaking: Z,
                          src: el,
                          userId: $.id,
                      }),
                  });
        },
        s: function (e) {
            let { channelId: t, participant: n } = e,
                i = (0, N.uy)(t, n.id),
                s = (0, N.b0)(n.id),
                o = (0, a.bG)([y.default], () => y.default.getId()),
                p = (0, a.bG)([b.A], () => b.A.videoBackgroundUnavailable);
            return s
                ? (0, l.jsx)(u.m, {
                      text: G.intl.string(G.t["6mh541"]),
                      position: "bottom",
                      children: (0, l.jsx)("div", {
                          className: r()(P.h5, P.bG),
                          children: (0, l.jsx)(c.ConnectionUnknownIcon, { color: d.A.colors.ICON_FEEDBACK_WARNING }),
                      }),
                  })
                : i
                  ? (0, l.jsx)(u.m, {
                        text: G.intl.string(G.t.HFwRpk),
                        position: "bottom",
                        children: (0, l.jsx)("div", {
                            className: P.bG,
                            children: (0, l.jsx)(m.CircleErrorIcon, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                        }),
                    })
                  : n.user.id === o && p
                    ? (0, l.jsx)(u.m, {
                          text: G.intl.string(G.t["8n9gj5"]),
                          position: "bottom",
                          children: (0, l.jsx)("div", {
                              className: P.bG,
                              children: (0, l.jsx)(m.CircleErrorIcon, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                          }),
                      })
                    : (0, l.jsx)(M.A, { userId: n.user.id });
        },
    },
);
