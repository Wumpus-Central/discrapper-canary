"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(827734),
    r = n(397927),
    o = n(858177),
    c = n(47167),
    d = n(475889),
    u = n(291594),
    h = n(693879),
    A = n(769015),
    m = n(409626),
    _ = n(692969),
    g = n(290987),
    p = n(657331),
    f = n(820512),
    x = n(769022),
    E = n(898926),
    C = n(287809),
    I = n(954571),
    N = n(562153),
    S = n(652215),
    b = n(985018),
    T = n(4568);
function v(e) {
    let { event: t, guildId: n, channelId: s } = e,
        a = (0, l.bG)([C.default], () => C.default.getUser(t.userId)),
        c = (0, o.O)(t.applicationId ?? null),
        d = N.Ay.useName(n, s, a),
        h = (0, _.A)({
            location: "VoiceChannelHistory",
            applicationId: t.applicationId ?? void 0,
            source: m.Ob.ActivityCard,
        });
    return null == a
        ? null
        : (0, i.jsxs)("li", {
              className: T.NG,
              children: [
                  (0, i.jsx)("div", { className: T.Wz }),
                  (0, i.jsx)("div", {
                      className: T.xW,
                      children: (0, i.jsx)(A.A, { game: c, className: T.AW, "aria-hidden": !0 }),
                  }),
                  (0, i.jsxs)("div", {
                      className: T.Kw,
                      children: [
                          (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              className: T.rN,
                              children: b.intl.format(b.t.CKIMrx, {
                                  user: (0, i.jsx)(u.A, {
                                      tag: "span",
                                      onClick: () =>
                                          (0, p.openUserProfileModal)({ userId: t.userId, guildId: n, channelId: s }),
                                      children: (0, i.jsx)(r.Text, {
                                          variant: "text-sm/semibold",
                                          tag: "span",
                                          children: d,
                                      }),
                                  }),
                                  activityName:
                                      null != h && null != c
                                          ? (0, i.jsx)(u.A, {
                                                tag: "span",
                                                onClick: h,
                                                children: (0, i.jsx)(r.Text, {
                                                    variant: "text-sm/semibold",
                                                    tag: "span",
                                                    children: c.name,
                                                }),
                                            })
                                          : (0, i.jsx)(r.Text, {
                                                variant: "text-sm/semibold",
                                                tag: "span",
                                                children: c?.name ?? b.intl.string(b.t.GIWFlF),
                                            }),
                              }),
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: T.gE,
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
    let { event: t, guildId: n, channelId: s } = e,
        a = (0, l.bG)([C.default], () => C.default.getUser(t.userId)),
        o = N.Ay.useName(n, s, a);
    return null == a
        ? null
        : (0, i.jsxs)("li", {
              className: T.NG,
              children: [
                  (0, i.jsx)("div", { className: T.Wz }),
                  (0, i.jsx)("div", {
                      className: T.xW,
                      children: (0, i.jsx)(r.euF, {
                          src: a.getAvatarURL(n, 20),
                          size: r._3J.SIZE_20,
                          "aria-hidden": !0,
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: T.Kw,
                      children: [
                          (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              className: T.qJ,
                              children: b.intl.format(b.t.TlVwqn, {
                                  user: o,
                                  userHook: (e, l) =>
                                      (0, i.jsx)(
                                          u.A,
                                          {
                                              tag: "span",
                                              onClick: () =>
                                                  (0, p.openUserProfileModal)({
                                                      userId: t.userId,
                                                      guildId: n,
                                                      channelId: s,
                                                  }),
                                              children: (0, i.jsx)(r.Text, {
                                                  variant: "text-sm/semibold",
                                                  tag: "span",
                                                  className: T.C3,
                                                  children: e,
                                              }),
                                          },
                                          l,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, i.jsx)(
                                          r.Text,
                                          { variant: "text-sm/normal", className: T.CS, children: e },
                                          t,
                                      ),
                              }),
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: T.gE,
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
    let { event: t, guildId: n, channelId: s } = e;
    return t.eventType === E.i.ACTIVITY_ENDED
        ? (0, i.jsx)(v, { event: t, guildId: n, channelId: s })
        : t.eventType === E.i.USER_LEFT
          ? (0, i.jsx)(y, { event: t, guildId: n, channelId: s })
          : null;
}
function R(e) {
    let { channel: t } = e,
        n = (0, d.H)(t),
        s = (0, c.Ay)(t);
    return (0, i.jsxs)("div", {
        className: T.hY,
        children: [
            (0, i.jsx)(r.HKD, { size: "custom", color: a.A.colors.ICON_FEEDBACK_POSITIVE, height: 20, width: 20 }),
            (0, i.jsx)(r.Text, { variant: "text-md/medium", className: T.HA, children: s }),
            null != n && (0, i.jsx)(h.z, { textColor: "text-feedback-positive", entry: { start: n } }),
        ],
    });
}
function O(e) {
    let { channel: t, source: n, onMouseEnter: a, onMouseLeave: o } = e;
    s.useEffect(() => {
        (0, f.q)(t.id);
    }, [t.id]);
    let c = (0, l.bG)([x.A], () => x.A.getHistory(t.id), [t.id]),
        d = c.length > 0;
    return (s.useEffect(() => {
        d && I.default.track(S.HAw.OPEN_POPOUT, { type: "Voice Channel History", channel_id: t.id, source: n });
    }, [d, t.id, n]),
    d)
        ? (0, i.jsxs)("div", {
              role: "dialog",
              "aria-label": b.intl.string(b.t.N0ED9s),
              className: T.kL,
              onMouseEnter: a,
              onMouseLeave: o,
              children: [
                  (0, i.jsx)(R, { channel: t }),
                  (0, i.jsx)(r.HOs, {
                      children: (0, i.jsxs)("div", {
                          className: T.PI,
                          children: [
                              (0, i.jsx)("div", {
                                  className: T.s8,
                                  children: (0, i.jsx)(r.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: b.intl.string(b.t.N0ED9s),
                                  }),
                              }),
                              (0, i.jsx)("ol", {
                                  className: T.Gz,
                                  children: c.map((e) =>
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
