i.d(t, { A: () => R });
var n = i(627968),
    l = i(64700),
    s = i(17928),
    a = i(661531),
    r = i(834730),
    d = i(97808),
    o = i(778712),
    u = i(983851),
    c = i(364522),
    m = i(858177),
    h = i(47167),
    g = i(475889),
    A = i(291594),
    p = i(85451),
    I = i(137177),
    x = i(409626),
    v = i(692969),
    f = i(529433),
    _ = i(975732),
    E = i(820512),
    N = i(769022),
    S = i(898926),
    y = i(287809),
    C = i(174459),
    j = i(562153),
    b = i(652215),
    T = i(375708),
    O = i(672680);
function k(e) {
    let { event: t, guildId: i, channelId: l } = e,
        a = (0, s.bG)([y.default], () => y.default.getUser(t.userId)),
        d = (0, m.O)(t.applicationId ?? null),
        o = j.Ay.useName(i, l, a),
        u = (0, v.A)({
            location: "VoiceChannelHistory",
            applicationId: t.applicationId ?? void 0,
            source: x.Ob.ActivityCard,
        });
    return null == a
        ? null
        : (0, n.jsxs)("li", {
              className: O.NG,
              children: [
                  (0, n.jsx)("div", { className: O.Wz }),
                  (0, n.jsx)("div", {
                      className: O.xW,
                      children: (0, n.jsx)(I.A, { game: d, className: O.AW, "aria-hidden": !0 }),
                  }),
                  (0, n.jsxs)("div", {
                      className: O.Kw,
                      children: [
                          (0, n.jsx)(r.E, {
                              variant: "text-sm/normal",
                              className: O.rN,
                              children: T.intl.format(T.t.CKIMrx, {
                                  user: (0, n.jsx)(A.A, {
                                      tag: "span",
                                      onClick: () =>
                                          (0, _.openUserProfileModal)({ userId: t.userId, guildId: i, channelId: l }),
                                      children: (0, n.jsx)(r.E, {
                                          variant: "text-sm/semibold",
                                          tag: "span",
                                          children: o,
                                      }),
                                  }),
                                  activityName:
                                      null != u && null != d
                                          ? (0, n.jsx)(A.A, {
                                                tag: "span",
                                                onClick: u,
                                                children: (0, n.jsx)(r.E, {
                                                    variant: "text-sm/semibold",
                                                    tag: "span",
                                                    children: d.name,
                                                }),
                                            })
                                          : (0, n.jsx)(r.E, {
                                                variant: "text-sm/semibold",
                                                tag: "span",
                                                children: d?.name ?? T.intl.string(T.t.GIWFlF),
                                            }),
                              }),
                          }),
                          (0, n.jsx)(r.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: O.gE,
                              children: (0, n.jsx)(f.Ay, {
                                  end: t.timestamp,
                                  location: f.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function G(e) {
    let { event: t, guildId: i, channelId: l } = e,
        a = (0, s.bG)([y.default], () => y.default.getUser(t.userId)),
        u = j.Ay.useName(i, l, a);
    return null == a
        ? null
        : (0, n.jsxs)("li", {
              className: O.NG,
              children: [
                  (0, n.jsx)("div", { className: O.Wz }),
                  (0, n.jsx)("div", {
                      className: O.xW,
                      children: (0, n.jsx)(d.eu, { src: a.getAvatarURL(i, 20), size: o._3.SIZE_20, "aria-hidden": !0 }),
                  }),
                  (0, n.jsxs)("div", {
                      className: O.Kw,
                      children: [
                          (0, n.jsx)(r.E, {
                              variant: "text-sm/normal",
                              className: O.qJ,
                              children: T.intl.format(T.t.TlVwqn, {
                                  user: u,
                                  userHook: (e, s) =>
                                      (0, n.jsx)(
                                          A.A,
                                          {
                                              tag: "span",
                                              className: O.C3,
                                              onClick: () =>
                                                  (0, _.openUserProfileModal)({
                                                      userId: t.userId,
                                                      guildId: i,
                                                      channelId: l,
                                                  }),
                                              children: (0, n.jsx)(r.E, {
                                                  variant: "text-sm/semibold",
                                                  tag: "span",
                                                  children: e,
                                              }),
                                          },
                                          s,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, n.jsx)(r.E, { variant: "text-sm/normal", className: O.CS, children: e }, t),
                              }),
                          }),
                          (0, n.jsx)(r.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: O.gE,
                              children: (0, n.jsx)(f.Ay, {
                                  end: t.timestamp,
                                  location: f.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function V(e) {
    let { event: t, guildId: i, channelId: l } = e;
    return t.eventType === S.i.ACTIVITY_ENDED
        ? (0, n.jsx)(k, { event: t, guildId: i, channelId: l })
        : t.eventType === S.i.USER_LEFT
          ? (0, n.jsx)(G, { event: t, guildId: i, channelId: l })
          : null;
}
function w(e) {
    let { channel: t } = e,
        i = (0, g.H)(t),
        l = (0, h.Ay)(t);
    return (0, n.jsxs)("div", {
        className: O.hY,
        children: [
            (0, n.jsx)(u.H, { size: "custom", color: a.A.colors.ICON_FEEDBACK_POSITIVE, height: 20, width: 20 }),
            (0, n.jsx)(r.E, { variant: "text-md/medium", className: O.HA, children: l }),
            null != i && (0, n.jsx)(p.z, { textColor: "text-feedback-positive", entry: { start: i } }),
        ],
    });
}
function R(e) {
    let { channel: t, source: i, onMouseEnter: a, onMouseLeave: d } = e;
    l.useEffect(() => {
        (0, E.q)(t.id);
    }, [t.id]);
    let o = (0, s.bG)([N.A], () => N.A.getHistory(t.id), [t.id]),
        u = o.length > 0;
    return (l.useEffect(() => {
        u && C.default.track(b.HAw.OPEN_POPOUT, { type: "Voice Channel History", channel_id: t.id, source: i });
    }, [u, t.id, i]),
    u)
        ? (0, n.jsxs)("div", {
              role: "dialog",
              "aria-label": T.intl.string(T.t.N0ED9s),
              className: O.kL,
              onMouseEnter: a,
              onMouseLeave: d,
              children: [
                  "voice_channel" === i ? (0, n.jsx)(w, { channel: t }) : null,
                  (0, n.jsx)(c.Ip, {
                      children: (0, n.jsxs)("div", {
                          className: O.PI,
                          children: [
                              (0, n.jsx)("div", {
                                  className: O.s8,
                                  children: (0, n.jsx)(r.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: T.intl.string(T.t.N0ED9s),
                                  }),
                              }),
                              (0, n.jsx)("ol", {
                                  className: O.Gz,
                                  children: o.map((e) =>
                                      (0, n.jsx)(V, { event: e, guildId: t.guild_id, channelId: t.id }, e.key),
                                  ),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
