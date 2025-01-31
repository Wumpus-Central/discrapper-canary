n.d(t, { Z: () => o });
var i = n(200651),
    l = n(192379),
    r = n(901461),
    s = n(464891);
let a = l.memo(s.ZP);
function o(e) {
    let { message: t, channel: n, author: l, compact: s, animateAvatar: o, guildId: d, isGroupStart: u = !0, roleIcon: c, hideTimestamp: h } = e;
    return !(0, r.Z)(t) && (u || s)
        ? (0, i.jsx)(a, {
              message: t,
              channel: n,
              author: l,
              guildId: d,
              compact: s,
              animate: o,
              roleIcon: c,
              hideTimestamp: h
          })
        : void 0;
}
