n.d(t, { Z: () => l });
var r = n(255367),
    i = n(73800),
    o = n(901461),
    a = n(464891);
let s = i.memo(a.ZP);
function l(e) {
    let { message: t, channel: n, author: i, compact: a, animateAvatar: l, guildId: c, isGroupStart: u = !0, roleIcon: d, hideTimestamp: f, hideGuildTag: _, preview: p } = e;
    return !(0, o.Z)(t) && (u || a)
        ? (0, r.jsx)(s, {
              message: t,
              channel: n,
              author: i,
              guildId: c,
              compact: a,
              animate: l,
              roleIcon: d,
              hideTimestamp: f,
              hideGuildTag: _,
              preview: p
          })
        : void 0;
}
