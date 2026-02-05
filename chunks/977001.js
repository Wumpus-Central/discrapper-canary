"use strict";
n.d(t, { Ay: () => m, _E: () => p, ac: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(56121),
    s = n(939341),
    o = n(263577),
    l = n(583846),
    u = n(506326),
    c = n(868065),
    d = n(332225);
let _ = [u.Xr],
    f = [a.j.WEEK];
function p(e) {
    let t = f;
    return null != e && t.includes(e);
}
let h = (e) => {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: a } = (0, s.nO)({ entry: t, showCoverImage: !1 }),
            f = (0, l.TQ)(t);
        return null != f && p(f)
            ? (0, r.jsxs)(c.Zp, {
                  selected: i,
                  children: [
                      (0, r.jsxs)(c.UA, {
                          children: [
                              (0, r.jsx)(c.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, r.jsx)(c.ZB, { children: t.extra.game_name }),
                              (0, r.jsx)(u.mG, {
                                  location: u.N5.CARD,
                                  children: _.map((e, n) => (0, r.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, r.jsx)(o.V, { src: a?.src, size: 48, className: d.xn, alt: a?.alt }),
                  ],
              })
            : null;
    },
    m = i.memo(h);
