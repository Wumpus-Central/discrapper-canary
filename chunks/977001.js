"use strict";
n.d(t, { Ay: () => f, _E: () => p, ac: () => h });
var i = n(627968),
    l = n(64700),
    s = n(56121),
    r = n(939341),
    a = n(263577),
    o = n(583846),
    c = n(506326),
    u = n(868065),
    d = n(352760);
let h = [c.Xr],
    m = [s.j.WEEK];
function p(e) {
    return null != e && m.includes(e);
}
let f = l.memo((e) => {
    let { entry: t, channel: n, selected: l } = e,
        { largeImage: s } = (0, r.nO)({ entry: t, showCoverImage: !1 }),
        m = (0, o.TQ)(t);
    return null != m && p(m)
        ? (0, i.jsxs)(u.Zp, {
              selected: l,
              children: [
                  (0, i.jsxs)(u.UA, {
                      children: [
                          (0, i.jsx)(u.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, i.jsx)(u.ZB, { children: t.extra.game_name }),
                          (0, i.jsx)(c.mG, {
                              location: c.N5.CARD,
                              children: h.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                          }),
                      ],
                  }),
                  (0, i.jsx)(a.V, { src: s?.src, size: 48, className: d.xn, alt: s?.alt }),
              ],
          })
        : null;
});
