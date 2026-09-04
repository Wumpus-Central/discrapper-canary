n.d(t, { A: () => F, s: () => P });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(778712),
    u = n(866665),
    c = n(695366),
    d = n(661531),
    m = n(367513),
    p = n(684339),
    g = n(198052),
    f = n(520698),
    x = n(164617),
    h = n(958713),
    A = n(525505),
    v = n(550946),
    E = n(72755),
    C = n(51092),
    j = n(869146),
    I = n(854627),
    S = n(912630),
    _ = n(530804),
    N = n(280450),
    b = n(303277),
    y = n(531685),
    R = n(562153),
    k = n(51082),
    D = n(566566),
    T = n(289552),
    w = n(652215),
    L = n(731854),
    M = n(375708),
    O = n(584841);
let V = o._3.SIZE_80,
    G = o._3.SIZE_40;
function P(e) {
    let { channelId: t, participant: n } = e,
        i = (0, _.uy)(t, n.id),
        s = (0, a.bG)([N.default], () => N.default.getId()),
        r = (0, a.bG)([S.A], () => S.A.videoBackgroundUnavailable);
    return i
        ? (0, l.jsx)(u.m, {
              text: M.intl.string(M.t.HFwRpk),
              position: "bottom",
              children: (0, l.jsx)("div", {
                  className: O.bG,
                  children: (0, l.jsx)(c.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : n.user.id === s && r
          ? (0, l.jsx)(u.m, {
                text: M.intl.string(M.t["8n9gj5"]),
                position: "bottom",
                children: (0, l.jsx)("div", {
                    className: O.bG,
                    children: (0, l.jsx)(c.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                }),
            })
          : (0, l.jsx)(T.A, { userId: n.user.id });
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
            onVideoResize: S,
            blocked: _,
            ignored: T,
            noVideoRender: P = !1,
            pulseSpeakingIndicator: F = !1,
            paused: H = !1,
        } = e,
        U = b.Ay.getVideoComponent(),
        z = (0, a.bG)([N.default], () => N.default.getId()),
        { user: W, streamId: $, speaking: B } = t,
        Y = W.id === z,
        Z = (0, k.Ay)(t),
        Q = (0, a.bG)([y.A], () => y.A.isFocused()),
        K = (0, a.bG)([j.A], () => j.A.getWindowFocused(w.MLl.CHANNEL_CALL_POPOUT)),
        X = (0, a.bG)([b.Ay], () => null != W.id && b.Ay.isLocalVideoDisabled(W.id, (0, f.A)(t.type)), [W.id, t.type]),
        q = (0, v.A)(n.guild_id, W.id),
        J = R.Ay.getName(n.getGuildId(), n.id, W) + (q ? ` ${M.intl.string(M.t["pFO/Ph"])}` : ""),
        ee = B && (K || Q),
        et = o < 124 ? G : V,
        { avatarSrc: en, avatarDecorationSrc: el } = (0, I.A)({
            userId: W.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        ei = (0, a.bG)([g.A], () => g.A.getSelectedParticipant(n.id)),
        es = (0, A.A)(L.x.DEFAULT, t.user.id),
        er = (0, h.A)(t.user.id),
        ea = { channel: n, selectedParticipant: ei, user: W },
        eo = i.useRef(ea);
    return (i.useEffect(() => {
        eo.current = ea;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !Z && t?.id === n.id && m.A.selectParticipant(e.id, null);
    }, [Z]),
    s && !X && !P && Z && !u && null != U && b.Ay.supports(L.O5.VIDEO))
        ? null != es && null == er
            ? (0, l.jsx)(D.A, { avError: es, userId: t.id, width: o, selected: u })
            : (0, l.jsx)(
                  C.A,
                  {
                      onResize: S,
                      wrapperClassName: c !== x.N.CALL_TILE ? O.tN : void 0,
                      className: O.Qs,
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
              className: r()(O.Qs, { [O.Kx]: _ || T }),
              children: (0, l.jsx)(E.A, {
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
