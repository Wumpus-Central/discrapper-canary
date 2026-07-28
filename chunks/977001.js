"use strict";
n.d(t, { Ay: () => h, _E: () => A, ac: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(56121),
    s = n(939341),
    l = n(263577),
    o = n(583846),
    d = n(506326),
    c = n(868065),
    u = n(685504);
let _ = [d.Xr],
    E = [a.j.WEEK];
function A(e) {
    return null != e && E.includes(e);
}
let h = r.memo(function (e) {
    let { entry: t, channel: n, selected: r } = e,
        { largeImage: a } = (0, s.nO)({
            entry: t,
            showCoverImage: !1,
            trackingSource: "memberlist_top_game_content_row",
        }),
        E = (0, o.TQ)(t);
    return null != E && A(E)
        ? (0, i.jsxs)(c.Zp, {
              selected: r,
              children: [
                  (0, i.jsxs)(c.UA, {
                      children: [
                          (0, i.jsx)(c.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, i.jsx)(c.ZB, { children: t.extra.game_name }),
                          (0, i.jsx)(d.mG, {
                              location: d.N5.CARD,
                              children: _.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                          }),
                      ],
                  }),
                  (0, i.jsx)(l.V, { src: a?.src, size: 48, className: u.xn, alt: a?.alt }),
              ],
          })
        : null;
});
