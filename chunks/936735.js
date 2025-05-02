n.d(t, { k: () => m });
var r = n(200651),
    i = n(192379),
    l = n(772848),
    s = n(442837),
    a = n(339085),
    o = n(231053),
    c = n(183023),
    u = n(650774),
    d = n(231338);
function m(e) {
    let { guild: t, discoverableGuild: n } = e,
        m = null == t ? void 0 : t.id,
        { memberCount: g, onlineCount: p } = (0, s.cj)(
            [u.Z],
            () => {
                var e, t;
                return {
                    memberCount: null != (e = u.Z.getMemberCount(m)) ? e : 1234,
                    onlineCount: null != (t = u.Z.getOnlineCount(m)) ? t : 1234
                };
            },
            [m]
        ),
        f = i.useRef((0, l.Z)()),
        h = i.useMemo(() => {
            var e, r;
            if (null != n) return o.JO.createFromDiscoverableGuild(n);
            if (null == t) return null;
            let i = a.ZP.getGuildEmoji(t.id);
            return o.JO.createFromDiscoverableGuild(
                ((e = (function (e) {
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
                })({}, t)),
                (r = r =
                    {
                        premiumSubscriptionCount: null == t ? void 0 : t.premiumSubscriberCount,
                        emojis: i,
                        emojiCount: i.length,
                        presenceCount: p,
                        memberCount: g
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      }),
                e)
            );
        }, [n, t, g, p]),
        x = i.useMemo(() => {
            var e;
            let t = null == h || null == (e = h.emojis) ? void 0 : e[0];
            return null != t
                ? {
                      name: t.require_colons ? ':'.concat(t.name, ':') : t.name,
                      emojiId: t.id,
                      animated: t.animated,
                      jumboable: !0
                  }
                : {};
        }, [null == h ? void 0 : h.emojis]);
    return null != h && h.isDiscoverable()
        ? (0, r.jsx)(c.UA, {
              sourceType: o.w6.GUILD,
              expressionSourceApplication: null,
              expressionSourceGuild: h,
              node: x,
              closePopout: d.dG,
              nonce: f.current,
              demoMode: !0
          })
        : null;
}
