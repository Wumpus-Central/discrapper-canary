n.d(t, { Z: () => U }), n(13667), n(390547), n(47120), n(230036), n(566702), n(653041), n(86693), n(536091);
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
    I = n(496675),
    S = n(699516),
    N = n(594174),
    C = n(979651),
    Z = n(823379),
    w = n(136015),
    P = n(981631),
    _ = n(388032),
    T = n(321021);
let D = (e) => [
        e.userId,
        ...(function (e) {
            let t = N.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                i = (0, m.e3)(t);
            return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(Z.lm)));
        })(e)
    ],
    k = {
        searchType: O.S.FUZZY,
        sortType: O.E.JARO_WINKLER,
        searchStringGenerator: (e) => {
            var t, n;
            let { channel: i, voiceStates: r } = e;
            return [i.name, i.id, i.guild_id, null !== (n = null === (t = x.Z.getGuild(i.guild_id)) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : '', ...r.flatMap((e) => D(e))].filter(Z.lm);
        }
    },
    A = {
        searchType: O.S.FUZZY,
        sortType: O.E.JARO_WINKLER,
        jaroWinklerSearchThreshold: 0.7,
        searchStringGenerator: D
    },
    L = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [l] = (0, a.e7)([C.Z], () => [C.Z.getVoiceStatesForChannel(t.id), C.Z.getVoiceStateVersion()], [t.id], w.Q),
            [o, u] = r.useState([]);
        (0, v.BO)(n, Object.values(l), u, A);
        let c = (0, a.Wu)(
                [C.Z, N.default, E.Z, S.Z],
                () =>
                    Object.values(C.Z.getVoiceStatesForChannel(t.id))
                        .map((e) => N.default.getUser(e.userId))
                        .filter(Z.lm)
                        .sort((e, t) => {
                            var i, r, l, a;
                            if (o.length > 0 && '' !== n.trim()) {
                                if (o.some((t) => t.userId === e.id)) return -1;
                                if (o.some((e) => e.userId === t.id)) return 1;
                            }
                            return S.Z.isFriend(e.id) && !S.Z.isFriend(t.id) ? -1 : !S.Z.isFriend(e.id) && S.Z.isFriend(t.id) ? 1 : (null !== (l = null === (i = E.Z.getUserAffinity(t.id)) || void 0 === i ? void 0 : i.vcProbability) && void 0 !== l ? l : 0) - (null !== (a = null === (r = E.Z.getUserAffinity(e.id)) || void 0 === r ? void 0 : r.vcProbability) && void 0 !== a ? a : 0);
                        }),
                [t.id, o, n]
            ),
            d = t.getGuildId();
        return null == d
            ? null
            : (0, i.jsx)(h.Z, {
                  users: c,
                  guildId: d,
                  maxUsers: Math.max(o.length, 3),
                  size: s.EFr.SIZE_24,
                  overflowCountClassName: T.overflowCount,
                  overflowCountVariant: 'text-xs/semibold',
                  disableUserPopout: !0
              });
    }),
    R = r.memo(function (e) {
        var t;
        let { channel: n } = e,
            r = n.getGuildId(),
            l = (0, a.e7)([x.Z], () => x.Z.getGuild(r), [r]);
        if (null == l)
            switch (n.type) {
                case P.d4z.DM:
                    return (0, i.jsx)(f.je, {
                        channel: n,
                        size: s.EFr.SIZE_32
                    });
                case P.d4z.GROUP_DM:
                    return (0, i.jsx)(f.ge, {
                        channel: n,
                        size: s.EFr.SIZE_32
                    });
                default:
                    return null;
            }
        return (0, i.jsx)(p.ZP, {
            mask: p.QS.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, i.jsx)('div', {
                className: T.guildIconWrapper,
                children: (0, i.jsx)(d.b, {
                    guildId: l.id,
                    guildName: null !== (t = l.name) && void 0 !== t ? t : _.NW.string(_.t.DmIUGB),
                    guildIcon: l.icon,
                    iconSize: 32
                })
            })
        });
    }),
    M = r.memo(function (e) {
        var t;
        let { channelId: n, isHighlighted: r, currentVoiceChannel: l, onClick: d, onMouseOver: p, onMouseLeave: h, query: f } = e,
            m = (0, a.e7)([b.Z], () => b.Z.getChannel(n), [n]),
            g = null == m ? void 0 : m.getGuildId(),
            O = (0, a.e7)([x.Z], () => x.Z.getGuild(g), [g]),
            v = (0, c.KS)(m, O),
            y = r ? 'interactive-active' : 'text-muted',
            E = r ? s.TVs.colors.INTERACTIVE_ACTIVE : s.TVs.colors.ICON_MUTED,
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
                          children: (0, i.jsx)(R, { channel: m })
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
                                          children: (0, u.F6)(m, N.default, S.Z)
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
                          children: (0, i.jsx)(L, {
                              channel: m,
                              currentVoiceChannel: l,
                              query: f
                          })
                      })
                  ]
              });
    }),
    W = r.memo(function (e) {
        let { emptyText: t } = e;
        return (0, i.jsx)('div', {
            className: T.emptyChannelItem,
            children: (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-primary',
                children: t
            })
        });
    }),
    V = r.memo(function (e) {
        let { sectionHeader: t, channelIds: n, currentVoiceChannel: l, onSelect: o, hasQuery: a, query: u, scrollable: c = !0 } = e,
            [d, p] = r.useState(null),
            h = (e) => {
                p(e);
            },
            f = () => {
                p(null);
            },
            m = (e) => () => {
                o(e);
            },
            g = c ? s.zJl : 'div';
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)('div', {
                    className: T.recentChannelsMenuHeader,
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-muted',
                        children: t
                    })
                }),
                (0, i.jsxs)(g, {
                    className: T.channelList,
                    children: [
                        a && 0 === n.length && (0, i.jsx)(W, { emptyText: _.NW.string(_.t.nxSS09) }),
                        n.map((e) =>
                            (0, i.jsx)(
                                M,
                                {
                                    channelId: e,
                                    isHighlighted: e === d,
                                    currentVoiceChannel: l,
                                    onClick: m(e),
                                    onMouseOver: h,
                                    onMouseLeave: f,
                                    query: u
                                },
                                e
                            )
                        )
                    ]
                })
            ]
        });
    });
