n.d(t, { A: () => F, s: () => P });
var i = n(627968),
    l = n(64700),
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
    x = n(958713),
    A = n(525505),
    v = n(550946),
    E = n(334557),
    C = n(51092),
    I = n(869146),
    j = n(854627),
    _ = n(530804),
    S = n(495544),
    N = n(51760),
    b = n(531685),
    y = n(562153),
    w = n(51082),
    R = n(566566),
    k = n(289552),
    T = n(652215),
    D = n(731854),
    O = n(985018),
    L = n(391308);
let M = u._3.SIZE_80,
    V = u._3.SIZE_40;
function P(e) {
    let { channelId: t, participant: n } = e;
    return (0, _.uy)(t, n.id)
        ? (0, i.jsx)(o.m, {
              text: O.intl.string(O.t.HFwRpk),
              position: "bottom",
              children: (0, i.jsx)("div", {
                  className: L.bG,
                  children: (0, i.jsx)(c.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, i.jsx)(k.A, { userId: n.user.id });
}
function F(e) {
    let {
            participant: t,
            channel: n,
            inCall: s,
            width: o,
            selected: u,
            popoutType: c,
            fit: d,
            onVideoResize: _,
            blocked: k,
            ignored: P,
            noVideoRender: F = !1,
            pulseSpeakingIndicator: G = !1,
            paused: H = !1,
        } = e,
        U = N.Ay.getVideoComponent(),
        z = (0, r.bG)([S.default], () => S.default.getId()),
        { user: W, streamId: $, speaking: B } = t,
        Y = W.id === z,
        Z = (0, w.Ay)(t),
        Q = (0, r.bG)([b.A], () => b.A.isFocused()),
        K = (0, r.bG)([I.A], () => I.A.getWindowFocused(T.MLl.CHANNEL_CALL_POPOUT)),
        X = (0, r.bG)([N.Ay], () => null != W.id && N.Ay.isLocalVideoDisabled(W.id, (0, f.A)(t.type)), [W.id, t.type]),
        q = (0, v.A)(n.guild_id, W.id),
        J = y.Ay.getName(n.getGuildId(), n.id, W) + (q ? ` ${O.intl.string(O.t["pFO/Ph"])}` : ""),
        ee = B && (K || Q),
        et = o < 124 ? V : M,
        { avatarSrc: en, avatarDecorationSrc: ei } = (0, j.A)({
            userId: W.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        el = (0, r.bG)([g.A], () => g.A.getSelectedParticipant(n.id)),
        es = (0, A.A)(D.x.DEFAULT, t.user.id),
        ea = (0, x.A)(t.user.id),
        er = { channel: n, selectedParticipant: el, user: W },
        eo = l.useRef(er);
    return (l.useEffect(() => {
        eo.current = er;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !Z && t?.id === n.id && m.A.selectParticipant(e.id, null);
    }, [Z]),
    s && !X && !F && Z && !u && null != U && N.Ay.supports(D.O5.VIDEO))
        ? null != es && null == ea
            ? (0, i.jsx)(R.A, { avError: es, userId: t.id, width: o, selected: u })
            : (0, i.jsx)(
                  C.A,
                  {
                      onResize: _,
                      wrapperClassName: c !== h.N.CALL_TILE ? L.tN : void 0,
                      className: L.Qs,
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
        : (0, i.jsx)("div", {
              className: a()(L.Qs, { [L.Kx]: k || P }),
              children: (0, i.jsx)(E.A, {
                  "aria-label": J,
                  avatarDecoration: ei,
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
