n.d(t, { Z: () => G }), n(361932), n(187205), n(388685), n(642613), n(781311), n(539854), n(472816), n(794429);
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(933557),
    u = n(471445),
    d = n(686546),
    p = n(318374),
    h = n(60034),
    f = n(473403),
    m = n(99214),
    g = n(46145),
    y = n(886118),
    O = n(301801),
    v = n(814443),
    b = n(752048),
    E = n(592125),
    _ = n(984933),
    x = n(430824),
    S = n(496675),
    I = n(699516),
    j = n(594174),
    C = n(979651),
    N = n(823379),
    w = n(136015),
    Z = n(981631),
    P = n(388032),
    T = n(688095);
let k = (e) => [
        e.userId,
        ...(function (e) {
            let t = j.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                i = (0, m.e3)(t);
            return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(N.lm)));
        })(e)
    ],
    D = {
        searchType: y.S.FUZZY,
        sortType: y.E.JARO_WINKLER,
        searchStringGenerator: (e) => {
            var t, n;
            let { channel: i, voiceStates: r } = e;
            return [i.name, i.id, i.guild_id, null != (n = null == (t = x.Z.getGuild(i.guild_id)) ? void 0 : t.name) ? n : '', ...r.flatMap((e) => k(e))].filter(N.lm);
        },
        throttleMs: 100
    },
    A = {
        searchType: y.S.FUZZY,
        sortType: y.E.JARO_WINKLER,
        searchStringGenerator: k,
        throttleMs: 100
    },
    R = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [o] = (0, a.e7)([C.Z], () => [C.Z.getVoiceStatesForChannel(t.id), C.Z.getVoiceStateVersion()], [t.id], w.Q),
            [l, c] = r.useState([]);
        (0, O.BO)(n, Object.values(o), c, A);
        let u = (0, a.Wu)(
                [C.Z, j.default, b.Z, I.Z],
                () =>
                    Object.values(C.Z.getVoiceStatesForChannel(t.id))
                        .map((e) => j.default.getUser(e.userId))
                        .filter(N.lm)
                        .sort((e, t) => {
                            var i, r, o, a;
                            if (l.length > 0 && '' !== n.trim()) {
                                if (l.some((t) => t.userId === e.id)) return -1;
                                if (l.some((e) => e.userId === t.id)) return 1;
                            }
                            return I.Z.isFriend(e.id) && !I.Z.isFriend(t.id) ? -1 : !I.Z.isFriend(e.id) && I.Z.isFriend(t.id) ? 1 : (null != (o = null == (i = b.Z.getUserAffinity(t.id)) ? void 0 : i.vcProbability) ? o : 0) - (null != (a = null == (r = b.Z.getUserAffinity(e.id)) ? void 0 : r.vcProbability) ? a : 0);
                        }),
                [t.id, l, n]
            ),
            d = t.getGuildId(),
            h = Math.max(l.length, 2);
        return null == d
            ? null
            : (0, i.jsx)(p.Z, {
                  users: u,
                  guildId: d,
                  maxUsers: Math.min(h, 4),
                  size: s.EFr.SIZE_24,
                  overflowCountClassName: T.overflowCount,
                  overflowCountVariant: 'text-xs/semibold',
                  disableUserPopout: !0
              });
    }),
    L = r.memo(function (e) {
        var t;
        let { channel: n } = e,
            r = n.getGuildId(),
            o = (0, a.e7)([x.Z], () => x.Z.getGuild(r), [r]);
        if (null == o)
            switch (n.type) {
                case Z.d4z.DM:
                    return (0, i.jsx)(f.je, {
                        channel: n,
                        size: s.EFr.SIZE_32
                    });
                case Z.d4z.GROUP_DM:
                    return (0, i.jsx)(f.ge, {
                        channel: n,
                        size: s.EFr.SIZE_32
                    });
                default:
                    return null;
            }
        return (0, i.jsx)(d.ZP, {
            mask: d.QS.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, i.jsx)('div', {
                className: T.guildIconWrapper,
                children: (0, i.jsx)(h.Ft, {
                    guildId: o.id,
                    guildName: null != (t = o.name) ? t : P.intl.string(P.t.DmIUGB),
                    guildIcon: o.icon,
                    iconSize: 32
                })
            })
        });
    }),
    M = r.memo(function (e) {
        var t;
        let { channelId: n, isHighlighted: r, currentVoiceChannel: o, onClick: d, onMouseOver: p, onMouseLeave: h, query: f } = e,
            m = (0, a.e7)([E.Z], () => E.Z.getChannel(n), [n]),
            g = null == m ? void 0 : m.getGuildId(),
            y = (0, a.e7)([x.Z], () => x.Z.getGuild(g), [g]),
            O = (0, u.KS)(m, y),
            v = (null == o ? void 0 : o.id) === n,
            b = v ? 'text-positive' : r ? 'interactive-active' : 'text-muted',
            _ = v ? s.TVs.colors.TEXT_POSITIVE : r ? s.TVs.colors.INTERACTIVE_ACTIVE : s.TVs.colors.ICON_MUTED;
        return null == m
            ? null
            : (0, i.jsxs)(s.kL8, {
                  className: l()(T.channelItemContainer, r && T.channelItemHighlighted),
                  'aria-label': m.name,
                  onClick: () => d(n),
                  onMouseOver: () => p(n),
                  onMouseLeave: () => h(n),
                  children: [
                      (0, i.jsx)('div', {
                          className: T.channelItemIcon,
                          children: (0, i.jsx)(L, { channel: m })
                      }),
                      (0, i.jsxs)('div', {
                          className: T.channelItemNameContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: T.channelItemName,
                                  children: [
                                      null != O
                                          ? (0, i.jsx)(O, {
                                                color: _,
                                                size: 'xs',
                                                className: T.channelIcon
                                            })
                                          : void 0,
                                      (0, i.jsx)(s.Text, {
                                          variant: v ? 'text-sm/semibold' : 'text-sm/medium',
                                          color: b,
                                          className: T.channelItemNameText,
                                          children: (0, c.F6)(m, j.default, I.Z)
                                      })
                                  ]
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: v ? 'text-xs/semibold' : 'text-xs/medium',
                                  color: b,
                                  children: null != (t = null == y ? void 0 : y.name) ? t : m.name
                              })
                          ]
                      }),
                      (0, i.jsx)('div', {
                          className: T.channelItemAvatars,
                          children: (0, i.jsx)(R, {
                              channel: m,
                              currentVoiceChannel: o,
                              query: f
                          })
                      })
                  ]
              });
    }),
    z = r.memo(function (e) {
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
    U = r.memo(function (e) {
        let { sectionHeader: t, channelIds: n, currentVoiceChannel: o, onSelect: l, hasQuery: a, query: c, scrollable: u = !0 } = e,
            [d, p] = r.useState(null),
            h = (e) => {
                p(e);
            },
            f = () => {
                p(null);
            },
            m = (e) => () => {
                l(e);
            },
            g = u ? s.zJl : 'div';
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
                        a && 0 === n.length && (0, i.jsx)(z, { emptyText: P.intl.string(P.t.nxSS09) }),
                        n.map((e) =>
                            (0, i.jsx)(
                                M,
                                {
                                    channelId: e,
                                    isHighlighted: e === d,
                                    currentVoiceChannel: o,
                                    onClick: m(e),
                                    onMouseOver: h,
                                    onMouseLeave: f,
                                    query: c
                                },
                                e
                            )
                        )
                    ]
                })
            ]
        });
    });