function z(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: r } = e,
        { recentVoiceChannelIds: l, friendVoiceChannelIds: u } = (function () {
            let e = (function () {
                    let e = (0, a.Wu)(
                        [N.default, S.Z, y.Z],
                        () =>
                            S.Z.getFriendIDs()
                                .sort((e, t) => {
                                    var n, i, r, l;
                                    return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (r = null === (n = y.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (l = null === (i = y.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== l ? l : 0);
                                })
                                .reduce((e, t) => {
                                    let n = N.default.getUser(t);
                                    return null != n && e.push(n), e;
                                }, []),
                        []
                    );
                    return (0, a.Wu)(
                        [C.Z, b.Z, I.Z],
                        () =>
                            Array.from(
                                e
                                    .map((e) => C.Z.getDiscoverableVoiceStateForUser(e.id))
                                    .reduce((e, t) => {
                                        let n = null == t ? void 0 : t.channelId;
                                        if (null == n) return e;
                                        let i = b.Z.getChannel(n);
                                        return null != i && I.Z.can(P.Plq.CONNECT, i) && e.add(n), e;
                                    }, new Set())
                            ).filter(Z.lm),
                        [e]
                    );
                })(),
                t = (0, a.Wu)(
                    [g.Z, b.Z, I.Z],
                    () => {
                        let t = g.Z.getChannelHistory(),
                            n = new Set(e);
                        return Array.from(
                            new Set(
                                t.reduce((e, t) => {
                                    let i = b.Z.getChannel(t);
                                    return null != i && I.Z.can(P.Plq.CONNECT, i) && !n.has(t) && e.push(t), e;
                                }, [])
                            )
                        );
                    },
                    [e]
                );
            return {
                friendVoiceChannelIds: e,
                recentVoiceChannelIds: t
            };
        })();
    return l.length > 0 || u.length > 0
        ? (0, i.jsxs)(s.zJl, {
              className: o()(T.channelList, T.channelListWrapper),
              children: [
                  l.length > 0 &&
                      (0, i.jsx)(V, {
                          sectionHeader: _.NW.string(_.t.lnk2NT),
                          channelIds: l.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: r,
                          scrollable: !1
                      }),
                  u.length > 0 &&
                      (0, i.jsx)(V, {
                          sectionHeader: _.NW.string(_.t['0lvb9P']),
                          channelIds: u.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: r,
                          scrollable: !1
                      })
              ]
          })
        : (0, i.jsx)(W, { emptyText: _.NW.string(_.t['3ET7Aw']) });
}
function U(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: l } = e,
        o = (0, a.Wu)(
            [x.Z, j.ZP, C.Z, S.Z, I.Z],
            () =>
                Object.values(x.Z.getGuilds())
                    .reduce(
                        (e, t) => [
                            ...e,
                            ...j.ZP.getChannels(t.id)
                                [j.Zb].filter((e) => I.Z.can(P.Plq.VIEW_CHANNEL, e.channel) && I.Z.can(P.Plq.CONNECT, e.channel))
                                .map((e) => {
                                    let { channel: t } = e;
                                    return t;
                                })
                        ],
                        []
                    )
                    .map((e) => ({
                        channel: e,
                        voiceStates: Object.values(C.Z.getVoiceStatesForChannel(e.id)).filter((e) => S.Z.isFriend(e.userId))
                    })),
            []
        ),
        [u, c] = r.useState(''),
        [d, p] = r.useState([]);
    (0, v.BO)(u, o, p, k);
    let h = r.useCallback(
            (e) => {
                'Escape' === e.key && n();
            },
            [n]
        ),
        f = r.useCallback(
            (e) => {
                l(e), n();
            },
            [l, n]
        );
    r.useEffect(
        () => (
            document.addEventListener('keydown', h, !0),
            () => {
                document.removeEventListener('keydown', h, !0);
            }
        ),
        [n, h]
    );
    let m = '' !== u.trim(),
        g = d.length > 20,
        O = { count: g ? 20 : d.length };
    return (0, i.jsxs)('div', {
        className: T.recentChannelsMenu,
        children: [
            (0, i.jsx)('div', {
                className: T.searchBarContainer,
                children: (0, i.jsx)(s.E1j, {
                    autoFocus: !0,
                    query: u,
                    size: s.E1j.Sizes.MEDIUM,
                    placeholder: _.NW.string(_.t.UyA6SU),
                    onClear: () => {
                        c('');
                    },
                    onKeyDown: h,
                    onChange: (e) => {
                        c(e);
                    },
                    className: T.searchBar,
                    inputProps: { 'aria-label': _.NW.string(_.t.UyA6SU) }
                })
            }),
            m
                ? (0, i.jsx)(V, {
                      sectionHeader: g ? _.NW.format(_.t.qdXiQ0, O) : _.NW.format(_.t['Aq+8wM'], O),
                      channelIds: d
                          .map((e) => {
                              let { channel: t } = e;
                              return t.id;
                          })
                          .slice(0, 20),
                      hasQuery: m,
                      query: u,
                      currentVoiceChannel: t,
                      onSelect: f
                  })
                : (0, i.jsx)(z, {
                      searchQuery: u,
                      currentVoiceChannel: t,
                      onSelect: f
                  })
        ]
    });
}
