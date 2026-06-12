n.d(t, { A: () => P, s: () => V });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(990078),
    u = n(778712),
    c = n(695366),
    d = n(661531),
    m = n(367513),
    p = n(684339),
    g = n(313961),
    h = n(520698),
    f = n(164617),
    A = n(958713),
    x = n(525505),
    E = n(550946),
    v = n(334557),
    C = n(51092),
    I = n(869146),
    _ = n(854627),
    j = n(530804),
    S = n(495544),
    N = n(890063),
    b = n(531685),
    y = n(562153),
    T = n(51082),
    w = n(566566),
    D = n(289552),
    R = n(652215),
    k = n(731854),
    L = n(375708),
    M = n(391308);
let O = u._3.SIZE_80,
    F = u._3.SIZE_40;
function V(e) {
    let { channelId: t, participant: n } = e;
    return (0, j.uy)(t, n.id)
        ? (0, l.jsx)(o.m, {
              text: L.intl.string(L.t.HFwRpk),
              position: "bottom",
              children: (0, l.jsx)("div", {
                  className: M.bG,
                  children: (0, l.jsx)(c.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, l.jsx)(D.A, { userId: n.user.id });
}
function P(e) {
    let {
            participant: t,
            channel: n,
            inCall: s,
            width: o,
            selected: u,
            popoutType: c,
            fit: d,
            onVideoResize: j,
            blocked: D,
            ignored: V,
            noVideoRender: P = !1,
            pulseSpeakingIndicator: G = !1,
            paused: H = !1,
        } = e,
        U = N.Ay.getVideoComponent(),
        z = (0, a.bG)([S.default], () => S.default.getId()),
        { user: W, streamId: $, speaking: B } = t,
        Y = W.id === z,
        Z = (0, T.Ay)(t),
        Q = (0, a.bG)([b.A], () => b.A.isFocused()),
        K = (0, a.bG)([I.A], () => I.A.getWindowFocused(R.MLl.CHANNEL_CALL_POPOUT)),
        X = (0, a.bG)([N.Ay], () => null != W.id && N.Ay.isLocalVideoDisabled(W.id, (0, h.A)(t.type)), [W.id, t.type]),
        q = (0, E.A)(n.guild_id, W.id),
        J = y.Ay.getName(n.getGuildId(), n.id, W) + (q ? ` ${L.intl.string(L.t["pFO/Ph"])}` : ""),
        ee = B && (K || Q),
        et = o < 124 ? F : O,
        { avatarSrc: en, avatarDecorationSrc: el } = (0, _.A)({
            userId: W.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        ei = (0, a.bG)([g.A], () => g.A.getSelectedParticipant(n.id)),
        es = (0, x.A)(k.x.DEFAULT, t.user.id),
        er = (0, A.A)(t.user.id),
        ea = { channel: n, selectedParticipant: ei, user: W },
        eo = i.useRef(ea);
    return (i.useEffect(() => {
        eo.current = ea;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !Z && t?.id === n.id && m.A.selectParticipant(e.id, null);
    }, [Z]),
    s && !X && !P && Z && !u && null != U && N.Ay.supports(k.O5.VIDEO))
        ? null != es && null == er
            ? (0, l.jsx)(w.A, { avError: es, userId: t.id, width: o, selected: u })
            : (0, l.jsx)(
                  C.A,
                  {
                      onResize: j,
                      wrapperClassName: c !== f.N.CALL_TILE ? M.tN : void 0,
                      className: M.Qs,
                      mirror: Y,
                      streamId: $,
                      videoComponent: U,
                      fit: d,
                      videoSpinnerContext: W.id === z ? p.u.SELF_VIDEO : p.u.REMOTE_VIDEO,
                      paused: H,
                      userId: W.id,
                  },
                  $,
              )
        : (0, l.jsx)("div", {
              className: r()(M.Qs, { [M.Kx]: D || V }),
              children: (0, l.jsx)(v.A, {
                  "aria-label": J,
                  avatarDecoration: el,
                  backgroundSrc: W.getAvatarURL(n.guild_id, 80),
                  guildId: n.guild_id,
                  pulseSpeakingIndicator: G,
                  size: et,
                  speaking: B,
                  src: en,
                  userId: W.id,
              }),
          });
}
