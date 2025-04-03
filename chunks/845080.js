n.d(t, { Z: () => l });
var i = n(200651),
    a = n(192379),
    o = n(901461),
    r = n(464891);
let s = a.memo(r.ZP);
function l(e) {
    let { message: t, channel: n, author: a, compact: r, animateAvatar: l, guildId: c, isGroupStart: u = !0, roleIcon: d, hideTimestamp: f } = e;
    return !(0, o.Z)(t) && (u || r)
        ? (0, i.jsx)(s, {
              message: t,
              channel: n,
              author: a,
              guildId: c,
              compact: r,
              animate: l,
              roleIcon: d,
              hideTimestamp: f
          })
        : void 0;
}
