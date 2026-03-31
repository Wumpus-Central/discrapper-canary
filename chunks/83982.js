n.d(t, { A: () => k, s: () => w });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(367513),
    u = n(684339),
    h = n(313961),
    m = n(520698),
    A = n(164617),
    p = n(958713),
    g = n(525505),
    f = n(550946),
    _ = n(991701),
    E = n(401901),
    x = n(869146),
    C = n(854627),
    S = n(530804),
    I = n(961350),
    T = n(430452),
    v = n(531685),
    N = n(562153),
    y = n(51082),
    b = n(566566),
    j = n(289552),
    R = n(652215),
    M = n(731854),
    D = n(985018),
    O = n(32685);
let L = c._3J.SIZE_80,
    P = c._3J.SIZE_40;
function w(e) {
    let { channelId: t, participant: n } = e;
    return (0, S.uy)(t, n.id)
        ? (0, i.jsx)(o.m, {
              text: D.intl.string(D.t.HFwRpk),
              position: "bottom",
              children: (0, i.jsx)("div", {
                  className: O.bG,
                  children: (0, i.jsx)(c.EpV, { color: c.LU0.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, i.jsx)(j.A, { userId: n.user.id });
}
function k(e) {
    let {
            participant: t,
            channel: n,
            inCall: s,
            width: o,
            selected: c,
            popoutType: S,
            fit: j,
            onVideoResize: w,
            blocked: k,
            ignored: U,
            noVideoRender: G = !1,
            pulseSpeakingIndicator: F = !1,
            paused: H = !1,
        } = e,
        B = T.Ay.getVideoComponent(),
        V = (0, r.bG)([I.default], () => I.default.getId()),
        { user: K, streamId: W, speaking: z } = t,
        Y = K.id === V,
        q = (0, y.Ay)(t),
        J = (0, r.bG)([v.A], () => v.A.isFocused()),
        $ = (0, r.bG)([x.A], () => x.A.getWindowFocused(R.MLl.CHANNEL_CALL_POPOUT)),
        Z = (0, r.bG)([T.Ay], () => null != K.id && T.Ay.isLocalVideoDisabled(K.id, (0, m.A)(t.type)), [K.id, t.type]),
        X = (0, f.A)(n.guild_id, K.id),
        Q = N.Ay.getName(n.getGuildId(), n.id, K) + (X ? ` ${D.intl.string(D.t["pFO/Ph"])}` : ""),
        ee = z && ($ || J),
        et = o < 124 ? P : L,
        { avatarSrc: en, avatarDecorationSrc: ei } = (0, C.A)({
            userId: K.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        el = (0, r.bG)([h.A], () => h.A.getSelectedParticipant(n.id)),
        es = (0, g.A)(M.x.DEFAULT, t.user.id),
        ea = (0, p.A)(t.user.id),
        er = { channel: n, selectedParticipant: el, user: K },
        eo = l.useRef(er);
    return (l.useEffect(() => {
        eo.current = er;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !q && t?.id === n.id && d.A.selectParticipant(e.id, null);
    }, [q]),
    s && !Z && !G && q && !c && null != B && T.Ay.supports(M.O5.VIDEO))
        ? null != es && null == ea
            ? (0, i.jsx)(b.A, { avError: es, userId: t.id, width: o, selected: c })
            : (0, i.jsx)(
                  E.A,
                  {
                      onResize: w,
                      wrapperClassName: S !== A.N.CALL_TILE ? O.tN : void 0,
                      className: O.Qs,
                      mirror: Y,
                      streamId: W,
                      videoComponent: B,
                      fit: j,
                      videoSpinnerContext: K.id === V ? u.u.SELF_VIDEO : u.u.REMOTE_VIDEO,
                      paused: H,
                      userId: K.id,
                  },
                  W,
              )
        : (0, i.jsx)("div", {
              className: a()(O.Qs, { [O.Kx]: k || U }),
              children: (0, i.jsx)(_.A, {
                  "aria-label": Q,
                  avatarDecoration: ei,
                  backgroundSrc: K.getAvatarURL(n.guild_id, 80),
                  guildId: n.guild_id,
                  pulseSpeakingIndicator: F,
                  size: et,
                  speaking: z,
                  src: en,
                  userId: K.id,
              }),
          });
}
