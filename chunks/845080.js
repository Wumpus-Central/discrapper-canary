n.d(t, { Z: () => s });
var r = n(951288),
    i = n(647438),
    l = n(901461),
    o = n(464891);
let a = i.memo(o.ZP);
function s(e) {
    let {
        message: t,
        channel: n,
        author: i,
        compact: o,
        animateAvatar: s,
        guildId: c,
        isGroupStart: u = !0,
        roleIcon: d,
        hideTimestamp: p,
        hideGuildTag: m,
        preview: f,
    } = e;
    return !(0, l.Z)(t) && (u || o)
        ? (0, r.jsx)(a, {
              message: t,
              channel: n,
              author: i,
              guildId: c,
              compact: o,
              animate: s,
              roleIcon: d,
              hideTimestamp: p,
              hideGuildTag: m,
              preview: f,
          })
        : void 0;
}
