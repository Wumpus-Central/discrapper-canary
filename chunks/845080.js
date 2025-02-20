n.d(t, { Z: () => a });
var i = n(200651),
    r = n(192379),
    l = n(901461),
    o = n(464891);
let s = r.memo(o.ZP);
function a(e) {
    let { message: t, channel: n, author: r, compact: o, animateAvatar: a, guildId: u, isGroupStart: d = !0, roleIcon: c, hideTimestamp: h } = e;
    return !(0, l.Z)(t) && (d || o)
        ? (0, i.jsx)(s, {
              message: t,
              channel: n,
              author: r,
              guildId: u,
              compact: o,
              animate: a,
              roleIcon: c,
              hideTimestamp: h
          })
        : void 0;
}
