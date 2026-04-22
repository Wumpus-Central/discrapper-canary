n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(827734),
    r = n(834730),
    o = n(97808),
    d = n(778712),
    c = n(983851),
    u = n(573613),
    h = n(858177),
    A = n(47167),
    _ = n(475889),
    m = n(291594),
    g = n(693879),
    p = n(769015),
    f = n(409626),
    E = n(692969),
    x = n(290987),
    I = n(657331),
    C = n(820512),
    b = n(769022),
    N = n(898926),
    S = n(287809),
    v = n(954571),
    T = n(562153),
    y = n(652215),
    R = n(985018),
    j = n(672680);
function L(e) {
    let { event: t, guildId: n, channelId: l } = e,
        a = (0, s.bG)([S.default], () => S.default.getUser(t.userId)),
        o = (0, h.O)(t.applicationId ?? null),
        d = T.Ay.useName(n, l, a),
        c = (0, E.A)({
            location: "VoiceChannelHistory",
            applicationId: t.applicationId ?? void 0,
            source: f.Ob.ActivityCard,
        });
    return null == a
        ? null
        : (0, i.jsxs)("li", {
              className: j.NG,
              children: [
                  (0, i.jsx)("div", { className: j.Wz }),
                  (0, i.jsx)("div", {
                      className: j.xW,
                      children: (0, i.jsx)(p.A, { game: o, className: j.AW, "aria-hidden": !0 }),
                  }),
                  (0, i.jsxs)("div", {
                      className: j.Kw,
                      children: [
                          (0, i.jsx)(r.E, {
                              variant: "text-sm/normal",
                              className: j.rN,
                              children: R.intl.format(R.t.CKIMrx, {
                                  user: (0, i.jsx)(m.A, {
                                      tag: "span",
                                      onClick: () =>
                                          (0, I.openUserProfileModal)({ userId: t.userId, guildId: n, channelId: l }),
                                      children: (0, i.jsx)(r.E, {
                                          variant: "text-sm/semibold",
                                          tag: "span",
                                          children: d,
                                      }),
                                  }),
                                  activityName:
                                      null != c && null != o
                                          ? (0, i.jsx)(m.A, {
                                                tag: "span",
                                                onClick: c,
                                                children: (0, i.jsx)(r.E, {
                                                    variant: "text-sm/semibold",
                                                    tag: "span",
                                                    children: o.name,
                                                }),
                                            })
                                          : (0, i.jsx)(r.E, {
                                                variant: "text-sm/semibold",
                                                tag: "span",
                                                children: o?.name ?? R.intl.string(R.t.GIWFlF),
                                            }),
                              }),
                          }),
                          (0, i.jsx)(r.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: j.gE,
                              children: (0, i.jsx)(x.Ay, {
                                  end: t.timestamp,
                                  location: x.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function O(e) {
    let { event: t, guildId: n, channelId: l } = e,
        a = (0, s.bG)([S.default], () => S.default.getUser(t.userId)),
        c = T.Ay.useName(n, l, a);
    return null == a
        ? null
        : (0, i.jsxs)("li", {
              className: j.NG,
              children: [
                  (0, i.jsx)("div", { className: j.Wz }),
                  (0, i.jsx)("div", {
                      className: j.xW,
                      children: (0, i.jsx)(o.eu, { src: a.getAvatarURL(n, 20), size: d._3.SIZE_20, "aria-hidden": !0 }),
                  }),
                  (0, i.jsxs)("div", {
                      className: j.Kw,
                      children: [
                          (0, i.jsx)(r.E, {
                              variant: "text-sm/normal",
                              className: j.qJ,
                              children: R.intl.format(R.t.TlVwqn, {
                                  user: c,
                                  userHook: (e, s) =>
                                      (0, i.jsx)(
                                          m.A,
                                          {
                                              tag: "span",
                                              className: j.C3,
                                              onClick: () =>
                                                  (0, I.openUserProfileModal)({
                                                      userId: t.userId,
                                                      guildId: n,
                                                      channelId: l,
                                                  }),
                                              children: (0, i.jsx)(r.E, {
                                                  variant: "text-sm/semibold",
                                                  tag: "span",
                                                  children: e,
                                              }),
                                          },
                                          s,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, i.jsx)(r.E, { variant: "text-sm/normal", className: j.CS, children: e }, t),
                              }),
                          }),
                          (0, i.jsx)(r.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: j.gE,
                              children: (0, i.jsx)(x.Ay, {
                                  end: t.timestamp,
                                  location: x.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function G(e) {
    let { event: t, guildId: n, channelId: l } = e;
    return t.eventType === N.i.ACTIVITY_ENDED
        ? (0, i.jsx)(L, { event: t, guildId: n, channelId: l })
        : t.eventType === N.i.USER_LEFT
          ? (0, i.jsx)(O, { event: t, guildId: n, channelId: l })
          : null;
}
function D(e) {
    let { channel: t } = e,
        n = (0, _.H)(t),
        l = (0, A.Ay)(t);
    return (0, i.jsxs)("div", {
        className: j.hY,
        children: [
            (0, i.jsx)(c.H, { size: "custom", color: a.A.colors.ICON_FEEDBACK_POSITIVE, height: 20, width: 20 }),
            (0, i.jsx)(r.E, { variant: "text-md/medium", className: j.HA, children: l }),
            null != n && (0, i.jsx)(g.z, { textColor: "text-feedback-positive", entry: { start: n } }),
        ],
    });
}
function M(e) {
    let { channel: t, source: n, onMouseEnter: a, onMouseLeave: o } = e;
    l.useEffect(() => {
        (0, C.q)(t.id);
    }, [t.id]);
    let d = (0, s.bG)([b.A], () => b.A.getHistory(t.id), [t.id]),
        c = d.length > 0;
    return (l.useEffect(() => {
        c && v.default.track(y.HAw.OPEN_POPOUT, { type: "Voice Channel History", channel_id: t.id, source: n });
    }, [c, t.id, n]),
    c)
        ? (0, i.jsxs)("div", {
              role: "dialog",
              "aria-label": R.intl.string(R.t.N0ED9s),
              className: j.kL,
              onMouseEnter: a,
              onMouseLeave: o,
              children: [
                  "voice_channel" === n ? (0, i.jsx)(D, { channel: t }) : null,
                  (0, i.jsx)(u.Ip, {
                      children: (0, i.jsxs)("div", {
                          className: j.PI,
                          children: [
                              (0, i.jsx)("div", {
                                  className: j.s8,
                                  children: (0, i.jsx)(r.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: R.intl.string(R.t.N0ED9s),
                                  }),
                              }),
                              (0, i.jsx)("ol", {
                                  className: j.Gz,
                                  children: d.map((e) =>
                                      (0, i.jsx)(G, { event: e, guildId: t.guild_id, channelId: t.id }, e.key),
                                  ),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
