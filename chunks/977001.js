"use strict";
n.d(t, { Ay: () => f, _E: () => p, ac: () => h });
var l = n(627968),
    i = n(64700),
    s = n(56121),
    a = n(939341),
    r = n(263577),
    o = n(583846),
    c = n(506326),
    u = n(868065),
    d = n(352760);
let h = [c.Xr],
    m = [s.j.WEEK];
function p(e) {
    return null != e && m.includes(e);
}
let f = i.memo((e) => {
    let { entry: t, channel: n, selected: i } = e,
        { largeImage: s } = (0, a.nO)({ entry: t, showCoverImage: !1 }),
        m = (0, o.TQ)(t);
    return null != m && p(m)
        ? (0, l.jsxs)(u.Zp, {
              selected: i,
              children: [
                  (0, l.jsxs)(u.UA, {
                      children: [
                          (0, l.jsx)(u.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, l.jsx)(u.ZB, { children: t.extra.game_name }),
                          (0, l.jsx)(c.mG, {
                              location: c.N5.CARD,
                              children: h.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                          }),
                      ],
                  }),
                  (0, l.jsx)(r.V, { src: s?.src, size: 48, className: d.xn, alt: s?.alt }),
              ],
          })
        : null;
});
