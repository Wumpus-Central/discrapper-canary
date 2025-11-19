n.d(t, { Z: () => W }), n(361932), n(187205), n(388685), n(642613), n(781311), n(539854), n(472816), n(794429);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(36563),
    c = n(481060),
    u = n(933557),
    d = n(471445),
    h = n(686546),
    p = n(305347),
    f = n(473403),
    m = n(99214),
    g = n(46145),
    y = n(886118),
    O = n(301801),
    v = n(752048),
    E = n(592125),
    b = n(984933),
    _ = n(430824),
    S = n(496675),
    x = n(699516),
    I = n(594174),
    C = n(979651),
    j = n(823379),
    N = n(136015),
    Z = n(981631),
    w = n(388032),
    T = n(89524);
let P = (e) => [
        e.userId,
        ...(function (e) {
            let t = I.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                i = (0, m.e3)(t);
            return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(j.lm)));
        })(e),
    ],
    A = {
        searchType: y.S.FUZZY,
        sortType: y.E.JARO_WINKLER,
        searchStringGenerator: (e) => {
            var t, n;
            let { channel: i, voiceStates: r } = e;
            return [
                i.name,
                i.id,
                i.guild_id,
                null != (n = null == (t = _.Z.getGuild(i.guild_id)) ? void 0 : t.name) ? n : "",
                ...r.flatMap((e) => P(e)),
            ].filter(j.lm);
        },
        throttleMs: 100,
    },
    k = {
        searchType: y.S.FUZZY,
        sortType: y.E.JARO_WINKLER,
        searchStringGenerator: P,
        throttleMs: 100,
    },
    D = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [l] = (0, a.e7)([C.Z], () => [C.Z.getVoiceStatesForChannel(t.id), C.Z.getVoiceStateVersion()], [t.id], N.Q),
            [o, u] = r.useState([]);
        (0, O.BO)(n, Object.values(l), u, k);
        let d = (0, a.Wu)(
                [C.Z, I.default, v.Z, x.Z],
                () =>
                    Object.values(C.Z.getVoiceStatesForChannel(t.id))
                        .map((e) => I.default.getUser(e.userId))
                        .filter(j.lm)
                        .sort((e, t) => {
                            var i, r, l, a;
                            if (o.length > 0 && "" !== n.trim()) {
                                if (o.some((t) => t.userId === e.id)) return -1;
                                if (o.some((e) => e.userId === t.id)) return 1;
                            }
                            return x.Z.isFriend(e.id) && !x.Z.isFriend(t.id)
                                ? -1
                                : !x.Z.isFriend(e.id) && x.Z.isFriend(t.id)
                                  ? 1
                                  : (null != (l = null == (i = v.Z.getUserAffinity(t.id)) ? void 0 : i.vcProbability)
                                        ? l
                                        : 0) -
                                    (null != (a = null == (r = v.Z.getUserAffinity(e.id)) ? void 0 : r.vcProbability)
                                        ? a
                                        : 0);
                        }),
                [t.id, o, n],
            ),
            h = t.getGuildId(),
            p = Math.max(o.length, 2);
        return null == h
            ? null
            : (0, i.jsx)(s.Z, {
                  users: d,
                  guildId: h,
                  maxUsers: Math.min(p, 4),
                  size: c.EFr.SIZE_24,
                  overflowCountClassName: T.overflowCount,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": w.intl.string(w.t.TxqPQR),
              });
    }),
    R = r.memo(function (e) {
        var t;
        let { channel: n } = e,
            r = n.getGuildId(),
            l = (0, a.e7)([_.Z], () => _.Z.getGuild(r), [r]);
        if (null == l)
            switch (n.type) {
                case Z.d4z.DM:
                    return (0, i.jsx)(f.je, {
                        channel: n,
                        size: c.EFr.SIZE_32,
                    });
                case Z.d4z.GROUP_DM:
                    return (0, i.jsx)(f.ge, {
                        channel: n,
                        size: c.EFr.SIZE_32,
                    });
                default:
                    return null;
            }
        return (0, i.jsx)(h.ZP, {
            mask: h.QS.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, i.jsx)("div", {
                className: T.guildIconWrapper,
                children: (0, i.jsx)(p.Ft, {
                    guildId: l.id,
                    guildName: null != (t = l.name) ? t : w.intl.string(w.t.DmIUGK),
                    guildIcon: l.icon,
                    iconSize: 32,
                }),
            }),
        });
    }),
    L = r.memo(function (e) {
        var t;
        let {
                channelId: n,
                isHighlighted: r,
                currentVoiceChannel: l,
                onClick: s,
                onMouseOver: h,
                onMouseLeave: p,
                query: f,
            } = e,
            m = (0, a.e7)([E.Z], () => E.Z.getChannel(n), [n]),
            g = null == m ? void 0 : m.getGuildId(),
            y = (0, a.e7)([_.Z], () => _.Z.getGuild(g), [g]),
            O = (0, d.KS)(m, y),
            v = (null == l ? void 0 : l.id) === n,
            b = v ? "text-feedback-positive" : r ? "interactive-active" : "text-muted",
            S = v ? c.TVs.colors.TEXT_FEEDBACK_POSITIVE : r ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.ICON_MUTED;
        return null == m
            ? null
            : (0, i.jsxs)(c.kL8, {
                  className: o()(T.channelItemContainer, r && T.channelItemHighlighted),
                  "aria-label": m.name,
                  onClick: () => s(n),
                  onMouseOver: () => h(n),
                  onMouseLeave: () => p(n),
                  children: [
                      (0, i.jsx)("div", {
                          className: T.channelItemIcon,
                          children: (0, i.jsx)(R, { channel: m }),
                      }),
                      (0, i.jsxs)("div", {
                          className: T.channelItemNameContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: T.channelItemName,
                                  children: [
                                      null != O
                                          ? (0, i.jsx)(O, {
                                                color: S,
                                                size: "xs",
                                                className: T.channelIcon,
                                            })
                                          : void 0,
                                      (0, i.jsx)(c.Text, {
                                          variant: v ? "text-sm/semibold" : "text-sm/medium",
                                          color: b,
                                          className: T.channelItemNameText,
                                          children: (0, u.F6)(m, I.default, x.Z),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: v ? "text-xs/semibold" : "text-xs/medium",
                                  color: b,
                                  children: null != (t = null == y ? void 0 : y.name) ? t : m.name,
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: T.channelItemAvatars,
                          children: (0, i.jsx)(D, {
                              channel: m,
                              currentVoiceChannel: l,
                              query: f,
                          }),
                      }),
                  ],
              });
    }),
    M = r.memo(function (e) {
        let { emptyText: t } = e;
        return (0, i.jsx)("div", {
            className: T.emptyChannelItem,
            children: (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-primary",
                children: t,
            }),
        });
    }),
    z = r.memo(function (e) {
        let {
                sectionHeader: t,
                channelIds: n,
                currentVoiceChannel: l,
                onSelect: o,
                hasQuery: a,
                query: s,
                scrollable: u = !0,
            } = e,
            [d, h] = r.useState(null),
            p = (e) => {
                h(e);
            },
            f = () => {
                h(null);
            },
            m = u ? c.zJl : "div";
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: T.recentChannelsMenuHeader,
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        children: t,
                    }),
                }),
                (0, i.jsxs)(m, {
                    className: T.channelList,
                    children: [
                        a && 0 === n.length && (0, i.jsx)(M, { emptyText: w.intl.string(w.t.nxSS03) }),
                        n.map((e) =>
                            (0, i.jsx)(
                                L,
                                {
                                    channelId: e,
                                    isHighlighted: e === d,
                                    currentVoiceChannel: l,
                                    onClick: () => {
                                        o(e);
                                    },
                                    onMouseOver: p,
                                    onMouseLeave: f,
                                    query: s,
                                },
                                e,
                            ),
                        ),
                    ],
                }),
            ],
        });
    });
