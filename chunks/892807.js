n.d(t, { Z: () => w }), n(724458), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(410575),
    c = n(933557),
    u = n(471445),
    h = n(318374),
    _ = n(46145),
    p = n(814443),
    g = n(592125),
    f = n(430824),
    m = n(496675),
    v = n(699516),
    x = n(594174),
    E = n(979651),
    Z = n(823379),
    C = n(981631),
    I = n(388032),
    S = n(693215);
function b(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        l = (0, u.KS)(t),
        r = t.id === (null == n ? void 0 : n.id),
        a = r ? s.TVs.colors.TEXT_POSITIVE : s.TVs.colors.INTERACTIVE_NORMAL;
    return (0, i.jsxs)('div', {
        className: S.channelNameContainer,
        children: [
            null != l
                ? (0, i.jsx)(l, {
                      color: a,
                      size: 'xs'
                  })
                : void 0,
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                className: o()(S.label, S.channelName),
                color: r ? 'text-positive' : 'text-normal',
                children: (0, c.F6)(t, x.default, v.Z)
            })
        ]
    });
}
function y(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        l = t.getGuildId(),
        r = (0, a.e7)([f.Z], () => f.Z.getGuild(l), [l]),
        o = t.id === (null == n ? void 0 : n.id);
    return null == r
        ? null
        : (0, i.jsx)('div', {
              className: S.channelMenuSubContainer,
              children: (0, i.jsx)(s.Text, {
                  variant: 'text-xs/normal',
                  color: o ? 'text-positive' : void 0,
                  children: r.name
              })
          });
}
function N(e) {
    let { channel: t } = e,
        n = (0, a.Wu)(
            [E.Z, x.default, p.Z],
            () =>
                Object.values(E.Z.getVoiceStatesForChannel(t.id))
                    .map((e) => x.default.getUser(e.userId))
                    .filter(Z.lm)
                    .sort((e, t) => {
                        var n, i, l, r;
                        return (null !== (l = null === (n = p.Z.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== l ? l : 0) - (null !== (r = null === (i = p.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== r ? r : 0);
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
              size: s.EFr.SIZE_20,
              overflowCountClassName: S.overflowCount,
              overflowCountVariant: 'text-xxs/semibold',
              disableUserPopout: !0
          });
}
function w(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: r } = e,
        o = (0, a.Wu)([v.Z, p.Z], () =>
            v.Z.getFriendIDs().sort((e, t) => {
                var n, i, l, r;
                return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (l = null === (n = p.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== l ? l : 0) - (null !== (r = null === (i = p.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== r ? r : 0);
            })
        ),
        c = (0, a.Wu)(
            [x.default],
            () =>
                o.reduce((e, t) => {
                    let n = x.default.getUser(t);
                    return null != n && e.push(n), e;
                }, []),
            [o]
        ),
        u = (0, a.Wu)(
            [_.Z, E.Z, g.Z, m.Z],
            () => {
                let e = new Set(
                        _.Z.getChannelHistory().reduce((e, t) => {
                            let n = g.Z.getChannel(t);
                            return null != n && m.Z.can(C.Plq.CONNECT, n) && e.length < 5 && e.push(t), e;
                        }, [])
                    ),
                    t = c
                        .map((e) => E.Z.getDiscoverableVoiceStateForUser(e.id))
                        .reduce((t, n) => {
                            let i = null == n ? void 0 : n.channelId;
                            if (null == i) return t;
                            let l = g.Z.getChannel(i);
                            return null != l && m.Z.can(C.Plq.CONNECT, l) && !e.has(i) && t.size < 3 && t.add(i), t;
                        }, new Set());
                return [...Array.from(e), ...t].map((e) => g.Z.getChannel(e)).filter(Z.lm);
            },
            [c]
        ),
        h = l.useCallback(
            (e) => {
                r(e), n();
            },
            [r, n]
        );
    return (0, i.jsx)(d.Z, {
        section: C.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(s.v2r, {
            onSelect: n,
            navId: 'manage-streams',
            onClose: n,
            'aria-label': I.intl.string(I.t['+9QSnp']),
            children: (0, i.jsx)(s.kSQ, {
                children: u.map((e) =>
                    (0, i.jsx)(
                        s.sNh,
                        {
                            id: e.id,
                            label: (0, i.jsx)(b, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            subtext: (0, i.jsx)(y, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            icon: (0, i.jsx)('div', {
                                className: S.icon,
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
