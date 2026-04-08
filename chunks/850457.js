n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(827734),
    r = n(397927),
    o = n(858177),
    d = n(47167),
    c = n(475889),
    u = n(291594),
    h = n(693879),
    A = n(769015),
    _ = n(409626),
    m = n(692969),
    g = n(290987),
    p = n(657331),
    f = n(820512),
    x = n(769022),
    E = n(898926),
    I = n(287809),
    C = n(954571),
    N = n(562153),
    T = n(652215),
    S = n(985018),
    b = n(930935);
function v(e) {
    let { event: t, guildId: n, channelId: l } = e,
        a = (0, s.bG)([I.default], () => I.default.getUser(t.userId)),
        d = (0, o.O)(t.applicationId ?? null),
        c = N.Ay.useName(n, l, a),
        h = (0, m.A)({
            location: "VoiceChannelHistory",
            applicationId: t.applicationId ?? void 0,
            source: _.Ob.ActivityCard,
        });
    return null == a
        ? null
        : (0, i.jsxs)("li", {
              className: b.NG,
              children: [
                  (0, i.jsx)("div", { className: b.Wz }),
                  (0, i.jsx)("div", {
                      className: b.xW,
                      children: (0, i.jsx)(A.A, { game: d, className: b.AW, "aria-hidden": !0 }),
                  }),
                  (0, i.jsxs)("div", {
                      className: b.Kw,
                      children: [
                          (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              className: b.rN,
                              children: S.intl.format(S.t.CKIMrx, {
                                  user: (0, i.jsx)(u.A, {
                                      tag: "span",
                                      onClick: () =>
                                          (0, p.openUserProfileModal)({ userId: t.userId, guildId: n, channelId: l }),
                                      children: (0, i.jsx)(r.Text, {
                                          variant: "text-sm/semibold",
                                          tag: "span",
                                          children: c,
                                      }),
                                  }),
                                  activityName:
                                      null != h && null != d
                                          ? (0, i.jsx)(u.A, {
                                                tag: "span",
                                                onClick: h,
                                                children: (0, i.jsx)(r.Text, {
                                                    variant: "text-sm/semibold",
                                                    tag: "span",
                                                    children: d.name,
                                                }),
                                            })
                                          : (0, i.jsx)(r.Text, {
                                                variant: "text-sm/semibold",
                                                tag: "span",
                                                children: d?.name ?? S.intl.string(S.t.GIWFlF),
                                            }),
                              }),
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: b.gE,
                              children: (0, i.jsx)(g.Ay, {
                                  end: t.timestamp,
                                  location: g.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function y(e) {
    let { event: t, guildId: n, channelId: l } = e,
        a = (0, s.bG)([I.default], () => I.default.getUser(t.userId)),
        o = N.Ay.useName(n, l, a);
    return null == a
        ? null
        : (0, i.jsxs)("li", {
              className: b.NG,
              children: [
                  (0, i.jsx)("div", { className: b.Wz }),
                  (0, i.jsx)("div", {
                      className: b.xW,
                      children: (0, i.jsx)(r.euF, {
                          src: a.getAvatarURL(n, 20),
                          size: r._3J.SIZE_20,
                          "aria-hidden": !0,
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: b.Kw,
                      children: [
                          (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              className: b.qJ,
                              children: S.intl.format(S.t.TlVwqn, {
                                  user: o,
                                  userHook: (e, s) =>
                                      (0, i.jsx)(
                                          u.A,
                                          {
                                              tag: "span",
                                              className: b.C3,
                                              onClick: () =>
                                                  (0, p.openUserProfileModal)({
                                                      userId: t.userId,
                                                      guildId: n,
                                                      channelId: l,
                                                  }),
                                              children: (0, i.jsx)(r.Text, {
                                                  variant: "text-sm/semibold",
                                                  tag: "span",
                                                  children: e,
                                              }),
                                          },
                                          s,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, i.jsx)(
                                          r.Text,
                                          { variant: "text-sm/normal", className: b.CS, children: e },
                                          t,
                                      ),
                              }),
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: b.gE,
                              children: (0, i.jsx)(g.Ay, {
                                  end: t.timestamp,
                                  location: g.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function j(e) {
    let { event: t, guildId: n, channelId: l } = e;
    return t.eventType === E.i.ACTIVITY_ENDED
        ? (0, i.jsx)(v, { event: t, guildId: n, channelId: l })
        : t.eventType === E.i.USER_LEFT
          ? (0, i.jsx)(y, { event: t, guildId: n, channelId: l })
          : null;
}
function R(e) {
    let { channel: t } = e,
        n = (0, c.H)(t),
        l = (0, d.Ay)(t);
    return (0, i.jsxs)("div", {
        className: b.hY,
        children: [
            (0, i.jsx)(r.HKD, { size: "custom", color: a.A.colors.ICON_FEEDBACK_POSITIVE, height: 20, width: 20 }),
            (0, i.jsx)(r.Text, { variant: "text-md/medium", className: b.HA, children: l }),
            null != n && (0, i.jsx)(h.z, { textColor: "text-feedback-positive", entry: { start: n } }),
        ],
    });
}
function O(e) {
    let { channel: t, source: n, onMouseEnter: a, onMouseLeave: o } = e;
    l.useEffect(() => {
        (0, f.q)(t.id);
    }, [t.id]);
    let d = (0, s.bG)([x.A], () => x.A.getHistory(t.id), [t.id]),
        c = d.length > 0;
    return (l.useEffect(() => {
        c && C.default.track(T.HAw.OPEN_POPOUT, { type: "Voice Channel History", channel_id: t.id, source: n });
    }, [c, t.id, n]),
    c)
        ? (0, i.jsxs)("div", {
              role: "dialog",
              "aria-label": S.intl.string(S.t.N0ED9s),
              className: b.kL,
              onMouseEnter: a,
              onMouseLeave: o,
              children: [
                  "voice_channel" === n ? (0, i.jsx)(R, { channel: t }) : null,
                  (0, i.jsx)(r.HOs, {
                      children: (0, i.jsxs)("div", {
                          className: b.PI,
                          children: [
                              (0, i.jsx)("div", {
                                  className: b.s8,
                                  children: (0, i.jsx)(r.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: S.intl.string(S.t.N0ED9s),
                                  }),
                              }),
                              (0, i.jsx)("ol", {
                                  className: b.Gz,
                                  children: d.map((e) =>
                                      (0, i.jsx)(j, { event: e, guildId: t.guild_id, channelId: t.id }, e.key),
                                  ),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
