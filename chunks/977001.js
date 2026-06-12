"use strict";
n.d(t, { Ay: () => p, _E: () => f, ac: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(56121),
    a = n(939341),
    o = n(263577),
    l = n(751765),
    u = n(506326),
    c = n(868065),
    d = n(352760);
let _ = [u.Xr],
    h = [s.j.WEEK];
function f(e) {
    return null != e && h.includes(e);
}
let p = r.memo((e) => {
    let { entry: t, channel: n, selected: r } = e,
        { largeImage: s } = (0, a.nO)({
            entry: t,
            showCoverImage: !1,
            trackingSource: "memberlist_top_game_content_row",
        }),
        h = (0, l.TQ)(t);
    return null != h && f(h)
        ? (0, i.jsxs)(c.Zp, {
              selected: r,
              children: [
                  (0, i.jsxs)(c.UA, {
                      children: [
                          (0, i.jsx)(c.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, i.jsx)(c.ZB, { children: t.extra.game_name }),
                          (0, i.jsx)(u.mG, {
                              location: u.N5.CARD,
                              children: _.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                          }),
                      ],
                  }),
                  (0, i.jsx)(o.V, { src: s?.src, size: 48, className: d.xn, alt: s?.alt }),
              ],
          })
        : null;
});
