n.d(t, { A: () => k, s: () => w });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
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
    f = n(991701),
    _ = n(401901),
    E = n(869146),
    C = n(854627),
    x = n(530804),
    S = n(961350),
    T = n(696451),
    I = n(430452),
    N = n(531685),
    v = n(562153),
    y = n(51082),
    b = (n(729365), n(566566)),
    R = n(289552),
    j = n(652215),
    M = n(731854),
    D = n(985018),
    O = n(707511);
let L = c._3J.SIZE_80,
    P = c._3J.SIZE_40;
function w(e) {
    let { channelId: t, participant: n } = e;
    return (0, x.uy)(t, n.id)
        ? (0, i.jsx)(o.m, {
              text: D.intl.string(D.t.HFwRpk),
              position: "bottom",
              children: (0, i.jsx)("div", {
                  className: O.bG,
                  children: (0, i.jsx)(c.EpV, { color: c.LU0.colors.STATUS_WARNING_BACKGROUND }),
              }),
          })
        : (0, i.jsx)(R.A, { userId: n.user.id });
}
function k(e) {
    let {
            participant: t,
            channel: n,
            inCall: a,
            width: o,
            selected: c,
            popoutType: x,
            fit: R,
            onVideoResize: w,
            blocked: k,
            ignored: U,
            noVideoRender: G = !1,
            pulseSpeakingIndicator: F = !1,
            paused: H = !1,
        } = e,
        B = I.A.getVideoComponent(),
        V = (0, r.bG)([S.default], () => S.default.getId()),
        { user: W, streamId: K, speaking: z } = t,
        Y = W.id === V,
        q = (0, y.Ay)(t),
        J = (0, r.bG)([N.A], () => N.A.isFocused()),
        $ = (0, r.bG)([E.A], () => E.A.getWindowFocused(j.MLl.CHANNEL_CALL_POPOUT)),
        Z = (0, r.bG)([I.A], () => null != W.id && I.A.isLocalVideoDisabled(W.id, (0, m.A)(t.type)), [W.id, t.type]),
        X = (0, r.bG)([T.Ay], () => T.Ay.isGuestOrLurker(n.guild_id, W.id)),
        Q = v.Ay.getName(n.getGuildId(), n.id, W) + (X ? ` ${D.intl.string(D.t["pFO/Ph"])}` : ""),
        ee = z && ($ || J),
        et = o < 124 ? P : L,
        { avatarSrc: en, avatarDecorationSrc: ei } = (0, C.A)({
            userId: W.id,
            guildId: n.guild_id,
            size: et,
            animateOnHover: !ee,
        }),
        el = (0, r.bG)([h.A], () => h.A.getSelectedParticipant(n.id)),
        ea = (0, g.A)(M.x.DEFAULT, t.user.id),
        es = (0, p.A)(t.user.id),
        er = { channel: n, selectedParticipant: el, user: W },
        eo = l.useRef(er);
    return (l.useEffect(() => {
        eo.current = er;
    }),
    l.useEffect(() => {
        let { channel: e, selectedParticipant: t, user: n } = eo.current;
        e.isGuildStageVoice() && !q && t?.id === n.id && d.A.selectParticipant(e.id, null);
    }, [q]),
    a && !Z && !G && q && !c && null != B && I.A.supports(M.O5.VIDEO))
        ? null != ea && null == es
            ? (0, i.jsx)(b.A, { avError: ea, userId: t.id, width: o, selected: c })
            : (0, i.jsx)(
                  _.A,
                  {
                      onResize: w,
                      wrapperClassName: x !== A.N.CALL_TILE ? O.tN : void 0,
                      className: O.Qs,
                      mirror: Y,
                      streamId: K,
                      videoComponent: B,
                      fit: R,
                      videoSpinnerContext: W.id === V ? u.u.SELF_VIDEO : u.u.REMOTE_VIDEO,
                      paused: H,
                      userId: W.id,
                  },
                  K,
              )
        : (0, i.jsx)("div", {
              className: s()(O.Qs, { [O.Kx]: k || U }),
              children: (0, i.jsx)(f.A, {
                  "aria-label": Q,
                  avatarDecoration: ei,
                  backgroundSrc: W.getAvatarURL(n.guild_id, 80),
                  guildId: n.guild_id,
                  pulseSpeakingIndicator: F,
                  size: et,
                  speaking: z,
                  src: en,
                  userId: W.id,
              }),
          });
}
