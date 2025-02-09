i.d(t, { Z: () => l });
var n = i(200651),
    a = i(192379),
    o = i(901461),
    r = i(464891);
let s = a.memo(r.ZP);
function l(e) {
    let { message: t, channel: i, author: a, compact: r, animateAvatar: l, guildId: c, isGroupStart: d = !0, roleIcon: u, hideTimestamp: m } = e;
    return !(0, o.Z)(t) && (d || r)
        ? (0, n.jsx)(s, {
              message: t,
              channel: i,
              author: a,
              guildId: c,
              compact: r,
              animate: l,
              roleIcon: u,
              hideTimestamp: m
          })
        : void 0;
}
