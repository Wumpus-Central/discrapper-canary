"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    r = n(397927),
    a = n(587895),
    o = n(47167),
    c = n(475889),
    d = n(693879),
    u = n(769015),
    h = n(290987),
    A = n(769022),
    m = n(898926),
    p = n(287809),
    g = n(562153),
    _ = n(996439),
    f = n(985018),
    x = n(4568);
function C(e) {
    let { event: t, guildId: n, channelId: l } = e,
        o = (0, s.bG)([p.default], () => p.default.getUser(t.userId)),
        c = (0, s.bG)([a.A], () =>
            t.eventType === m.i.ACTIVITY_ENDED && null != t.applicationId
                ? a.A.getApplication(t.applicationId)
                : void 0,
        ),
        d = g.Ay.useName(n, l, o);
    if (null == o) return null;
    let A = t.eventType === m.i.ACTIVITY_ENDED;
    return (0, i.jsxs)("div", {
        className: x.NG,
        children: [
            (0, i.jsx)("div", { className: x.Wz }),
            (0, i.jsx)("div", {
                className: x.xW,
                children:
                    A && null != c
                        ? (0, i.jsx)(u.A, { game: c, className: x.AW })
                        : (0, i.jsx)(r.euF, {
                              src: o.getAvatarURL(n, 20),
                              size: r._3J.SIZE_20,
                              "aria-label": o.username,
                          }),
            }),
            (0, i.jsxs)("div", {
                className: x.Kw,
                children: [
                    A
                        ? (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              className: x.rN,
                              children: f.intl.format(f.t.CKIMrx, {
                                  user: d,
                                  activityName: t.applicationName ?? "Unknown",
                              }),
                          })
                        : (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              className: x.qJ,
                              children: f.intl.format(f.t.TlVwqn, {
                                  user: d,
                                  userHook: (e, t) =>
                                      (0, i.jsx)(
                                          r.Text,
                                          { variant: "text-sm/semibold", className: x.C3, children: e },
                                          t,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, i.jsx)(
                                          r.Text,
                                          { variant: "text-sm/normal", className: x.CS, children: e },
                                          t,
                                      ),
                              }),
                          }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        className: x.gE,
                        children: (0, i.jsx)(h.Ay, {
                            end: t.timestamp,
                            location: h.Ay.Locations.VOICE_CHANNEL_HISTORY,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { channel: t } = e,
        n = (0, c.H)(t),
        s = (0, o.Ay)(t);
    return (0, i.jsxs)("div", {
        className: x.hY,
        children: [
            (0, i.jsx)(r.HKD, { size: "custom", color: l.A.colors.ICON_FEEDBACK_POSITIVE, height: 20, width: 20 }),
            (0, i.jsx)(r.Text, { variant: "text-md/medium", className: x.HA, children: s }),
            null != n && (0, i.jsx)(d.z, { textColor: "text-feedback-positive", entry: { start: n } }),
        ],
    });
}
function I(e) {
    let { channel: t } = e,
        [n, l] = (0, s.bG)([A.A], () => [A.A.getHistory(t.id), A.A.getHistoryVersion(t.id)], [t.id], _.D);
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: x.kL,
              children: [
                  (0, i.jsx)(E, { channel: t }),
                  (0, i.jsx)(r.HOs, {
                      children: (0, i.jsxs)("div", {
                          className: x.PI,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  className: x.s8,
                                  children: f.intl.string(f.t.N0ED9s),
                              }),
                              n.map((e) => (0, i.jsx)(C, { event: e, guildId: t.guild_id, channelId: t.id }, e.key)),
                          ],
                      }),
                  }),
              ],
          });
}
