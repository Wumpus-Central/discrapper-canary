var i = n(477900),
    l = n(582128),
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
    x = n(164617),
    A = n(958713),
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
    L = n(754712),
    T = n(531685),
    D = n(562153),
    R = n(51082),
    k = n(566566),
    M = n(289552),
    w = n(652215),
    O = n(731854),
    G = n(792996),
    P = n(584841);
let V = o._3.SIZE_80,
    H = o._3.SIZE_40;
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
                    pulseSpeakingIndicator: F = !1,
                    paused: U = !1,
                } = e,
                W = L.Ay.getVideoComponent(),
                z = (0, a.bG)([y.default], () => y.default.getId()),
                { user: $, streamId: B, speaking: Z } = t,
                Y = $.id === z,
                Q = (0, R.Ay)(t),
                K = (0, a.bG)([T.A], () => T.A.isFocused()),
                X = (0, a.bG)([j.A], () => j.A.getWindowFocused(w.MLl.CHANNEL_CALL_POPOUT)),
                q = (0, a.bG)([L.Ay], () => null != $.id && L.Ay.isLocalVideoDisabled($.id, (0, h.A)(t.type)), [
                    $.id,
                    t.type,
                ]),
                J = (0, E.A)(n.guild_id, $.id),
                ee = D.Ay.getName(n.getGuildId(), n.id, $) + (J ? ` ${G.intl.string(G.t["pFO/Ph"])}` : ""),
                et = Z && (X || K),
                en = o < 124 ? H : V,
                { avatarSrc: ei, avatarDecorationSrc: el } = (0, _.A)({
                    userId: $.id,
                    guildId: n.guild_id,
                    size: en,
                    animateOnHover: !et,
                }),
                es = (0, a.bG)([f.A], () => f.A.getSelectedParticipant(n.id)),
                er = (0, v.A)(O.x.DEFAULT, t.user.id),
                ea = (0, A.A)(t.user.id),
                eo = (0, S.e)(n, "UserTile"),
                eu = { channel: n, selectedParticipant: es, user: $, isStageUnifiedCall: eo },
                ec = l.useRef(eu);
            return (l.useEffect(() => {
                ec.current = eu;
            }),
            l.useEffect(() => {
                let { channel: e, selectedParticipant: t, user: n, isStageUnifiedCall: i } = ec.current;
                !i && e.isGuildStageVoice() && !Q && t?.id === n.id && p.A.selectParticipant(e.id, null);
            }, [Q]),
            s && !q && !M && Q && !u && null != W && L.Ay.supports(O.O5.VIDEO))
                ? null != er && null == ea
                    ? (0, i.jsx)(k.A, { avError: er, userId: t.id, width: o, selected: u })
                    : (0, i.jsx)(
                          I.A,
                          {
                              onResize: m,
                              wrapperClassName: c !== x.N.CALL_TILE ? P.tN : void 0,
                              className: P.Qs,
                              mirror: Y,
                              streamId: B,
                              videoComponent: W,
                              fit: d,
                              videoSpinnerContext: $.id === z ? g.u.SELF_VIDEO : g.u.REMOTE_VIDEO,
                              paused: U,
                              userId: $.id,
                          },
                          B,
                      )
                : (0, i.jsx)("div", {
                      className: r()(P.Qs, { [P.Kx]: b || N }),
                      children: (0, i.jsx)(C.A, {
                          "aria-label": ee,
                          avatarDecoration: el,
                          backgroundSrc: $.getAvatarURL(n.guild_id, 80),
                          guildId: n.guild_id,
                          pulseSpeakingIndicator: F,
                          size: en,
                          speaking: Z,
                          src: ei,
                          userId: $.id,
                      }),
                  });
        },
        s: function (e) {
            let { channelId: t, participant: n } = e,
                l = (0, N.uy)(t, n.id),
                s = (0, N.b0)(n.id),
                o = (0, a.bG)([y.default], () => y.default.getId()),
                p = (0, a.bG)([b.A], () => b.A.videoBackgroundUnavailable);
            return s
                ? (0, i.jsx)(u.m, {
                      text: G.intl.string(G.t["6mh541"]),
                      position: "bottom",
                      children: (0, i.jsx)("div", {
                          className: r()(P.h5, P.bG),
                          children: (0, i.jsx)(c.ConnectionUnknownIcon, { color: d.A.colors.ICON_FEEDBACK_WARNING }),
                      }),
                  })
                : l
                  ? (0, i.jsx)(u.m, {
                        text: G.intl.string(G.t.HFwRpk),
                        position: "bottom",
                        children: (0, i.jsx)("div", {
                            className: P.bG,
                            children: (0, i.jsx)(m.CircleErrorIcon, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                        }),
                    })
                  : n.user.id === o && p
                    ? (0, i.jsx)(u.m, {
                          text: G.intl.string(G.t["8n9gj5"]),
                          position: "bottom",
                          children: (0, i.jsx)("div", {
                              className: P.bG,
                              children: (0, i.jsx)(m.CircleErrorIcon, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                          }),
                      })
                    : (0, i.jsx)(M.A, { userId: n.user.id });
        },
    },
);