function V(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: r } = e,
        { recentVoiceChannelIds: l, friendVoiceChannelIds: s } = (function () {
            let e = (function () {
                    let e = (0, a.Wu)(
                        [I.default, x.Z, v.Z],
                        () =>
                            x.Z.getFriendIDs()
                                .sort((e, t) => {
                                    var n, i, r, l;
                                    return null == e && null == t
                                        ? 0
                                        : null == e
                                          ? 1
                                          : null == t
                                            ? -1
                                            : (null !=
                                              (r =
                                                  null == (n = v.Z.getUserAffinity(t))
                                                      ? void 0
                                                      : n.communicationProbability)
                                                  ? r
                                                  : 0) -
                                              (null !=
                                              (l =
                                                  null == (i = v.Z.getUserAffinity(e))
                                                      ? void 0
                                                      : i.communicationProbability)
                                                  ? l
                                                  : 0);
                                })
                                .reduce((e, t) => {
                                    let n = I.default.getUser(t);
                                    return null != n && e.push(n), e;
                                }, []),
                        [],
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
                                    }, new Set()),
                            ).filter(j.lm),
                        [e],
                    );
                })(),
                t = (0, a.Wu)([g.Z, E.Z, S.Z], () => {
                    let t = g.Z.getChannelHistory(),
                        n = new Set(e);
                    return Array.from(
                        new Set(
                            t.reduce((e, t) => {
                                let i = E.Z.getChannel(t);
                                return null != i && S.Z.can(Z.Plq.CONNECT, i) && !n.has(t) && e.push(t), e;
                            }, []),
                        ),
                    );
                }, [e]);
            return {
                friendVoiceChannelIds: e,
                recentVoiceChannelIds: t,
            };
        })();
    return l.length > 0 || s.length > 0
        ? (0, i.jsxs)(c.zJl, {
              className: o()(T.channelList, T.channelListWrapper),
              children: [
                  l.length > 0 &&
                      (0, i.jsx)(z, {
                          sectionHeader: w.intl.string(w.t.lnk2NQ),
                          channelIds: l.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => r(e, "recent channel"),
                          scrollable: !1,
                      }),
                  s.length > 0 &&
                      (0, i.jsx)(z, {
                          sectionHeader: w.intl.string(w.t["0lvb9O"]),
                          channelIds: s.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => r(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, i.jsx)(M, { emptyText: w.intl.string(w.t["3ET7Ay"]) });
}
function U(e) {
    e.stopPropagation();
}
function W(e) {
    var t, n;
    let { currentVoiceChannel: l, onClose: o, onSelect: s } = e,
        u = (0, a.Wu)(
            [_.Z, b.ZP, C.Z, x.Z, S.Z],
            () =>
                _.Z.getGuildsArray()
                    .reduce(
                        (e, t) => [
                            ...e,
                            ...b.ZP.getChannels(t.id)
                                [b.Zb].filter(
                                    (e) => S.Z.can(Z.Plq.VIEW_CHANNEL, e.channel) && S.Z.can(Z.Plq.CONNECT, e.channel),
                                )
                                .map((e) => {
                                    let { channel: t } = e;
                                    return t;
                                }),
                        ],
                        [],
                    )
                    .map((e) => ({
                        channel: e,
                        voiceStates: Object.values(C.Z.getVoiceStatesForChannel(e.id)).filter((e) =>
                            x.Z.isFriend(e.userId),
                        ),
                    })),
            [],
        ),
        [d, h] = r.useState(""),
        [p, f] = r.useState([]);
    (0, O.BO)(d, u, f, A);
    let m = r.useCallback(
            (e) => {
                "Escape" === e.key && o();
            },
            [o],
        ),
        g = r.useCallback(
            (e, t) => {
                s(e, t), o();
            },
            [s, o],
        );
    r.useEffect(
        () => (
            document.addEventListener("keydown", m, !0),
            () => {
                document.removeEventListener("keydown", m, !0);
            }
        ),
        [o, m],
    );
    let y = "" !== d.trim(),
        v = p.length > 20,
        E = { count: v ? 20 : p.length },
        I = r.useMemo(
            () => ({
                onMouseDown: U,
                onMouseMove: U,
                onMouseUp: U,
                onMouseEnter: U,
                onMouseLeave: U,
            }),
            [],
        );
    return (0, i.jsxs)(
        "div",
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({ className: T.recentChannelsMenu }, I)),
        (n = n =
            {
                children: [
                    (0, i.jsx)("div", {
                        className: T.searchBarContainer,
                        children: (0, i.jsx)(c.E1j, {
                            autoFocus: !0,
                            query: d,
                            placeholder: w.intl.string(w.t.UyA6ST),
                            onClear: () => {
                                h("");
                            },
                            onKeyDown: m,
                            onChange: (e) => {
                                h(e);
                            },
                            inputProps: { "aria-label": w.intl.string(w.t.UyA6ST) },
                        }),
                    }),
                    y
                        ? (0, i.jsx)(z, {
                              sectionHeader: v ? w.intl.format(w.t.qdXiQ1, E) : w.intl.format(w.t["Aq+8wB"], E),
                              channelIds: p
                                  .map((e) => {
                                      let { channel: t } = e;
                                      return t.id;
                                  })
                                  .slice(0, 20),
                              hasQuery: y,
                              query: d,
                              currentVoiceChannel: l,
                              onSelect: (e) => g(e, "search channel"),
                          })
                        : (0, i.jsx)(V, {
                              searchQuery: d,
                              currentVoiceChannel: l,
                              onSelect: g,
                          }),
                ],
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
        t),
    );
}
