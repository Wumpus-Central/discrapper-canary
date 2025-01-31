n.d(t, { Z: () => k }), n(724458), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    s = n(481060),
    c = n(410575),
    d = n(933557),
    u = n(471445),
    h = n(318374),
    _ = n(46145),
    m = n(814443),
    g = n(592125),
    p = n(430824),
    f = n(496675),
    x = n(699516),
    v = n(594174),
    C = n(979651),
    b = n(823379),
    Z = n(981631),
    I = n(388032),
    j = n(693215);
function w(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = (0, u.KS)(t),
        o = t.id === (null == n ? void 0 : n.id),
        l = o ? s.TVs.colors.TEXT_POSITIVE : s.TVs.colors.INTERACTIVE_NORMAL;
    return (0, i.jsxs)('div', {
        className: j.channelNameContainer,
        children: [
            null != r
                ? (0, i.jsx)(r, {
                      color: l,
                      size: 'xs'
                  })
                : void 0,
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                className: a()(j.label, j.channelName),
                color: o ? 'text-positive' : 'text-normal',
                children: (0, d.F6)(t, v.default, x.Z)
            })
        ]
    });
}
function y(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = t.getGuildId(),
        o = (0, l.e7)([p.Z], () => p.Z.getGuild(r), [r]),
        a = t.id === (null == n ? void 0 : n.id);
    return null == o
        ? null
        : (0, i.jsx)('div', {
              className: j.channelMenuSubContainer,
              children: (0, i.jsx)(s.Text, {
                  variant: 'text-xs/normal',
                  color: a ? 'text-positive' : void 0,
                  children: o.name
              })
          });
}
function E(e) {
    let { channel: t } = e,
        n = (0, l.Wu)(
            [C.Z, v.default, m.Z],
            () =>
                Object.values(C.Z.getVoiceStatesForChannel(t.id))
                    .map((e) => v.default.getUser(e.userId))
                    .filter(b.lm)
                    .sort((e, t) => {
                        var n, i, r, o;
                        return (null !== (r = null === (n = m.Z.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (o = null === (i = m.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
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
              overflowCountClassName: j.overflowCount,
              overflowCountVariant: 'text-xxs/semibold',
              disableUserPopout: !0
          });
}
function k(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: o } = e,
        a = (0, l.Wu)([x.Z, m.Z], () =>
            x.Z.getFriendIDs().sort((e, t) => {
                var n, i, r, o;
                return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (r = null === (n = m.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (o = null === (i = m.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
            })
        ),
        d = (0, l.Wu)(
            [v.default],
            () =>
                a.reduce((e, t) => {
                    let n = v.default.getUser(t);
                    return null != n && e.push(n), e;
                }, []),
            [a]
        ),
        u = (0, l.Wu)(
            [_.Z, C.Z, g.Z, f.Z],
            () => {
                let e = new Set(
                        _.Z.getChannelHistory().reduce((e, t) => {
                            let n = g.Z.getChannel(t);
                            return null != n && f.Z.can(Z.Plq.CONNECT, n) && e.length < 5 && e.push(t), e;
                        }, [])
                    ),
                    t = d
                        .map((e) => C.Z.getDiscoverableVoiceStateForUser(e.id))
                        .reduce((t, n) => {
                            let i = null == n ? void 0 : n.channelId;
                            if (null == i) return t;
                            let r = g.Z.getChannel(i);
                            return null != r && f.Z.can(Z.Plq.CONNECT, r) && !e.has(i) && t.size < 3 && t.add(i), t;
                        }, new Set());
                return [...Array.from(e), ...t].map((e) => g.Z.getChannel(e)).filter(b.lm);
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
        section: Z.jXE.CONTEXT_MENU,
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
                            label: (0, i.jsx)(w, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            subtext: (0, i.jsx)(y, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            icon: (0, i.jsx)('div', {
                                className: j.icon,
                                children: (0, i.jsx)(E, {
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
