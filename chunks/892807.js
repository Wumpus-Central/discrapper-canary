n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(410575),
    u = n(933557),
    d = n(471445),
    h = n(318374),
    f = n(46145),
    p = n(814443),
    m = n(592125),
    v = n(430824),
    x = n(496675),
    g = n(699516),
    C = n(594174),
    Z = n(979651),
    _ = n(823379),
    I = n(981631),
    j = n(388032),
    E = n(843307);
function b(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        l = (0, d.KS)(t),
        o = t.id === (null == n ? void 0 : n.id),
        a = o ? s.tokens.colors.TEXT_POSITIVE : s.tokens.colors.INTERACTIVE_NORMAL;
    return (0, i.jsxs)('div', {
        className: E.channelNameContainer,
        children: [
            null != l
                ? (0, i.jsx)(l, {
                      color: a,
                      size: 'xs'
                  })
                : void 0,
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                className: r()(E.label, E.channelName),
                color: o ? 'text-positive' : 'text-normal',
                children: (0, u.F6)(t, C.default, g.Z)
            })
        ]
    });
}
function w(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        l = t.getGuildId(),
        o = (0, a.e7)([v.Z], () => v.Z.getGuild(l), [l]),
        r = t.id === (null == n ? void 0 : n.id);
    return null == o
        ? null
        : (0, i.jsx)('div', {
              className: E.channelMenuSubContainer,
              children: (0, i.jsx)(s.Text, {
                  variant: 'text-xs/normal',
                  color: r ? 'text-positive' : void 0,
                  children: o.name
              })
          });
}
function k(e) {
    let { channel: t } = e,
        n = (0, a.Wu)(
            [Z.Z, C.default, p.Z],
            () =>
                Object.values(Z.Z.getVoiceStatesForChannel(t.id))
                    .map((e) => C.default.getUser(e.userId))
                    .filter(_.lm)
                    .sort((e, t) => {
                        var n, i, l, o;
                        return (null !== (l = null === (n = p.Z.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== l ? l : 0) - (null !== (o = null === (i = p.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
                    }),
            [t.id]
        ),
        l = t.getGuildId();
    return null == l
        ? null
        : (0, i.jsx)(h.Z, {
              users: n,
              guildId: l,
              maxUsers: 3,
              size: s.AvatarSizes.SIZE_20,
              overflowCountClassName: E.overflowCount,
              overflowCountVariant: 'text-xxs/semibold',
              disableUserPopout: !0
          });
}
function N(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: o } = e,
        r = (0, a.Wu)([g.Z, p.Z], () =>
            g.Z.getFriendIDs().sort((e, t) => {
                var n, i, l, o;
                return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (l = null === (n = p.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== l ? l : 0) - (null !== (o = null === (i = p.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
            })
        ),
        u = (0, a.Wu)(
            [C.default],
            () =>
                r.reduce((e, t) => {
                    let n = C.default.getUser(t);
                    return null != n && e.push(n), e;
                }, []),
            [r]
        ),
        d = (0, a.Wu)(
            [f.Z, Z.Z, m.Z, x.Z],
            () => {
                let e = new Set(
                        f.Z.getChannelHistory().reduce((e, t) => {
                            let n = m.Z.getChannel(t);
                            return null != n && x.Z.can(I.Plq.CONNECT, n) && e.length < 5 && e.push(t), e;
                        }, [])
                    ),
                    t = u
                        .map((e) => Z.Z.getDiscoverableVoiceStateForUser(e.id))
                        .reduce((t, n) => {
                            let i = null == n ? void 0 : n.channelId;
                            if (null == i) return t;
                            let l = m.Z.getChannel(i);
                            return null != l && x.Z.can(I.Plq.CONNECT, l) && !e.has(i) && t.size < 3 && t.add(i), t;
                        }, new Set());
                return [...Array.from(e), ...t].map((e) => m.Z.getChannel(e)).filter(_.lm);
            },
            [u]
        ),
        h = l.useCallback(
            (e) => {
                o(e), n();
            },
            [o, n]
        );
    return (0, i.jsx)(c.Z, {
        section: I.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(s.Menu, {
            onSelect: n,
            navId: 'manage-streams',
            onClose: n,
            'aria-label': j.intl.string(j.t['+9QSnp']),
            children: (0, i.jsx)(s.MenuGroup, {
                children: d.map((e) =>
                    (0, i.jsx)(
                        s.MenuItem,
                        {
                            id: e.id,
                            label: (0, i.jsx)(b, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            subtext: (0, i.jsx)(w, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            icon: (0, i.jsx)('div', {
                                className: E.icon,
                                children: (0, i.jsx)(k, {
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
