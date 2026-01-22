n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(310953),
    s = n(173860),
    o = n(455234),
    c = n(152007),
    u = n(734057),
    d = n(222823),
    f = n(543465),
    p = n(531685);

function h(e) {
    let t = u.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? c.A.isMuted(t.id) : f.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, o.Y)(t)
    );
}

function b(e) {
    let t = u.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let r = f.Ay.isGuildCollapsed(n),
        l = f.Ay.isChannelMuted(n, t.id);
    return (!r || !l) && d.Ay.getMentionCount(e) > 0;
}
let g = l.forwardRef(function (e, t) {
    var n, l;
    let [o, ...c] = [e, t],
        { guildId: u, guildChannels: d, guildChannelsVersion: f } = o,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(o, ["guildId", "guildChannels", "guildChannelsVersion"]),
        [m] = c,
        A = (0, a.W)(
            u,
            d,
            f,
            {
                withVoiceChannels: !1,
            },
            {
                ignoreRecents: !0,
            },
        ),
        y = (0, i.bG)([p.A], () => p.A.isFocused());
    return (0, r.jsx)(
        s.A,
        ((n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                ref: m,
            },
            g,
        )),
        (l = l =
            {
                isUnread: h,
                isMentioned: b,
                items: A,
                animate: y,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(l)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
              }),
        n),
    );
});
