n.d(t, {
    k: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(772848),
    a = n(442837),
    s = n(339085),
    o = n(231053),
    c = n(183023),
    d = n(650774),
    u = n(231338);
function m(e) {
    let { guild: t, discoverableGuild: n } = e,
        m = null == t ? void 0 : t.id,
        { memberCount: h, onlineCount: g } = (0, a.cj)(
            [d.Z],
            () => {
                var e, t;
                return {
                    memberCount: null !== (e = d.Z.getMemberCount(m)) && void 0 !== e ? e : 1234,
                    onlineCount: null !== (t = d.Z.getOnlineCount(m)) && void 0 !== t ? t : 1234
                };
            },
            [m]
        ),
        x = r.useRef((0, l.Z)()),
        p = r.useMemo(() => {
            if (null != n) return o.JO.createFromDiscoverableGuild(n);
            if (null == t) return null;
            let e = s.ZP.getGuildEmoji(t.id);
            return o.JO.createFromDiscoverableGuild({
                ...t,
                premiumSubscriptionCount: null == t ? void 0 : t.premiumSubscriberCount,
                emojis: e,
                emojiCount: e.length,
                presenceCount: g,
                memberCount: h
            });
        }, [n, t, h, g]),
        f = r.useMemo(() => {
            var e;
            let t = null == p ? void 0 : null === (e = p.emojis) || void 0 === e ? void 0 : e[0];
            return null != t
                ? {
                      name: t.require_colons ? ':'.concat(t.name, ':') : t.name,
                      emojiId: t.id,
                      animated: t.animated,
                      jumboable: !0
                  }
                : {};
        }, [null == p ? void 0 : p.emojis]);
    return null != p && p.isDiscoverable()
        ? (0, i.jsx)(c.UA, {
              sourceType: o.w6.GUILD,
              expressionSourceApplication: null,
              expressionSourceGuild: p,
              node: f,
              closePopout: u.dG,
              nonce: x.current,
              demoMode: !0
          })
        : null;
}
