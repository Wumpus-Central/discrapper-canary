n.d(t, { A: () => U, s: () => H });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(778712),
    u = n(866665),
    c = n(653766),
    d = n(661531),
    m = n(695366),
    g = n(367513),
    p = n(684339),
    f = n(198052),
    h = n(520698),
    x = n(164617),
    A = n(958713),
    v = n(525505),
    E = n(550946),
    C = n(72755),
    j = n(51092),
    I = n(869146),
    S = n(718734),
    _ = n(854627),
    N = n(912630),
    b = n(530804),
    y = n(280450),
    R = n(192820),
    T = n(531685),
    L = n(562153),
    D = n(51082),
    k = n(566566),
    w = n(289552),
    M = n(652215),
    O = n(731854),
    G = n(105292),
    V = n(584841);
let P = o._3.SIZE_80,
    F = o._3.SIZE_40;
function H(e) {
    let { channelId: t, participant: n } = e,
        l = (0, b.uy)(t, n.id),
        s = (0, b.b0)(n.id),
        o = (0, a.bG)([y.default], () => y.default.getId()),
        g = (0, a.bG)([N.A], () => N.A.videoBackgroundUnavailable);
    return s
        ? (0, i.jsx)(u.m, {
              text: G.intl.string(G.t["6mh541"]),
              position: "bottom",
              children: (0, i.jsx)("div", {
                  className: r()(V.h5, V.bG),
                  children: (0, i.jsx)(c.e, { color: d.A.colors.ICON_FEEDBACK_WARNING }),
              }),
          })
        : l
          ? (0, i.jsx)(u.m, {
                text: G.intl.string(G.t.HFwRpk),
                position: "bottom",
                children: (0, i.jsx)("div", {
                    className: V.bG,
                    children: (0, i.jsx)(m.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                }),
            })
          : n.user.id === o && g
            ? (0, i.jsx)(u.m, {
                  text: G.intl.string(G.t["8n9gj5"]),
                  position: "bottom",
                  children: (0, i.jsx)("div", {
                      className: V.bG,
                      children: (0, i.jsx)(m.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                  }),
              })
            : (0, i.jsx)(w.A, { userId: n.user.id });
}
function U(e) {
    let {
            participant: t,
            channel: n,
            inCall: s,
            width: o,
            selected: u,
            popoutType: c,
            fit: d,
            onVideoResize: m,
            blocked: N,
            ignored: b,
            noVideoRender: w = !1,
            pulseSpeakingIndicator: H = !1,
            paused: U = !1,
        } = e,
        z = R.Ay.getVideoComponent(),
        W = (0, a.bG)([y.default], () => y.default.getId()),
        { user: B, streamId: $, speaking: Z } = t,
        Y = B.id === W,
        Q = (0, D.Ay)(t),
        K = (0, a.bG)([T.A], () => T.A.isFocused()),
        X = (0, a.bG)([I.A], () => I.A.getWindowFocused(M.MLl.CHANNEL_CALL_POPOUT)),
        q = (0, a.bG)([R.Ay], () => null != B.id && R.Ay.isLocalVideoDisabled(B.id, (0, h.A)(t.type)), [B.id, t.type]),
        J = (0, E.A)(n.guild_id, B.id),
        ee = L.Ay.getName(n.getGuildId(), n.id, B) + (J ? ` ${G.intl.string(G.t["pFO/Ph"])}` : ""),
        et = Z && (X || K),
        en = o < 124 ? F : P,
        { avatarSrc: ei, avatarDecorationSrc: el } = (0, _.A)({
            userId: B.id,
            guildId: n.guild_id,
            size: en,
            animateOnHover: !et,
        }),
        es = (0, a.bG)([f.A], () => f.A.getSelectedParticipant(n.id)),
        er = (0, v.A)(O.x.DEFAULT, t.user.id),
        ea = (0, A.A)(t.user.id),
        eo = (0, S.e)(n, "UserTile"),
        eu = { channel: n, selectedParticipant: es, user: B, isStageUnifiedCall: eo },
        ec = l.useRef(eu);
    return (l.useEffect(() => {
        ec.current = eu;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n, isStageUnifiedCall: i } = ec.current;
        !i && e.isGuildStageVoice() && !Q && t?.id === n.id && g.A.selectParticipant(e.id, null);
    }, [Q]),
    s && !q && !w && Q && !u && null != z && R.Ay.supports(O.O5.VIDEO))
        ? null != er && null == ea
            ? (0, i.jsx)(k.A, { avError: er, userId: t.id, width: o, selected: u })
            : (0, i.jsx)(
                  j.A,
                  {
                      onResize: m,
                      wrapperClassName: c !== x.N.CALL_TILE ? V.tN : void 0,
                      className: V.Qs,
                      mirror: Y,
                      streamId: $,
                      videoComponent: z,
                      fit: d,
                      videoSpinnerContext: B.id === W ? p.u.SELF_VIDEO : p.u.REMOTE_VIDEO,
                      paused: U,
                      userId: B.id,
                  },
                  $,
              )
        : (0, i.jsx)("div", {
              className: r()(V.Qs, { [V.Kx]: N || b }),
              children: (0, i.jsx)(C.A, {
                  "aria-label": ee,
                  avatarDecoration: el,
                  backgroundSrc: B.getAvatarURL(n.guild_id, 80),
                  guildId: n.guild_id,
                  pulseSpeakingIndicator: H,
                  size: en,
                  speaking: Z,
                  src: ei,
                  userId: B.id,
              }),
          });
}
