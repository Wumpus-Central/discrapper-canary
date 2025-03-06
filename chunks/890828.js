n.d(t, { Z: () => U }), n(13667), n(390547), n(47120), n(566702), n(230036), n(653041), n(86693), n(536091);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    u = n(933557),
    c = n(471445),
    d = n(114487),
    p = n(686546),
    h = n(318374),
    f = n(473403),
    m = n(99214),
    g = n(46145),
    O = n(886118),
    v = n(301801),
    y = n(814443),
    E = n(752048),
    b = n(592125),
    j = n(984933),
    x = n(430824),
    S = n(496675),
    I = n(699516),
    C = n(594174),
    N = n(979651),
    Z = n(823379),
    w = n(136015),
    P = n(981631),
    _ = n(388032),
    T = n(321021);
let D = (e) => {
        let { channel: t, voiceStates: n } = e;
        return [t.name, ...n.flatMap((e) => k(e))];
    },
    k = (e) => [
        e.userId,
        ...(function (e) {
            let t = C.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                i = (0, m.e3)(t);
            return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(Z.lm)));
        })(e)
    ],
    A = {
        searchType: O.S.FUZZY,
        sortType: O.E.JARO_WINKLER
    },
    L = {
        searchType: O.S.JARO_WINKLER,
        sortType: O.E.JARO_WINKLER,
        jaroWinklerSearchThreshold: 0.7
    },
    R = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [l] = (0, a.e7)([N.Z], () => [N.Z.getVoiceStatesForChannel(t.id), N.Z.getVoiceStateVersion()], [t.id], w.Q),
            [o, u] = r.useState([]),
            c = (0, v.c)(k, u, L);
        r.useEffect(() => {
            '' !== n.trim() && c(n, Object.values(l));
        }, [n, c, l]);
        let d = (0, a.Wu)(
                [N.Z, C.default, E.Z, I.Z],
                () =>
                    Object.values(N.Z.getVoiceStatesForChannel(t.id))
                        .map((e) => C.default.getUser(e.userId))
                        .filter(Z.lm)
                        .sort((e, t) => {
                            var i, r, l, a;
                            if (o.length > 0 && '' !== n.trim()) {
                                if (o.some((t) => t.userId === e.id)) return -1;
                                if (o.some((e) => e.userId === t.id)) return 1;
                            }
                            return I.Z.isFriend(e.id) && !I.Z.isFriend(t.id) ? -1 : !I.Z.isFriend(e.id) && I.Z.isFriend(t.id) ? 1 : (null !== (l = null === (i = E.Z.getUserAffinity(t.id)) || void 0 === i ? void 0 : i.vcProbability) && void 0 !== l ? l : 0) - (null !== (a = null === (r = E.Z.getUserAffinity(e.id)) || void 0 === r ? void 0 : r.vcProbability) && void 0 !== a ? a : 0);
                        }),
                [t.id, o, n]
            ),
            p = t.getGuildId();
        return null == p
            ? null
            : (0, i.jsx)(h.Z, {
                  users: d,
                  guildId: p,
                  maxUsers: Math.max(o.length, 3),
                  size: s.EFr.SIZE_24,
                  overflowCountClassName: T.overflowCount,
                  overflowCountVariant: 'text-xs/semibold',
                  disableUserPopout: !0
              });
    }),
    M = r.memo(function (e) {
        var t;
        let { channel: n } = e,
            r = n.getGuildId(),
            l = (0, a.e7)([x.Z], () => x.Z.getGuild(r), [r]);
        if (null == l)
            switch (n.type) {
                case P.d4z.DM:
                    return (0, i.jsx)(f.je, {
                        channel: n,
                        size: s.EFr.SIZE_24
                    });
                case P.d4z.GROUP_DM:
                    return (0, i.jsx)(f.ge, {
                        channel: n,
                        size: s.EFr.SIZE_24
                    });
                default:
                    return null;
            }
        return (0, i.jsx)(p.ZP, {
            mask: p.QS.CLAN_ICON,
            width: 28,
            height: 28,
            children: (0, i.jsx)('div', {
                className: T.guildIconWrapper,
                children: (0, i.jsx)(d.b, {
                    guildId: l.id,
                    guildName: null !== (t = l.name) && void 0 !== t ? t : _.NW.string(_.t.DmIUGB),
                    guildIcon: l.icon,
                    iconSize: 28
                })
            })
        });
    }),
    W = r.memo(function (e) {
        var t;
        let { channelId: n, isHighlighted: r, currentVoiceChannel: l, onClick: d, onMouseOver: p, onMouseLeave: h, query: f } = e,
            m = (0, a.e7)([b.Z], () => b.Z.getChannel(n), [n]),
            g = null == m ? void 0 : m.getGuildId(),
            O = (0, a.e7)([x.Z], () => x.Z.getGuild(g), [g]),
            v = (0, c.KS)(m, O),
            y = r ? 'interactive-normal' : 'text-normal',
            E = r ? s.TVs.colors.INTERACTIVE_ACTIVE : s.TVs.colors.TEXT_MUTED,
            j = (null == l ? void 0 : l.id) === n;
        return null == m
            ? null
            : (0, i.jsxs)(s.kL8, {
                  className: o()(T.channelItemContainer, r && T.channelItemHighlighted, j && T.channelItemConnected),
                  'aria-label': m.name,
                  onClick: () => d(n),
                  onMouseOver: () => p(n),
                  onMouseLeave: () => h(n),
                  children: [
                      (0, i.jsx)('div', {
                          className: T.channelItemIcon,
                          children: (0, i.jsx)(M, { channel: m })
                      }),
                      (0, i.jsxs)('div', {
                          className: T.channelItemNameContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: T.channelItemName,
                                  children: [
                                      null != v
                                          ? (0, i.jsx)(v, {
                                                color: E,
                                                size: 'xs',
                                                className: T.channelIcon
                                            })
                                          : void 0,
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          color: y,
                                          className: T.channelItemNameText,
                                          children: (0, u.F6)(m, C.default, I.Z)
                                      })
                                  ]
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  color: y,
                                  children: null !== (t = null == O ? void 0 : O.name) && void 0 !== t ? t : m.name
                              })
                          ]
                      }),
                      (0, i.jsx)('div', {
                          className: T.channelItemAvatars,
                          children: (0, i.jsx)(R, {
                              channel: m,
                              currentVoiceChannel: l,
                              query: f
                          })
                      })
                  ]
              });
    });
