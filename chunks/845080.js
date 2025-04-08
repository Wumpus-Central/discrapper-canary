n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(901461),
    o = n(464891);
let a = i.memo(o.ZP);
function u(e) {
    let { message: t, channel: n, author: i, compact: o, animateAvatar: u, guildId: s, isGroupStart: c = !0, roleIcon: d, hideTimestamp: p, preview: f } = e;
    return !(0, l.Z)(t) && (c || o)
        ? (0, r.jsx)(a, {
              message: t,
              channel: n,
              author: i,
              guildId: s,
              compact: o,
              animate: u,
              roleIcon: d,
              hideTimestamp: p,
              preview: f
          })
        : void 0;
}
