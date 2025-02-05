n.d(t, { Z: () => N }), n(724458), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    d = n(410575),
    c = n(933557),
    u = n(471445),
    h = n(318374),
    _ = n(46145),
    p = n(814443),
    f = n(592125),
    g = n(430824),
    m = n(496675),
    v = n(699516),
    x = n(594174),
    E = n(979651),
    C = n(823379),
    Z = n(981631),
    S = n(388032),
    I = n(693215);
function y(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = (0, u.KS)(t),
        o = t.id === (null == n ? void 0 : n.id),
        a = o ? s.TVs.colors.TEXT_POSITIVE : s.TVs.colors.INTERACTIVE_NORMAL;
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
                children: (0, c.F6)(t, x.default, v.Z)
            })
        ]
    });
}
function b(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = t.getGuildId(),
        o = (0, a.e7)([g.Z], () => g.Z.getGuild(r), [r]),
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
function w(e) {
    let { channel: t } = e,
        n = (0, a.Wu)(
            [E.Z, x.default, p.Z],
            () =>
                Object.values(E.Z.getVoiceStatesForChannel(t.id))
                    .map((e) => x.default.getUser(e.userId))
                    .filter(C.lm)
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
              size: s.EFr.SIZE_20,
              overflowCountClassName: I.overflowCount,
              overflowCountVariant: 'text-xxs/semibold',
              disableUserPopout: !0
          });
}
function N(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: o } = e,
        l = (0, a.Wu)([v.Z, p.Z], () =>
            v.Z.getFriendIDs().sort((e, t) => {
                var n, i, r, o;
                return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (r = null === (n = p.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (o = null === (i = p.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
            })
        ),
        c = (0, a.Wu)(
            [x.default],
            () =>
                l.reduce((e, t) => {
                    let n = x.default.getUser(t);
                    return null != n && e.push(n), e;
                }, []),
            [l]
        ),
        u = (0, a.Wu)(
            [_.Z, E.Z, f.Z, m.Z],
            () => {
                let e = new Set(
                        _.Z.getChannelHistory().reduce((e, t) => {
                            let n = f.Z.getChannel(t);
                            return null != n && m.Z.can(Z.Plq.CONNECT, n) && e.length < 5 && e.push(t), e;
                        }, [])
                    ),
                    t = c
                        .map((e) => E.Z.getDiscoverableVoiceStateForUser(e.id))
                        .reduce((t, n) => {
                            let i = null == n ? void 0 : n.channelId;
                            if (null == i) return t;
                            let r = f.Z.getChannel(i);
                            return null != r && m.Z.can(Z.Plq.CONNECT, r) && !e.has(i) && t.size < 3 && t.add(i), t;
                        }, new Set());
                return [...Array.from(e), ...t].map((e) => f.Z.getChannel(e)).filter(C.lm);
            },
            [c]
        ),
        h = r.useCallback(
            (e) => {
                o(e), n();
            },
            [o, n]
        );
    return (0, i.jsx)(d.Z, {
        section: Z.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(s.v2r, {
            onSelect: n,
            navId: 'manage-streams',
            onClose: n,
            'aria-label': S.intl.string(S.t['+9QSnp']),
            children: (0, i.jsx)(s.kSQ, {
                children: u.map((e) =>
                    (0, i.jsx)(
                        s.sNh,
                        {
                            id: e.id,
                            label: (0, i.jsx)(y, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            subtext: (0, i.jsx)(b, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            icon: (0, i.jsx)('div', {
                                className: I.icon,
                                children: (0, i.jsx)(w, {
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
