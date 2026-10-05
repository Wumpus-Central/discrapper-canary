n.d(t, { A: () => H, s: () => F });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(778712),
    u = n(866665),
    c = n(653766),
    d = n(661531),
    m = n(695366),
    p = n(367513),
    g = n(684339),
    f = n(198052),
    x = n(520698),
    h = n(164617),
    A = n(958713),
    v = n(525505),
    E = n(550946),
    j = n(72755),
    C = n(51092),
    I = n(869146),
    S = n(854627),
    _ = n(912630),
    N = n(530804),
    b = n(280450),
    y = n(25578),
    D = n(531685),
    k = n(562153),
    R = n(51082),
    T = n(566566),
    w = n(289552),
    L = n(652215),
    M = n(731854),
    O = n(375708),
    V = n(584841);
let G = o._3.SIZE_80,
    P = o._3.SIZE_40;
function F(e) {
    let { channelId: t, participant: n } = e,
        i = (0, N.uy)(t, n.id),
        s = (0, N.b0)(n.id),
        o = (0, a.bG)([b.default], () => b.default.getId()),
        p = (0, a.bG)([_.A], () => _.A.videoBackgroundUnavailable);
    return s
        ? (0, l.jsx)(u.m, {
              text: O.intl.string(O.t["6mh541"]),
              position: "bottom",
              children: (0, l.jsx)("div", {
                  className: r()(V.h5, V.bG),
                  children: (0, l.jsx)(c.e, { color: d.A.colors.ICON_FEEDBACK_WARNING }),
              }),
          })
        : i
          ? (0, l.jsx)(u.m, {
                text: O.intl.string(O.t.HFwRpk),
                position: "bottom",
                children: (0, l.jsx)("div", {
                    className: V.bG,
                    children: (0, l.jsx)(m.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                }),
            })
          : n.user.id === o && p
            ? (0, l.jsx)(u.m, {
                  text: O.intl.string(O.t["8n9gj5"]),
                  position: "bottom",
                  children: (0, l.jsx)("div", {
                      className: V.bG,
                      children: (0, l.jsx)(m.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                  }),
              })
            : (0, l.jsx)(w.A, { userId: n.user.id });
}
function H(e) {
    let {
            participant: t,
            channel: n,
            inCall: s,
            width: o,
            selected: u,
            popoutType: c,
            fit: d,
            onVideoResize: m,
            blocked: _,
            ignored: N,
            noVideoRender: w = !1,
            pulseSpeakingIndicator: F = !1,
            paused: H = !1,
        } = e,
        U = y.Ay.getVideoComponent(),
        z = (0, a.bG)([b.default], () => b.default.getId()),
        { user: W, streamId: $, speaking: B } = t,
        Y = W.id === z,
        Z = (0, R.Ay)(t),
        Q = (0, a.bG)([D.A], () => D.A.isFocused()),
        K = (0, a.bG)([I.A], () => I.A.getWindowFocused(L.MLl.CHANNEL_CALL_POPOUT)),
        X = (0, a.bG)([y.Ay], () => null != W.id && y.Ay.isLocalVideoDisabled(W.id, (0, x.A)(t.type)), [W.id, t.type]),
        q = (0, E.A)(n.guild_id, W.id),
        J = k.Ay.getName(n.getGuildId(), n.id, W) + (q ? ` ${O.intl.string(O.t["pFO/Ph"])}` : ""),
        ee = B && (K || Q),
        et = o < 124 ? P : G,
        { avatarSrc: en, avatarDecorationSrc: el } = (0, S.A)({
            userId: W.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        ei = (0, a.bG)([f.A], () => f.A.getSelectedParticipant(n.id)),
        es = (0, v.A)(M.x.DEFAULT, t.user.id),
        er = (0, A.A)(t.user.id),
        ea = { channel: n, selectedParticipant: ei, user: W },
        eo = i.useRef(ea);
    return (i.useEffect(() => {
        eo.current = ea;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !Z && t?.id === n.id && p.A.selectParticipant(e.id, null);
    }, [Z]),
    s && !X && !w && Z && !u && null != U && y.Ay.supports(M.O5.VIDEO))
        ? null != es && null == er
            ? (0, l.jsx)(T.A, { avError: es, userId: t.id, width: o, selected: u })
            : (0, l.jsx)(
                  C.A,
                  {
                      onResize: m,
                      wrapperClassName: c !== h.N.CALL_TILE ? V.tN : void 0,
                      className: V.Qs,
                      mirror: Y,
                      streamId: $,
                      videoComponent: U,
                      fit: d,
                      videoSpinnerContext: W.id === z ? g.u.SELF_VIDEO : g.u.REMOTE_VIDEO,
                      paused: H,
                      userId: W.id,
                  },
                  $,
              )
        : (0, l.jsx)("div", {
              className: r()(V.Qs, { [V.Kx]: _ || N }),
              children: (0, l.jsx)(j.A, {
                  "aria-label": J,
                  avatarDecoration: el,
                  backgroundSrc: W.getAvatarURL(n.guild_id, 80),
                  guildId: n.guild_id,
                  pulseSpeakingIndicator: F,
                  size: et,
                  speaking: B,
                  src: en,
                  userId: W.id,
              }),
          });
}