function V() {
    return (0, i.jsx)('div', {
        className: T.emptyChannelItem,
        children: (0, i.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-primary',
            children: _.NW.string(_.t.nxSS09)
        })
    });
}
let z = r.memo(function (e) {
    let { channelIds: t, currentVoiceChannel: n, onSelect: l, hasQuery: o, query: a } = e,
        [u, c] = r.useState(null),
        d = (e) => {
            c(e);
        },
        p = () => {
            c(null);
        },
        h = (e) => () => {
            l(e);
        };
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)(s.zJl, {
            className: T.channelList,
            children: [
                o && 0 === t.length && (0, i.jsx)(V, {}),
                t.map((e) =>
                    (0, i.jsx)(
                        W,
                        {
                            channelId: e,
                            isHighlighted: e === u,
                            currentVoiceChannel: n,
                            onClick: h(e),
                            onMouseOver: d,
                            onMouseLeave: p,
                            query: a
                        },
                        e
                    )
                )
            ]
        })
    });
});
function U(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: l } = e,
        o = (function () {
            let e = (0, a.Wu)(
                    [g.Z, b.Z, S.Z],
                    () =>
                        Array.from(
                            new Set(
                                g.Z.getChannelHistory().reduce((e, t) => {
                                    let n = b.Z.getChannel(t);
                                    return null != n && S.Z.can(P.Plq.CONNECT, n) && e.push(t), e;
                                }, [])
                            )
                        ),
                    []
                ),
                t = (function () {
                    let e = (0, a.Wu)(
                        [C.default, I.Z, y.Z],
                        () =>
                            I.Z.getFriendIDs()
                                .sort((e, t) => {
                                    var n, i, r, l;
                                    return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (r = null === (n = y.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (l = null === (i = y.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== l ? l : 0);
                                })
                                .reduce((e, t) => {
                                    let n = C.default.getUser(t);
                                    return null != n && e.push(n), e;
                                }, []),
                        []
                    );
                    return (0, a.Wu)(
                        [N.Z, b.Z, S.Z],
                        () =>
                            Array.from(
                                e
                                    .map((e) => N.Z.getDiscoverableVoiceStateForUser(e.id))
                                    .reduce((e, t) => {
                                        let n = null == t ? void 0 : t.channelId;
                                        if (null == n) return e;
                                        let i = b.Z.getChannel(n);
                                        return null != i && S.Z.can(P.Plq.CONNECT, i) && e.add(n), e;
                                    }, new Set())
                            ).filter(Z.lm),
                        [e]
                    );
                })();
            return Array.from(new Set([...e.slice(0, 5), ...t]));
        })(),
        u = (0, a.Wu)(
            [x.Z, j.ZP, N.Z, I.Z, S.Z],
            () =>
                Object.values(x.Z.getGuilds())
                    .reduce(
                        (e, t) => [
                            ...e,
                            ...j.ZP.getChannels(t.id)
                                [j.Zb].filter((e) => S.Z.can(P.Plq.VIEW_CHANNEL, e.channel) && S.Z.can(P.Plq.CONNECT, e.channel))
                                .map((e) => {
                                    let { channel: t } = e;
                                    return t;
                                })
                        ],
                        []
                    )
                    .map((e) => ({
                        channel: e,
                        voiceStates: Object.values(N.Z.getVoiceStatesForChannel(e.id)).filter((e) => I.Z.isFriend(e.userId))
                    })),
            []
        ),
        [c, d] = r.useState(''),
        [p, h] = r.useState([]),
        f = (0, v.c)(D, h, A),
        m = r.useCallback(
            (e) => {
                l(e), n();
            },
            [l, n]
        );
    r.useEffect(() => {
        '' !== c.trim() && f(c, u);
    }, [c, f, u]);
    let O = '' !== c.trim();
    return (0, i.jsxs)('div', {
        className: T.recentChannelsMenu,
        children: [
            (0, i.jsx)('div', {
                className: T.searchBarContainer,
                children: (0, i.jsx)(s.E1j, {
                    autoFocus: !0,
                    query: c,
                    size: s.E1j.Sizes.MEDIUM,
                    placeholder: _.NW.string(_.t.UyA6SU),
                    onClear: () => {
                        d('');
                    },
                    onKeyDown: (e) => {
                        'Escape' === e.key && n();
                    },
                    onChange: (e) => {
                        d(e);
                    },
                    className: T.searchBar,
                    inputProps: { 'aria-label': _.NW.string(_.t.UyA6SU) }
                })
            }),
            (0, i.jsx)('div', {
                className: T.recentChannelsMenuHeader,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-sm/semibold',
                    color: 'text-normal',
                    children: _.NW.string(_.t.MxKRFx)
                })
            }),
            (0, i.jsx)(z, {
                channelIds: O
                    ? p
                          .map((e) => {
                              let { channel: t } = e;
                              return t.id;
                          })
                          .slice(0, 20)
                    : o.slice(0, 20),
                hasQuery: O,
                query: c,
                currentVoiceChannel: t,
                onSelect: m
            })
        ]
    });
}
