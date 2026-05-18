i.d(t, { A: () => P });
var n = i(627968),
    l = i(64700),
    s = i(17928),
    a = i(661531),
    r = i(834730),
    d = i(97808),
    u = i(778712),
    c = i(983851),
    o = i(364522),
    m = i(858177),
    h = i(47167),
    A = i(475889),
    g = i(291594),
    p = i(85451),
    I = i(137177),
    x = i(409626),
    v = i(692969),
    f = i(529433),
    E = i(975732),
    _ = i(820512),
    N = i(769022),
    S = i(898926),
    C = i(287809),
    y = i(174459),
    j = i(562153),
    T = i(652215),
    b = i(375708),
    O = i(672680);
function G(e) {
    let { event: t, guildId: i, channelId: l } = e,
        a = (0, s.bG)([C.default], () => C.default.getUser(t.userId)),
        d = (0, m.O)(t.applicationId ?? null),
        u = j.Ay.useName(i, l, a),
        c = (0, v.A)({
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
                              children: b.intl.format(b.t.CKIMrx, {
                                  user: (0, n.jsx)(g.A, {
                                      tag: "span",
                                      onClick: () =>
                                          (0, E.openUserProfileModal)({ userId: t.userId, guildId: i, channelId: l }),
                                      children: (0, n.jsx)(r.E, {
                                          variant: "text-sm/semibold",
                                          tag: "span",
                                          children: u,
                                      }),
                                  }),
                                  activityName:
                                      null != c && null != d
                                          ? (0, n.jsx)(g.A, {
                                                tag: "span",
                                                onClick: c,
                                                children: (0, n.jsx)(r.E, {
                                                    variant: "text-sm/semibold",
                                                    tag: "span",
                                                    children: d.name,
                                                }),
                                            })
                                          : (0, n.jsx)(r.E, {
                                                variant: "text-sm/semibold",
                                                tag: "span",
                                                children: d?.name ?? b.intl.string(b.t.GIWFlF),
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
function V(e) {
    let { event: t, guildId: i, channelId: l } = e,
        a = (0, s.bG)([C.default], () => C.default.getUser(t.userId)),
        c = j.Ay.useName(i, l, a);
    return null == a
        ? null
        : (0, n.jsxs)("li", {
              className: O.NG,
              children: [
                  (0, n.jsx)("div", { className: O.Wz }),
                  (0, n.jsx)("div", {
                      className: O.xW,
                      children: (0, n.jsx)(d.eu, { src: a.getAvatarURL(i, 20), size: u._3.SIZE_20, "aria-hidden": !0 }),
                  }),
                  (0, n.jsxs)("div", {
                      className: O.Kw,
                      children: [
                          (0, n.jsx)(r.E, {
                              variant: "text-sm/normal",
                              className: O.qJ,
                              children: b.intl.format(b.t.TlVwqn, {
                                  user: c,
                                  userHook: (e, s) =>
                                      (0, n.jsx)(
                                          g.A,
                                          {
                                              tag: "span",
                                              className: O.C3,
                                              onClick: () =>
                                                  (0, E.openUserProfileModal)({
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
function R(e) {
    let { event: t, guildId: i, channelId: l } = e;
    return t.eventType === S.i.ACTIVITY_ENDED
        ? (0, n.jsx)(G, { event: t, guildId: i, channelId: l })
        : t.eventType === S.i.USER_LEFT
          ? (0, n.jsx)(V, { event: t, guildId: i, channelId: l })
          : null;
}
function k(e) {
    let { channel: t } = e,
        i = (0, A.H)(t),
        l = (0, h.Ay)(t);
    return (0, n.jsxs)("div", {
        className: O.hY,
        children: [
            (0, n.jsx)(c.H, { size: "custom", color: a.A.colors.ICON_FEEDBACK_POSITIVE, height: 20, width: 20 }),
            (0, n.jsx)(r.E, { variant: "text-md/medium", className: O.HA, children: l }),
            null != i && (0, n.jsx)(p.z, { textColor: "text-feedback-positive", entry: { start: i } }),
        ],
    });
}
function P(e) {
    let { channel: t, source: i, onMouseEnter: a, onMouseLeave: d } = e;
    l.useEffect(() => {
        (0, _.q)(t.id);
    }, [t.id]);
    let u = (0, s.bG)([N.A], () => N.A.getHistory(t.id), [t.id]),
        c = u.length > 0;
    return (l.useEffect(() => {
        c && y.default.track(T.HAw.OPEN_POPOUT, { type: "Voice Channel History", channel_id: t.id, source: i });
    }, [c, t.id, i]),
    c)
        ? (0, n.jsxs)("div", {
              role: "dialog",
              "aria-label": b.intl.string(b.t.N0ED9s),
              className: O.kL,
              onMouseEnter: a,
              onMouseLeave: d,
              children: [
                  "voice_channel" === i ? (0, n.jsx)(k, { channel: t }) : null,
                  (0, n.jsx)(o.Ip, {
                      children: (0, n.jsxs)("div", {
                          className: O.PI,
                          children: [
                              (0, n.jsx)("div", {
                                  className: O.s8,
                                  children: (0, n.jsx)(r.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: b.intl.string(b.t.N0ED9s),
                                  }),
                              }),
                              (0, n.jsx)("ol", {
                                  className: O.Gz,
                                  children: u.map((e) =>
                                      (0, n.jsx)(R, { event: e, guildId: t.guild_id, channelId: t.id }, e.key),
                                  ),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
