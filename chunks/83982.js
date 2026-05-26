n.d(t, { A: () => P, s: () => V });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(990078),
    u = n(778712),
    c = n(695366),
    d = n(661531),
    m = n(367513),
    p = n(684339),
    g = n(313961),
    f = n(520698),
    h = n(164617),
    A = n(958713),
    x = n(525505),
    E = n(550946),
    v = n(334557),
    C = n(51092),
    I = n(869146),
    j = n(854627),
    _ = n(530804),
    S = n(495544),
    N = n(761853),
    b = n(531685),
    y = n(562153),
    w = n(51082),
    R = n(566566),
    T = n(289552),
    D = n(652215),
    k = n(731854),
    O = n(375708),
    M = n(24908);
let L = u._3.SIZE_80,
    F = u._3.SIZE_40;
function V(e) {
    let { channelId: t, participant: n } = e;
    return (0, _.uy)(t, n.id)
        ? (0, l.jsx)(o.m, {
              text: O.intl.string(O.t.HFwRpk),
              position: "bottom",
              children: (0, l.jsx)("div", {
                  className: M.bG,
                  children: (0, l.jsx)(c.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, l.jsx)(T.A, { userId: n.user.id });
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
            onVideoResize: _,
            blocked: T,
            ignored: V,
            noVideoRender: P = !1,
            pulseSpeakingIndicator: G = !1,
            paused: H = !1,
        } = e,
        U = N.Ay.getVideoComponent(),
        z = (0, r.bG)([S.default], () => S.default.getId()),
        { user: W, streamId: $, speaking: B } = t,
        Y = W.id === z,
        Z = (0, w.Ay)(t),
        K = (0, r.bG)([b.A], () => b.A.isFocused()),
        Q = (0, r.bG)([I.A], () => I.A.getWindowFocused(D.MLl.CHANNEL_CALL_POPOUT)),
        X = (0, r.bG)([N.Ay], () => null != W.id && N.Ay.isLocalVideoDisabled(W.id, (0, f.A)(t.type)), [W.id, t.type]),
        q = (0, E.A)(n.guild_id, W.id),
        J = y.Ay.getName(n.getGuildId(), n.id, W) + (q ? ` ${O.intl.string(O.t["pFO/Ph"])}` : ""),
        ee = B && (Q || K),
        et = o < 124 ? F : L,
        { avatarSrc: en, avatarDecorationSrc: el } = (0, j.A)({
            userId: W.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        ei = (0, r.bG)([g.A], () => g.A.getSelectedParticipant(n.id)),
        es = (0, x.A)(k.x.DEFAULT, t.user.id),
        ea = (0, A.A)(t.user.id),
        er = { channel: n, selectedParticipant: ei, user: W },
        eo = i.useRef(er);
    return (i.useEffect(() => {
        eo.current = er;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !Z && t?.id === n.id && m.A.selectParticipant(e.id, null);
    }, [Z]),
    s && !X && !P && Z && !u && null != U && N.Ay.supports(k.O5.VIDEO))
        ? null != es && null == ea
            ? (0, l.jsx)(R.A, { avError: es, userId: t.id, width: o, selected: u })
            : (0, l.jsx)(
                  C.A,
                  {
                      onResize: _,
                      wrapperClassName: c !== h.N.CALL_TILE ? M.tN : void 0,
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
              className: a()(M.Qs, { [M.Kx]: T || V }),
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
