n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(358230),
    a = n(18998),
    s = n(220444),
    c = n(569471),
    u = n(592125),
    d = n(306680),
    p = n(9156),
    h = n(451478);
function f(e) {
    let t = u.Z.getChannel(e);
    return null != t && null != t.getGuildId() && !(t.isThread() ? c.Z.isMuted(t.id) : p.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, s.d)(t);
}
function g(e) {
    let t = u.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let r = p.ZP.isGuildCollapsed(n),
        i = p.ZP.isChannelMuted(n, t.id);
    return (!r || !i) && d.ZP.getMentionCount(e) > 0;
}
let m = i.forwardRef(function (e, t) {
    var n,
        i,
        { guildId: s, guildChannels: c, guildChannelsVersion: u } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['guildId', 'guildChannels', 'guildChannelsVersion']);
    let p = (0, o.T)(s, c, u, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        m = (0, l.e7)([h.Z], () => h.Z.isFocused());
    return (0, r.jsx)(
        a.Z,
        ((n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({ ref: t }, d)),
        (i = i =
            {
                isUnread: f,
                isMentioned: g,
                items: p,
                animate: m
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(i)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
              }),
        n)
    );
});
