n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(410575),
    d = n(933557),
    u = n(471445),
    h = n(318374),
    m = n(46145),
    p = n(814443),
    x = n(592125),
    f = n(430824),
    v = n(496675),
    g = n(699516),
    C = n(594174),
    Z = n(979651),
    _ = n(823379),
    b = n(981631),
    j = n(388032),
    I = n(693215);
function E(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = (0, u.KS)(t),
        o = t.id === (null == n ? void 0 : n.id),
        a = o ? s.tokens.colors.TEXT_POSITIVE : s.tokens.colors.INTERACTIVE_NORMAL;
    return (0, i.jsxs)('div', {
        className: I.channelNameContainer,
        children: [
            null != r
                ? (0, i.jsx)(r, {
                      color: a,
                      size: 'xs'
                  })
                : void 0,
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                className: l()(I.label, I.channelName),
                color: o ? 'text-positive' : 'text-normal',
                children: (0, d.F6)(t, C.default, g.Z)
            })
        ]
    });
}
function k(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = t.getGuildId(),
        o = (0, a.e7)([f.Z], () => f.Z.getGuild(r), [r]),
        l = t.id === (null == n ? void 0 : n.id);
    return null == o
        ? null
        : (0, i.jsx)('div', {
              className: I.channelMenuSubContainer,
              children: (0, i.jsx)(s.Text, {
                  variant: 'text-xs/normal',
                  color: l ? 'text-positive' : void 0,
                  children: o.name
              })
          });
}
function N(e) {
    let { channel: t } = e,
        n = (0, a.Wu)(
            [Z.Z, C.default, p.Z],
            () =>
                Object.values(Z.Z.getVoiceStatesForChannel(t.id))
                    .map((e) => C.default.getUser(e.userId))
                    .filter(_.lm)
                    .sort((e, t) => {
                        var n, i, r, o;
                        return (null !== (r = null === (n = p.Z.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (o = null === (i = p.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
                    }),
            [t.id]
        ),
        r = t.getGuildId();
    return null == r
        ? null
        : (0, i.jsx)(h.Z, {
              users: n,
              guildId: r,
              maxUsers: 3,
              size: s.AvatarSizes.SIZE_20,
              overflowCountClassName: I.overflowCount,
              overflowCountVariant: 'text-xxs/semibold',
              disableUserPopout: !0
          });
}
function w(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: o } = e,
        l = (0, a.Wu)([g.Z, p.Z], () =>
            g.Z.getFriendIDs().sort((e, t) => {
                var n, i, r, o;
                return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (r = null === (n = p.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (o = null === (i = p.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
            })
        ),
        d = (0, a.Wu)(
            [C.default],
            () =>
                l.reduce((e, t) => {
                    let n = C.default.getUser(t);
                    return null != n && e.push(n), e;
                }, []),
            [l]
        ),
        u = (0, a.Wu)(
            [m.Z, Z.Z, x.Z, v.Z],
            () => {
                let e = new Set(
                        m.Z.getChannelHistory().reduce((e, t) => {
                            let n = x.Z.getChannel(t);
                            return null != n && v.Z.can(b.Plq.CONNECT, n) && e.length < 5 && e.push(t), e;
                        }, [])
                    ),
                    t = d
                        .map((e) => Z.Z.getDiscoverableVoiceStateForUser(e.id))
                        .reduce((t, n) => {
                            let i = null == n ? void 0 : n.channelId;
                            if (null == i) return t;
                            let r = x.Z.getChannel(i);
                            return null != r && v.Z.can(b.Plq.CONNECT, r) && !e.has(i) && t.size < 3 && t.add(i), t;
                        }, new Set());
                return [...Array.from(e), ...t].map((e) => x.Z.getChannel(e)).filter(_.lm);
            },
            [d]
        ),
        h = r.useCallback(
            (e) => {
                o(e), n();
            },
            [o, n]
        );
    return (0, i.jsx)(c.Z, {
        section: b.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(s.Menu, {
            onSelect: n,
            navId: 'manage-streams',
            onClose: n,
            'aria-label': j.intl.string(j.t['+9QSnp']),
            children: (0, i.jsx)(s.MenuGroup, {
                children: u.map((e) =>
                    (0, i.jsx)(
                        s.MenuItem,
                        {
                            id: e.id,
                            label: (0, i.jsx)(E, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            subtext: (0, i.jsx)(k, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            icon: (0, i.jsx)('div', {
                                className: I.icon,
                                children: (0, i.jsx)(N, {
                                    channel: e,
                                    currentVoiceChannel: t
                                })
                            }),
                            subtextLineClamp: 1,
                            action: () => h(e)
                        },
                        e.id
                    )
                )
            })
        })
    });
}
