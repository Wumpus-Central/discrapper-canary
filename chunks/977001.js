"use strict";
n.d(t, { Ay: () => p, _E: () => f, ac: () => h });
var l = n(477900),
    i = n(582128),
    s = n(56121),
    r = n(939341),
    a = n(263577),
    o = n(583846),
    u = n(506326),
    c = n(868065),
    d = n(685504);
let h = [u.Xr],
    m = [s.j.WEEK];
function f(e) {
    return null != e && m.includes(e);
}
let p = i.memo(function (e) {
    let { entry: t, channel: n, selected: i } = e,
        { largeImage: s } = (0, r.nO)({
            entry: t,
            showCoverImage: !1,
            trackingSource: "memberlist_top_game_content_row",
        }),
        m = (0, o.TQ)(t);
    return null != m && f(m)
        ? (0, l.jsxs)(c.Zp, {
              selected: i,
              children: [
                  (0, l.jsxs)(c.UA, {
                      children: [
                          (0, l.jsx)(c.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, l.jsx)(c.ZB, { children: t.extra.game_name }),
                          (0, l.jsx)(u.mG, {
                              location: u.N5.CARD,
                              children: h.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                          }),
                      ],
                  }),
                  (0, l.jsx)(a.V, { src: s?.src, size: 48, className: d.xn, alt: s?.alt }),
              ],
          })
        : null;
});
