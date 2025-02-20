n.d(t, { Z: () => w }), n(230036), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(410575),
    u = n(933557),
    d = n(471445),
    p = n(318374),
    f = n(46145),
    h = n(814443),
    g = n(592125),
    _ = n(430824),
    m = n(496675),
    v = n(699516),
    O = n(594174),
    b = n(979651),
    y = n(823379),
    E = n(981631),
    x = n(388032),
    I = n(769254);
function S(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = (0, d.KS)(t),
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
                children: (0, u.F6)(t, O.default, v.Z)
            })
        ]
    });
}
function C(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = t.getGuildId(),
        o = (0, a.e7)([_.Z], () => _.Z.getGuild(r), [r]),
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
function j(e) {
    let { channel: t } = e,
        n = (0, a.Wu)(
            [b.Z, O.default, h.Z],
            () =>
                Object.values(b.Z.getVoiceStatesForChannel(t.id))
                    .map((e) => O.default.getUser(e.userId))
                    .filter(y.lm)
                    .sort((e, t) => {
                        var n, i, r, o;
                        return (null !== (r = null === (n = h.Z.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (o = null === (i = h.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
                    }),
            [t.id]
        ),
        r = t.getGuildId();
    return null == r
        ? null
        : (0, i.jsx)(p.Z, {
              users: n,
              guildId: r,
              maxUsers: 3,
              size: s.EFr.SIZE_20,
              overflowCountClassName: I.overflowCount,
              overflowCountVariant: 'text-xxs/semibold',
              disableUserPopout: !0
          });
}
function w(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: o } = e,
        l = (0, a.Wu)([v.Z, h.Z], () =>
            v.Z.getFriendIDs().sort((e, t) => {
                var n, i, r, o;
                return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (r = null === (n = h.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (o = null === (i = h.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
            })
        ),
        u = (0, a.Wu)(
            [O.default],
            () =>
                l.reduce((e, t) => {
                    let n = O.default.getUser(t);
                    return null != n && e.push(n), e;
                }, []),
            [l]
        ),
        d = (0, a.Wu)(
            [f.Z, b.Z, g.Z, m.Z],
            () => {
                let e = new Set(
                        f.Z.getChannelHistory().reduce((e, t) => {
                            let n = g.Z.getChannel(t);
                            return null != n && m.Z.can(E.Plq.CONNECT, n) && e.length < 5 && e.push(t), e;
                        }, [])
                    ),
                    t = u
                        .map((e) => b.Z.getDiscoverableVoiceStateForUser(e.id))
                        .reduce((t, n) => {
                            let i = null == n ? void 0 : n.channelId;
                            if (null == i) return t;
                            let r = g.Z.getChannel(i);
                            return null != r && m.Z.can(E.Plq.CONNECT, r) && !e.has(i) && t.size < 3 && t.add(i), t;
                        }, new Set());
                return [...Array.from(e), ...t].map((e) => g.Z.getChannel(e)).filter(y.lm);
            },
            [u]
        ),
        p = r.useCallback(
            (e) => {
                o(e), n();
            },
            [o, n]
        );
    return (0, i.jsx)(c.Z, {
        section: E.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(s.v2r, {
            onSelect: n,
            navId: 'manage-streams',
            onClose: n,
            'aria-label': x.NW.string(x.t['+9QSnp']),
            children: (0, i.jsx)(s.kSQ, {
                children: d.map((e) =>
                    (0, i.jsx)(
                        s.sNh,
                        {
                            id: e.id,
                            label: (0, i.jsx)(S, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            subtext: (0, i.jsx)(C, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            icon: (0, i.jsx)('div', {
                                className: I.icon,
                                children: (0, i.jsx)(j, {
                                    channel: e,
                                    currentVoiceChannel: t
                                })
                            }),
                            subtextLineClamp: 1,
                            action: () => p(e)
                        },
                        e.id
                    )
                )
            })
        })
    });
}
