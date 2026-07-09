n.d(t, { A: () => P, s: () => G });
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
    x = n(958713),
    A = n(525505),
    E = n(550946),
    v = n(766761),
    C = n(51092),
    I = n(869146),
    S = n(854627),
    j = n(912630),
    _ = n(530804),
    N = n(280450),
    b = n(451409),
    y = n(531685),
    T = n(562153),
    D = n(51082),
    R = n(566566),
    k = n(289552),
    w = n(652215),
    O = n(731854),
    L = n(375708),
    M = n(24908);
let F = u._3.SIZE_80,
    V = u._3.SIZE_40;
function G(e) {
    let { channelId: t, participant: n } = e,
        i = (0, _.uy)(t, n.id),
        s = (0, a.bG)([N.default], () => N.default.getId()),
        r = (0, a.bG)([j.A], () => j.A.videoBackgroundUnavailable);
    return i
        ? (0, l.jsx)(o.m, {
              text: L.intl.string(L.t.HFwRpk),
              position: "bottom",
              children: (0, l.jsx)("div", {
                  className: M.bG,
                  children: (0, l.jsx)(c.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : n.user.id === s && r
          ? (0, l.jsx)(o.m, {
                text: L.intl.string(L.t["8n9gj5"]),
                position: "bottom",
                children: (0, l.jsx)("div", {
                    className: M.bG,
                    children: (0, l.jsx)(c.E, { color: d.A.colors.STATUS_WARNING_BACKGROUND }),
                }),
            })
          : (0, l.jsx)(k.A, { userId: n.user.id });
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
            blocked: _,
            ignored: k,
            noVideoRender: G = !1,
            pulseSpeakingIndicator: P = !1,
            paused: H = !1,
        } = e,
        U = b.Ay.getVideoComponent(),
        z = (0, a.bG)([N.default], () => N.default.getId()),
        { user: W, streamId: $, speaking: B } = t,
        Y = W.id === z,
        Z = (0, D.Ay)(t),
        K = (0, a.bG)([y.A], () => y.A.isFocused()),
        Q = (0, a.bG)([I.A], () => I.A.getWindowFocused(w.MLl.CHANNEL_CALL_POPOUT)),
        X = (0, a.bG)([b.Ay], () => null != W.id && b.Ay.isLocalVideoDisabled(W.id, (0, h.A)(t.type)), [W.id, t.type]),
        q = (0, E.A)(n.guild_id, W.id),
        J = T.Ay.getName(n.getGuildId(), n.id, W) + (q ? ` ${L.intl.string(L.t["pFO/Ph"])}` : ""),
        ee = B && (Q || K),
        et = o < 124 ? V : F,
        { avatarSrc: en, avatarDecorationSrc: el } = (0, S.A)({
            userId: W.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        ei = (0, a.bG)([g.A], () => g.A.getSelectedParticipant(n.id)),
        es = (0, A.A)(O.x.DEFAULT, t.user.id),
        er = (0, x.A)(t.user.id),
        ea = { channel: n, selectedParticipant: ei, user: W },
        eo = i.useRef(ea);
    return (i.useEffect(() => {
        eo.current = ea;
    }),
    i.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !Z && t?.id === n.id && m.A.selectParticipant(e.id, null);
    }, [Z]),
    s && !X && !G && Z && !u && null != U && b.Ay.supports(O.O5.VIDEO))
        ? null != es && null == er
            ? (0, l.jsx)(R.A, { avError: es, userId: t.id, width: o, selected: u })
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
              className: r()(M.Qs, { [M.Kx]: _ || k }),
              children: (0, l.jsx)(v.A, {
                  "aria-label": J,
                  avatarDecoration: el,
                  backgroundSrc: W.getAvatarURL(n.guild_id, 80),
                  guildId: n.guild_id,
                  pulseSpeakingIndicator: P,
                  size: et,
                  speaking: B,
                  src: en,
                  userId: W.id,
              }),
          });
}
