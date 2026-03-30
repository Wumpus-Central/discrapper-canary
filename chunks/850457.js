"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(827734),
    r = n(397927),
    o = n(858177),
    c = n(47167),
    d = n(475889),
    u = n(693879),
    h = n(769015),
    A = n(290987),
    m = n(820512),
    _ = n(769022),
    g = n(898926),
    p = n(287809),
    f = n(954571),
    x = n(562153),
    E = n(652215),
    C = n(985018),
    I = n(4568);
function N(e) {
    let { event: t, guildId: n, channelId: s } = e,
        a = (0, l.bG)([p.default], () => p.default.getUser(t.userId)),
        c = (0, o.O)(t.applicationId ?? null),
        d = x.Ay.useName(n, s, a);
    return null == a
        ? null
        : (0, i.jsxs)("li", {
              className: I.NG,
              children: [
                  (0, i.jsx)("div", { className: I.Wz }),
                  (0, i.jsx)("div", {
                      className: I.xW,
                      children: (0, i.jsx)(h.A, { game: c, className: I.AW, "aria-hidden": !0 }),
                  }),
                  (0, i.jsxs)("div", {
                      className: I.Kw,
                      children: [
                          (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              className: I.rN,
                              children: C.intl.format(C.t.CKIMrx, {
                                  user: d,
                                  activityName: c?.name ?? C.intl.string(C.t.GIWFlF),
                              }),
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: I.gE,
                              children: (0, i.jsx)(A.Ay, {
                                  end: t.timestamp,
                                  location: A.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function S(e) {
    let { event: t, guildId: n, channelId: s } = e,
        a = (0, l.bG)([p.default], () => p.default.getUser(t.userId)),
        o = x.Ay.useName(n, s, a);
    return null == a
        ? null
        : (0, i.jsxs)("li", {
              className: I.NG,
              children: [
                  (0, i.jsx)("div", { className: I.Wz }),
                  (0, i.jsx)("div", {
                      className: I.xW,
                      children: (0, i.jsx)(r.euF, {
                          src: a.getAvatarURL(n, 20),
                          size: r._3J.SIZE_20,
                          "aria-hidden": !0,
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: I.Kw,
                      children: [
                          (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              className: I.qJ,
                              children: C.intl.format(C.t.TlVwqn, {
                                  user: o,
                                  userHook: (e, t) =>
                                      (0, i.jsx)(
                                          r.Text,
                                          { variant: "text-sm/semibold", className: I.C3, children: e },
                                          t,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, i.jsx)(
                                          r.Text,
                                          { variant: "text-sm/normal", className: I.CS, children: e },
                                          t,
                                      ),
                              }),
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: I.gE,
                              children: (0, i.jsx)(A.Ay, {
                                  end: t.timestamp,
                                  location: A.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function b(e) {
    let { event: t, guildId: n, channelId: s } = e;
    return t.eventType === g.i.ACTIVITY_ENDED
        ? (0, i.jsx)(N, { event: t, guildId: n, channelId: s })
        : t.eventType === g.i.USER_LEFT
          ? (0, i.jsx)(S, { event: t, guildId: n, channelId: s })
          : null;
}
function T(e) {
    let { channel: t } = e,
        n = (0, d.H)(t),
        s = (0, c.Ay)(t);
    return (0, i.jsxs)("div", {
        className: I.hY,
        children: [
            (0, i.jsx)(r.HKD, { size: "custom", color: a.A.colors.ICON_FEEDBACK_POSITIVE, height: 20, width: 20 }),
            (0, i.jsx)(r.Text, { variant: "text-md/medium", className: I.HA, children: s }),
            null != n && (0, i.jsx)(u.z, { textColor: "text-feedback-positive", entry: { start: n } }),
        ],
    });
}
function v(e) {
    let { channel: t, source: n, onMouseEnter: a, onMouseLeave: o } = e;
    s.useEffect(() => {
        (0, m.q)(t.id);
    }, [t.id]);
    let c = (0, l.bG)([_.A], () => _.A.getHistory(t.id), [t.id]),
        d = c.length > 0;
    return (s.useEffect(() => {
        d && f.default.track(E.HAw.OPEN_POPOUT, { type: "Voice Channel History", channel_id: t.id, source: n });
    }, [d, t.id, n]),
    d)
        ? (0, i.jsxs)("div", {
              role: "dialog",
              "aria-label": C.intl.string(C.t.N0ED9s),
              className: I.kL,
              onMouseEnter: a,
              onMouseLeave: o,
              children: [
                  (0, i.jsx)(T, { channel: t }),
                  (0, i.jsx)(r.HOs, {
                      children: (0, i.jsxs)("div", {
                          className: I.PI,
                          children: [
                              (0, i.jsx)("div", {
                                  className: I.s8,
                                  children: (0, i.jsx)(r.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: C.intl.string(C.t.N0ED9s),
                                  }),
                              }),
                              (0, i.jsx)("ol", {
                                  className: I.Gz,
                                  children: c.map((e) =>
                                      (0, i.jsx)(b, { event: e, guildId: t.guild_id, channelId: t.id }, e.key),
                                  ),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
