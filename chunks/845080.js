n.d(t, { Z: () => s });
var r = n(255367),
    i = n(73800),
    l = n(901461),
    a = n(464891);
let o = i.memo(a.ZP);
function s(e) {
    let { message: t, channel: n, author: i, compact: a, animateAvatar: s, guildId: c, isGroupStart: u = !0, roleIcon: d, hideTimestamp: p, preview: m } = e;
    return !(0, l.Z)(t) && (u || a)
        ? (0, r.jsx)(o, {
              message: t,
              channel: n,
              author: i,
              guildId: c,
              compact: a,
              animate: s,
              roleIcon: d,
              hideTimestamp: p,
              preview: m
          })
        : void 0;
}
