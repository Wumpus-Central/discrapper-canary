n.d(t, { Z: () => l });
var r = n(54381),
    i = n(473749),
    a = n(901461),
    o = n(464891);
let s = i.memo(o.ZP);
function l(e) {
    let {
        message: t,
        channel: n,
        author: i,
        compact: o,
        animateAvatar: l,
        guildId: c,
        isGroupStart: u = !0,
        roleIcon: d,
        hideTimestamp: f,
        hideGuildTag: p,
        preview: _,
    } = e;
    return !(0, a.Z)(t) && (u || o)
        ? (0, r.jsx)(s, {
              message: t,
              channel: n,
              author: i,
              guildId: c,
              compact: o,
              animate: l,
              roleIcon: d,
              hideTimestamp: f,
              hideGuildTag: p,
              preview: _,
          })
        : void 0;
}
