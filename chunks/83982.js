n.d(t, {
    A: () => M,
    s: () => L,
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(367513),
    d = n(684339),
    f = n(313961),
    p = n(520698),
    b = n(164617),
    g = n(958713),
    m = n(525505),
    h = n(991701),
    A = n(401901),
    y = n(869146),
    _ = n(854627),
    E = n(530804),
    v = n(961350),
    O = n(696451),
    x = n(430452),
    S = n(531685),
    N = n(562153),
    C = n(51082),
    j = (n(729365), n(566566)),
    T = n(289552),
    I = n(652215),
    w = n(731854),
    R = n(985018),
    P = n(707511);
let D = c._3J.SIZE_80,
    k = c._3J.SIZE_40;

function L(e) {
    let { channelId: t, participant: n } = e;
    return (0, E.uy)(t, n.id)
        ? (0, l.jsx)(o.m, {
              text: R.intl.string(R.t.HFwRpk),
              position: "bottom",
              children: (0, l.jsx)("div", {
                  className: P.bG,
                  children: (0, l.jsx)(c.EpV, {
                      color: c.LU0.colors.STATUS_WARNING_BACKGROUND,
                  }),
              }),
          })
        : (0, l.jsx)(T.A, {
              userId: n.user.id,
          });
}

function M(e) {
    let {
            participant: t,
            channel: n,
            inCall: i,
            width: o,
            selected: c,
            popoutType: E,
            fit: T,
            onVideoResize: L,
            blocked: M,
            ignored: U,
            noVideoRender: V = !1,
            pulseSpeakingIndicator: F = !1,
            paused: G = !1,
        } = e,
        H = x.A.getVideoComponent(),
        B = (0, s.bG)([v.default], () => v.default.getId()),
        { user: Y, streamId: W, speaking: z } = t,
        K = Y.id === B,
        X = (0, C.Ay)(t),
        Z = (0, s.bG)([S.A], () => S.A.isFocused()),
        J = (0, s.bG)([y.A], () => y.A.getWindowFocused(I.MLl.CHANNEL_CALL_POPOUT)),
        q = (0, s.bG)([x.A], () => null != Y.id && x.A.isLocalVideoDisabled(Y.id, (0, p.A)(t.type)), [Y.id, t.type]),
        Q = (0, s.bG)([O.Ay], () => O.Ay.isGuestOrLurker(n.guild_id, Y.id)),
        $ = N.Ay.getName(n.getGuildId(), n.id, Y) + (Q ? " ".concat(R.intl.string(R.t["pFO/Ph"])) : ""),
        ee = z && (J || Z),
        et = o < 124 ? k : D,
        { avatarSrc: en, avatarDecorationSrc: el } = (0, _.A)({
            userId: Y.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        er = (0, s.bG)([f.A], () => f.A.getSelectedParticipant(n.id)),
        ei = (0, m.A)(w.x.DEFAULT, t.user.id),
        ea = (0, g.A)(t.user.id),
        es = {
            channel: n,
            selectedParticipant: er,
            user: Y,
        },
        eo = r.useRef(es);
    return (r.useEffect(() => {
        eo.current = es;
    }),
    r.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !X && (null == t ? void 0 : t.id) === n.id && u.A.selectParticipant(e.id, null);
    }, [X]),
    i && !q && !V && X && !c && null != H && x.A.supports(w.O5.VIDEO))
        ? null != ei && null == ea
            ? (0, l.jsx)(j.A, {
                  avError: ei,
                  userId: t.id,
                  width: o,
                  selected: c,
              })
            : (0, l.jsx)(
                  A.A,
                  {
                      onResize: L,
                      wrapperClassName: E !== b.N.CALL_TILE ? P.tN : void 0,
                      className: P.Qs,
                      mirror: K,
                      streamId: W,
                      videoComponent: H,
                      fit: T,
                      videoSpinnerContext: Y.id === B ? d.u.SELF_VIDEO : d.u.REMOTE_VIDEO,
                      paused: G,
                      userId: Y.id,
                  },
                  W,
              )
        : (0, l.jsx)("div", {
              className: a()(P.Qs, {
                  [P.Kx]: M || U,
              }),
              children: (0, l.jsx)(h.A, {
                  "aria-label": $,
                  avatarDecoration: el,
                  backgroundSrc: Y.getAvatarURL(n.guild_id, 80),
                  guildId: n.guild_id,
                  pulseSpeakingIndicator: F,
                  size: et,
                  speaking: z,
                  src: en,
                  userId: Y.id,
              }),
          });
}
