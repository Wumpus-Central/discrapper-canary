a.d(i, { Z: () => r });
var t = a(200651),
    n = a(192379),
    o = a(901461),
    s = a(464891);
let l = n.memo(s.ZP);
function r(e) {
    let { message: i, channel: a, author: n, compact: s, animateAvatar: r, guildId: c, isGroupStart: d = !0, roleIcon: u, hideTimestamp: _ } = e;
    return !(0, o.Z)(i) && (d || s)
        ? (0, t.jsx)(l, {
              message: i,
              channel: a,
              author: n,
              guildId: c,
              compact: s,
              animate: r,
              roleIcon: u,
              hideTimestamp: _
          })
        : void 0;
}
