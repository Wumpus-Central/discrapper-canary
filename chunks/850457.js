"use strict";
n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(827734),
    o = n(397927),
    c = n(587895),
    d = n(47167),
    u = n(475889),
    h = n(693879),
    A = n(769015),
    p = n(290987),
    m = n(287809),
    g = n(562153),
    _ = n(996439),
    f = n(573143),
    x = n(360635),
    C = n(985018),
    E = n(615349);
function I(e) {
    let { event: t, guildId: n, channelId: s } = e,
        l = (0, a.bG)([m.default], () => m.default.getUser(t.userId)),
        r = (0, a.bG)([c.A], () => (null != t.applicationId ? c.A.getApplication(t.applicationId) : void 0)),
        d = g.Ay.useName(n, s, l);
    if (null == l) return null;
    let u = t.eventType === x.i.ACTIVITY_ENDED;
    return (0, i.jsxs)("div", {
        className: E.NG,
        children: [
            (0, i.jsx)("div", { className: E.Wz }),
            (0, i.jsx)("div", {
                className: E.xW,
                children:
                    u && null != r
                        ? (0, i.jsx)(A.A, { game: r, className: E.AW })
                        : (0, i.jsx)(o.euF, {
                              src: l.getAvatarURL(n, 20),
                              size: o._3J.SIZE_20,
                              "aria-label": l.username,
                          }),
            }),
            (0, i.jsxs)("div", {
                className: E.Kw,
                children: [
                    u
                        ? (0, i.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              className: E.rN,
                              children: C.intl.format(C.t.CKIMrx, {
                                  user: d,
                                  activityName: t.applicationName ?? "Unknown",
                              }),
                          })
                        : (0, i.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              className: E.qJ,
                              children: C.intl.format(C.t.TlVwqn, {
                                  user: d,
                                  userHook: (e, t) =>
                                      (0, i.jsx)(
                                          o.Text,
                                          { variant: "text-sm/semibold", className: E.C3, children: e },
                                          t,
                                      ),
                                  labelHook: (e, t) => (0, i.jsx)("span", { className: E.CS, children: e }, t),
                              }),
                          }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        className: E.gE,
                        children: (0, i.jsx)(p.Ay, {
                            end: t.timestamp,
                            location: p.Ay.Locations.VOICE_CHANNEL_HISTORY,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { channel: t } = e,
        n = (0, u.H)(t),
        s = (0, d.Ay)(t);
    return (0, i.jsxs)("div", {
        className: E.hY,
        children: [
            (0, i.jsx)(o.HKD, { size: "custom", color: r.A.colors.ICON_FEEDBACK_POSITIVE, height: 20, width: 20 }),
            (0, i.jsx)(o.Text, { variant: "text-md/medium", className: E.HA, children: s }),
            null != n && (0, i.jsx)(h.z, { textColor: "text-feedback-positive", entry: { start: n } }),
        ],
    });
}
function S(e) {
    let { channel: t, isStandardGap: n } = e,
        [s, r] = (0, a.bG)([f.A], () => [f.A.getHistory(t.id), f.A.getHistoryVersion()], [t.id], _.D);
    return 0 === s.length
        ? null
        : (0, i.jsxs)("div", {
              className: l()(E.kL, { [E.iA]: n }),
              children: [
                  (0, i.jsx)(N, { channel: t }),
                  (0, i.jsx)(o.HOs, {
                      children: (0, i.jsxs)("div", {
                          className: E.PI,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  className: E.s8,
                                  children: C.intl.string(C.t.N0ED9s),
                              }),
                              s.map((e) => (0, i.jsx)(I, { event: e, guildId: t.guild_id, channelId: t.id }, e.key)),
                          ],
                      }),
                  }),
              ],
          });
}
