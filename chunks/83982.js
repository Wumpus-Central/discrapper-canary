n.d(t, { A: () => P, s: () => V });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(990078),
    d = n(778712),
    c = n(695366),
    u = n(827734),
    _ = n(367513),
    f = n(684339),
    m = n(313961),
    p = n(520698),
    g = n(164617),
    h = n(958713),
    A = n(525505),
    x = n(550946),
    v = n(991701),
    I = n(401901),
    E = n(869146),
    C = n(854627),
    j = n(530804),
    N = n(961350),
    y = n(430452),
    b = n(531685),
    S = n(562153),
    w = n(51082),
    T = n(566566),
    k = n(289552),
    R = n(652215),
    L = n(731854),
    D = n(985018),
    M = n(391308);
let O = d._3.SIZE_80,
    F = d._3.SIZE_40;
function V(e) {
    let { channelId: t, participant: n } = e;
    return (0, j.uy)(t, n.id)
        ? (0, i.jsx)(o.m, {
              text: D.intl.string(D.t.HFwRpk),
              position: "bottom",
              children: (0, i.jsx)("div", {
                  className: M.bG,
                  children: (0, i.jsx)(c.E, { color: u.A.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, i.jsx)(k.A, { userId: n.user.id });
}
function P(e) {
    let {
            participant: t,
            channel: n,
            inCall: a,
            width: o,
            selected: d,
            popoutType: c,
            fit: u,
            onVideoResize: j,
            blocked: k,
            ignored: V,
            noVideoRender: P = !1,
            pulseSpeakingIndicator: G = !1,
            paused: H = !1,
        } = e,
        U = y.Ay.getVideoComponent(),
        W = (0, s.bG)([N.default], () => N.default.getId()),
        { user: z, streamId: B, speaking: Z } = t,
        Y = z.id === W,
        $ = (0, w.Ay)(t),
        Q = (0, s.bG)([b.A], () => b.A.isFocused()),
        K = (0, s.bG)([E.A], () => E.A.getWindowFocused(R.MLl.CHANNEL_CALL_POPOUT)),
        X = (0, s.bG)([y.Ay], () => null != z.id && y.Ay.isLocalVideoDisabled(z.id, (0, p.A)(t.type)), [z.id, t.type]),
        q = (0, x.A)(n.guild_id, z.id),
        J = S.Ay.getName(n.getGuildId(), n.id, z) + (q ? ` ${D.intl.string(D.t["pFO/Ph"])}` : ""),
        ee = Z && (K || Q),
        et = o < 124 ? F : O,
        { avatarSrc: en, avatarDecorationSrc: ei } = (0, C.A)({
            userId: z.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        el = (0, s.bG)([m.A], () => m.A.getSelectedParticipant(n.id)),
        ea = (0, A.A)(L.x.DEFAULT, t.user.id),
        er = (0, h.A)(t.user.id),
        es = { channel: n, selectedParticipant: el, user: z },
        eo = l.useRef(es);
    return (l.useEffect(() => {
        eo.current = es;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !$ && t?.id === n.id && _.A.selectParticipant(e.id, null);
    }, [$]),
    a && !X && !P && $ && !d && null != U && y.Ay.supports(L.O5.VIDEO))
        ? null != ea && null == er
            ? (0, i.jsx)(T.A, { avError: ea, userId: t.id, width: o, selected: d })
            : (0, i.jsx)(
                  I.A,
                  {
                      onResize: j,
                      wrapperClassName: c !== g.N.CALL_TILE ? M.tN : void 0,
                      className: M.Qs,
                      mirror: Y,
                      streamId: B,
                      videoComponent: U,
                      fit: u,
                      videoSpinnerContext: z.id === W ? f.u.SELF_VIDEO : f.u.REMOTE_VIDEO,
                      paused: H,
                      userId: z.id,
                  },
                  B,
              )
        : (0, i.jsx)("div", {
              className: r()(M.Qs, { [M.Kx]: k || V }),
              children: (0, i.jsx)(v.A, {
                  "aria-label": J,
                  avatarDecoration: ei,
                  backgroundSrc: z.getAvatarURL(n.guild_id, 80),
                  guildId: n.guild_id,
                  pulseSpeakingIndicator: G,
                  size: et,
                  speaking: Z,
                  src: en,
                  userId: z.id,
              }),
          });
}
