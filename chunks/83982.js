n.d(t, { A: () => G, s: () => P });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(17928),
    o = n(990078),
    d = n(778712),
    c = n(695366),
    u = n(661531),
    _ = n(367513),
    f = n(684339),
    m = n(313961),
    p = n(520698),
    g = n(164617),
    h = n(958713),
    x = n(525505),
    v = n(550946),
    A = n(334557),
    I = n(51092),
    C = n(869146),
    E = n(854627),
    j = n(530804),
    b = n(495544),
    N = n(969341),
    S = n(531685),
    y = n(562153),
    w = n(51082),
    T = n(566566),
    R = n(289552),
    k = n(652215),
    M = n(731854),
    D = n(985018),
    L = n(391308);
let O = d._3.SIZE_80,
    V = d._3.SIZE_40;
function P(e) {
    let { channelId: t, participant: n } = e;
    return (0, j.uy)(t, n.id)
        ? (0, i.jsx)(o.m, {
              text: D.intl.string(D.t.HFwRpk),
              position: "bottom",
              children: (0, i.jsx)("div", {
                  className: L.bG,
                  children: (0, i.jsx)(c.E, { color: u.A.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, i.jsx)(R.A, { userId: n.user.id });
}
function G(e) {
    let {
            participant: t,
            channel: n,
            inCall: a,
            width: o,
            selected: d,
            popoutType: c,
            fit: u,
            onVideoResize: j,
            blocked: R,
            ignored: P,
            noVideoRender: G = !1,
            pulseSpeakingIndicator: F = !1,
            paused: H = !1,
        } = e,
        U = N.Ay.getVideoComponent(),
        W = (0, s.bG)([b.default], () => b.default.getId()),
        { user: B, streamId: z, speaking: Z } = t,
        $ = B.id === W,
        Y = (0, w.Ay)(t),
        Q = (0, s.bG)([S.A], () => S.A.isFocused()),
        K = (0, s.bG)([C.A], () => C.A.getWindowFocused(k.MLl.CHANNEL_CALL_POPOUT)),
        X = (0, s.bG)([N.Ay], () => null != B.id && N.Ay.isLocalVideoDisabled(B.id, (0, p.A)(t.type)), [B.id, t.type]),
        q = (0, v.A)(n.guild_id, B.id),
        J = y.Ay.getName(n.getGuildId(), n.id, B) + (q ? ` ${D.intl.string(D.t["pFO/Ph"])}` : ""),
        ee = Z && (K || Q),
        et = o < 124 ? V : O,
        { avatarSrc: en, avatarDecorationSrc: ei } = (0, E.A)({
            userId: B.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        el = (0, s.bG)([m.A], () => m.A.getSelectedParticipant(n.id)),
        ea = (0, x.A)(M.x.DEFAULT, t.user.id),
        er = (0, h.A)(t.user.id),
        es = { channel: n, selectedParticipant: el, user: B },
        eo = l.useRef(es);
    return (l.useEffect(() => {
        eo.current = es;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !Y && t?.id === n.id && _.A.selectParticipant(e.id, null);
    }, [Y]),
    a && !X && !G && Y && !d && null != U && N.Ay.supports(M.O5.VIDEO))
        ? null != ea && null == er
            ? (0, i.jsx)(T.A, { avError: ea, userId: t.id, width: o, selected: d })
            : (0, i.jsx)(
                  I.A,
                  {
                      onResize: j,
                      wrapperClassName: c !== g.N.CALL_TILE ? L.tN : void 0,
                      className: L.Qs,
                      mirror: $,
                      streamId: z,
                      videoComponent: U,
                      fit: u,
                      videoSpinnerContext: B.id === W ? f.u.SELF_VIDEO : f.u.REMOTE_VIDEO,
                      paused: H,
                      userId: B.id,
                  },
                  z,
              )
        : (0, i.jsx)("div", {
              className: r()(L.Qs, { [L.Kx]: R || P }),
              children: (0, i.jsx)(A.A, {
                  "aria-label": J,
                  avatarDecoration: ei,
                  backgroundSrc: B.getAvatarURL(n.guild_id, 80),
                  guildId: n.guild_id,
                  pulseSpeakingIndicator: F,
                  size: et,
                  speaking: Z,
                  src: en,
                  userId: B.id,
              }),
          });
}
