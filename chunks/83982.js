n.d(t, { A: () => w, s: () => k });
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
    g = n(958713),
    p = n(525505),
    _ = n(550946),
    f = n(991701),
    E = n(401901),
    x = n(869146),
    C = n(854627),
    S = n(530804),
    I = n(961350),
    T = n(430452),
    N = n(531685),
    v = n(562153),
    y = n(51082),
    b = n(566566),
    j = n(289552),
    R = n(652215),
    M = n(731854),
    D = n(985018),
    O = n(633916);
let L = c._3J.SIZE_80,
    P = c._3J.SIZE_40;
function k(e) {
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
function w(e) {
    let {
            participant: t,
            channel: n,
            inCall: s,
            width: o,
            selected: c,
            popoutType: S,
            fit: j,
            onVideoResize: k,
            blocked: w,
            ignored: U,
            noVideoRender: G = !1,
            pulseSpeakingIndicator: F = !1,
            paused: B = !1,
        } = e,
        H = T.Ay.getVideoComponent(),
        V = (0, r.bG)([I.default], () => I.default.getId()),
        { user: K, streamId: W, speaking: z } = t,
        q = K.id === V,
        Y = (0, y.Ay)(t),
        J = (0, r.bG)([N.A], () => N.A.isFocused()),
        $ = (0, r.bG)([x.A], () => x.A.getWindowFocused(R.MLl.CHANNEL_CALL_POPOUT)),
        Z = (0, r.bG)([T.Ay], () => null != K.id && T.Ay.isLocalVideoDisabled(K.id, (0, m.A)(t.type)), [K.id, t.type]),
        X = (0, _.A)(n.guild_id, K.id),
        Q = v.Ay.getName(n.getGuildId(), n.id, K) + (X ? ` ${D.intl.string(D.t["pFO/Ph"])}` : ""),
        ee = z && ($ || J),
        et = o < 124 ? P : L,
        { avatarSrc: en, avatarDecorationSrc: ei } = (0, C.A)({
            userId: K.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        el = (0, r.bG)([h.A], () => h.A.getSelectedParticipant(n.id)),
        es = (0, p.A)(M.x.DEFAULT, t.user.id),
        ea = (0, g.A)(t.user.id),
        er = { channel: n, selectedParticipant: el, user: K },
        eo = l.useRef(er);
    return (l.useEffect(() => {
        eo.current = er;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !Y && t?.id === n.id && d.A.selectParticipant(e.id, null);
    }, [Y]),
    s && !Z && !G && Y && !c && null != H && T.Ay.supports(M.O5.VIDEO))
        ? null != es && null == ea
            ? (0, i.jsx)(b.A, { avError: es, userId: t.id, width: o, selected: c })
            : (0, i.jsx)(
                  E.A,
                  {
                      onResize: k,
                      wrapperClassName: S !== A.N.CALL_TILE ? O.tN : void 0,
                      className: O.Qs,
                      mirror: q,
                      streamId: W,
                      videoComponent: H,
                      fit: j,
                      videoSpinnerContext: K.id === V ? u.u.SELF_VIDEO : u.u.REMOTE_VIDEO,
                      paused: B,
                      userId: K.id,
                  },
                  W,
              )
        : (0, i.jsx)("div", {
              className: a()(O.Qs, { [O.Kx]: w || U }),
              children: (0, i.jsx)(f.A, {
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
