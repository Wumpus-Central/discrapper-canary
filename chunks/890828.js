n.d(t, { Z: () => G }), n(13667), n(390547), n(47120), n(230036), n(566702), n(653041), n(86693), n(536091);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(933557),
    u = n(471445),
    d = n(114487),
    p = n(686546),
    h = n(318374),
    f = n(473403),
    m = n(99214),
    g = n(46145),
    y = n(886118),
    O = n(301801),
    v = n(814443),
    b = n(752048),
    _ = n(592125),
    E = n(984933),
    x = n(430824),
    I = n(496675),
    j = n(699516),
    C = n(594174),
    S = n(979651),
    N = n(823379),
    Z = n(136015),
    w = n(981631),
    P = n(388032),
    T = n(688095);
let k = (e) => [
        e.userId,
        ...(function (e) {
            let t = C.default.getUser(e.userId);
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
    L = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [o] = (0, a.e7)([S.Z], () => [S.Z.getVoiceStatesForChannel(t.id), S.Z.getVoiceStateVersion()], [t.id], Z.Q),
            [l, c] = r.useState([]);
        (0, O.BO)(n, Object.values(o), c, A);
        let u = (0, a.Wu)(
                [S.Z, C.default, b.Z, j.Z],
                () =>
                    Object.values(S.Z.getVoiceStatesForChannel(t.id))
                        .map((e) => C.default.getUser(e.userId))
                        .filter(N.lm)
                        .sort((e, t) => {
                            var i, r, o, a;
                            if (l.length > 0 && '' !== n.trim()) {
                                if (l.some((t) => t.userId === e.id)) return -1;
                                if (l.some((e) => e.userId === t.id)) return 1;
                            }
                            return j.Z.isFriend(e.id) && !j.Z.isFriend(t.id) ? -1 : !j.Z.isFriend(e.id) && j.Z.isFriend(t.id) ? 1 : (null != (o = null == (i = b.Z.getUserAffinity(t.id)) ? void 0 : i.vcProbability) ? o : 0) - (null != (a = null == (r = b.Z.getUserAffinity(e.id)) ? void 0 : r.vcProbability) ? a : 0);
                        }),
                [t.id, l, n]
            ),
            d = t.getGuildId(),
            p = Math.max(l.length, 2);
        return null == d
            ? null
            : (0, i.jsx)(h.Z, {
                  users: u,
                  guildId: d,
                  maxUsers: Math.min(p, 4),
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
            o = (0, a.e7)([x.Z], () => x.Z.getGuild(r), [r]);
        if (null == o)
            switch (n.type) {
                case w.d4z.DM:
                    return (0, i.jsx)(f.je, {
                        channel: n,
                        size: s.EFr.SIZE_32
                    });
                case w.d4z.GROUP_DM:
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
                    guildId: o.id,
                    guildName: null != (t = o.name) ? t : P.NW.string(P.t.DmIUGB),
                    guildIcon: o.icon,
                    iconSize: 32
                })
            })
        });
    }),
    W = r.memo(function (e) {
        var t;
        let { channelId: n, isHighlighted: r, currentVoiceChannel: o, onClick: d, onMouseOver: p, onMouseLeave: h, query: f } = e,
            m = (0, a.e7)([_.Z], () => _.Z.getChannel(n), [n]),
            g = null == m ? void 0 : m.getGuildId(),
            y = (0, a.e7)([x.Z], () => x.Z.getGuild(g), [g]),
            O = (0, u.KS)(m, y),
            v = (null == o ? void 0 : o.id) === n,
            b = v ? 'text-positive' : r ? 'interactive-active' : 'text-muted',
            E = v ? s.TVs.colors.TEXT_POSITIVE : r ? s.TVs.colors.INTERACTIVE_ACTIVE : s.TVs.colors.ICON_MUTED;
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
                          children: (0, i.jsx)(R, { channel: m })
                      }),
                      (0, i.jsxs)('div', {
                          className: T.channelItemNameContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: T.channelItemName,
                                  children: [
                                      null != O
                                          ? (0, i.jsx)(O, {
                                                color: E,
                                                size: 'xs',
                                                className: T.channelIcon
                                            })
                                          : void 0,
                                      (0, i.jsx)(s.Text, {
                                          variant: v ? 'text-sm/semibold' : 'text-sm/medium',
                                          color: b,
                                          className: T.channelItemNameText,
                                          children: (0, c.F6)(m, C.default, j.Z)
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
                          children: (0, i.jsx)(L, {
                              channel: m,
                              currentVoiceChannel: o,
                              query: f
                          })
                      })
                  ]
              });
    }),
    M = r.memo(function (e) {
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
                        a && 0 === n.length && (0, i.jsx)(M, { emptyText: P.NW.string(P.t.nxSS09) }),
                        n.map((e) =>
                            (0, i.jsx)(
                                W,
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
function z(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: r } = e,
        { recentVoiceChannelIds: o, friendVoiceChannelIds: c } = (function () {
            let e = (function () {
                    let e = (0, a.Wu)(
                        [C.default, j.Z, v.Z],
                        () =>
                            j.Z.getFriendIDs()
                                .sort((e, t) => {
                                    var n, i, r, o;
                                    return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null != (r = null == (n = v.Z.getUserAffinity(t)) ? void 0 : n.affinity) ? r : 0) - (null != (o = null == (i = v.Z.getUserAffinity(e)) ? void 0 : i.affinity) ? o : 0);
                                })
                                .reduce((e, t) => {
                                    let n = C.default.getUser(t);
                                    return null != n && e.push(n), e;
                                }, []),
                        []
                    );
                    return (0, a.Wu)(
                        [S.Z, _.Z, I.Z],
                        () =>
                            Array.from(
                                e
                                    .map((e) => S.Z.getDiscoverableVoiceStateForUser(e.id))
                                    .reduce((e, t) => {
                                        let n = null == t ? void 0 : t.channelId;
                                        if (null == n) return e;
                                        let i = _.Z.getChannel(n);
                                        return null != i && I.Z.can(w.Plq.CONNECT, i) && e.add(n), e;
                                    }, new Set())
                            ).filter(N.lm),
                        [e]
                    );
                })(),
                t = (0, a.Wu)(
                    [g.Z, _.Z, I.Z],
                    () => {
                        let t = g.Z.getChannelHistory(),
                            n = new Set(e);
                        return Array.from(
                            new Set(
                                t.reduce((e, t) => {
                                    let i = _.Z.getChannel(t);
                                    return null != i && I.Z.can(w.Plq.CONNECT, i) && !n.has(t) && e.push(t), e;
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
                      (0, i.jsx)(V, {
                          sectionHeader: P.NW.string(P.t.lnk2NT),
                          channelIds: o.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: r,
                          scrollable: !1
                      }),
                  c.length > 0 &&
                      (0, i.jsx)(V, {
                          sectionHeader: P.NW.string(P.t['0lvb9P']),
                          channelIds: c.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: r,
                          scrollable: !1
                      })
              ]
          })
        : (0, i.jsx)(M, { emptyText: P.NW.string(P.t['3ET7Aw']) });
}
function U(e) {
    e.stopPropagation();
}
function G(e) {
    var t, n;
    let { currentVoiceChannel: o, onClose: l, onSelect: c } = e,
        u = (0, a.Wu)(
            [x.Z, E.ZP, S.Z, j.Z, I.Z],
            () =>
                Object.values(x.Z.getGuilds())
                    .reduce(
                        (e, t) => [
                            ...e,
                            ...E.ZP.getChannels(t.id)
                                [E.Zb].filter((e) => I.Z.can(w.Plq.VIEW_CHANNEL, e.channel) && I.Z.can(w.Plq.CONNECT, e.channel))
                                .map((e) => {
                                    let { channel: t } = e;
                                    return t;
                                })
                        ],
                        []
                    )
                    .map((e) => ({
                        channel: e,
                        voiceStates: Object.values(S.Z.getVoiceStatesForChannel(e.id)).filter((e) => j.Z.isFriend(e.userId))
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
        _ = r.useMemo(
            () => ({
                onMouseDown: U,
                onMouseMove: U,
                onMouseUp: U,
                onMouseEnter: U,
                onMouseLeave: U
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
        })({ className: T.recentChannelsMenu }, _)),
        (n = n =
            {
                children: [
                    (0, i.jsx)('div', {
                        className: T.searchBarContainer,
                        children: (0, i.jsx)(s.E1j, {
                            autoFocus: !0,
                            query: d,
                            size: s.E1j.Sizes.MEDIUM,
                            placeholder: P.NW.string(P.t.UyA6SU),
                            onClear: () => {
                                p('');
                            },
                            onKeyDown: m,
                            onChange: (e) => {
                                p(e);
                            },
                            className: T.searchBar,
                            inputProps: { 'aria-label': P.NW.string(P.t.UyA6SU) }
                        })
                    }),
                    y
                        ? (0, i.jsx)(V, {
                              sectionHeader: v ? P.NW.format(P.t.qdXiQ0, b) : P.NW.format(P.t['Aq+8wM'], b),
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
                        : (0, i.jsx)(z, {
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