function V(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: r } = e,
        { recentVoiceChannelIds: o, friendVoiceChannelIds: c } = (function () {
            let e = (function () {
                    let e = (0, a.Wu)(
                        [j.default, I.Z, v.Z],
                        () =>
                            I.Z.getFriendIDs()
                                .sort((e, t) => {
                                    var n, i, r, o;
                                    return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null != (r = null == (n = v.Z.getUserAffinity(t)) ? void 0 : n.affinity) ? r : 0) - (null != (o = null == (i = v.Z.getUserAffinity(e)) ? void 0 : i.affinity) ? o : 0);
                                })
                                .reduce((e, t) => {
                                    let n = j.default.getUser(t);
                                    return null != n && e.push(n), e;
                                }, []),
                        []
                    );
                    return (0, a.Wu)(
                        [C.Z, E.Z, S.Z],
                        () =>
                            Array.from(
                                e
                                    .map((e) => C.Z.getDiscoverableVoiceStateForUser(e.id))
                                    .reduce((e, t) => {
                                        let n = null == t ? void 0 : t.channelId;
                                        if (null == n) return e;
                                        let i = E.Z.getChannel(n);
                                        return null != i && S.Z.can(Z.Plq.CONNECT, i) && e.add(n), e;
                                    }, new Set())
                            ).filter(N.lm),
                        [e]
                    );
                })(),
                t = (0, a.Wu)(
                    [g.Z, E.Z, S.Z],
                    () => {
                        let t = g.Z.getChannelHistory(),
                            n = new Set(e);
                        return Array.from(
                            new Set(
                                t.reduce((e, t) => {
                                    let i = E.Z.getChannel(t);
                                    return null != i && S.Z.can(Z.Plq.CONNECT, i) && !n.has(t) && e.push(t), e;
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
    return o.length > 0 || c.length > 0
        ? (0, i.jsxs)(s.zJl, {
              className: l()(T.channelList, T.channelListWrapper),
              children: [
                  o.length > 0 &&
                      (0, i.jsx)(U, {
                          sectionHeader: P.intl.string(P.t.lnk2NT),
                          channelIds: o.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: r,
                          scrollable: !1
                      }),
                  c.length > 0 &&
                      (0, i.jsx)(U, {
                          sectionHeader: P.intl.string(P.t['0lvb9P']),
                          channelIds: c.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: r,
                          scrollable: !1
                      })
              ]
          })
        : (0, i.jsx)(z, { emptyText: P.intl.string(P.t['3ET7Aw']) });
}
function W(e) {
    e.stopPropagation();
}
function G(e) {
    var t, n;
    let { currentVoiceChannel: o, onClose: l, onSelect: c } = e,
        u = (0, a.Wu)(
            [x.Z, _.ZP, C.Z, I.Z, S.Z],
            () =>
                Object.values(x.Z.getGuilds())
                    .reduce(
                        (e, t) => [
                            ...e,
                            ..._.ZP.getChannels(t.id)
                                [_.Zb].filter((e) => S.Z.can(Z.Plq.VIEW_CHANNEL, e.channel) && S.Z.can(Z.Plq.CONNECT, e.channel))
                                .map((e) => {
                                    let { channel: t } = e;
                                    return t;
                                })
                        ],
                        []
                    )
                    .map((e) => ({
                        channel: e,
                        voiceStates: Object.values(C.Z.getVoiceStatesForChannel(e.id)).filter((e) => I.Z.isFriend(e.userId))
                    })),
            []
        ),
        [d, p] = r.useState(''),
        [h, f] = r.useState([]);
    (0, O.BO)(d, u, f, D);
    let m = r.useCallback(
            (e) => {
                'Escape' === e.key && l();
            },
            [l]
        ),
        g = r.useCallback(
            (e) => {
                c(e), l();
            },
            [c, l]
        );
    r.useEffect(
        () => (
            document.addEventListener('keydown', m, !0),
            () => {
                document.removeEventListener('keydown', m, !0);
            }
        ),
        [l, m]
    );
    let y = '' !== d.trim(),
        v = h.length > 20,
        b = { count: v ? 20 : h.length },
        E = r.useMemo(
            () => ({
                onMouseDown: W,
                onMouseMove: W,
                onMouseUp: W,
                onMouseEnter: W,
                onMouseLeave: W
            }),
            []
        );
    return (0, i.jsxs)(
        'div',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({ className: T.recentChannelsMenu }, E)),
        (n = n =
            {
                children: [
                    (0, i.jsx)('div', {
                        className: T.searchBarContainer,
                        children: (0, i.jsx)(s.E1j, {
                            autoFocus: !0,
                            query: d,
                            size: s.E1j.Sizes.MEDIUM,
                            placeholder: P.intl.string(P.t.UyA6SU),
                            onClear: () => {
                                p('');
                            },
                            onKeyDown: m,
                            onChange: (e) => {
                                p(e);
                            },
                            className: T.searchBar,
                            inputProps: { 'aria-label': P.intl.string(P.t.UyA6SU) }
                        })
                    }),
                    y
                        ? (0, i.jsx)(U, {
                              sectionHeader: v ? P.intl.format(P.t.qdXiQ0, b) : P.intl.format(P.t['Aq+8wM'], b),
                              channelIds: h
                                  .map((e) => {
                                      let { channel: t } = e;
                                      return t.id;
                                  })
                                  .slice(0, 20),
                              hasQuery: y,
                              query: d,
                              currentVoiceChannel: o,
                              onSelect: g
                          })
                        : (0, i.jsx)(V, {
                              searchQuery: d,
                              currentVoiceChannel: o,
                              onSelect: g
                          })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
